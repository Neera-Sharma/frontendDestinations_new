import {Sightseeing} from "./sightseeing";
import {City} from "./city";
/**
 * Created by Elza Karimova on 19.01.2017.
 */



export interface User {
  id: number;
  firstname: String;
  lastname: String;
  email: String;
  status: String; //1=user without crud, 2 = user with crud, 3 = admin (sees all users)
  password: String;
 // sightseeing: Sightseeing[];
  // city: City[];
}
