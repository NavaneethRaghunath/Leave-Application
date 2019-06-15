import { Component, OnInit } from '@angular/core';
import { MydtlService } from '../mydtl.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-my-detail',
  templateUrl: './my-detail.component.html',
  styleUrls: ['./my-detail.component.css']
})
export class MyDetailComponent implements OnInit {

  userId: String;
  emp_id: String;
  date_joined: String;
  full_name: String;
  department: String;
  email: String;
  mobile_no: String;
  leave_bal: String;

  constructor(private _mydtl: MydtlService,
              private _shared: SharedService
    ) { }

  ngOnInit() {
    
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.userId = params['id'];
    //   console.log(this.userId);
    // });

          this.userId = this._shared.empId;

          this._mydtl.getUser(this.userId).subscribe(res =>{
          
            this.emp_id = res.empId;
            this.date_joined = res.dateJoined;
            this.full_name = res.empFname;
            this.department = res.department;
            this.email = res.empEmail;
            this.mobile_no = res.empMobile;
            this.leave_bal = res.leaveBalance;
      
    },error =>{
      
      alert(error);
      
    })
  
    }

  }




