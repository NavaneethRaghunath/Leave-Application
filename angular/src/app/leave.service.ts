import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from './leave';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

 
  constructor(public http: HttpClient) {
   // this.userList = new Array<Leave>();
   }

  getLeaveDtl(id: String): Observable<Leave[]> {
  
    let url="http://localhost:8080/user/" +id+ "/leave";
    
    return this.http.get<any>(url)
    .pipe(
         catchError(err => this.handleError(err))
    );
  }
  
  handleError(arg0: string): any {
    throw new Error("Error postng data!!." + arg0);
  }




}

 