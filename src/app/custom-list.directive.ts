import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomList]'
})
export class CustomListDirective {

  constructor(private eltRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.eltRef.nativeElement, 'text-align', 'center');
  }
}
