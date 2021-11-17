import {Component, OnInit} from '@angular/core';
import {Event, Reference} from '../model/event';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';
import {switchMap} from 'rxjs/operators';

const testus: Reference = {type: 'character', id: '0', name: 'Testus'};
const sword: Reference = {type: 'item', id: '1', name: 'Sword of Swiftness'};
const testina: Reference = {type: 'character', id: '2', name: 'Testina'};
const library: Reference = {type: 'location', id: '3', name: 'The Library'};

const references = [
  testus,
  sword,
  testina,
  library,
];

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  readonly colors: Record<string, string> = {
    character: 'primary',
    item: 'warning',
    location: 'success',
  };

  timeline: Event[] = [];

  date = new Date().toISOString().substring(0, 10);
  time = "12:00";
  description = '';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({story}) => this.eventService.getAll(story)),
    ).subscribe(events => {
      this.timeline = events;
    });
  }

  isReference(item: string | Reference): item is Reference {
    return typeof item !== 'string';
  }

  updateTags() {
    const newText = this.description.replace(/\[\[(.*?)(?:\|(.*?))?]]/g, (text, fullName, name) => {
      const reference = references.find(r => r.name === fullName);
      if (!reference) {
        return text;
      }

      const cssClass = this.colors[reference.type];
      return `<span contenteditable="false" class="alert alert-${cssClass} p-0" data-reference="${reference.type}" data-id="${reference.id}">${name || fullName}</span>`;
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
