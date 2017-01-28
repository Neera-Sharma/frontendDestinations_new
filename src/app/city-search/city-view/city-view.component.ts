/**
 * Created by bhara on 1/23/2017.
 */


import { Component } from '@angular/core';
import {City, CityResponse} from "../../entities/city";
import {ActivatedRoute, Router} from "@angular/router";
import {CityService} from "../../city-search/services/city.service";
import {Sightseeing, SightseeingResponse} from "../../entities/sightseeing";
import {SightseeingService} from "../../sightseeing-search/services/sightseeing.service";
import {forEach} from "@angular/router/src/utils/collection";


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
        <label>Country</label>
        {{city.country }}
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
      <label>Sightseeings</label>
      <tr *ngFor="let sightseeing of sightseeings">
        <a [routerLink]="['/sightseeing-view', sightseeing.id,{ showDetails: true, expertMode: false}]">
        {{sightseeing.sightseeingName }}
        </a> 
      </tr>
      </div>
      <div class="form-group">
        <button class="btn btn-default" [routerLink]="['/city-edit', city.id, { showDetails: true, expertMode: false}]">Editieren</button>
        <button class="btn btn-default" type="button" (click)="delete()">Delete</button>
      </div>
      <div>
      <p style="color: yellow">Attention! If you delete this city, all sightseeings of this city will be deleted!</p>
</div>
    </div>
    `
})

export class CityViewComponent {
  id: string;
  sightseeings: Sightseeing[] = [];
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
          let url = city._links.sightseeings.href;
          this
            .sightseeingService
            .findSightseeingsByUrl(url)
            .subscribe(
            res => {
              this.sightseeings = res._embedded.sightseeings;
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

