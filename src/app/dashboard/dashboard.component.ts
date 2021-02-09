import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  balance : number | undefined ;
  constructor(private userService: UserService,private router:Router) { }
  private subscription : Subscription = new Subscription
  check : boolean =false
  ngOnInit(): void {
    if(!this.userService.isSessionSet()){
      this.router.navigate(['/login'])

    }
    this.userService.checkSession();
    this.subscription = this.userService.getBalance().subscribe((res : number)=>{
      this.balance = res
    })
  }

}
