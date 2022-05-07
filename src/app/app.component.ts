import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
      name: new FormControl(''),
      email: new FormControl(''),
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
      cityName: new FormControl(''),
      stateName: new FormControl(''),
      streetName: new FormControl(''),
      landmark: new FormControl('')
    })
  }
  
  removeAddress(index: number): void {
    this.addressesAsFormArray.removeAt(index);
  }
}
