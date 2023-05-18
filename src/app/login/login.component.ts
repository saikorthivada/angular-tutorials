import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() id!: string;

  @Input() queryParamName!: string;

  @Input() role!: string;

  @Input() message!: string;

  // constructor(private activatedRoute: ActivatedRoute) {
  //   const id = this.activatedRoute.snapshot.params['id'];
  // }

}
