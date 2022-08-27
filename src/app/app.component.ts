import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentTitle: string = 'Parent data updated';
  outPutData = '';
  receiveData(childData: any) {
    console.log(childData);
    this.outPutData = childData.title;
  }
}
