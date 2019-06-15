import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Leave } from './leave';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApprovedenyService {

  constructor(public http: HttpClient) { }

  updateLeaveReq(leaveReq : Leave): Observable<Leave> {

    let url="http://localhost:8080/user/"+ leaveReq.leaveId +"/approve-deny";

    return this.http.put<any>(url, leaveReq, httpOptions)
    .pipe(
         catchError(err => this.handleError(err))
    );
  }
 
  handleError(arg0: string): any {
    throw new Error("Error postng data!!." + arg0);
  }

    
}


