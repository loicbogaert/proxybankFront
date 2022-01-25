import { Component, OnInit, ViewChild  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartConfiguration, ChartData, ChartDataset, ChartDatasetProperties, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

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
  dataGraph!:DataGraph;
  listConseiller!:Conseiller[] ;
  ListConseillerName:string[] = [];
  listConseillerTotalCompteCourrant:number[] = [];
  listConseillerTotalCompteEpargne:number[] = []
  moyenneCompteCourrant:number[]=[];
  moyenneCompteEpargne:number[]=[];
  conseiller!:Conseiller;
  clients!:Client[];
  nbClients!:number;
  totalCompteCourrant:number = 0;
  totalCompteEpargne:number=0;
  @ViewChild(BaseChartDirective) 
  chart!: BaseChartDirective | undefined 
  barChartOptions!: ChartOptions 
  barChartType!: ChartType
  barChartLegend:any 
  barChartData!: ChartDataset[]
  barChartLabels!: string[] 

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }


 
  constructor(private service: IndexDirecteurService) {  ;}

  ngOnInit(): void {
    
    this.totalCompteEpargne=0;
    this.service.getAgence().subscribe((agence:any)=>{
      // console.log(agence)
       this.listConseiller = agence.listConseiller
       let i = 0;
   
       this.listConseiller.forEach(conseiller => { 
          
        conseiller.totalCompteCourrant=0;
        conseiller.totalCompteEpargne=0;
        i++;

          conseiller.clients.forEach(client =>{
            this.clients = conseiller.clients;
            conseiller.totalCompteEpargne += client.compteEpargne.solde;
            conseiller.totalCompteCourrant += client.compteCourrant.solde;
      })
      this.listConseillerTotalCompteCourrant.push(conseiller.totalCompteCourrant);
      this.listConseillerTotalCompteEpargne.push(conseiller.totalCompteEpargne);
      this.totalCompteCourrant+=conseiller.totalCompteCourrant;
      this.totalCompteEpargne +=conseiller.totalCompteEpargne
      this.ListConseillerName.push(conseiller.nom);
     

    }); 

    for(let j =0 ; j< this.listConseillerTotalCompteCourrant.length;j++){
      console.log(this.totalCompteCourrant)
      this.moyenneCompteCourrant.push((this.totalCompteCourrant/i+1));
      this.moyenneCompteEpargne.push((this.totalCompteEpargne/i+1));
    }
    this.barChartOptions= {responsive :true};
    this.barChartType = 'bar';
    this.barChartLegend=true;
    this.barChartData=[
      { data:this.moyenneCompteCourrant,label:'Moyenne compte courrant ',type: 'line'},
        { data: this.moyenneCompteEpargne,label:'Moyenne compte épargne',type:'line'},
        { data: this.listConseillerTotalCompteCourrant, label: 'Compte courrant' },
        { data: this.listConseillerTotalCompteEpargne,label:'Compte Epargne'}
    ]
    this.barChartLabels = this.ListConseillerName;
    
  });
   

 
 
 
}
  

 
  
 
  
}

  
   