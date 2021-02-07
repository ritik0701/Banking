import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import {Account, AccountNumberDTO} from 'src/app/classes/account'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

baseUrl: string = 'http://localhost:8085/';

  constructor(private myhttp:HttpClient) { 
  }
  getAccount(accNo:AccountNumberDTO) : Observable<any>{
    return this.myhttp.post(this.baseUrl+"accountdetails/",accNo);
  }

  openAccountService(openAccount:FormGroup) : Observable<any>{
    return this.myhttp.post(this.baseUrl+"openaccount/",openAccount);
  }
}
