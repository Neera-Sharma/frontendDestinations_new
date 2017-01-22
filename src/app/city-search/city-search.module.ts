
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import { ProjectRouterModule } from './city-search.routes';
import {CitySearchComponent} from "./city-search.component";
import {CityCardComponent} from "./city-card.component";
import {CityEditComponent} from "./city-edit/city-edit.component";
import {CityService} from "./services/city.service";
import {CityNewComponent} from "./city-new/city-new.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProjectRouterModule
  ],
  declarations: [
    CitySearchComponent,
    CityCardComponent,
    CityEditComponent,
    CityNewComponent
  ],
  providers: [
    CityService
  ]
})
export class CitySearchModule {

}
