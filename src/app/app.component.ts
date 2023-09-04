import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // ofObservable = of('s', 'k', 'k');

  promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  })

  fromObservable = from(this.promise);
  constructor() {
    this.fromObservable.subscribe((result: any) => {
      console.log(result);
    })
  }
}
