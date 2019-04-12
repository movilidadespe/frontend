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
  return this.http.get(url + 'convocatoria').pipe(map(this.extractData));
  }

getRequisitos() :Observable<any> {
  return this.http.get(url + 'requisitos').pipe(map(this.extractData));
}

}
