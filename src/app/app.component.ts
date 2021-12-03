import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 username: FormControl = new FormControl('');

 changeValidations() {
   this.username.setValidators([Validators.required]);
   this.username.updateValueAndValidity();
 }
}
