import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  items: any[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Updates', changes);
  }

  ngOnInit(): void {
  }

}
