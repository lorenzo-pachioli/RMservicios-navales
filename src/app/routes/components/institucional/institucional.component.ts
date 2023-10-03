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
  ];

  buques = [
    {
      nombre: "Antonino",
      img: "BP-Antonino.jpg"
    },
    {
      nombre: "Itxas-Lur",
      img: "BP-Itxas-Lur.jpg"
    },
    {
      nombre: "Ceres",
      img: "Buque-Ceres.jpg"
    },
    {
      nombre: "Geminis",
      img: "Buque-Geminis.jpg"
    },
    {
      nombre: "Don Miguel",
      img: "Don miguel.JPG"
    },
    {
      nombre: "Don Pedro",
      img: "don-pedro-1.jpg"
    },
    {
      nombre: "Fonseca",
      img: "Fonseca.jpg"
    },
    {
      nombre: "Franco",
      img: "FRANCO.jpg"
    },
    {
      nombre: "Giuliana",
      img: "Giuliana.jpeg"
    },
    {
      nombre: "Karina",
      img: "KARINA.jpg"
    },
    {
      nombre: "Marianela",
      img: "Marianela.jpg"
    },
    {
      nombre: "Mellino",
      img: "mellino-vi.jpg"
    },
    {
      nombre: "Stella Maris I",
      img: "StellaMarisI.jpg"
    },
    {
      nombre: "TaiseiMaru",
      img: "TaiseiMaru.jpg"
    },
    {
      nombre: "Xeitosino",
      img: "XEITOSINO.jpg"
    }
  ];

  listadoPersonal = [
    "Romagnoli Matías - Técnico especializado",
    "Cristian Taita - Técnico",
    "Roberto Daniel Grosso - Técnico especializado",
    "Lorenzo Pachioli - Oficial mecánico",
    "Daniel Machado - Tornero",
    "Nicolás Junco - Medio oficial",
    "Paola Rodríguez - Administrativa"
  ];

  marcas = [
    {
      nombre: "Caterpillar",
      img: "cat.svg"
    },
    {
      nombre: "Cummins",
      img: "cummins.svg"
    },
    {
      nombre: "Deutz-fahr",
      img: "deutz-fahr.svg"
    },
    {
      nombre: "MWM",
      img: "mwm.png"
    },
    {
      nombre: "Reintjes",
      img: "reintjes.svg"
    },
    {
      nombre: "Scania",
      img: "scania-1.svg"
    },
    {
      nombre: "Twin-disc",
      img: "twin-disc.svg"
    },
    {
      nombre: "Volvo",
      img: "volvo.svg"
    },
    {
      nombre: "Vulkan",
      img: "vulkan_logo.svg"
    },
    {
      nombre: "Wartsila",
      img: "wartsila.svg"
    },
    {
      nombre: "Yanmar",
      img: "yanmar-1.svg"
    },
    {
      nombre: "ZF",
      img: "zf.svg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
