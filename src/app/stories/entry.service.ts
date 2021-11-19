import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreateEntryDto, Entry} from './model/entry';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(story: string, search?: string): Observable<Entry[]> {
    return this.http.get<Entry[]>(`${environment.storyApiUrl}/stories/${story}/entries`, {
      params: search ? {search} : {},
    });
  }

  create(story: string, dto: CreateEntryDto): Observable<Entry> {
    return this.http.post<Entry>(`${environment.storyApiUrl}/stories/${story}/entries`, dto);
  }
}
