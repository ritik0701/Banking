import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserLogin } from '../user-login';
import { UserLoginService } from '../user-login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//userlogin: UserLogin[]=[];

user=new UserLogin();
private subscription :Subscription =new Subscription;
 

  constructor(private userloginService :UserLoginService) 
  { }

  contactForm=new FormGroup({
    userid:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  }

  onLogin()
  {
    this.subscription=this.userloginService.UserLogin(this.user)
    .subscribe((data:UserLogin)=>
    {
this.user=data;
    },(err)=>{
      console.log(err);
    });
    console.log(this.contactForm.value);
  }

}
