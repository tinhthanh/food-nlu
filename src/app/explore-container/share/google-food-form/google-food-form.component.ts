import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Product, CartService } from 'src/app/services/cart.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollService } from 'src/app/services/scroll.service';
@Component({
  selector: 'app-google-food-form',
  templateUrl: './google-food-form.component.html',
  styleUrls: ['./google-food-form.component.scss'],
})
export class GoogleFoodFormComponent implements OnInit {
   form: FormGroup;
   cart: Product[] = [];
  constructor(
    private scrollService: ScrollService,
    private formBuilder: FormBuilder,
    private cartService: CartService,public alertController: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartService.itemCollection$.subscribe(cart => this.cart = cart);


    // init form 
    this.form = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['',[Validators.required, Validators.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g)]],
      address: ['' , Validators.required],
      note: ['']
    });
  }


  decreaseCartItem(product: Product) {
    this.cartService.decreaseProduct(product.id);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product: Product) {
    this.cartService.removeProduct(product.id);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }


   processForm(event) {
    event.preventDefault();

    console.log(this.form);
    if (this.form.invalid) {
     if(this.form.controls.phone.status === 'INVALID') {
          this.notifyCreate("Thông tin không hợp lệ" ,  "Số điện thoại không hợp lệ");
            this.scrollToId("elePhone");
          return ;
     }

     if(this.form.controls.userName.status === 'INVALID') {
      this.notifyCreate("Thông tin không hợp lệ" ,  "Vui lòng điền tên");
        this.scrollToId("elePhone");
      return ;
     }

     if(this.form.controls.address.status === 'INVALID') {
      this.notifyCreate("Thông tin không hợp lệ" ,  "Vui lòng chọn địa chỉ");
        this.scrollToId("elePhone");
      return ;
     }
    
      return;
   }


    this.alertController.create({
      mode: 'ios',
      header: 'Cảm ơn bạn đã đặt hàng',
      message: `Chúng tôi sẽ giao hàng sớm nhất`,
      buttons: [{
        text: 'OK'
      }]
    }).then(alert => {alert.present();  this.cartService.clearCart();});
  }

  notifyCreate(header: string , massage: string) {
    
    this.alertController.create({
      mode: 'ios',
      header: header,
      message: massage,
      buttons: [{
        text: 'OK'
      }]
    }).then(alert => {alert.present();});
  }

  scrollToId(id: string) {
    console.log("element id : ", id);
    this.scrollService.scrollToElementById(id);
}


}
