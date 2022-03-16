import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resetFornGroup: FormGroup;

  defaultFormValues = {
    username: 'sai@gmail.com',
    address: 'Hyderabad'
  }
  constructor() {
    this.resetFornGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  resetForm() {
    this.resetFornGroup.patchValue(this.defaultFormValues);
  }
}
