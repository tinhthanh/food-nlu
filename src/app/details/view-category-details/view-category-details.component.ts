import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService, Product } from 'src/app/services/cart.service';
import { Category, CategoryService } from 'src/app/services/category.service';
import { ModalViewItemComponent } from 'src/app/tab2/food-container/modal-view-item/modal-view-item.component';
const   MAX_HEADER = 200;  
@Component({
  selector: 'app-view-category-details',
  templateUrl: './view-category-details.component.html',
  styleUrls: ['./view-category-details.component.scss'],
})
export class ViewCategoryDetailsComponent implements OnInit {
  cartItemCount: BehaviorSubject<number>;
  category: Category;
  products = [];

  paddingHeader = MAX_HEADER ;
  scrollTop  = 0;
  constructor(public modalController: ModalController,private cartService: CartService,private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { 
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  ngOnInit() {
  this.category  = this.categoryService.findOne(this.route.snapshot.paramMap.get("id"));

  this.products = this.cartService.getProducts();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  async presentModal(p: Product) {
    const modal = await this.modalController.create({
        component: ModalViewItemComponent,
        cssClass: 'food-modal-custom-class',
        componentProps: {
            product: {...p}
        }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if ( data && typeof data === 'object'){
      if( data.product.amount  === 0 ) {
        this.cartService.removeProduct(p.id);
      } else {
        console.log(p.amount)
          console.log(data.product.amount)
        this.cartService.changeAmount(p ,data.product.amount );
      }
        
   }
}
getTotal() {
  return this.cartService.getTotal();
}


navigate(){
  this.router.navigate(['/tabs/cart'])
}
logScrollStart() {

}
logScrollEnd(){

}
logScrolling(ev: any) {
  this.scrollTop = ev.detail.scrollTop ; 
  if(this.scrollTop == 0) {
    this.paddingHeader = MAX_HEADER;
  }
  if(this.scrollTop > 55) {
    this.paddingHeader = 0;
  }
}

}
