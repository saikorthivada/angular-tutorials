import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(+this.activatedRoute.snapshot.params.id);
    this.activatedRoute.params.subscribe((res) => {
      console.log(res);
    })
  }
}
