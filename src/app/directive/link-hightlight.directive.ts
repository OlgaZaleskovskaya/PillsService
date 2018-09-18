import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLinkHighlight]'
})
export class LinkHighlightDirective implements OnInit {
  constructor(private  element: ElementRef, private renderer: Renderer2 ) {
  }
  ngOnInit(): void {
/*   this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');*/

  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#1A6090');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', '2px 2px 2px 1px rgba(122,120,122,1)');
  }
  @HostListener('mouseleave') mouseleave (eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', 'none');
    this.renderer.setStyle(this.element.nativeElement, 'color', '#1A6090');
  }
}
