import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'raters',
  standalone: true,
})
export class RatersPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return value >= 1000 ? (value / 1000).toFixed(1) + 'K' : value;
  }
}
