import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit: number, shortenSign: string) {
    return value.length < limit ? value : `${value.substring(0, limit)}${shortenSign}`;
  }
}
