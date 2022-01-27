import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth:boolean= false;

readonly ROOT: string = "http://localhost:8080";
readonly API_URL: string = "http://localhost:8080/auth/signin";

  constructor(private http: HttpClient,  private router: Router) {
   }

  login(username: string, password:string): Observable<any> {
    this.isAuth=true;
    return this.http.post(this.API_URL, {username, password})
  }

  logOut(){
    localStorage.clear();
    this.isAuth = false;
    this.router.navigate(['/login'])
  }
}


