import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Agence } from '../model/agence.model';
import { AgencesService } from '../services/agences.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  agences:Agence[] = [];
  constructor(private agencesService: AgencesService, private authservice: AuthService) { }

  ngOnInit(): void {
    this.getAgences();
  }

  getAgences(){
    return this.agencesService.getAgences().subscribe((data)=>{
      this.agences = data;
    })
  }
  logout(){
    this.authservice.logOut();
  }
}
