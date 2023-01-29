import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective implements OnChanges {

  @Input()
  color!: string;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['color']) {
      this.elementRef.nativeElement.style.color = changes['color'].currentValue;
    }
  }

}
