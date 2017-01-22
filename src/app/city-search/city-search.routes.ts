import { Routes, RouterModule } from '@angular/router';
import {CityNewComponent} from "./city-new/city-new.component";
import {CitySearchComponent} from "./city-search.component";
import {CityEditComponent} from "./city-edit/city-edit.component";

const SIGHTSEEING_SEARCH_ROUTES: Routes = [

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
  }
];

export const ProjectRouterModule = RouterModule.forChild(SIGHTSEEING_SEARCH_ROUTES);
