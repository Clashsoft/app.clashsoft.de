import {Component, Input, OnInit} from '@angular/core';
import {GradingTab} from '../model/grading-tab';

@Component({
  selector: 'app-grading-tab',
  templateUrl: './grading-tab.component.html',
  styleUrls: ['./grading-tab.component.scss'],
})
export class GradingTabComponent implements OnInit {
  @Input() tab: GradingTab;

  constructor() {
  }

  ngOnInit(): void {
  }

}
