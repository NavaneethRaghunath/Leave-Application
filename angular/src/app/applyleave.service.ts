import { Injectable } from '@angular/core';
import { Leave } from './leave';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { SharedService } from './shared.service';
import { DatePipe } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApplyleaveService {

  currentDate: number;

  constructor(private http: HttpClient,
              private _shared: SharedService,
              private datePipe: DatePipe) { 

  }

  postLeave(user: Leave): Observable<Leave> {

    this.currentDate = Date.now();
    user.status = "pending";
    user.user = this._shared.empId;
    user.startDate = this.datePipe.transform(user.startDate, 'dd/MM/yyyy');
    user.endDate = this.datePipe.transform(user.endDate, 'dd/MM/yyyy');
    user.appliedOn = this.datePipe.transform(this.currentDate, 'dd/MM/yyyy');
    user.managerCmt = "no comments"

    let url="http://localhost:8080/user/" + user.user + "/apply-leave";

    return this.http.post<any>(url, user,httpOptions)
    .pipe(
         catchError(err => this.handleError(err))
    );
  }

  handleError(arg0: string): any {
    throw new Error("Error postng data!!." + arg0);
  }


}
