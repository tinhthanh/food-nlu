(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/home-page/home-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/home-page/home-page.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\"  class=\"ion-no-border\">\r\n  <ion-item lines=\"none\">\r\n\r\n    <ion-avatar (click)=\"login()\" slot=\"end\">\r\n      <img src=\"assets/profile.jpg\">\r\n    </ion-avatar>\r\n\r\n    <ion-button (click)=\"openFirst()\"  fill=\"clear\" color=\"light\">\r\n      <ion-icon (click)=\"openFirst()\"   slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n    </ion-button>\r\n    <ion-searchbar (click)=\"search()\"  class=\"search-bar-default\"  #searchBarScroll placeholder=\"Nhập tên món..\" searchIcon=\"location-outline\"></ion-searchbar>\r\n\r\n  </ion-item>\r\n  <ion-item class=\"search-bar-animated\" #searchBar lines=\"none\">\r\n    <div style=\"width: 100%;\" class=\"ion-padding-start ion-padding-bottom\">\r\n      <ion-label>\r\n        <h2>Tìm kiếm món ăn</h2>\r\n      </ion-label>\r\n\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"10\">\r\n          <ion-searchbar   (click)=\"search()\"  placeholder=\"Nhập tên món..\" searchIcon=\"location-outline\"></ion-searchbar>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button  color=\"light\" fill=\"clear\">\r\n            <ion-icon slot=\"icon-only\" name=\"options-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </div>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content\r\n  [fullscreen]=\"true\">\r\n    <div class=\"ion-padding\">\r\n    <ion-row  #triggerElement class=\"ion-align-items-center ion-padding-horizontal\">\r\n      <ion-col size=\"6\">\r\n        <h5>8 Gian Hàng đã Đăng ký</h5>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <ion-button fill=\"clear\" color=\"dark\">\r\n          <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-card>\r\n\r\n      <ion-card-header>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <ion-badge color=\"warning\" mode=\"ios\">\r\n              <ion-icon name=\"star\"></ion-icon>\r\n              4.5\r\n            </ion-badge>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-right\">\r\n            <ion-card-subtitle color=\"success\">Hơn 25 Món</ion-card-subtitle>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-img src=\"assets/com-tam/pngguru.png\"></ion-img>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-card-title  >Cơm Tấm </ion-card-title>\r\n            <ion-card-subtitle>Cơm Tấm Hoàng Diệu</ion-card-subtitle>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" color=\"dark\" size=\"large\" routerLink=\"/details\">\r\n              <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <ion-badge color=\"warning\" mode=\"ios\">\r\n              <ion-icon name=\"star\"></ion-icon>\r\n              4.5\r\n            </ion-badge>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-right\">\r\n            <ion-card-subtitle color=\"success\">Hơn 25 Món</ion-card-subtitle>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content>\r\n        <ion-img src=\"assets/com-tam/pngguru.png\"></ion-img>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-card-title>Cơm Tấm </ion-card-title>\r\n            <ion-card-subtitle>Cơm Tấm Hoàng Diệu</ion-card-subtitle>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" color=\"dark\" size=\"large\" routerLink=\"/details\">\r\n              <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div class=\"container-food\">\r\n\r\n\r\n<div class=\"ion-padding wrapper\">\r\n\r\n  <ion-searchbar></ion-searchbar>\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-align-items-baseline\">\r\n      <ion-col size=\"6\">\r\n        <h4 class=\"title\">\r\n          Popular Dishes\r\n        </h4>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <h4 class=\"more ion-text-end\">\r\n          View more\r\n        </h4>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  </div>\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-slides [options]=\"options\">\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star-half\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n\r\n\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <div class=\"ion-padding-horizontal wrapper\">\r\n\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row class=\"ion-align-items-baseline\">\r\n        <ion-col size=\"6\">\r\n          <h4 class=\"title\">\r\n            Explore Categories\r\n          </h4>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <h4 class=\"more ion-text-end\">\r\n            Show more\r\n          </h4>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    </div>\r\n\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-slides [options]=\"categories\">\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"danger\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/dish.svg\"></ion-icon>\r\n                  <ion-card-title>Food</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"primary\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/cocktail.svg\"></ion-icon>\r\n                  <ion-card-title>Drink</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"warning\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/burger.svg\"></ion-icon>\r\n                  <ion-card-title>Burger</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"success\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/pizza.svg\"></ion-icon>\r\n                  <ion-card-title>Pizza</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"tertiary\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/taco.svg\"></ion-icon>\r\n                  <ion-card-title>Mexican</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"danger\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/cookies.svg\"></ion-icon>\r\n                  <ion-card-title>Dessert</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"secondary\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/noodle.svg\"></ion-icon>\r\n                  <ion-card-title>Noodle</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n\r\n\r\n\r\n\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n    <div class=\"ion-padding-horizontal wrapper\">\r\n\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-align-items-baseline\">\r\n          <ion-col size=\"6\">\r\n            <h4 class=\"title\">\r\n              Recommended Drinks\r\n            </h4>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <h4 class=\"more ion-text-end\">\r\n              Show more\r\n            </h4>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      </div>\r\n\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-slides [options]=\"options\">\r\n\r\n              <ion-slide>\r\n                <ion-card class=\"card\">\r\n                  <ion-card-content class=\"ion-text-left\">\r\n\r\n                    <div class=\"img-wrapper\">\r\n                      <ion-img src=\"https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                    </div>\r\n\r\n                    <ion-card-title class=\"title\">Some Awesome Title</ion-card-title>\r\n                    <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                    <ion-card-subtitle>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                    </ion-card-subtitle>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </ion-slide>\r\n\r\n              <ion-slide>\r\n                <ion-card class=\"card\">\r\n                  <ion-card-content class=\"ion-text-left\">\r\n\r\n                    <div class=\"img-wrapper\">\r\n                      <ion-img src=\"https://images.pexels.com/photos/616840/pexels-photo-616840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                    </div>\r\n\r\n                    <ion-card-title class=\"title\">Some Awesome Title</ion-card-title>\r\n                    <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                    <ion-card-subtitle>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                    </ion-card-subtitle>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </ion-slide>\r\n\r\n              <ion-slide>\r\n                <ion-card class=\"card\">\r\n                  <ion-card-content class=\"ion-text-left\">\r\n\r\n                    <div class=\"img-wrapper\">\r\n                      <ion-img src=\"https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                    </div>\r\n\r\n                    <ion-card-title class=\"title\">Some Awesome Title</ion-card-title>\r\n                    <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                    <ion-card-subtitle>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star-half\"></ion-icon>\r\n                    </ion-card-subtitle>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </ion-slide>\r\n\r\n            </ion-slides>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-home-page> </app-home-page>\r\n\r\n<app-counter-cart></app-counter-cart>");

