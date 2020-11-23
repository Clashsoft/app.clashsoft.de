import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SwPush} from '@angular/service-worker';

import * as convert from 'color-convert';

import {environment} from '../../environments/environment';
import {Effect} from './effect';
import {LedStripService} from './led-strip.service';
import {EffectType} from './effect-type';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PlayEvent} from './play-event';
import {map, switchMap, tap} from 'rxjs/operators';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-led-strip',
  templateUrl: './led-strip.component.html',
  styleUrls: ['./led-strip.component.scss'],
})
export class LedStripComponent implements OnInit, AfterViewInit {
  @ViewChild('keyModal') keyModal;

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

  events: PlayEvent[] = [];

  constructor(
    private ledStripService: LedStripService,
    private route: ActivatedRoute,
    private swPush: SwPush,
    private modalService: NgbModal,
  ) {
    for (let i = 0; i < 360; i += 30) {
      this.presets.push('#' + convert.hsv.hex(i, 100, 100));
    }
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      map(params => params.key || localStorage.getItem('led-strip/key')),
      tap(key => this.key = key),
      switchMap(key => this.ledStripService.getLatestEvents(key)),
    ).subscribe(events => {
      this.events = events.reverse();
    });

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

  ngAfterViewInit() {
    if (!this.key) {
      this.modalService.open(this.keyModal, {ariaLabelledBy: 'key-modal-title'});
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
    const effect: Effect = {effect: this.effect.id, message: this.message, ...color};
    this.submitting = true;
    this.ledStripService.playEffect(effect, this.key).subscribe(() => {
      this.submitting = false;
    }, () => {
      this.submitting = false;
    });
  }

  saveKey() {
    localStorage.setItem('led-strip/key', this.key);
  }
}
