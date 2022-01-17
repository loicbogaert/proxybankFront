import { Compte } from "./compte.model";
export interface Client{
    id:number;
    nom:string;
    prenom:string;
    telephone:string;
    comptes:[Compte];
    adresse:string;
    codePostal:number;
}