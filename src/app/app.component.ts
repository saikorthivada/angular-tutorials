import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputValue = '';

  onInput(ev: any) {
    console.log(ev.target.value);
    this.inputValue = ev.target.value;
  }
}
