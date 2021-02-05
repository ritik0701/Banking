import { Component, OnInit } from '@angular/core';
import { Account } from '../classes/account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor() { }
  account : Account = new Account();
  
  ngOnInit(): void {
    console.log(this.account.balance)
  }

}
