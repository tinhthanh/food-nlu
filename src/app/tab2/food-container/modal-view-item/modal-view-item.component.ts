import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Product} from '../../../services/cart.service';

@Component({
  selector: 'app-modal-view-item',
  templateUrl: './modal-view-item.component.html',
  styleUrls: ['./modal-view-item.component.scss'],
})
export class ModalViewItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {
    if ( this.product.amount === 0) {
      this.product.amount = 1;
     }
  }
  async  close() {
    await this.modalCtrl.dismiss();
  }
  async  dismiss() {
   await this.modalCtrl.dismiss({
     product: this.product
    });
  }
  decreaseCartItem() {
    if ( this.product.amount > 1) {
      this.product.amount--;
    }
  }
  increaseCartItem() {
    this.product.amount++;
  }
  async removeCartItem() {
    this.product.amount = 0;
    await this.dismiss();
  }
}
