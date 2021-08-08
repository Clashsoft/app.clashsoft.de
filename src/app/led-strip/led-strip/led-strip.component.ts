import {AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SwPush} from '@angular/service-worker';

import {environment} from '../../../environments/environment';
import {Effect} from '../model/effect';
import {LedStripService} from '../led-strip.service';
import {EffectType} from '../model/effect-type';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PlayEvent} from '../model/play-event';
import {map, switchMap, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-led-strip',
  templateUrl: './led-strip.component.html',
  styleUrls: ['./led-strip.component.scss'],
})
export class LedStripComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('keyModal') keyModal!: TemplateRef<any>;

  effects: EffectType[] = [];

  presets = [
    '#000000',
    '#ffffff',
    '#ff0000',
    '#ff8000',
    '#ffff00',
    '#80ff00',
    '#00ff00',
    '#00ff80',
    '#00ffff',
    '#0080ff',
    '#0000ff',
    '#8000ff',
    '#ff00ff',
    '#ff0080',
  ];

  color = '#000000';
  effect?: EffectType;
  message = '';

  submitting = false;
  error?: string;

  key?: string;

  events: PlayEvent[] = [];
  eventSubscription?: Subscription;

  constructor(
    private ledStripService: LedStripService,
    private route: ActivatedRoute,
    private swPush: SwPush,
    private modalService: NgbModal,
  ) {
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
    }, error => {
      this.error = 'Failed to load effects: ' + error.message;
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
      this.eventSubscription = this.swPush.messages.subscribe((message: {event?: PlayEvent}) => {
        if (!message.event) {
          return;
        }

        this.events.unshift(message.event);
        if (this.events.length > 10) {
          this.events.length = 10;
        }
      });
    }
  }

  ngAfterViewInit(): void {
    if (!this.key) {
      this.modalService.open(this.keyModal, {ariaLabelledBy: 'key-modal-title'});
    }
  }

  ngOnDestroy(): void {
    this.eventSubscription?.unsubscribe();
  }

  private getColor(): { r: number, g: number, b: number; } {
    return {
      r: parseInt(this.color.substring(1, 3), 16),
      g: parseInt(this.color.substring(3, 5), 16),
      b: parseInt(this.color.substring(5, 7), 16),
    };
  }

  submit(): void {
    if (!this.effect) {
      return;
    }

    const color = this.getColor();
    const effect: Effect = {effect: this.effect.id, message: this.message, ...color};
    this.submitting = true;
    this.ledStripService.playEffect(effect, this.key).subscribe(() => {
      this.submitting = false;
      this.error = undefined;
    }, err => {
      this.submitting = false;
      this.error = 'Failed to play animation: ' + err.message;
    });
  }

  saveKey(): void {
    if (!this.key) {
      return;
    }
    localStorage.setItem('led-strip/key', this.key);
  }
}
