import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Changetranspassword } from '../changetranspassword';
import { ChangetranspasswordService } from '../changetranspassword.service';

@Component({
  selector: 'app-change-transaction-password',
  templateUrl: './change-transaction-password.component.html',
  styleUrls: ['./change-transaction-password.component.css']
})
export class ChangeTransactionPasswordComponent implements OnInit {

  constructor(private changetranspasswordService : ChangetranspasswordService) { }

  private subscription : Subscription;

  changetranspass = new Changetranspassword();

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    oldPassword: new FormControl('',Validators.required),
    updatedPassword: new FormControl('',Validators.required),
    confirmPassword: new FormControl(''),
    userId: new FormControl(10000)
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
