import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modelTest = '';

  getModelValue() {
    console.log(this.modelTest);
    return this.modelTest;
  }

  setModelValue() {
    this.modelTest = 'Updated the model value'
  }
}
