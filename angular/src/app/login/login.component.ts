import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 user: Login;

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private _loginService: LoginService, 
                private _shared: SharedService) { }

  ngOnInit() {
      // this.route.params.subscribe(params => {
      //   console.log(params) //log the entire params object
      //   console.log(params['id']) //log the value of id
      // });
    }

  

  onSubmit(userForm: any) : void{

    this._loginService.loginUser(userForm.value).subscribe(res =>{

      this._shared.empId = res.empId;
      this._shared.fullName = res.empFname;
      
      this.router.navigate(['/dashboard',userForm.value.empId]);

    },error =>{

      alert(error);

    })

  }

}


