import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-change-transaction-password',
  templateUrl: './change-transaction-password.component.html',
  styleUrls: ['./change-transaction-password.component.css']
})
export class ChangeTransactionPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    oldtransactionpassword: new FormControl('',Validators.required),
    newtransactionpassword: new FormControl('',Validators.required),
    confirmtransactionpassword: new FormControl('',Validators.required)
  });
    onchangeTransPass(){
      console.log(this.contactForm.value);
    }
  
}
