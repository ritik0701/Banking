import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';


import { AdminLogin } from '../admin-login';
import { AdminLoginService } from '../admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin=new AdminLogin()
  private subscription :Subscription =new Subscription;
  constructor(private AdminLoginService: AdminLoginService) { }

  
  contactForm=new FormGroup({
    userId:new FormControl('',Validators.required),
    pass:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  onadminLogin()
  {
    
    this.subscription=this.AdminLoginService.AdminLogin(this.contactForm.value)
    .subscribe((data:any) =>{
      
       if(data.status=="Login Successful!!")
       {
        Swal.fire("login successful!!");
       }
       else
       {
        Swal.fire("Invalid Credentials!!");
       }

      },(err)=>{
        Swal.fire("Invalid Credentials!!");
      });
    
  }
}
