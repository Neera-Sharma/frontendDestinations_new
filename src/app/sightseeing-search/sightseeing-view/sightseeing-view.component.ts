import { Component } from '@angular/core';
import {SightseeingService} from "../services/sightseeing.service";
import {Sightseeing, SightseeingResponse} from "../../entities/sightseeing";
import {ActivatedRoute, Router} from "@angular/router";
import {CityService} from "../../city-search/services/city.service";
import {City} from "../../entities/city";

@Component({
  selector: 'sightseeing-view',
  template: `
    <h1>View sightseeing</h1>
    <div>
      <div class="form-group">
        <label>Sightseeing Name</label>
        {{ sightseeing.sightseeingName }}
      </div>
      <div class="form-group">
        <label>Description</label>
        {{ sightseeing.sightseeingDescription }}
      </div>
      <div class="form-group">
        <label>Driveway</label>
        {{ sightseeing.sightseeingDriveway }}
      </div>
       <div class="form-group">
        <label>Photolink</label>
        {{ sightseeing.sightseeingPhotoLink }}
      </div>
      <div class="form-group">
        <label>Map</label>
        {{ sightseeing.sightseeingMap }}
      </div>
      <div class="form-group">
        <label>City</label>
        <a [routerLink]="['/city-edit', city.id,{ showDetails: true, expertMode: false}]">
        {{ city.cityName }}
        </a>        
      </div>
      <div class="form-group">
        <button class="btn btn-default" [routerLink]="['/sightseeing-edit', sightseeing.id, { showDetails: true, expertMode: false}]">Editieren</button>
        <button class="btn btn-default" type="button" (click)="delete()">Delete</button>
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

