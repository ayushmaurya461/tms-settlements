import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthenticatedRoutingModule } from "./authenticated-routing.module";
import { DataTablesModule } from "angular-datatables";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { INgxSelectOptions, NgxSelectModule } from "ngx-select-ex";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPrintModule } from "ngx-print";
import { NgxMaskModule } from "ngx-mask";
import { QrCodeModule } from "ng-qrcode";
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";
import { ChartModule } from "primeng/chart";

import { AuthenticatedComponent } from "./authenticated.component";
import { BorderlessSelect2Component } from "./shared/form-fields/borderless-select2/borderless-select2.component";
import { DataCardComponent } from "./shared/data-card/data-card.component";
import { DataCounterComponent } from "./shared/data-counter/data-counter.component";
import { DatatableFullComponent } from "./shared/datatable-full/datatable-full.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { FavouritesComponent } from "./shared/favourites/favourites.component";
import { HeaderComponent } from "./shared/header/header.component";
import { InputFileComponent } from "./shared/form-fields/input-file/input-file.component";
import { InputTelComponent } from "./shared/form-fields/input-tel/input-tel.component";
import { MobileFooterComponent } from "./shared/mobile-footer/mobile-footer.component";
import { NotificationsComponent } from "./shared/notifications/notifications.component";
import { PageTitleBarComponent } from "./shared/page-title-bar/page-title-bar.component";
import { ProfileScreenComponent } from "./shared/profile-screen/profile-screen.component";
import { SelectComponent } from "./shared/form-fields/select/select.component";
import { Select2Component } from "./shared/form-fields/select2/select2.component";
import { ShowDetailsComponent } from "./shared/show-details/show-details.component";
import { SideInfoCardComponent } from "./shared/profile-screen/side-info-card/side-info-card.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { ExpandCollapseMenuDirective } from "./shared/sidebar/expand-collapse-menu.directive";

import { TooltipDirective } from "./shared/directives/tooltip.directive";
import { NavCardsComponent } from "./shared/nav-cards/nav-cards.component";
import { IoclCardAssociationComponent } from "./iocl/iocl-card-association/iocl-card-association.component";
import { IoclCardDetailsComponent } from "./iocl/iocl-card-details/iocl-card-details.component";
import { IoclCardSettingsComponent } from "./iocl/iocl-card-settings/iocl-card-settings.component";
import { BpclCardAssociationComponent } from "./bcpl/bpcl-card-association/bpcl-card-association.component";
import { BpclCardDetailsComponent } from "./bcpl/bpcl-card-details/bpcl-card-details.component";
import { BpclCardSettingsComponent } from "./bcpl/bpcl-card-settings/bpcl-card-settings.component";
import { BpclCardStatementsComponent } from "./bcpl/bpcl-card-statements/bpcl-card-statements.component";
import { BcplCardAssociationFormComponent } from './bcpl/bpcl-card-association/bcpl-card-association-form/bcpl-card-association-form.component';
import { IoclCardAssociationFormComponent } from './iocl/iocl-card-association/iocl-card-association-form/iocl-card-association-form.component';
import { BpclCardDetailsFormComponent } from './bcpl/bpcl-card-details/bpcl-card-details-form/bpcl-card-details-form.component';
import { IoclCardDetailsFormComponent } from './iocl/iocl-card-details/iocl-card-details-form/iocl-card-details-form.component';

const CustomSelectOptions: INgxSelectOptions = {
  optionValueField: "id",
  optionTextField: "name",
  keepSelectedItems: false,
};

@NgModule({
  declarations: [
    AuthenticatedComponent,
    BorderlessSelect2Component,
    DatatableFullComponent,
    DataCardComponent,
    DataCounterComponent,
    ExpandCollapseMenuDirective,
    FavouritesComponent,
    FooterComponent,
    HeaderComponent,
    InputFileComponent,
    InputTelComponent,
    MobileFooterComponent,
    NotificationsComponent,
    PageTitleBarComponent,
    ProfileScreenComponent,
    Select2Component,
    SelectComponent,
    ShowDetailsComponent,
    SidebarComponent,
    SideInfoCardComponent,
    TooltipDirective,
    NavCardsComponent,
    IoclCardAssociationComponent,
    IoclCardDetailsComponent,
    IoclCardSettingsComponent,
    BpclCardAssociationComponent,
    BpclCardDetailsComponent,
    BpclCardSettingsComponent,
    BpclCardStatementsComponent,
    BcplCardAssociationFormComponent,
    IoclCardAssociationFormComponent,
    BpclCardDetailsFormComponent,
    IoclCardDetailsFormComponent,
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    DataTablesModule,
    FormsModule,
    NgxSelectModule.forRoot(CustomSelectOptions),
    NgxMaskModule.forRoot(),
    HttpClientModule,
    NgxIntlTelInputModule,
    NgxPrintModule,
    QrCodeModule,
    NgxPaginationModule,
    ChartModule,
  ],
})
export class AuthenticatedModule {}
