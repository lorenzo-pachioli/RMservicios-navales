import { Component } from '@angular/core';
import { buques, IBuque } from 'src/assets/lists/buques-list';
import { certificaciones } from 'src/assets/lists/certificaciones-list';
import { clientes } from 'src/assets/lists/clientes-list';
import { listadoPersonal } from 'src/assets/lists/personal-list';
import { proveedores } from 'src/assets/lists/proveedores-list';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.scss']
})
export class InstitucionalComponent {

  certificaciones = certificaciones;
  clientes = clientes;
  buques: IBuque[] = buques;
  listadoPersonal = listadoPersonal;
  proveedores = proveedores;

  constructor() { }
}
