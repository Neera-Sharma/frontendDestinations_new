
import {Component} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {City} from "../entities/city";
import {CityService} from "./services/city.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'sightseeing-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
  providers:[]

})
export class CitySearchComponent {
  cities: City[] = [];
  public cityName: string;
  public selectedCity: City;
  public selectedCityName: string;

  constructor(
    private cityService: CityService,
    private route: ActivatedRoute,
    private router: Router) {}
/*search the city entered by user from database*/
  search(): void {
    this
      .cityService
      .find(this.cityName)
      .subscribe(
        res => {
          this.cities = res._embedded.cities;
        },
        err => {
          alert("Loading fails: " + err.text());
        }
      );
  }

}
