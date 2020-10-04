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

  decreaseCartItem(product: Product) {
    this.cartService.decreaseProduct(product.id);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product: Product) {
    this.cartService.removeProduct(product.id);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }


   processForm(event) {
    event.preventDefault();
    this.alertController.create({
      mode: 'ios',
      header: 'Cảm ơn bạn đã đặt hàng',
      message: `Chúng tôi sẽ giao hàng sớm nhất`,
      buttons: [{
        text: 'OK'
      }]
    }).then(alert => {alert.present();  this.cartService.clearCart();});
  }

   handleFirstNameValue(event) {
    this.firstName = event.target.value;
  }

   handleLastNameValue(event) {
   this.lastName = event.target.value;
  }

}
