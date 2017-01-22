import { Component } from '@angular/core';
import {SightseeingService} from "../services/sightseeing.service";
import {Sightseeing, ISightseeing} from "../../entities/sightseeing";
import {ActivatedRoute, Router} from "@angular/router";

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
        <button (click)="delete()">Delete</button>
      </div>
    </div>
    `
})

export class SightseeingViewComponent {
  id: string;
  sightseeing: ISightseeing = new Sightseeing();

  constructor(
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
        },
        (err) => {
          alert("Fehler beim Laden: " + err.text());
        }
      );
  }
}

