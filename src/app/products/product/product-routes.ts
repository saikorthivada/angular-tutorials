import { Routes } from "@angular/router";

export const ProductRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./product.component').then(c => c.ProductComponent)
  }
]
