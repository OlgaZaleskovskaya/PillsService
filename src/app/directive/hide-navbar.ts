import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHideNavbar]'
})
export class HideNavbarDirective implements OnInit {
  constructor(private  element: ElementRef, private renderer: Renderer2 ) {
  }
  ngOnInit(): void {
    /*   this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');*/

  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#1A6090');

  }
  @HostListener('mouseleave') mouseleave (eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', 'none');
    this.renderer.setStyle(this.element.nativeElement, 'color', '#1A6090');
  }
}
