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
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Sample auth token',
      channel: 'channelName'
    });
    const updatedHeaders = httpHeaders.set('channel', 'techshareskk');
    console.log(updatedHeaders.get('channel'));
    return this.httpService.get('https://jsonplaceholder.typicode.com/todos', {
      headers: updatedHeaders
    });
  }
}
