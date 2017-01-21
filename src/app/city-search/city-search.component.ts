
import {Component} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {City} from "../entities/city";
import {CityService} from "./services/city.service";

@Component({
  selector: 'sightseeing-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
  providers:[  ]
})
export class CitySearchComponent {

  public cityName: string;

  public selectedCity: City;

  constructor(private cityService: CityService) {
  }

  public get cities(): Array<City> {
    return this.cityService.cities;
  }

  search(): void {
    this.cityService.find(this.cityName);
  }

  select(city: City): void {
    this.selectedCity = city;
  }
  addNew()
  {

  }

}
