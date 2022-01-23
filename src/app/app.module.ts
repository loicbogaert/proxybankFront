import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexConseillerComponent } from './index-conseiller/index-conseiller.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JwtInterceptor } from './_helpers/jwt-interceptors';
import { IndexDirecteurComponent } from './index-directeur/index-directeur.component';
import { TableauConseillerComponent } from './components/tableau-conseiller/tableau-conseiller.component';
import { EmployeNeededComponent } from './components/employe-needed/employe-needed.component';
import { AdminComponent } from './admin/admin.component';
import { CreateAgenceComponent } from './admin/create-agence/create-agence.component';
import { TransferEmployeeComponent } from './admin/transfer-employee/transfer-employee.component';
import { AssociationDirectorBankComponent } from './admin/association-director-bank/association-director-bank.component';
import { AgencesComponent } from './admin/agences/agences.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexConseillerComponent,
    LoginComponent,
    SignupComponent,
    IndexDirecteurComponent,
    TableauConseillerComponent,
    EmployeNeededComponent,
    AdminComponent,
    CreateAgenceComponent,
    TransferEmployeeComponent,
    AssociationDirectorBankComponent,
    AgencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
