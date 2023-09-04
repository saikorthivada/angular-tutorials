import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: any[] = [];
  loading: boolean = false;
  error: string = '';
  userService: UserService = inject(UserService);

  constructor() {
    this.loading = true;
    this.userService.getTodos().subscribe((result) => {
      this.todos = result;
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.error = 'Something went wrong'
    });
  }
}
