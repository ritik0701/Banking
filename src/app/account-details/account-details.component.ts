import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from '../classes/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  accounts : any = []
private subscription : Subscription = new Subscription ;
approve(accNo:number){
  console.log(this.accounts)
  this.subscription = this.accountService.approveAccountService(accNo).subscribe((res:any)=>{
    console.log(res)
  })
}

  ngOnInit(): void {
    this.subscription = this.accountService.getAccounts().subscribe((res:any)=>{
      this.accounts = res;
    },
    (err:any)=>{
      console.log(err)
    })
  }

}
