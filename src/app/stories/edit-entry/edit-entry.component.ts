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

  customType = false;

  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({story, entry}) => entry ? this.entryService.get(story, entry) : of({
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
    op.subscribe(() => {
      this.router.navigate(['..'], {relativeTo: this.route});
    });
  }

  addProperty() {
    this.properties.push(['', '']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this entry? This cannot be undone.')) {
      return;
    }

    const {story, entry} = this.route.snapshot.params;
    this.entryService.delete(story, entry).subscribe(() => {
      this.router.navigate(['../..'], {relativeTo: this.route});
    });
  }
}
