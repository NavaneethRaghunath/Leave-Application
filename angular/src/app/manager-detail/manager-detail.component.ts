import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { MgrdtlService } from '../mgrdtl.service';


@Component({
  selector: 'app-manager-detail',
  templateUrl: './manager-detail.component.html',
  styleUrls: ['./manager-detail.component.css']
})
export class ManagerDetailComponent implements OnInit {

  manager_id: String;
  manager_fname: String;
  manager_email: String;
  manager_mobnumber: String;
  userId: String;
  

  constructor(private _shared: SharedService,
              private _mgrdtl: MgrdtlService) { }

  ngOnInit() {

        this.userId = this._shared.empId;

        this._mgrdtl.getUser(this.userId).subscribe(res =>{
        
        this.manager_id = res.mgrId;
        this.manager_fname = res.mgrFname;
        this.manager_email = res.mgrEmail;
        this.manager_mobnumber = res.mgrMobile;
       
    },error =>{
      
      alert(error);
    
    })



  }
  

  // searchEmp(empId: string){
  //   this.github.getEmp(empId)
  //   .subscribe(({name}) =>{
  //     console.log(name);
  //     this._router.navigate(['/dashboard',empId]);
  //   })
  // }

}
