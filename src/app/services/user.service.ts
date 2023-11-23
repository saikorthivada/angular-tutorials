import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LOCALSTORAGE_KEYS } from '../common/constants/local-storage.constants';

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

  private userNameSignal = signal(localStorage.getItem(LOCALSTORAGE_KEYS.USER_NAME) ?? '');

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

  getUserById(userId: string): Observable<IUser> {
    return this.httpClient.get(`${this.userURL}/${userId}`) as Observable<IUser>;
  }

  updateUserByUserId(userId: string, userDetails: IUser): Observable<IUser> {
    if(typeof userDetails.interested_topics === 'string') {
      userDetails.interested_topics = userDetails.interested_topics.split(',');
    }
    return this.httpClient.put(`${this.userURL}/${userId}`, userDetails) as Observable<IUser>;
  }

  updatePasswordByUserId(userId: string, password: string): Observable<IUser> {
    return this.httpClient.put(`${this.userURL}/${userId}`, {
      password: password
    }) as Observable<IUser>
  }
  setUsername(input: string) {
    localStorage.setItem(LOCALSTORAGE_KEYS.USER_NAME,input);
    this.userNameSignal.set(input);
  }

  getUserName(): string {
    return this.userNameSignal();
  }
}
