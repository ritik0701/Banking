import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, RequiredValidator} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import Swal from 'sweetalert2';
import { UserLogin } from '../user-login';
import { UserLoginService } from '../user-login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user=new UserLogin();
private subscription :Subscription =new Subscription;
 

  constructor(private router: Router, private userloginService :UserLoginService) 
  { }

  contactForm=new FormGroup({
    userId:new FormControl('',Validators.required),
    pass:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    if(sessionStorage.getItem("userId")!=null && sessionStorage.getItem("userId")!='' ){
      this.router.navigate(['/dashboard'])
    }
  }
  onLogin()
  {
     this.subscription=this.userloginService.UserLogin(this.contactForm.value)
        .subscribe((data:any) =>{
          
           if(data!=null)
           {
             sessionStorage.setItem("userId",this.contactForm.controls.userId.value)
             sessionStorage.setItem("accNo",data.accNo)
           this.router.navigate(['/dashboard'])
           }
           },(err)=>
           {
            Swal.fire("Invalid Credentials!!");
           });

    
  }
  
}