/***/ }),

/***/ "./src/app/tab1/home-page/home-page.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/tab1/home-page/home-page.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: #316dd0;\n}\n\nion-item h2 {\n  font-weight: bold;\n  font-size: 20px;\n  color: #ffffff;\n}\n\nion-item:last-of-type {\n  border-radius: 0 0 20% 20%;\n}\n\nion-item:last-of-type div {\n  padding-bottom: 20px;\n}\n\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 10px;\n  opacity: .96;\n  padding: 0;\n  margin: 12px 0;\n}\n\nion-col {\n  padding: 0;\n}\n\nion-content {\n  --background: #f6f6f6;\n}\n\nion-card {\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 30px;\n}\n\nion-card ion-img {\n  width: 200px;\n  margin: 0 auto;\n}\n\n.search-bar-animated {\n  transition: 0.5s;\n}\n\n.no-transform {\n  transform: translate3d(0, -89px, 0);\n  z-index: -1;\n  opacity: 0.0;\n}\n\n.search-transform {\n  visibility: visible !important;\n  opacity: 1 !important;\n  transition-delay: 0s !important;\n}\n\n.search-bar-default {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s linear 0.33s, opacity 0.33s linear;\n}\n\n.container-food ion-item {\n  --background: rgba(248, 248, 250, .96);\n}\n\n.container-food ion-item h2 {\n  font-weight: bold;\n  font-size: 18px;\n  padding-top: 8px;\n}\n\n.container-food ion-content {\n  --background: #f8f8fa;\n}\n\n.container-food ion-searchbar {\n  --box-shadow: none;\n  --border-radius: 12px;\n}\n\n.container-food .more {\n  font-size: 12px;\n  color: #FB4E4E;\n}\n\n.container-food .title {\n  font-size: 16px;\n}\n\n.container-food .card {\n  margin: 0;\n  margin-right: 50px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n\n.container-food .category {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n\n.container-food ion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n\n.container-food ion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\n\n.container-food ion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\n\n.container-food ion-card-header ion-icon {\n  font-size: 60px;\n}\n\n.container-food ion-card-header ion-card-title {\n  font-size: 22px;\n  font-weight: bolder;\n}\n\n.container-food .wrapper {\n  padding-bottom: 0;\n}\n\n.container-food ion-badge {\n  padding: 10px;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9ob21lLXBhZ2UvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXEdpdEh1YlxcZm9vZC1ubHUvc3JjXFxhcHBcXHRhYjFcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWIxL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtBQ0NqQjs7QURGQTtFQUdNLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQ0dwQjs7QURDRTtFQUlFLDBCQUEwQjtBQ0Q5Qjs7QURIRTtFQUVJLG9CQUFvQjtBQ0sxQjs7QURBRTtFQUNFLGtCQUFhO0VBQ2IscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztBQ0dsQjs7QURBRTtFQUNFLFVBQVU7QUNHZDs7QURJRTtFQUNFLHFCQUFhO0FDRGpCOztBRElFO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnREFBZ0Q7RUFDaEQsbUJBQW1CO0FDRHZCOztBREhFO0VBT0ksWUFBWTtFQUNaLGNBQWM7QUNBcEI7O0FESUU7RUFDRSxnQkFBZ0I7QUNEcEI7O0FER0U7RUFDRSxtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLFlBQVk7QUNBaEI7O0FERUE7RUFFQyw4QkFBOEI7RUFDN0IscUJBQXFCO0VBQ3JCLCtCQUErQjtBQ0FqQzs7QURNQTtFQUVFLGtCQUFtQjtFQUNuQixVQUFXO0VBQ1gsNERBQTZEO0FDSi9EOztBRFNBO0VBRUksc0NBQWE7QUNQakI7O0FES0E7RUFLTSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQ050Qjs7QUREQTtFQWFJLHFCQUFhO0FDUmpCOztBRExBO0VBaUJJLGtCQUFhO0VBQ2IscUJBQWdCO0FDUnBCOztBRFZBO0VBc0JJLGVBQWU7RUFDZixjQUFjO0FDUmxCOztBRGZBO0VBMkJJLGVBQWU7QUNSbkI7O0FEbkJBO0VBK0JJLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7QUNSdkI7O0FEM0JBO0VBd0NJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FDVHZCOztBRGpDQTtFQWdETSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNYeEI7O0FEeENBO0VBdURNLGNBQWM7RUFDZCxrQkFBa0I7QUNYeEI7O0FEN0NBO0VBNERNLGdCQUFlO0FDWHJCOztBRGpEQTtFQW1FTSxlQUFlO0FDZHJCOztBRHJEQTtFQXVFTSxlQUFlO0VBQ2YsbUJBQW1CO0FDZHpCOztBRDFEQTtFQTZFSSxpQkFBaUI7QUNmckI7O0FEOURBO0VBaUZJLGFBQWE7RUFDYixlQUFlO0FDZm5CIiwiZmlsZSI6InNyYy9hcHAvdGFiMS9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzE2ZGQwO1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW06bGFzdC1vZi10eXBlIHtcclxuICAgIGRpdiB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwJSAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogLjk2O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tY29sIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIDo6bmctZGVlcCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uIHtcclxuICAvLyAgIGNvbG9yOiAjMzE2ZGQwICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgXHJcbiAgICBpb24taW1nIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYmFyLWFuaW1hdGVkIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIC5uby10cmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtODlweCwgMCk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9wYWNpdHk6IDAuMDsgIFxyXG59XHJcbi5zZWFyY2gtdHJhbnNmb3JtIHtcclxuICBcclxuIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIge1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zZWFyY2gtYmFyLWRlZmF1bHQge1xyXG4gXHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuIDtcclxuICBvcGFjaXR5OiAwIDtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjMzcywgb3BhY2l0eSAwLjMzcyBsaW5lYXIgO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWluZXItZm9vZCB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ4LCAyNTAsIC45Nik7XHJcbiAgXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmYTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjRkI0RTRFO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIC5pbWctd3JhcHBlciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICNmMjk5NGE7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOjZweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICBpb24tYmFkZ2Uge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzMxNmRkMDtcbn1cblxuaW9uLWl0ZW0gaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwJSAyMCU7XG59XG5cbmlvbi1pdGVtOmxhc3Qtb2YtdHlwZSBkaXYge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAuOTY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTJweCAwO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmlvbi1jYXJkIGlvbi1pbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc2VhcmNoLWJhci1hbmltYXRlZCB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5uby10cmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC04OXB4LCAwKTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDAuMDtcbn1cblxuLnNlYXJjaC10cmFuc2Zvcm0ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1iYXItZGVmYXVsdCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4zM3MsIG9wYWNpdHkgMC4zM3MgbGluZWFyO1xufVxuXG4uY29udGFpbmVyLWZvb2QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDgsIDI1MCwgLjk2KTtcbn1cblxuLmNvbnRhaW5lci1mb29kIGlvbi1pdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmNvbnRhaW5lci1mb29kIGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOGZhO1xufVxuXG4uY29udGFpbmVyLWZvb2QgaW9uLXNlYXJjaGJhciB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4uY29udGFpbmVyLWZvb2QgLm1vcmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRkI0RTRFO1xufVxuXG4uY29udGFpbmVyLWZvb2QgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY29udGFpbmVyLWZvb2QgLmNhcmQge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgd2lkdGg6IDgwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLmNvbnRhaW5lci1mb29kIC5jYXRlZ29yeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4uY29udGFpbmVyLWZvb2QgaW9uLWNhcmQtY29udGVudCAuaW1nLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5jb250YWluZXItZm9vZCBpb24tY2FyZC1jb250ZW50IGlvbi1pY29uIHtcbiAgY29sb3I6ICNmMjk5NGE7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuLmNvbnRhaW5lci1mb29kIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWNhcmQtc3VidGl0bGU6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLmNvbnRhaW5lci1mb29kIGlvbi1jYXJkLWhlYWRlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmNvbnRhaW5lci1mb29kIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmNvbnRhaW5lci1mb29kIC53cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5jb250YWluZXItZm9vZCBpb24tYmFkZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tab1/home-page/home-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tab1/home-page/home-page.component.ts ***!
  \*******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let HomePageComponent = class HomePageComponent {
    constructor(router, render2, menu) {
        this.router = router;
        this.render2 = render2;
        this.menu = menu;
        this.options = {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: -60,
        };
        this.categories = {
            slidesPerView: 2.5,
        };
    }
    ngOnInit() {
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.render2.removeClass(this.searchBar.nativeElement, 'no-transform');
                    this.render2.removeClass(this.searchBarScroll.nativeElement, 'search-transform');
                }
                else {
                    console.log('remove transform');
                    this.render2.addClass(this.searchBar.nativeElement, 'no-transform');
                    this.render2.addClass(this.searchBarScroll.nativeElement, 'search-transform');
                }
            });
        });
        this.observer.observe(this.triggerElement.nativeElement);
    }
    openFirst() {
        console.log('demo');
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    search() {
        this.router.navigate([`/details/search`]);
    }
    login() {
        this.router.navigate([`/forms`]);
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchBar', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], HomePageComponent.prototype, "searchBar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchBarScroll', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], HomePageComponent.prototype, "searchBarScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('triggerElement', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true })
], HomePageComponent.prototype, "triggerElement", void 0);
HomePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/home-page/home-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-page.component.scss */ "./src/app/tab1/home-page/home-page.component.scss")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");





const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponentModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/tab1/home-page/home-page.component.ts");









const honePages = [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"]];
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], ...honePages]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map