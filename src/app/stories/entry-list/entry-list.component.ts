import {Component, OnInit} from '@angular/core';
import {Entry} from '../model/entry';
import {ActivatedRoute} from '@angular/router';
import {EntryService} from '../entry.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss'],
})
export class EntryListComponent implements OnInit {
  entries: Entry[] = [];

  constructor(
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
  }
}
