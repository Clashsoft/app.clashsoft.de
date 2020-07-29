import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PasswordBoxComponent} from "./password-box/password-box.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'password-box', component: PasswordBoxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
