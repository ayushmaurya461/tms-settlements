import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BpclCardDetailsService {
  public tableButtons: any;
  public tableColumns: any;
  public optionData: any;
  public counterData: any;
  private addEntry = new Subject<any>();
  public addEntry$ = this.addEntry.asObservable();

  constructor() {
    const self = this;
    this.tableButtons = [
      {
        text: '<i class="ti-pencil"></i>',
        className: "buttons-collection editButton",
        title: "Edit",
        attr: {
          title: "Assign/Unassign",
        },
        card: true,
        class: "btn btn-success card-btns",
        action: function () {
          var rows: any = [];
          this.rows({ selected: true })
            .data()
            .each((element: any) => rows.push(element));
          self.addEntry.next(rows);
        },
        cardHead: false,
      },
      {
        text: '<i class="ti-filter">',
        title: "Visibility",
        attr: {
          title: "Column Visibility",
          id: "exportBtn",
        },
        extend: "colvis",
        card: false,
        cardHead: false,
      },
    ];
    this.tableColumns = [
      {
        title: "ID",
        data: "id",
        width: "100px",
        card: 1,
      },
      {
        title: "Vehicle/Branch/Pump",
        data: "pump",
        width: "100px",
        card: 1,
      },
      {
        title: "Card No.",
        data: "card",
        width: "100px",
      },
      {
        title: "L4 Digits",
        data: "lastFourDigits",
        width: "100px",
      },
      {
        title: "Date",
        data: "date",
        width: "100px",
        card: 1,
      },
      {
        title: "Status",
        data: "status",
        width: "100px",
        card: 1,
      },
      {
        title: "Balance",
        data: "balance",
        width: "100px",
        card: 1,
      },
      {
        title: "Set Zero",
        data: "setZero",
        width: "100px",
        card: 1,
      },
    ];
    this.optionData = {
      serverSide: false,
      url: "",
      showBasicDetailsPage: true,
      data: [
        {
          id: "5252",
          card: "2142 9757 0248 6335",
          pump: "VHW23523",
          date: "",
          lastFourDigits: "6335",
          status: "Pump",
          balance: "8655235",
          setZero: "",
        },
      ],
    };
    this.counterData = [
      {
        id: 1,
        title: "All",
        data: "10",
        icon: "ti-layout-grid2",
        colorClass: "bg-info",
      },

      {
        id: 3,
        title: "Active",
        data: "9 | 50",
        icon: "ti-check-box  ",
        colorClass: "bg-success",
      },
      {
        id: 4,
        title: "Hot Listed",
        data: "9 | 50",
        icon: "ti-medall",
        colorClass: "bg-primary",
      },
      {
        id: 5,
        title: "Vehicle",
        data: "2",
        icon: "ti-truck",
        colorClass: "bg-secondary",
      },
      {
        id: 6,
        title: "Pump",
        data: "2",
        icon: "ti-infinite",
        colorClass: "bg-danger",
      },
      {
        id: 7,
        title: "Branch",
        data: "2",
        icon: "ti-paint-bucket",
        colorClass: "bg-warning",
      },
    ];
  }
}
