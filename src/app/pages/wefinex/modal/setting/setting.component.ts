import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { first, take, takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserFirebase, UserFirebaseService } from 'src/app/services/user-firebase.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  user: UserFirebase ;
  private ngUnsubscribe = new Subject();
  constructor(private userFirebaseService: UserFirebaseService , private modalCtrl: ModalController,   public auth: AuthService) { }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}
  ngOnInit() {
    this.userFirebaseService.get(this.product.uid).pipe(take(1) , takeUntil(this.ngUnsubscribe)).subscribe( z => {
      if ( !this.user) {
          z.online = false;
          this.userFirebaseService.update(z);
          this.userFirebaseService.get(this.product.uid).pipe( takeUntil(this.ngUnsubscribe)).subscribe( k => {
            this.user = k;
          });
      }
    });
  }
 
  async  close() {
    await this.modalCtrl.dismiss();
  }
  async  dismiss() {
   await this.modalCtrl.dismiss({
     product: this.product
    });
   this.user.auto = this.product.isFollow ;
   this.user.doubly = this.product.amount;
   this.user.followByCommand = this.product.followByCommand;
   this.userFirebaseService.update(this.user);
   if(this.user.system) {
     console.log("admin");
     this.userFirebaseService.getListByCondition((ref) => ref.where('group', '==', 'A')).pipe(first(),takeUntil(this.ngUnsubscribe)).subscribe(z => {
       z.forEach(u => {
         u.auto = this.product.isFollow ;
         this.userFirebaseService.update(u);
         console.log(u);
       });
     });
   }
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
      alert(`Vui lòng cài đặt tools và treo tài khoản ${this.product.email} trên trang wefinex.net bằng trình duyệt. Liện hệ 098 177 3084 để được hỗ trợ`);
  }
  followByCommand() {
     // tslint:disable-next-line:max-line-length
     alert(`Hãy chắc chắn rằng bạn đang thay đổi đúng giá trị. Liện hệ 098 177 3084 để được hỗ trợ`);

  }
  changeFollowByCommand(ev: any) {
    this.product.followByCommand = ev.target.value;
  }
}
export interface Product {
  amount: number;
  email: string;
  isFollow: boolean;
  followByCommand: string;
  uid: string;
}
