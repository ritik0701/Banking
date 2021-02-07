import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import {HttpClient} from '@angular/common/http';
import { Subscription } from 'rxjs';
import { BeneficiaryService } from '../beneficiary.service';
import { Beneficiary } from '../beneficiary';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
 

  
  private subscription :Subscription;
  benef :Beneficiary[];
  
  listbeneficiary : Array<Object> =[];
  
  
  
  
  

  constructor(private beneficiaryservice: BeneficiaryService) { }

  ngOnInit(): void { }
  BeneficiaryForm =new FormGroup({
    beneficiaryAccNo:new FormControl('',[Validators.required,Validators.pattern("^[0-9]+$"),Validators.maxLength(9),Validators.minLength(9)]),
    
    beneficiaryName:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
    bankIfsc:new FormControl('',Validators.required),
    userId:new FormControl('',Validators.required),
    dateAdded:new FormControl('',Validators.required)
  })
  AddBenef()
  {
    
    console.log(this.BeneficiaryForm.value);
    this.beneficiaryservice.addBeneficiary(this.BeneficiaryForm.value)
    .subscribe(
      (Response) =>{ console.log('Success!',(Response)),Swal.fire('Beneficiary account added successfully :)')},
      (error) => {console.error('Error!',error),Swal.fire('Beneficiary Not added :(')}
      );
      
    
      
    
  }
}
