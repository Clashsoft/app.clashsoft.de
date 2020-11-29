import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

import {GradingHelperRoutingModule} from './grading-helper-routing.module';
import {GradingHelperComponent} from './grading-helper/grading-helper.component';
import {SectionComponent} from './section/section.component';
import {GradingTabComponent} from './grading-tab/grading-tab.component';

@NgModule({
  declarations: [
    GradingHelperComponent,
    SectionComponent,
    GradingTabComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbNavModule,
    GradingHelperRoutingModule,
  ],
})
export class GradingHelperModule {
}
