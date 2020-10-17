import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ModalController, IonContent } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, AfterViewInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  @ViewChild(IonContent,  {static: false, read: ElementRef}) contentArea: ElementRef;
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  headerFixed  = false;
  @ViewChild("triggerElement", {read: ElementRef, static: true}) triggerElement: ElementRef;  
  private observer: IntersectionObserver;
  constructor(private router: Router,private render2: Renderer2, private cartService: CartService, private modalCtrl: ModalController) {}
  ngAfterViewInit(): void {
    console.log(this.triggerElement);
  
  }
 
  ngOnInit() {
    
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

  // new code 
  
    this.observer = new IntersectionObserver( entries => {
      entries.forEach( entry => {
         if(entry.isIntersecting) {
            console.log(" add transform");
            this.headerFixed = false;
            this.render2.removeClass(this.contentArea.nativeElement, "no-transform");
         } else {
            console.log("remove transform");
            this.headerFixed = true;
             this.render2.addClass(this.contentArea.nativeElement, "no-transform");
         }
      });
    });
    this.observer.observe(this.triggerElement.nativeElement);
   
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('tada');
  }
 
  async openCart() {
    this.animateCSS('bounceOutLeft', true);
 
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }
 
  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)
    
    //https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }

  // new fure
  handleScroll(ev) {
    console.log(ev);
  }
  
  public viewStoreDetails(ev) {
    this.router.navigate([`/details/store`]);
  }
}
