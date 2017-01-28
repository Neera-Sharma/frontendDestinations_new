

import {PipeTransform, Pipe} from "@angular/core";
@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let long, short;
    let fmt = args[0]; // 'short', 'long'

    switch(value) {
      case "Graz":
        long = "Flughafen Graz Thalerhof";
        short = "GRZ";
        break;
      case "Hamburg":
        long = "Aiport Hamburg Fulsbüttl Helmut Schmidt";
        short = "HAM";
        break;
      default:
        long = short = "ROM";
    }

    if (fmt == 'short') return short;
    return long;


  }

}
