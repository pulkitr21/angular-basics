import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { LearningComponent } from './learning/learning.component';
import { PayrollComponent } from './payroll/payroll.component';

const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"helpdesk",component:HelpdeskComponent},
  {path:"learning",component:LearningComponent},
  {path:"learning/:tech",component:LearningComponent},
  {path:"payroll",component:PayrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
