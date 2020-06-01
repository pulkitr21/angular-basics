import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let currentYear:any=new Date().getFullYear;
    let birthYear:any=new Date(value).getFullYear;
    return currentYear-birthYear;
  }

}
