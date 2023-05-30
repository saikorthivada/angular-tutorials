import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private router: Router) {

  }


  changePassword() {
    this.router.navigate(['admin', 'profile', 'change-password']);
  }

  settings() {
    this.router.navigate(['admin', 'profile', 'settings'])
  }
}
