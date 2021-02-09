import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { TransactionsService } from '../services/transactions.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent implements OnInit {

  beneficiaries : any = []

  makeTransactionForm : FormGroup = new FormGroup({
    transactionType : new FormControl('',Validators.required),
    beneficiaryId : new FormControl('',Validators.required),
    amount : new FormControl('',Validators.required),
    transactionPassword: new FormControl('',Validators.required)
  })

  constructor(private transactionService : TransactionsService,private userService:UserService) { }
  private subscription : Subscription = new Subscription;

  makeTransaction(){
    console.log(this.makeTransactionForm.value)
   this.subscription= this.transactionService.makeTransaction(this.makeTransactionForm.value).subscribe((res:any)=>{
      
    Swal.fire("Transaction Successful")
      },(err) => {
       Swal.fire("Transaction Could not be Completed")
   })
  }

  ngOnInit(): void {
    this.subscription = this.userService.getBeneficiaryList().subscribe((res : any)=>{
      this.beneficiaries = res
    });
  }

}
