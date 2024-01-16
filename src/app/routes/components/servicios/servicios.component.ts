import { Component } from '@angular/core';
import { servicios } from 'src/assets/lists/servicios-list';
import { ITrabajo, trabajos } from 'src/assets/lists/trabajos-list';
import { marcas, IMarcas } from 'src/assets/lists/marcas-list';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

  servicios: string[] = servicios;
  trabajos: ITrabajo[] = trabajos;
  marcas: IMarcas[] = marcas;

  constructor() { }
}
