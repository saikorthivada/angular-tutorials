import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IUser {
  id?: string;
  email: string;
  firstname: string;
  lastname: string;
  mobileNumber: string;
  password: string;
  interested_topics: string | string[];
  created_at?: string;
  uuid?: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ENDPOINT = 'users';
  private userURL = `${environment.BASE_URL}${this.ENDPOINT}`;

  constructor(private httpClient: HttpClient) { }

  createUser(payload: IUser): Observable<any> {
    if(typeof payload.interested_topics === 'string') {
      payload.interested_topics = payload.interested_topics.split(',');
    }
    payload.created_at = (new Date).toString();
    return this.httpClient.post(this.userURL, payload);
  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get(this.userURL) as Observable<IUser[]>;
  }
}
