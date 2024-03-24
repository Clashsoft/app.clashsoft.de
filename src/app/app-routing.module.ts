import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mailto', loadChildren: () => import('./mailto/mailto.module').then(it => it.MailtoModule)},
  {path: 'payday2-secret', loadChildren: () => import('./payday2-secret/payday2-secret.module').then(it => it.Payday2SecretModule)},
  {path: 'jindosh-riddle', loadChildren: () => import('./jindosh-riddle/jindosh-riddle.module').then(it => it.JindoshRiddleModule)},
  {path: 'multi-timer', loadChildren: () => import('./multi-timer/multi-timer.module').then(it => it.MultiTimerModule)},
  {path: 'led-strip', loadChildren: () => import('./led-strip/led-strip.module').then(it => it.LedStripModule)},
  {path: 'grading-helper', loadChildren: () => import('./grading-helper/grading-helper.module').then(it => it.GradingHelperModule)},
  {path: 'stories', loadChildren: () => import('./stories/stories.module').then(it => it.StoriesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
