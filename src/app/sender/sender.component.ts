import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SendRecieveService } from '../send-recieve.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {

  senderParam: string = '';

  sendReciveService: SendRecieveService = inject(SendRecieveService);

  routerService: Router = inject(Router);

  sendData() {
    this.sendReciveService.setMessage(this.senderParam);
    this.routerService.navigate(['receiver']);
  }
}
