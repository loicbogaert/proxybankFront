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
  readonly VIREMENT_URL: string = 'http://localhost:8080/virement'

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

  modifyClient(clientObjet: any, id:number) {
    const obj = {
      nom: clientObjet.addClient.nom,
      prenom:clientObjet.addClient.prenom,
      adresse:clientObjet.addClient.adresse,
      telephone:clientObjet.addClient.telephone,
      codePostal:clientObjet.addClient.codePostal,
      numeroCompteCourrant:clientObjet.addCompteCourrant.numero, 
      soldeCompteCourrant:clientObjet.addCompteCourrant.solde, 
      soldeCompteEpargne:clientObjet.addCompteEpargneModify.solde, 
      numeroCompteEpargne:clientObjet.addCompteEpargneModify.numero, 
      numeroDeCarte:clientObjet.addCarteModify.numero, 
      typeDeCarte:clientObjet.addCarteModify.typeCarte
    }

    return this.http.put<Client>(`${this.CLIENT_URL}${id}`, obj, httpOptions).subscribe()
  }


  fullRegisterClient(clientObjet : any) {
    const obj = {
    nom: clientObjet.addClient.nom,
    prenom:clientObjet.addClient.prenom,
    adresse:clientObjet.addClient.adresse,
    telephone:clientObjet.addClient.telephone,
    codePostal:clientObjet.addClient.codePostal,
    numeroCompteCourrant:clientObjet.addCompteCourrant.numero, 
    soldeCompteCourrant:clientObjet.addCompteCourrant.solde, 
    soldeCompteEpargne:clientObjet.addCompteEpargneModify.solde, 
    numeroCompteEpargne:clientObjet.addCompteEpargneModify.numero, 
    numeroDeCarte:clientObjet.addCarteModify.numero, 
    typeDeCarte:clientObjet.addCarteModify.typeCarte
    }
      return this.http.post<any>(`${this.FULL_REGISTER_URL}`, obj, httpOptions);
  }

  virement(montant: number ,idEmetteur : number, idRecepteur: number) {
    console.log({montant, idEmetteur, idRecepteur})
    return this.http.put<any>(`${this.VIREMENT_URL}`, {montant, idEmetteur, idRecepteur}, httpOptions);
  }
}