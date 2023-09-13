import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  objetivos = [
    {
      svg: '',
      text: 'Garantizar la seguridad y el rendimiento de los motores marinos.'
    },
    {
      svg: '',
      text: 'Proporcionar soluciones técnicas de alta calidad.'
    },
    {
      svg: '',
      text: 'Establecer relaciones duraderas con nuestros clientes.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  scrollDown() {
    window.scroll({
      top: 500,
      left: 0,
      behavior: "smooth",
    })
  }

}
