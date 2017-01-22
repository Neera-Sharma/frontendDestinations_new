import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SightseeingService} from "../services/sightseeing.service";
import {ISightseeing, Sightseeing} from "../../entities/sightseeing";

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
      <!--<div class="form-group">-->
        <!--<label>User-creator</label>-->
        <!--<input [(ngModel)]="sightseeing.user.id" class="form-control">-->
      <!--</div>-->
      <!--<div class="form-group">-->
        <!--<label>City</label>-->
        <!--<input [(ngModel)]="sightseeing.city.id" class="form-control">-->
      <!--</div>-->
      <div class="form-group">
        <button (click)="save()" class="btn btn-default">Save</button>
      </div>
    </div>
    `
})
export class SightseeingEditComponent {
  id: string;
  showDetails: string;
  sightseeing: ISightseeing = new Sightseeing();

  constructor(
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
  }

  load(): void {
    this
      .sightseeingService
      .findById(this.id)
      .subscribe(
        res => {
          this.sightseeing = res;
        },
        (err) => {
          alert("Fehler beim Laden: " + err.text());
        }
      );
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
