import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
   cart = [];
   products = [];
   catItemCount: BehaviorSubject<number>;
  constructor(private cartService: CartService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.products = this.cartService.getProduct();
    this.cart = this.cartService.getCart();
    this.catItemCount = this.cartService.getCartItemCount();    
  }
   addToCart(product) {
     this.cartService.addProduct(product);
     
   } 
 async openCart() {
  let modal = await this.modalCtrl.create({
     component: CartModalPage,
     cssClass: 'cart-modal'
   });
   modal.present();
   }

}
