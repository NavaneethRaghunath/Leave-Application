import { Component, OnInit } from '@angular/core';
import { ApplyDenyShareService } from '../apply-deny-share.service';
import { SharedService } from '../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Leave } from '../leave';
import { ApprovedenyService } from '../approvedeny.service';

@Component({
  selector: 'app-approve-deny-leave',
  templateUrl: './approve-deny-leave.component.html',
  styleUrls: ['./approve-deny-leave.component.css']
})
export class ApproveDenyLeaveComponent implements OnInit {

  userEmpId: string;
  startDate: String;
  endDate: String;
  numberOfDays: String;
  leaveType: String;
  reason: String;
  leaveReqUser:Leave = {};
  approveDenyLeaveId: string;

  constructor(private router: Router,
              private _activatedRoute: ActivatedRoute,
              private _applyDenyshared: ApplyDenyShareService,
              private _shared: SharedService,
              private _approveDeny: ApprovedenyService) { }

  ngOnInit() {
 
    this.approveDenyLeaveId = this._activatedRoute.snapshot.params['leaveid'];
    this._applyDenyshared.userList.forEach((user: Leave)=>{
  
      if (this.approveDenyLeaveId == user.leaveId){
            this.userEmpId = user.user;
            this.startDate = user.startDate;
            this.endDate  = user.endDate;  
            this.numberOfDays = user.numberOfDays; 
            this.leaveType = user.leaveType; 
            this.reason = user.reason; 
      }
  
    }); 
  
  }

  approve(data: any){
    
     this.leaveReqUser.managerCmt = data.value.comment;
     this.leaveReqUser.status = "approved";
     this.leaveReqUser.leaveId = this.approveDenyLeaveId; 

     this._approveDeny.updateLeaveReq(this.leaveReqUser).subscribe(res =>{  
     
      this.router.navigate(['/dashboard',this._shared.empId]);

    },error =>{
  
      alert(error);
  
    })

  }

  deny(data: any){

    this.leaveReqUser.managerCmt = data.value.comment;
    this.leaveReqUser.status = "denied";
    this.leaveReqUser.leaveId = this.approveDenyLeaveId; 
    
    this._approveDeny.updateLeaveReq(this.leaveReqUser).subscribe(res =>{
      
      this.router.navigate(['/dashboard',this._shared.empId]);

    },error =>{
      
      alert(error);
    
    })

 }

  cancel(){
 
    this.router.navigate(['/dashboard',this._shared.empId]);
 
  }

}
