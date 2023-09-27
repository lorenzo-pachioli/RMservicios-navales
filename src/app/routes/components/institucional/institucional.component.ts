import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.scss']
})
export class InstitucionalComponent implements OnInit {

  certificaciones = [
    "Certificado de Cumplimiento Ambiental Marino. ",
    "Certificación de Técnicos en Reparación de Motores. ",
    "Capacitación de motores Yanmar en fábrica de Japón y presentación de cajas reductoras marca Reintjes "
  ];

  clientes = [
    "Pedro Moscuzza e hijos",
    "Grupo agliano",
    "La Escalerona",
    "Remolcadores mar del plata",
    "Transmisiones marinas S.A.",
    "Grupo mattera",
    "Grupo makro",
    "Ciageser S.A",
    "La Isolana S.R.L."
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
