export interface EmbeddedSightseeing {
  sightseeings: ISightseeing[]
}

export interface ISightseeing {
  id: number;
  sightseeingName: string;
  sightseeingDescription: string;
  sightseeingDriveway: string;
  sightseeingPhotoLink: string;
  sightseeingMap: string;
}

export class Sightseeing implements ISightseeing {
  id: number;
  sightseeingName: string;
  sightseeingDescription: string;
  sightseeingDriveway: string;
  sightseeingPhotoLink: string;
  sightseeingMap: string;
}
