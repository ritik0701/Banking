import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import {HttpClient} from '@angular/common/http';
import { Subscription } from 'rxjs';
import { BeneficiaryService } from '../beneficiary.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
  
   

  
  private subscription :Subscription;
  
  libeneficiaryst : Array<Object> =[];
  
  loginForm!: FormGroup;

  constructor(private beneficiaryservice: BeneficiaryService,private fb: FormBuilder) {
   
   }

  ngOnInit(): void {
   

  }
  BeneficiaryForm =new FormGroup({
    baccount:new FormControl('',Validators.required),
    baccount2:new FormControl('',Validators.required),
    baccountname:new FormControl('',Validators.required),
    baccountbankifsc:new FormControl('',Validators.required)
  })
  AddBenef()
  {
    console.log(this.BeneficiaryForm.value);
  }
}
