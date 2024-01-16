import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-servicios',
  templateUrl: './listado-servicios.component.html',
  styleUrls: ['./listado-servicios.component.scss']
})
export class ListadoServiciosComponent {

  @Input() servicios: string[] = [];
  constructor() { }
}
