import {Component} from '@angular/core';

@Component({
  selector: 'app-jindosh-riddle',
  templateUrl: './jindosh-riddle.component.html',
  styleUrls: ['./jindosh-riddle.component.scss'],
})
export class JindoshRiddleComponent {
  data = {
    names: [] as string[],
    cities: [] as string[],
    colors: [] as string[],
    drinks: [] as string[],
    heirlooms: [] as string[],
  } as const;

  save(): void {
    localStorage.setItem('jindoshRiddle', JSON.stringify(this.data));
  }

  load(): void {
    this.data = JSON.parse(localStorage.getItem('jindoshRiddle') || '{}');
  }

  reset(): void {
    for (const array of Object.values(this.data)) {
      array.length = 0;
    }
  }
}
