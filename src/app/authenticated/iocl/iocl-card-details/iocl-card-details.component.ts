import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { IoclCardDetailsService } from "./iocl-card-details.service";
import { IoclCardDetailsFormComponent } from "./iocl-card-details-form/iocl-card-details-form.component";
import { DatatableFullComponent } from "../../shared/datatable-full/datatable-full.component";

@Component({
  selector: "app-iocl-card-details",
  templateUrl: "./iocl-card-details.component.html",
})
export class IoclCardDetailsComponent implements OnInit {
  @ViewChild(DatatableFullComponent)
  private tableFull!: DatatableFullComponent;
  @ViewChild(IoclCardDetailsFormComponent)
  form!: IoclCardDetailsFormComponent;
  @HostListener("window: resize", ["$event"]) onResize(_event: any) {
    this.checkScreenSize();
  }

  public mobile = true;
  public counterData: any;
  public tableColumns: any = [];
  public tableButtons: any = [];
  public optionData: any = [];

  constructor(public operations: IoclCardDetailsService) {}

  ngOnInit(): void {
    this.tableColumns = this.operations.tableColumns;
    this.tableButtons = this.operations.tableButtons;
    this.counterData = this.operations.counterData;
    this.optionData = this.operations.optionData;

    this.operations.addEntry$.subscribe((res) => {
      this.form.addEntry(res);
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
