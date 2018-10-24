import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appShowMovies]'
})
export class ShowMoviesDirective {

  constructor(private tplRef: TemplateRef<any>, private vw: ViewContainerRef) { }

  @Input() set appShowMovies(condition: boolean) {
    if (condition) {
      this.vw.createEmbeddedView(this.tplRef);
    } else {
      this.vw.clear();
    }
  }
}
