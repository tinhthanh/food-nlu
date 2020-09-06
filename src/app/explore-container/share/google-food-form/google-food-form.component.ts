import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Product, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-google-food-form',
  templateUrl: './google-food-form.component.html',
  styleUrls: ['./google-food-form.component.scss'],
})
export class GoogleFoodFormComponent implements OnInit {
   firstName;
   lastName;

   cart: Product[] = [];
  constructor(private cartService: CartService,public alertController: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartService.itemCollection$.subscribe(cart => this.cart = cart);
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }


   processForm(event) {
    event.preventDefault();
    this.alertController.create({
      header: 'Account Created',
      message: `Created account for: <b>${this.firstName} ${this.lastName}</b>`,
      buttons: [{
        text: 'OK'
      }]
    }).then(alert => alert.present());
  }

   handleFirstNameValue(event) {
    this.firstName = event.target.value;
  }

   handleLastNameValue(event) {
   this.lastName = event.target.value;
  }

}
