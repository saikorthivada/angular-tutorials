import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  login(formDetails: any) {
    console.log(formDetails.form.value);
    console.log(formDetails.form.controls['username'].value, 'username');
    console.log(formDetails.form.controls['password'].value, 'password');

  }

  confirmMethod(confirmValue: any) {
    console.log(confirmValue.form.value);
  }

  changeEvent(confirmForm: any) {
    console.log(confirmForm.form.value);
  }
}
