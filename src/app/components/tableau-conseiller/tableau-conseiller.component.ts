import { Component, OnInit } from '@angular/core';
import { IndexDirecteurService } from 'src/app/index-directeur/index-directeur.service';
import { Agence } from 'src/app/model/agence.model';
import { Conseiller } from 'src/app/model/conseiller.model';
import { Client } from 'src/app/model/client.model';

@Component({
  selector: 'app-tableau-conseiller',
  templateUrl: './tableau-conseiller.component.html',
  styleUrls: ['./tableau-conseiller.component.css']
})
export class TableauConseillerComponent implements OnInit {
  id:number=0;
  agenceName:string='';
  listConseiller!:Conseiller[] ;
  conseiller!:Conseiller;
  
  clients!:Client[];
  nbClients!:number;
  totalCompteCourrant:number = 0;
  totalCompteEpargne:number=0;
  constructor(private service: IndexDirecteurService,) { 
    
  
  }
  
  
  
ngOnInit(): void {
  this.totalCompteEpargne=0;
  
   this.service.getAgence().subscribe((agence:any)=>{
     // console.log(agence)
      this.listConseiller = agence.listConseiller
      let i = 1;
  
      this.listConseiller.forEach(el => {
        
        el.totalCompteCourrant=0;
        el.totalCompteEpargne=0;
    
        i++;
        el.clients.forEach(client =>{
          this.clients = el.clients;
          console.log(this.clients);
          el.totalCompteEpargne += client.compteEpargne.solde;
         el.totalCompteCourrant += client.compteCourrant.solde;
        
         
      

    })
    
  }); 
 
  });

 

}

}