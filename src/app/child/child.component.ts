import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit(): void {
  }

  getControlGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }
}
