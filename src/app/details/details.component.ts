import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit{
  chartData: any[]=[]
  chartnum: any[]=[]
constructor(private _DataService:DataService){}
  ngOnInit(): void {
   
    this._DataService.customerData().subscribe({
      next: (data) => {        
        this.chartData=data;
      }, error:(err:HttpErrorResponse)=>{
  console.log(err);
  
      }
    })
  
    this._DataService.transactionsData().subscribe({
      next: (data) => {
        
        this.chartnum=data;
      }, error:(err:HttpErrorResponse)=>{
        console.log(err);
        
      }
    })
    }
   

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Ahmed Ali','Aya Elsayed','Mina Adel','Sarah Reda','Mohamed Sayed'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [1000,550,500,750,2500],
        type: 'line',
      },
    ],
  };
  chartOption2: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Ahmed Ali','Aya Elsayed','Mina Adel','Sarah Reda','Mohamed Sayed'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [2000,1300,1250,0,875],
        type: 'line',
      },
    ],
  };
}
