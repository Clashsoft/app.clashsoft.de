import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GradingHelperComponent} from './grading-helper/grading-helper.component';

const routes: Routes = [
  {path: '', component: GradingHelperComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradingHelperRoutingModule {
}
