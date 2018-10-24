import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeMovie]'
})
export class ChangeMovieDirective {

  constructor(private eltRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.renderer.setStyle(this.eltRef.nativeElement, 'color', 'purple');
    this.renderer.setStyle(this.eltRef.nativeElement, 'font-size', '18px')
    this.renderer.setStyle(this.eltRef.nativeElement, 'background-color', 'black');
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.renderer.setStyle(this.eltRef.nativeElement, 'color', 'inherit');
    this.renderer.setStyle(this.eltRef.nativeElement, 'font-size', '14px');
    this.renderer.setStyle(this.eltRef.nativeElement, 'background-color', 'transparent');
  }
}
