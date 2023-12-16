import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesDetailsComponent } from './notes-details.component';

const routes: Routes = [
  {
    path: '',
    component: NotesDetailsComponent
  },
  {
    path: ':id',
    component: NotesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesDetailsRoutingModule { }
