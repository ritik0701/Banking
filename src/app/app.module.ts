import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { AccountStatusComponent } from './account-status/account-status.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { ErrorComponent } from './error/error.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeTransactionPasswordComponent } from './change-transaction-password/change-transaction-password.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    OpenAccountComponent,
    TransactionComponent,
    AddBeneficiaryComponent,
    AccountStatusComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    ErrorComponent,
    ChangePasswordComponent,
    ChangeTransactionPasswordComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
