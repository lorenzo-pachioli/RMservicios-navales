import { Component, OnInit } from '@angular/core';
import * as leaflet from 'leaflet';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  url = `https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=${environment.maptoken}`;
  icon = leaflet.icon({
    iconUrl: '../../../../assets/img/marker-icon.png',
    iconSize: [40, 50],
    iconAnchor: [20, 50]
  });
  screenW = window.innerWidth;
  options = {
    layers: [
      leaflet.tileLayer(this.url, { maxZoom: 18, attribution: '...' }),
      leaflet.marker([-38.030000, -57.567386], { icon: this.icon })
    ],
    zoom: 13,
    zoomControl: false,
    center: leaflet.latLng(this.screenW > 900 ? ([-38.030043, -57.567296]) : ([-38.030043, -57.567296]))
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
