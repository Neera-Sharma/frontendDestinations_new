import { Component } from '@angular/core';
import {SightseeingService} from "../services/sightseeing.service";
import {Sightseeing} from "../../entities/sightseeing";
import {Router} from "@angular/router";
import {CityService} from "../../city-search/services/city.service";
import {City} from "../../entities/city";

@Component({
  selector: 'sightseeing-create',
  template: `
    <h1 style="color: white">Create sightseeing</h1>
    <p style="color: yellow">Attention! Before creating a sightseeing you have to create a city where this sighseeing is located!</p>
    <div>
      <div class="form-group">
        <label style="color: white">Sightseeing Name</label>
        <input [(ngModel)]="sightseeing.sightseeingName" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">Description</label>
        <input [(ngModel)]="sightseeing.sightseeingDescription" class="form-control">
      </div> 
      <div class="form-group">
        <label style="color: white">Driveway</label>
        <input [(ngModel)]="sightseeing.sightseeingDriveway" class="form-control">
      </div>
       <div class="form-group">
        <label style="color: white">Photolink</label>
        <input [(ngModel)]="sightseeing.sightseeingPhotoLink" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">Map</label>
        <input [(ngModel)]="sightseeing.sightseeingMap" class="form-control">
      </div>
      <div class="form-group">
        <label style="color: white">City</label>
        <select [(ngModel)]="sightseeing.city" class="form-control">
          <option *ngFor="let city of cities" value="{{ getCityIdLink(city.id) }}">{{ city.cityName }}</option>
        </select>
      </div>

      <div class="form-group">
        <button style="color: white; background-color: forestgreen; opacity: 0.7" (click)="save()" class="btn btn-default"><i class="fa fa-check-square" aria-hidden="true"></i> Save</button>
      </div>
    </div>
    `
})

export class SightseeingCreateComponent {
  sightseeing = new Sightseeing();
  cities: City[] = [];

  constructor(
    private sightseeingService: SightseeingService,
    private cityService: CityService,
    private router: Router) {

    this.cityService
      .find()
      .subscribe(
        res => {
          this.cities = res._embedded.cities;
        },
        err => {
          alert('Fehler beim Laden: ' + err.text());
        }
      );
  }

  getCityIdLink(id: number): string {
    return this.cityService.url + '/' + id;
  }

  save(): void {
    this
      .sightseeingService
      .save(this.sightseeing)
      .subscribe(
        res => {
          this.router.navigate(['/sightseeing-view', res.id]);
          this.sightseeing = res;
        },
        (err) => {
          alert("Fehler beim Speichern: " + err.text());
        }
      );
  }
}

