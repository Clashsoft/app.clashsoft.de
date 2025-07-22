import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'range',
  standalone: false,
})
export class RangePipe implements PipeTransform {
  transform(value: number): number[] {
    return value <= 0 ? [] : [...Array(value).keys()];
  }
}
