import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: false,
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const millis = value % 1000;
    const minutes = (value / 60000) | 0;
    const seconds = ((value / 1000) | 0) % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${String(millis).padStart(3, '0')}`;
  }
}
