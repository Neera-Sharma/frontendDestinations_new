import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL} from "../../app.tokens";
import { Observable } from 'rxjs';
import {SightseeingResponse, Sightseeing, SightseeingsResponse} from "../../entities/sightseeing";

@Injectable()
export class SightseeingService {
  public url: string;

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: Http ) {
    this.url = this.baseUrl + '/sightseeings';
  }

  public findById(id: string): Observable<SightseeingResponse> {
    let url = this.url + '/' + id;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers })
      .map(resp => resp.json());
  }
  public findByUrl(url: string): Observable<SightseeingResponse> {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers })
      .map(resp => resp.json());
  }


  public save(sightseeing: Sightseeing): Observable<SightseeingResponse> {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .post(this.url, sightseeing, { headers })
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

  public find(name?: string): Observable<SightseeingsResponse> {
    let search = new URLSearchParams();
    search.set('sightseeingName', name);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(this.url, { headers, search })
      .map(resp => resp.json());
  }
}
