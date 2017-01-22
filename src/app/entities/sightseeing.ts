export class Sightseeing {
  id: number;
  sightseeingName: string;
  sightseeingDescription: string;
  sightseeingDriveway: string;
  sightseeingPhotoLink: string;
  sightseeingMap: string;
  city: string;
}

export interface SightseeingsResponse {
  _embedded: {
    sightseeings: SightseeingResponse[]
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

export interface SightseeingResponse extends Sightseeing {
  _links: {
    self: { href: string },
    sightseeing: { href: string },
    user: { href: string },
    city: { href: string }
  }
}

