import {Component, OnInit} from '@angular/core';
import {Entry} from '../model/entry';
import {EntryService} from '../entry.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  standalone: false,
})
export class EntryComponent implements OnInit {
  entry?: Entry;

  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({story, entry}) => this.entryService.get(story, entry)),
    ).subscribe(entry => {
      this.entry = entry;
    });
  }
}
