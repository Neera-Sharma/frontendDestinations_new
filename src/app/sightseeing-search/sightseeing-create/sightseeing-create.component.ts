import { Component } from '@angular/core';
import {SightseeingService} from "../services/sightseeing.service";
import {Sightseeing, ISightseeing} from "../../entities/sightseeing";
import {Router} from "@angular/router";

@Component({
  selector: 'sightseeing-create',
  template: `
    <h1>Create sightseeing</h1>
    <div>
      <div class="form-group">
        <label>Sightseeing Name</label>
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
        <label>Photolink</label>
        <input [(ngModel)]="sightseeing.sightseeingPhotoLink" class="form-control">
      </div>
      <div class="form-group">
        <label>Map</label>
        <input [(ngModel)]="sightseeing.sightseeingMap" class="form-control">
      </div>

      <div class="form-group">
        <button (click)="save()" class="btn btn-default">Save</button>
      </div>
    </div>
    `
})

export class SightseeingCreateComponent {
  showDetails: string;
  sightseeing: ISightseeing = new Sightseeing();

  constructor(
    private sightseeingService: SightseeingService,
    private router: Router) {}

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

