import {Injectable} from '@angular/core';
import {Effect} from './effect';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
        headers: {
          'X-LED-Key': key,
        },
      },
    );
  }

  playEffect(effect: Effect, key?: string): Observable<{}> {
    return this.http.post(environment.apiUrl + '/effect', effect, {
      headers: {
        'X-LED-Key': key,
      },
    });
  }
}
