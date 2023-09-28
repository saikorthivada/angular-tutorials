import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { combineLatest, forkJoin, interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ofObservable = of(1, 2, 3, 4);
  secondObservable = interval(3000);
  thirdObserable = interval(10000);

  fourthObservable = of(1,2,3,4,5,6);

  http = inject(HttpClient);

  constructor() {
    const base_url = 'https://jsonplaceholder.typicode.com/todos';

    const invalid_url = 'https://jsonplaceholder.typicode.com/tod';
    const httpURLs= [
      this.http.get(`${base_url}/1`),
      this.http.get(`${invalid_url}/2`),
      this.http.get(`${base_url}/3`),
    ];
    combineLatest(httpURLs).pipe().subscribe(res => {
      console.log(res);
    });

    forkJoin(httpURLs).subscribe(res => {
      console.log(res);
    });

    // combineLatest([this.ofObservable, this.secondObservable, this.thirdObserable]).subscribe((res) => {
    //   console.log(res);
    // });

    // forkJoin([this.ofObservable, this.fourthObservable]).subscribe((res) => {
    //   console.log(res);
    // })
  }
}
