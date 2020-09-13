import {Component, OnInit} from '@angular/core';
import {CartService, Product} from '../services/cart.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit   {
  cartItemCount: BehaviorSubject<number>;
  cart: Product[] = [];
  constructor(private cartService: CartService) {
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
}
