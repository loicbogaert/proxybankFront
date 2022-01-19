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
import { ListeClientsComponent } from './components/liste-clients/liste-clients.component';
import { InfoPersoClientComponent } from './components/info-perso-client/info-perso-client.component';
import { InfoComptesClientComponent } from './components/info-comptes-client/info-comptes-client.component';
import { VirementComponent } from './components/virement/virement.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexConseillerComponent,
    LoginComponent,
    SignupComponent,
    IndexDirecteurComponent,
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
