import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { IndexConseillerService } from '../../index-conseiller/index-conseiller.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compte } from 'src/app/model/compte.model';
import { Carte } from 'src/app/model/carte.model';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {

  clientModify : FormGroup = this.fb.group({
    nom :  ['', Validators.required],
    prenom :   ['', Validators.required], 
    adresse :   ['', Validators.required], 
    codePostal :  ['', Validators.required], 
    telephone :   ['', Validators.required], 
  })

  addClient : FormGroup = this.fb.group ({
    nom :   ['', Validators.required], 
    prenom :   ['', Validators.required], 
    adresse :   ['', Validators.required], 
    codePostal :  ['', Validators.required], 
    telephone :   ['', Validators.required], 
  })

  compteCourrantModify : FormGroup = this.fb.group({
    numero :   ['', Validators.required], 
    solde :   ['', Validators.required], 
  })

  compteEpargneModify : FormGroup = this.fb.group({
    numero :   ['', Validators.required], 
    solde :   ['', Validators.required], 
  })

  carteModify : FormGroup = this.fb.group({
    numero :   ['', Validators.required], 
    typeCarte :   ['', Validators.required], 
  })

  @Output() clientId = new EventEmitter<any>();
  @Input() clients!: Client[];

  actualClientId: number = 0;
  compteEpargneActuel! : Compte;
  compteCourrantActuel! : Compte;
  carteActuelle! : Carte;

  fullRegisterClient! : any;
  modifiedClient! : Client;

  constructor(private service: IndexConseillerService,
              private fb: FormBuilder
    ) { }

  ngOnInit(): void {

  }

  delete(id:any) {
    this.service.deleteClient(id);
  }

  /** Emit index to index-conseiller */
  giveId(id:any): void {
    this.clientId.emit(id);
  }

 public formUpdateClient() {
    //this.clientModify = this.
  }
  

 public addClientForm(){
   this.fullRegisterClient = this.addClient.value, this.compteCourrantModify.value, this.compteEpargneModify.value, this.carteModify.value;

  this.service.fullRegisterClient(this.fullRegisterClient.nom, this.fullRegisterClient.prenom, this.fullRegisterClient.adresse, this.fullRegisterClient.codePostal, this.fullRegisterClient.telephone, this.fullRegisterClient.numeroCompteCourrant, 
    this.fullRegisterClient.soldeCompteCourrant, this.fullRegisterClient.soldeCompteEpargne, this.fullRegisterClient.numeroCompteEpargne, this.carteModify.value.typeCarte, this.carteModify.value.numero).subscribe(data=> {
  })
  }
}
