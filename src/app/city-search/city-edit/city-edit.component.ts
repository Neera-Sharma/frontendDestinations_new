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
  /*Loads the city data from database as soon as constructor is called*/
  load(): void {
    this
      .cityService
      .findById(this.id)
      .subscribe(
        res => {
          this.city = res;
          let url = res._links.sightseeings.href;
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
/*Saves the city in database with edited results*/
  save(): void {
    this.city.sightseeings = this.getSightseeingIdLink(this.sightId);
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
  /*gets the sightseeings as a link in city edit form*/
  getSightseeingIdLink(id: number): string {
    return this.sightseeingService.url + '/' + id;
  }
}


/*


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
*/

