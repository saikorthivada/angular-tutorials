import { Injectable, resource, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomResourceService {
  id = signal(1);

  todoResource = resource({
    request: () => ({id: this.id()}),
    loader: ({request}) => fetch(`https://jsonplaceholder.typicode.com/todos/${request.id}`).then((res) => res.json())
  });
  constructor() {
    this.sampleGetter();
  }

  sampleGetter() {
    return resource({
      request: () => ({id: this.id()}),
      loader: ({request}) => fetch(`https://jsonplaceholder.typicode.com/todos/${request.id}`).then((res) => res.json())
    });
  }

  next() {
    this.id.update((value) => value + 1);
  }

  reload() {
    this.todoResource.reload();
  }
}
