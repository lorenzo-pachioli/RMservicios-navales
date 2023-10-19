import { Component, Input, OnInit } from '@angular/core';
interface buques {
  nombre: string,
  img: string
}
@Component({
  selector: 'app-listado-buques',
  templateUrl: './listado-buques.component.html',
  styleUrls: ['./listado-buques.component.scss']
})
export class ListadoBuquesComponent implements OnInit {

  @Input() buques: buques[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
