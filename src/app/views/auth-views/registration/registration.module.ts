import { NgModule } from '@angular/core';
import { TitleCasePipe, CommonModule } from '@angular/common';


import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    RegistrationRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: [TitleCasePipe]
})

export class RegistrationModule { }
