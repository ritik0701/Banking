import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountStatusComponent } from './account-status/account-status.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeTransactionPasswordComponent } from './change-transaction-password/change-transaction-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { ForgetidpassComponent } from './forgetidpass/forgetidpass.component';
const routes: Routes = [
  {  path:'dashboard',component:DashboardComponent },
  {  path:'login',component:LoginComponent },
  {  path:'logout',component:LogoutComponent },
  {  path:'accountstatus',component:AccountStatusComponent },
  {  path:'admin/login',component:AdminLoginComponent },
  {  path:'admin/logout',component:AdminLogoutComponent },
  {  path:'admin',component:AdminComponent },
  {  path:'openaccount',component:OpenAccountComponent },
  {  path:'changepassword',component:ChangePasswordComponent },
  {  path:'changetransactionpassword',component:ChangeTransactionPasswordComponent },
  { path:'forgetidpass',component:ForgetidpassComponent},
  {  path:'',component:LoginComponent },
  {path:'**',component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
