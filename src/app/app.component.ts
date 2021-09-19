import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginFormObj = {
    username: '',
    password: ''
  }

  loginSubmit() {
    console.log(this.loginFormObj);
  }
}
