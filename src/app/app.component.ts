import { Component } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  username: FormControl = new FormControl('');

  changeFormControl() {
    this.username.setValue('dynamic value');
  }
}
