import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError} from  "rxjs/operators";



const url = "http://localhost:8030/";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})

export class RequisitosService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response){
    let body = res;
    return body || {};
  }

  getrequisito():Observable <any> {
    return this.http.get(url + 'requisitos').pipe(map(this.extractData));
  }
}
