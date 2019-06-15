import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { Login } from './login';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(public http: HttpClient) { }

  loginUser(user : Login): Observable<Login> {

   
    let url="http://localhost:8080/user/login";
    // let myParams = new HttpParams();
    // myParams.set('id', user.empId);
    // myParams.set('pwd', user.empPwd);
    // const options = user.empId, user.empPwd ?
    // { params: new HttpParams().set('id', user.empId) } : 
    // { params: new HttpParams().set('pwd', user.empPwd)};
   
    return this.http.post<any>(url, user,httpOptions)
    .pipe(
         catchError(err => this.handleError(err))
    );
  }
  
  handleError(arg0: string): any {
    throw new Error("Error postng data!!." + arg0);
  }

    
}




