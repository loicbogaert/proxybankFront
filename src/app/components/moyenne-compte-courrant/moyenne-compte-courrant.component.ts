import { Component, OnInit } from '@angular/core';
import { IndexDirecteurService } from 'src/app/index-directeur/index-directeur.service';
import { Conseiller } from 'src/app/model/conseiller.model';

@Component({
  selector: 'app-moyenne-compte-courrant',
  templateUrl: './moyenne-compte-courrant.component.html',
  styleUrls: ['./moyenne-compte-courrant.component.css']
})
export class MoyenneCompteCourrantComponent implements OnInit {
  listConseiller!:Conseiller[] ;
  nbClient:number=0;
 totalCompteCourrant:number=0;
 moyenneCompteCourrant:number=0;
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
           this.totalCompteCourrant=client.compteCourrant.solde;
     })  
   }); 
   this.nbClient = i
   this.moyenneCompteCourrant=(this.totalCompteCourrant/i);
   });
  }

}
