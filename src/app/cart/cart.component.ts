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
  // For the checkout process, users need to be able to submit the form data (their name and address). When the order is submitted, the form should reset and the cart should clear.

  // In cart.component.ts, define an onSubmit() method to process the form. Use the CartService#clearCart() method to empty the cart items and reset the form after it is submitted. (In a real-world app, this method also would submit the data to an external server.)
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}