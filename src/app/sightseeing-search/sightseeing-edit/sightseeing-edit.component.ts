/**
 * Created by Elza Karimova on 19.01.2017.
 */


import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SightseeingService} from "../services/sightseeing.service";
import {Sightseeing} from "../../entities/sightseeing";

@Component({
  template: `
    <h1>Edit Sightseeing</h1>
    <div>
      {{ message }}
    </div>
    <div *ngIf="sightseeing">
      <div class="form-group">
        <label>Id</label>
        <input [(ngModel)]="sightseeing.id" class="form-control">
      </div>
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
        <label>User-creator</label>
        <input [(ngModel)]="sightseeing.user.id" class="form-control">
      </div>
      <div class="form-group">
        <label>City</label>
        <input [(ngModel)]="sightseeing.city.id" class="form-control">
      </div>

      <div class="form-group">
        <button (click)="save()" class="btn btn-default">Save</button>
      </div>
    </div>
    `
})
export class SightseeingEditComponent {
  id: string;
  showDetails: string;

  constructor(
    private sightseeingService: SightseeingService,
    route: ActivatedRoute) {

    route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
        this.load(this.id);
      }
    )

  }

  sightseeing: Sightseeing;
  message: string;

  load(id: string): void {
    this
      .sightseeingService
      .findById(id)
      .subscribe(
        sightseeing => {
          this.sightseeing = sightseeing;
          this.message = "";
        },
        (err) => {
          this.message = "Fehler beim Speichern: " + err.text();
        }
      )
  }

  save(): void {
    this
      .sightseeingService
      .save(this.sightseeing)
      .subscribe(
        sightseeing => {
          this.sightseeing = sightseeing;
          this.message = "Daten wurden gespeichert!";
        },
        (err) => {
          this.message = "Fehler beim Speichern: " + err.text();
        }
      )

  }

}
