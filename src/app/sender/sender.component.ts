import { Component, inject } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  navigationService: NavigationService = inject(NavigationService);

  public navigateFromSender() : void {
    this.navigationService.navigateToReciever();
  }
}
