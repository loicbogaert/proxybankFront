import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Client } from '../model/client.model';
import { Router } from '@angular/router';


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
 
  readonly API_URL : string = 'http://localhost:8080/conseillers';
  readonly CLIENT_URL: string = 'http://localhost:8080/clients/';
  readonly CLIENT_UPDATE_URL: string = 'http://localhost:8080/clients/updateclient';
  readonly FULL_REGISTER_URL: string = 'http://localhost:8080/clients/fullregister/';
  readonly VIREMENT_URL: string = 'http://localhost:8080/virement'

  adresse:string = this.router.url;
  
  id!:any;

  constructor(private http : HttpClient,
    private router: Router) { }


    // méthodes conseillers
  getConseillers(): Observable<any> {
    this.id = this.adresse.split("/conseiller;id=").pop()
    return this.http.get(`${this.API_URL}/${this.id}`, httpOptions).pipe(tap((data:any) => {
    }))
  }

  addClientToConseiller(idClient:string) {
    this.id = this.adresse.split("/conseiller;id=").pop()
    return this.http.post(`${this.API_URL}/${this.id}/assignerClient?clientId=${idClient}`, httpOptions)
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
    console.log(clientObjet)
    const obj = {
      idClient : id,
      nom: clientObjet.modifClient.nom,
      prenom:clientObjet.modifClient.prenom,
      adresse:clientObjet.modifClient.adresse,
      telephone:clientObjet.modifClient.telephone,
      codePostal:clientObjet.modifClient.codePostal,
      numeroCompteCourrant:clientObjet.modifCompteCourrant.numero, 
      soldeCompteCourrant:clientObjet.modifCompteCourrant.solde, 
      soldeCompteEpargne:clientObjet.modifCompteEpargne.solde, 
      numeroCompteEpargne:clientObjet.modifCompteEpargne.numero, 
      numeroDeCarte:clientObjet.modifCarte.numero, 
      typeDeCarte:clientObjet.modifCarte.typeCarte
    }

    return this.http.put<Client>(`${this.CLIENT_UPDATE_URL}`, obj, httpOptions)
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