import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL} from "../../app.tokens";
import { Observable } from 'rxjs';
import {City, CityResponse, CitiesResponse} from "../../entities/city";

@Injectable()
export class CityService {
  public url: string;

  cities: City[] = [];

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: Http) {
    this.url = this.baseUrl + '/cities';
  }

  public findById(id: string): Observable<CityResponse> {
    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(this.url, { headers, search })
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

}

