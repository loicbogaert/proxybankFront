import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Conseiller } from './index-conseiller.model';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class IndexConseillerService {

readonly API_URL : string = '';

  constructor(private http: HttpClient) { }

  getConseillers(): Observable<object> {
    return this.http.get(this.API_URL, httpOptions)
  }
}
