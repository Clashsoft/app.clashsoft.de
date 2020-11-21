import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SwPush} from '@angular/service-worker';

import * as convert from 'color-convert';

import {environment} from '../../environments/environment';
import {Effect} from './effect';
import {LedStripService} from './led-strip.service';
import {EffectType} from './effect-type';

@Component({
  selector: 'app-led-strip',
  templateUrl: './led-strip.component.html',
  styleUrls: ['./led-strip.component.scss'],
})
export class LedStripComponent implements OnInit {
  effects: EffectType[] = [];

  presets = [
    '#000000',
    '#ffffff',
  ]

  color = '#000000';
  effect?: EffectType;
  message = '';

  submitting = false;

  key?: string;

  constructor(
    private ledStripService: LedStripService,
    private route: ActivatedRoute,
    private swPush: SwPush,
  ) {
    for (let i = 0; i < 360; i += 30) {
      this.presets.push('#' + convert.hsv.hex(i, 100, 100));
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.key = params.key);

    this.ledStripService.getEffects().subscribe(effects => {
      this.effects = effects;
      this.effect = effects[0];
    });

    if (this.swPush.isEnabled && !localStorage.getItem('led-strip/subscriptionId')) {
      this.swPush.requestSubscription({
        serverPublicKey: environment.vapidPublicKey,
      }).then(sub => {
        this.ledStripService.createSubscription(sub, this.key).subscribe(response => {
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
    const effect: Effect = {effect: this.effect.name, message: this.message, ...color};
    this.submitting = true;
    this.ledStripService.playEffect(effect, this.key).subscribe(() => {
      this.submitting = false;
    }, () => {
      this.submitting = false;
    });
  }
}
