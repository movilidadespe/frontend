import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  //const URL = 'http://localhost:8030';
  //const CED_URL = URL + '/idEspeByCed/';
  const TIPMOV_URL = 'http://localhost:8030/consumir';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:Http) { }
  
  getDatos():Observable <any> {
    console.log(' el servicio funciona');
      return this.http.get(TIPMOV_URL).map((res: Response)=>res.json())
  }

}
