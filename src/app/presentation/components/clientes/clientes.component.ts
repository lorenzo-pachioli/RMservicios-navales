import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  @Input() clientes: String[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
