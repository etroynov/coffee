import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationsComponent } from './organizations/organizations.component';

@NgModule({
  declarations: [AppComponent, MapComponent, OrganizationComponent, OrganizationsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
