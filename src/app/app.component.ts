import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: any[] = [];
  loading: boolean = false;
  error: string = '';
  httpService: HttpClient = inject(HttpClient);
  constructor() {
    this.loading = true;
    this.httpService.get('https://jsonplaceholder.typicode.com/todos').subscribe((result: any) => {
      console.log(result);
      this.todos = result;
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.error = 'Something went wrong'
    });
  }
}
