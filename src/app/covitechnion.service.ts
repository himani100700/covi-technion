import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovitechnionService {

  constructor(private http: HttpClient,) { }
  covidData(): Observable<any> {
    const url =
      "https://coronavirus-19-api.herokuapp.com/countries";
    return this.http.get<any>(url);
  }
}
