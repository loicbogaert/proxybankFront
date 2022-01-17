import { Conseiller } from "./conseiller.model";
export interface Agence{
    id:number;
    agenceName:string;
    listConseiller:[Conseiller];
    

}