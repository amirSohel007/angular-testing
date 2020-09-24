import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
})
export class SquarePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value != null && value != isNaN(value)) {
      return value * value;
    } else {
      return 'Not a Number';
    }
  }
}
