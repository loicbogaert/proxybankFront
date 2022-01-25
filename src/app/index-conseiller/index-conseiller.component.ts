import { Component, OnInit, ViewChild } from '@angular/core';
import { ListeClientsComponent } from '../components/liste-clients/liste-clients.component';
import { IndexConseillerService } from '../index-conseiller/index-conseiller.service';
import { Carte } from '../model/carte.model';
import { Client } from '../model/client.model';
import { Compte } from '../model/compte.model';

@Component({
  selector: 'app-index-conseiller',
  templateUrl: './index-conseiller.component.html',
  styleUrls: ['./index-conseiller.component.css']
})
export class IndexConseillerComponent implements OnInit{

  comptes!:Compte[];
  cartes!:Carte[];
  clients!:Client[];
  singleClient!: Client;
  clientId!: number;

  @ViewChild(ListeClientsComponent) ListeClientsComponent:any;

  constructor( private service: IndexConseillerService) {}

  /*Receive index from liste-clients + set attributs*/ 
  getId(id: any):void {
    this.clientId = id;
    this.singleClient = this.clients[this.clientId]
    this.comptes = [this.clients[this.clientId].compteCourrant, this.clients[this.clientId].compteEpargne];
    this.cartes = this.clients[this.clientId].cartes;
    console.log(this.cartes)
  }

  ngOnInit(): void {
    this.service.getConseillers().subscribe((data:any)=>{
      this.clients = data.clients;
    })
  }

  delete(id:any) {
    this.service.deleteClient(id);
  }
}
