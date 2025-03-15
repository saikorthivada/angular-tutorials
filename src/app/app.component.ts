import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FormsModule]
})
export class AppComponent {
  title = 'v-19';
  modalValue = model("");
  list = signal<string[]>([]);
  addItem() {
    if (this.modalValue()) {
      this.list.update((value) => [...value, this.modalValue()]);
      this.modalValue.set("");
    }
  }
}
