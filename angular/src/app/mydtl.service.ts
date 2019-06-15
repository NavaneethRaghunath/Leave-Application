import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class MydtlService {

  constructor(public http: HttpClient) { }

  getUser(id: String): Observable<Login> {
     
    let url="http://localhost:8080/user/" +id+ "/detail";
    // let myParams = new HttpParams();
    // myParams.set('id', user.empId);
    // myParams.set('pwd', user.empPwd);
    // const options = user.empId, user.empPwd ?
    // { params: new HttpParams().set('id', user.empId) } : 
    // { params: new HttpParams().set('pwd', user.empPwd)};
    return this.http.get<any>(url)
    .pipe(
         catchError(err => this.handleError(err))
    );
  }
  
  handleError(arg0: string): any {
    throw new Error("Error postng data!!." + arg0);
  }



}
