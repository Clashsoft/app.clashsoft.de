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
import {Payday2SecretComponent} from './payday2-secret/payday2-secret.component';
import {NgBootstrapDarkmodeModule} from 'ng-bootstrap-darkmode';
import {MultiTimerComponent} from './multi-timer/multi-timer.component';
import {RangePipe} from './multi-timer/range.pipe';
import {DurationPipe} from './multi-timer/duration.pipe';
import {AppCardComponent} from './app-card/app-card.component';
import {JindoshRiddleModule} from './jindosh-riddle/jindosh-riddle.module';
import {LedStripComponent} from './led-strip/led-strip.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordBoxComponent,
    MailtoComponent,
    Payday2SecretComponent,
    MultiTimerComponent,
    RangePipe,
    DurationPipe,
    AppCardComponent,
    LedStripComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule,
    NgbModule,
    NgBootstrapDarkmodeModule,
    JindoshRiddleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
