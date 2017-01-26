
import { Component } from '@angular/core';

@Component({
  template: `

    <h1  style="text-align:center; color: white; font-size:200%">Welcome!</h1>  
    <p style="text-align:center; color: white; font-size:200%">Let's explore the world!</p> 
    <p style="text-align: center;">
    <button style="alignment: center; font-size:200%; size: 80px; background-color: forestgreen; opacity: 0.7;" type="button" class="btn btn-success" [routerLink]="['/sightseeing-search']">
          <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
            Sightseeings
    </button>
    <button style="alignment: center; font-size:200%; size: 80px; background-color: forestgreen; opacity: 0.7;" type="button" class="btn btn-success" [routerLink]="['/city-search']">
          <i class="fa fa-building fa-3x" aria-hidden="true"></i>
           Cities
    </button>
    </p>
  `
})
export class HomeComponent {
}
