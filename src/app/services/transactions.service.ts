import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountNumberDTO } from '../classes/account';
import { MakeTransaction } from '../classes/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  baseUrl: string = 'http://localhost:8085/';

  constructor(private myhttp:HttpClient) { 
  }
  getTransactions(accNo:AccountNumberDTO) : Observable<any>{
    return this.myhttp.post(this.baseUrl+"ministatement/",accNo);
  }

  makeTransaction(mt : MakeTransaction): Observable<any>{
    return this.myhttp.post(this.baseUrl+"addtransaction/",mt);
  }
}
