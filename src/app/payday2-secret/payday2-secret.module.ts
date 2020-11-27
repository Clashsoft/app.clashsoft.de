import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';

import {Payday2SecretRoutingModule} from './payday2-secret-routing.module';
import {Payday2SecretComponent} from './payday2-secret/payday2-secret.component';

@NgModule({
  declarations: [
    Payday2SecretComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    ClipboardModule,
    Payday2SecretRoutingModule,
  ],
})
export class Payday2SecretModule {
}
