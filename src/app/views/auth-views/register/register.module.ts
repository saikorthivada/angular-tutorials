import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { PreDefinedModule } from 'src/app/common/modules/pre-defined/pre-defined.module';
import { MaterialModule } from 'src/app/common/modules/material/material.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    PreDefinedModule,
    MaterialModule
  ]
})
export class RegisterModule { }
