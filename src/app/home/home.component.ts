import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Customer } from '../Customer';
import { Transaction } from './../transaction';



   
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
 searchText: string=''
  customerData:Customer[]=[]
  transactionsData:Transaction[]=[]
  filteredCustomers:any[]=[]

  constructor(private _DataService:DataService){}
  ngOnInit(): void {

  this._DataService.customerData().subscribe({
    next: (data) => {
      this.customerData=data;
      console.log(data);
      
    }, error:(err:HttpErrorResponse)=>{
console.log(err);

    }
  })

  this._DataService.transactionsData().subscribe({
    next: (data) => {
      this.transactionsData=data;
      console.log(data);
      
    }, error:(err:HttpErrorResponse)=>{
      console.log(err);
      
    }
  })
  }
  filterCustomers(event: any): void {
    const filterValue = event.target.value;
    if (filterValue) {
      this.filteredCustomers = this.customerData.filter(customer => customer.name === filterValue);
    } else {
      this.filteredCustomers = this.customerData;
    }
  }

  selectCustomer(customer:Customer): void {
    this._DataService.getTransactionsByCustomerId(customer.id).subscribe({
      next:(data) => {
        this.transactionsData= data
      },error:(err:HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

}

// http://localhost:3000/customers   
// http://localhost:3000/transactions