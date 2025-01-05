import { CommonModule } from '@angular/common';
import { Component, computed, inject, resource, signal } from '@angular/core';
import { CustomResourceService } from './custom-resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v-19';

  cs = inject(CustomResourceService);

  todo = computed(() => JSON.stringify(this.cs.todoResource.value()));

  next() {
    this.cs.id.update((value) => value + 1);
  }
  reload() {
    this.cs.todoResource.reload();
  }
}
