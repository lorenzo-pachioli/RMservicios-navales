import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss']
})
export class CertificacionesComponent implements OnInit {

  @Input() certificaciones: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
