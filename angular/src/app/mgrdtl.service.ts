import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class MgrdtlService {

  constructor(public http: HttpClient) { }

  getUser(id: String): Observable<Login> {
 
    let url="http://localhost:8080/user/" +id+ "/manager";
    
    return this.http.get<any>(url)
    .pipe(
         catchError(err => this.handleError(err))
    );
  }
 
  handleError(arg0: string): any {
    throw new Error("Error postng data!!." + arg0);
  }

}
