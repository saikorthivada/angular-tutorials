import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cities: FormArray;

  constructor(){
    this.cities = new FormArray([new FormControl(''), new FormControl('')]);
  }

  getFormControl(index: number): FormControl{
    return this.cities.controls[index] as FormControl;
  }

  showArrayValues(): void {
    console.log(this.cities.value);
  }

  addFormControl(): void {
    this.cities.push(new FormControl(''));
  }
}
