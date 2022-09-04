import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  htmlContentChild!: string;

  @Input()
  paraContent!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
