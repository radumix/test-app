import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { IServicing } from '../interfaces/i-servicing';
import { catchError, map, tap } from 'rxjs/operators';
import { IData } from '../interfaces/i-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private heroesUrl = 'assets/data/db.json';  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getData(): Observable<IData> {
    return this.http.get<IData>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<IData>('getData', ))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}

//https://github.com/radumix/test-app.git