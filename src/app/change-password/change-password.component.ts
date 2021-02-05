import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,Validators} from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    oldpassword: new FormControl('',Validators.required),
    newpassword: new FormControl('',Validators.required),
    confirmpassword: new FormControl('',Validators.required)
  });

  onchangePass()
  {
    console.log(this.contactForm.value);
  }
}

