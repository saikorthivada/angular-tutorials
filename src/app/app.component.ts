import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  personObj = {
    username: 'sai kumar',
    age: 20
  }

  incrementAge() {
    // this.personObj.age = this.personObj.age + 1;
    // this.personObj = {
    //   ...this.personObj,
    //   age: this.personObj.age + 1
    // };

    this.personObj = Object.assign({},this.personObj,{age: this.personObj.age + 1});
  }
}
