import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  role!: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((res: any) => {
      this.role = res.role;
    });
  }
}
