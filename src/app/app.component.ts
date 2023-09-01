import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timer: any;
  sampleObseravable = Observable.create((observer: any) => {
    let count = 0;
    this.timer = setInterval(() => {
      console.log('timer rurning');
      if (count <= 10) {
        observer.next(count);
        count++;
      } else {
        observer.complete();
      }
    }, 1000);

  });

  constructor() {
    this.sampleObseravable.subscribe(
      (result: any) => {
        console.log('subscriber', result);
      }
    );

    this.sampleObseravable.subscribe(
      (result: any) => {
        console.log('subscriber 2', result);
      }
    )
  }
}
