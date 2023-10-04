import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

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
