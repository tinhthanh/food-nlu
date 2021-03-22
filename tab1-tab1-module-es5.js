function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/home-page/home-page.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/home-page/home-page.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1HomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\"  class=\"ion-no-border\">\r\n  <ion-item lines=\"none\">\r\n\r\n    <ion-avatar (click)=\"login()\" slot=\"end\">\r\n      <img src=\"assets/profile.jpg\">\r\n    </ion-avatar>\r\n\r\n    <ion-button (click)=\"openFirst()\"  fill=\"clear\" color=\"light\">\r\n      <ion-icon (click)=\"openFirst()\"   slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n    </ion-button>\r\n    <ion-searchbar (click)=\"search()\"  class=\"search-bar-default\"  #searchBarScroll placeholder=\"Nhập tên món..\" searchIcon=\"location-outline\"></ion-searchbar>\r\n\r\n  </ion-item>\r\n  <ion-item class=\"search-bar-animated\" #searchBar lines=\"none\">\r\n    <div style=\"width: 100%;\" class=\"ion-padding-start ion-padding-bottom\">\r\n      <ion-label>\r\n        <h2>Tìm kiếm món ăn</h2>\r\n      </ion-label>\r\n\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"10\">\r\n          <ion-searchbar   (click)=\"search()\"  placeholder=\"Nhập tên món..\" searchIcon=\"location-outline\"></ion-searchbar>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button  color=\"light\" fill=\"clear\">\r\n            <ion-icon slot=\"icon-only\" name=\"options-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </div>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content\r\n  [fullscreen]=\"true\">\r\n    <div class=\"ion-padding\">\r\n    <ion-row  #triggerElement class=\"ion-align-items-center ion-padding-horizontal\">\r\n      <ion-col size=\"6\">\r\n        <h5>8 Gian Hàng đã Đăng ký</h5>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <ion-button fill=\"clear\" color=\"dark\">\r\n          <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-card>\r\n\r\n      <ion-card-header>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <ion-badge color=\"warning\" mode=\"ios\">\r\n              <ion-icon name=\"star\"></ion-icon>\r\n              4.5\r\n            </ion-badge>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-right\">\r\n            <ion-card-subtitle color=\"success\">Hơn 25 Món</ion-card-subtitle>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-img src=\"assets/com-tam/pngguru.png\"></ion-img>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-card-title  >Cơm Tấm </ion-card-title>\r\n            <ion-card-subtitle>Cơm Tấm Hoàng Diệu</ion-card-subtitle>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" color=\"dark\" size=\"large\" routerLink=\"/details\">\r\n              <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <ion-badge color=\"warning\" mode=\"ios\">\r\n              <ion-icon name=\"star\"></ion-icon>\r\n              4.5\r\n            </ion-badge>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-right\">\r\n            <ion-card-subtitle color=\"success\">Hơn 25 Món</ion-card-subtitle>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content>\r\n        <ion-img src=\"assets/com-tam/pngguru.png\"></ion-img>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-card-title>Cơm Tấm </ion-card-title>\r\n            <ion-card-subtitle>Cơm Tấm Hoàng Diệu</ion-card-subtitle>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" color=\"dark\" size=\"large\" routerLink=\"/details\">\r\n              <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div class=\"container-food\">\r\n\r\n\r\n<div class=\"ion-padding wrapper\">\r\n\r\n  <ion-searchbar></ion-searchbar>\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-align-items-baseline\">\r\n      <ion-col size=\"6\">\r\n        <h4 class=\"title\">\r\n          Popular Dishes\r\n        </h4>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <h4 class=\"more ion-text-end\">\r\n          View more\r\n        </h4>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  </div>\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-slides [options]=\"options\">\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star-half\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n\r\n\r\n\r\n          <ion-slide>\r\n            <ion-card class=\"card\">\r\n              <ion-card-content class=\"ion-text-left\">\r\n\r\n                <div class=\"img-wrapper\">\r\n                  <ion-img src=\"https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                </div>\r\n\r\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\r\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                <ion-card-subtitle>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </ion-card-subtitle>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <div class=\"ion-padding-horizontal wrapper\">\r\n\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row class=\"ion-align-items-baseline\">\r\n        <ion-col size=\"6\">\r\n          <h4 class=\"title\">\r\n            Explore Categories\r\n          </h4>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <h4 class=\"more ion-text-end\">\r\n            Show more\r\n          </h4>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    </div>\r\n\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-slides [options]=\"categories\">\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"danger\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/dish.svg\"></ion-icon>\r\n                  <ion-card-title>Food</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"primary\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/cocktail.svg\"></ion-icon>\r\n                  <ion-card-title>Drink</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"warning\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/burger.svg\"></ion-icon>\r\n                  <ion-card-title>Burger</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"success\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/pizza.svg\"></ion-icon>\r\n                  <ion-card-title>Pizza</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"tertiary\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/taco.svg\"></ion-icon>\r\n                  <ion-card-title>Mexican</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"danger\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/cookies.svg\"></ion-icon>\r\n                  <ion-card-title>Dessert</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n            <ion-slide>\r\n              <ion-card class=\"category\" color=\"secondary\">\r\n                <ion-card-header class=\"ion-text-center\">\r\n                  <ion-icon src=\"assets/images/food/noodle.svg\"></ion-icon>\r\n                  <ion-card-title>Noodle</ion-card-title>\r\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            </ion-slide>\r\n\r\n\r\n\r\n\r\n\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n    <div class=\"ion-padding-horizontal wrapper\">\r\n\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-align-items-baseline\">\r\n          <ion-col size=\"6\">\r\n            <h4 class=\"title\">\r\n              Recommended Drinks\r\n            </h4>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <h4 class=\"more ion-text-end\">\r\n              Show more\r\n            </h4>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      </div>\r\n\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-slides [options]=\"options\">\r\n\r\n              <ion-slide>\r\n                <ion-card class=\"card\">\r\n                  <ion-card-content class=\"ion-text-left\">\r\n\r\n                    <div class=\"img-wrapper\">\r\n                      <ion-img src=\"https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                    </div>\r\n\r\n                    <ion-card-title class=\"title\">Some Awesome Title</ion-card-title>\r\n                    <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                    <ion-card-subtitle>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                    </ion-card-subtitle>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </ion-slide>\r\n\r\n              <ion-slide>\r\n                <ion-card class=\"card\">\r\n                  <ion-card-content class=\"ion-text-left\">\r\n\r\n                    <div class=\"img-wrapper\">\r\n                      <ion-img src=\"https://images.pexels.com/photos/616840/pexels-photo-616840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                    </div>\r\n\r\n                    <ion-card-title class=\"title\">Some Awesome Title</ion-card-title>\r\n                    <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                    <ion-card-subtitle>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                    </ion-card-subtitle>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </ion-slide>\r\n\r\n              <ion-slide>\r\n                <ion-card class=\"card\">\r\n                  <ion-card-content class=\"ion-text-left\">\r\n\r\n                    <div class=\"img-wrapper\">\r\n                      <ion-img src=\"https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\"></ion-img>\r\n                    </div>\r\n\r\n                    <ion-card-title class=\"title\">Some Awesome Title</ion-card-title>\r\n                    <ion-card-subtitle>Some description here</ion-card-subtitle>\r\n                    <ion-card-subtitle>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star-half\"></ion-icon>\r\n                    </ion-card-subtitle>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </ion-slide>\r\n\r\n            </ion-slides>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<app-home-page> </app-home-page>\r\n\r\n<app-counter-cart></app-counter-cart>";
    /***/
  },

  /***/
  "./src/app/tab1/home-page/home-page.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/tab1/home-page/home-page.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1HomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --background: #316dd0;\n}\n\nion-item h2 {\n  font-weight: bold;\n  font-size: 20px;\n  color: #ffffff;\n}\n\nion-item:last-of-type {\n  border-radius: 0 0 20% 20%;\n}\n\nion-item:last-of-type div {\n  padding-bottom: 20px;\n}\n\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 10px;\n  opacity: .96;\n  padding: 0;\n  margin: 12px 0;\n}\n\nion-col {\n  padding: 0;\n}\n\nion-content {\n  --background: #f6f6f6;\n}\n\nion-card {\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 30px;\n}\n\nion-card ion-img {\n  width: 200px;\n  margin: 0 auto;\n}\n\n.search-bar-animated {\n  transition: 0.5s;\n}\n\n.no-transform {\n  transform: translate3d(0, -89px, 0);\n  z-index: -1;\n  opacity: 0.0;\n}\n\n.search-transform {\n  visibility: visible !important;\n  opacity: 1 !important;\n  transition-delay: 0s !important;\n}\n\n.search-bar-default {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s linear 0.33s, opacity 0.33s linear;\n}\n\n.container-food ion-item {\n  --background: rgba(248, 248, 250, .96);\n}\n\n.container-food ion-item h2 {\n  font-weight: bold;\n  font-size: 18px;\n  padding-top: 8px;\n}\n\n.container-food ion-content {\n  --background: #f8f8fa;\n}\n\n.container-food ion-searchbar {\n  --box-shadow: none;\n  --border-radius: 12px;\n}\n\n.container-food .more {\n  font-size: 12px;\n  color: #FB4E4E;\n}\n\n.container-food .title {\n  font-size: 16px;\n}\n\n.container-food .card {\n  margin: 0;\n  margin-right: 50px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n\n.container-food .category {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n\n.container-food ion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n\n.container-food ion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\n\n.container-food ion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\n\n.container-food ion-card-header ion-icon {\n  font-size: 60px;\n}\n\n.container-food ion-card-header ion-card-title {\n  font-size: 22px;\n  font-weight: bolder;\n}\n\n.container-food .wrapper {\n  padding-bottom: 0;\n}\n\n.container-food ion-badge {\n  padding: 10px;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9ob21lLXBhZ2UvQzpcXFVzZXJzXFxhbGV4Lmh1eW5oXFxEZXNrdG9wXFxCYW1ib29cXHRlbXBsYXRlXFxnaXRodWJcXGZvb2Qtbmx1XFxmb29kLW5sdS9zcmNcXGFwcFxcdGFiMVxcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RhYjEvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0FDQ2pCOztBREZBO0VBR00saUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FDR3BCOztBRENFO0VBSUUsMEJBQTBCO0FDRDlCOztBREhFO0VBRUksb0JBQW9CO0FDSzFCOztBREFFO0VBQ0Usa0JBQWE7RUFDYixxQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0FDR2xCOztBREFFO0VBQ0UsVUFBVTtBQ0dkOztBRElFO0VBQ0UscUJBQWE7QUNEakI7O0FESUU7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCxtQkFBbUI7QUNEdkI7O0FESEU7RUFPSSxZQUFZO0VBQ1osY0FBYztBQ0FwQjs7QURJRTtFQUNFLGdCQUFnQjtBQ0RwQjs7QURHRTtFQUNFLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsWUFBWTtBQ0FoQjs7QURFQTtFQUVDLDhCQUE4QjtFQUM3QixxQkFBcUI7RUFDckIsK0JBQStCO0FDQWpDOztBRE1BO0VBRUUsa0JBQW1CO0VBQ25CLFVBQVc7RUFDWCw0REFBNkQ7QUNKL0Q7O0FEU0E7RUFFSSxzQ0FBYTtBQ1BqQjs7QURLQTtFQUtNLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0FDTnRCOztBRERBO0VBYUkscUJBQWE7QUNSakI7O0FETEE7RUFpQkksa0JBQWE7RUFDYixxQkFBZ0I7QUNScEI7O0FEVkE7RUFzQkksZUFBZTtFQUNmLGNBQWM7QUNSbEI7O0FEZkE7RUEyQkksZUFBZTtBQ1JuQjs7QURuQkE7RUErQkksU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQ1J2Qjs7QUQzQkE7RUF3Q0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUNUdkI7O0FEakNBO0VBZ0RNLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQ1h4Qjs7QUR4Q0E7RUF1RE0sY0FBYztFQUNkLGtCQUFrQjtBQ1h4Qjs7QUQ3Q0E7RUE0RE0sZ0JBQWU7QUNYckI7O0FEakRBO0VBbUVNLGVBQWU7QUNkckI7O0FEckRBO0VBdUVNLGVBQWU7RUFDZixtQkFBbUI7QUNkekI7O0FEMURBO0VBNkVJLGlCQUFpQjtBQ2ZyQjs7QUQ5REE7RUFpRkksYUFBYTtFQUNiLGVBQWU7QUNmbkIiLCJmaWxlIjoic3JjL2FwcC90YWIxL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzMTZkZDA7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24taXRlbTpsYXN0LW9mLXR5cGUge1xyXG4gICAgZGl2IHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjAlIDIwJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAuOTY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLy8gOjpuZy1kZWVwIC5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xyXG4gIC8vICAgY29sb3I6ICMzMTZkZDAgIWltcG9ydGFudDtcclxuICAvLyB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1iYXItYW5pbWF0ZWQge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgLm5vLXRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC04OXB4LCAwKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgb3BhY2l0eTogMC4wOyAgXHJcbn1cclxuLnNlYXJjaC10cmFuc2Zvcm0ge1xyXG4gIFxyXG4gdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNlYXJjaC1iYXItZGVmYXVsdCB7XHJcbiBcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gO1xyXG4gIG9wYWNpdHk6IDAgO1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMzNzLCBvcGFjaXR5IDAuMzNzIGxpbmVhciA7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lci1mb29kIHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDgsIDI1MCwgLjk2KTtcclxuICBcclxuICAgIGgyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjhmOGZhO1xyXG4gIH1cclxuICBcclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vcmUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNGQjRFNEU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNhdGVnb3J5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgLmltZy13cmFwcGVyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBjb2xvcjogI2YyOTk0YTtcclxuICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNhcmQtc3VidGl0bGU6bGFzdC1vZi10eXBlIHtcclxuICAgICAgcGFkZGluZy10b3A6NnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1iYWRnZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzE2ZGQwO1xufVxuXG5pb24taXRlbSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24taXRlbTpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMjAlIDIwJTtcbn1cblxuaW9uLWl0ZW06bGFzdC1vZi10eXBlIGRpdiB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IC45NjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuaW9uLWNhcmQgaW9uLWltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zZWFyY2gtYmFyLWFuaW1hdGVkIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm5vLXRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTg5cHgsIDApO1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMC4wO1xufVxuXG4uc2VhcmNoLXRyYW5zZm9ybSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWJhci1kZWZhdWx0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjMzcywgb3BhY2l0eSAwLjMzcyBsaW5lYXI7XG59XG5cbi5jb250YWluZXItZm9vZCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjUwLCAuOTYpO1xufVxuXG4uY29udGFpbmVyLWZvb2QgaW9uLWl0ZW0gaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4uY29udGFpbmVyLWZvb2QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmOGY4ZmE7XG59XG5cbi5jb250YWluZXItZm9vZCBpb24tc2VhcmNoYmFyIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5jb250YWluZXItZm9vZCAubW9yZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGQjRFNEU7XG59XG5cbi5jb250YWluZXItZm9vZCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jb250YWluZXItZm9vZCAuY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB3aWR0aDogODAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4uY29udGFpbmVyLWZvb2QgLmNhdGVnb3J5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5jb250YWluZXItZm9vZCBpb24tY2FyZC1jb250ZW50IC5pbWctd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNvbnRhaW5lci1mb29kIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWljb24ge1xuICBjb2xvcjogI2YyOTk0YTtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4uY29udGFpbmVyLWZvb2QgaW9uLWNhcmQtY29udGVudCBpb24tY2FyZC1zdWJ0aXRsZTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4uY29udGFpbmVyLWZvb2QgaW9uLWNhcmQtaGVhZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4uY29udGFpbmVyLWZvb2QgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uY29udGFpbmVyLWZvb2QgLndyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmNvbnRhaW5lci1mb29kIGlvbi1iYWRnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab1/home-page/home-page.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/tab1/home-page/home-page.component.ts ***!
    \*******************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppTab1HomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent(router, render2, menu) {
        _classCallCheck(this, HomePageComponent);

        this.router = router;
        this.render2 = render2;
        this.menu = menu;
        this.options = {
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: -60
        };
        this.categories = {
          slidesPerView: 2.5
        };
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                _this.render2.removeClass(_this.searchBar.nativeElement, 'no-transform');

                _this.render2.removeClass(_this.searchBarScroll.nativeElement, 'search-transform');
              } else {
                console.log('remove transform');

                _this.render2.addClass(_this.searchBar.nativeElement, 'no-transform');

                _this.render2.addClass(_this.searchBarScroll.nativeElement, 'search-transform');
              }
            });
          });
          this.observer.observe(this.triggerElement.nativeElement);
        }
      }, {
        key: "openFirst",
        value: function openFirst() {
          console.log('demo');
          this.menu.enable(true, 'first');
          this.menu.open('first');
        }
      }, {
        key: "search",
        value: function search() {
          this.router.navigate(["/details/search"]);
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(["/forms"]);
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchBar', {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], HomePageComponent.prototype, "searchBar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchBarScroll', {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], HomePageComponent.prototype, "searchBarScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('triggerElement', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": true
    })], HomePageComponent.prototype, "triggerElement", void 0);
    HomePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/home-page/home-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/tab1/home-page/home-page.component.scss"))["default"]]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/tab1/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab1/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
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


    var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var routes = [{
      path: '',
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponentModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/tab1/tab1-routing.module.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/tab1/home-page/home-page.component.ts");

    var honePages = [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"]];

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]].concat(honePages)
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Tab1Page = function Tab1Page() {
      _classCallCheck(this, Tab1Page);
    };

    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    })], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map