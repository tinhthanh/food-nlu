import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
 
export interface Product {
  id: string;
  priority: number;
  name: string;
  price: number;
  amount: number;
  img: string,
  categoryId: string,
  tagName: string
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: "0", priority: 5,name: 'Sinh tố bơ', price: 20000.00, amount: 0, img: 'assets/trai-cay/sinh-to/bo.jpg', categoryId: 'C01', tagName: 'SINHTO' },
    { id: "1",priority: 0, name: 'Sinh tố bơ dưa gang', price: 18000.00, amount: 0, img: 'assets/trai-cay/sinh-to/bo-dua-gang.jpg' ,  categoryId: 'C01', tagName: 'SINHTO'   },
    { id: "2",priority: 0, name: 'Sinh tố bơ dừa', price: 15000.00, amount: 0, img: 'assets/trai-cay/sinh-to/bo-dua.jpg' ,  categoryId: 'C01', tagName: 'SINHTO'  },
    { id: "3", priority: 1, name: 'Sinh tố SAPÔCHÊ', price: 15000.00, amount: 0, img: 'assets/trai-cay/sinh-to/sapoche.jpg', categoryId: 'C01', tagName: 'SINHTO'   },
    { id: "4", priority: 5,name: 'Sinh tố mãng cầu', price: 18000.00, amount: 0, img: 'assets/trai-cay/sinh-to/mang-cau.jpg', categoryId: 'C01', tagName: 'SINHTO'   },
    { id: "5",priority: 3, name: 'Sinh tố đu đủ', price: 12000.00, amount: 0, img: 'assets/trai-cay/sinh-to/du-du.jpg' , categoryId: 'C01', tagName: 'SINHTO'  },
    { id: "6",priority: 2, name: 'Sinh tố dâu', price: 20000.00, amount: 0, img: 'assets/trai-cay/sinh-to/dau.jpg', categoryId: 'C01', tagName: 'SINHTO'   },
    { id: "7",priority: 0, name: 'Sinh tố dâu yaourt', price: 25000.00, amount: 0, img: 'assets/trai-cay/sinh-to/dau-yaourt.jpg', categoryId: 'C01', tagName: 'SINHTO'   },
    { id: "8",priority: 0, name: 'Sinh tố dâu mãng cầu', price: 18000.00, amount: 0, img: 'assets/trai-cay/sinh-to/dau-mang-cau.jpg' , categoryId: 'C01', tagName: 'SINHTO'  },
    { id: "9",priority: 0, name: 'Sinh tố dâu dừa', price: 15000.00, amount: 0, img: 'assets/trai-cay/sinh-to/dau-dua.jpg' , categoryId: 'C01', tagName: 'SINHTO'  },
    { id: "10",priority: 2, name: 'Sinh tố mít', price: 15000.00, amount: 0, img: 'assets/trai-cay/sinh-to/mit.jpg' , categoryId: 'C01', tagName: 'SINHTO'  },
    { id: "11",priority: 5, name: 'Sinh tố dưa gang', price: 12000.00, amount: 0, img: 'assets/trai-cay/sinh-to/dua-gang.jpg', categoryId: 'C01', tagName: 'SINHTO'   },
    { id: "12",priority: 0, name: 'Sinh tố cà rốt', price: 12000.00, amount: 0, img: 'assets/trai-cay/sinh-to/ca-rot.jpg' , categoryId: 'C01', tagName: 'SINHTO'  },
    { id: "13", priority: 3,name: 'Sinh tố cà chua', price: 12000.00, amount: 0, img: 'assets/trai-cay/sinh-to/ca-chua.jpg', categoryId: 'C01', tagName: 'SINHTO'   },
    { id: "14",priority: 5, name: 'Sinh tố cam', price: 15000.00, amount: 0, img: 'assets/trai-cay/sinh-to/cam.jpg' , categoryId: 'C01', tagName: 'SINHTO'  },
    { id: "15",priority: 5, name: 'Sinh tố chanh dây', price: 15000.00, amount: 0, img: 'assets/trai-cay/sinh-to/chanh-day.jpg', categoryId: 'C01', tagName: 'SINHTO'   },
    { id: "16",priority: 5, name: 'Sinh tố dừa', price: 15000.00, amount: 0, img: 'assets/trai-cay/sinh-to/dua.jpg' , categoryId: 'C01', tagName: 'SINHTO'  },
    { id: "17", priority: 5,name: 'Sinh tố dưa hấu', price: 12000.00, amount: 0, img: 'assets/trai-cay/sinh-to/dua-hau.jpg' , categoryId: 'C01', tagName: 'SINHTO'  }
  ];
  
  fruit: Product[] = [
    { id: "18",priority: 3, name: 'Nước Ép Cà Rốt', price: 15000.00, amount: 0, img: 'assets/trai-cay/nuoc-ep/ca-rot.jpg', categoryId: 'C01', tagName: 'NUOCEP' },
    { id: "19",priority: 5, name: 'Nước Ép Cam', price: 15000.00, amount: 0, img: 'assets/trai-cay/nuoc-ep/cam.jpg', categoryId: 'C01', tagName: 'NUOCEP' },
    { id: "20",priority: 5, name: 'Nước Ép Dưa Hấu', price: 15000.00, amount: 0, img: 'assets/trai-cay/nuoc-ep/dua-hau.jpg', categoryId: 'C01', tagName: 'NUOCEP' },
    { id: "21",priority: 0, name: 'Nước Ép Ổi', price: 15000.00, amount: 0, img: 'assets/trai-cay/nuoc-ep/oi.jpg', categoryId: 'C01', tagName: 'NUOCEP' },
    { id: "22",priority: 0, name: 'Nước Ép Chanh Leo', price: 15000.00, amount: 0, img: 'assets/trai-cay/nuoc-ep/chanh-leo.jpg', categoryId: 'C01', tagName: 'NUOCEP' },
    { id: "23",priority: 0, name: 'Nước Ép Táo', price: 15000.00, amount: 0, img: 'assets/trai-cay/nuoc-ep/tao.jpg', categoryId: 'C01', tagName: 'NUOCEP' },
    { id: "24",priority: 0, name: 'Nước Ép Lê', price: 15000.00, amount: 0, img: 'assets/trai-cay/nuoc-ep/le.jpg', categoryId: 'C01', tagName: 'NUOCEP' },
    { id: "25",priority: 0, name: 'Nước Ép Thơm', price: 15000.00, amount: 0, img: 'assets/trai-cay/nuoc-ep/thom.jpg', categoryId: 'C01', tagName: 'NUOCEP' },
    { id: "26",priority: 2, name: 'Nước Ép Cà Chua', price: 15000.00, amount: 0, img: 'assets/trai-cay/nuoc-ep/ca-chua.jpg', categoryId: 'C01', tagName: 'NUOCEP' }
  ];

  fruitD: Product[] = [
    { id: "27",priority: 5, name: 'Trái cây dĩa', price: 15000.00, amount: 0, img: 'assets/trai-cay/trai-cay-dam/dia.jpg', categoryId: 'C01', tagName: 'TRAICAYDAM' },
    { id: "28", priority: 5,name: 'Trái cây tô', price: 15000.00, amount: 0, img: 'assets/trai-cay/trai-cay-dam/to.jpg', categoryId: 'C01', tagName: 'TRAICAYDAM' },
    { id: "39",priority: 3, name: 'Bơ dầm', price: 15000.00, amount: 0, img: 'assets/trai-cay/trai-cay-dam/bo.jpg', categoryId: 'C01', tagName: 'TRAICAYDAM' },
    { id: "30",priority: 3, name: 'Mãng cầu dầm', price: 15000.00, amount: 0, img: 'assets/trai-cay/trai-cay-dam/mang-cau.jpg', categoryId: 'C01', tagName: 'TRAICAYDAM' },
    { id: "31", priority: 4,name: 'Dưa gang dầm', price: 15000.00, amount: 0, img: 'assets/trai-cay/trai-cay-dam/dua-gang.jpg', categoryId: 'C01', tagName: 'TRAICAYDAM' },
    { id: "32", priority: 2,name: 'Đu đủ dầm', price: 15000.00, amount: 0, img: 'assets/trai-cay/trai-cay-dam/du-du.jpg', categoryId: 'C01', tagName: 'TRAICAYDAM' },
    { id: "33",priority: 0, name: 'Sapoche dầm', price: 15000.00, amount: 0, img: 'assets/trai-cay/trai-cay-dam/sapoche.jpg', categoryId: 'C01', tagName: 'TRAICAYDAM' },
    { id: "34",priority: 0, name: 'Thanh long dầm', price: 15000.00, amount: 0, img: 'assets/trai-cay/trai-cay-dam/thanh-long.jpg', categoryId: 'C01', tagName: 'TRAICAYDAM' }
  ];

  rice: Product[] = [
    { id: "35",priority: 5, name: 'Cơm Trứng chiên ', price: 15000.00, amount: 0, img: 'assets/food/DVC/com.jpg', categoryId: 'C02', tagName: 'COMTRANG' },
    { id: "36",priority: 5, name: 'Cơm Trứng chiên ốp la', price: 15000.00, amount: 0, img: 'assets/food/DVC/com.jpg', categoryId: 'C02', tagName: 'COMTRANG' },
    { id: "37", priority: 5,name: 'Cơm Trứng chiên thịt bằm', price: 17000.00, amount: 0, img: 'assets/food/DVC/com.jpg', categoryId: 'C02', tagName: 'COMTRANG' },
    { id: "38",priority: 3, name: 'Cơm Xúc xích + trứng chiên thịt bằm', price: 15000.00, amount: 0, img: 'assets/food/DVC/com.jpg', categoryId: 'C02', tagName: 'COMTRANG' },
    { id: "39",priority: 3, name: 'Cơm Cá rô chiên', price: 18000.00, amount: 0, img: 'assets/food/DVC/com.jpg', categoryId: 'C02', tagName: 'COMTRANG' },
    { id: "40", priority: 4,name: 'Cơm Cá bống kho tiêu', price: 20000.00, amount: 0, img: 'assets/food/DVC/com.jpg', categoryId: 'C02', tagName: 'COMTRANG' },
    { id: "41", priority: 2,name: 'Cơm Thịt xào cà pháo', price: 20000.00, amount: 0, img: 'assets/food/DVC/com.jpg', categoryId: 'C02', tagName: 'COMTRANG' },
    { id: "42",priority: 0, name: 'Cơm Gà chiên nước mắm', price: 15000.00, amount: 0, img: 'assets/food/DVC/com.jpg', categoryId: 'C02', tagName: 'COMTRANG' },
    { id: "43",priority: 0, name: 'Cơm Canh chua cá hú', price: 15000.00, amount: 0, img: 'assets/food/DVC/com.jpg', categoryId: 'C02', tagName: 'COMTRANG' },
    { id: "44",priority: 0, name: 'Cơm Mề gà xào nấm', price: 15000.00, amount: 0, img: 'assets/food/DVC/com.jpg', categoryId: 'C02', tagName: 'COMTRANG' }
  ];


  snack: Product[] = [
    { id: "45",priority: 5, name: 'Bánh Tráng trộn', price: 15000.00, amount: 0, img: 'assets/food/an-vat/trang-tron.jpg', categoryId: 'C03', tagName: 'BANHTRANG' },
    { id: "46",priority: 5, name: 'Bánh tráng nướng', price: 15000.00, amount: 0, img: 'assets/food/an-vat/trang-nuong.jpg', categoryId: 'C03', tagName: 'BANHTRANG' },
    { id: "47", priority: 5,name: 'Bánh mì mướng', price: 17000.00, amount: 0, img: 'assets/food/an-vat/mi-nuong.jpg', categoryId: 'C03', tagName: 'BANHMI' }
  ];
   
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  private stateSubject: BehaviorSubject<any> =
  new BehaviorSubject(this.cart);
  itemCollection$: Observable<any> = this.stateSubject.asObservable();
  constructor() {
   this.data = this.data.concat(this.fruit);
   this.data = this.data.concat(this.fruitD);
   this.data = this.data.concat(this.rice);
   this.data = this.data.concat(this.snack);
  }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
  changeAmount (product, amount) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
         this.cartItemCount.next(this.cartItemCount.value - p.amount   + amount);
        p.amount =  amount;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = amount;
      this.cart.push(product);
      this.cartItemCount.next(this.cartItemCount.value + amount);
    }
    this.stateSubject.next(this.cart);

  }
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    this.stateSubject.next(this.cart);
  }
 
  decreaseProduct(productId: string) {
    for (let index = 0  ; index < this.cart.length ; index++ ) {
      const p =  this.cart[index];
      if (p.id === productId) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
    this.stateSubject.next(this.cart);
  }
  clearCart() {
    this.cart = [];
    this.cartItemCount.next(0);
    this.stateSubject.next(this.cart);
    for(let i  =  0  ; i < this.data.length ; i++) {
      this.data[i].amount = 0;
    }

  }
 
  removeProduct(productId: string) {
    for (let index = 0  ; index < this.cart.length ; index++ ) {
       const p =  this.cart[index];
      if (p.id === productId) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
    for (let  p of this.data) {
      if (p.id === productId) {
         p.amount = 0;
      }
    }
    this.stateSubject.next(this.cart);
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
}