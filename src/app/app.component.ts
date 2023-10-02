import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  list!: Observable<any>;

  show = of(true);

  http = inject(HttpClient);

  // uiList: number[] = [];

  constructor() {
    // this.list.subscribe((res: number[]) => {
    //   console.log(res);
    //   this.uiList = res;
    // })
    this.getList();
  }

  getList(): void {
    this.list = this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
