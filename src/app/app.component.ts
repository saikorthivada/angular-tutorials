import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentTitle: string = 'Parent data';
  metersModel: number = 0;

  changeTitle() {
    this.parentTitle = 'Sample update parent';
  }
}
