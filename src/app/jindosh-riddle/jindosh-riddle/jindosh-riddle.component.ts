import {Component} from '@angular/core';

const properties = ['names', 'cities', 'colors', 'drinks', 'heirlooms'];

@Component({
  selector: 'app-jindosh-riddle',
  templateUrl: './jindosh-riddle.component.html',
  styleUrls: ['./jindosh-riddle.component.scss'],
})
export class JindoshRiddleComponent {
  names: string[] = [];
  cities: string[] = [];
  colors: string[] = [];
  drinks: string[] = [];
  heirlooms: string[] = [];

  save(): void {
    const data = {};
    for (const property of properties) {
      data[property] = this[property];
    }

    localStorage.setItem('jindoshRiddle', JSON.stringify(data));
  }

  load(): void {
    const data = JSON.parse(localStorage.getItem('jindoshRiddle') || '{}');
    for (const property of properties) {
      this[property] = data[property];
    }
  }

  reset(): void {
    for (const property of properties) {
      this[property].length = 0;
    }
  }
}
