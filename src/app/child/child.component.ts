import { Component } from '@angular/core';
import { SingleTon } from '../singleton';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  message: string = 'Default message';

  getDataFromSingleTon() {
    this.message = SingleTon.getInstance().getData();
  }

}
