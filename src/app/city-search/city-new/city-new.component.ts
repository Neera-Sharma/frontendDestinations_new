/**
 * Created by bhara on 1/20/2017.
 */

import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CityService} from "../services/city.service";
import {City} from "../../entities/city";
import {Sightseeing} from "../../entities/sightseeing";
import {SightseeingService} from "../../sightseeing-search/services/sightseeing.service";

@Component({
  selector: 'city-new',
  template: `
    <h1 style="color: white">Create city</h1>
      <div>
      
      <div class="form-group">
        <label style="color: white">City Name</label>
        <input [(ngModel)]="city.cityName" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">Country</label>
        <input [(ngModel)]="city.country" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">Description</label>
        <input [(ngModel)]="city.cityDescription" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">Driveway</label>
        <input [(ngModel)]="city.cityDriveway" class="form-control">
      </div>
       <div class="form-group">
        <label style="color: white">Photolink</label>
        <input [(ngModel)]="city.cityPhotoLinkPhotoLink" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">Map</label>
        <input [(ngModel)]="city.cityMap" class="form-control">
      </div>
        <div class="form-group">
        <button style="color: white; background-color: forestgreen; opacity: 0.7" (click)="save()" class="btn btn-default"><i class="fa fa-check-square" aria-hidden="true"></i> Save</button>
      </div>
    </div>
    `
})

export class CityNewComponent {
  city = new City();

  constructor(
    private cityService: CityService,
    private router: Router) {
  }
/*
Saves the city in database
*/
  save(): void {
    this
      .cityService
      .save(this.city)
      .subscribe(
        res => {
          this.router.navigate(['/city-view', res.id]);
          this.city = res;
        },
        (err) => {
          alert("Save fails: " + err.text());
        }
      )

  }

}

