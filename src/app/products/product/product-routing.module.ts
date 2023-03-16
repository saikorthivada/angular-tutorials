import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
    // products/someid
  },
  {
    path: 'details',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
