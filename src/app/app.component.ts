import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

const checkURLWithHTTPS = () => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const valueSplit = value.split('https:/\//');
    if(value && valueSplit.length > 0 && valueSplit[0] === 'https://') {
      return null;
    }
    return {
      nomatch: true
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  urlFormGroup: FormGroup;
  constructor() {
    this.urlFormGroup = new FormGroup({
      url: new FormControl('', [checkURLWithHTTPS()])
    });
  }
}
