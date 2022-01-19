import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class IndexConseillerService {
 
  
  //Récupérer l'id du dit conseiller et l'entrer dynamiquement dans l'url au lieu d'un nombre dans l'url :  ({id})
  readonly API_URL : string = 'http://localhost:8080/conseillers/7';
  readonly CLIENT_URL: string = 'http://localhost:8080/clients/';

  constructor(private http : HttpClient) { }

  getConseillers(): Observable<any> {
    return this.http.get(this.API_URL, httpOptions).pipe(tap((data:any) => {
      console.log(data);
    }))
  }

  deleteClient(id:string) {
    return this.http.delete(`${this.CLIENT_URL}${id}`, httpOptions).subscribe()
    }

  singleClient(id:string) {
    return this.http.get(`${this.CLIENT_URL}${id}`, httpOptions).subscribe((client:any) => {
      return {singleclient : client};
    })
  }
}