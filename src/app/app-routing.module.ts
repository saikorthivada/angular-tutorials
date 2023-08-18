import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sender',
    pathMatch: 'full'
  },
  {
    path: 'sender',
    component: SenderComponent
  },
  {
    path: 'receiver',
    component: ReceiverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
