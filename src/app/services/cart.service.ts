import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 export interface Product {
      id: number,
      name: string,
      price: number,
      amount: number
 }

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Pizza Salami 1', price: 8.99, amount: 1},
    { id: 1, name: 'Pizza Salami 2', price: 8.99, amount: 1},
    { id: 2, name: 'Pizza Salami 3', price: 8.99, amount: 1},
    { id: 3, name: 'Pizza Salami 4', price: 8.99, amount: 1}
  ];
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  constructor() { }
  getProduct(){
    return this.data;
  }
  getCart() {
    return this.cart;
  }
   getCartItemCount(): BehaviorSubject<number> {
     return this.cartItemCount; 
   }
   addProduct(product) {
    let added = false;
    for( let p  of this.cart) {
      if(p.id === product.id) {
         p.amount += 1;
         added = true;
         break;
      }
    }
    if(!added) {
      this.cart.push(product);
    }
   this.cartItemCount.next(this.cartItemCount.value + 1 );

   }
   decreaseProduct(product){
      for( let [index, p] of this.cart.entries()) {
        if(p.id === product.id) {
           p.amount -= 1;
           if(p.amount == 0 ) {
             this.cart.slice(index, 1);
           }
        } 
      }
      this.cartItemCount.next(this.cartItemCount.value - 1) ;
   }
    removeProduct(product) {
      for(let [index, p] of this.cart.entries()) {
        if(p.id === product.id) {
          this.cartItemCount.next(this.cartItemCount.value -  p.amount)
          this.cart.slice(index, 1);
        }
      }
      
    }

}
