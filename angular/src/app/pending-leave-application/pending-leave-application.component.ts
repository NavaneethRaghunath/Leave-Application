import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { PendingLeaveService } from '../pending-leave.service';
import { Leave } from '../leave';
import { ApplyDenyShareService } from '../apply-deny-share.service';


@Component({
  selector: 'app-pending-leave-application',
  templateUrl: './pending-leave-application.component.html',
  styleUrls: ['./pending-leave-application.component.css']
})
export class PendingLeaveApplicationComponent implements OnInit {
 
  usersList: Leave[];
  userId: String;
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _shared: SharedService,
    private _pendingLeave: PendingLeaveService,
    private _applyDenyshared: ApplyDenyShareService) { }

  ngOnInit() {

      this.userId = this._shared.empId;

      this._pendingLeave.getPendingLeave(this.userId).subscribe(res =>{

      this.usersList = res;
      this._applyDenyshared.userList = this.usersList;
       
    },error =>{

      alert(error);

    })

  }

}
