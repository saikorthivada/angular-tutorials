import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  addressForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addressForm = this.formBuilder.group({
      name: [''],
      phone: [''],
      address: this.getAddressFormGroup()
    })
  }

  getAddressFormGroup(): FormGroup<any> {
    return this.formBuilder.group({
      streetName: [''],
      roadNumber: ['']
    }) as FormGroup<any>;
  }

  getAddressFormGroupForChild(): FormGroup<any> {
    return this.addressForm.get('address') as FormGroup;
  }

  submit() {
    console.log(this.addressForm.value);
  }
}
