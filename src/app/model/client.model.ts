import { Compte } from "./compte.model";
import { Carte } from "./carte.model";

export interface Client{
    id:number;
    nom:string;
    prenom:string;
    telephone:string;
    comptes:[Compte];
    adresse:string;
    codePostal:number;
    cartes:[Carte];
}