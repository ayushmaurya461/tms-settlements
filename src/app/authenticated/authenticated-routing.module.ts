import { Injectable, NgModule } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from "@angular/router";
import { AuthGuard } from "../services/auth.guard";
import { RouteDataService } from "../services/route-data.service";
import { BpclCardAssociationComponent } from "./bcpl/bpcl-card-association/bpcl-card-association.component";
import { BpclCardDetailsComponent } from "./bcpl/bpcl-card-details/bpcl-card-details.component";
import { BpclCardSettingsComponent } from "./bcpl/bpcl-card-settings/bpcl-card-settings.component";
import { BpclCardStatementsComponent } from "./bcpl/bpcl-card-statements/bpcl-card-statements.component";
import { IoclCardSettingsComponent } from "./iocl/iocl-card-settings/iocl-card-settings.component";
import { IoclCardDetailsComponent } from "./iocl/iocl-card-details/iocl-card-details.component";
import { IoclCardAssociationComponent } from "./iocl/iocl-card-association/iocl-card-association.component";

@Injectable({
  providedIn: "root",
})
export class AdditionalDataResolver implements Resolve<any> {
  constructor(private routeDataService: RouteDataService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.routeDataService.getRouteData();
  }
}

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "project" },
  {
    path: "bcpl/card-association",
    component: BpclCardAssociationComponent,
  },
  {
    path: "bcpl/card-details",
    component: BpclCardDetailsComponent,
  },
  {
    path: "bcpl/card-setting",
    component: BpclCardSettingsComponent,
  },
  {
    path: "bcpl/card-statement",
    component: BpclCardStatementsComponent,
  },
  {
    path: "iocl/card-association",
    component: IoclCardAssociationComponent,
  },
  {
    path: "iocl/card-details",
    component: IoclCardDetailsComponent,
  },
  {
    path: "iocl/card-settings",
    component: IoclCardSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
