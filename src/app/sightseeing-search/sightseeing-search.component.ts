import {Component} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {Sightseeing} from "../entities/sightseeing";
import {SightseeingService} from "./services/sightseeing.service";

@Component({
  selector: 'sightseeing-search',
  templateUrl: './sightseeing-search.component.html',
  styleUrls: ['./sightseeing-search.component.css'],
  providers:[  ]
})
export class SightseeingSearchComponent {

  public sightseeingName: string;

  public selectedSightseeing: Sightseeing;

  constructor(private sightseeingService: SightseeingService) {
  }

  public get sightseeings(): Array<Sightseeing> {
    return this.sightseeingService.sightseeings;
  }

  search(): void {
    this.sightseeingService.find(this.sightseeingName);


  }

  select(sightseeing: Sightseeing): void {
    this.selectedSightseeing = sightseeing;
  }

}
