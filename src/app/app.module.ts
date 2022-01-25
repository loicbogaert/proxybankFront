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

import { MoyenneCompteCourrantComponent } from './components/moyenne-compte-courrant/moyenne-compte-courrant.component';
import { MoyenneCompteEpargneComponent } from './components/moyenne-compte-epargne/moyenne-compte-epargne.component';
import { GraphiqueAuditComponent } from './components/graphique-audit/graphique-audit.component';

import { ListeClientsComponent } from './components/liste-clients/liste-clients.component';
import { InfoPersoClientComponent } from './components/info-perso-client/info-perso-client.component';
import { InfoComptesClientComponent } from './components/info-comptes-client/info-comptes-client.component';
import { VirementComponent } from './components/virement/virement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';


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
    AgencesComponent,
    MoyenneCompteCourrantComponent,
    MoyenneCompteEpargneComponent,
    GraphiqueAuditComponent,
    ListeClientsComponent,
    InfoPersoClientComponent,
    InfoComptesClientComponent,
    VirementComponent

  ],
  imports: [
 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule,
   
 
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
