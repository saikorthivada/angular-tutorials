import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {

  }
  login() {
    console.log('Login action');
    localStorage.setItem('token', Math.random().toString());
    this.router.navigate(['dashboard']);
  }
}
