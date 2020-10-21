import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {
  transform(value: number): unknown {
    return [...Array(value).keys()];
  }
}
