import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PasswordBoxComponent} from './password-box/password-box.component';
import {MailtoComponent} from './mailto/mailto.component';
import {Payday2SecretComponent} from './payday2-secret/payday2-secret/payday2-secret.component';
import {NgBootstrapDarkmodeModule} from 'ng-bootstrap-darkmode';
import {AppCardComponent} from './app-card/app-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordBoxComponent,
    MailtoComponent,
    Payday2SecretComponent,
    AppCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule,
    NgbModule,
    NgBootstrapDarkmodeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
