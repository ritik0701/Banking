import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountNumberDTO } from '../classes/account';
import { AccountService } from '../services/account.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {

  youngerThanValidator = (minAge: number): ValidatorFn => control =>
  (new Date()).getFullYear() - (new Date(control.value)).getFullYear() < minAge 
    ? { younger: { minAge } } 
    : null;

  private subscription: Subscription = new Subscription;
  openAccountForm : FormGroup = new FormGroup({	
    accountStatus:new FormControl( "Inprogress",Validators.required),
    address : new FormControl('',Validators.required),
    adminRemark :new FormControl("Under Review",Validators.required),
    annualIncome:new FormControl('',[Validators.required,Validators.min(0)]),
    balance:new FormControl(0,Validators.required),
    city:new FormControl('',Validators.required),
    dob:new FormControl('',[Validators.required,this.youngerThanValidator(18)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    father:new FormControl('',Validators.required),
    firstname:new FormControl('',Validators.required),
    landmark:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    middlename:new FormControl(''),
    occupation:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required),
    proofId:new FormControl('',[Validators.required,Validators.min(100000000)]),
    proofType:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required)
  })

  constructor( private accountService :AccountService,
    private router : Router) { }

  onSubmit(){
   this.subscription = this.accountService.openAccountService(this.openAccountForm.value).subscribe((res:any) =>{
      Swal.fire("Application Submitted");
      this.router.navigate(['/'])
    },(err :any)=>{
      Swal.fire("Application Could not be submitted")
    }
    )
  }

  ngOnInit(): void {
  }

}
