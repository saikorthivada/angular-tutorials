import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]',
  standalone: true
})
export class CustomIfDirective {

  @Input({required: true}) set appCustomIf(value: boolean) {
    if(value) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  };
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

  }

}
