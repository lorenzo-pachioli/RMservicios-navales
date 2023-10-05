import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajos-destacados',
  templateUrl: './trabajos-destacados.component.html',
  styleUrls: ['./trabajos-destacados.component.scss']
})
export class TrabajosDestacadosComponent implements OnInit {

  buques = [
    {
      nombre: "Fabricación y montaje de trineo para equipo generador Cummins con bomba hidráulica para guinche ",
      img: "Screenshot (76).png"
    },
    {
      nombre: "Trabajos realizados sobre motor grupo electrógeno marca perkins serie 4012 12 cil en v 1,2 negras de potencia eléctrica",
      img: "Screenshot (77).png"
    },
    {
      nombre: "Recorrido de culatas motor Caterpillar 3412",
      img: "Screenshot (78).png"
    },
    {
      nombre: "Motor Yanmar",
      img: "Screenshot (79).png"
    },
    {
      nombre: "Alisados en remolcador puerto mar del plata",
      img: "Screenshot (80).png"
    },
    {
      nombre: "CAT 3412 electrónico",
      img: "Screenshot (81).png"
    },
    {
      nombre: "Reductora twin-disc",
      img: "Screenshot (82).png"
    },
    {
      nombre: "Reformas en filtros de agua dura",
      img: "Screenshot (83).png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
