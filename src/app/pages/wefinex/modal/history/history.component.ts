import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { WefinexTotalAmountService, Profit } from 'src/app/services/wefinex-total-amount.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  @Input() product: Product;
  profits: Profit[] = [];
  Number = Number;
  constructor(private modalCtrl: ModalController,
              private wefinexTotalAmountService: WefinexTotalAmountService) { }

  ngOnInit() {
    this.wefinexTotalAmountService.getAll().subscribe( z =>  {
      this.profits  = z;
      console.log(z);
     });
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
   info() {
    // tslint:disable-next-line:max-line-length
    alert('Số lần thua liên tiếp bạn có thể follow, vd: 1-2-4-8-16 = 5 mặc định cài đặt của hệ thống là 5 chúng tôi không khuyến nghị thay đổi. Liện hệ 098 177 3084 để được hỗ trợ');
  }
  mailInfo() {
     // tslint:disable-next-line:max-line-length
    alert('Vui lòng nhập chính xác email bạn đã đăng ký tài khoản ở trang wefinex.net Liện hệ 098 177 3084 để được hỗ trợ');

  }
  emailChange(ev: any) {
    this.product.email = ev.target.value;
  }
  changeStatus(ev: any) {
    this.product.isFollow = !this.product.isFollow;
  }
  infOnline() {
      // tslint:disable-next-line:max-line-length
      alert(`Vui lòng cài đặt tools và treo tài khoản ${this.product.email} trên máy tính của bạn. Liện hệ 098 177 3084 để được hỗ trợ`);
  }
}
export interface Product {
  amount: number;
  email: string;
  isFollow: boolean;
}
