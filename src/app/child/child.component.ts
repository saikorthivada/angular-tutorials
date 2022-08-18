import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  title: string = 'Child component';

  @Input()
  metersValue: number = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('this is ng on changes', changes);
    if(changes.metersValue && changes.metersValue.currentValue) {
      this.metersValue = changes.metersValue.currentValue * 100;
    } else {
      this.metersValue = 0;
    }
  }

  ngOnInit(): void {
  }

}
