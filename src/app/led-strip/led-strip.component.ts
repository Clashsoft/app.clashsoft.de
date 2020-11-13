import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

import * as convert from 'color-convert';

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

  submitting = false;

  constructor(
    private http: HttpClient,
  ) {
    for (let i = 0; i < 360; i += 30) {
      this.presets.push('#' + convert.hsv.hex(i, 100, 100));
    }
  }

  ngOnInit(): void {
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
    const body = {effect: this.effect, ...color};
    this.submitting = true;
    this.http.post(environment.apiUrl + '/effect', body).subscribe(() => {
      this.submitting = false;
    }, () => {
      this.submitting = false;
    });
  }
}
