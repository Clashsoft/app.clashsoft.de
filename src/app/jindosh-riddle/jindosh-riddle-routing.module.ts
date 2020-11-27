import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JindoshRiddleComponent} from './jindosh-riddle/jindosh-riddle.component';

const routes: Routes = [
  {path: '', component: JindoshRiddleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JindoshRiddleRoutingModule {
}
