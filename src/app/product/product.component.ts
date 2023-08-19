import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  notificationService: NotificationService = inject(NotificationService);

  routerService: Router= inject(Router);

  updateNotification() {
    this.notificationService.setMessage(`product - ${Math.random().toString()}`);
    this.routerService.navigate(['product', 1]);
  }
}
