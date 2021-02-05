import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, RequiredValidator} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  contactForm=new FormGroup({
    userid:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }

  onLogin()
  {
    console.log(this.contactForm.value);
  }
}
