import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  textFormControl: FormControl = new FormControl('', [Validators.required]);
  submit() {
    if(this.textFormControl.invalid) {
      this.textFormControl.markAsTouched();
    }
  }
}
