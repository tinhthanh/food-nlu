(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{c14U:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var n=e("2Vo4"),o=e("fXoL");let r=(()=>{class t{constructor(){this.data=[{id:0,name:"Sinh t\u1ed1 b\u01a1",price:15e3,amount:0,img:"assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg"},{id:1,name:"Sinh t\u1ed1 m\xe3n c\u1ea7u",price:15e3,amount:0,img:"assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg"},{id:2,name:"Sinh t\u1ed1 xo\xe0i",price:15e3,amount:0,img:"assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg"},{id:3,name:"Sinh t\u1ed1 saboche",price:15e3,amount:0,img:"assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg"}],this.cart=[],this.cartItemCount=new n.a(0)}getProducts(){return this.data}getCart(){return this.cart}getCartItemCount(){return this.cartItemCount}addProduct(t){let a=!1;for(let e of this.cart)if(e.id===t.id){e.amount+=1,a=!0;break}a||(t.amount=1,this.cart.push(t)),this.cartItemCount.next(this.cartItemCount.value+1)}decreaseProduct(t){for(let[a,e]of this.cart.entries())e.id===t.id&&(e.amount-=1,0==e.amount&&this.cart.splice(a,1));this.cartItemCount.next(this.cartItemCount.value-1)}removeProduct(t){for(let[a,e]of this.cart.entries())e.id===t.id&&(this.cartItemCount.next(this.cartItemCount.value-e.amount),this.cart.splice(a,1))}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},hO9l:function(t,a,e){"use strict";e.r(a),e.d(a,"TabsPageModule",(function(){return l}));var n=e("TEn/"),o=e("ofXK"),r=e("3Pt+"),i=e("tyNb"),s=e("fXoL"),c=e("c14U");const u=[{path:"tabs",component:(()=>{class t{constructor(t){this.cartService=t,this.cartItemCount=this.cartService.getCartItemCount()}}return t.\u0275fac=function(a){return new(a||t)(s.Lb(c.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-tabs"]],decls:21,vars:3,consts:[["slot","bottom"],["tab","tab1"],["name","apps-outline"],["tab","tab2"],["name","restaurant-outline"],["tab","tab3"],["name","fast-food-outline"],["tab","cart"],["name","cart-outline"],["color","danger"]],template:function(t,a){1&t&&(s.Qb(0,"ion-tabs"),s.Qb(1,"ion-tab-bar",0),s.Qb(2,"ion-tab-button",1),s.Mb(3,"ion-icon",2),s.Qb(4,"ion-label"),s.sc(5,"Home"),s.Pb(),s.Pb(),s.Qb(6,"ion-tab-button",3),s.Mb(7,"ion-icon",4),s.Qb(8,"ion-label"),s.sc(9,"\u0110\u1ed3 \u0103n"),s.Pb(),s.Pb(),s.Qb(10,"ion-tab-button",5),s.Mb(11,"ion-icon",6),s.Qb(12,"ion-label"),s.sc(13,"\u0110\u1ed3 u\u1ed1ng"),s.Pb(),s.Pb(),s.Qb(14,"ion-tab-button",7),s.Mb(15,"ion-icon",8),s.Qb(16,"ion-label"),s.sc(17,"Cart"),s.Pb(),s.Qb(18,"ion-badge",9),s.sc(19),s.bc(20,"async"),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.Bb(19),s.tc(s.cc(20,1,a.cartItemCount)))},directives:[n.O,n.M,n.N,n.t,n.B,n.e],pipes:[o.b],styles:[""]}),t})(),children:[{path:"tab1",loadChildren:()=>Promise.all([e.e(0),e.e(13)]).then(e.bind(null,"tmrb")).then(t=>t.Tab1PageModule)},{path:"tab2",loadChildren:()=>e.e(10).then(e.bind(null,"TUkU")).then(t=>t.Tab2PageModule)},{path:"tab3",loadChildren:()=>Promise.all([e.e(0),e.e(14)]).then(e.bind(null,"k+ul")).then(t=>t.Tab3PageModule)},{path:"cart",loadChildren:()=>Promise.all([e.e(0),e.e(12)]).then(e.bind(null,"v35Q")).then(t=>t.CartPageModule)},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}];let b=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(a){return new(a||t)},imports:[[i.k.forChild(u)],i.k]}),t})(),l=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(a){return new(a||t)},imports:[[n.V,o.c,r.a,b]]}),t})()}}]);