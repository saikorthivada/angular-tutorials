import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  list = [
    {
      id: 1,
      label: 'Asia',
      countries: [
        {
          id: 101,
          label: 'India'
        },
        {
          id: 102,
          label: 'Iran'
        }
      ]
    },
    {
      id: 2,
      label: 'Europe',
      countries: [
        {
          id: 201,
          label: 'France'
        },
        {
          id: 202,
          label: 'Germany'
        }
      ]
    }
  ];

  selectedContriesList: any[] = [];

  dropDownForm!: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    this.dropDownForm = new FormGroup({
      contintent: new FormControl(null),
      country: new FormControl({value: null, disabled: true})
    });

    this.dropDownForm.get('contintent')?.valueChanges.subscribe((res: number) => {
      console.log(res);
      this.dropDownForm.get('country')?.setValue(null);
      if(res) {
        this.selectedContriesList = this.list.filter((obj: any) => obj.id === res)[0].countries;
        this.dropDownForm.get('country')?.enable();
      } else {
        this.dropDownForm.get('country')?.disable();
      }
    })
  }

  submit() {
    console.log(this.dropDownForm.value);
  }
}
