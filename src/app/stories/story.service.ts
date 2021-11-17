import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {Story} from './model/story';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<Story[]> {
    const ids: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('stories/')) {
        ids.push(key.substring('stories/'.length));
      }
    }
    return forkJoin(ids.map(id => this.get(id))).pipe(
      map(stories => stories.sort((a, b) => a.title.localeCompare(b.title))),
    );
  }

  get(id: string): Observable<Story> {
    return this.http.get<Story>(`${environment.storyApiUrl}/stories/${id}`);
  }
}
