import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { rolemanagerGuard } from './rolemanager.guard';

const routes: Routes = [
  {
    path: 'home',
    canMatch: [rolemanagerGuard],
    loadChildren: () => import('./admin-home/admin-home.module').then(m => m.AdminHomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./user-home/user-home.module').then(m => m.UserHomeModule)
  },
  {
    path: '**',
    component: ForgotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
