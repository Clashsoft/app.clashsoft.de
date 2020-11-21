import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

import {environment} from '../../environments/environment';

import * as convert from 'color-convert';
import {SwPush} from '@angular/service-worker';

@Component({
  selector: 'app-led-strip',
  templateUrl: './led-strip.component.html',
  styleUrls: ['./led-strip.component.scss'],
})
export class LedStripComponent implements OnInit {
  effects = {
    set: {name: 'Set'},
    wipe: {name: 'Wipe'},
    theaterChase: {name: 'Theater Chase'},
    rainbow: {name: 'Rainbow'},
    rainbowCycle: {name: 'Rainbow Cycle'},
    theaterChaseRainbow: {name: 'Theater Chase Rainbow'},
    snake: {name: 'Snake'},
  };

  presets = [
    '#000000',
    '#ffffff',
  ]

  color = '#000000';
  effect = 'set';
  message = '';

  submitting = false;

  key?: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private swPush: SwPush,
  ) {
    for (let i = 0; i < 360; i += 30) {
      this.presets.push('#' + convert.hsv.hex(i, 100, 100));
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.key = params.key);

    if (this.swPush.isEnabled && !localStorage.getItem('led-strip/subscriptionId')) {
      this.swPush.requestSubscription({
        serverPublicKey: environment.vapidPublicKey,
      }).then(sub => {
        this.http.post<{id?: any}>(environment.apiUrl + '/subscriptions',
          {
            subscriptionInfo: sub,
          },
          {
            headers: {
              'X-LED-Key': this.key,
            },
          },
        ).subscribe(response => {
          if (response.id) {
            localStorage.setItem('led-strip/subscriptionId', '' + response.id);
          }
        });
      });
    }
  }

  private getColor(): { r: number, g: number, b: number; } {
    return {
      r: parseInt(this.color.substring(1, 3), 16),
      g: parseInt(this.color.substring(3, 5), 16),
      b: parseInt(this.color.substring(5, 7), 16),
    };
  }

  submit() {
    const color = this.getColor();
    const body = {effect: this.effect, message: this.message, ...color};
    this.submitting = true;
    this.http.post(environment.apiUrl + '/effect', body, {
      headers: {
        'X-LED-Key': this.key,
      },
    }).subscribe(() => {
      this.submitting = false;
    }, () => {
      this.submitting = false;
    });
  }
}
