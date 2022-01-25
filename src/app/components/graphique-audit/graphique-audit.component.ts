import { Component, OnInit, ViewChild  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
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
  conseiller!:Conseiller;
  clients!:Client[];
  nbClients!:number;
  totalCompteCourrant:number = 0;
  totalCompteEpargne:number=0;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }

    }
  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: this.ListConseillerName,
    datasets: [

      { data: this.listConseillerTotalCompteCourrant, label: 'Compte courrant' },
      { data: this.listConseillerTotalCompteEpargne,label:'Compte Epargne'}
     
    ]
  };
 


  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    console.log(this.barChartData.datasets)
    

    this.chart?.update();
  }

  constructor(private service: IndexDirecteurService) { }

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
      this.ListConseillerName.push(conseiller.nom);
     

    }); 
  
  });

}
  

 
  
 
  
}

  
   