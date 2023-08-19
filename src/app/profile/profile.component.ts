import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../product/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  notificationService: NotificationService = inject(NotificationService);

  routerService: Router = inject(Router);

  profileNotification() {
    this.notificationService.setMessage(`profile - ${Math.random().toString()}`);
    this.routerService.navigate(['profile', 1]);
  }
}
