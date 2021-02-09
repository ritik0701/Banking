import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Account } from '../classes/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private accountService: AccountService,private router:Router) { }
  accounts : any = []
private subscription : Subscription = new Subscription ;
approve(accNo:number){
  console.log(this.accounts)
  this.subscription = this.accountService.approveAccountService(accNo).subscribe((res:any)=>{

  })
}

  ngOnInit(): void {
    this.subscription = this.accountService.getAccounts().subscribe((res:any)=>{
      this.accounts = res;
      this.router.navigate(['/admin']);
    },
    (err:any)=>{
      Swal.fire("Could not Approve, Please Try Later")
    })
  }

}
