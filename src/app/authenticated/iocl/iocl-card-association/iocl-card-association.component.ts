import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { IoclCardAssociationService } from "./iocl-card-association.service";
import { IoclCardAssociationFormComponent } from "./iocl-card-association-form/iocl-card-association-form.component";
import { DatatableFullComponent } from "../../shared/datatable-full/datatable-full.component";

@Component({
  selector: "app-iocl-card-association",
  templateUrl: "./iocl-card-association.component.html",
})
export class IoclCardAssociationComponent implements OnInit {
  @ViewChild(DatatableFullComponent)
  private tableFull!: DatatableFullComponent;
  @ViewChild(IoclCardAssociationFormComponent)
  form!: IoclCardAssociationFormComponent;
  @HostListener("window: resize", ["$event"]) onResize(_event: any) {
    this.checkScreenSize();
  }

  public mobile = true;
  public counterData: any;
  public tableColumns: any = [];
  public tableButtons: any = [];
  public optionData: any = [];

  constructor(public operations: IoclCardAssociationService) {}

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
