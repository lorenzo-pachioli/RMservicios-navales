import { Component, Input } from '@angular/core';
import { ITrabajo } from '../../../../assets/lists/trabajos-list';

@Component({
  selector: 'app-trabajos-destacados',
  templateUrl: './trabajos-destacados.component.html',
  styleUrls: ['./trabajos-destacados.component.scss']
})
export class TrabajosDestacadosComponent {

  @Input() trabajos: ITrabajo[] = [];

  constructor() { }
}
