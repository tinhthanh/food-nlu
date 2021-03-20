(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\" #header mode=\"ios\">\r\n  <ion-toolbar [ngClass]=\"{'transparent-toolbar':!headerFixed}\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button  [color]=\"!headerFixed? 'light' :'dark'\"  ></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button *ngIf=\"!headerFixed\" [color]=\"!headerFixed? 'light' :'dark'\">\r\n        <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button [color]=\"!headerFixed? 'light' :'dark'\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button [color]=\"!headerFixed? 'light' :'dark'\">\r\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal-outline\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-searchbar *ngIf=\"headerFixed\" class=\"search-bar-default\" placeholder=\"Nhập tên món..\"\r\n      searchIcon=\"search-outline\"></ion-searchbar>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  no-padding (ionScroll)=\"handleScroll($event)\" scroll-event=\"true\">\r\n   \r\n  <div [ngStyle]=\"{'border-radius.px' : headerFixed ? 0 : 30}\"  class=\"ion-padding content-container\">\r\n          \r\n    <app-card-smoothie  [index]=\"'2'\" (navigation)=\"viewStoreDetails($event)\" [category]=\"{id: 'C01' ,name:'Danh mục #Sinh tố' ,  title: 'Sinh tố Nông Lâm' , url : 'assets/smoothie/smoothie.png' , color: 'linear-gradient(90deg,#f7bf0c,#c2e59c)', customClass: 'leve1' }\" ></app-card-smoothie>\r\n \r\n        <div #triggerElement>TRIGGER ELEMENT</div>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n       \r\n\r\n           \r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n\r\n           \r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n       \r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n    </div>\r\n</ion-content>\r\n\r\n<app-counter-cart></app-counter-cart>\r\n");

/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --offset-top: 150px;\n  background-image: url(https://blog.traveloka.com/source/uploads/sites/9/2018/11/mon-an-vat-ngon-ha-noi-1.jpg);\n  background-size: auto 73%;\n  background-position: -19px -137px;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: -webkit-fill-available;\n}\n\nion-content {\n  --background: transparent;\n  transition: 0.5s;\n  transform: translate3d(0, 150px, 0);\n}\n\n.no-transform {\n  transform: translate3d(0, 0, 0) !important;\n}\n\nion-toolbar {\n  --background: transparent;\n  --border-width: 0 !important;\n}\n\n.content-container {\n  height: 100%;\n  padding-top: 40px;\n  background-color: #fff;\n  overflow: scroll;\n  padding-bottom: 200px;\n  overflow-x: hidden;\n}\n\n.transparent-toolbar {\n  --background: transparent;\n  --border-width: 0 !important;\n}\n\nion-toolbar {\n  transition: 0.5s;\n  --background:  linear-gradient(to right, #64b3f4, #c2e59c);\n}\n\nion-searchbar {\n  height: 44px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  transition: 0.5s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xcR2l0SHViXFxmb29kLW5sdS9zcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxtQkFBYTtFQUNiLDZHQUE2RztFQUM3Ryx5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsOEJBQThCO0FDSmxDOztBRE1JO0VBQ0kseUJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUNBQW1DO0FDSDNDOztBREtJO0VBQ0ksMENBQTBDO0FDRmxEOztBRElJO0VBQ0EseUJBQWE7RUFDYiw0QkFBZTtBQ0RuQjs7QURHSTtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0FDQTFCOztBREdJO0VBQ0kseUJBQWE7RUFDYiw0QkFBZTtBQ0F2Qjs7QURFSTtFQUNJLGdCQUFnQjtFQUNqQiwwREFBYTtBQ0NwQjs7QURDSztFQUNHLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQ0V4QiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuLy8gbmV3IGNvZGUgXHJcbjpob3N0IHtcclxuICAgIC0tb2Zmc2V0LXRvcDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9ibG9nLnRyYXZlbG9rYS5jb20vc291cmNlL3VwbG9hZHMvc2l0ZXMvOS8yMDE4LzExL21vbi1hbi12YXQtbmdvbi1oYS1ub2ktMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDczJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOXB4IC0xMzdweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDE1MHB4LCAwKTtcclxuICAgIH1cclxuICAgIC5uby10cmFuc2Zvcm0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtY29udGFpbmVyICB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC50cmFuc3BhcmVudC10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgIC0tYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7O1xyXG4gICAgIH1cclxuICAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB9IiwiOmhvc3Qge1xuICAtLW9mZnNldC10b3A6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9ibG9nLnRyYXZlbG9rYS5jb20vc291cmNlL3VwbG9hZHMvc2l0ZXMvOS8yMDE4LzExL21vbi1hbi12YXQtbmdvbi1oYS1ub2ktMS5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gNzMlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTlweCAtMTM3cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxNTBweCwgMCk7XG59XG5cbi5uby10cmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi50cmFuc3BhcmVudC10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICAtLWJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NGIzZjQsICNjMmU1OWMpO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pages_cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/cart-modal/cart-modal.page */ "./src/app/pages/cart-modal/cart-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let Tab3Page = class Tab3Page {
    constructor(router, render2, cartService, modalCtrl) {
        this.router = router;
        this.render2 = render2;
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.cart = [];
        this.products = [];
        this.headerFixed = false;
    }
    ngAfterViewInit() {
        console.log(this.triggerElement);
    }
    ngOnInit() {
        this.products = this.cartService.getProducts();
        this.cart = this.cartService.getCart();
        this.cartItemCount = this.cartService.getCartItemCount();
        // new code 
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(" add transform");
                    this.headerFixed = false;
                    this.render2.removeClass(this.contentArea.nativeElement, "no-transform");
                }
                else {
                    console.log("remove transform");
                    this.headerFixed = true;
                    this.render2.addClass(this.contentArea.nativeElement, "no-transform");
                }
            });
        });
        this.observer.observe(this.triggerElement.nativeElement);
    }
    addToCart(product) {
        this.cartService.addProduct(product);
        this.animateCSS('tada');
    }
    openCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.animateCSS('bounceOutLeft', true);
            let modal = yield this.modalCtrl.create({
                component: _pages_cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_4__["CartModalPage"],
                cssClass: 'cart-modal'
            });
            modal.onWillDismiss().then(() => {
                this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
                this.animateCSS('bounceInLeft');
            });
            modal.present();
        });
    }
    animateCSS(animationName, keepAnimated = false) {
        const node = this.fab.nativeElement;
        node.classList.add('animated', animationName);
        //https://github.com/daneden/animate.css
        function handleAnimationEnd() {
            if (!keepAnimated) {
                node.classList.remove('animated', animationName);
            }
            node.removeEventListener('animationend', handleAnimationEnd);
        }
        node.addEventListener('animationend', handleAnimationEnd);
    }
    // new fure
    handleScroll(ev) {
        console.log(ev);
    }
    viewStoreDetails(ev) {
        this.router.navigate([`/details/store`]);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], Tab3Page.prototype, "contentArea", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cart', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], Tab3Page.prototype, "fab", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("triggerElement", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true })
], Tab3Page.prototype, "triggerElement", void 0);
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map