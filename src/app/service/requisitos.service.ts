import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from 'environments/environment';
import { Observable, of } from "rxjs";
import { Http, Response } from '@angular/http';

const res = "http://localhost:8030/requisitos";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: 'root'
})
export class RequisitosService {

  constructor(private http: Http) { }

  getrequisito():Observable <any> {
    console.log(' el servicio funciona');
 
    return this.http.get(res).map((res: Response)=>res.json())
  }
}
