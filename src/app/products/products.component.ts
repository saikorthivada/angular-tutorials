import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
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
      name: 'Biscuits'
    },
    {
      id: 3,
      name: 'Curd'
    }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    console.log(this.activatedRoute.snapshot.data);
  }

  navigateToProduct(id: any) {
    this.router.navigate(['products', id]);
  }
}
