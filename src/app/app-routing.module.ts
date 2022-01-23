import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexConseillerComponent } from './index-conseiller/index-conseiller.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexDirecteurComponent } from './index-directeur/index-directeur.component'
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: "conseiller", component: IndexConseillerComponent},
  {path: "login", component : LoginComponent},
  {path: "signup", component : SignupComponent},
  {path:"directeur",component: IndexDirecteurComponent},
  {path:"admin",component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
