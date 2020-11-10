import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'created'
})
export class CreatedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
