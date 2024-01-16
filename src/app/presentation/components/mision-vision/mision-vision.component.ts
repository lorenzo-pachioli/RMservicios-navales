import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.scss']
})
export class MisionVisionComponent {

  width = window.innerWidth;
  @Input() title = '';
  @Input() text = '';
  @Input() backgroundcolor = 'var(--primary50)';
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }
  constructor() { }

  flexDirection() {
    if (this.width > 800) {
      if (this.title === 'Vision') return 'row-reverse';
      else return 'row';
    } else return 'column';
  }
}
