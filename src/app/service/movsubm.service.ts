import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovsubmService {
  private url = 'http://localhost:8030/';
  constructor(private http: HttpClient) { }
  create(movsubm: Object): Observable<Object> {
    return this.http.post(`${this.url}` + `movsubm/create`, movsubm);
  }

  get(id: number): Observable<Object> {
    return this.http.get(`${this.url}/${id}`);
  }

  getList(): Observable<any> {
    return this.http.get(`${this.url}` + `movsubm`);
  }

}
