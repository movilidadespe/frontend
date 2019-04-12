import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs';
import { Convocatoria } from '../models/Convocatoria';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  //const URL = 'http://localhost:8030';
  //const CED_URL = URL + '/idEspeByCed/';
   

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {
  CONVOCATORIA_URL = 'http://localhost:8030';
  constructor(private http:HttpClient) { }
  
  getConvocatoria():Observable <any> {
      return this.http.get(`${this.CONVOCATORIA_URL}/convocatoria`)
  }
  saveConvocatoria(tipoMovilidad:Convocatoria){
    return this.http.post(`${this.CONVOCATORIA_URL}/crearConv`,tipoMovilidad);
  }

}

