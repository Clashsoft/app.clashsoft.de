import {Component, OnInit} from '@angular/core';
import {GradingTab} from '../model/grading-tab';
import {TemplateService} from '../template.service';
import {Section} from '../model/section';
import {GradingHelperService} from '../grading-helper.service';

@Component({
  selector: 'app-grading-helper',
  templateUrl: './grading-helper.component.html',
  styleUrls: ['./grading-helper.component.scss'],
})
export class GradingHelperComponent implements OnInit {
  active = 'template';
  tabs: GradingTab[] = [];
  template: string;
  section?: Section;

  constructor(
    private templateService: TemplateService,
    private gradingHelperService: GradingHelperService,
  ) {
  }

  ngOnInit(): void {
    this.template = this.templateService.savedTemplate;
    this.section = this.templateService.parse(this.template);
    this.tabs = this.gradingHelperService.loadTabs();
  }

  close(event: MouseEvent, toRemove: GradingTab) {
    this.tabs = this.tabs.filter(tab => tab !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.tabs.push({
      id: Math.random().toString(36),
      title: `Student ${this.tabs.length + 1}`,
      section: this.templateService.copy(this.section),
    });
    event.preventDefault();
  }

  saveTemplate(): void {
    this.templateService.savedTemplate = this.template;
    this.section = this.templateService.parse(this.template);
  }
}
