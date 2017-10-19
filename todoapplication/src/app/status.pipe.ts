import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
   if (field=='') return items;
   return items.filter(it => it[field] == value);
 }

}
