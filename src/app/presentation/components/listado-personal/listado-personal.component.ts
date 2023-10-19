import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-personal',
  templateUrl: './listado-personal.component.html',
  styleUrls: ['./listado-personal.component.scss']
})
export class ListadoPersonalComponent implements OnInit {

  @Input() listadoPersonal: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
