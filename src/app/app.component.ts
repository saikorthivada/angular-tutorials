import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // ofObservable: Observable<number> = of(1, 2, 3, 4);

  http = inject(HttpClient)

  constructor() {
    this.http.get(`https://jsonplaceholder.typicode.com/todos`).pipe(
      filter((list: any) => {
        const index = list.findIndex((obj: any) => obj.id === -1);
        return index !== -1;
      }),
    ).subscribe((res) => {
      console.log('subscribe',res);
    })
  }
}
