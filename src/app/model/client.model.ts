import { Compte } from "./compte.model";
export interface Client{
    id:number;
    nom:string;
    prenom:string;
    telephone:string;
    compteCourrant:Compte;
    compteEpargne:Compte;
    adresse:string;
    codePostal:number;
}