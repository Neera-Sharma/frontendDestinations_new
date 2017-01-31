

import {PipeTransform, Pipe} from "@angular/core";
@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let  short;
    let fmt = args[0]; // 'short', 'long'
    if(value ="Graz")
    {
      short = "GRZ";
    }
    else {
      short = value.toUpperCase().slice(0,2);
    }

  }

}
