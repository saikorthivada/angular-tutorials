import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  },
  {
    path: 'product',
    loadChildren:
    () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'profile',
    loadChildren:
    () => import('./profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
