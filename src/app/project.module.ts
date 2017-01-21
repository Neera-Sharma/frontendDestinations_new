
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {CommonModule} from "@angular/common";
import { ProjectRouterModule } from './project.routes';
import {SightseeingEditComponent} from "./sightseeing-search/sightseeing-edit/sightseeing-edit.component";
import {SightseeingCardComponent} from "./sightseeing-search/sightseeing-card.component";
import {SightseeingSearchComponent} from "./sightseeing-search/sightseeing-search.component";
import {SightseeingService} from "./sightseeing-search/services/sightseeing.service";
import {CitySearchComponent} from "./city-search/city-search.component";
import {CityCardComponent} from "./city-search/city-card.component";
import {CityEditComponent} from "./city-search/city-edit/city-edit.component";
import {CityService} from "./city-search/services/city.service";
import {CityNewComponent} from "./city-search/city-new/city-new.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProjectRouterModule
  ],
  declarations: [
    SightseeingSearchComponent,
    SightseeingCardComponent,
    SightseeingEditComponent,
    CitySearchComponent,
    CityCardComponent,
    CityEditComponent,
    CityNewComponent
  ],
  providers: [
    SightseeingService,
    CityService
  ]
})
export class ProjectSearchModule {

}
