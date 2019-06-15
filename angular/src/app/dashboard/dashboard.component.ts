import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
// import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // org: string;
  // repos: Observable<any>;

  name: String;
  userId: String;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private _shared: SharedService) { }

  ngOnInit() {
  //   this.activatedRoute.queryParams.subscribe(params => {
  //     this.userId = params[':id'];
  //     console.log(this.userId);
  //     console.log("params",params);
  //  this.router.params.subscribe(params => {
  //       console.log(params) //log the entire params object
  //       console.log(params['id']) //log the value of id
  //     });

  //   });
    this.name = this._shared.fullName;
    this.userId = this._shared.empId;

  }

  empDtl(){
   
    this.router.navigate(['/my-detail',this.userId]);
  
  }
  
  mgrDtl(){
  
    this.router.navigate([this.userId,'manager-detail']);
  
  }

  myLvApp(){
  
    this.router.navigate([this.userId,'leave-application']);
  
  }

  penLvApp(){
  
    this.router.navigate([this.userId,'pending-leave-application']);
  
  }

}
