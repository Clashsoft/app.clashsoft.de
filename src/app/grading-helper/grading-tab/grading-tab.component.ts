import {Component, Input, OnInit} from '@angular/core';
import {GradingTab} from '../model/grading-tab';
import {GradingHelperService} from '../grading-helper.service';
import {TemplateService} from '../template.service';

@Component({
  selector: 'app-grading-tab',
  templateUrl: './grading-tab.component.html',
  styleUrls: ['./grading-tab.component.scss'],
})
export class GradingTabComponent implements OnInit {
  @Input() tab: GradingTab;
  rendered: string;

  copyText = 'Copy';

  constructor(
    private templateService: TemplateService,
    private gradingHelperService: GradingHelperService,
  ) {
  }

  ngOnInit(): void {
  }

  save() {
    this.gradingHelperService.saveTab(this.tab);
    this.rendered = this.templateService.render(this.tab.section);
  }

  copySuccess() {
    this.copyText = 'Copied!';
    setTimeout(() => this.copyText = 'Copy', 1000);
  }
}
