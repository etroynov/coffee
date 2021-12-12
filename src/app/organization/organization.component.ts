import { Component, OnInit, Input } from '@angular/core';
import { Organization } from './organization.types';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  @Input() public organization: Organization;

  constructor() { }

  ngOnInit(): void {
  }

}
