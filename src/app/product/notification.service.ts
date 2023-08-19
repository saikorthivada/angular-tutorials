import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  private message: string = 'default value';

  constructor() { }

  public setMessage(input: string): void {
    this.message = input;
  }

  public getMessage(): string {
    return this.message;
  }
}
