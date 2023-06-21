import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildActivateClassGuard } from './child-activate-class.guard';
import { childActivateGuard } from './child-activate.guard';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./views/auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./views/auth/register/register.module').then(m => m.RegisterModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivateChild: [childActivateGuard],
    canActivateChild: [ChildActivateClassGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/admin/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/admin/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
