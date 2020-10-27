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

  startTime: number;

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
    this.startTime = +new Date();
    this.handle = setInterval(() => this.update(), 0);
  }

  reset() {
    this.active = 0;
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
    const date = +new Date();
    let newTotal = date - this.startTime;
    if (newTotal >= this.duration * 1000) {
      newTotal = this.duration * 1000;
      this.stop();
    }

    const delta = newTotal - this.total;
    this.total = newTotal;

    this.elapsed[this.active] = (this.elapsed[this.active] || 0) + delta;
  }
}
