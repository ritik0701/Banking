import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountNumberDTO } from '../classes/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {

  private subscription: Subscription = new Subscription;
  openAccountForm : FormGroup = new FormGroup({	
    accountStatus:new FormControl( "Inprogress",Validators.required),
    address : new FormControl('',Validators.required),
    adminRemark :new FormControl("Under Review",Validators.required),
    annualIncome:new FormControl('',Validators.required),
    balance:new FormControl(0,Validators.required),
    city:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    father:new FormControl('',Validators.required),
    firstname:new FormControl('',Validators.required),
    landmark:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    middlename:new FormControl(''),
    occupation:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required),
    proofId:new FormControl('',Validators.required),
    proofType:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required)
  })

  constructor( private accountService :AccountService) { }

  onSubmit(){
    console.log(this.openAccountForm)
   this.subscription = this.accountService.openAccountService(this.openAccountForm.value).subscribe((res:any) =>{
      console.log(res);
      alert("Application Is Submitted")
    },(err :any)=>{
      console.log(err);
    }
    )
  }

  ngOnInit(): void {
  }

}
