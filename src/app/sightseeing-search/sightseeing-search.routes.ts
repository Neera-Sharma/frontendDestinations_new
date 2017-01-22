import { Routes, RouterModule } from '@angular/router';
import {SightseeingSearchComponent} from "./sightseeing-search.component";
import {SightseeingCreateComponent} from "./sightseeing-create/sightseeing-create.component";
import {SightseeingEditComponent} from "./sightseeing-edit/sightseeing-edit.component";
import {SightseeingViewComponent} from "./sightseeing-view/sightseeing-view.component";

const SIGHTSEEING_SEARCH_ROUTES: Routes = [
  {
    path: 'sightseeing-search',
    component: SightseeingSearchComponent
  },
  {
    path: 'sightseeing-edit/:id',
    component: SightseeingEditComponent
  },
  {
    path: 'sightseeing-create',
    component: SightseeingCreateComponent
  },
  {
    path: 'sightseeing-view/:id',
    component: SightseeingViewComponent
  }
];

export const SightseeingSearchRouterModule = RouterModule.forChild(SIGHTSEEING_SEARCH_ROUTES);
