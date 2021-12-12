import { LatLngExpression } from 'leaflet';

export interface Organization {
  name: string;
  coords: LatLngExpression;
  address: string;
}
