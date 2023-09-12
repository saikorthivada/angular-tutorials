import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient: HttpClient = inject(HttpClient);
  constructor() { }

  getTodos(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos').pipe(
      map((value: any) => {
        console.log(value);
        return value.map((response: any) => {
          return {
            id: response.id,
            title: response.title
          }
        });
      })
    );
  }
}
