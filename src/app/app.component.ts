import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SingleTon } from './singleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  setData() {
    console.log('Set data');
    SingleTon.getInstance().setData('sai');
  }
}
