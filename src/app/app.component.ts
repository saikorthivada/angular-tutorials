import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  http = inject(HttpClient);

  constructor() {
    this.http.get('https://jsonplaceholder.typicode.com/comm').subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });

    this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }
}
