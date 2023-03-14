import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userId = 1;
  constructor(private router: Router) {

  }
  login() {
    let sampleUserID = 1;
    if(this.userId === sampleUserID) {
      this.router.navigate(['login', 123]);
    } else {
      alert('User does not exist');
    }
  }
}
