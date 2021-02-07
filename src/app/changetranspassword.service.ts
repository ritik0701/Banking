import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Changetranspassword } from './changetranspassword';

@Injectable({
  providedIn: 'root'
})
export class ChangetranspasswordService {
 

  baseUrl: string = 'http://localhost:8085/' ;

  constructor(private myhttp:HttpClient){}

  changetransPassword(newPass: Changetranspassword): Observable<Changetranspassword>
  {
    return this.myhttp.post<Changetranspassword>(this.baseUrl+ "resetTransPass/" , newPass);
  }

  }
