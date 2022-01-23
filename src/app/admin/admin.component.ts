import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Agence } from '../model/agence.model';
import { AgencesService } from '../services/agences.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  agences:Agence[] = [];
  constructor(private agencesService: AgencesService) { }

  ngOnInit(): void {
    this.getAgences();
  }

  getAgences(){
    return this.agencesService.getAgences().subscribe((data)=>{
      this.agences = data;
    })
  }
}
