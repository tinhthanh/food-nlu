import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
 
export interface Product {
  id: string;
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
    { id: "0", name: 'Sinh tố bơ', price: 20000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg' },
    { id: "1", name: 'Sinh tố bơ dưa gang', price: 18000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "2", name: 'Sinh tố bơ dừa', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "3", name: 'Sinh tố SAPÔCHÊ', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "4", name: 'Sinh tố mãng cầu', price: 18000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "5", name: 'Sinh tố đu đủ', price: 12000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "6", name: 'Sinh tố dâu', price: 20000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "7", name: 'Sinh tố dâu yaourt', price: 25000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "8", name: 'Sinh tố dâu mãng cầu', price: 18000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "9", name: 'Sinh tố dâu dừa', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "10", name: 'Sinh tố mít', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "11", name: 'Sinh tố dưa gang', price: 12000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "12", name: 'Sinh tố cà rốt', price: 12000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "13", name: 'Sinh tố cà chua', price: 12000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "14", name: 'Sinh tố cam', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "15", name: 'Sinh tố chanh dây', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "16", name: 'Sinh tố dừa', price: 15000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  },
    { id: "17", name: 'Sinh tố dưa hấu', price: 12000.00, amount: 0, img: 'assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg'  }
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  private stateSubject: BehaviorSubject<any> =
  new BehaviorSubject(this.cart);
  itemCollection$: Observable<any> = this.stateSubject.asObservable();
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
  changeAmount (product, amount) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
         this.cartItemCount.next(this.cartItemCount.value - p.amount   + amount);
        p.amount =  amount;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = amount;
      this.cart.push(product);
      this.cartItemCount.next(this.cartItemCount.value + amount);
    }
    this.stateSubject.next(this.cart);

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
    this.stateSubject.next(this.cart);
  }
 
  decreaseProduct(productId: string) {
    for (let index = 0  ; index < this.cart.length ; index++ ) {
      const p =  this.cart[index];
      if (p.id === productId) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
    this.stateSubject.next(this.cart);
  }
  clearCart() {
    this.cart = [];
    this.cartItemCount.next(0);
    this.stateSubject.next(this.cart);
    for(let i  =  0  ; i < this.data.length ; i++) {
      this.data[i].amount = 0;
    }

  }
 
  removeProduct(productId: string) {
    for (let index = 0  ; index < this.cart.length ; index++ ) {
       const p =  this.cart[index];
      if (p.id === productId) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
    for (let  p of this.data) {
      if (p.id === productId) {
         p.amount = 0;
      }
    }
    this.stateSubject.next(this.cart);
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
}