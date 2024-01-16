import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.scss']
})
export class ObjetivosComponent {

  @Input() objetivo = {
    svg: '',
    text: ''
  }
  constructor() { }
}
