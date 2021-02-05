import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Changepassword } from './changepassword';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  baseUrl: string = 'http://localhost:8085/' ;

  constructor(private myhttp:HttpClient) { }

  changePassword(newPass: Changepassword): Observable<Changepassword>
  {
    return this.myhttp.post<Changepassword>(this.baseUrl+"changePassword/" ,newPass);
  }

}
