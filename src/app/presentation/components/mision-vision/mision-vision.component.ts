import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.scss']
})
export class MisionVisionComponent implements OnInit {

  @Input() title = '';
  @Input() text = '';
  @Input() backgroundcolor = 'var(--primary50)';
  constructor() { }

  ngOnInit(): void {
  }

  flexDirection() {
    if (this.title === 'Vision') return 'row-reverse';
    else return 'row';
  }
}
