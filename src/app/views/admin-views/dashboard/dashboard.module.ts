import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/app/common/modules/material/material.module';
import { PreDefinedModule } from 'src/app/common/modules/pre-defined/pre-defined.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    PreDefinedModule
  ]
})
export class DashboardModule { }
