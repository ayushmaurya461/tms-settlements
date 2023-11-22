import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-iocl-card-details-form",
  templateUrl: "./iocl-card-details-form.component.html",
})
export class IoclCardDetailsFormComponent implements OnInit {
  fields: any = {};

  constructor() {}

  ngOnInit(): void {}
  addEntry(res: any) {
    (<any>$("#cardAssociation")).modal("toggle");
  }
}
