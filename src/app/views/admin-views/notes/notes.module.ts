import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { MaterialModule } from 'src/app/common/modules/material/material.module';
import { PreDefinedModule } from 'src/app/common/modules/pre-defined/pre-defined.module';
import { ConfirmationComponent } from 'src/app/common/components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MaterialModule,
    PreDefinedModule,
    ConfirmationComponent
  ]
})
export class NotesModule { }
