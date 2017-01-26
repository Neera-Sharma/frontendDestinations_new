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
    <h1>Add New City</h1>
    <div>
      {{ this.message }}
    </div>
    <div *ngIf="city">
      <!--
      <div class="form-group">
        <label>Id</label>
        <input [(ngModel)]="city.id" class="form-control">
      </div>
      -->
      <div class="form-group">
        <label>City Name</label>
        <input [(ngModel)]="city.cityName" class="form-control">
      </div>
      <div class="form-group">
        <label>Country</label>
        <input [(ngModel)]="city.country" class="form-control">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input [(ngModel)]="city.cityDescription" class="form-control">
      </div>
      <div class="form-group">
        <label>Driveway</label>
        <input [(ngModel)]="city.cityDriveway" class="form-control">
      </div>
       <div class="form-group">
        <label>City Photolink</label>
        <input [(ngModel)]="city.cityPhotoLinkPhotoLink" class="form-control">
      </div>
      <div class="form-group">
        <label>City Map</label>
        <input [(ngModel)]="city.cityMap" class="form-control">
      </div>
       <div class="form-group">
        <button (click)="save()" class="btn btn-default">Save</button>
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

