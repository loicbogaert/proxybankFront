import { Component, Input, OnInit } from '@angular/core';
import { Compte } from 'src/app/model/compte.model';
import { IndexConseillerService } from '../../index-conseiller/index-conseiller.service';
import { Client } from '../../model/client.model';

@Component({
  selector: 'app-info-comptes-client',
  templateUrl: './info-comptes-client.component.html',
  styleUrls: ['./info-comptes-client.component.css']
})
export class InfoComptesClientComponent implements OnInit {

  @Input() comptes!:Compte[];
  clients!:Client[];
  @Input() singleClient!: Client;

  constructor(private service: IndexConseillerService) { }

  ngOnInit(): void {
    this.service.getConseillers().subscribe((data:any)=>{
      this.clients = data.clients;
    })
  }
}
