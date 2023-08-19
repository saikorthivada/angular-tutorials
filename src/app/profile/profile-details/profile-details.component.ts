import { Component, inject } from '@angular/core';
import { NotificationService } from 'src/app/product/notification.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent {
  notificationService: NotificationService = inject(NotificationService);

  profileMessage = this.notificationService.getMessage();
}
