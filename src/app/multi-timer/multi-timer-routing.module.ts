import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MultiTimerComponent} from './multi-timer/multi-timer.component';

const routes: Routes = [
  {path: '', component: MultiTimerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiTimerRoutingModule {
}
