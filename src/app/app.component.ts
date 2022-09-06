import { Component, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren('childRef') childRefs!: ChildComponent[];

  changeChildTitle() {
    let counter = 0;
    for (const iterator of this.childRefs) {
      counter = counter +1;
      iterator.title = `${iterator.title} ${counter}`;
    }
  }

  accessChildMethod() {
    let counter = 0;
    for (const childComponent of this.childRefs) {
      counter = counter + 1;
      if(counter %2 === 0) {
        childComponent.changeTitle(`${childComponent.title} method ${counter}`);
      }
    }
  }
}
