import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { LeaveService } from '../leave.service';
import { Leave } from '../leave';


@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent implements OnInit {
 
  userId: String;
  userList: Array<Leave>;
 
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _shared: SharedService,
              private _leavedtl: LeaveService
  ) {}

  ngOnInit() {
  
    this.userId = this._shared.empId;
    
    this._leavedtl.getLeaveDtl(this.userId).subscribe(res =>{

    this.userList = res;
       
    },error =>{
    
      alert(error);
    
    })
    
}

  applyLeave(){

    this.router.navigate([this.userId,'apply-leave']);

  }

}
