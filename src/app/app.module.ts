import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgOptimizedImage} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './history/history.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { AerodynamicsComponent } from './aerodynamics/aerodynamics.component';
import { BrakesControlsComponent } from './brakes-controls/brakes-controls.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { PowertrainComponent } from './powertrain/powertrain.component';
import { VehicleDynamicsComponent } from './vehicle-dynamics/vehicle-dynamics.component';
import { CompetitionOverviewComponent } from './competition-overview/competition-overview.component';
import { May2022Component } from './may2022/may2022.component';
import { May2023Component } from './may2023/may2023.component';
import { June2022Component } from './june2022/june2022.component';
import { June2023Component } from './june2023/june2023.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    SponsorsComponent,
    PhotogalleryComponent,
    AerodynamicsComponent,
    BrakesControlsComponent,
    ElectronicsComponent,
    PowertrainComponent,
    VehicleDynamicsComponent,
    CompetitionOverviewComponent,
    May2022Component,
    May2023Component,
    June2022Component,
    June2023Component,
    PhotoDetailComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
