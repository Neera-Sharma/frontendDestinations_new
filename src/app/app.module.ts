import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BASE_URL} from './app.tokens';
import {CityPipe} from "./shared/pipes/city.pipe";
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import {ProjectSearchModule} from "./project.module";
//const BASE_URL_FOR_PRODUCTION = "http://localhost:8081/sightseeings";
const BASE_URL_FOR_PRODUCTION = "http://localhost:8081/cities";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProjectSearchModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [

    { provide: BASE_URL, useValue: BASE_URL_FOR_PRODUCTION}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
