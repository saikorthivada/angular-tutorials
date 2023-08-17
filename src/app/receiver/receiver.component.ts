import { Component } from '@angular/core';
import { SendRecieveService } from '../send-recieve.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent {

  receivedMessage: string= '';

  constructor(private sendRecieveService: SendRecieveService){
    this.receivedMessage = this.sendRecieveService.getMessage();
  }
}
