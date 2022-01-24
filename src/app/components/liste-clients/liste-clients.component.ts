import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { IndexConseillerService } from '../../index-conseiller/index-conseiller.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {

  @Output() clientId = new EventEmitter<any>();
  @Input() clients!: Client[];

  constructor(private service: IndexConseillerService) { }

  ngOnInit(): void {

  }

  delete(id:any) {
    this.service.deleteClient(id);
  }

  /** Emit index to index-conseiller */
  giveId(id:any): void {
    this.clientId.emit(id);
  }
}
