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
    nom :  '',
    prenom :  '',
    adresse :  '',
    codePostal : '',
    telephone :  ''
  })

  addClient : FormGroup = this.fb.group ({
    nom :  '',
    prenom :  '',
    adresse :  '',
    codePostal : '',
    telephone :  ''
  })

  compteCourrantModify : FormGroup = this.fb.group({
    numero :  '',
    solde :  ''
  })

  compteEpargneModify : FormGroup = this.fb.group({
    numero :  '',
    solde :  ''
  })

  carteModify : FormGroup = this.fb.group({
    numero :  '',
    typeCarte :  ''
  })

  @Output() clientId = new EventEmitter<any>();
  @Input() clients!: Client[];

  actualClientId: number = 0;
  compteEpargneActuel! : Compte;
  compteCourrantActuel! : Compte;
  carteActuelle! : Carte;

  fullRegisterClient! : any;

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
    console.log(this.clientModify.value)
  }
  

 public addClientForm(){
   this.fullRegisterClient = this.addClient.value, this.compteCourrantModify.value, this.compteEpargneModify.value, this.carteModify.value;
  console.log(this.compteCourrantModify.value, this.compteEpargneModify.value, this.carteModify.value.typeCarte, this.carteModify.value.numero)

  this.service.fullRegisterClient(this.fullRegisterClient.nom, this.fullRegisterClient.prenom, this.fullRegisterClient.adresse, this.fullRegisterClient.codePostal, this.fullRegisterClient.telephone, this.fullRegisterClient.numeroCompteCourrant, 
    this.fullRegisterClient.soldeCompteCourrant, this.fullRegisterClient.soldeCompteEpargne, this.fullRegisterClient.numeroCompteEpargne, this.carteModify.value.typeCarte, this.carteModify.value.numero).subscribe(data=> {
    
      console.log(this.carteModify.value.typeCarte);
      console.log(this.carteModify.value.numero)
    console.log(this.fullRegisterClient.numero, this.fullRegisterClient.typeCarte)
    console.log("l 80", this.fullRegisterClient)
    console.log(this.fullRegisterClient);
  })
  }
}
