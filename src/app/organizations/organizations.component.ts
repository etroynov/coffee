import { Component, OnInit } from "@angular/core";

import { Organization } from '../organization/organization.types';

@Component({
  selector: "app-organizations",
  templateUrl: "./organizations.component.html",
  styleUrls: ["./organizations.component.css"],
})
export class OrganizationsComponent implements OnInit {
  public organizations: Organization[] = [
    {
      name: "Coffee Kiosk",
      coords: [50.05864, 19.94482],
      address: 'Wielopole 14, 31-072 Kraków'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
