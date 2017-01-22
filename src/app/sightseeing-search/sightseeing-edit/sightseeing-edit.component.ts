import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SightseeingService} from "../services/sightseeing.service";
import {Sightseeing} from "../../entities/sightseeing";
import {CityService} from "../../city-search/services/city.service";
import {City} from "../../entities/city";

@Component({
  template: `
    <h1>Edit Sightseeing</h1>
    <div *ngIf="sightseeing">
      <div class="form-group">
        <label>Name</label>
        <input [(ngModel)]="sightseeing.sightseeingName" class="form-control">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input [(ngModel)]="sightseeing.sightseeingDescription" class="form-control">
      </div>
      <div class="form-group">
        <label>Driveway</label>
        <input [(ngModel)]="sightseeing.sightseeingDriveway" class="form-control">
      </div>
       <div class="form-group">
        <label>Photo</label>
        <input [(ngModel)]="sightseeing.sightseeingPhotoLink" class="form-control">
      </div>
      <div class="form-group">
        <label>Map</label>
        <input [(ngModel)]="sightseeing.sightseeingMap" class="form-control">
      </div>
      <div class="form-group">
        <label>City</label>
        <select [(ngModel)]="cityId" class="form-control">
          <option *ngFor="let city of cities" value="{{ city.id }}">{{ city.cityName }}</option>
        </select>
      </div>
      <div class="form-group">
        <button (click)="save()" class="btn btn-default">Save</button>
      </div>
    </div>
    `
})
export class SightseeingEditComponent {
  id: string;
  cityId: number;
  cities: City[] = [];
  showDetails: string;
  sightseeing = new Sightseeing();

  constructor(
    private cityService: CityService,
    private sightseeingService: SightseeingService,
    private route: ActivatedRoute,
    private router: Router) {

    this.route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
        this.load();
      }
    );

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

  load(): void {
    this
      .sightseeingService
      .findById(this.id)
      .subscribe(
        res => {
          this.sightseeing = res;
          let url = res._links.city.href;
          this
            .cityService
            .findByUrl(url)
            .subscribe(
              res => {
                this.cityId = res.id;
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

  save(): void {
    this.sightseeing.city = this.getCityIdLink(this.cityId);
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
