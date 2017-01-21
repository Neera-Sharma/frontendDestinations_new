import {NgModule} from "@angular/core";
import { CommonModule} from '@angular/common';
import {CityPipe} from "./pipes/city.pipe";
import {CityValidator} from "./validators/city.validator";
import {AsyncCityValidator} from "./validators/async-city.validator";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    //CityPipe,
    // CityValidator,
    //AsyncCityValidator
  ],
  providers: [
    // Vorerst keine Provider
  ],
  exports: [
   // CityPipe,
   // CityValidator,
   // AsyncCityValidator
  ]

})
export class SharedModule {

}
