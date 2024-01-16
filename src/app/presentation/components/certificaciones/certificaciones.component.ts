import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss']
})
export class CertificacionesComponent {

  @Input() certificaciones: string[] = [];
  constructor() { }
}
