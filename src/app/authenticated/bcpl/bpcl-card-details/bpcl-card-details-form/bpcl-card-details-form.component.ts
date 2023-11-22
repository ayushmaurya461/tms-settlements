import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bpcl-card-details-form",
  templateUrl: "./bpcl-card-details-form.component.html",
})
export class BpclCardDetailsFormComponent implements OnInit {
  fields: any = {};

  constructor() {}

  ngOnInit(): void {}
  addEntry(res: any) {
    (<any>$("#cardAssociation")).modal("toggle");
  }
}
