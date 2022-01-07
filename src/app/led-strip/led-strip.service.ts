import {Injectable} from '@angular/core';
import {Effect} from './model/effect';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EffectType} from './model/effect-type';
import {map} from 'rxjs/operators';
import {PlayEvent} from './model/play-event';

@Injectable({providedIn: 'root'})
export class LedStripService {
  constructor(
    private http: HttpClient,
  ) {
  }

  createSubscription(token: PushSubscription, key?: string): Observable<{ id?: any }> {
    return this.http.post<{ id?: any }>(environment.apiUrl + '/subscriptions',
      {
        subscriptionInfo: token,
      },
      {
        headers: key ? {
          'X-LED-Key': key,
        } : undefined,
      },
    );
  }

  getEffects(): Observable<EffectType[]> {
    return this.http.get<Record<string, Exclude<EffectType, 'id'>>>(environment.apiUrl + '/effects').pipe(map(obj => {
      return Object.entries(obj).map(([id, type]) => ({...type, id}));
    }));
  }

  playEffect(effect: Effect, key?: string): Observable<{}> {
    return this.http.post(environment.apiUrl + '/effect', effect, {
      headers: key ? {
        'X-LED-Key': key,
      } : undefined,
    });
  }

  getLatestEvents(key?: string): Observable<PlayEvent[]> {
    return this.http.get<PlayEvent[]>(environment.apiUrl + '/events', {
      headers: key ? {
        'X-LED-Key': key,
      } : undefined,
    });
  }
}
