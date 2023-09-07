import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productNameAdjuster'
})
export class ProductNameAdjusterPipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 19 ? `${value.slice(0, 19)}..` : value;
    
  }

}
