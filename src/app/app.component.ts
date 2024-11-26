import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ChildComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v-19';
}
