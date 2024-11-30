import { Component, effect, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v-19';

  firstName = model<string>("");

  studentDetails = model<{id: number, name: string}>({
    id: 0,
    name: "Sai kumar"
  })

  constructor() {
    effect(() => {
      console.log("effect", this.firstName());
    })
  }

  updateName() {
    // this.firstName.set(Math.random().toString());
    this.firstName.update((value) => value + Math.random().toString());
  }
}
