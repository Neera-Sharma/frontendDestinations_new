
import {Directive, forwardRef, Attribute} from "@angular/core";
import {Validator, AbstractControl, NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: 'input[city]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => CityValidator), multi:true}]
})
export class CityValidator implements Validator {

  // @Input() city: string

  constructor(@Attribute('city') private city: string) {

  }

  validate(c: AbstractControl): any {

    //let allowedCities = ['Graz', 'Hamburg', 'Frankfurt', 'Wien', 'Zürich', 'Gleisdorf'];
    let allowedCities = this.city;

    if (allowedCities.indexOf(c.value) > -1) {
      return {};
    }

    return {
      city: "Stadt wird nicht gefunden!"
    };


  }

}

