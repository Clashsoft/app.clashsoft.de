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
    this.render();
  }

  itemsChanged(): void {
    this.render();
    this.save();
  }

  private save(): void {
    this.gradingHelperService.saveTab(this.tab);
  }

  private render(): void {
    this.rendered = this.templateService.render(this.tab.section);
  }

  parse(): void {
    const section = this.templateService.parse(this.rendered);
    this.templateService.merge(section, this.tab.section);
    this.render();
    this.save();
  }

  copySuccess() {
    this.copyText = 'Copied!';
    setTimeout(() => this.copyText = 'Copy', 1000);
  }
}
