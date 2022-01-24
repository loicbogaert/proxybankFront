import { Component, Input, OnInit } from '@angular/core';
import { IndexConseillerService } from '../../index-conseiller/index-conseiller.service';
import { Client } from '../../model/client.model';

@Component({
  selector: 'app-info-perso-client',
  templateUrl: './info-perso-client.component.html',
  styleUrls: ['./info-perso-client.component.css']
})
export class InfoPersoClientComponent implements OnInit {


  @Input() singleClient!: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
