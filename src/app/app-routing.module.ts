import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard } from './common/guard/admin-auth.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./views/auth-views/login/login.module').then((m) => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./views/auth-views/register/register.module').then((m) => m.RegisterModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivateChild: [adminAuthGuard],
    children: [
      {
        path: 'notes',
        loadChildren: () => import('./views/admin-views/notes/notes.module').then((m) => m.NotesModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/admin-views/profile/profile.module').then((m) => m.ProfileModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./views/admin-views/reset-password/reset-password.module').then((m) => m.ResetPasswordModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/admin-views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./views/common-views/not-found/not-found.module').then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
