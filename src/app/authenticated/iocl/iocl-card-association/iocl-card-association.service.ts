import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ConfirmService } from "src/app/services/confirm.service";
import { HttpService } from "src/app/services/http.service";
import { LoadingService } from "src/app/services/loading.service";
import { NotificationService } from "src/app/services/notification.service";

@Injectable({
  providedIn: "root",
})
export class IoclCardAssociationService {
  public tableButtons: any;
  public tableColumns: any;
  public optionData: any;
  public counterData: any;
  private assigncard = new Subject<any>();
  public assignCard$ = this.assigncard.asObservable();

  constructor(
    private confirmService: ConfirmService,
    private loader: LoadingService,
    private http: HttpService,
    private notification: NotificationService
  ) {
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
          self.assigncard.next(rows);
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
        title: "Card No.",
        data: "number",
        width: "100px",
        card: 1,
      },
      {
        title: "Vehicle No./Pump",
        data: "pump",
        width: "100px",
        card: 1,
      },
      {
        title: "Assign Date",
        data: "assign_date",
        width: "100px",
        card: 1,
      },
      {
        title: "Unassign Date",
        data: "unassign_date",
        width: "100px",
        card: 1,
      },
      {
        title: "User",
        data: "user",
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
          number: "2142 9757 0248 6335",
          pump: "VHW23523",
          assign_date: "12/10/2023",
          unassign_date: "20/12/2023",
          user: "User 1",
        },
        {
          number: "2142 9757 0248 6335",
          pump: "VHW23523",
          assign_date: "12/10/2023",
          unassign_date: "20/12/2023",
          user: "User 1",
        },
        {
          number: "2142 9757 0248 6335",
          pump: "VHW23523",
          assign_date: "12/10/2023",
          unassign_date: "20/12/2023",
          user: "User 1",
        },
      ],
    };
    this.counterData = [
      {
        id: 1,
        title: "Assigned Cards",
        data: "10",
        icon: "ti-layout-grid2",
        colorClass: "bg-info",
      },
      {
        id: 2,
        title: "Unassigned Cards",
        data: "2",
        icon: "ti-alert",
        colorClass: "bg-warning",
      },
    ];
  }
}
