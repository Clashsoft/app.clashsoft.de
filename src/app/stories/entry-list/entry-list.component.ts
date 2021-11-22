import {Component, OnInit} from '@angular/core';
import {Entry} from '../model/entry';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EntryService} from '../entry.service';
import {debounceTime, startWith, switchMap} from 'rxjs/operators';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {TYPES} from '../model/constants';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss'],
})
export class EntryListComponent implements OnInit {
  entries: Entry[] = [];
  types: string[] = [...TYPES];

  searchFilter$ = new BehaviorSubject<string | undefined>(undefined);

  constructor(
    private entryService: EntryService,
    private router: Router,
    public route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    combineLatest([
      this.route.params,
      this.route.queryParams,
    ]).pipe(
      switchMap(([{story}, {type, q}]) => this.entryService.getAll(story, type, q)),
    ).subscribe(entries => {
      this.entries = entries;
    });

    this.route.params.pipe(
      switchMap(({story}) => this.entryService.getTypes(story)),
    ).subscribe(types => {
      this.types = types;
    });

    this.searchFilter$.pipe(debounceTime(200)).subscribe(q => this.setFilter({q}));
  }

  setFilter(queryParams: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
