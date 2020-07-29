import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PasswordBoxComponent } from './password-box/password-box.component';
import { MailtoComponent } from './mailto/mailto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordBoxComponent,
    MailtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
