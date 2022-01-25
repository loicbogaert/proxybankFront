import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agence } from '../model/agence.model';



const httpOptions= {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
  };
@Injectable({
  providedIn: 'root'
})
export class AgencesService {
 agences: Agence[] = [];
 readonly BASE_URL: string = `${environment.api}`+"agences";
  constructor(private http: HttpClient) {
    this.getAgences();
   }
/**XXXXXXXXXXXXXX Get all agences XXXXXXXXXXXXXXXXXXXXXXXXXX */
  public getAgences():Observable<Agence[]> {
    const url = this.BASE_URL;
    return this.http.get<Agence[]>(url).pipe(map((data:Agence[])=>{
      this.agences = data;
      return this.agences;
    }))
  }

  /**XXXXXXXXXXXXXXXXXXXXXXX Create Agence XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
      creationAgence(agence: Agence): Observable<Agence> {
        return this.http.post<Agence>(this.BASE_URL, agence, httpOptions);
    }

    /**XXXXXXXXXXXXXXXXXXXXXXX Add Agence XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

    transferConseiller(agenceId:number, conseillerId:number, agence:Agence){
      const url = `${this.BASE_URL}/${agenceId}/ajouterEmploye/${conseillerId}`
      return this.http.put<Agence>(url, agence).pipe(
        map(res => console.log(res))
      );
    };

    /**XXXXXXXXXXXXXXXXXXXXXXX Associer directeur a une Agence XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

    associeteDirecteurToAgence(agenceId:number, directeurId:number, agence:Agence){
      const url = `${this.BASE_URL}/${agenceId}/associer/${directeurId}`
      return this.http.put<Agence>(url, agence).pipe(
        map(res => console.log(url))
      );
    };

}

