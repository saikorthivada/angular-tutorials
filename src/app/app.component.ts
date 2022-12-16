import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

const checkEquailty = (source: string, target: string) => {
  return (group: AbstractControl): ValidationErrors | null => {
    const sourceValue = group.get(source)?.value;
    const targetValue = group.get(target)?.value;
    if(sourceValue !== targetValue) {
      return {
        notEqual: true
      }
    }
    return null;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  passwordGroup: FormGroup;

  constructor() {
    this.passwordGroup = new FormGroup({
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }, [checkEquailty('password', 'confirmPassword')])
  
  }
}
