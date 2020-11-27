import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LedStripRoutingModule} from './led-strip-routing.module';
import {LedStripComponent} from './led-strip/led-strip.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LedStripComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LedStripRoutingModule,
  ],
})
export class LedStripModule {
}
