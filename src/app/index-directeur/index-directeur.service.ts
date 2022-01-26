import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Agence } from '../model/agence.model';
import { Router } from '@angular/router';

const httpOptions= {
  headers: new HttpHeaders(
    {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  )
  };
@Injectable({
  providedIn: 'root'
})
export class IndexDirecteurService {
  agence_URL : string = `http://localhost:8080/agences/1/`;
  constructor(private http:HttpClient, private router : Router) { }

  public getAgence():Observable<any> {
    console.log(this.router)

    return this.http.get(this.agence_URL).pipe(map((data:any)=>{

      return {
        id:data.id,
        agenceName:data.agenceName,
        listConseiller:data.listConseiller,
        clients:data.listConseiller.clients
      }
    }))
  }
  }
