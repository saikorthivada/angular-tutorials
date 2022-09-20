import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dynamicContent = 'tag';

  updateParaElement() {
  //  this.htmlContent2 = `<p>My para element</p>`; 
  this.dynamicContent = 'Element';
  }
}
