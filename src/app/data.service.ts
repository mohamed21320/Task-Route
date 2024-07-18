import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _HttpClient:HttpClient) {}

  customerData():Observable<any>
  {
    return this._HttpClient.get(`http://localhost:3000/customers`)
  }
  transactionsData():Observable<any>
  {
    return this._HttpClient.get(`http://localhost:3000/transactions`)
  }

  getTransactionsByCustomerId(customerId: number): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/transactions?customer_id=${customerId}`);
  }


}
