import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";


//const urlmenu = "http://10.1.60.26:8083/adm/access/1709616567/2";
const urlmenu =   "http://10.1.60.26:8083/adm/access/1718552365/2";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
  

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

    private extractData(res: Response) {
      let body = res;
      return body || {};
    }

  getMenu(): Observable<any> {
    return this.http.get(urlmenu).pipe(map(this.extractData));
  }


}
