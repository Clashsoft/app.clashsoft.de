import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PasswordBoxComponent} from "./password-box/password-box.component";
import {MailtoComponent} from "./mailto/mailto.component";
import {Payday2SecretComponent} from "./payday2-secret/payday2-secret/payday2-secret.component";
import {MultiTimerComponent} from './multi-timer/multi-timer/multi-timer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'password-box', component: PasswordBoxComponent},
  {path: 'mailto', component: MailtoComponent},
  {path: 'payday2-secret', component: Payday2SecretComponent},
  {path: 'jindosh-riddle', loadChildren: () => import('./jindosh-riddle/jindosh-riddle.module').then(it => it.JindoshRiddleModule)},
  {path: 'multi-timer', component: MultiTimerComponent},
  {path: 'led-strip', loadChildren: () => import('./led-strip/led-strip.module').then(it => it.LedStripModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
