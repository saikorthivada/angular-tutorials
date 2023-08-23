import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  public message: string = 'Service value';

  constructor() { }

  public setMessage(input: string): void {
    console.log('On update', input);
    this.message = input;
  }
}
