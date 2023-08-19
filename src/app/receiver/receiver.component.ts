import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SendRecieveService } from '../send-recieve.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent {

  receivedMessage: string= '';
  private sendRecieveService: SendRecieveService = new SendRecieveService();
  constructor(private router: Router){
    this.receivedMessage = this.sendRecieveService.getMessage();
  }
}
