import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Section} from '../model/section';
import {Item} from '../model/item';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() section: Section;
  @Input() depth?: number;
  @Output() pointsChanged = new EventEmitter<number>();

  idPrefix: string;

  constructor() {
    this.idPrefix = `item-${Math.random().toString(36)}-`;
  }

  ngOnInit(): void {
    if (!this.depth) {
      this.depth = 0;
    }
  }

  setChecked(item: Item, checked: boolean | undefined) {
    let delta: number;
    if (item.checked && !checked) {
      delta = -item.points;
    } else if (!item.checked && checked) {
      delta = +item.points;
    } else {
      delta = 0;
    }
    item.checked = checked;
    this.applyDelta(delta);
  }

  applyDelta(delta: number) {
    if (delta !== 0) {
      this.section.points += delta;
      this.pointsChanged.emit(delta);
    }
  }
}
