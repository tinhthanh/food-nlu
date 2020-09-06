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
  amount = 1;
  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss();
  }
  decreaseCartItem(p) {
    if ( this.amount > 0) {
      this.amount--;
    }
  }
  increaseCartItem(p) {
   this.amount++;
  }
  removeCartItem(p) {
    this.modalCtrl.dismiss();
  }
}
