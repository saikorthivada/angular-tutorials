import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ClickEventDirective } from './click-event.directive';
import { ColorDirective } from './color.directive';

@Directive({
  selector: '[appMerger]',
  standalone: true,
  hostDirectives: [
    {directive: ClickEventDirective, outputs: ['clickEmitter']},
    {directive: ColorDirective, inputs: ['color']}]
})
export class MergerDirective {

  @Input()
  innerMessage!: string;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.target.innerWidth);
    if(event.target.innerWidth <= 300) {
      this.elementRef.nativeElement.innerHTML = 'Screen Not Supported';
    } else {
      this.elementRef.nativeElement.innerHTML = this.innerMessage;
    }
  }

  constructor(private elementRef: ElementRef) {}

}
