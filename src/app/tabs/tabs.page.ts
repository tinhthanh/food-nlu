import {Component, OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {CartService, Product} from '../services/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage  {
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService) {
    this.cartItemCount = this.cartService.getCartItemCount();
  }




}
