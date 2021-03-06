import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Agence } from 'src/app/model/agence.model';
import { AgencesService } from 'src/app/services/agences.service';

@Component({
  selector: 'app-create-agence',
  templateUrl: './create-agence.component.html',
  styleUrls: ['./create-agence.component.css']
})
export class CreateAgenceComponent implements OnInit {

  dataSaved = false;
  agenceForm = {} as FormGroup;
  agenceName:string=''

  constructor(private formBuilder: FormBuilder, private agencesService: AgencesService) { }

  ngOnInit(): void {
    this.agenceForm = this.formBuilder.group({
      agenceName: ["", [Validators.required, Validators.minLength(4)]],
    });
  }

  onFormSubmit() {
    this.dataSaved = false;
    let agence = this.agenceForm.value;
    console.log(agence)
    this.creationAgence(agence.agenceName);
    alert('Agence :' + JSON.stringify(this.agenceForm.value.agenceName, null, 4)+' saved!');
    this.agenceForm.reset();
  }
  creationAgence(agence: Agence) {
    this.agencesService.creationAgence(agence).subscribe(
      agence => {
        console.log(agence);
        this.dataSaved = true;
      },
      err => {
        console.log(err);
      }
    );
  }
  get f() {
    return this.agenceForm.get('agenceName');
  }

}
