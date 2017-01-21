/**
 * Created by bhara on 1/20/2017.
 */

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CityService} from "../services/city.service";
import {City} from "../../entities/city";

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
        <label>User-creator Id</label>
        <input [(ngModel)]="city.user.id" class="form-control">
      </div>
      <div class="form-group">
        <label>Sightseeing Id</label>
        <input [(ngModel)]="city.sightseeing.id" class="form-control">
      </div>

      <div class="form-group">
        <button (click)="save()" class="btn btn-default">Save</button>
      </div>
    </div>
    `
})

export class CityNewComponent {
  id: string;
  showDetails: string;

  constructor(
    private cityService: CityService,
    route: ActivatedRoute) {

    route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
        this.load(this.id);
      }
    )

  }

  city: City;
  message: string;

  load(id: string): void {
    this
      .cityService
      .findById(id)
      .subscribe(
        city => {
          this.city = city;
          this.message = "";
        },
        (err) => {
          this.message = "Fehler beim Speichern: " + err.text();
        }
      )
  }

  addNew()
  {
     this
      .cityService
      .save(this.city)
      .subscribe(
      city => {
      this.city = city;
      this.message = "Daten wurden gespeichert!";
      },
      (err) => {
         this.message = "Fehler beim Speichern: " + err.text();
      }
     )

 }

  save(): void {
    this
      .cityService
      .save(this.city)
      .subscribe(
        city => {
          this.city = city;
          this.message = "Daten wurden gespeichert!";
        },
        (err) => {
          this.message = "Fehler beim Speichern: " + err.text();
        }
      )

  }

}

