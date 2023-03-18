import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Milk'
    },
    {
      id: 2,
      name: 'Choclates'
    },
    {
      id: 3,
      name: 'Curd'
    }
  ];

  constructor(private router: Router) {

  }

  navigateToProductById(id: number) {
    this.router.navigate(['products', id])
  }
}
