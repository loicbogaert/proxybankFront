import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conseiller } from '../../model/conseiller.model';
import { Agence } from 'src/app/model/agence.model';
import { AgencesService } from 'src/app/services/agences.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { transfertEmploye } from 'src/app/model/transfertEmploye.model';

@Component({
  selector: 'app-transfer-employee',
  templateUrl: './transfer-employee.component.html',
  styleUrls: ['./transfer-employee.component.css']
})
export class TransferEmployeeComponent implements OnInit {
  @Input() listeAgences:Agence[]= [];
  transferForm = {} as FormGroup;
  //agences:Agence[] = [];
  
  conseillers: Conseiller[]= [];
  agences: any[] = [];
  mesConseillers: transfertEmploye[]=[];
  monConseiller!:transfertEmploye;
  agenceId!: number;
  employeId!: number;
  agence!: Agence;
  conseiller!: Conseiller;
  constructor(private formBuilder: FormBuilder, private agencesService: AgencesService, private employeService:EmployeesService) { }

  ngOnInit(): void {
   // this.getAgences();
    this.getConseillers();
    this.transferForm = this.formBuilder.group({
      employeSelected: [null, [Validators.required]],
      agenceSelected: [null, [Validators.required]]
    });

    this.agencesService.mesAgence().subscribe((agences:any)=>{
     console.log(agences)
     this.agences = agences;
     this.agences.forEach(agence=>{
      // console.log('idAgence:'+agence.id , agence.agenceName);
     
       agence.listConseiller.forEach((conseiller:any) => {
         console.log('idAgence:'+agence.id , agence.agenceName+' idconseiller: '+conseiller.id,conseiller.nom,conseiller.prenom)
         this.monConseiller={
          agenceId:0,
          agenceName:'',
          conseillerNom:'',
          conseillerPrenom:'',
          conseillerId:0
        };
         
        
         this.monConseiller.agenceId = agence.id;
         console.log( this.monConseiller.agenceId)
          this.monConseiller.agenceName=agence.agenceName;
         this.monConseiller.conseillerId=conseiller.id;
         this.monConseiller.conseillerNom=conseiller.nom;
         this.monConseiller.conseillerPrenom=conseiller.prenom;
         this.mesConseillers.push(this.monConseiller);
        
        
       });
       console.log(this.mesConseillers)
     })
    
    });
  }



  getConseillers(){
    return this.employeService.getConseillers().subscribe((data:any)=>{
      this.conseillers = data;
      })
  }

  onTransferFormSubmit(){
    this.agence = this.transferForm.value.agenceSelected;
    this.agenceId=this.transferForm.value.agenceSelected.id;
    this.employeId=this.transferForm.value.employeSelected.id;
    this.agencesService.transferConseiller(this.agenceId, this.employeId, this.agence).subscribe();

  }

}
