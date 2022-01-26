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

  /*Modification du client form*/
  clientModify : FormGroup = this.fb.group({
    nom :  ["", Validators.required],
    prenom :   ["", Validators.required], 
    adresse :   ["", Validators.required], 
    codePostal :  ["", Validators.required], 
    telephone :   ["", Validators.required], 
  })

  modifiedCompteCourrant : FormGroup = this.fb.group({
    numero :   ['', Validators.required], 
    solde :   ['', Validators.required], 
  })

  modifiedCompteEpargne : FormGroup = this.fb.group({
    numero :   ['', Validators.required], 
    solde :   ['', Validators.required], 
  })

  modifiedCarte : FormGroup = this.fb.group({
    numero :   ['', Validators.required], 
    typeCarte :   ['', Validators.required], 
  })


  /**Ajout du client form*/
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
  modifiedClient! : any;

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

  /*Requete service modify client*/
 public formUpdateClient(id: any) {
    this.modifiedClient = {modifClient : this.clientModify.value, modifCompteCourrant: this.modifiedCompteCourrant.value, modifCompteEpargne: this.modifiedCompteEpargne, modifCarte : this.modifiedCarte};
    this.service.modifyClient(this.modifiedClient , id);
  }
  

  /**Requete service ajout d'un client */
 public addClientForm(){
   this.fullRegisterClient = {addClient: this.addClient.value, addCompteCourrant: this.compteCourrantModify.value, addCompteEpargneModify : this.compteEpargneModify.value, addCarteModify : this.carteModify.value};
    
  this.service.fullRegisterClient(this.fullRegisterClient).subscribe(data=> {
  })
  }
}
