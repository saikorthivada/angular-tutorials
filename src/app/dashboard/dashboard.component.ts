import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {
    console.log('dashboard');
  }

  logout() {
    const confirmation = confirm('Do you want to logout');
    if(confirmation) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }
}
