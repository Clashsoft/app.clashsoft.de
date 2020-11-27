import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Payday2SecretComponent} from './payday2-secret/payday2-secret.component';

const routes: Routes = [
  {path: '', component: Payday2SecretComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Payday2SecretRoutingModule {
}
