import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClickEventDirective } from './click-event.directive';
import { ColorDirective } from './color.directive';
import { MergerDirective } from './merger.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MergerDirective]
})
export class AppComponent {

  actionEmitter(event: any) {
    console.log(event);
  }
}
