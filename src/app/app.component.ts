import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginFormGroup: FormGroup;
  constructor() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('')
    })
  }
}
