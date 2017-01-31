import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Sightseeing} from "../entities/sightseeing";

@Component({
  templateUrl: './sightseeing-card.component.html',
  selector: 'sightseeing-card'
})
export class SightseeingCardComponent {

  @Input() item: Sightseeing;
  @Input() selectedItem: Sightseeing;
  @Output() selectedItemChange = new EventEmitter();

  /*select the sightseeing item */
  select() {
    this.selectedItemChange.next(this.item);
  }
}
