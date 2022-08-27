import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  title: string = 'Child component';

  @Output()
  sendDataEmitter: EventEmitter<any> = new EventEmitter();

  dataModel = '';
  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    const obj = {
      title: this.dataModel
    }
    this.sendDataEmitter.emit(obj);
  }

}
