import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PasswordBoxComponent} from "./password-box/password-box.component";
import {MailtoComponent} from "./mailto/mailto.component";
import {Payday2SecretComponent} from "./payday2-secret/payday2-secret.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'password-box', component: PasswordBoxComponent},
  {path: 'mailto', component: MailtoComponent},
  {path: 'payday2-secret', component: Payday2SecretComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
