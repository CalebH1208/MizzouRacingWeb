import { NgModule } from '@angular/core';

import { RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HistoryComponent} from "./history/history.component";
import {AerodynamicsComponent} from "./aerodynamics/aerodynamics.component";
import {BrakesControlsComponent} from "./brakes-controls/brakes-controls.component";
import {CompetitionOverviewComponent} from "./competition-overview/competition-overview.component";
import {ElectronicsComponent} from "./electronics/electronics.component";
import {June2022Component} from "./june2022/june2022.component";
import {June2023Component} from "./june2023/june2023.component";
import {May2022Component} from "./may2022/may2022.component";
import {May2023Component} from "./may2023/may2023.component";
import {PhotogalleryComponent} from "./photogallery/photogallery.component";
import {PowertrainComponent} from "./powertrain/powertrain.component";
import {SponsorsComponent} from "./sponsors/sponsors.component";
import {VehicleDynamicsComponent} from "./vehicle-dynamics/vehicle-dynamics.component";
import {PhotoDetailComponent} from "./photo-detail/photo-detail.component";

const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'history',component: HistoryComponent},
  {path:'aerodynamics',component:AerodynamicsComponent},
  {path:'brakes-controls',component: BrakesControlsComponent},
  {path:'competition-overview',component: CompetitionOverviewComponent},
  {path:'electronics',component: ElectronicsComponent},
  {path:'june2022',component: June2022Component},
  {path:'june2023',component: June2023Component},
  {path:'may2022',component: May2022Component},
  {path:'may2023',component: May2023Component},
  {path:'photo-gallery',component: PhotogalleryComponent},
  {path:'powertrain',component: PowertrainComponent},
  {path:'sponsors',component: SponsorsComponent},
  {path:'vehicle-dynamics',component: VehicleDynamicsComponent},
  {path:'photo-gallery/:car/:id',component:PhotoDetailComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
