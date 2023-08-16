import { Component, inject } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messageService!: MessageService;

  constructor() {
    this.messageService = inject(MessageService);
  }
}
