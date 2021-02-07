import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
//import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgetidpass',
  templateUrl: './forgetidpass.component.html',
  styleUrls: ['./forgetidpass.component.css']
})
export class ForgetidpassComponent implements OnInit {

  
  contactForm=new FormGroup({
   accNo:new FormControl('',Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }
onSubmit()
{
  console.log(this.contactForm.value)
  Swal.fire("Check Your Email For Credentials!!");
}
}
