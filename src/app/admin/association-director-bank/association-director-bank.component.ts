import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Conseiller } from '../../model/conseiller.model';
import { Agence } from 'src/app/model/agence.model';
import { AgencesService } from 'src/app/services/agences.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-association-director-bank',
  templateUrl: './association-director-bank.component.html',
  styleUrls: ['./association-director-bank.component.css']
})
export class AssociationDirectorBankComponent implements OnInit {

  transferForm = {} as FormGroup;
  agences:Agence[] = [];
  agenceId!: number;
  employeId!: number;
  agence!: Agence;
  conseiller!: Conseiller;
  directeurs!:any;
  constructor(private formBuilder: FormBuilder, private agencesService: AgencesService, private employeService: EmployeesService) { }

  ngOnInit(): void {
    this.getDirecteurs();
    this.getAgences();
    this.transferForm = this.formBuilder.group({
      employeSelected: [[Validators.required]],
      agenceSelected: [[Validators.required]]
    });
  }

  getAgences(){
    return this.agencesService.getAgences().subscribe((data)=>{
      this.agences = data;
    })
  }


  onTransferFormSubmit(){
    this.agence = this.transferForm.value.agenceSelected;
    this.agenceId=this.transferForm.value.agenceSelected.id;
    this.employeId=this.transferForm.value.employeSelected.id;
   // this.agencesService.transferConseiller(this.agenceId, this.employeId, this.agence).subscribe();

  }

  getDirecteurs(){
    this.employeService.getDirecteurs().subscribe((data)=>{
      this.directeurs = data;
    })
  }
}
