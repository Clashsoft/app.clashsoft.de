import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MailtoRoutingModule} from './mailto-routing.module';
import {MailtoComponent} from './mailto/mailto.component';

@NgModule({
  declarations: [
    MailtoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MailtoRoutingModule,
  ],
})
export class MailtoModule {
}
