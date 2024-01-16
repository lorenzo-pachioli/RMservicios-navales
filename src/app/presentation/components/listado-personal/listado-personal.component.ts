import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-personal',
  templateUrl: './listado-personal.component.html',
  styleUrls: ['./listado-personal.component.scss']
})
export class ListadoPersonalComponent {

  @Input() listadoPersonal: string[] = [];
  constructor() { }
}
