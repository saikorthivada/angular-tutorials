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
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    })
  }

  login() {
    console.log(this.loginFormGroup.value);
    console.log(this.loginFormGroup.valid);
  }

  getFormControl(formControlName: string) {
    return this.loginFormGroup.get(formControlName);
  }
}
