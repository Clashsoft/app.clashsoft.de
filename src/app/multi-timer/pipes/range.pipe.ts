import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {
  transform(value: number): unknown {
    return value <= 0 ? [] : [...Array(value).keys()];
  }
}
