import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-timer',
  templateUrl: './multi-timer.component.html',
  styleUrls: ['./multi-timer.component.scss']
})
export class MultiTimerComponent implements OnInit {
  count: number;
  duration: number;

  total: number = 0;
  elapsed: number[] = [];
  active: number = 0;

  handle?: number;

  constructor() { }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('multiTimer') || '{}');
    this.count = data.count || 3;
    this.duration = data.duration || 60;
  }

  save(): void {
    const data = {
      count: this.count,
      duration: this.duration,
    };
    localStorage.setItem('multiTimer', JSON.stringify(data));
  }

  start(): void {
    this.handle = setInterval(() => this.update(), 1000);
  }

  reset() {
    this.total = 0;
    this.elapsed = [];
  }

  stop() {
    if (this.handle !== undefined) {
      clearInterval(this.handle);
      this.handle = undefined;
    }
  }

  private update() {
    if (this.total == this.duration) {
      this.stop();
      return;
    }

    this.total++;

    if (!this.elapsed[this.active]) {
      this.elapsed[this.active] = 1;
    } else {
      this.elapsed[this.active]++;
    }
  }
}
