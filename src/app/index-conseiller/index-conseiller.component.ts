import { Component, OnInit } from '@angular/core';
import { Conseiller } from './index-conseiller.model';
import { IndexConseillerService } from './index-conseiller.service';

@Component({
  selector: 'app-index-conseiller',
  templateUrl: './index-conseiller.component.html',
  styleUrls: ['./index-conseiller.component.css']
})
export class IndexConseillerComponent implements OnInit {

  constructor(
    private service: IndexConseillerService
  ) {

  }

  getConseillers() {
    console.log(this.service.getConseillers())
  }

  ngOnInit(): void {
  }

}
