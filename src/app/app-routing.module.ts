import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexConseillerComponent } from './index-conseiller/index-conseiller.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexDirecteurComponent } from './index-directeur/index-directeur.component'
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: "", component : LoginComponent},
  {path: "conseiller/:id", component: IndexConseillerComponent},
  {path: "login", component : LoginComponent},
  {path: "signup", component : SignupComponent},
  {path:"directeur",component: IndexDirecteurComponent},
  {path:"admin",component: AdminComponent},
  {path: "**", component : PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
