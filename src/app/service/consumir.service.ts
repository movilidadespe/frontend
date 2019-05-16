import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

const endpoint = "http://localhost:8030/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};


@Injectable({
  providedIn: 'root'
})
export class ConsumirService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getProducts(id: number): Observable<any> {
    return this.http.get(endpoint+ 'findbyPIDM/' + id).pipe(map(this.extractData));
  }
  getRequisitot(id: number): Observable<any> {
    return this.http.get(endpoint+ 'requisitototal/' + id).pipe(map(this.extractData));
  }
  getRequisito1(id: number): Observable<any> {
    return this.http.get(endpoint+ 'req1/' + id).pipe(map(this.extractData));
  }
  getRequisito2(id: number): Observable<any> {
    return this.http.get(endpoint+ 'req2/' + id).pipe(map(this.extractData));
  }
  getRequisito3(id: number): Observable<any> {
    return this.http.get(endpoint+ 'req3/' + id).pipe(map(this.extractData));
  }
  getRequisito4(id: number): Observable<any> {
    return this.http.get(endpoint+ 'req4/' + id).pipe(map(this.extractData));
  }
  getRequisitomov1(id: number): Observable<any> {
    return this.http.get(endpoint+ 'reqmov1/' + id).pipe(map(this.extractData));
  }
  getRequisitomovsubm(id: number): Observable<any> {
    return this.http.get(endpoint+ 'requisitomovsubm/' + id).pipe(map(this.extractData));
  }
  getRequisitomovsubmfind(id: number): Observable<any> {
    return this.http.get(endpoint+ 'smovfind/' + id).pipe(map(this.extractData));
  }
}

