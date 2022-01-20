import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginFormGroup: FormGroup;
  constructor() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl(''),
      passwordReset: new FormControl('')
    })
  }

  login() {
    console.log(this.loginFormGroup.value);
  }
}
