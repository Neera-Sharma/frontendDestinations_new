import { Component } from '@angular/core';
import {SightseeingService} from "../services/sightseeing.service";
import {Sightseeing, SightseeingResponse} from "../../entities/sightseeing";
import {ActivatedRoute, Router} from "@angular/router";
import {CityService} from "../../city-search/services/city.service";
import {City} from "../../entities/city";

@Component({
  selector: 'sightseeing-view',
  template: `
    <h1 style="color: white">{{ sightseeing.sightseeingName }}</h1>
    <div>
      <div class="form-group" style="color: white;">
        <label>Description</label>
        {{ sightseeing.sightseeingDescription }}
      </div>
      <div class="form-group" style="color: white;">
        <label>Driveway</label>
        {{ sightseeing.sightseeingDriveway }}
      </div>
       <div class="form-group" style="color: white;">
        <label>Photolink</label>
        {{ sightseeing.sightseeingPhotoLink }}
      </div>
      <div class="form-group" style="color: white;">
        <label>Map</label>
        {{ sightseeing.sightseeingMap }}
      </div>
      <div class="form-group" style="color: white;">
        <label>City</label>
        <a [routerLink]="['/city-view', city.id,{ showDetails: true, expertMode: false}]">
        {{ city.cityName }}
        </a>
      </div>
      <div class="form-group">
        <button style="color: white; background-color: forestgreen; opacity: 0.7" class="btn btn-default" [routerLink]="['/sightseeing-edit', sightseeing.id, { showDetails: true, expertMode: false}]"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
        <button style="color: white; background-color: forestgreen; opacity: 0.7" class="btn btn-default" type="button" (click)="delete()"> <i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
      </div>
    </div>
    `
})

export class SightseeingViewComponent {
  id: string;
  city = new City();
  sightseeing = new Sightseeing();

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
  /*delete the data in database by selected id*/
  delete(): void {
    this
      .sightseeingService
      .delete(this.id)
      .subscribe(
        res => {
          alert("Erfolgreich gelöscht");
          this.router.navigate(['/sightseeings-search']);
        },
        (err) => {
          alert("Fehler beim Löschen: " + err.text());
        }
      );
  }
  /*load the sightseeing data from database*/
  load(): void {
    this
      .sightseeingService
      .findById(this.id)
      .subscribe(
        res => {
          this.sightseeing = res;
          let sightseeing = this.sightseeing as SightseeingResponse;
          let url = sightseeing._links.city.href;
          this
            .cityService
            .findByUrl(url)
            .subscribe(
              res => {
                this.city = res;
              },
              err => {
                alert('Fehler beim Laden: ' + err.text());
              }
            );
        },
        (err) => {
          alert("Fehler beim Laden: " + err.text());
        }
      );
  }
}

