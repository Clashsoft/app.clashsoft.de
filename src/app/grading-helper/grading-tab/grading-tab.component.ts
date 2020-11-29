import {Component, Input, OnInit} from '@angular/core';
import {GradingTab} from '../model/grading-tab';
import {GradingHelperService} from '../grading-helper.service';

@Component({
  selector: 'app-grading-tab',
  templateUrl: './grading-tab.component.html',
  styleUrls: ['./grading-tab.component.scss'],
})
export class GradingTabComponent implements OnInit {
  @Input() tab: GradingTab;

  constructor(
    private gradingHelperService: GradingHelperService,
  ) {
  }

  ngOnInit(): void {
  }

  save() {
    this.gradingHelperService.saveTab(this.tab);
  }
}
