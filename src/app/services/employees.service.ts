import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agence } from '../model/agence.model';
import { Conseiller } from '../model/conseiller.model';

const httpOptions= {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
  };
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  conseillers:Conseiller[]=[];
  directeurs: any;
  readonly BASE_URL: string = `${environment.api}`;


  constructor(private http: HttpClient) { }

  public getConseillers():Observable<Conseiller[]> {
    const url = `${this.BASE_URL}conseillers`;
    return this.http.get<Conseiller[]>(url).pipe(map((data:Conseiller[])=>{
      this.conseillers = data;
      return this.conseillers;
    }))
  }

  public getDirecteurs():Observable<any> {
    const url = `${this.BASE_URL}directeurs`;
    return this.http.get<any>(url).pipe(map((data:any)=>{
      this.directeurs = data;
      return this.directeurs;
    }))
  }
}
