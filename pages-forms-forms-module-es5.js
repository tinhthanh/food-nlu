function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forms-forms-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/pages/login/login.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/pages/login/login.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFormsPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<link href=\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap\" rel=\"stylesheet\">\r\n\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button icon=\"chevron-back\" defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n    <div class=\"back-circle\"></div>\r\n    <ion-title class=\"ion-text-center custom-font\">Đăng nhập</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n          <ion-button >\r\n              <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal-outline\"></ion-icon>\r\n          </ion-button>\r\n\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n  <svg class=\"back-blob\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill=\"#8295A3\" d=\"M68.6,-33.5C81.6,-17.2,79.6,13.8,65.7,37.6C51.8,61.3,25.9,77.8,2.1,76.6C-21.7,75.4,-43.5,56.5,-54.2,34.6C-65,12.7,-64.8,-12.3,-53.9,-27.4C-43,-42.4,-21.5,-47.6,3.2,-49.4C27.9,-51.2,55.7,-49.7,68.6,-33.5Z\" transform=\"translate(100 100)\" />\r\n  </svg>\r\n\r\n  <div class=\"ion-padding\">\r\n    <form class=\"ion-padding\">\r\n      <div class=\"wrap-input\">\r\n        <input class=\"input\" type=\"text\" inputmode=\"phone\" name=\"user-email\" placeholder=\"Nhập số điện thoại\">\r\n      </div>\r\n\r\n      <div class=\"wrap-input\">\r\n        <input class=\"input\" type=\"password\" name=\"password\" placeholder=\"Nhập mật khẩu\">\r\n      </div>\r\n\r\n      <div class=\"container-form-btn\">\r\n        <button routerLink=\"/\"  class=\"form-btn custom-font\">\r\n          Đăng nhập\r\n        </button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <p class=\"ion-text-center custom-font\">Tôi đã có tài khoản? <a routerLink=\"/forms/register\">Đăng nhập</a></p>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/pages/regiser/register.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/pages/regiser/register.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFormsPagesRegiserRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<link href=\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap\" rel=\"stylesheet\">\r\n\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <div class=\"back-circle\"></div>\r\n    <ion-title class=\"ion-text-center custom-font\">Đăng ký</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button >\r\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal-outline\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n  <svg class=\"back-blob\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill=\"#8295A3\" d=\"M68.6,-33.5C81.6,-17.2,79.6,13.8,65.7,37.6C51.8,61.3,25.9,77.8,2.1,76.6C-21.7,75.4,-43.5,56.5,-54.2,34.6C-65,12.7,-64.8,-12.3,-53.9,-27.4C-43,-42.4,-21.5,-47.6,3.2,-49.4C27.9,-51.2,55.7,-49.7,68.6,-33.5Z\" transform=\"translate(100 100)\" />\r\n  </svg>\r\n\r\n  <div class=\"ion-padding\">\r\n    <form class=\"ion-padding\">\r\n\r\n      <div class=\"wrap-input\">\r\n        <input class=\"input\" type=\"text\" enterkeyhint=\"search\" type=\"search\" name=\"user-name\" placeholder=\"Nhập tên của bạn\">\r\n      </div>\r\n\r\n      <div class=\"wrap-input\">\r\n        <input class=\"input\" type=\"text\" inputmode=\"phone\" name=\"user-email\" placeholder=\"Nhập số điện thoại\">\r\n      </div>\r\n\r\n      <div class=\"wrap-input\">\r\n        <input class=\"input\" type=\"password\" name=\"password\" placeholder=\"Nhập mật khẩu\">\r\n      </div>\r\n\r\n      <div class=\"container-form-btn\">\r\n        <button  routerLink=\"/\"  class=\"form-btn custom-font\">\r\n          Đăng ký\r\n        </button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <p class=\"ion-text-center custom-font\">Tôi đã có tài khoản? <a routerLink=\"/forms\">Đăng nhập</a></p>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/forms/forms-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/forms/forms-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FormsPageRoutingModule */

  /***/
  function srcAppPagesFormsFormsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsPageRoutingModule", function () {
      return FormsPageRoutingModule;
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


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/forms/pages/login/login.component.ts");
    /* harmony import */


    var _pages_regiser_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/regiser/register.component */
    "./src/app/pages/forms/pages/regiser/register.component.ts");

    var routes = [{
      path: '',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _pages_regiser_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }];

    var FormsPageRoutingModule = function FormsPageRoutingModule() {
      _classCallCheck(this, FormsPageRoutingModule);
    };

    FormsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FormsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forms/forms.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/forms/forms.module.ts ***!
    \*********************************************/

  /*! exports provided: FormsPageModule */

  /***/
  function srcAppPagesFormsFormsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsPageModule", function () {
      return FormsPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forms-routing.module */
    "./src/app/pages/forms/forms-routing.module.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/forms/pages/login/login.component.ts");
    /* harmony import */


    var _pages_regiser_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/regiser/register.component */
    "./src/app/pages/forms/pages/regiser/register.component.ts");

    var FormsPageModule = function FormsPageModule() {
      _classCallCheck(this, FormsPageModule);
    };

    FormsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormsPageRoutingModule"]],
      declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _pages_regiser_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]]
    })], FormsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/forms/pages/login/login.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/forms/pages/login/login.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFormsPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n}\n\n.custom-font {\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-toolbar ion-title {\n  font-weight: 900;\n}\n\nion-toolbar p {\n  padding: 40px 0 20px 0;\n  font-weight: 700;\n}\n\nion-toolbar .back-circle {\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n  z-index: -1;\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-content {\n  --background: rgba(237, 242, 245, .8);\n}\n\n.back-blob {\n  z-index: -1;\n  width: 600px;\n  position: absolute;\n  left: -50%;\n  top: 0;\n}\n\nform {\n  max-width: 600px;\n  margin: 0 auto;\n  margin-top: 10%;\n}\n\n.wrap-input {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  margin-bottom: 26px;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.12);\n}\n\n.input {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-family: Josefin Sans;\n  font-size: 16px;\n  line-height: 1.2;\n  border: none;\n  outline: none;\n}\n\ninput.input {\n  height: 46px;\n  padding: 0 20px 0 23px;\n}\n\n.container-form-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 42px;\n  background-color: #394752;\n  border-radius: 20px;\n  font-size: 14px;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  padding-top: 5px;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.5);\n}\n\n.form-btn:hover {\n  background-color: #28333b;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.8);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybXMvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXEdpdEh1YlxcZm9vZC1ubHUvc3JjXFxhcHBcXHBhZ2VzXFxmb3Jtc1xccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9ybXMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1REFBdUQ7QUNDekQ7O0FEQ0E7RUFDRSx1Q0FBdUM7QUNFekM7O0FEQ0E7RUFDRSx5QkFBYTtBQ0VmOztBREhBO0VBSUksZ0JBQWdCO0FDR3BCOztBRFBBO0VBUUksc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQ0dwQjs7QURaQTtFQWFJLHVEQUF1RDtFQUN2RCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FDR2I7O0FERUE7RUFDRSxxQ0FBYTtBQ0NmOztBREdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07QUNBUjs7QURJQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQ0RqQjs7QURJQTtFQUNFLDBDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtEQUFrRDtBQ0RwRDs7QURJQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0FDRGY7O0FESUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FDRHhCOztBRElBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQ0R6Qjs7QURJQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpREFBaUQ7QUNEbkQ7O0FESUE7RUFDRSx5QkFBeUI7RUFDekIsaURBQWlEO0FDRG5EIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybXMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTtcclxufVxyXG4uY3VzdG9tLWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDAgMjBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5iYWNrLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NGIzZjQsICNjMmU1OWMpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMzcsIDI0MiwgMjQ1LCAuOCk7XHJcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XHJcbn1cclxuXHJcbi5iYWNrLWJsb2Ige1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTUwJTtcclxuICB0b3A6IDA7XHJcbiAgLy8gb3BhY2l0eTogLjI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4ud3JhcC1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuMTIpO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnM7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0LmlucHV0IHtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgMjNweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mb3JtLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTQ3NTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuNSk7XHJcbn1cclxuXHJcbi5mb3JtLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzMzYjtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSg1NywgNzEsIDgyLCAwLjgpO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTtcbn1cblxuLmN1c3RvbS1mb250IHtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmlvbi10b29sYmFyIHAge1xuICBwYWRkaW5nOiA0MHB4IDAgMjBweCAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tdG9vbGJhciAuYmFjay1jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NGIzZjQsICNjMmU1OWMpO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjM3LCAyNDIsIDI0NSwgLjgpO1xufVxuXG4uYmFjay1ibG9iIHtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNTAlO1xuICB0b3A6IDA7XG59XG5cbmZvcm0ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4ud3JhcC1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC4xMik7XG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dC5pbnB1dCB7XG4gIGhlaWdodDogNDZweDtcbiAgcGFkZGluZzogMCAyMHB4IDAgMjNweDtcbn1cblxuLmNvbnRhaW5lci1mb3JtLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTQ3NTI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSg1NywgNzEsIDgyLCAwLjUpO1xufVxuXG4uZm9ybS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzMzNiO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSg1NywgNzEsIDgyLCAwLjgpO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/forms/pages/login/login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/forms/pages/login/login.component.ts ***!
    \************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesFormsPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/pages/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/forms/pages/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/forms/pages/regiser/register.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/forms/pages/regiser/register.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFormsPagesRegiserRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n}\n\n.custom-font {\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-toolbar ion-title {\n  font-weight: 900;\n}\n\nion-toolbar p {\n  padding: 40px 0 20px 0;\n  font-weight: 700;\n}\n\nion-toolbar .back-circle {\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n  z-index: -1;\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-content {\n  --background: rgba(237, 242, 245, .8);\n}\n\n.back-blob {\n  z-index: -1;\n  width: 600px;\n  position: absolute;\n  left: -50%;\n  top: 0;\n}\n\nform {\n  max-width: 600px;\n  margin: 0 auto;\n  margin-top: 10%;\n}\n\n.wrap-input {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  margin-bottom: 26px;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.12);\n}\n\n.input {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-family: Josefin Sans;\n  font-size: 16px;\n  line-height: 1.2;\n  border: none;\n  outline: none;\n}\n\ninput.input {\n  height: 46px;\n  padding: 0 20px 0 23px;\n}\n\n.container-form-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 42px;\n  background-color: #394752;\n  border-radius: 20px;\n  font-size: 14px;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  padding-top: 5px;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.5);\n}\n\n.form-btn:hover {\n  background-color: #28333b;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.8);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybXMvcGFnZXMvcmVnaXNlci9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xcR2l0SHViXFxmb29kLW5sdS9zcmNcXGFwcFxccGFnZXNcXGZvcm1zXFxwYWdlc1xccmVnaXNlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Zvcm1zL3BhZ2VzL3JlZ2lzZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1REFBdUQ7QUNDekQ7O0FEQ0E7RUFDRSx1Q0FBdUM7QUNFekM7O0FEQ0E7RUFDRSx5QkFBYTtBQ0VmOztBREhBO0VBSUksZ0JBQWdCO0FDR3BCOztBRFBBO0VBUUksc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQ0dwQjs7QURaQTtFQWFJLHVEQUF1RDtFQUN2RCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FDR2I7O0FERUE7RUFDRSxxQ0FBYTtBQ0NmOztBREdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07QUNBUjs7QURJQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQ0RqQjs7QURJQTtFQUNFLDBDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtEQUFrRDtBQ0RwRDs7QURJQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0FDRGY7O0FESUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FDRHhCOztBRElBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQ0R6Qjs7QURJQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpREFBaUQ7QUNEbkQ7O0FESUE7RUFDRSx5QkFBeUI7RUFDekIsaURBQWlEO0FDRG5EIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybXMvcGFnZXMvcmVnaXNlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NGIzZjQsICNjMmU1OWMpO1xyXG59XHJcbi5jdXN0b20tZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMCAyMHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLmJhY2stY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcblxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIzNywgMjQyLCAyNDUsIC44KTtcclxuICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTtcclxufVxyXG5cclxuLmJhY2stYmxvYiB7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtNTAlO1xyXG4gIHRvcDogMDtcclxuICAvLyBvcGFjaXR5OiAuMjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi53cmFwLWlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC4xMik7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1mYW1pbHk6IEpvc2VmaW4gU2FucztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQuaW5wdXQge1xyXG4gIGhlaWdodDogNDZweDtcclxuICBwYWRkaW5nOiAwIDIwcHggMCAyM3B4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZvcm0tYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NDc1MjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC41KTtcclxufVxyXG5cclxuLmZvcm0tYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzMzNiO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuOCk7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NGIzZjQsICNjMmU1OWMpO1xufVxuXG4uY3VzdG9tLWZvbnQge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuaW9uLXRvb2xiYXIgcCB7XG4gIHBhZGRpbmc6IDQwcHggMCAyMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlvbi10b29sYmFyIC5iYWNrLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMzcsIDI0MiwgMjQ1LCAuOCk7XG59XG5cbi5iYWNrLWJsb2Ige1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDYwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC01MCU7XG4gIHRvcDogMDtcbn1cblxuZm9ybSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi53cmFwLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSg1NywgNzEsIDgyLCAwLjEyKTtcbn1cblxuLmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IEpvc2VmaW4gU2FucztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0LmlucHV0IHtcbiAgaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAwIDIwcHggMCAyM3B4O1xufVxuXG4uY29udGFpbmVyLWZvcm0tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JtLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NDc1MjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuNSk7XG59XG5cbi5mb3JtLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODMzM2I7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuOCk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/forms/pages/regiser/register.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/forms/pages/regiser/register.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppPagesFormsPagesRegiserRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/pages/regiser/register.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/pages/forms/pages/regiser/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-forms-forms-module-es5.js.map