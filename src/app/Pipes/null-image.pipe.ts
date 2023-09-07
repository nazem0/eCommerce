import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullImage'
})
export class NullImagePipe implements PipeTransform {

  transform(value: string): string {
    if(value)
    {
      return value;
    }
    return "https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg";
  }

}
