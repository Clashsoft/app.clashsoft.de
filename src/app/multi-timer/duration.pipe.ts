import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const minutes = (value / 60) | 0;
    const seconds = value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
