import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import {IonContent, ModalController} from '@ionic/angular';
import {CartService, Product} from '../../services/cart.service';
import {ModalViewItemComponent} from '../../tab2/food-container/modal-view-item/modal-view-item.component';
@Component({
  selector: 'app-view-store-details',
  templateUrl: './view-store-details.component.html',
  styleUrls: ['./view-store-details.component.scss'],
})
export class ViewStoreDetailsComponent implements OnInit {
  @ViewChild(IonContent,  {static: false, read: ElementRef}) contentArea: ElementRef;
  headerFixed  = false;
    products = [];
  @ViewChild('triggerElement', {read: ElementRef, static: true}) triggerElement: ElementRef;
  private observer: IntersectionObserver;
  constructor(public modalController: ModalController, private render2: Renderer2, private cartService: CartService) { }

  ngOnInit() {
      this.products = this.cartService.getProducts();

      // new code

      this.observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
           if(entry.isIntersecting) {
              console.log(" add transform");
              this.render2.removeClass(this.contentArea.nativeElement, "no-transform");
              this.headerFixed = false;
           } else {
              console.log("remove transform");
               this.render2.addClass(this.contentArea.nativeElement, "no-transform");
               this.headerFixed = true;
           }
        });
      });
      this.observer.observe(this.triggerElement.nativeElement);
  }

    scrollToCategory(categoryId: number | string) {
        const element = document.querySelector('#ele' + categoryId);
        if (!element) { return; }
        element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
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
            if ( data.product.amount  === 0 ) {
                this.cartService.removeProduct(p.id);
            } else {
                console.log(p.amount)
                console.log(data.product.amount)
                this.cartService.changeAmount(p , data.product.amount );
            }

        }
    }
}
