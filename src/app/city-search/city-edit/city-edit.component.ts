/**
 * Created by bhara on 1/20/2017.
 */

import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CityService} from "../services/city.service";
import {City} from "../../entities/city";

@Component({
  template: `
    <h1>Edit City</h1>
    
    <div *ngIf="city">
      <div class="form-group">
        <label>Name Of City</label>
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
        <input [(ngModel)]="city.cityPhotoLink" class="form-control">
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
