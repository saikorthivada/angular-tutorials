import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  title: string = 'Child';

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(titleInput: string) {
    this.title = titleInput;
  }

}
