import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import {IonContent, ModalController} from '@ionic/angular';
import {CartService, Product} from '../../services/cart.service';
import {ModalViewItemComponent} from '../../tab2/food-container/modal-view-item/modal-view-item.component';
import {ScrollService} from '../../services/scroll.service';
import { AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-view-store-details',
  templateUrl: './view-store-details.component.html',
  styleUrls: ['./view-store-details.component.scss']
})
export class ViewStoreDetailsComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent,  {static: false, read: ElementRef}) contentArea: ElementRef;
  headerFixed  = false;
  @ViewChild('triggerElement', {read: ElementRef, static: true}) triggerElement: ElementRef;
  @ViewChild("header", { read:ElementRef, static: true }) header: ElementRef;

    tabs: Map<string, Tab> = new Map([
    ["tab1" , { active: false , ico: 'fast-food-outline' , name:'Sinh tố',  badge: 0 , tagName: 'SINHTO' , products: []}],
    ["tab2" , { active: false , ico: 'wine-outline' , name:'Nước ép',  badge: 0,  tagName: 'NUOCEP', products: [] }],
    ["tab3" , { active: false , ico: 'nutrition-outline' , name:'Trái cây dầm', badge: 0, tagName: 'TRAICAYDAM' , products: []}],
    ["tab"  , { active: true , ico: 'heart-circle-outline' , name:'Đặt nhiều',badge: 6,  tagName: 'DATNHIEU' , products: [] }]
   ]);
  private observer: IntersectionObserver;
  constructor(private animationCtrl: AnimationController, private scrollService: ScrollService,public modalController: ModalController, private render2: Renderer2, private cartService: CartService) { }
  ngOnDestroy(): void {
    this.observer.disconnect();
  }
  filterProduct(products: Product[],tabs: Map<string, Tab> ):  Map<string, Tab>  {
    const filterByTagsName = products.filter(p =>  p.categoryId === 'C01').reduce((pre, curr) => { pre[curr.tagName] = [curr, ...( pre[curr.tagName]|| [])] ;return pre;} ,  {});
      for (let value of tabs.values()) {
             value.products = (filterByTagsName[value.tagName] || []);
          } 
    tabs.get("tab").products = ([...products].sort((a, b) => b.priority -  a.priority).splice(0, Math.min(products.length, 10)));
    return tabs;
  }
  ngOnInit() {
     this.tabs =  this.filterProduct(this.cartService.getProducts(), this.tabs);

      // new code

      this.observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
         if(window.location.href.indexOf("/details/store") !== -1){
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
          }
        });
      });
      this.observer.observe(this.triggerElement.nativeElement);
  }
  

    scrollToCategory(tagName: string) {
      console.log(tagName);

        const element = document.querySelector('#' + tagName);
        if (!element) { return; }
        if (tagName === 'DATNHIEU') {
            this.scrollToId('eleTop');
            return;
        }
        this.scrollToId(tagName);
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
      for (let value of this.tabs.values()) { 
         value.active = false;
      }
      this.tabs.get(key).active = true;
      this.scrollToCategory(this.tabs.get(key).tagName);
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

interface Tab {
  active: boolean ;
  ico: string; 
  name: string;
  badge: number ;
  tagName: string ;
  products: Product[];
}