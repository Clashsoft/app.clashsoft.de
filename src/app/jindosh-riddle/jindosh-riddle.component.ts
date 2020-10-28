import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jindosh-riddle',
  templateUrl: './jindosh-riddle.component.html',
  styleUrls: ['./jindosh-riddle.component.scss'],
})
export class JindoshRiddleComponent implements OnInit {
  names: string[] = [];
  cities: string[] = [];
  colors: string[] = [];
  drinks: string[] = [];
  heirlooms: string[] = [];

  private readonly properties = ['names', 'cities', 'colors', 'drinks', 'heirlooms'];

  constructor() {
  }

  ngOnInit(): void {
  }


  save(): void {
    for (const property of this.properties) {
      localStorage.setItem(`jindosh-riddle/${property}`, this[property].join(','));
    }
  }

  load(): void {
    for (const property of this.properties) {
      this[property] = localStorage.getItem(`jindosh-riddle/${property}`)?.split(',') ?? [];
    }
  }

  reset(): void {
    for (const property of this.properties) {
      this[property].length = 0;
    }
  }
}
