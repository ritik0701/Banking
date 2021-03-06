import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminLogin } from './admin-login';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private myHttp: HttpClient,private router:Router) { }


  baseUrl = 'http://localhost:8085/';

  AdminLogin(admin:AdminLogin) : Observable<AdminLogin>
  {
    return this.myHttp.post<AdminLogin>(this.baseUrl+'loginAdmin/',admin)
 
  }

}
