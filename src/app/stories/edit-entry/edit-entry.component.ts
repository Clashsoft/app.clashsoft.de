import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CreateEntryDto, Entry} from '../model/entry';
import {EntryService} from '../entry.service';
import {TYPES} from '../model/constants';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.scss'],
})
export class EditEntryComponent implements OnInit {
  readonly types = TYPES;

  entry: Entry | CreateEntryDto = {
    type: '',
    name: '',
    description: '',
    properties: {},
  };
  properties: [string, string][] = [];

  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({story, entry}) => story ? this.entryService.get(story, entry) : of({
        type: '',
        name: '',
        description: '',
        properties: {},
      })),
    ).subscribe(entry => {
      this.entry = entry;
      this.properties = Object.entries(entry.properties);
    });
  }

  save() {
    const {story} = this.route.snapshot.params;
    this.entry.properties = {};
    for (const [key, value] of this.properties) {
      if (key) {
        this.entry.properties[key] = value;
      }
    }
    const op = '_id' in this.entry
      ? this.entryService.update(story, this.entry._id, this.entry)
      : this.entryService.create(story, this.entry)
    ;
    op.subscribe(entry => {
      this.router.navigate(['/stories', story, 'entries']);
    });
  }

  addProperty() {
    this.properties.push(['', '']);
  }
}
