import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { MaterialModule } from 'src/app/common/modules/material/material.module';
import { PreDefinedModule } from 'src/app/common/modules/pre-defined/pre-defined.module';


@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    MaterialModule,
    PreDefinedModule
  ]
})
export class ResetPasswordModule { }
