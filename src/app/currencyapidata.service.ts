import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {
  private backEndUrl: any;

  constructor(private http:HttpClient) { }
  //private baseUrl = 'https://api.exchangerate.host/latest?base=';
  // getcurrencydata(country1: number){
  //   let url = 'http://localhost:8100/currency-conversion/from/USD/to/INR/quantity/'+ country1
  //   return this.http.get(url);
  // }
  // getcurrencydata(id: number, from: String, to: String): Observable<any> {
  //    return this.http.get(`${this.baseUrl}${from}`);
 
  //  }
   getcurrencydata(id: number, from: String, to: String): Observable<any> {
    this.backEndUrl='http://localhost:8100/currency-conversion-public-api';
    return this.http.get(`${this.backEndUrl}/from/${from}/to/${to}`);

  }
}
