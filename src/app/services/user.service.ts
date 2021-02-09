import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId!: number;
  accNo!:number;
  balance!: number;
  baseUrl: string = 'http://localhost:8085/';
  

  constructor(private myhttp:HttpClient,private router : Router) { 
  }
  
  getBeneficiaryList() : Observable<any>{
    return this.myhttp.post(this.baseUrl+"getBeneficiary/",{userId:sessionStorage.getItem('userId')});
  }

  getBalance() : Observable<any>{
    return this.myhttp.post(this.baseUrl+"accountbalance/",{accNo:sessionStorage.getItem('accNo')});
  }

  checkSession() : void{
    if(sessionStorage.getItem("userId")==null){
      this.router.navigate(['/login'])
    }
  }

  isSessionSet() : boolean{
    if(sessionStorage.getItem("userId")==null||sessionStorage.getItem("userId")==''){
      return false
    }else
    return true
  }

}
