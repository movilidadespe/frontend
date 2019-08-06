import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  private url = 'http://localhost:8030/';

  constructor(private http: HttpClient) { }

create(convenio: Object): Observable<Object> {
    return this.http.post(`${this.url}` + `convenio/create`, convenio);
  }

  get(id: number): Observable<Object> {
    return this.http.get(`${this.url}/${id}`);
  }

  getList(): Observable<any> {
    return this.http.get(`${this.url}` + `convenios`);
  }
}
