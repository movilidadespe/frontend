import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequisitoService {

  private url = 'http://localhost:8030/';

  constructor(private http: HttpClient) { }

  create(requisitos: Object): Observable<Object> {
    return this.http.post(`${this.url}` + `requisitos/create`, requisitos);
  }

  get(id: number): Observable<Object> {
    return this.http.get(`${this.url}/${id}`);
  }

  getList(): Observable<any> {
    return this.http.get(`${this.url}` + `requisitos`);
  }

}
