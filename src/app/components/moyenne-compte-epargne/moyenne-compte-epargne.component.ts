import { Component, OnInit } from '@angular/core';
import { IndexDirecteurService } from 'src/app/index-directeur/index-directeur.service';
import { Conseiller } from 'src/app/model/conseiller.model';

@Component({
  selector: 'app-moyenne-compte-epargne',
  templateUrl: './moyenne-compte-epargne.component.html',
  styleUrls: ['./moyenne-compte-epargne.component.css']
})
export class MoyenneCompteEpargneComponent implements OnInit {
  listConseiller!:Conseiller[] ;
  nbClient:number=0;
 totalCompteEpargne:number=0;
 moyenneCompteEpargne:number=0;
  nbConseiller:number=0;
  constructor(private service: IndexDirecteurService) { }

  ngOnInit(): void {
    let i = 0
    this.service.getAgence().subscribe((agence:any)=>{
      // console.log(agence)
       this.listConseiller = agence.listConseiller
       this.nbConseiller = agence.listConseiller.length;
       this.listConseiller.forEach(el => {
         el.clients.forEach(client =>{
           i++
           this.totalCompteEpargne=client.compteEpargne.solde;
     })  
   }); 
   this.nbClient = i
   this.moyenneCompteEpargne=(this.totalCompteEpargne/i);
   });
  }

}
