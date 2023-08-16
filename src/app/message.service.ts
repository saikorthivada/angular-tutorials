import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public message: string = 'Welcome to services series';
  constructor() { }
}
