import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ISightseeing} from "../entities/sightseeing";

@Component({
  templateUrl: './sightseeing-card.component.html',
  selector: 'sightseeing-card'
})
export class SightseeingCardComponent {

  @Input() item: ISightseeing;
  @Input() selectedItem: ISightseeing;
  @Output() selectedItemChange = new EventEmitter();

  select() {
    this.selectedItemChange.next(this.item);
  }
}
