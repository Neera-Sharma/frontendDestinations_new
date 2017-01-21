import { Routes, RouterModule } from '@angular/router';
import {SightseeingSearchComponent} from "./sightseeing-search/sightseeing-search.component";
import {SightseeingEditComponent} from "./sightseeing-search/sightseeing-edit/sightseeing-edit.component";
import {CitySearchComponent} from "./city-search/city-search.component";
import {CityEditComponent} from "./city-search/city-edit/city-edit.component";
import {CityNewComponent} from "./city-search/city-new/city-new.component";



const SIGHTSEEING_SEARCH_ROUTES: Routes = [
  {
    path: 'sightseeing-search',
    component: SightseeingSearchComponent
  },
  {
    path: 'city-search',
    component: CitySearchComponent
  },
  {
    path: 'sightseeing-edit/:id',
    component: SightseeingEditComponent
  },
  {
    path: 'city-edit/:id',
    component: CityEditComponent
  },
  {
    path: 'city-new',
    component: CityNewComponent
  }
];

export const ProjectRouterModule = RouterModule.forChild(SIGHTSEEING_SEARCH_ROUTES);
