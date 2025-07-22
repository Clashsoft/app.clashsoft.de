import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreateEntryDto, Entry, UpdateEntryDto} from './model/entry';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(story: string, type?: string, search?: string): Observable<Entry[]> {
    const params: Record<string, string> = {};
    if (type) {
      params.type = type
    }
    if (search) {
      params.search = search;
    }
    return this.http.get<Entry[]>(`${environment.storyApiUrl}/stories/${story}/entries`, {params});
  }

  getTypes(story: string): Observable<string[]> {
    return this.http.get<string[]>(`${environment.storyApiUrl}/stories/${story}/entries/types`);
  }

  get(story: string, id: string): Observable<Entry> {
    return this.http.get<Entry>(`${environment.storyApiUrl}/stories/${story}/entries/${id}`);
  }

  create(story: string, dto: CreateEntryDto): Observable<Entry> {
    return this.http.post<Entry>(`${environment.storyApiUrl}/stories/${story}/entries`, dto);
  }

  update(story: string, id: string, dto: UpdateEntryDto): Observable<Entry> {
    return this.http.patch<Entry>(`${environment.storyApiUrl}/stories/${story}/entries/${id}`, dto);
  }

  delete(story: string, id: string): Observable<Entry> {
    return this.http.delete<Entry>(`${environment.storyApiUrl}/stories/${story}/entries/${id}`);
  }
}
