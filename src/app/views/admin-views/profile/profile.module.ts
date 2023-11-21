import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from 'src/app/common/modules/material/material.module';
import { PreDefinedModule } from 'src/app/common/modules/pre-defined/pre-defined.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    PreDefinedModule
  ]
})
export class ProfileModule { }
