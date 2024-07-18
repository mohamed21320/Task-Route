import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './Customer';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr:Customer[],searchText:string): Customer[] {
    return arr.filter((Customer)=>Customer.name.toLowerCase().includes(searchText.toLowerCase()))
  }

}
