import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { UserService } from "src/app/libraray/user.service";
import { EventService } from "src/app/services/event.service";
import { SidebarService } from "./sidebar.service";
import { animations } from "../animations/animations";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
  animations: animations,
})
export class SidebarComponent implements OnInit {
  @ViewChild("sidebar") sidebar!: ElementRef;
  @Input() smallerScreen = false;

  public loading: boolean = false;

  constructor(
    public eventService: EventService,
    public userService: UserService,
    public sidebarService: SidebarService
  ) {}

  public menus: any = [
    {
      name: "BPCL card",
      url: "",
      icon: "ti-credit-card",
      sub_modules: [
        {
          name: "Card Association",
          url: "bcpl/card-association",
        },
        {
          name: "Card Details",
          url: "bcpl/card-details",
        },
        {
          name: "Card Settings",
          url: "bcpl/card-setting",
        },
        {
          name: "Card Statement",
          url: "bcpl/card-statement",
        },
      ],
    },
    {
      name: "IOCL Card",
      url: "",
      icon: "pi pi-credit-card",
      sub_modules: [
        {
          name: "Card Association",
          url: "iocl/card-association",
        },
        {
          name: "Card Details",
          url: "iocl/card-details",
        },
        {
          name: "Card Settings",
          url: "iocl/card-settings",
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.sidebarService.fetchMenu();
  }

  ngAfterViewInit() {}
}
