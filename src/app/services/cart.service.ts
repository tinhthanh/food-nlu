import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  img: string
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Sinh tố bơ', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg' },
    { id: 1, name: 'Sinh tố mãn cầu', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: 2, name: 'Sinh tố xoài', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: 3, name: 'Sinh tố saboche', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  }
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor() {}
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}