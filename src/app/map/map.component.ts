import { Map, TileLayer, Marker } from "leaflet";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  private map: Map;
  private token =
    "pk.eyJ1IjoiZXRyb3lub3YiLCJhIjoiY2t1a2FzeDBoMTRmeTJyb3ppNWQyemoxbSJ9.lQ90xCnGMZm_m1EADTXD-w";

  ngOnInit(): void {
    this.map = new Map("map");
    this.map.setView([50.064651, 19.944981], 14);

    new TileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${this.token}`,
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(this.map);
  }
}
