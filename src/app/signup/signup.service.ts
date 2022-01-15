import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  readonly API_URL: string = "http://localhost:8080/auth/signup-as-conseiller";


  constructor(private http: HttpClient) {}

  signup(username: string, password:string, email:string, nom:string, prenom:string) {
    console.log("signal");
    return this.http.post(this.API_URL, {username, password, email, nom, prenom}, { observe: 'response' })
  }
}
