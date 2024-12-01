import { CommonModule } from '@angular/common';
import { Component, computed, resource, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v-19';

  id = signal(1);

  todoResource = resource({
    request: () => ({id: this.id()}),
    loader: ({request}) => fetch(`https://jsonplaceholder.typicode.com/todos/${request.id}`).then((res) => res.json())
  });

  todo = computed(() => JSON.stringify(this.todoResource.value()));

  next() {
    this.id.update((value) => value + 1);
  }
  // todosResource = resource({
  //   loader: () => fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json())
  // });

  // list = computed(() => this.todosResource.value());

  reload() {
    this.todoResource.reload();
  }
}
