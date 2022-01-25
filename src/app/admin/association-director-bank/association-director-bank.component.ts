import { Component, Input, OnInit } from '@angular/core';
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
  @Input() listeAgences:Agence[]= [];
  transferForm = {} as FormGroup;
  agenceId!: number;
  directeurId!: number;
  agence!: Agence;
  conseiller!: Conseiller;
  directeurs!:any;
  constructor(private formBuilder: FormBuilder, private agencesService: AgencesService, private employeService: EmployeesService) { }

  ngOnInit(): void {
    this.getDirectorsNoAgency();
    this.transferForm = this.formBuilder.group({
      employeSelected: [null, [Validators.required]],
      agenceSelected: [null, [Validators.required]]
    });
  }

  onTransferFormSubmit(){
    this.agence = this.transferForm.value.agenceSelected;
    this.agenceId=this.transferForm.value.agenceSelected.id;
    this.directeurId=this.transferForm.value.employeSelected.id;
    this.agencesService.associeteDirecteurToAgence(this.agenceId, this.directeurId, this.agence).subscribe();

  }
  getDirectorsNoAgency(){
    this.employeService.getDirectorsNoAgency().subscribe((data)=>{
      this.directeurs = data;
    })
  }
}
