
import {Directive, forwardRef} from "@angular/core";
import {AbstractControl, NG_ASYNC_VALIDATORS} from "@angular/forms";

@Directive({
  selector: 'input[asyncCity]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => AsyncCityValidator ), multi:true}]
})
export class AsyncCityValidator {

  validate(c: AbstractControl): Promise<any> {

    return new Promise((resolve) => {
      setTimeout(() => {

        if (c.value == 'Graz' || c.value == 'Hamburg') {
          resolve({});
        }
        else {
          resolve({asyncCity: true});
        }

      }, 100)
    })

  }

}

