import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeuppercase'
})
export class PipeuppercasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
