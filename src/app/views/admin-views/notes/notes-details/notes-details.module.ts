import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesDetailsRoutingModule } from './notes-details-routing.module';
import { NotesDetailsComponent } from './notes-details.component';
import { PreDefinedModule } from 'src/app/common/modules/pre-defined/pre-defined.module';
import { MaterialModule } from 'src/app/common/modules/material/material.module';


@NgModule({
  declarations: [
    NotesDetailsComponent
  ],
  imports: [
    CommonModule,
    NotesDetailsRoutingModule,
    PreDefinedModule,
    MaterialModule
  ]
})
export class NotesDetailsModule { }
