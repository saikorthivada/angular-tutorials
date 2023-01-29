import { Directive, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClickEvent]',
  standalone: true
})
export class ClickEventDirective {

  @Output()
  clickEmitter: EventEmitter<any> = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick(event: any) {
    this.clickEmitter.emit(event);
  }
  constructor(private elementRef: ElementRef) { }

}
