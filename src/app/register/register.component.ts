import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(this.activatedRoute.snapshot.queryParams);
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(res);
    })
  }
}
