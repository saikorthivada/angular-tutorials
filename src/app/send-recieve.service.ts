import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendRecieveService {

  private message: string = 'Default value';

  constructor() { }

  public setMessage(input: string): void {
    console.log('Input', input);
    this.message = input;
  }

  public getMessage(): string {
    return this.message;
  }
}
