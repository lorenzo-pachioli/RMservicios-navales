import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.scss']
})
export class ObjetivosComponent implements OnInit {

  @Input() objetivo = {
    svg: '',
    text: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
