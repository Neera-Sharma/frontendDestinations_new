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
  template: `
    <h1>Edit City</h1>
    
    <div *ngIf="city">
      <div class="form-group">
        <label>Id</label>
        <input [(ngModel)]="city.id" class="form-control">
      </div>
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
        <input [(ngModel)]="city.cityPhotoLinkPhotoLink" class="form-control">
      </div>
      <div class="form-group">
        <label>City Map</label>
        <input [(ngModel)]="city.cityMap" class="form-control">
      </div>
      
      <div class="form-group">
        <label>Sightseeing</label>
        <select [(ngModel)]="sightId" class="form-control">
          <option *ngFor="let sightseeing of sightseeings" value="{{ sightseeing.id }}">{{ sightseeing.sightseeingName }}</option>
        </select>
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
  sightId:number;
  city=new City();
  sightseeings:Sightseeing[]=[];

  constructor(
    private router: Router,
    private sightseeingService: SightseeingService,
    private cityService: CityService,
    private route: ActivatedRoute) {

    this.route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
        this.load();
      }
    );
    this.sightseeingService
      .find()
      .subscribe(
        res => {
          this.sightseeings = res._embedded.sightseeings;
        },
        err => {
          alert('Loading failed: ' + err.text());
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
          let url = res._links.sightseeing.href;
          this
            .sightseeingService
            .findByUrl(url)
            .subscribe(
              res => {
                this.sightId = res.id;
              },
              err => {
                alert('Loading failed: ' + err.text());
              }
            );
        },
        (err) => {
          alert("Loading failed: " + err.text());
        }
      );
  }

  save(): void {
    this.city.sightseeing = this.getSightseeingIdLink(this.sightId);
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
  getSightseeingIdLink(id: number): string {
    return this.sightseeingService.url + '/' + id;
  }
}
