import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { BcplCardAssociationService } from "./bcpl-card-association.service";
import { BcplCardAssociationFormComponent } from "./bcpl-card-association-form/bcpl-card-association-form.component";
import { DatatableFullComponent } from "../../shared/datatable-full/datatable-full.component";

@Component({
  selector: "app-bpcl-card-association",
  templateUrl: "./bpcl-card-association.component.html",
})
export class BpclCardAssociationComponent implements OnInit {
  @ViewChild(DatatableFullComponent)
  private tableFull!: DatatableFullComponent;
  @ViewChild(BcplCardAssociationFormComponent)
  form!: BcplCardAssociationFormComponent;
  @HostListener("window: resize", ["$event"]) onResize(_event: any) {
    this.checkScreenSize();
  }

  public mobile = true;
  public counterData: any;
  public tableColumns: any = [];
  public tableButtons: any = [];
  public optionData: any = [];

  constructor(public operations: BcplCardAssociationService) {}

  ngOnInit(): void {
    this.tableColumns = this.operations.tableColumns;
    this.tableButtons = this.operations.tableButtons;
    this.counterData = this.operations.counterData;
    this.optionData = this.operations.optionData;

    this.operations.assignCard$.subscribe((res) => {
      this.form.handle(res);
    });

    this.checkScreenSize();
  }

  counterClickFunction(data: any) {
    let functionData = {
      url: "",
      data: data,
    };
    this.tableFull.reloadTableWithNewDataUrl(functionData);
  }

  checkScreenSize() {
    const width = window.innerWidth;
    this.mobile = width >= 768 ? false : true;
  }
}
