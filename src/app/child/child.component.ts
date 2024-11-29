import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  readonly childEmitter = output<string>({
    alias: "buttonEmitter"
  });

  // @Output("buttonEmitter") childEmitter: EventEmitter<string> = new EventEmitter();

  sendData(): void {
    this.childEmitter.emit("Techshareskk");
  }
}
