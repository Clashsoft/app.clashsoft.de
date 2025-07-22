import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

interface Event {
  start: number;
  end?: number;
  timer: number;
}

@Component({
  selector: 'app-multi-timer',
  templateUrl: './multi-timer.component.html',
  styleUrls: ['./multi-timer.component.scss'],
  standalone: false,
})
export class MultiTimerComponent implements OnInit {
  count!: number;
  duration!: number;

  total = 0;
  elapsed: number[] = [];
  active = 0;

  currentDate = 0;
  events: Event[] = [];

  timerSub?: Subscription;

  startTime = 0;

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
    this.events.push({timer: this.active, start: this.startTime});
    this.timerSub = interval().subscribe(() => this.update());
  }

  reset(): void {
    this.startTime = 0;
    this.active = 0;
    this.total = 0;
    this.elapsed = [];
    this.events.length = 0;
  }

  stop(): void {
    this.timerSub?.unsubscribe();
    delete this.timerSub;
  }

  select(timer: number): void {
    this.active = timer;

    if (!this.startTime || !this.timerSub || this.total === this.duration * 1000) {
      return;
    }

    const start = +new Date();
    if (this.events.length > 0) {
      this.events[this.events.length - 1].end = start;
    }
    this.events.push({timer, start});
  }

  private update(): void {
    this.currentDate = +new Date();
    let newTotal = this.currentDate - this.startTime;
    if (newTotal >= this.duration * 1000) {
      newTotal = this.duration * 1000;
      this.stop();
    }

    const delta = newTotal - this.total;
    this.total = newTotal;

    this.elapsed[this.active] = (this.elapsed[this.active] || 0) + delta;
  }
}
