import { Component, OnInit } from '@angular/core';
// Import ActivatedRoute from the @angular/router package, and the products array from ../products.
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // 2. Define the product property and inject the ActivatedRoute into the constructor.
  product;
  constructor(private route: ActivatedRoute) { }

  // 3. In the ngOnInit() method, subscribe to route params and fetch the product based on the productId.
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}