
import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { AbstractControlOptions, FormControl , FormGroup ,ValidatorFn,Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Changepassword } from '../changepassword';
import { ChangepasswordService } from '../changepassword.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private changepasswordService: ChangepasswordService) { }
 
  private subscription:Subscription ;

  changepass = new Changepassword() ;

  ngOnInit(): void {
  }
  
  
  contactForm = new FormGroup({
    oldPassword: new FormControl('',Validators.required),
    updatedPassword: new FormControl('',Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    userId : new FormControl(10000)
    }
     );

  onchangePass()
  {
    this.subscription = this.changepasswordService.changePassword(this.contactForm.value)
    .subscribe(( data: any) => { 
      if(data.status == "User Password Changed!!")
      {
        Swal.fire(" User Password Changed!!") ;
      }
      else 
      {
        Swal.fire( " User Doesn't exist!!") ;
      }
    }
    
    );
    console.log(this.contactForm.value);
  }
}
