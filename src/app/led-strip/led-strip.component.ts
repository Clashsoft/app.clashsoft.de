import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

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
  };

  color = '#000000';
  effect = 'set';

  constructor(
    private http: HttpClient,
  ) {
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
    this.http.post(environment.apiUrl + '/effect', body).subscribe();
  }
}
