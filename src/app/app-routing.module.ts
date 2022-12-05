import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SigninMobileComponent } from './signin-mobile/signin-mobile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {path:'', redirectTo:'signin', pathMatch:'full'},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'mobile', component:SigninMobileComponent},
  {path:'code', component:VerificationComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'reset', component:ResetpasswordComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'feedback', component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
