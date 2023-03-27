import { Routes } from "@angular/router";

export const ProductsRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./products.component').then(c => c.ProductsComponent)
  },
  {
    path: ':id',
    loadChildren: () => import('./product/product-routes').then(m => m.ProductRoutes),
    data: {
      subchild: 'product',
      name: 'product'
    }
  }
]
