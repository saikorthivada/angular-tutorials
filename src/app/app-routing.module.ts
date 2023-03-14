import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'login',
    // component: LoginComponent
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'register',
    // component: RegisterComponent
    loadChildren: () => import('./register/register.module').then(module => module.RegisterModule)
  },
  {
    path: 'dashboard',
    // component: DashboardComponent
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: '**',
    // component: NotfoundComponent
    loadChildren: () => import('./notfound/notfound.module').then(module => module.NotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
