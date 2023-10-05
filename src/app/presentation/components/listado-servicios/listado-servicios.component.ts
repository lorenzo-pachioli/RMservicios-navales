import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-servicios',
  templateUrl: './listado-servicios.component.html',
  styleUrls: ['./listado-servicios.component.scss']
})
export class ListadoServiciosComponent implements OnInit {

  servicios = [
    " Contamos con taller de rectificado y Tornería de motores diesel",
    "Recorrido de culatas",
    "Reparación de bombas de agua , aceite y combustible ",
    "Reparación de purificadoras",
    "Alineación de equipos in situ",
    "Reparación integral de cajas reductoras",
    "Reparación de sistemas hidráulicos",
    "Recorrido de motores abordo",
    "Reparación de motores en taller o in situ",
    "Reparación de culatas",
    "Rectificado y alesado de piezas",
    "Reparación integral de guinches de pesca",
    "Construcción y o reformas en sistemas de refrigeración para motores y cajas reductoras",
    "Tornería en general",
    "Reparación de válvulas de casco"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
