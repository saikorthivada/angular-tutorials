import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registerAddress: FormGroup;

  obj = {
    name: 'sai kumar',
    email: 'sai@gmail.com',
    addresses: [
      {
        id: 1,
        cityName: 'city1',
        stateName: 'state1',
        streetName: 'street1',
        landmark: 'landmark'
      },
      {
        id: 2,
        cityName: 'city2',
        stateName: 'state2',
        streetName: 'street2',
        landmark: ''
      }
    ]
  }
  constructor(private formBuilder: FormBuilder) {
    this.registerAddress = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
      email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])),
      addresses: this.formBuilder.array([])
    });

    this.obj.addresses.forEach(() => {
      this.addAddress();
    })
    this.registerAddress.patchValue(this.obj);
  }

  
  public get addressesAsFormArray() : FormArray {
    return this.registerAddress.get('addresses') as FormArray;
  }

  submit() {
    console.log(this.registerAddress.value);
  }

  addAddress() {
    this.addressesAsFormArray.push(this.getAddressForGroup());
  }

  getAddressForGroup(): FormGroup {
    return this.formBuilder.group({
      id: this.formBuilder.control(this.addressesAsFormArray.controls.length + 1),
      cityName: this.formBuilder.control('', Validators.compose([Validators.required])),
      stateName: this.formBuilder.control('', Validators.compose([Validators.required])),
      streetName: this.formBuilder.control('', Validators.compose([Validators.required])),
      landmark: this.formBuilder.control('')
    })
  }
  
  removeAddress(index: number): void {
    this.addressesAsFormArray.removeAt(index);
  }

  isFieldValid(formGroup: any, formControlName: string) {
    if(formGroup.get(formControlName)?.invalid && (formGroup.get(formControlName)?.touched || formGroup.get(formControlName)?.dirty)) {
      return true;
    }
    return false;
  }

  getFieldErrorByType(formGroup: any, formControlName: string, type: string) {
    return formGroup.get(formControlName)?.errors[type];
  }
}
