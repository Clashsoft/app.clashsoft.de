import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MailtoRoutingModule} from './mailto-routing.module';
import {MailtoComponent} from './mailto/mailto.component';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MailtoComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        MailtoRoutingModule,
        NgbTooltipModule,
    ],
})
export class MailtoModule {
}
