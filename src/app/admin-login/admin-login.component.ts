import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, RequiredValidator} from '@angular/forms';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  
  contactForm=new FormGroup({
    adminid:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  onadminLogin()
  {
    console.log(this.contactForm.value);
  }
}
