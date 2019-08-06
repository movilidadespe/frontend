import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanciamientoService {

  private url = 'http://localhost:8030/';

  constructor(private http: HttpClient) { }

create(cronograma: Object): Observable<Object> {
    return this.http.post(`${this.url}` + `financiamiento/create`, cronograma);
  }

  get(ide: number): Observable<Object> {
    return this.http.get(`${this.url}/${ide}`);
  }

  getList(): Observable<any> {
    return this.http.get(`${this.url}` + `financiamientos`);
  }
}
