import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyDetailComponent } from './my-detail/my-detail.component';
import { ManagerDetailComponent } from './manager-detail/manager-detail.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { PendingLeaveApplicationComponent } from './pending-leave-application/pending-leave-application.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApproveDenyLeaveComponent } from './approve-deny-leave/approve-deny-leave.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:id', component: DashboardComponent},
  { path: 'my-detail/:id', component: MyDetailComponent},
  { path: ':id/manager-detail', component: ManagerDetailComponent},
  { path: ':id/leave-application', component: LeaveApplicationComponent},
  { path: ':id/pending-leave-application', component: PendingLeaveApplicationComponent},
  { path: ':id/apply-leave', component: ApplyLeaveComponent},
  { path: ':id/pending-leave-application/:leaveid/approve-deny-leave', component: ApproveDenyLeaveComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
