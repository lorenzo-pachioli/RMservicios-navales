import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  objetivos = [
    {
      svg: 'verified_user',
      text: 'Garantizar la seguridad y el rendimiento de los motores marinos.'
    },
    {
      svg: 'build',
      text: 'Proporcionar soluciones técnicas de alta calidad.'
    },
    {
      svg: 'group',
      text: 'Establecer relaciones duraderas con nuestros clientes.'
    }
  ];

  mision = "Brindar servicios de reparación de motores marinos con excelencia técnica y compromiso con el medio ambiente y la seguridad en el mar.";
  vision = "Ser reconocidos como la opción preferida en servicios de reparación de motores marinos a nivel local y nacional."

  constructor() { }

  ngOnInit(): void {
  }

  scrollDown() {
    window.scroll({
      top: 700,
      left: 0,
      behavior: "smooth",
    })
  }

}
