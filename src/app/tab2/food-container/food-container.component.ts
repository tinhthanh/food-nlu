import { Component, OnInit } from '@angular/core';
import {CartService, Product} from 'src/app/services/cart.service';
import {AlertController, IonicSafeString, ModalController} from '@ionic/angular';
import {ModalViewItemComponent} from './modal-view-item/modal-view-item.component';

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
  constructor(private cartService: CartService, public alertController: AlertController, public modalController: ModalController) {

  }

  ngOnInit() {
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
    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            mode: 'ios',
            cssClass: 'food-modal-custom-class',
            header: 'Confirm!',
            message:  new IonicSafeString('<ion-button>{{tabs | json}}</ion-button>'),
            inputs: [
                {
                    name: 'test',
                    placeholder: 'Test name',
                    attributes: { maxlength: 6, id: 'test'}
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        console.log('Confirm Okay');
                    }
                }
            ]
        });

        await alert.present();
    }

}

