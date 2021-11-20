import {Injectable} from '@angular/core';
import {CreateEventDto, Event, UpdateEventDto} from './model/event';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(story: string, reference?: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.storyApiUrl}/stories/${story}/events`, {
      params: reference ? {reference} : {},
    });
  }

  create(story: string, dto: CreateEventDto): Observable<Event> {
    return this.http.post<Event>(`${environment.storyApiUrl}/stories/${story}/events`, dto);
  }

  update(story: string, event: string, dto: UpdateEventDto): Observable<Event> {
    return this.http.patch<Event>(`${environment.storyApiUrl}/stories/${story}/events/${event}`, dto);
  }

  delete(story: string, event: string): Observable<Event> {
    return this.http.delete<Event>(`${environment.storyApiUrl}/stories/${story}/events/${event}`);
  }
}
