import { Component, OnInit } from '@angular/core';
import { IndexDirecteurService } from 'src/app/index-directeur/index-directeur.service';
import { Conseiller } from 'src/app/model/conseiller.model';

@Component({
  selector: 'app-employe-needed',
  templateUrl: './employe-needed.component.html',
  styleUrls: ['./employe-needed.component.css']
})
export class EmployeNeededComponent implements OnInit {
  listConseiller!:Conseiller[] ;
  nbClient:number=0;
  nbClientRestant:number=0;
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
     })  
   }); 
   this.nbClient = i
   this.nbClientRestant=(this.nbConseiller*10)-this.nbClient;
   });
  
  }

}
