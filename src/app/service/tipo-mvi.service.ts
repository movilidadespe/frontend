import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { TipoMovilidad } from '../models/TipoMovilidad';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  //const URL = 'http://localhost:8030';
  //const CED_URL = URL + '/idEspeByCed/';
   

@Injectable({
  providedIn: 'root'
})
export class TipoMviService {
  TIPMOV_URL = 'http://localhost:8030';
  constructor(private http:HttpClient) { }
  
  getTipMov():Observable <any> {
      return this.http.get(`${this.TIPMOV_URL}/solicitud`)
  }
  saveTipoMovilidad(tipoMovilidad:TipoMovilidad){
    return this.http.post(`${this.TIPMOV_URL}/crear`,tipoMovilidad);
  }

}
