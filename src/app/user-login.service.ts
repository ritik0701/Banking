import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from './user-login';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private myHttp: HttpClient)
  {

  }
  
  baseUrl = 'http://localhost:8085/';

  UserLogin(user:UserLogin): Observable<UserLogin>
  {
    return this.myHttp.post<UserLogin>(this.baseUrl+'loginUser/',user)
  }






  /*UserLogin(user:UserLogin): Observable<UserLogin>
  {
    return this.myHttp.post<UserLogin>(this.baseUrl+'loginUser/',user);
  }
  UserLogin(user:UserLogin): Observable<any>{
    console.log(this.UserLogin);
    return this.myHttp.post<any>(this.baseUrl + 'loginUser/',user);
    //return this.myHttp.get<UserLogin[]>(this.baseUrl + 'loginUser/');
  }
  /*
  UserLogin(flight: number): Observable<UserLogin[]>{
    return this.myHttp.get<UserLogin[]>(this.baseUrl + 'getFlights/');
  }*/
}
