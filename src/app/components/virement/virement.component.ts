import { Component, Input, OnInit } from '@angular/core';
import { IndexConseillerService } from 'src/app/index-conseiller/index-conseiller.service';
import { Client } from 'src/app/model/client.model';
import { Compte } from 'src/app/model/compte.model';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {

  @Input() singleClient!: Client;
  @Input() clients!: Client[];
  @Input() allClients!: Client[];
  comptesEpargne!: Compte[];
  comptesCourrant!: Compte[];

  @Input() list: string[] = [];
    // input combo box to get compte recepteur
    inputItem = '';

    //get montant du virement
    montantVirement: number = 0;

    // get compte Emetteur
    compteEmetteur!: any;

    // enable or disable visiblility of list
    listHidden = true;
    selectedIndex = -1;
    // the list to be shown after filtering
    filteredList: string[] = [];

  constructor(private service: IndexConseillerService) { }

  ngOnInit(): void {
    //liste de TOUT les clients
    this.service.allClients().subscribe((clients:any)=> {
      this.allClients = clients;

      // Ajout de tout les comptes à  la liste pour le virement
      for(let i = 0; i < this.allClients.length; i++) {
        if(this.allClients[i].compteCourrant) {
          this.list.push(
            (this.allClients[i].nom + " " + this.allClients[i].prenom + " - " + this.allClients[i].compteCourrant.numeroDeCompte.toString() + " - Compte Courrant" + " " + this.allClients[i].compteCourrant.id)
          );
        }
       
        if(this.allClients[i].compteEpargne) {
          this.list.push(
            (this.allClients[i].nom + " " + this.allClients[i].prenom +  " - " + this.allClients[i].compteEpargne.numeroDeCompte.toString() + " - Compte Epargne" + " " + this.allClients[i].compteEpargne.id) 
          );
        }
      }
    })

    // combobox liste filtrée
    this.filteredList = this.list;
  }

     // modifies the filtered list as per input
     getFilteredList() {
      this.listHidden = false;
      if (!this.listHidden && this.inputItem !== undefined) {
          this.filteredList = this.list.filter((item) =>  item.toLowerCase().startsWith(this.inputItem.toLowerCase()));
  }
}
  // select highlighted item when enter is pressed or any item that is clicked
  selectItem(ind:any) {
      this.inputItem = this.filteredList[ind];
      this.listHidden = true;
      this.selectedIndex = ind;
  }

  // show or hide the dropdown list when input is focused or moves out of focus
  toggleListDisplay(sender: number) {
      if (sender === 1) {
          this.listHidden = false;
          this.getFilteredList();
      } else {
          // helps to select item by clicking
          setTimeout(() => {
              this.selectItem(this.selectedIndex);
              this.listHidden = true;
              if (!this.list.includes(this.inputItem)) {
                  this.filteredList = this.list;
              } 
          }, 500);
      }
  }

  /**Fonction de virement */

  virement() {
   this.service.virement(this.montantVirement, parseInt(this.compteEmetteur), parseInt(this.inputItem.substring(this.inputItem.lastIndexOf(" ")+1, this.inputItem.length))).subscribe();
  }
}