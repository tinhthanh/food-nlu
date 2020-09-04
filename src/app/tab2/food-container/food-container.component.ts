import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.page.html',
  styleUrls: ['./food-container.page.scss'],
})
export class FoodContainerComponent implements OnInit {


  tabs = [
    {
      active: true,
      name: 'Sinh tố',
      icon: 'tag'
    },
    {
      active: false,
      name: 'Nước ép',
      icon: 'tag'
    },
    {
      active: false,
      name: 'Trái cây',
      icon: 'tag'
    }
  ];
  products = [];
  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }
  addToCart(product) {
    this.cartService.addProduct(product);
  }

}

