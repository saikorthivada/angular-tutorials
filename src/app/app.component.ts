import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // subject = new Subject();

  behaviourSubject = new BehaviorSubject('');

  constructor() {

     this.behaviourSubject.subscribe((res) => {
      console.log('Subscriber one - ', res);
    });

    this.behaviourSubject.next('Emission 1');

    this.behaviourSubject.subscribe((res) => {
      console.log('Subscriber Two - ', res);
    });
    this.behaviourSubject.next('Emission 2');

    // this.subject.subscribe((res) => {
    //   console.log('Subscriber one - ', res);
    // });

    // this.subject.next('Emission 1');

    // this.subject.subscribe((res) => {
    //   console.log('Subscriber Two - ', res);
    // });
    // this.subject.next('Emission 2');
  }
}
