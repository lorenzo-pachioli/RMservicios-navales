import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen: Boolean = true;
  menu_desktop = ['inicio', 'institucional', 'servicios', 'contacto'];
  @ViewChild('header', { static: false }) private header?: ElementRef<HTMLDivElement>;
  isIntoView: boolean = true;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {

    if (this.header) {
      const rect = this.header.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isIntoView = topShown && bottomShown;
    }
  }

  setIsMenuOpen(newValue: boolean) {
    this.isMenuOpen = newValue;
    console.log(this.isMenuOpen);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  scrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  isInViewport(elem: any) {
    let distance = elem.getBoundingClientRect();
    return (
      distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
  }

}
