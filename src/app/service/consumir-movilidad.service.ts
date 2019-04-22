import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
export class ConsumirMovilidadService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPlan() :Observable<any>  {
    return this.http.get(url + 'plan').pipe(map(this.extractData));
    }

    getPlanMovi() : Observable<any>  {
      return this.http.get(url + 'planmovilidad').pipe(map(this.extractData));
}

getindexadas() : Observable<any>  {
  return this.http.get(url + 'indexadasmovilidad').pipe(map(this.extractData));
}



addProduct(product): Observable<any> {
  console.log(product);
  return this.http
    .post<any>(url + "crearConv", JSON.stringify(product), httpOptions)
    .pipe(
      tap(product => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>("addProduct"))
    );
}

private handleError<T>(operation = "operation", result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
 
}
}
