/**
 * Created by bhara on 1/20/2017.
 */

import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CityService} from "../services/city.service";
import {City} from "../../entities/city";
import {SightseeingService} from "../../sightseeing-search/services/sightseeing.service";
import {Sightseeing} from "../../entities/sightseeing";

@Component({
  template: `
    <h1 style="color: white">Edit {{ city.cityName }}</h1>
    
    <div *ngIf="city">
      <div class="form-group">
        <label style="color: white">Name :</label>
        <input [(ngModel)]="city.cityName" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">Country :</label>
        <input [(ngModel)]="city.country" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">Description :</label>
        <input [(ngModel)]="city.cityDescription" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">Driveway :</label>
        <input [(ngModel)]="city.cityDriveway" class="form-control">
      </div>
       <div class="form-group">
        <label style="color: white">Photo :</label>
        <input [(ngModel)]="city.cityPhotoLink" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">Map :</label>
        <input [(ngModel)]="city.cityMap" class="form-control">
      </div>      
      <div class="form-group">
        <button style="color: white; background-color: forestgreen; opacity: 0.7" (click)="save()" class="btn btn-default"><i class="fa fa-check-square" aria-hidden="true"></i> Save</button>
      </div>
    </div>
    `
})


export class CityEditComponent {
  id: string;
  showDetails: string;
  city=new City();

  constructor(
    private router: Router,
    private cityService: CityService,
    private route: ActivatedRoute) {

    this.route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
        this.load();
      }
    );
  }

  load(): void {
    this
      .cityService
      .findById(this.id)
      .subscribe(
        res => {
          this.city = res;
        },
        (err) => {
          alert("Loading failed: " + err.text());
        }
      );
  }

  save(): void {

    this.city.sightseeings = [];

    this
      .cityService
      .save(this.city)
      .subscribe(
        res => {
          this.router.navigate(['/city-view', res.id]);
          this.city = res;
        },
        (err) => {
          alert("Save failed: " + err.text());
        }
      );
  }
}

