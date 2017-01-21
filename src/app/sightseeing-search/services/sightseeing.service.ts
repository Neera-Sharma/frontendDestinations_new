/**
 * Created by Elza Karimova on 19.01.2017.
 */

import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL} from "../../app.tokens";
import { Observable } from 'rxjs';
import {Sightseeing} from "../../entities/sightseeing";

@Injectable()
export class SightseeingService {

  sightseeings: Array<Sightseeing> = [];

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: Http ) {

  }

  public findById(id: string): Observable<Sightseeing> {

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

  public save(sightseeing: Sightseeing): Observable<Sightseeing> {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .post(url, sightseeing, { headers })
      .map(resp => resp.json());

  }



  public find(name: string): void {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('sightseeingName', name);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json())
      .subscribe(
        (res) => {
          this.sightseeings = res._embedded.sightseeings;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );

  }

}
