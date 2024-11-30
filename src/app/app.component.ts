import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule,ChildComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v-19';

  inputElement = model();

  constructor() {}
}
