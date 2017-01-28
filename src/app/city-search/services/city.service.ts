import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL} from "../../app.tokens";
import { Observable } from 'rxjs';
import {City, CityResponse, CitiesResponse} from "../../entities/city";

@Injectable()
export class CityService {
  public url: string;

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: Http) {
    this.url = this.baseUrl + '/cities';
  }
//save city Entity (Angular) in database table as city
  public save(city: City): Observable<CityResponse> {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .post(this.url, city, { headers })
      .map(resp => resp.json());

  }

  public find(name?: string): Observable<CitiesResponse> {
    let search = new URLSearchParams();
    search.set('cityName', name);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(this.url, { headers, search })
      .map(resp => resp.json());
  }

  //find a city with the given link (link includes Id)
  public findById(id: string): Observable<CityResponse> {
    let url = this.url + '/' + id;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers })
      .map(resp => resp.json());

  }

  public findByUrl(url: string): Observable<CityResponse> {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers })
      .map(resp => resp.json());
  }

  public delete(id: string): Observable<string> {
    let url = this.url + '/' + id;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .delete(url, { headers })
      .map(resp => '');
  }

}

