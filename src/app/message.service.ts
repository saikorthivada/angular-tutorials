import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public message: string = 'Message service using inject method';
  constructor() { }
}
