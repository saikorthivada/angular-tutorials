import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpService: HttpClient = inject(HttpClient);

  constructor() { }

  public getTodos():Observable<any> {
    return this.httpService.get('https://jsonplaceholder.typicode.com/todos');
  }
}
