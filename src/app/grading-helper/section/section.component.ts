import {Component, Input, OnInit} from '@angular/core';

import {Section} from '../model/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() section: Section;
  @Input() depth?: number;

  idPrefix: string;

  constructor() {
    this.idPrefix = `item-${Math.random().toString(36)}-`;
  }

  ngOnInit(): void {
    if (!this.depth) {
      this.depth = 0;
    }
  }
}
