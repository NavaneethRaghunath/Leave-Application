import { Component, OnInit } from '@angular/core';
import { ApplyleaveService } from '../applyleave.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  userId: string;
  constructor(private _applyleave: ApplyleaveService,
              private _shared: SharedService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(userForm) : void{

      this._applyleave.postLeave(userForm.value).subscribe(res =>{

      this.userId = this._shared.empId;    
      this.router.navigate(['/dashboard',this.userId]);

    },error =>{

      alert(error);
   
    })

  }

  cancelLeave(){
    
    this.router.navigate(['/dashboard',this.userId]);
  
  }

}
