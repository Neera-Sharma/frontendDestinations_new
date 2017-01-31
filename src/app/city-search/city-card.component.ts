/**
 * Created by bhara on 1/20/2017.
 */


import { Component, Input, Output, EventEmitter } from '@angular/core';
import {City} from "../entities/city";

@Component({
  templateUrl: './city-card.component.html',
  selector: 'city-card'
})
export class CityCardComponent {

  @Input() item: City;
  @Input() selectedItem: City;
  @Output() selectedItemChange = new EventEmitter();

  /*selects the item in city card*/
  select() {
    this.selectedItemChange.next(this.item);
  }

}
