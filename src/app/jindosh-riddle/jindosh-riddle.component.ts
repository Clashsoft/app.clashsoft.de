import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jindosh-riddle',
  templateUrl: './jindosh-riddle.component.html',
  styleUrls: ['./jindosh-riddle.component.scss'],
})
export class JindoshRiddleComponent implements OnInit {
  names: string[] = Array(5);
  cities: string[] = Array(5);
  colors: string[] = Array(5);
  drinks: string[] = Array(5);
  heirlooms: string[] = Array(5);

  constructor() {
  }

  ngOnInit(): void {
  }

}
