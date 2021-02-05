import { Component, OnInit } from '@angular/core';
import { Transaction } from '../classes/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() { }
  trans : Transaction = {
    transactionId :12321
  }

  ngOnInit(): void {
    console.log(this.trans.transactionId)
  }

}
