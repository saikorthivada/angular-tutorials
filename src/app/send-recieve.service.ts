import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SendRecieveService {

  private message: string = 'Default value';
  private router: Router = inject(Router);
  constructor() { }

  public setMessage(input: string): void {
    console.log('Input', input);
    this.message = input;
  }

  public getMessage(): string {
    return this.message;
  }
}
