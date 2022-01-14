import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

readonly ROOT: string = "http://localhost:8080";
readonly API_URL: string = "http://localhost:8080/auth/signin";

  constructor(private http: HttpClient) {

   }

  login(username: string, password:string): Observable<any> {
    return this.http.post(this.API_URL, {username, password})
  }
}


