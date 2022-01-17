import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Agence } from '../model/agence.model';

const httpOptions= {
  headers: new HttpHeaders(
    {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  )
  };  
@Injectable({
  providedIn: 'root'
})
export class IndexDirecteurService {
  agence_URL : string = `http://localhost:8080/agences/2/`;
  constructor(private http:HttpClient) { }
  
  public getAgence():Observable<any> {
    return this.http.get(this.agence_URL).pipe(map((data:any)=>{
      console.log(data)
      return {
        id:data.id,
        agenceName:data.agenceName,
        listConseiller:data.listConseiller,
        clients:data.listConseiller.clients
        
          
     

      }
    }))
  }
    /*.subscribe(Response=>{
      console.log(Response);
     
      return Response;
     });*/
  }
   

