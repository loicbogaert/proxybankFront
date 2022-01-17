import { Component, OnInit } from '@angular/core';
import { IndexDirecteurService } from './index-directeur.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Agence } from '../model/agence.model';
import { Conseiller } from '../model/conseiller.model';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-index-directeur',
  templateUrl: './index-directeur.component.html',
  styleUrls: ['./index-directeur.component.css']
})
export class IndexDirecteurComponent implements OnInit {
  
 id:number=0;
 agenceName:string='';
 listConseiller!:Conseiller[] ;
 clients!:Client[];
 nbClients!:number;
 

    
   
   
   //listConseil:any = this.myAgence.listConseiller;
  constructor(private service: IndexDirecteurService,) { 
   
  }
  
  
  
  ngOnInit(): void {

     this.service.getAgence().subscribe((agence:any)=>{
       console.log(agence)
       //TODO :  agence.listConseiller[index].clients => pour alimenter la liste
     this.listConseiller = agence.listConseiller
     
     this.clients = agence.listConseiller.clients;
    
    this.nbClients = agence.listConseiller.clients;
    console.log(this.nbClients);
     this.id = agence.id;
     this.agenceName =agence.agenceName
     console.log(this.listConseiller);
    
 
      
    });
 

  
  }
 
}
