import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeepipe'
})
export class EmployeePipe implements PipeTransform {

  transform(value: string, gender: string): any {
    if (gender.toLowerCase() == 'male')
      return "Mr. " + value;
    else
      return "Miss " + value;
  }

}
