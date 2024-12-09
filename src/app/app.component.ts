import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v-19';

  sourceA = signal(10);

  sourceB = signal(20);

  dependentSignal = linkedSignal({
    source: this.sourceA,
    computation: () => {
      return this.sourceA() + this.sourceB();
    }
  });

  constructor() {
    setTimeout(() => {
      // this.sourceA.update((value) => value + 10);
      this.sourceB.update((value) => value + 20);
    }, 5000);
  }
}
