import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GradingHelperRoutingModule} from './grading-helper-routing.module';
import { GradingHelperComponent } from './grading-helper/grading-helper.component';

@NgModule({
  declarations: [GradingHelperComponent],
  imports: [
    CommonModule,
    GradingHelperRoutingModule,
  ],
})
export class GradingHelperModule {
}
