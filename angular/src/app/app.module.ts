import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login.service';
import { MyDetailComponent } from './my-detail/my-detail.component';
import { ManagerDetailComponent } from './manager-detail/manager-detail.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { PendingLeaveApplicationComponent } from './pending-leave-application/pending-leave-application.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApproveDenyLeaveComponent } from './approve-deny-leave/approve-deny-leave.component';
import { DatePipe } from '@angular/common';
import { MgrdtlService } from './mgrdtl.service';
import { MydtlService } from './mydtl.service';
import { SharedService } from './shared.service';
import { LeaveService } from './leave.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    MyDetailComponent,
    ManagerDetailComponent,
    LeaveApplicationComponent,
    PendingLeaveApplicationComponent,
    ApplyLeaveComponent,
    ApproveDenyLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,MgrdtlService,MydtlService,SharedService,LeaveService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
