import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  id: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    this.id = this.activatedRoute.snapshot.params.id;
  }

  navigateToDetailsPage() {
    this.router.navigate(['products', this.id, 'details']);
  }

}
