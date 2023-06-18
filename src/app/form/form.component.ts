import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnDestroy {

  username = new FormControl('', [Validators.required]);

  ngOnDestroy() {
    console.log('On destory');
  }
}
