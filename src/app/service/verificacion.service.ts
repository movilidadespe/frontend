import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";

const url = "http://localhost:8030/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};


@Injectable({
  providedIn: 'root'
})
export class VerificacionService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getveri(id: number): Observable<any> {
    return this.http.get(url + "nuevo/"+id).pipe(map(this.extractData));
  }
}
