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
  standalone: false,
})
export class TimelineComponent implements OnInit {
  readonly colors = COLORS;

  timeline: Event[] = [];
  entries: Entry[] = [];

  editing?: string;

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

  delete(event: Event) {
    if (!confirm('Are you sure you want to delete this event? This cannot be undone.')) {
      return;
    }

    this.eventService.delete(event.story, event._id).subscribe(() => {
      const index = this.timeline.indexOf(event);
      if (index >= 0) {
        this.timeline.splice(index, 1);
      }
    })
  }
}
