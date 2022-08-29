import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('childRef') childRef!: ChildComponent;

  changeChildTitle() {
    this.childRef.title = 'Updated from parent component';
  }

  accessChildMethod() {
    this.childRef.changeTitle('Im able to access the child method');
  }
}
