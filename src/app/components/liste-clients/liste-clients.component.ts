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

  @Output() clientId = new EventEmitter<any>();
  @Input() clients!: Client[];

  actualClientId: number = 0;

  compteEpargneActuel! : Compte;
  compteCourrantActuel! : Compte;
  carteActuelle! : Carte;

  fullRegisterClient! : any;

  modifiedClient! : any;

  /*Modification du client form*/
  clientModify : FormGroup = this.fb.group({
    nom :  ['', Validators.required],
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
    this.actualClientId = id;
    this.clientId.emit(id);
    this.setPlaceHolder();
  }

  setPlaceHolder(): void {
    this.clientModify.controls['nom'].setValue(this.clients[this.actualClientId].nom);
    this.clientModify.controls['prenom'].setValue(this.clients[this.actualClientId].prenom);
    this.clientModify.controls['adresse'].setValue(this.clients[this.actualClientId].adresse);
    this.clientModify.controls['codePostal'].setValue(this.clients[this.actualClientId].codePostal);
    this.clientModify.controls['telephone'].setValue(this.clients[this.actualClientId].telephone);

    this.modifiedCompteCourrant.controls['solde'].setValue(this.clients[this.actualClientId].compteCourrant.solde);
    this.modifiedCompteCourrant.controls['numero'].setValue(this.clients[this.actualClientId].compteCourrant.numeroDeCompte);

    this.modifiedCompteEpargne.controls['solde'].setValue(this.clients[this.actualClientId].compteEpargne.solde);
    this.modifiedCompteEpargne.controls['numero'].setValue(this.clients[this.actualClientId].compteEpargne.numeroDeCompte);

    this.modifiedCarte.controls['typeCarte'].setValue(this.clients[this.actualClientId].cartes[0].typeCarte);
    this.modifiedCarte.controls['numero'].setValue(this.clients[this.actualClientId].cartes[0].numero);
  }

  /*Requete service modify client*/
 public formUpdateClient(id: any) {

    this.modifiedClient = {modifClient : this.clientModify.value, modifCompteCourrant: this.modifiedCompteCourrant.value, modifCompteEpargne: this.modifiedCompteEpargne.value, modifCarte : this.modifiedCarte.value};
    console.log(this.modifiedClient)
    this.service.modifyClient(this.modifiedClient , id).subscribe();
  }
  

  /**Requete service ajout d'un client */
 public addClientForm(){
   this.fullRegisterClient = {addClient: this.addClient.value, addCompteCourrant: this.compteCourrantModify.value, addCompteEpargneModify : this.compteEpargneModify.value, addCarteModify : this.carteModify.value};
    
  this.service.fullRegisterClient(this.fullRegisterClient).subscribe(data=> {
  })
  }
}
