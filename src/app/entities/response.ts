/**
 * Created by Elza Karimova on 22.01.2017.
 */

export interface Response<T> {
  _embedded: T,
  _links: {
    profile: string,
    self: string
  },
  page: {
    number:number,
    size:number,
    totalElements:number,
    totalPages:number
  },
}
