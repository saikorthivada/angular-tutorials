import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guard Services
import { CanActivateService } from './shared/services/guard-services/can-activate.service';
import { CanLoadService } from './shared/services/guard-services/can-load.service';
import { CanActivateChildService } from './shared/services/guard-services/can-activate-child.service';

// Layout components
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { CustomPreloaderService } from './shared/services/common/preloaders/custom-preloader.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // add the paths which can be used before login
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./views/auth-views/login/login.module').then(m => m.LoginModule)
      },
      {
        path: '404',
        loadChildren: () => import('./views/auth-views/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('./views/auth-views/registration/registration.module').then(m => m.RegistrationModule),
        data: {
          preload: true // use when you dont want lazy loading for a particular module
        }
      }
    ]
  },
  // add the paths which can be used post login
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [CanActivateService],
    canActivateChild: [ CanActivateChildService ], // Use when we want to make a disission to load sub modules or not
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/admin-views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [CanLoadService] // Use when we want to make a disission to load sub modules or not
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
