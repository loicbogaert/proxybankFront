import { Component, OnInit } from '@angular/core';
import { IndexDirecteurService } from './index-directeur.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Agence } from '../model/agence.model';
import { Conseiller } from '../model/conseiller.model';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-index-directeur',
  templateUrl: './index-directeur.component.html',
  styleUrls: ['./index-directeur.component.css']
})
export class IndexDirecteurComponent implements OnInit {
   //listConseil:any = this.myAgence.listConseiller;
  constructor() { }
  
  ngOnInit(): void {}
 
}
