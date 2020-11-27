import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MultiTimerRoutingModule} from './multi-timer-routing.module';
import {MultiTimerComponent} from './multi-timer/multi-timer.component';
import {RangePipe} from './pipes/range.pipe';
import {DurationPipe} from './pipes/duration.pipe';
import {FormsModule} from '@angular/forms';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MultiTimerComponent,
    RangePipe,
    DurationPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbProgressbarModule,
    MultiTimerRoutingModule,
  ],
})
export class MultiTimerModule {
}
