import { Client } from "./client.model";
export interface Conseiller{
    id:number;
    username:string;
    nom:string;
    prenom:string;
    email:string;
    clients:[Client]
    nbClients:number;
    totalCompteCourrant:number;
    totalCompteEpargne:number;


}