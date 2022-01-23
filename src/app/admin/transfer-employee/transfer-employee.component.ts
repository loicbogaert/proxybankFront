import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conseiller } from 'src/app/index-conseiller/index-conseiller.model';
import { Agence } from 'src/app/model/agence.model';
import { AgencesService } from 'src/app/services/agences.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-transfer-employee',
  templateUrl: './transfer-employee.component.html',
  styleUrls: ['./transfer-employee.component.css']
})
export class TransferEmployeeComponent implements OnInit {
  transferForm = {} as FormGroup;
  agences:Agence[] = [];
  conseillers: Conseiller[]= [];
  agenceId!: number;
  employeId!: number;
  agence!: Agence;
  conseiller!: Conseiller;
  constructor(private formBuilder: FormBuilder, private agencesService: AgencesService, private employeService:EmployeesService) { }

  ngOnInit(): void {
    this.getAgences();
    this.getConseillers();
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
