import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: number): string {
    if(value < 20){
      return "weak";
    } else if(value < 40 && value > 50) {
      return "strong ";
    } else {
      return "strongest";
    }
  }

}
