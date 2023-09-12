import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sampleObservable: Observable<any> = of(1, 2, 3, 4);

  httpClient: HttpClient = inject(HttpClient)

  constructor() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos').pipe(
      map((result: any) => {
        return result?.map((obj: any)=>{
          return {
            id: obj.id,
            title: obj.title
          }
        })
      })
    ).subscribe((todos: any) => {
      console.log(todos);
    })
    // this.sampleObservable.pipe(
    //   map((result) => {
    //     return result * 2;
    //   })
    // ).subscribe((res) => {
    //   console.log(res);
    // })
  }
}
