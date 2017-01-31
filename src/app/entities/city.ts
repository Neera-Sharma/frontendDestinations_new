
import {SightseeingsResponse, Sightseeing} from "./sightseeing";
export class City {
  id:number;
  cityName: string;
  country: string;
  cityDescription: string;
  cityDriveway: string;
  cityPhotoLink: string;
  cityMap: string;
  sightseeings: string;
}

export interface CitiesResponse {
  _embedded: {
    cities: CityResponse[]
  },
  _links: {
    self: { href: string },
    profile: { href: string }
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number
    number: number,
  },
}

export interface CityResponse extends City {
  _links: {
    self: { href: string },
    city: { href: string }
    sightseeings: { href: string },
    user: { href: string },
  }
}
