import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDeactivateGuardClassGuard } from './form-deactivate-guard-class.guard';
import { formDeactiveGuard } from './form-deactive.guard';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormComponent,
    // canDeactivate: [formDeactiveGuard]
    canDeactivate: [FormDeactivateGuardClassGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
