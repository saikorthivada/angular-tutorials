import { Component } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  metersControl: FormControl = new FormControl(null);

  centimeters: number = 0;

  constructor() {
    this.metersControl.valueChanges.subscribe(() => {
      if(this.metersControl.value) {
        this.centimeters = this.metersControl.value * 100;
      } else {
        this.centimeters = 0;
      }
    })
  }
}
