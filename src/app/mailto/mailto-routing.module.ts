import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MailtoComponent} from './mailto/mailto.component';

const routes: Routes = [
  {path: '', component: MailtoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailtoRoutingModule {
}
