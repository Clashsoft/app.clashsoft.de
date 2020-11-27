import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LedStripComponent} from './led-strip/led-strip.component';

const routes: Routes = [
  {path: '', component: LedStripComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedStripRoutingModule {
}
