import { Component, Input } from '@angular/core';
import { IBuque } from 'src/assets/lists/buques-list';

@Component({
  selector: 'app-listado-buques',
  templateUrl: './listado-buques.component.html',
  styleUrls: ['./listado-buques.component.scss']
})
export class ListadoBuquesComponent {

  @Input() buques: IBuque[] = [];
  constructor() { }
}
