/**
 * Created by Elza Karimova on 19.01.2017.
 */

import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL} from "../../app.tokens";
import { Observable } from 'rxjs';
import {ISightseeing, EmbeddedSightseeing} from "../../entities/sightseeing";
import {Response} from "../../entities/response";

@Injectable()
export class SightseeingService {
  sightseeings: ISightseeing[] = [];

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: Http ) {}

  public findById(id: string): Observable<ISightseeing> {
    let url = this.baseUrl + '/' + id;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers })
      .map(resp => resp.json());
  }

  public save(sightseeing: ISightseeing): Observable<ISightseeing> {
    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .post(url, sightseeing, { headers })
      .map(resp => resp.json());
  }

  public delete(id: string): Observable<string> {
    let url = this.baseUrl + '/' + id;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .delete(url, { headers })
      .map(resp => '');
  }

  public find(name: string): Observable<Response<EmbeddedSightseeing>> {
    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('sightseeingName', name);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json());
  }

}
