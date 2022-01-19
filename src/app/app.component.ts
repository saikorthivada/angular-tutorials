import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email: FormControl = new FormControl('', [Validators.required]);
  password: FormControl = new FormControl('', [Validators.required]);

  login() {
    console.log(this.email.value);
    console.log(this.password.value);
    if(this.email.valid && this.password.valid) {
      const payload = {
        email: this.email.value,
        password: this.password.value
      };
      console.log(payload);
    }
   
  }
}
