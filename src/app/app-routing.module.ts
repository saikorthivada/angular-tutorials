import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'login',
    // component: LoginComponent
    loadComponent: () => import('./login/login.component').then(component => component.LoginComponent)
  },
  {
    path: 'register',
    // component: RegisterComponent
    loadComponent: () => import('./register/register.component').then(component => component.RegisterComponent)
  },
  {
    path: 'dashboard',
    // component: DashboardComponent
    loadComponent: () => import('./dashboard/dashboard.component').then(component => component.DashboardComponent)
  },
  {
    path: '**',
    // component: NotfoundComponent
    loadComponent: () => import('./notfound/notfound.component').then(component => component.NotfoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
