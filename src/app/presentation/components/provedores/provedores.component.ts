import { Component, Input, OnInit } from '@angular/core';

interface iProvedores {
  nombre: string,
  url: string
}
@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
  styleUrls: ['./provedores.component.scss']
})
export class ProvedoresComponent implements OnInit {

  @Input() proveedores: iProvedores[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
