import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registerAddress: FormGroup;

  // obj = {
  //   name: '',
  //   email: '',
  //   addresses: [
  //     {
  //       cityName: '',
  //       stateName: '',
  //       streetName: '',
  //       landmark: ''
  //     }
  //   ]
  // }
  constructor() {
    this.registerAddress = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])),
      addresses: new FormArray([])
    })
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
    return new FormGroup({
      id: new FormControl(this.addressesAsFormArray.controls.length + 1),
      cityName: new FormControl('', Validators.compose([Validators.required])),
      stateName: new FormControl('', Validators.compose([Validators.required])),
      streetName: new FormControl('', Validators.compose([Validators.required])),
      landmark: new FormControl('')
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
