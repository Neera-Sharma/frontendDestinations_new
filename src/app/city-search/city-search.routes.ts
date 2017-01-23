import { Routes, RouterModule } from '@angular/router';
import {CityNewComponent} from "./city-new/city-new.component";
import {CitySearchComponent} from "./city-search.component";
import {CityEditComponent} from "./city-edit/city-edit.component";
import {CityViewComponent} from "./city-view/city-view.component";
import {SightseeingEditComponent} from "../sightseeing-search/sightseeing-edit/sightseeing-edit.component";

const CITY_SEARCH_ROUTES: Routes = [

  {
    path: 'city-search',
    component: CitySearchComponent
  },
  {
    path: 'city-edit/:id',
        component: CityEditComponent
  },
  {
    path: 'city-new',
    component: CityNewComponent
  },
  {
    path: 'city-view/:id',
    component: CityViewComponent
  },

  {
    path: 'sightseeing-edit/:id',
    component: SightseeingEditComponent
  }
];

export const CityRouterModule = RouterModule.forChild(CITY_SEARCH_ROUTES);
