import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';


import { UserLogin } from '../user-login';
import { UserLoginService } from '../user-login.service';

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
    userId:new FormControl('',[Validators.required]),
    pass:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  }
  onLogin()
  {
    
   
        this.subscription=this.userloginService.UserLogin(this.contactForm.value)
        .subscribe((data:any) =>{
          
           if(data.status=="Login Successful!!")
           {
            Swal.fire("login successful!!");
           }
           else
           {
            Swal.fire("Invalid Credentials!!");
           }

          }
        );
console.log(this.contactForm.value)
    
  }
  

}





