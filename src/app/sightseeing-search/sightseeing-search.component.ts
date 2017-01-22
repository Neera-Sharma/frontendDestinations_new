import {Component} from "@angular/core";
import {SightseeingService} from "./services/sightseeing.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Sightseeing} from "../entities/sightseeing";

@Component({
  selector: 'sightseeing-search',
  templateUrl: './sightseeing-search.component.html',
  styleUrls: ['./sightseeing-search.component.css'],
  providers:[  ]
})
export class SightseeingSearchComponent {
  public sightseeingName: string;
  public selectedSightseeing: Sightseeing;
  public selectedSightseeingName: string;

  sightseeings: Sightseeing[] = [];

  constructor(
  private sightseeingService: SightseeingService,
  private route: ActivatedRoute,
  private router: Router) {}

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

}
