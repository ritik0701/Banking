import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiary } from './beneficiary';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  baseUrl: string = 'http://localhost:8085/';

  constructor(private myhttp:HttpClient) { }

 addBeneficiary(newBenf: Beneficiary): Observable<Beneficiary>
 {
    
  return this.myhttp.post<Beneficiary>(this.baseUrl+"addBeneficiary/",newBenf);
  }

}
