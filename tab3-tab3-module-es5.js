function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\" #header mode=\"ios\">\r\n  <ion-toolbar [ngClass]=\"{'transparent-toolbar':!headerFixed}\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button  [color]=\"!headerFixed? 'light' :'dark'\"  ></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button *ngIf=\"!headerFixed\" [color]=\"!headerFixed? 'light' :'dark'\">\r\n        <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button [color]=\"!headerFixed? 'light' :'dark'\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button [color]=\"!headerFixed? 'light' :'dark'\">\r\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal-outline\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-searchbar *ngIf=\"headerFixed\" class=\"search-bar-default\" placeholder=\"Nhập tên món..\"\r\n      searchIcon=\"search-outline\"></ion-searchbar>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  no-padding (ionScroll)=\"handleScroll($event)\" scroll-event=\"true\">\r\n   \r\n  <div [ngStyle]=\"{'border-radius.px' : headerFixed ? 0 : 30}\"  class=\"ion-padding content-container\">\r\n          \r\n    <app-card-smoothie  [index]=\"'2'\" (navigation)=\"viewStoreDetails($event)\" [category]=\"{id: 'C01' ,name:'Danh mục #Sinh tố' ,  title: 'Sinh tố Nông Lâm' , url : 'assets/smoothie/smoothie.png' , color: 'linear-gradient(90deg,#f7bf0c,#c2e59c)', customClass: 'leve1' }\" ></app-card-smoothie>\r\n \r\n        <div #triggerElement>TRIGGER ELEMENT</div>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n       \r\n\r\n           \r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n\r\n           \r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n       \r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n        <p>\r\n          If you get lost, the \r\n          <a href=\"\"> docs </a>\r\n           will be your guide\r\n        </p>\r\n    </div>\r\n</ion-content>\r\n\r\n<app-counter-cart></app-counter-cart>\r\n";
    /***/
  },

  /***/
  "./src/app/tab3/tab3-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab3/tab3-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");

    var routes = [{
      path: '',
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/tab3/tab3-routing.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --offset-top: 150px;\n  background-image: url(https://blog.traveloka.com/source/uploads/sites/9/2018/11/mon-an-vat-ngon-ha-noi-1.jpg);\n  background-size: auto 73%;\n  background-position: -19px -137px;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: -webkit-fill-available;\n}\n\nion-content {\n  --background: transparent;\n  transition: 0.5s;\n  transform: translate3d(0, 150px, 0);\n}\n\n.no-transform {\n  transform: translate3d(0, 0, 0) !important;\n}\n\nion-toolbar {\n  --background: transparent;\n  --border-width: 0 !important;\n}\n\n.content-container {\n  height: 100%;\n  padding-top: 40px;\n  background-color: #fff;\n  overflow: scroll;\n  padding-bottom: 200px;\n  overflow-x: hidden;\n}\n\n.transparent-toolbar {\n  --background: transparent;\n  --border-width: 0 !important;\n}\n\nion-toolbar {\n  transition: 0.5s;\n  --background:  linear-gradient(to right, #64b3f4, #c2e59c);\n}\n\nion-searchbar {\n  height: 44px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  transition: 0.5s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXGFsZXguaHV5bmhcXERlc2t0b3BcXEJhbWJvb1xcdGVtcGxhdGVcXGdpdGh1YlxcZm9vZC1ubHVcXGZvb2Qtbmx1L3NyY1xcYXBwXFx0YWIzXFx0YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLG1CQUFhO0VBQ2IsNkdBQTZHO0VBQzdHLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCw4QkFBOEI7QUNKbEM7O0FETUk7RUFDSSx5QkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUNIM0M7O0FES0k7RUFDSSwwQ0FBMEM7QUNGbEQ7O0FESUk7RUFDQSx5QkFBYTtFQUNiLDRCQUFlO0FDRG5COztBREdJO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUNBMUI7O0FER0k7RUFDSSx5QkFBYTtFQUNiLDRCQUFlO0FDQXZCOztBREVJO0VBQ0ksZ0JBQWdCO0VBQ2pCLDBEQUFhO0FDQ3BCOztBRENLO0VBQ0csWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FDRXhCIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4vLyBuZXcgY29kZSBcclxuOmhvc3Qge1xyXG4gICAgLS1vZmZzZXQtdG9wOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Jsb2cudHJhdmVsb2thLmNvbS9zb3VyY2UvdXBsb2Fkcy9zaXRlcy85LzIwMTgvMTEvbW9uLWFuLXZhdC1uZ29uLWhhLW5vaS0xLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gNzMlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5cHggLTEzN3B4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTUwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgLm5vLXRyYW5zZm9ybSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1jb250YWluZXIgIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLnRyYW5zcGFyZW50LXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgLS1iYWNrZ3JvdW5kOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTs7XHJcbiAgICAgfVxyXG4gICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH0iLCI6aG9zdCB7XG4gIC0tb2Zmc2V0LXRvcDogMTUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Jsb2cudHJhdmVsb2thLmNvbS9zb3VyY2UvdXBsb2Fkcy9zaXRlcy85LzIwMTgvMTEvbW9uLWFuLXZhdC1uZ29uLWhhLW5vaS0xLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byA3MyU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOXB4IC0xMzdweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDE1MHB4LCAwKTtcbn1cblxuLm5vLXRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnRyYW5zcGFyZW50LXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIC0tYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pages_cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pages/cart-modal/cart-modal.page */
    "./src/app/pages/cart-modal/cart-modal.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var Tab3Page = /*#__PURE__*/function () {
      function Tab3Page(router, render2, cartService, modalCtrl) {
        _classCallCheck(this, Tab3Page);

        this.router = router;
        this.render2 = render2;
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.cart = [];
        this.products = [];
        this.headerFixed = false;
      }

      _createClass(Tab3Page, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log(this.triggerElement);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.products = this.cartService.getProducts();
          this.cart = this.cartService.getCart();
          this.cartItemCount = this.cartService.getCartItemCount(); // new code 

          this.observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                console.log(" add transform");
                _this.headerFixed = false;

                _this.render2.removeClass(_this.contentArea.nativeElement, "no-transform");
              } else {
                console.log("remove transform");
                _this.headerFixed = true;

                _this.render2.addClass(_this.contentArea.nativeElement, "no-transform");
              }
            });
          });
          this.observer.observe(this.triggerElement.nativeElement);
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          this.cartService.addProduct(product);
          this.animateCSS('tada');
        }
      }, {
        key: "openCart",
        value: function openCart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.animateCSS('bounceOutLeft', true);
                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _pages_cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_4__["CartModalPage"],
                      cssClass: 'cart-modal'
                    });

                  case 3:
                    modal = _context.sent;
                    modal.onWillDismiss().then(function () {
                      _this2.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');

                      _this2.animateCSS('bounceInLeft');
                    });
                    modal.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "animateCSS",
        value: function animateCSS(animationName) {
          var keepAnimated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var node = this.fab.nativeElement;
          node.classList.add('animated', animationName); //https://github.com/daneden/animate.css

          function handleAnimationEnd() {
            if (!keepAnimated) {
              node.classList.remove('animated', animationName);
            }

            node.removeEventListener('animationend', handleAnimationEnd);
          }

          node.addEventListener('animationend', handleAnimationEnd);
        } // new fure

      }, {
        key: "handleScroll",
        value: function handleScroll(ev) {
          console.log(ev);
        }
      }, {
        key: "viewStoreDetails",
        value: function viewStoreDetails(ev) {
          this.router.navigate(["/details/store"]);
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], Tab3Page.prototype, "contentArea", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cart', {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], Tab3Page.prototype, "fab", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("triggerElement", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": true
    })], Tab3Page.prototype, "triggerElement", void 0);
    Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss"))["default"]]
    })], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map