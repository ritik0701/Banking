
import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { AbstractControlOptions, FormControl , FormGroup ,ValidatorFn,Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Changepassword } from '../changepassword';
import { ChangepasswordService } from '../changepassword.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private changepasswordService: ChangepasswordService,
    private userService: UserService) { }
 
  private subscription:Subscription = new Subscription;

  changepass = new Changepassword() ;

  ngOnInit(): void {
    this.userService.checkSession();
  }
  
  
  contactForm = new FormGroup({
    oldPassword: new FormControl('',Validators.required),
    updatedPassword: new FormControl('',Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    userId : new FormControl(sessionStorage.getItem("userId"))
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

