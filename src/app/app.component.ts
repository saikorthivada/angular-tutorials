import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentItems = [
    {
      name: 'sai',
      age: 20
    },
    {
      name: 'skk',
      age: 22
    },
  ];

  pushObj() {
    this.parentItems = [...this.parentItems, {
      age: 23,
      name: 'updated'
    }];
  }
}
