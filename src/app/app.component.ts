import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: FormControl = new FormControl('', [Validators.required]);

  removeValidations() {
    this.username.clearValidators();
    this.username.updateValueAndValidity();
  }
}
