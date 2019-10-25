import { Component, OnInit } from '@angular/core';
// Import the CartService from the cart.service.ts file.
import { CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    // Inject the CartService to manage cart information.
    private cartService: CartService
  ) { }

  ngOnInit() {
    // Set the items using the cart service's getItems() method. (You defined this method when you generated cart.service.ts.)
    this.items = this.cartService.getItems()
  }

}