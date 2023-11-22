import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-iocl-card-association-form",
  templateUrl: "./iocl-card-association-form.component.html",
})
export class IoclCardAssociationFormComponent implements OnInit {
  fields: any = {};

  constructor() {}

  ngOnInit(): void {}
  handle(res: any) {
    (<any>$("#cardAssociation")).modal("toggle");
  }
}
