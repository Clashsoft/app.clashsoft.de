import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PasswordBoxComponent} from "./password-box/password-box.component";
import {MailtoComponent} from "./mailto/mailto.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'password-box', component: PasswordBoxComponent},
  {path: 'mailto', component: MailtoComponent},
  {path: 'payday2-secret', loadChildren: () => import('./payday2-secret/payday2-secret.module').then(it => it.Payday2SecretModule)},
  {path: 'jindosh-riddle', loadChildren: () => import('./jindosh-riddle/jindosh-riddle.module').then(it => it.JindoshRiddleModule)},
  {path: 'multi-timer', loadChildren: () => import('./multi-timer/multi-timer.module').then(it => it.MultiTimerModule)},
  {path: 'led-strip', loadChildren: () => import('./led-strip/led-strip.module').then(it => it.LedStripModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
