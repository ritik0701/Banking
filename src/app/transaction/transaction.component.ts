import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AccountNumberDTO } from '../classes/account';
import { Transaction } from '../classes/transaction';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[] = []; 
  private subscription: Subscription = new Subscription;
  constructor( private transactionService :TransactionsService) { }
  accNo: AccountNumberDTO = {
    accNo:sessionStorage.getItem('accNo')
  }
    ngOnInit(): void {
      this.subscription = this.transactionService.getTransactions(this.accNo).subscribe((res:any) =>{
        this.transactions = res
      },(err :any)=>{
        console.log(err);
      }
      )
  }

}
