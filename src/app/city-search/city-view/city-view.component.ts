/**
 * Created by bhara on 1/23/2017.
 */


import { Component } from '@angular/core';
import {City, CityResponse} from "../../entities/city";
import {ActivatedRoute, Router} from "@angular/router";
import {CityService} from "../../city-search/services/city.service";
import {Sightseeing} from "../../entities/sightseeing";
import {SightseeingService} from "../../sightseeing-search/services/sightseeing.service";


@Component({
  selector: 'city-view',
  template: `
    <h1>City View</h1>
    <div>
      <div class="form-group">
        <label>City Name</label>
        {{city.cityName }}
      </div>
      <div class="form-group">
        <label>Description</label>
        {{ city.cityDescription }}
      </div>
      <div class="form-group">
        <label>Driveway</label>
        {{ city.cityDriveway }}
      </div>
       <div class="form-group">
        <label>Photolink</label>
        {{ city.cityPhotoLink }}
      </div>
      <div class="form-group">
        <label>City Map</label>
        {{city.cityMap }}
      </div>
      <div class="form-group">
        <label>Sightseeing</label>
        <a [routerLink]="['/sightseeing-edit', sightseeing.id,{ showDetails: true, expertMode: false}]">
        {{sightseeing.sightseeingName }}
        </a>        
      </div>
      <div class="form-group">
        <button class="btn btn-default" [routerLink]="['/city-edit', city.id, { showDetails: true, expertMode: false}]">Editieren</button>
        <button class="btn btn-default" type="button" (click)="delete()">Delete</button>
      </div>
    </div>
    `
})

export class CityViewComponent {
  id: string;
  sightseeing = new Sightseeing();
  city = new City();


  constructor(
    private cityService: CityService,
    private sightseeingService: SightseeingService,
    private route: ActivatedRoute,
    private router: Router) {

    route.params.subscribe(
      p => {
        this.id = p['id'];
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
          let city = this.city as CityResponse;
          let url = city._links.sightseeing.href;
          this
            .sightseeingService
            .findByUrl(url)
            .subscribe(
              res => {
                this.sightseeing = res;
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
  delete(): void {
    this
      .cityService
      .delete(this.id)
      .subscribe(
        res => {
          alert("deleted sucessfully");
          this.router.navigate(['/city-search']);
        },
        (err) => {
          alert("Failure by delete: " + err.text());
        }
      );
  }
}

