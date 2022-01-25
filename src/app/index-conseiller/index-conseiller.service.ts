import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Client } from '../model/client.model';


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
  readonly API_URL : string = 'http://localhost:8080/conseillers/9';
  readonly CLIENT_URL: string = 'http://localhost:8080/clients/';
  readonly FULL_REGISTER_URL: string = 'http://localhost:8080/clients/fullregister/';

  constructor(private http : HttpClient) { }


    // méthodes conseillers
  getConseillers(): Observable<any> {
    return this.http.get(this.API_URL, httpOptions).pipe(tap((data:any) => {
    }))
  }


  // méthodes clients
  deleteClient(id:string) {
    return this.http.delete(`${this.CLIENT_URL}${id}`, httpOptions).subscribe()
    }

  singleClient(id:string) {
    return this.http.get(`${this.CLIENT_URL}${id}`, httpOptions).subscribe((client:any) => {
      return {singleclient : client};
    })
  }

  allClients() {
    return this.http.get(`${this.CLIENT_URL}`, httpOptions);
  }

  modifyClient(client: Client, id:number) {
    return this.http.put<Client>(`${this.CLIENT_URL}${id}`, client, httpOptions).subscribe()
  }

  fullRegisterClient(nom: string, prenom: string, adresse: string, codePostal: number, telephone: string, numeroCompteCourrant: number, 
    soldeCompteCourrant: number, soldeCompteEpargne: number, numeroCompteEpargne: number, numeroDeCarte: string, typeDeCarte: string) {
      return this.http.post(`${this.FULL_REGISTER_URL}`, {nom, prenom, adresse, codePostal, telephone, numeroCompteCourrant, 
        soldeCompteCourrant, soldeCompteEpargne, numeroCompteEpargne, numeroDeCarte, typeDeCarte}, httpOptions);
  }
}