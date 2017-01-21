/**
 * Created by bhara on 1/20/2017.
 */


import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL} from "../../app.tokens";
import { Observable } from 'rxjs';
import {City} from "../../entities/city";

@Injectable()
export class CityService {

  cities: Array<City> = [];

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: Http ) {

  }

  public findById(id: string): Observable<City> {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json());

  }

  public save(city: City): Observable<City> {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .post(url, city, { headers })
      .map(resp => resp.json());

  }
/*
  public delete(city: City): Observable<City> {
    let url = this.baseUrl;



    let headers = new Headers();
    headers.set('Accept', 'application/json');
    return this.http.delete(url,city,{headers}).subscribe((ok)=>{console.log(ok)});

  }
*/
  public find(name: string) {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('cityName', name);
    let headers = new Headers();
    headers.set('Accept', 'application/json');


    this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json())
      .subscribe(
        (res) => {
          this.cities = res._embedded.cities;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );

  }

}

