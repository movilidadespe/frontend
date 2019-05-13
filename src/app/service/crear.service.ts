import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CrearService {

  private url = 'http://localhost:8030/';

  constructor(private http: HttpClient) { }

  create(convocatoria: Object): Observable<Object> {
    return this.http.post(`${this.url}` + `convocatoria/create`, convocatoria);
  }

  update(convocatoria: Object): Observable<Object> {
    return this.http.post(`${this.url}` + `convocatoria/update`,convocatoria);
  }

  get(id: number): Observable<Object> {
    return this.http.get(`${this.url}/${id}`);
  }

  getList(): Observable<any> {
    return this.http.get(`${this.url}` + `convocatorias`);
  }


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getconvoid(id: string): Observable<any> {
    return this.http.get(this.url +"convocatoria/" + id).pipe(map(this.extractData));
  }

}
