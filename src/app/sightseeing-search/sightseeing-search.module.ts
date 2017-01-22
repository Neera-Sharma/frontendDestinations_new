
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import { SightseeingSearchRouterModule } from './sightseeing-search.routes';
import {SightseeingEditComponent} from "./sightseeing-edit/sightseeing-edit.component";
import {SightseeingCardComponent} from "./sightseeing-card.component";
import {SightseeingSearchComponent} from "./sightseeing-search.component";
import {SightseeingService} from "./services/sightseeing.service";
import {SightseeingCreateComponent} from "./sightseeing-create/sightseeing-create.component";
import {SightseeingViewComponent} from "./sightseeing-view/sightseeing-view.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SightseeingSearchRouterModule
  ],
  declarations: [
    SightseeingSearchComponent,
    SightseeingCardComponent,
    SightseeingEditComponent,
    SightseeingCreateComponent,
    SightseeingViewComponent
  ],
  providers: [
    SightseeingService
  ]
})
export class SightseeingSearchModule {

}
