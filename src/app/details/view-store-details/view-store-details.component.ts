import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import {IonContent, ModalController} from '@ionic/angular';
import {CartService, Product} from '../../services/cart.service';
import {ModalViewItemComponent} from '../../tab2/food-container/modal-view-item/modal-view-item.component';
import {ScrollService} from '../../services/scroll.service';
import { AnimationController } from '@ionic/angular';
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
  @ViewChild("header", { read:ElementRef, static: true }) header: ElementRef;

    tabs = {
    tab1:{ active: true , ico: 'fast-food-outline' , name:'Sinh tố',  badge: 0 }
  , tab2: { active: false , ico: 'wine-outline' , name:'Nước ép',  badge: 0 }
  , tab3: { active: false , ico: 'nutrition-outline' , name:'Trái cây dầm', badge: 0 },
   tab4: { active: false , ico: 'heart-circle-outline' , name:'Đặt nhiều',badge: 6 }};
   objectKeys = Object.keys;
  private observer: IntersectionObserver;
  constructor(private animationCtrl: AnimationController, private scrollService: ScrollService,public modalController: ModalController, private render2: Renderer2, private cartService: CartService) { }

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
               this.animatedHeader();
           }
        });
      });
      this.observer.observe(this.triggerElement.nativeElement);
  }

    scrollToCategory(categoryId: number | string) {

        const element = document.querySelector('#ele' + categoryId);
        if (!element) { return; }
        if (categoryId === 'tab1') {
            this.scrollToId('eleTop');
            return;
        }
        this.scrollToId('ele' + categoryId);
    }
    scrollToId(id: string) {
        console.log("element id : ", id);
        this.scrollService.scrollToElementById(id);
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
    selectedTab(key: string){
      console.log(key);
      Object.keys(this.tabs).forEach( k => {
        this.tabs[k].active = false;
      });
      this.tabs[key].active = true;
      this.scrollToCategory(key);
    }

    animatedHeader() {
        const animateHeader = this.animationCtrl.create()
            .addElement(this.header.nativeElement)
            .duration(1000)
            .iterations(1)
            .fromTo('opacity', '0', '1')
            .fromTo('transform', 'translateY(-100px)', 'translateY(0px)');
        animateHeader.play();
    }
}
