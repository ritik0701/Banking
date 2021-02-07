import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountNumberDTO } from '../classes/account';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  baseUrl: string = 'http://localhost:8085/';

  constructor(private myhttp:HttpClient) { 
  }
  getTransactions(accNo:AccountNumberDTO) : Observable<any>{
    console.log(accNo)
    return this.myhttp.post(this.baseUrl+"ministatement/",accNo);
  }
}
