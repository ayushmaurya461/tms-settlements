import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bcpl-card-association-form",
  templateUrl: "./bcpl-card-association-form.component.html",
})
export class BcplCardAssociationFormComponent implements OnInit {
  fields: any = {};

  constructor() {}

  ngOnInit(): void {}
  handle(res: any) {
    (<any>$("#cardAssociation")).modal("toggle");
  }
}
