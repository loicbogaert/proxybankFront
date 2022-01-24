import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';
import { IndexDirecteurService } from 'src/app/index-directeur/index-directeur.service';
import { Client } from 'src/app/model/client.model';
import { Conseiller } from 'src/app/model/conseiller.model';
import { DataGraph } from 'src/app/model/dataGraph.model';



@Component({
  selector: 'app-graphique-audit',
  templateUrl: './graphique-audit.component.html',
  styleUrls: ['./graphique-audit.component.css']
})
export class GraphiqueAuditComponent implements OnInit {
  
  single!:[DataGraph];
  data!:DataGraph;
  highcharts = Highcharts;

  // options
 


  listConseiller!:Conseiller[] ;
  conseiller!:Conseiller;
  
  clients!:Client[];
  nbClients!:number;
  totalCompteCourrant:number = 0;
  totalCompteEpargne:number=0;


  constructor(private service: IndexDirecteurService) { }

  ngOnInit(): void {
    this.totalCompteEpargne=0;
  
    this.service.getAgence().subscribe((agence:any)=>{
      // console.log(agence)
       this.listConseiller = agence.listConseiller
       let i = 1;
   
       this.listConseiller.forEach(el => { 
         
         this.data.conseillerNom = el.nom +' '+el.prenom;
         
         el.totalCompteCourrant=0;
         el.totalCompteEpargne=0;
     
         i++;
         el.clients.forEach(client =>{
           this.clients = el.clients;
           console.log(this.clients);
           el.totalCompteEpargne += client.compteEpargne.solde;
          el.totalCompteCourrant += client.compteCourrant.solde;
        
       
 
     })
     this.data.totalCompteCourrant = el.totalCompteCourrant;
     this.single.push(this.data);
   }); 
  
   });

  }

}
