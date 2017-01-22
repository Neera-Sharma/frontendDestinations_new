import {Component} from "@angular/core";
import {ISightseeing} from "../entities/sightseeing";
import {SightseeingService} from "./services/sightseeing.service";

@Component({
  selector: 'sightseeing-search',
  templateUrl: './sightseeing-search.component.html',
  styleUrls: ['./sightseeing-search.component.css'],
  providers:[  ]
})
export class SightseeingSearchComponent {
  public sightseeingName: string;
  public selectedSightseeing: ISightseeing;

  sightseeings: ISightseeing[] = [];

  constructor(private sightseeingService: SightseeingService) {}

  search(): void {
    this
      .sightseeingService
      .find(this.sightseeingName)
      .subscribe(
        res => {
          this.sightseeings = res._embedded.sightseeings;
        },
        err => {
          alert("Fehler beim Laden: " + err.text());
        }
      );
  }

  select(sightseeing: ISightseeing): void {
    this.selectedSightseeing = sightseeing;
  }
}
