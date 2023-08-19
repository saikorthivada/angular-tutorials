import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { NotificationService } from '../product/notification.service';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers: [NotificationService]
})
export class ProfileModule { }
