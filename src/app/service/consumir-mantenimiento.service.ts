import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError  } from "rxjs/operators";

const url = "http://localhost:8030/";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConsumirMantenimientoService {

constructor(private http: HttpClient) { }

private extractData(res: Response) {
  let body = res;
  return body || {};
}
getConvocatoria() :Observable<any>  {
  return this.http.get(url + 'convocatorias').pipe(map(this.extractData));
  }

getRequisitos() :Observable<any> {
  return this.http.get(url + 'requisitos').pipe(map(this.extractData));
}
getPMovilidad() :Observable<any>{
  return this.http.get(url + 'PlanMovilidads').pipe(map(this.extractData));
}
getTMovilidad() :Observable<any>{
  return this.http.get(url + 'solicitud').pipe(map(this.extractData));
}
getMovsubm() :Observable<any>{
  return this.http.get(url + 'movsubm').pipe(map(this.extractData));
}
getConvenio() :Observable<any>{
  return this.http.get(url + 'convenios').pipe(map(this.extractData));
}
create(convo: any): Observable<any> {
  return this.http.post(url + `/crearConv`, convo);
}
}
