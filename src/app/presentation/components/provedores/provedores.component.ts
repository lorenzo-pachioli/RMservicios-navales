import { Component, Input } from '@angular/core';

interface iProvedores {
  nombre: string,
  url: string
}
@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
  styleUrls: ['./provedores.component.scss']
})
export class ProvedoresComponent {

  @Input() proveedores: iProvedores[] = [];
  constructor() { }

}
