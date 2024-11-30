import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ChildComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'v-19';
  readonly element = viewChild.required<ElementRef>("element");

  readonly childElement = viewChild.required<ChildComponent>("child");

  ngAfterViewInit() {
    const element = this.element();

    const childElement = this.childElement();
    console.log(childElement.titleChild);
    element.nativeElement.focus();
  }

}
