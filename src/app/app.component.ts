import { Component, signal, linkedSignal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v-19';

  sourceSignal = signal([
    {
      id: 1,
      name: 'sai'
    },
    {
      id: 2,
      name: 'Sai kumar'
    }
  ]);

  dependentSignal = linkedSignal(() => this.sourceSignal()[0]);

  // dependentSignal = computed(() => this.sourceSignal()[0]);

  updateSourceSignal() {
    this.sourceSignal.set([
      {
        id: 3,
        name: 'korthiavda'
      },
      {
        id: 4,
        name: 'Sai kumar korthivada'
      }
    ])
  }

  updateDependentSignal() {
    this.dependentSignal.set({
      id: 5,
      name: 'Techshareskk'
    })
  }
}
