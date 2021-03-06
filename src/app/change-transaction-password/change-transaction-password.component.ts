import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Changetranspassword } from '../changetranspassword';
import { ChangetranspasswordService } from '../changetranspassword.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-transaction-password',
  templateUrl: './change-transaction-password.component.html',
  styleUrls: ['./change-transaction-password.component.css']
})
export class ChangeTransactionPasswordComponent implements OnInit {

  constructor(private changetranspasswordService : ChangetranspasswordService,private userService:UserService) { }

  private subscription : Subscription = new Subscription;

  changetranspass = new Changetranspassword();

  ngOnInit(): void {
    this.userService.checkSession();
  }

  contactForm = new FormGroup({
    oldPassword: new FormControl('',Validators.required),
    updatedPassword: new FormControl('',Validators.required),
    confirmPassword: new FormControl(''),
    userId: new FormControl(sessionStorage.getItem("userId"))
  });
    onchangePass()
    {
      this.subscription = this.changetranspasswordService.changetransPassword(this.contactForm.value)
      .subscribe((data : any) => {
        if(data.status == "Transaction Password Changed!!") 
        {
          Swal.fire(" Transaction Password Changed!! ");
        }
        else
        {
          Swal.fire( "User Doesn't Exist!!");
        }
      }
     
      );
      console.log(this.contactForm.value);
    }
  
}
