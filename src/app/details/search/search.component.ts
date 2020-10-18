import { Component, OnInit } from '@angular/core';
import { CartService, Product } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { ModalViewItemComponent } from 'src/app/tab2/food-container/modal-view-item/modal-view-item.component';
import { Observable , Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  private searchName = new Subject<string>();
  products = [];
  readonly searchName$ = this.searchName.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(keyWork => this.search(keyWork))
  );
  constructor(private cartService: CartService, public modalController: ModalController) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }
 public search(name: string):Observable<Product[]> {
   if(name.length > 1) {
    return of(this.products.filter( p => { return this.removeAccents(p.name.toUpperCase()).indexOf(this.removeAccents(name.toUpperCase())) != -1; })) ;
   } {
     return of([]);
   }
 }
 searchByName(searchName) {
  
  this.searchName.next(searchName);
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
    removeAccents(str): string {
      const AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"    
      ];
      for (let i=0; i<AccentsMap.length; i++) {
        let  re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        let char = AccentsMap[i][0];
        str = str.replace(re, char);
      }
      return str;
    }
}


 