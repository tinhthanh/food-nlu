(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"k+ul":function(t,n,e){"use strict";e.r(n),e.d(n,"Tab3PageModule",(function(){return h}));var i=e("TEn/"),o=e("tyNb"),c=e("ofXK"),r=e("3Pt+"),a=e("mrSG"),s=e("fXoL"),l=e("c14U");function b(t,n){if(1&t){const t=s.Rb();s.Qb(0,"ion-item",10),s.Qb(1,"ion-grid"),s.Qb(2,"ion-row",11),s.Qb(3,"ion-col",12),s.Qb(4,"ion-button",13),s.Yb("click",(function(){s.kc(t);const e=n.$implicit;return s.ac().decreaseCartItem(e)})),s.Mb(5,"ion-icon",14),s.Pb(),s.Pb(),s.Qb(6,"ion-col",15),s.Qb(7,"ion-button",16),s.rc(8),s.Pb(),s.Pb(),s.Qb(9,"ion-col",12),s.Qb(10,"ion-button",13),s.Yb("click",(function(){s.kc(t);const e=n.$implicit;return s.ac().increaseCartItem(e)})),s.Mb(11,"ion-icon",17),s.Pb(),s.Pb(),s.Qb(12,"ion-col",18),s.Qb(13,"ion-button",13),s.Yb("click",(function(){s.kc(t);const e=n.$implicit;return s.ac().removeCartItem(e)})),s.Mb(14,"ion-icon",19),s.Pb(),s.Pb(),s.Pb(),s.Qb(15,"ion-row"),s.Qb(16,"ion-col",20),s.Qb(17,"b"),s.rc(18),s.Pb(),s.Pb(),s.Qb(19,"ion-col",21),s.rc(20),s.bc(21,"currency"),s.Pb(),s.Pb(),s.Pb(),s.Pb()}if(2&t){const t=n.$implicit;s.Bb(8),s.tc(" ",t.amount," "),s.Bb(10),s.sc(t.name),s.Bb(2),s.tc(" ",s.dc(21,3,t.amount*t.price,"VND")," ")}}let d=(()=>{class t{constructor(t,n,e){this.cartService=t,this.modalCtrl=n,this.alertCtrl=e,this.cart=[]}ngOnInit(){this.cart=this.cartService.getCart()}decreaseCartItem(t){this.cartService.decreaseProduct(t.id)}increaseCartItem(t){this.cartService.addProduct(t)}removeCartItem(t){this.cartService.removeProduct(t)}getTotal(){return this.cart.reduce((t,n)=>t+n.price*n.amount,0)}close(){this.modalCtrl.dismiss()}checkout(){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:"Thanks for your Order!",message:"We will deliver your food as soon as possible",buttons:["OK"]})).present().then(()=>{this.modalCtrl.dismiss()})}))}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(l.a),s.Lb(i.P),s.Lb(i.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-cart-modal"]],decls:19,vars:5,consts:[["fullscreen",""],[2,"height","100%","display","flex","flex-direction","column"],[1,"ion-text-end"],["fill","clear","color","dark",3,"click"],["name","close","slot","start"],[2,"border-top","1px solid #d1caca85","flex","1","overflow","auto"],["class","ion-text-wrap",4,"ngFor","ngForOf"],["size","9"],["size","3",1,"ion-text-end"],["expand","full",3,"click"],[1,"ion-text-wrap"],[1,"ion-align-items-center"],["size","2",1,"ion-align-self-center"],["color","medium","fill","clear",3,"click"],["name","remove-circle","slot","icon-only"],["size","1",1,"ion-align-self-center"],["color","medium","fill","clear"],["name","add-circle","slot","icon-only"],["size","2","offset","5"],["name","close-circle","slot","icon-only"],["size","7"],["size","5",1,"ion-text-end"]],template:function(t,n){1&t&&(s.Qb(0,"ion-content",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.Qb(3,"ion-button",3),s.Yb("click",(function(){return n.close()})),s.Mb(4,"ion-icon",4),s.Pb(),s.Pb(),s.Qb(5,"div",5),s.Qb(6,"ion-list"),s.pc(7,b,22,6,"ion-item",6),s.Qb(8,"ion-item"),s.Qb(9,"ion-grid"),s.Qb(10,"ion-row"),s.Qb(11,"ion-col",7),s.rc(12," T\u1ed5ng ti\u1ec1n: "),s.Pb(),s.Qb(13,"ion-col",8),s.rc(14),s.bc(15,"currency"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(16,"div"),s.Qb(17,"ion-button",9),s.Yb("click",(function(){return n.checkout()})),s.rc(18," \u0110\u1eb7t M\xf3n "),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.Bb(7),s.gc("ngForOf",n.cart),s.Bb(7),s.tc(" ",s.dc(15,2,n.getTotal(),"VND")," "))},directives:[i.o,i.g,i.u,i.z,c.j,i.x,i.s,i.B,i.n],pipes:[c.d],styles:[".container-cart[_ngcontent-%COMP%]{border:1px solid red;width:500px;height:200px;overflow-y:auto}.container-cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column}.container-cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]{padding:8px}.container-cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]   .quality-item-row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.container-cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]   .quality-item-row[_ngcontent-%COMP%]   .count-quality[_ngcontent-%COMP%], .container-cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]   .quality-item-row[_ngcontent-%COMP%]   .total-quality[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center}.container-cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-delete[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;right:10px;position:absolute;width:100%;height:100%}.container-cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-delete[_ngcontent-%COMP%]   .cart-delete-icon[_ngcontent-%COMP%], .l[_ngcontent-%COMP%]{border:1px solid red}"]}),t})();const u=["cart"];function m(t,n){if(1&t){const t=s.Rb();s.Qb(0,"ion-card"),s.Qb(1,"ion-card-header"),s.Qb(2,"ion-card-title"),s.rc(3),s.Pb(),s.Pb(),s.Qb(4,"ion-card-content"),s.Qb(5,"ion-row",7),s.Qb(6,"ion-col",8),s.Qb(7,"ion-label",9),s.Qb(8,"b"),s.rc(9),s.bc(10,"currency"),s.Pb(),s.Pb(),s.Pb(),s.Qb(11,"ion-col",10),s.Qb(12,"ion-button",11),s.Yb("click",(function(){s.kc(t);const e=n.$implicit;return s.ac().addToCart(e)})),s.Mb(13,"ion-icon",12),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()}if(2&t){const t=n.$implicit;s.Bb(3),s.tc(" ",t.name,""),s.Bb(6),s.sc(s.dc(10,2,t.price,"VND"))}}let P=(()=>{class t{constructor(t,n){this.cartService=t,this.modalCtrl=n,this.cart=[],this.products=[]}ngOnInit(){this.products=this.cartService.getProducts(),this.cart=this.cartService.getCart(),this.cartItemCount=this.cartService.getCartItemCount()}addToCart(t){this.cartService.addProduct(t),this.animateCSS("tada")}openCart(){return Object(a.a)(this,void 0,void 0,(function*(){this.animateCSS("bounceOutLeft",!0);let t=yield this.modalCtrl.create({component:d,cssClass:"cart-modal"});t.onWillDismiss().then(()=>{this.fab.nativeElement.classList.remove("animated","bounceOutLeft"),this.animateCSS("bounceInLeft")}),t.present()}))}animateCSS(t,n=!1){const e=this.fab.nativeElement;e.classList.add("animated",t),e.addEventListener("animationend",(function i(){n||e.classList.remove("animated",t),e.removeEventListener("animationend",i)}))}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(l.a),s.Lb(i.P))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-tab3"]],viewQuery:function(t,n){var e;1&t&&s.wc(u,!0,s.l),2&t&&s.ic(e=s.Zb())&&(n.fab=e.first)},decls:14,vars:4,consts:[["color","primary"],["vertical","top","horizontal","end","slot","fixed"],[3,"click"],["cart",""],[1,"cart-length"],["name","cart",1,"cart-icon"],[4,"ngFor","ngForOf"],[1,"ion-align-items-center","animated","zoomIn"],["size","8"],["color","secondary"],["size","4",1,"ion-text-right"],["fill","clear",3,"click"],["name","add"]],template:function(t,n){1&t&&(s.Qb(0,"ion-header"),s.Qb(1,"ion-toolbar",0),s.Qb(2,"ion-title"),s.rc(3," Ionic Shopping "),s.Pb(),s.Pb(),s.Pb(),s.Qb(4,"ion-content"),s.Qb(5,"ion-fab",1),s.Qb(6,"ion-fab-button",2,3),s.Yb("click",(function(){return n.openCart()})),s.Qb(8,"div",4),s.rc(9),s.bc(10,"async"),s.Pb(),s.Mb(11,"ion-icon",5),s.Pb(),s.Pb(),s.Qb(12,"ion-list"),s.pc(13,m,14,5,"ion-card",6),s.Pb(),s.Pb()),2&t&&(s.Bb(9),s.sc(s.cc(10,2,n.cartItemCount)),s.Bb(4),s.gc("ngForOf",n.products))},directives:[i.t,i.M,i.L,i.o,i.q,i.r,i.u,i.z,c.j,i.i,i.k,i.m,i.j,i.B,i.n,i.y,i.g],pipes:[c.b,c.d],styles:["ion-fab-button[_ngcontent-%COMP%]{height:70px;width:70px}.cart-icon[_ngcontent-%COMP%]{font-size:50px}.cart-length[_ngcontent-%COMP%]{color:var(--ion-color-primary);position:absolute;top:24px;left:25px;font-weight:600;font-size:1em;min-width:25px;z-index:10}"]}),t})();var f=e("qtYk");const p=[{path:"",component:P}];let g=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(n){return new(n||t)},imports:[[o.k.forChild(p)],o.k]}),t})(),h=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(n){return new(n||t)},imports:[[i.N,c.c,r.a,f.a,o.k.forChild([{path:"",component:P}]),g]]}),t})()}}]);