import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AgencesService } from 'src/app/services/agences.service';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit{

  agences:any = [];
  constructor(private agencesService: AgencesService) { }

  ngOnInit(): void {
    this.getAgences();
  }
  getAgences(){
    return this.agencesService.getAgences().subscribe((data: {})=>{
      this.agences = data;
    })

  }
}
