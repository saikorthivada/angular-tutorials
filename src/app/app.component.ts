import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  htmlContent: string = `<h1>Hai this is a sample HTML content</h1>
  <h2>Hai this is heading 2</h1>`;
  dynamicContent = 'tag';
  htmlContent2: string = `<p>My para ${this.dynamicContent}</p>`;

  updateParaElement() {
  //  this.htmlContent2 = `<p>My para element</p>`; 
  this.dynamicContent = 'Element';
  }
}
