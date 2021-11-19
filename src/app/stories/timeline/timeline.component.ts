import {Component, OnInit} from '@angular/core';
import {Event, Reference} from '../model/event';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';
import {debounceTime, distinctUntilChanged, distinctUntilKeyChanged, map, switchMap} from 'rxjs/operators';
import {BehaviorSubject, combineLatest, Observable, OperatorFunction} from 'rxjs';
import {Entry} from '../model/entry';
import {EntryService} from '../entry.service';
import {COLORS} from '../model/constants';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  readonly colors = COLORS;

  timeline: Event[] = [];
  entries: Entry[] = [];

  date = new Date().toISOString().substring(0, 10);
  time = '12:00';
  description = '';

  searchEntry$ = new BehaviorSubject<Entry | undefined>(undefined);

  search: OperatorFunction<string, Entry[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => {
      if (term.length < 2) {
        return [];
      }
      const lowerTerm = term.toLowerCase();
      return this.entries.filter(e => e.name.toLowerCase().includes(lowerTerm));
    }),
  );

  render = (ref: Entry) => ref.name;
  eventId = (index: number, event: Event) => event._id;

  constructor(
    private eventService: EventService,
    private entryService: EntryService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({story}) => this.entryService.getAll(story)),
    ).subscribe(entries => {
      this.entries = entries;
    });

    combineLatest([
      this.route.params,
      this.searchEntry$,
    ]).pipe(
      distinctUntilKeyChanged(1),
      switchMap(([{story}, ref]) => this.eventService.getAll(story, ref?._id)),
    ).subscribe(events => {
      this.timeline = events;
    });
  }

  isReference(item: string | Reference): item is Reference {
    return typeof item !== 'string';
  }

  updateTags() {
    const newText = this.description.replace(/\[\[(.*?)(?:\|(.*?))?]]/g, (text, fullName, name) => {
      const entry = this.entries.find(e => e.name === fullName);
      if (!entry) {
        return text;
      }

      const cssClass = this.colors[entry.type] || 'secondary';
      return `<span contenteditable="false" class="alert alert-${cssClass} p-0" data-reference="${entry.type}" data-id="${entry._id}">${name || fullName}</span>`;
    });

    if (newText === this.description) {
      return;
    }

    this.description = newText;

    setTimeout(() => {
      const selection = window.getSelection();
      const editor = document.getElementById('description-editor');
      if (selection && editor) {
        const range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  }

  addEvent() {
    const description: (string | Reference)[] = [];
    const editor = document.getElementById('description-editor');
    editor!.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        description.push(node.textContent!);
      } else if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLElement) {
        const {reference, id} = node.dataset;
        if (!reference || !id) {
          description.push(node.innerText);
          return;
        }

        const name = node.textContent;
        description.push({
          type: reference as any,
          id: id!,
          name: name!,
        });
      }
    });
    const timestamp = new Date(this.date + ' ' + this.time);
    this.eventService.create(this.route.snapshot.params.story, {
      timestamp,
      description,
    }).subscribe(event => {
      const index = this.timeline.findIndex(e => e.timestamp > event.timestamp);
      if (index < 0) {
        this.timeline.push(event);
      } else {
        this.timeline.splice(index, 0, event);
      }
    });
  }
}
