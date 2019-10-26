import { Component, OnInit } from '@angular/core';
// Angular's FormBuilder service provides convenient methods for generating controls. As with the other services you've used, you need to import and inject the service before you can use it:
import { FormBuilder } from '@angular/forms';

// Import the CartService from the cart.service.ts file.
import { CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  // define the checkoutForm property to store the form model.
  checkoutForm;

  constructor(
    // Inject the CartService to manage cart information.
    private cartService: CartService,
    // Inject the FormBuilder service.
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    // Set the items using the cart service's getItems() method. (You defined this method when you generated cart.service.ts.)
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

}