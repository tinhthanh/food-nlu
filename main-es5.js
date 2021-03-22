function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-command/add-command.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-command/add-command.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddCommandAddCommandComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n<ion-content fullscreen=\"true\">\n\n  <svg class=\"back-blob\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path fill=\"#8295A3\" d=\"M68.6,-33.5C81.6,-17.2,79.6,13.8,65.7,37.6C51.8,61.3,25.9,77.8,2.1,76.6C-21.7,75.4,-43.5,56.5,-54.2,34.6C-65,12.7,-64.8,-12.3,-53.9,-27.4C-43,-42.4,-21.5,-47.6,3.2,-49.4C27.9,-51.2,55.7,-49.7,68.6,-33.5Z\" transform=\"translate(100 100)\" />\n  </svg>\n\n  <div class=\"ion-padding\">\n    <form [formGroup]=\"form\" class=\"ion-padding\">\n      <div class=\"wrap-input\">\n        <div class=\"wrap-input\">\n          <div  class=\"input\" > {{ $time | async }}</div>\n         </div>\n        <select class=\"input\" formControlName=\"action\"  >\n          <option value=\"THANG\">THANG</option>\n          <option value=\"THUA\">THUA</option>\n        </select>\n      </div>\n      <div class=\"wrap-input\">\n        <input formControlName=\"price\" class=\"input\" type=\"text\" enterkeyhint=\"search\" type=\"search\" >\n      </div>\n\n      <!-- <div class=\"wrap-input\">\n        <input   type=\"datetime-local\" class=\"input\" >\n      </div> -->\n      <div class=\"wrap-input\">\n        <input formControlName=\"id\" class=\"input\" type=\"text\" enterkeyhint=\"search\" type=\"search\" >\n      </div>\n      <div class=\"wrap-input\">\n        <input formControlName=\"time\" class=\"input\"  enterkeyhint=\"search\" type=\"search\" >\n      </div>\n      <div class=\"wrap-input\">\n        <input formControlName=\"type\" class=\"input\" type=\"text\" enterkeyhint=\"search\" type=\"search\" >\n      </div>\n\n      <div class=\"container-form-btn\">\n        <button (click)=\"processForm($event)\"   class=\"form-btn custom-font\">\n           Push command\n        </button>\n        &nbsp;\n        <button (click)=\"pushResult($event)\"   class=\"form-btn custom-font\">\n          Push result\n        </button>\n      </div>\n\n    </form>\n  </div>\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCartModalCartModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\r\n \r\n  <div style=\"\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\"  >\r\n  <div class=\"ion-text-end\">\r\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\r\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <div   style=\"border-top: 1px solid #d1caca85; flex: 1; overflow: auto;\">\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\r\n        <ion-grid>\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\">\r\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n \r\n            <ion-col size=\"1\" class=\"ion-align-self-center\">\r\n              <ion-button color=\"medium\" fill=\"clear\" >\r\n                {{ p.amount }}\r\n              </ion-button>\r\n             \r\n            </ion-col>\r\n \r\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\">\r\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n \r\n            <ion-col size=\"2\" offset=\"5\">\r\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"removeCartItem(p)\">\r\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"7\">\r\n              <b>{{ p.name }}</b>\r\n            </ion-col>\r\n            <ion-col size=\"5\" class=\"ion-text-end\">\r\n              {{ p.amount * p.price | currency:'VND' }}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"9\">\r\n              Tổng tiền:\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-text-end\">\r\n              {{ getTotal() | currency:'VND' }}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n  \r\n  </div>\r\n    <div >\r\n      <ion-button expand=\"full\" (click)=\"checkout()\">\r\n         Đặt Món\r\n      </ion-button>\r\n    </div>\r\n </div> \r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/pages/stock/stock.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/pages/stock/stock.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFormsPagesStockStockComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-container \">\r\n  \r\n  <div class=\"app-header\">\r\n    <div class=\"app-header-left\">\r\n      <span class=\"app-icon\"></span>\r\n      <p class=\"app-name\">Portfolio</p>\r\n      <div class=\"search-wrapper\">\r\n        <input class=\"search-input\" type=\"text\" placeholder=\"Search\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-search\" viewBox=\"0 0 24 24\">\r\n          <defs></defs>\r\n          <circle cx=\"11\" cy=\"11\" r=\"8\"></circle>\r\n          <path d=\"M21 21l-4.35-4.35\"></path>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n    <div class=\"app-header-right\">\r\n      <button class=\"mode-switch\" title=\"Switch Theme\">\r\n        <svg class=\"moon\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n          <defs></defs>\r\n          <path d=\"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z\"></path>\r\n        </svg>\r\n      </button>\r\n      <button class=\"add-btn\" title=\"Add New Project\">\r\n        <svg class=\"btn-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n          <line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\" />\r\n          <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" /></svg>\r\n      </button>\r\n      <button class=\"notification-btn\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\">\r\n          <path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\" />\r\n          <path d=\"M13.73 21a2 2 0 0 1-3.46 0\" /></svg>\r\n      </button>\r\n      <button class=\"profile-btn\">\r\n        <img src=\"https://assets.codepen.io/3306515/IMG_2025.jpg\" />\r\n        <span>Aybüke C.</span>\r\n      </button>\r\n    </div>\r\n    <button class=\"messages-btn\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-message-circle\">\r\n        <path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\" /></svg>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-content\">\r\n    <div class=\"app-sidebar\">\r\n      <a href=\"\" class=\"app-sidebar-link active\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\">\r\n          <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />\r\n          <polyline points=\"9 22 9 12 15 12 15 22\" /></svg>\r\n      </a>\r\n      <a href=\"\" class=\"app-sidebar-link\">\r\n        <svg class=\"link-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-pie-chart\" viewBox=\"0 0 24 24\">\r\n          <defs />\r\n          <path d=\"M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z\" />\r\n        </svg>\r\n      </a>\r\n      <a href=\"\" class=\"app-sidebar-link\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\">\r\n          <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\" />\r\n          <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\" />\r\n          <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\" />\r\n          <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\" /></svg>\r\n      </a>\r\n      <a href=\"\" class=\"app-sidebar-link\">\r\n        <svg class=\"link-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-settings\" viewBox=\"0 0 24 24\">\r\n          <defs />\r\n          <circle cx=\"12\" cy=\"12\" r=\"3\" />\r\n          <path d=\"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z\" />\r\n        </svg>\r\n      </a>\r\n    </div>\r\n    <div class=\"projects-section\">\r\n      <!-- <div class=\"projects-section-header\">\r\n        <p>Projects</p>\r\n        <p class=\"time\">December, 12</p>\r\n      </div> -->\r\n      <div class=\"projects-section-line\">\r\n        <div class=\"projects-status\">\r\n          <div class=\"item-status\">\r\n            <span class=\"status-number\">45</span>\r\n            <span class=\"status-type\">In Progress</span>\r\n          </div>\r\n          <div class=\"item-status\">\r\n            <span class=\"status-number\">24</span>\r\n            <span class=\"status-type\">Upcoming</span>\r\n          </div>\r\n          <div class=\"item-status\">\r\n            <span class=\"status-number\">62</span>\r\n            <span class=\"status-type\">Total Projects</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"view-actions\">\r\n          <button class=\"view-btn list-view\" title=\"List View\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-list\">\r\n              <line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\" />\r\n              <line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\" />\r\n              <line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\" />\r\n              <line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\" />\r\n              <line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\" />\r\n              <line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\" /></svg>\r\n          </button>\r\n          <button class=\"view-btn grid-view active\" title=\"Grid View\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-grid\">\r\n              <rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" />\r\n              <rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" />\r\n              <rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" />\r\n              <rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" /></svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"project-boxes jsGridView\">\r\n        <div class=\"project-box-wrapper\">\r\n          <div class=\"project-box\" style=\"background-color: #fee4cb;\">\r\n            <div class=\"project-box-header\">\r\n              <span>December 10, 2020</span>\r\n              <div class=\"more-wrapper\">\r\n                <button class=\"project-btn-more\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                    <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                    <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                    <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n                </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">Web Designing</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 60%; background-color: #ff942e\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">60%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #ff942e;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #ff942e;\">\r\n            2 Days Left\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-box-wrapper\">\r\n      <div class=\"project-box\" style=\"background-color: #e9e7fd;\">\r\n        <div class=\"project-box-header\">\r\n          <span>December 10, 2020</span>\r\n          <div class=\"more-wrapper\">\r\n            <button class=\"project-btn-more\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">Testing</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 50%; background-color: #4f3ff0\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">50%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #4f3ff0;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #4f3ff0;\">\r\n            2 Days Left\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-box-wrapper\">\r\n      <div class=\"project-box\">\r\n        <div class=\"project-box-header\">\r\n          <span>December 10, 2020</span>\r\n          <div class=\"more-wrapper\">\r\n            <button class=\"project-btn-more\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">Svg Animations</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 80%; background-color: #096c86\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">80%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #096c86;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #096c86;\">\r\n            2 Days Left\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-box-wrapper\">\r\n      <div class=\"project-box\" style=\"background-color: #ffd3e2;\">\r\n        <div class=\"project-box-header\">\r\n          <span>December 10, 2020</span>\r\n          <div class=\"more-wrapper\">\r\n            <button class=\"project-btn-more\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">UI Development</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 20%; background-color: #df3670\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">20%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #df3670;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #df3670;\">\r\n            2 Days Left\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-box-wrapper\">\r\n      <div class=\"project-box\" style=\"background-color: #c8f7dc;\">\r\n        <div class=\"project-box-header\">\r\n          <span>December 10, 2020</span>\r\n          <div class=\"more-wrapper\">\r\n            <button class=\"project-btn-more\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">Data Analysis</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 60%; background-color: #34c471\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">60%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #34c471;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #34c471;\">\r\n            2 Days Left\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-box-wrapper\">\r\n      <div class=\"project-box\" style=\"background-color: #d5deff;\">\r\n        <div class=\"project-box-header\">\r\n          <span>December 10, 2020</span>\r\n          <div class=\"more-wrapper\">\r\n            <button class=\"project-btn-more\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">Web Designing</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 40%; background-color: #4067f9\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">40%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #4067f9;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #4067f9;\">\r\n            2 Days Left\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"messages-section\">\r\n  <button class=\"messages-close\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x-circle\">\r\n      <circle cx=\"12\" cy=\"12\" r=\"10\" />\r\n      <line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\" />\r\n      <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\" /></svg>\r\n  </button>\r\n  <div class=\"projects-section-header\">\r\n    <p>Client Messages</p>\r\n  </div>\r\n  <div class=\"messages\">\r\n    <div class=\"message-box\">\r\n      <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"profile image\">\r\n      <div class=\"message-content\">\r\n        <div class=\"message-header\">\r\n          <div class=\"name\">Stephanie</div>\r\n          <div class=\"star-checkbox\">\r\n            <input type=\"checkbox\" id=\"star-1\">\r\n            <label for=\"star-1\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\r\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <p class=\"message-line\">\r\n          I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.\r\n        </p>\r\n        <p class=\"message-line time\">\r\n          Dec, 12\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"message-box\">\r\n      <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"profile image\">\r\n      <div class=\"message-content\">\r\n        <div class=\"message-header\">\r\n          <div class=\"name\">Mark</div>\r\n          <div class=\"star-checkbox\">\r\n            <input type=\"checkbox\" id=\"star-2\">\r\n            <label for=\"star-2\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\r\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <p class=\"message-line\">\r\n          Hey, can tell me about progress of project? I'm waiting for your response.\r\n        </p>\r\n        <p class=\"message-line time\">\r\n          Dec, 12\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"message-box\">\r\n      <img src=\"https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"profile image\">\r\n      <div class=\"message-content\">\r\n        <div class=\"message-header\">\r\n          <div class=\"name\">David</div>\r\n          <div class=\"star-checkbox\">\r\n            <input type=\"checkbox\" id=\"star-3\">\r\n            <label for=\"star-3\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\r\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <p class=\"message-line\">\r\n          Awesome! 🤩 I like it. We can schedule a meeting for the next one.\r\n        </p>\r\n        <p class=\"message-line time\">\r\n          Dec, 12\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"message-box\">\r\n      <img src=\"https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"profile image\">\r\n      <div class=\"message-content\">\r\n        <div class=\"message-header\">\r\n          <div class=\"name\">Jessica</div>\r\n          <div class=\"star-checkbox\">\r\n            <input type=\"checkbox\" id=\"star-4\">\r\n            <label for=\"star-4\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\r\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <p class=\"message-line\">\r\n          I am really impressed! Can't wait to see the final result.\r\n        </p>\r\n        <p class=\"message-line time\">\r\n          Dec, 11\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-layout/main-layout.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-layout/main-layout.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMainLayoutMainLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-split-pane  contentId=\"main-content\">\r\n    <ion-menu side=\"start\" menuId=\"first\" contentId=\"main-content\" >\r\n<!--      <ion-menu contentId=\"main-content\" type=\"reveal\">-->\r\n        <ion-content>\r\n            <div class=\"app-wrapp\">\r\n                <div class=\"app-container\">\r\n                    <!-- @main page view -->\r\n                    <div class=\"view-main\">\r\n                        <div class=\"header-wrapp\">\r\n                            <div class=\"app-detail\">\r\n                                <div>\r\n                                    <img src=\"https://cdn0.iconfinder.com/data/icons/chat-2/100/Chat-13-512.png\" alt=\"\">\r\n                                </div>\r\n                                <div>Liên hệ</div>\r\n                                <div class=\"status\"> 098 177 30 84 </div>\r\n                            </div>\r\n                            <div class=\"wave-wrapp\">\r\n                                <svg class=\"wave\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 24 150 28\"   preserveAspectRatio=\"none\">\r\n                                    <defs>\r\n                                        <path id=\"gentle-wave\" d=\"m -160,44.4 c 30,0 58,-18 87.7,-18 30.3,0 58.3,18 87.3,18 30,0 58,-18 88,-18 30,0 58,18 88,18 l 0,34.5 -351,0 z\" />\r\n                                    </defs>\r\n                                    <g class=\"parallax\">\r\n                                        <use xlink:href=\"#gentle-wave\" x=\"50\" y=\"0\" fill=\"rgba(255, 255, 255, 0.48)\"/>\r\n                                        <use xlink:href=\"#gentle-wave\" x=\"50\" y=\"3\" fill=\"rgba(255, 255, 255, 0.78)\"/>\r\n                                        <use xlink:href=\"#gentle-wave\" x=\"50\" y=\"6\" fill=\"rgba(255, 255, 255, 0.8)\"/>\r\n                                    </g>\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"content-wrapp\">\r\n\r\n                            <div id=\"master-nav-items\" data-viewport=\"true\">\r\n                                <div id=\"item-4\" class=\"active\">\r\n                                    <div class=\"profile-setting\">\r\n                                        <div class=\"touch-y\" style=\"transform: translateY(-2px);\">\r\n                                            <div class=\"information\">\r\n                                                <div class=\"public\">\r\n                                                    <p>\r\n                                                        PUBLIC INFORMATION\r\n                                                    </p>\r\n                                                    <div class=\"form-group\">\r\n                                    <span>\r\n                                        <i class=\"material-icons\">assignment_ind</i>\r\n                                    </span>\r\n                                                      <div (click)=\"closeMenu()\" routerLink=\"/forms/register\" class=\"title-leve1\">Đăng ký</div>  \r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                    <span>\r\n                                        <i class=\"material-icons\">face</i>\r\n                                    </span>\r\n                                    <div  (click)=\"closeMenu()\" routerLink=\"/forms\"  class=\"title-leve1\">Đăng nhập</div>  \r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                    <span>\r\n                                        <i class=\"material-icons\">public</i>\r\n                                    </span>\r\n                                    <div class=\"title-leve1\">https://fb.com/react.thanh</div>  \r\n                                                    </div>\r\n                                                    <div class=\"form-group h-80\">\r\n                                    <span>\r\n                                        <i class=\"material-icons\">info</i>\r\n                                    </span>\r\n                                    <div class=\"title-leve1\">0981773084</div>  \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"private\">\r\n                                                    <p>\r\n                                                        PRIVATE INFORMATION\r\n                                                    </p>\r\n                                                    <div class=\"form-group\">\r\n                                    <span>\r\n                                        <i class=\"material-icons\">local_post_office</i>\r\n                                    </span>\r\n                                                        <input type=\"text\" placeholder=\"EMAIL\" value=\"k40cntt@gmail.com\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <!-- @send message view -->\r\n\r\n                </div>\r\n            </div>\r\n            <!-- <ion-list>\r\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\r\n              <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\r\n                <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n                <ion-label>\r\n                  {{p.title}}\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n            </ion-list> -->\r\n        </ion-content>\r\n    </ion-menu>\r\n      <ion-router-outlet id=\"main-content\" ></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wefinex/wefinex.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wefinex/wefinex.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWefinexWefinexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-container \">\r\n  \r\n  <div class=\"app-header\">\r\n    <div class=\"app-header-left\">\r\n      <span class=\"app-icon\"></span>\r\n      <p class=\"app-name\">Wefinex command</p>\r\n      <div class=\"search-wrapper\">\r\n        <input class=\"search-input\" type=\"text\" placeholder=\"Search\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-search\" viewBox=\"0 0 24 24\">\r\n          <defs></defs>\r\n          <circle cx=\"11\" cy=\"11\" r=\"8\"></circle>\r\n          <path d=\"M21 21l-4.35-4.35\"></path>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n    <div class=\"app-header-right\">\r\n      <button class=\"mode-switch\" title=\"Switch Theme\">\r\n        <svg class=\"moon\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n          <defs></defs>\r\n          <path d=\"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z\"></path>\r\n        </svg>\r\n      </button>\r\n      <button class=\"add-btn\" title=\"Add New Project\">\r\n        <svg class=\"btn-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n          <line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\" />\r\n          <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" /></svg>\r\n      </button>\r\n      <button class=\"notification-btn\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\">\r\n          <path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\" />\r\n          <path d=\"M13.73 21a2 2 0 0 1-3.46 0\" /></svg>\r\n      </button>\r\n      <button class=\"profile-btn\">\r\n        <img src=\"assets/wefinex/bitcoin.png\" />\r\n        <span>Aybüke C.</span>\r\n      </button>\r\n    </div>\r\n    <button class=\"messages-btn\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-message-circle\">\r\n        <path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\" /></svg>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-content\">\r\n    <div class=\"app-sidebar\">\r\n      <a  class=\"app-sidebar-link active\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\">\r\n          <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />\r\n          <polyline points=\"9 22 9 12 15 12 15 22\" /></svg>\r\n      </a>\r\n      <a  class=\"app-sidebar-link\">\r\n        <svg class=\"link-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-pie-chart\" viewBox=\"0 0 24 24\">\r\n          <defs />\r\n          <path d=\"M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z\" />\r\n        </svg>\r\n      </a>\r\n      <a  class=\"app-sidebar-link\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\">\r\n          <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\" />\r\n          <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\" />\r\n          <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\" />\r\n          <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\" /></svg>\r\n      </a>\r\n      <a  class=\"app-sidebar-link\">\r\n        <svg class=\"link-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-settings\" viewBox=\"0 0 24 24\">\r\n          <defs />\r\n          <circle cx=\"12\" cy=\"12\" r=\"3\" />\r\n          <path d=\"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z\" />\r\n        </svg>\r\n      </a>\r\n    </div>\r\n    <div class=\"projects-section\">\r\n      <!-- <div class=\"projects-section-header\">\r\n        <p>Projects</p>\r\n        <p class=\"time\">December, 12</p>\r\n      </div> -->\r\n      <div class=\"projects-section-line\">\r\n        <div class=\"projects-status\">\r\n          <div class=\"item-status\">\r\n            <span class=\"status-number\">$ 2,096  &nbsp;</span>\r\n            <span class=\"status-type\">Tiền hiện tại</span>\r\n          </div>\r\n          <div class=\"item-status\">\r\n            <span class=\"status-number\">$ 69</span>\r\n            <span class=\"status-type\">Vốn hôm nay</span>\r\n          </div>\r\n          <div class=\"item-status\">\r\n            <span class=\"status-number\">30%</span>\r\n            <span class=\"status-type\">Lợi nhuận</span>\r\n          </div>\r\n        </div>\r\n        <ion-icon id=\"trigger-volume\" (click)=\"clickIconVolume()\" style=\"font-size: 30px;\" [name]=\"soundOn? 'volume-high' :'volume-mute'\"></ion-icon>\r\n        <div class=\"view-actions\">\r\n          <button class=\"view-btn list-view\" title=\"List View\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-list\">\r\n              <line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\" />\r\n              <line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\" />\r\n              <line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\" />\r\n              <line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\" />\r\n              <line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\" />\r\n              <line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\" /></svg>\r\n          </button>\r\n          <button class=\"view-btn grid-view active\" title=\"Grid View\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-grid\">\r\n              <rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" />\r\n              <rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" />\r\n              <rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" />\r\n              <rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" /></svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"project-boxes jsGridView\">\r\n        <div *ngIf=\"current\" class=\"project-box-wrapper\">\r\n          <div class=\"project-box\" [style.background-color]=\"mapType[current.type].b\" >\r\n            <div class=\"project-box-header\">\r\n              <span>Thời gian: {{current.time}}</span>\r\n              <div class=\"more-wrapper\">\r\n                <button class=\"project-btn-more\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                    <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                    <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                    <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"project-box-content-header\">\r\n              <p class=\"box-content-header\">Tiền đặt:  {{current.price}} </p>\r\n              <p class=\"box-content-subheader\">{{current.countDown > 30 ? ('Vui lòng đặt '+mapType[current.type].f+': '+ (30 - (60 - current.countDown)) + 's')  : ('Chờ kết quả: ' + current.countDown + 's')}}  </p>\r\n            </div>\r\n            <div class=\"box-progress-wrapper\">\r\n              <p class=\"box-progress-header\">Progress</p>\r\n              <div class=\"box-progress-bar\">\r\n                <span class=\"box-progress\"  [style.background-color]=\"mapType[current.type].t\"  [style.width.%]=\"current['percent']\"></span>\r\n              </div>\r\n              <p class=\"box-progress-percentage\">{{current['percent']}}%</p>\r\n            </div>\r\n            <div class=\"project-box-footer\">\r\n              <div class=\"participants\">\r\n                <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\r\n                <img src=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\r\n                <button class=\"add-participant\"  [style.background-color]=\"mapType[current.type].t\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                    <path d=\"M12 5v14M5 12h14\" />\r\n                  </svg>\r\n                </button>\r\n              </div>\r\n              <div class=\"days-left\"  [style.background-color]=\"mapType[current.type].t\">\r\n               User Follow\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div  *ngIf=\"!current\" class=\"project-box-wrapper\">\r\n          <div class=\"project-box\" style=\"background-color: #e9e7fd;\">\r\n            <div class=\"project-box-header\">\r\n              <span>Trạng thái đợi lệnh</span>\r\n              <div class=\"more-wrapper\">\r\n                <button class=\"project-btn-more\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                    <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                    <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                    <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"project-box-content-header\">\r\n              <p class=\"box-content-header\">Chờ lệnh...</p>\r\n              <p class=\"box-content-subheader\">Vui lòng chờ lệnh</p>\r\n            </div>\r\n            <div class=\"box-progress-wrapper\">\r\n              <p class=\"box-progress-header\">Progress</p>\r\n              <div class=\"box-progress-bar\">\r\n                <span class=\"box-progress\" style=\"width: 0%; background-color: #4f3ff0\"></span>\r\n              </div>\r\n              <p class=\"box-progress-percentage\">0%</p>\r\n            </div>\r\n            <div class=\"project-box-footer\">\r\n              <div class=\"participants\">\r\n                <!-- <img src=\"https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80\" alt=\"participant\"> -->\r\n                <!-- <img src=\"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80\" alt=\"participant\"> -->\r\n                <button class=\"add-participant\" style=\"color: #4f3ff0;\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                    <path d=\"M12 5v14M5 12h14\" />\r\n                  </svg>\r\n                </button>\r\n              </div>\r\n              <div class=\"days-left\" style=\"color: #4f3ff0;\">\r\n               User Follow\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <div *ngFor=\"let item of result; trackBy: trackByFn\" class=\"project-box-wrapper\">\r\n        <div class=\"project-box\" [style.background-color]=\"mapType[item.type].b\" >\r\n          <div class=\"project-box-header\">\r\n            <span>Thời gian: {{item.time}}</span>\r\n            <div class=\"more-wrapper\">\r\n              <button class=\"project-btn-more\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                  <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                  <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                  <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"project-box-content-header\">\r\n            <p class=\"box-content-header\">Tiền đặt:  {{item.price}} </p>\r\n            <p class=\"box-content-subheader\">Lệnh: {{mapType[item.type].f}} </p>\r\n          </div>\r\n          <div class=\"box-progress-wrapper\">\r\n            <p class=\"box-progress-header\">Done:  {{mapResult[item.action]}}</p>\r\n            <div class=\"box-progress-bar\">\r\n              <span class=\"box-progress\"  [style.background-color]=\"mapType[item.type].t\" style=\"width: 100%;\"></span>\r\n            </div>\r\n            <p class=\"box-progress-percentage\">100%</p>\r\n          </div>\r\n          <div class=\"project-box-footer\">\r\n            <div class=\"participants\">\r\n              <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\r\n              <img src=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\r\n              <button class=\"add-participant\"  [style.background-color]=\"mapType[item.type].t\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                  <path d=\"M12 5v14M5 12h14\" />\r\n                </svg>\r\n              </button>\r\n            </div>\r\n            <div class=\"days-left\"  [style.background-color]=\"mapType[item.type].t\">\r\n             User Follow\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n   \r\n    \r\n        <!-- <div class=\"project-box-wrapper\">\r\n          <div class=\"project-box\" style=\"background-color: #fee4cb;\">\r\n            <div class=\"project-box-header\">\r\n              <span>December 10, 2020</span>\r\n              <div class=\"more-wrapper\">\r\n                <button class=\"project-btn-more\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                    <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                    <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                    <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n                </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">Web Designing</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 60%; background-color: #ff942e\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">60%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #ff942e;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #ff942e;\">\r\n           User Follow\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-box-wrapper\">\r\n      <div class=\"project-box\" style=\"background-color: #e9e7fd;\">\r\n        <div class=\"project-box-header\">\r\n          <span>December 10, 2020</span>\r\n          <div class=\"more-wrapper\">\r\n            <button class=\"project-btn-more\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">Testing</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 50%; background-color: #4f3ff0\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">50%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #4f3ff0;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #4f3ff0;\">\r\n           User Follow\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-box-wrapper\">\r\n      <div class=\"project-box\">\r\n        <div class=\"project-box-header\">\r\n          <span>December 10, 2020</span>\r\n          <div class=\"more-wrapper\">\r\n            <button class=\"project-btn-more\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">Svg Animations</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 80%; background-color: #096c86\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">80%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #096c86;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #096c86;\">\r\n           User Follow\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-box-wrapper\">\r\n      <div class=\"project-box\" style=\"background-color: #ffd3e2;\">\r\n        <div class=\"project-box-header\">\r\n          <span>December 10, 2020</span>\r\n          <div class=\"more-wrapper\">\r\n            <button class=\"project-btn-more\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">UI Development</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 20%; background-color: #df3670\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">20%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #df3670;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #df3670;\">\r\n           User Follow\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-box-wrapper\">\r\n      <div class=\"project-box\" style=\"background-color: #c8f7dc;\">\r\n        <div class=\"project-box-header\">\r\n          <span>December 10, 2020</span>\r\n          <div class=\"more-wrapper\">\r\n            <button class=\"project-btn-more\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">Data Analysis</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 60%; background-color: #34c471\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">60%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #34c471;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #34c471;\">\r\n           User Follow\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-box-wrapper\">\r\n      <div class=\"project-box\" style=\"background-color: #d5deff;\">\r\n        <div class=\"project-box-header\">\r\n          <span>December 10, 2020</span>\r\n          <div class=\"more-wrapper\">\r\n            <button class=\"project-btn-more\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\r\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-box-content-header\">\r\n          <p class=\"box-content-header\">Web Designing</p>\r\n          <p class=\"box-content-subheader\">Prototyping</p>\r\n        </div>\r\n        <div class=\"box-progress-wrapper\">\r\n          <p class=\"box-progress-header\">Progress</p>\r\n          <div class=\"box-progress-bar\">\r\n            <span class=\"box-progress\" style=\"width: 40%; background-color: #4067f9\"></span>\r\n          </div>\r\n          <p class=\"box-progress-percentage\">40%</p>\r\n        </div>\r\n        <div class=\"project-box-footer\">\r\n          <div class=\"participants\">\r\n            <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\r\n            <img src=\"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80\" alt=\"participant\">\r\n            <button class=\"add-participant\" style=\"color: #4067f9;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\r\n                <path d=\"M12 5v14M5 12h14\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <div class=\"days-left\" style=\"color: #4067f9;\">\r\n           User Follow\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n<div class=\"messages-section\">\r\n  <button class=\"messages-close\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x-circle\">\r\n      <circle cx=\"12\" cy=\"12\" r=\"10\" />\r\n      <line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\" />\r\n      <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\" /></svg>\r\n  </button>\r\n  <div class=\"projects-section-header\">\r\n    <p>Client Messages</p>\r\n  </div>\r\n  <div class=\"messages\">\r\n    <div class=\"message-box\">\r\n      <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"profile image\">\r\n      <div class=\"message-content\">\r\n        <div class=\"message-header\">\r\n          <div class=\"name\">Stephanie</div>\r\n          <div class=\"star-checkbox\">\r\n            <input type=\"checkbox\" id=\"star-1\">\r\n            <label for=\"star-1\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\r\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <p class=\"message-line\">\r\n          I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.\r\n        </p>\r\n        <p class=\"message-line time\">\r\n          Dec, 12\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"message-box\">\r\n      <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"profile image\">\r\n      <div class=\"message-content\">\r\n        <div class=\"message-header\">\r\n          <div class=\"name\">Mark</div>\r\n          <div class=\"star-checkbox\">\r\n            <input type=\"checkbox\" id=\"star-2\">\r\n            <label for=\"star-2\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\r\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <p class=\"message-line\">\r\n          Hey, can tell me about progress of project? I'm waiting for your response.\r\n        </p>\r\n        <p class=\"message-line time\">\r\n          Dec, 12\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"message-box\">\r\n      <img src=\"https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"profile image\">\r\n      <div class=\"message-content\">\r\n        <div class=\"message-header\">\r\n          <div class=\"name\">David</div>\r\n          <div class=\"star-checkbox\">\r\n            <input type=\"checkbox\" id=\"star-3\">\r\n            <label for=\"star-3\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\r\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <p class=\"message-line\">\r\n          Awesome! 🤩 I like it. We can schedule a meeting for the next one.\r\n        </p>\r\n        <p class=\"message-line time\">\r\n          Dec, 12\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"message-box\">\r\n      <img src=\"https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"profile image\">\r\n      <div class=\"message-content\">\r\n        <div class=\"message-header\">\r\n          <div class=\"name\">Jessica</div>\r\n          <div class=\"star-checkbox\">\r\n            <input type=\"checkbox\" id=\"star-4\">\r\n            <label for=\"star-4\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\r\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <p class=\"message-line\">\r\n          I am really impressed! Can't wait to see the final result.\r\n        </p>\r\n        <p class=\"message-line time\">\r\n          Dec, 11\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _pages_add_command_add_command_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/add-command/add-command.component */
    "./src/app/pages/add-command/add-command.component.ts");
    /* harmony import */


    var _pages_forms_pages_stock_stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/forms/pages/stock/stock.component */
    "./src/app/pages/forms/pages/stock/stock.component.ts");
    /* harmony import */


    var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/main-layout/main-layout.component */
    "./src/app/pages/main-layout/main-layout.component.ts");
    /* harmony import */


    var _pages_wefinex_wefinex_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/wefinex/wefinex.component */
    "./src/app/pages/wefinex/wefinex.component.ts");

    var routes = [{
      path: '',
      component: _pages_wefinex_wefinex_component__WEBPACK_IMPORTED_MODULE_6__["WefinexComponent"]
    }, {
      path: '',
      component: _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'details',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | details-details-module */
          [__webpack_require__.e("default~cart-cart-module~details-details-module~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"), __webpack_require__.e("common"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null,
          /*! ./details/details.module */
          "./src/app/details/details.module.ts")).then(function (m) {
            return m.DetailsPageModule;
          });
        }
      }]
    }, {
      path: 'stock',
      component: _pages_forms_pages_stock_stock_component__WEBPACK_IMPORTED_MODULE_4__["StockComponent"]
    }, {
      path: 'forms',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-forms-forms-module */
        "pages-forms-forms-module").then(__webpack_require__.bind(null,
        /*! ./pages/forms/forms.module */
        "./src/app/pages/forms/forms.module.ts")).then(function (m) {
          return m.FormsPageModule;
        });
      }
    }, {
      path: 'add',
      component: _pages_add_command_add_command_component__WEBPACK_IMPORTED_MODULE_3__["AddCommandComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-zorro-antd/i18n */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/locales/vi */
    "./node_modules/@angular/common/locales/vi.js");
    /* harmony import */


    var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/cart-modal/cart-modal.module */
    "./src/app/pages/cart-modal/cart-modal.module.ts");
    /* harmony import */


    var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/main-layout/main-layout.component */
    "./src/app/pages/main-layout/main-layout.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _pages_add_command_add_command_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/add-command/add-command.component */
    "./src/app/pages/add-command/add-command.component.ts");
    /* harmony import */


    var _pages_wefinex_wefinex_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/wefinex/wefinex.component */
    "./src/app/pages/wefinex/wefinex.component.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_15__["registerLocaleData"])(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_16___default.a);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_18__["MainLayoutComponent"], _pages_add_command_add_command_component__WEBPACK_IMPORTED_MODULE_22__["AddCommandComponent"], _pages_wefinex_wefinex_component__WEBPACK_IMPORTED_MODULE_23__["WefinexComponent"]],
      entryComponents: [],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_20__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__["AngularFirestoreModule"], _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_17__["CartModalPageModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        mode: "md"
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_14__["NZ_I18N"],
        useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_14__["vi_VN"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/pages/add-command/add-command.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/add-command/add-command.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddCommandAddCommandComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n}\n\n.custom-font {\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-toolbar ion-title {\n  font-weight: 900;\n}\n\nion-toolbar p {\n  padding: 40px 0 20px 0;\n  font-weight: 700;\n}\n\nion-toolbar .back-circle {\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n  z-index: -1;\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-content {\n  --background: rgba(237, 242, 245, .8);\n}\n\n.back-blob {\n  z-index: -1;\n  width: 600px;\n  position: absolute;\n  left: -50%;\n  top: 0;\n}\n\nform {\n  max-width: 600px;\n  margin: 0 auto;\n  margin-top: 10%;\n}\n\n.wrap-input {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  margin-bottom: 26px;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.12);\n}\n\n.input {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-family: Josefin Sans;\n  font-size: 16px;\n  line-height: 1.2;\n  border: none;\n  outline: none;\n}\n\ninput.input {\n  height: 46px;\n  padding: 0 20px 0 23px;\n}\n\n.container-form-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 42px;\n  background-color: #394752;\n  border-radius: 20px;\n  font-size: 14px;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  padding-top: 5px;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.5);\n}\n\n.form-btn:hover {\n  background-color: #28333b;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.8);\n}\n\n.wrap-input select {\n  padding: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNvbW1hbmQvQzpcXFVzZXJzXFxhbGV4Lmh1eW5oXFxEZXNrdG9wXFxCYW1ib29cXHRlbXBsYXRlXFxnaXRodWJcXGZvb2Qtbmx1XFxmb29kLW5sdS9zcmNcXGFwcFxccGFnZXNcXGFkZC1jb21tYW5kXFxhZGQtY29tbWFuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkLWNvbW1hbmQvYWRkLWNvbW1hbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1REFBdUQ7QUNDM0Q7O0FEQ0U7RUFDRSx1Q0FBdUM7QUNFM0M7O0FEQ0U7RUFDRSx5QkFBYTtBQ0VqQjs7QURIRTtFQUlJLGdCQUFnQjtBQ0d0Qjs7QURQRTtFQVFJLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUNHdEI7O0FEWkU7RUFhSSx1REFBdUQ7RUFDdkQsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQ0dmOztBREVFO0VBQ0UscUNBQWE7QUNDakI7O0FER0U7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtBQ0FWOztBRElFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FDRG5COztBRElFO0VBQ0UsMENBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0RBQWtEO0FDRHREOztBRElFO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUNEakI7O0FESUU7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FDRDFCOztBRElFO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQ0QzQjs7QURJRTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpREFBaUQ7QUNEckQ7O0FESUU7RUFDRSx5QkFBeUI7RUFDekIsaURBQWlEO0FDRHJEOztBREdFO0VBRVEsYUFBYTtBQ0R2QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1jb21tYW5kL2FkZC1jb21tYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTtcclxuICB9XHJcbiAgLmN1c3RvbS1mb250IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZzogNDBweCAwIDIwcHggMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICBcclxuICAgIC5iYWNrLWNpcmNsZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjM3LCAyNDIsIDI0NSwgLjgpO1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrLWJsb2Ige1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNTAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLy8gb3BhY2l0eTogLjI7XHJcbiAgfVxyXG4gIFxyXG4gIGZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxuICBcclxuICAud3JhcC1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LWZhbWlseTogSm9zZWZpbiBTYW5zO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmlucHV0IHtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXItZm9ybS1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0NzUyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzMzNiO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC44KTtcclxuICB9XHJcbiAgLndyYXAtaW5wdXQge1xyXG4gICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgfVxyXG4gIH0iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XG59XG5cbi5jdXN0b20tZm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5pb24tdG9vbGJhciBwIHtcbiAgcGFkZGluZzogNDBweCAwIDIwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaW9uLXRvb2xiYXIgLmJhY2stY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIzNywgMjQyLCAyNDUsIC44KTtcbn1cblxuLmJhY2stYmxvYiB7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogNjAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTUwJTtcbiAgdG9wOiAwO1xufVxuXG5mb3JtIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLndyYXAtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuMTIpO1xufVxuXG4uaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogSm9zZWZpbiBTYW5zO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQuaW5wdXQge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDIzcHg7XG59XG5cbi5jb250YWluZXItZm9ybS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0NzUyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC41KTtcbn1cblxuLmZvcm0tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzMzYjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC44KTtcbn1cblxuLndyYXAtaW5wdXQgc2VsZWN0IHtcbiAgcGFkZGluZzogMTVweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/add-command/add-command.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/add-command/add-command.component.ts ***!
    \************************************************************/

  /*! exports provided: AddCommandComponent */

  /***/
  function srcAppPagesAddCommandAddCommandComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCommandComponent", function () {
      return AddCommandComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_wefinex_command_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/wefinex-command.service */
    "./src/app/services/wefinex-command.service.ts");
    /* harmony import */


    var src_app_services_wefinex_result_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/wefinex-result.service */
    "./src/app/services/wefinex-result.service.ts");

    var AddCommandComponent = /*#__PURE__*/function () {
      function AddCommandComponent(formBuilder, wefinexCommandService, wefinexResultService) {
        _classCallCheck(this, AddCommandComponent);

        this.formBuilder = formBuilder;
        this.wefinexCommandService = wefinexCommandService;
        this.wefinexResultService = wefinexResultService;
      }

      _createClass(AddCommandComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.$time = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return new Date();
          }));
          var d = new Date();
          var hours = String(d.getHours()).padStart(2, '0');
          var minute = String(d.getMinutes()).padStart(2, '0');
          var day = String(d.getDate()).padStart(2, '0');
          var month = String(d.getMonth() + 1).padStart(2, '0');
          var year = d.getFullYear();
          var currentTime = "".concat(day, ":").concat(month, ":").concat(year, " ").concat(hours, ":").concat(minute);
          this.form = this.formBuilder.group({
            action: ['THUA', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price: ['1.0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            id: [currentTime, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            time: [currentTime, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['G', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "processForm",
        value: function processForm(event) {
          event.preventDefault();
          this.wefinexCommandService.add({
            id: "command",
            price: this.form.value.price,
            time: this.form.value.time,
            type: this.form.value.type
          }, "command");
          alert("Push success..");
        }
      }, {
        key: "pushResult",
        value: function pushResult($event) {
          event.preventDefault();
          console.log(this.form.value);
          this.form.value.lastUpdate = new Date();
          this.wefinexResultService.add(this.form.value, this.form.value.id);
          alert("Push success..");
        }
      }]);

      return AddCommandComponent;
    }();

    AddCommandComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_wefinex_command_service__WEBPACK_IMPORTED_MODULE_5__["WefinexCommandService"]
      }, {
        type: src_app_services_wefinex_result_service__WEBPACK_IMPORTED_MODULE_6__["WefinexResultService"]
      }];
    };

    AddCommandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-command',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-command.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-command/add-command.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-command.component.scss */
      "./src/app/pages/add-command/add-command.component.scss"))["default"]]
    })], AddCommandComponent);
    /***/
  },

  /***/
  "./src/app/pages/cart-modal/cart-modal.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/cart-modal/cart-modal.module.ts ***!
    \*******************************************************/

  /*! exports provided: CartModalPageModule */

  /***/
  function srcAppPagesCartModalCartModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartModalPageModule", function () {
      return CartModalPageModule;
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


    var _cart_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart-modal.page */
    "./src/app/pages/cart-modal/cart-modal.page.ts");

    var CartModalPageModule = function CartModalPageModule() {
      _classCallCheck(this, CartModalPageModule);
    };

    CartModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__["CartModalPage"]]
    })], CartModalPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cart-modal/cart-modal.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/cart-modal/cart-modal.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCartModalCartModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-cart {\n  border: 1px solid red;\n  width: 500px;\n  height: 200px;\n  overflow-y: auto;\n}\n\n.container-cart .cart-item {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.container-cart .cart-item .row-item {\n  padding: 8px;\n}\n\n.container-cart .cart-item .row-item .quality-item-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.container-cart .cart-item .row-item .quality-item-row .count-quality {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container-cart .cart-item .row-item .quality-item-row .total-quality {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container-cart .cart-item .cart-delete {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  right: 10px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.container-cart .cart-item .cart-delete .cart-delete-icon {\n  border: 1px solid red;\n}\n\n.l {\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC1tb2RhbC9DOlxcVXNlcnNcXGFsZXguaHV5bmhcXERlc2t0b3BcXEJhbWJvb1xcdGVtcGxhdGVcXGdpdGh1YlxcZm9vZC1ubHVcXGZvb2Qtbmx1L3NyY1xcYXBwXFxwYWdlc1xcY2FydC1tb2RhbFxcY2FydC1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhcnQtbW9kYWwvY2FydC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUNDcEI7O0FETEE7RUFNUSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQ0c5Qjs7QURYQTtFQVVTLFlBQVk7QUNLckI7O0FEZkE7RUFlVyxhQUFhO0VBQ2IsbUJBQWtCO0FDSTdCOztBRHBCQTtFQWtCYSxPQUFPO0VBQ04sYUFBYTtFQUNkLHVCQUF1QjtFQUN4QixtQkFBbUI7QUNNL0I7O0FEM0JBO0VBd0JhLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3hCLG1CQUFtQjtBQ08vQjs7QURsQ0E7RUFvQ1MsYUFBYTtFQUNiLHlCQUF5QjtFQUMxQixtQkFBbUI7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQ0VyQjs7QUQ1Q0E7RUE0Q1cscUJBQXFCO0FDSWhDOztBREVFO0VBQ0cscUJBQXFCO0FDQzFCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC1tb2RhbC9jYXJ0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItY2FydCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC5jYXJ0LWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC5yb3ctaXRlbSB7XHJcbiAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLnF1YWxpdHktaXRlbS1yb3cge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgICAgLmNvdW50LXF1YWxpdHkge1xyXG4gICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG90YWwtcXVhbGl0eSB7XHJcbiAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAudGV4dC10b3RhbCB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgLmNhcnQtZGVsZXRlIHtcclxuICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC5jYXJ0LWRlbGV0ZS1pY29uIHtcclxuICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgfVxyXG4gIH1cclxuICBcclxuICAubCB7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH0iLCIuY29udGFpbmVyLWNhcnQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNvbnRhaW5lci1jYXJ0IC5jYXJ0LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250YWluZXItY2FydCAuY2FydC1pdGVtIC5yb3ctaXRlbSB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNvbnRhaW5lci1jYXJ0IC5jYXJ0LWl0ZW0gLnJvdy1pdGVtIC5xdWFsaXR5LWl0ZW0tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNvbnRhaW5lci1jYXJ0IC5jYXJ0LWl0ZW0gLnJvdy1pdGVtIC5xdWFsaXR5LWl0ZW0tcm93IC5jb3VudC1xdWFsaXR5IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItY2FydCAuY2FydC1pdGVtIC5yb3ctaXRlbSAucXVhbGl0eS1pdGVtLXJvdyAudG90YWwtcXVhbGl0eSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWNhcnQgLmNhcnQtaXRlbSAuY2FydC1kZWxldGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWNhcnQgLmNhcnQtaXRlbSAuY2FydC1kZWxldGUgLmNhcnQtZGVsZXRlLWljb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/cart-modal/cart-modal.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/cart-modal/cart-modal.page.ts ***!
    \*****************************************************/

  /*! exports provided: CartModalPage */

  /***/
  function srcAppPagesCartModalCartModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartModalPage", function () {
      return CartModalPage;
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


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var CartModalPage = /*#__PURE__*/function () {
      function CartModalPage(cartService, modalCtrl, alertCtrl) {
        _classCallCheck(this, CartModalPage);

        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.cart = [];
      }

      _createClass(CartModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cart = this.cartService.getCart();
        }
      }, {
        key: "decreaseCartItem",
        value: function decreaseCartItem(product) {
          this.cartService.decreaseProduct(product.id);
        }
      }, {
        key: "increaseCartItem",
        value: function increaseCartItem(product) {
          this.cartService.addProduct(product);
        }
      }, {
        key: "removeCartItem",
        value: function removeCartItem(productId) {
          this.cartService.removeProduct(productId);
        }
      }, {
        key: "getTotal",
        value: function getTotal() {
          return this.cart.reduce(function (i, j) {
            return i + j.price * j.amount;
          }, 0);
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "checkout",
        value: function checkout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Thanks for your Order!',
                      message: 'We will deliver your food as soon as possible',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    alert.present().then(function () {
                      _this.modalCtrl.dismiss();
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CartModalPage;
    }();

    CartModalPage.ctorParameters = function () {
      return [{
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    CartModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cart-modal.page.scss */
      "./src/app/pages/cart-modal/cart-modal.page.scss"))["default"]]
    })], CartModalPage);
    /***/
  },

  /***/
  "./src/app/pages/forms/pages/stock/stock.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/forms/pages/stock/stock.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFormsPagesStockStockComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap\");\n@charset \"UTF-8\";\n::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-bg);\n  border-radius: 10px;\n}\n* {\n  box-sizing: border-box;\n}\nhtml, body {\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n}\nbody {\n  font-family: 'DM Sans', sans-serif;\n  overflow: hidden;\n}\nbutton, a {\n  cursor: pointer;\n}\n.app-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: var(--app-container);\n  transition: .2s;\n}\n.app-content {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  padding: 16px 24px 24px 0;\n}\n.app-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 16px 24px;\n  position: relative;\n}\n.app-header-left, .app-header-right {\n  display: flex;\n  align-items: center;\n}\n.app-header-left {\n  flex-grow: 1;\n}\n.app-header-right button {\n  margin-left: 10px;\n}\n.app-icon {\n  width: 26px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: var(--main-color);\n  position: relative;\n}\n.app-icon:before, .app-icon:after {\n  content: '';\n  position: absolute;\n  width: 12px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: var(--main-color);\n  left: 50%;\n  transform: translatex(-50%);\n}\n.app-icon:before {\n  top: -6px;\n}\n.app-icon:after {\n  bottom: -6px;\n}\n.app-name {\n  color: var(--main-color);\n  margin: 0;\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 700;\n  margin: 0 32px;\n}\n.mode-switch {\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  color: var(--main-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.search-wrapper {\n  border-radius: 20px;\n  background-color: var(--search-area-bg);\n  padding-right: 12px;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 480px;\n  color: var(--light-font);\n  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);\n  overflow: hidden;\n}\n.dark .search-wrapper {\n  box-shadow: none;\n}\n.search-input {\n  border: none;\n  flex: 1;\n  outline: none;\n  height: 100%;\n  padding: 0 20px;\n  font-size: 16px;\n  background-color: var(--search-area-bg);\n  color: var(--main-color);\n}\n.search-input:placeholder {\n  color: var(--main-color);\n  opacity: .6;\n}\n.add-btn {\n  color: #fff;\n  background-color: var(--button-bg);\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notification-btn {\n  color: var(--main-color);\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.profile-btn {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  border-left: 2px solid #ddd;\n}\n.profile-btn img {\n  width: 32px;\n  height: 32px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-right: 4px;\n}\n.profile-btn span {\n  color: var(--main-color);\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n}\n.page-content  {\n  flex: 1;\n  width: 100%;\n}\n.app-sidebar {\n  padding: 40px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.app-sidebar-link {\n  color: var(--main-color);\n  color: var(--link-color);\n  margin: 16px 0;\n  transition: .2s;\n  border-radius: 50%;\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.app-sidebar-link:hover {\n  background-color: var(--link-color-hover);\n  color: var(--link-color-active);\n}\n.app-sidebar-link.active {\n  background-color: var(--link-color-active-bg);\n  color: var(--link-color-active);\n}\n.projects-section {\n  flex: 2;\n  background-color: var(--projects-section);\n  border-radius: 32px;\n  padding: 32px 32px 0 32px;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.projects-section-line {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n}\n.projects-section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  color: var(--main-color);\n}\n.projects-section-header p {\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  opacity: .9;\n  margin: 0;\n  color: var(--main-color);\n}\n.projects-section-header .time {\n  font-size: 20px;\n}\n.projects-status {\n  display: flex;\n}\n.item-status {\n  display: flex;\n  flex-direction: column;\n  margin-right: 16px;\n}\n.item-status:not(:last-child) .status-type:after {\n  content: '';\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translatey(-50%);\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  border: 1px solid var(--secondary-color);\n}\n.status-number {\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  color: var(--main-color);\n}\n.status-type {\n  position: relative;\n  padding-right: 24px;\n  color: var(--secondary-color);\n}\n.view-actions {\n  display: flex;\n  align-items: center;\n}\n.view-btn {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px;\n  border-radius: 4px;\n  background-color: transparent;\n  border: none;\n  color: var(--main-color);\n  margin-left: 8px;\n  transition: .2s;\n}\n.view-btn.active {\n  background-color: var(--link-color-active-bg);\n  color: var(--link-color-active);\n}\n.view-btn:not(.active):hover {\n  background-color: var(--link-color-hover);\n  color: var(--link-color-active);\n}\n.messages-section {\n  flex-shrink: 0;\n  padding-bottom: 32px;\n  background-color: var(--projects-section);\n  margin-left: 24px;\n  flex: 1;\n  width: 100%;\n  border-radius: 30px;\n  position: relative;\n  overflow: auto;\n  transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);\n}\n.messages-section .messages-close {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 3;\n  border: none;\n  background-color: transparent;\n  color: var(--main-color);\n  display: none;\n}\n.messages-section.show {\n  transform: translateX(0);\n  opacity: 1;\n  margin-left: 0;\n}\n.messages-section .projects-section-header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  padding: 32px 24px 0 24px;\n  background-color: var(--projects-section);\n}\n.message-box {\n  border-top: 1px solid var(--message-box-border);\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n}\n.message-box:hover {\n  background-color: var(--message-box-hover);\n  border-top-color: var(--link-color-hover);\n}\n.message-box:hover + .message-box {\n  border-top-color: var(--link-color-hover);\n}\n.message-box img {\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 40px;\n  height: 40px;\n}\n.message-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.message-header .name {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  color: var(--main-color);\n  margin: 0;\n}\n.message-content {\n  padding-left: 16px;\n  width: 100%;\n}\n.star-checkbox input {\n  opacity: 0;\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.star-checkbox label {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.dark .star-checkbox {\n  color: var(--secondary-color);\n}\n.dark .star-checkbox input:checked + label {\n  color: var(--star);\n}\n.star-checkbox input:checked + label svg {\n  fill: var(--star);\n  transition: .2s;\n}\n.message-line {\n  font-size: 14px;\n  line-height: 20px;\n  margin: 8px 0;\n  color: var(--secondary-color);\n  opacity: .7;\n}\n.message-line.time {\n  text-align: right;\n  margin-bottom: 0;\n}\n.project-boxes {\n  margin: 0 -8px;\n  overflow-y: auto;\n}\n.project-boxes.jsGridView {\n  display: flex;\n  flex-wrap: wrap;\n}\n.project-boxes.jsGridView .project-box-wrapper {\n  width: 33.3%;\n}\n.project-boxes.jsListView .project-box {\n  display: flex;\n  border-radius: 10px;\n  position: relative;\n}\n.project-boxes.jsListView .project-box > * {\n  margin-right: 24px;\n}\n.project-boxes.jsListView .more-wrapper {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n.project-boxes.jsListView .project-box-content-header {\n  order: 1;\n  max-width: 120px;\n}\n.project-boxes.jsListView .project-box-header {\n  order: 2;\n}\n.project-boxes.jsListView .project-box-footer {\n  order: 3;\n  padding-top: 0;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.project-boxes.jsListView .project-box-footer:after {\n  display: none;\n}\n.project-boxes.jsListView .participants {\n  margin-bottom: 8px;\n}\n.project-boxes.jsListView .project-box-content-header p {\n  text-align: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.project-boxes.jsListView .project-box-header > span {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  font-size: 12px;\n}\n.project-boxes.jsListView .box-progress-wrapper {\n  order: 3;\n  flex: 1;\n}\n.project-box {\n  --main-color-card: #dbf6fd;\n  border-radius: 30px;\n  padding: 16px;\n  background-color: var(--main-color-card);\n}\n.project-box-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  color: var(--main-color);\n}\n.project-box-header span {\n  color: #4A4A4A;\n  opacity: .7;\n  font-size: 14px;\n  line-height: 16px;\n}\n.project-box-content-header {\n  text-align: center;\n  margin-bottom: 16px;\n}\n.project-box-content-header p {\n  margin: 0;\n}\n.project-box-wrapper {\n  padding: 8px;\n  transition: .2s;\n}\n.project-btn-more {\n  padding: 0;\n  height: 14px;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  background-color: transparent;\n  border: none;\n  flex-shrink: 0;\n  /*&:after, &:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background-color: var(--main-color);\r\n    opacity: .8;\r\n    left: 50%;\r\n    transform: translatex(-50%);\r\n  }\r\n  \r\n  &:before { top: 0;}\r\n  &:after { bottom: 0; }*/\n}\n.more-wrapper {\n  position: relative;\n}\n.box-content-header {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  opacity: .7;\n}\n.box-content-subheader {\n  font-size: 14px;\n  line-height: 24px;\n  opacity: .7;\n}\n.box-progress {\n  display: block;\n  height: 4px;\n  border-radius: 6px;\n}\n.box-progress-bar {\n  width: 100%;\n  height: 4px;\n  border-radius: 6px;\n  overflow: hidden;\n  background-color: #fff;\n  margin: 8px 0;\n}\n.box-progress-header {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 16px;\n  margin: 0;\n}\n.box-progress-percentage {\n  text-align: right;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 16px;\n}\n.project-box-footer {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 16px;\n  position: relative;\n}\n.project-box-footer:after {\n  content: '';\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.6);\n  width: calc(100% + 32px);\n  top: 0;\n  left: -16px;\n  height: 1px;\n}\n.participants {\n  display: flex;\n  align-items: center;\n}\n.participants img {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.participants img:not(:first-child) {\n  margin-left: -8px;\n}\n.add-participant {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-left: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n.days-left {\n  background-color: rgba(255, 255, 255, 0.6);\n  font-size: 12px;\n  border-radius: 20px;\n  flex-shrink: 0;\n  padding: 6px 16px;\n  font-weight: 700;\n}\n.mode-switch.active .moon {\n  fill: var(--main-color);\n}\n.messages-btn {\n  border-radius: 4px 0 0 4px;\n  position: absolute;\n  right: 0;\n  top: 58px;\n  background-color: var(--message-btn);\n  border: none;\n  color: var(--main-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px;\n  display: none;\n}\n@media screen and (max-width: 980px) {\n  .project-boxes.jsGridView .project-box-wrapper {\n    width: 50%;\n  }\n  .status-number, .status-type {\n    font-size: 14px;\n  }\n  .status-type:after {\n    width: 4px;\n    height: 4px;\n  }\n  .item-status {\n    margin-right: 0;\n  }\n}\n@media screen and (max-width: 880px) {\n  .messages-section {\n    transform: translateX(100%);\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    z-index: 2;\n    height: 100%;\n    width: 100%;\n  }\n  .messages-section .messages-close {\n    display: block;\n  }\n  .messages-btn {\n    display: flex;\n  }\n}\n@media screen and (max-width: 720px) {\n  .app-name, .profile-btn span {\n    display: none;\n  }\n  .add-btn, .notification-btn, .mode-switch {\n    width: 20px;\n    height: 20px;\n  }\n  .add-btn svg, .notification-btn svg, .mode-switch svg {\n    width: 16px;\n    height: 16px;\n  }\n  .app-header-right button {\n    margin-left: 4px;\n  }\n}\n@media screen and (max-width: 520px) {\n  .projects-section {\n    overflow: auto;\n  }\n  .project-boxes {\n    overflow-y: visible;\n  }\n  .app-sidebar, .app-icon {\n    display: none;\n  }\n  .app-content {\n    padding: 16px 12px 24px 12px;\n  }\n  .status-number, .status-type {\n    font-size: 10px;\n  }\n  .view-btn {\n    width: 24px;\n    height: 24px;\n  }\n  .app-header {\n    padding: 16px 10px;\n  }\n  .search-input {\n    max-width: 120px;\n  }\n  .project-boxes.jsGridView .project-box-wrapper {\n    width: 100%;\n  }\n  .projects-section {\n    padding: 24px 16px 0 16px;\n  }\n  .profile-btn img {\n    width: 24px;\n    height: 24px;\n  }\n  .app-header {\n    padding: 10px;\n  }\n  .projects-section-header p,\n  .projects-section-header .time {\n    font-size: 18px;\n  }\n  .status-type {\n    padding-right: 4px;\n  }\n  .status-type:after {\n    display: none;\n  }\n  .search-input {\n    font-size: 14px;\n  }\n  .messages-btn {\n    top: 48px;\n  }\n  .box-content-header {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .box-content-subheader {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .project-boxes.jsListView .project-box-header > span {\n    font-size: 10px;\n  }\n  .box-progress-header {\n    font-size: 12px;\n  }\n  .box-progress-percentage {\n    font-size: 10px;\n  }\n  .days-left {\n    font-size: 8px;\n    padding: 6px 6px;\n    text-align: center;\n  }\n  .project-boxes.jsListView .project-box > * {\n    margin-right: 10px;\n  }\n  .project-boxes.jsListView .more-wrapper {\n    right: 2px;\n    top: 10px;\n  }\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybXMvcGFnZXMvc3RvY2svQzpcXFVzZXJzXFxhbGV4Lmh1eW5oXFxEZXNrdG9wXFxCYW1ib29cXHRlbXBsYXRlXFxnaXRodWJcXGZvb2Qtbmx1XFxmb29kLW5sdS9zcmNcXGFwcFxccGFnZXNcXGZvcm1zXFxwYWdlc1xcc3RvY2tcXHN0b2NrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3Jtcy9wYWdlcy9zdG9jay9zdG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUZBQVk7QUNBWixnQkFBZ0I7QURFaEI7RUFDQyxVQUFVO0VBQ1YsbUJBQW1CO0FDQ3BCO0FERUE7RUFDQywrQkFBK0I7RUFDL0IsbUJBQW1CO0FDQ3BCO0FEQ0E7RUFDRSxzQkFBc0I7QUNFeEI7QURFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztBQ0NYO0FERUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FDQ2xCO0FERUE7RUFDRSxlQUFlO0FDQ2pCO0FER0U7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGVBQWU7QUNBbkI7QURHRTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQ0E3QjtBREdFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUNBdEI7QURFSTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUNDekI7QURFSTtFQUFTLFlBQVk7QUNFekI7QURBSTtFQUNFLGlCQUFpQjtBQ0d2QjtBRENFO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQ0V0QjtBRFBHO0VBUUcsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNY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RmxDO0VES0E7SUFBZ0IsYUFBYTtFQ0Y3QjtBQUNGO0FESUE7RUFDRTtJQUErQixhQUFhO0VDQTVDO0VERUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQ0FkO0VERkE7SUFLSSxXQUFXO0lBQ1gsWUFBWTtFQ0FoQjtFRElBO0lBQ0UsZ0JBQWdCO0VDRmxCO0FBQ0Y7QURLQTtFQUNFO0lBQW9CLGNBQWM7RUNEbEM7RURFQTtJQUFpQixtQkFBbUI7RUNDcEM7RURDQTtJQUEwQixhQUFhO0VDRXZDO0VEQUE7SUFBZSw0QkFBNEI7RUNHM0M7RUREQTtJQUNFLGVBQWU7RUNHakI7RURBQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VDRWQ7RURDQTtJQUNFLGtCQUFrQjtFQ0NwQjtFREVBO0lBQ0UsZ0JBQWdCO0VDQWxCO0VER0E7SUFDRSxXQUFXO0VDRGI7RURJQTtJQUNFLHlCQUF5QjtFQ0YzQjtFREtBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUNIZDtFRE1BO0lBQ0UsYUFBYTtFQ0pmO0VET0E7O0lBRUUsZUFBZTtFQ0xqQjtFRFFBO0lBQ0Usa0JBQWtCO0VDTnBCO0VES0E7SUFJSSxhQUFhO0VDTmpCO0VEVUE7SUFDRSxlQUFlO0VDUmpCO0VEV0E7SUFBZ0IsU0FBUztFQ1J6QjtFRFVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQ1JuQjtFRFdBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQ1RuQjtFRFlBO0lBQ0UsZUFBZTtFQ1ZqQjtFRGFBO0lBQ0UsZUFBZTtFQ1hqQjtFRGNBO0lBQ0UsZUFBZTtFQ1pqQjtFRGVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7RUNicEI7RURnQkE7SUFDRSxrQkFBa0I7RUNkcEI7RURpQkE7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQ2ZYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3Jtcy9wYWdlcy9zdG9jay9zdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PURNK1NhbnM6NDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiB3aWR0aDogNnB4O1xyXG4gYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGxiYXItYmcpO1xyXG4gYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYnV0dG9uLCBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcHAge1xyXG4gICYtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29udGFpbmVyKTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbiAgXHJcbiAgJi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4IDI0cHggMDtcclxuICB9XHJcbiAgXHJcbiAgJi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgJi1sZWZ0LCAmLXJpZ2h0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi1sZWZ0IHsgZmxleC1ncm93OiAxOyB9IFxyXG4gICAgXHJcbiAgICAmLXJpZ2h0IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi1pY29uIHtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmJlZm9yZSB7IHRvcDogLTZweDsgfVxyXG4gICAgJjphZnRlciB7IGJvdHRvbTogLTZweDsgfVxyXG4gIH1cclxuICBcclxuICAmLW5hbWUge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAwIDMycHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kZS1zd2l0Y2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtd3JhcHBlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYXJlYS1iZyk7XHJcbiAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodC1mb250KTtcclxuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDEzNiwxNDgsMTcxLC4yKSwwIDI0cHggMjBweCAtMjRweCByZ2JhKDcxLDgyLDEwNywuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAuZGFyayAmIHsgYm94LXNoYWRvdzogbm9uZTsgfVxyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZmxleDogMTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1hcmVhLWJnKTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgXHJcbiAgJjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICB9XHJcbn1cclxuXHJcbi5hZGQtYnRuIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWJ0biB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWJ0biB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMTJweDtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZGQ7XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS1jb250ZW50wqB7XHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFwcC1zaWRlYmFyIHtcclxuICBwYWRkaW5nOiA0MHB4IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgJi1saW5rIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcclxuICAgICAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlLWJnKTtcclxuICAgICAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1zZWN0aW9uIHtcclxuICBmbGV4OiAyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RzLXNlY3Rpb24pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgXHJcbiAgJi1saW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gICYtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG9wYWNpdHk6IC45O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpbWUge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdHMtc3RhdHVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaXRlbS1zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgXHJcbiAgJjpub3QoOmxhc3QtY2hpbGQpIC5zdGF0dXMtdHlwZTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtNTAlKTtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzLW51bWJlciB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4uc3RhdHVzLXR5cGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4udmlldy1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udmlldy1idG4ge1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgdHJhbnNpdGlvbjogLjJzO1xyXG4gIFxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlLWJnKTtcclxuICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1lc3NhZ2VzLXNlY3Rpb24ge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RzLXNlY3Rpb24pO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjU2LCAxKTtcclxuICBcclxuICAubWVzc2FnZXMtY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAmLnNob3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHggMCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXByb2plY3RzLXNlY3Rpb24pO1xyXG4gIH1cclxufVxyXG5cclxuLm1lc3NhZ2UtYm94IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbWVzc2FnZS1ib3gtYm9yZGVyKTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZXNzYWdlLWJveC1ob3Zlcik7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcclxuICAgIFxyXG4gICAgKyAubWVzc2FnZS1ib3gge1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVzc2FnZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVzc2FnZS1jb250ZW50IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGFyLWNoZWNrYm94IHtcclxuICBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmRhcmsgJiB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1zdGFyKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHN2ZyB7XHJcbiAgICBmaWxsOiB2YXIoLS1zdGFyKTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlLWxpbmUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG9wYWNpdHk6IC43O1xyXG4gIFxyXG4gICYudGltZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1ib3hlcyB7XHJcbiAgbWFyZ2luOiAwIC04cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBcclxuICAmLmpzR3JpZFZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIFxyXG4gICAgLnByb2plY3QtYm94LXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuanNMaXN0VmlldyB7XHJcbiAgICAucHJvamVjdC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgID4gKiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tb3JlLXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICB0b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC1jb250ZW50LWhlYWRlciB7XHJcbiAgICAgIG9yZGVyOiAxO1xyXG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1ib3gtaGVhZGVyIHtcclxuICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC1mb290ZXIge1xyXG4gICAgICBvcmRlcjogMztcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QtYm94LWZvb3RlcjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wYXJ0aWNpcGFudHMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC1jb250ZW50LWhlYWRlciBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC1oZWFkZXIgPiBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDE2cHg7XHJcbiAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJveC1wcm9ncmVzcy13cmFwcGVyIHtcclxuICAgICAgb3JkZXI6IDM7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1ib3gge1xyXG4gIC0tbWFpbi1jb2xvci1jYXJkOiAjZGJmNmZkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWNhcmQpO1xyXG4gIFxyXG4gICYtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIFxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjNEE0QTRBO1xyXG4gICAgICBvcGFjaXR5OiAuNztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi1jb250ZW50LWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgXHJcbiAgICBwIHsgbWFyZ2luOiAwOyB9XHJcbiAgfVxyXG4gIFxyXG4gICYtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1idG4tbW9yZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgXHJcbiAgLyomOmFmdGVyLCAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6YmVmb3JlIHsgdG9wOiAwO31cclxuICAmOmFmdGVyIHsgYm90dG9tOiAwOyB9Ki9cclxufVxyXG5cclxuLm1vcmUtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYm94LWNvbnRlbnQtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBvcGFjaXR5OiAuNztcclxufVxyXG5cclxuLmJveC1jb250ZW50LXN1YmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG9wYWNpdHk6IC43O1xyXG59XHJcblxyXG4uYm94LXByb2dyZXNzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgXHJcbiAgJi1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcbiAgXHJcbiAgJi1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAmLXdyYXBwZXIge1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gICYtcGVyY2VudGFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJveC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpOztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IC0xNnB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFydGljaXBhbnRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgXHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkLXBhcnRpY2lwYW50IHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmRheXMtbGVmdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5tb2RlLXN3aXRjaC5hY3RpdmUgLm1vb24ge1xyXG4gIGZpbGw6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4ubWVzc2FnZXMtYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1OHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lc3NhZ2UtYnRuKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAucHJvamVjdC1ib3hlcy5qc0dyaWRWaWV3IC5wcm9qZWN0LWJveC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMtbnVtYmVyLCAuc3RhdHVzLXR5cGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzLXR5cGU6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gIH1cclxuICBcclxuICAuaXRlbS1zdGF0dXMgeyBtYXJnaW4tcmlnaHQ6IDA7IH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcclxuICAubWVzc2FnZXMtc2VjdGlvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICAubWVzc2FnZXMtY2xvc2UgeyBkaXNwbGF5OiBibG9jazsgfVxyXG4gIH1cclxuICBcclxuICAubWVzc2FnZXMtYnRuIHsgZGlzcGxheTogZmxleDsgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gIC5hcHAtbmFtZSwgLnByb2ZpbGUtYnRuIHNwYW4geyBkaXNwbGF5OiBub25lOyB9XHJcbiAgXHJcbiAgLmFkZC1idG4sIC5ub3RpZmljYXRpb24tYnRuLCAubW9kZS1zd2l0Y2gge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBcclxuICAgIHN2ZyB7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtaGVhZGVyLXJpZ2h0IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAucHJvamVjdHMtc2VjdGlvbiB7IG92ZXJmbG93OiBhdXRvOyB9XHJcbiAgLnByb2plY3QtYm94ZXMgeyBvdmVyZmxvdy15OiB2aXNpYmxlOyB9XHJcbiAgXHJcbiAgLmFwcC1zaWRlYmFyLCAuYXBwLWljb24geyBkaXNwbGF5OiBub25lOyB9XHJcbiAgXHJcbiAgLmFwcC1jb250ZW50IHsgcGFkZGluZzogMTZweCAxMnB4IDI0cHggMTJweDt9XHJcbiAgXHJcbiAgLnN0YXR1cy1udW1iZXIsIC5zdGF0dXMtdHlwZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC52aWV3LWJ0biB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTZweCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWlucHV0IHtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0LWJveGVzLmpzR3JpZFZpZXcgLnByb2plY3QtYm94LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0cy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweCAwIDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLWJ0biBpbWcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciBwLFxyXG4gIC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciAudGltZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cy10eXBlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAubWVzc2FnZXMtYnRuIHsgdG9wOiA0OHB4OyB9XHJcblxyXG4gIC5ib3gtY29udGVudC1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuYm94LWNvbnRlbnQtc3ViaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtaGVhZGVyID4gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYm94LXByb2dyZXNzLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuYm94LXByb2dyZXNzLXBlcmNlbnRhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRheXMtbGVmdCB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHBhZGRpbmc6IDZweCA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveCA+ICoge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAubW9yZS13cmFwcGVyIHtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgfVxyXG59IiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RE0rU2Fuczo0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhci1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmJ1dHRvbiwgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFwcC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29udGFpbmVyKTtcbiAgdHJhbnNpdGlvbjogLjJzO1xufVxuXG4uYXBwLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDE2cHggMjRweCAyNHB4IDA7XG59XG5cbi5hcHAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcHAtaGVhZGVyLWxlZnQsIC5hcHAtaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwcC1oZWFkZXItbGVmdCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmFwcC1oZWFkZXItcmlnaHQgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5hcHAtaWNvbiB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXBwLWljb246YmVmb3JlLCAuYXBwLWljb246YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xufVxuXG4uYXBwLWljb246YmVmb3JlIHtcbiAgdG9wOiAtNnB4O1xufVxuXG4uYXBwLWljb246YWZ0ZXIge1xuICBib3R0b206IC02cHg7XG59XG5cbi5hcHAtbmFtZSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDAgMzJweDtcbn1cblxuLm1vZGUtc3dpdGNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWFyZWEtYmcpO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1mb250KTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgxMzYsIDE0OCwgMTcxLCAwLjIpLCAwIDI0cHggMjBweCAtMjRweCByZ2JhKDcxLCA4MiwgMTA3LCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGFyayAuc2VhcmNoLXdyYXBwZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBmbGV4OiAxO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYXJlYS1iZyk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnNlYXJjaC1pbnB1dDpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgb3BhY2l0eTogLjY7XG59XG5cbi5hZGQtYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5vdGlmaWNhdGlvbi1idG4ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWJ0biB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xufVxuXG4ucHJvZmlsZS1idG4gaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5wcm9maWxlLWJ0biBzcGFuIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucGFnZS1jb250ZW50wqAge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFwcC1zaWRlYmFyIHtcbiAgcGFkZGluZzogNDBweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXBwLXNpZGViYXItbGluayB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xuICBtYXJnaW46IDE2cHggMDtcbiAgdHJhbnNpdGlvbjogLjJzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwcC1zaWRlYmFyLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcbn1cblxuLmFwcC1zaWRlYmFyLWxpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUtYmcpO1xuICBjb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUpO1xufVxuXG4ucHJvamVjdHMtc2VjdGlvbiB7XG4gIGZsZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RzLXNlY3Rpb24pO1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0cy1zZWN0aW9uLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuXG4ucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnByb2plY3RzLXNlY3Rpb24taGVhZGVyIHAge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvcGFjaXR5OiAuOTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciAudGltZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByb2plY3RzLXN0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pdGVtLXN0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLml0ZW0tc3RhdHVzOm5vdCg6bGFzdC1jaGlsZCkgLnN0YXR1cy10eXBlOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtNTAlKTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnN0YXR1cy1udW1iZXIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5zdGF0dXMtdHlwZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi52aWV3LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udmlldy1idG4ge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgdHJhbnNpdGlvbjogLjJzO1xufVxuXG4udmlldy1idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUtYmcpO1xuICBjb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUpO1xufVxuXG4udmlldy1idG46bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1ob3Zlcik7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XG59XG5cbi5tZXNzYWdlcy1zZWN0aW9uIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0cy1zZWN0aW9uKTtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuNTYsIDEpO1xufVxuXG4ubWVzc2FnZXMtc2VjdGlvbiAubWVzc2FnZXMtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG4gIHotaW5kZXg6IDM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lc3NhZ2VzLXNlY3Rpb24uc2hvdyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5tZXNzYWdlcy1zZWN0aW9uIC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMzJweCAyNHB4IDAgMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdHMtc2VjdGlvbik7XG59XG5cbi5tZXNzYWdlLWJveCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1tZXNzYWdlLWJveC1ib3JkZXIpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZXNzYWdlLWJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lc3NhZ2UtYm94LWhvdmVyKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1ob3Zlcik7XG59XG5cbi5tZXNzYWdlLWJveDpob3ZlciArIC5tZXNzYWdlLWJveCB7XG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWxpbmstY29sb3ItaG92ZXIpO1xufVxuXG4ubWVzc2FnZS1ib3ggaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm1lc3NhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lc3NhZ2UtaGVhZGVyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBtYXJnaW46IDA7XG59XG5cbi5tZXNzYWdlLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3Rhci1jaGVja2JveCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnN0YXItY2hlY2tib3ggbGFiZWwge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGFyayAuc3Rhci1jaGVja2JveCB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4uZGFyayAuc3Rhci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICBjb2xvcjogdmFyKC0tc3Rhcik7XG59XG5cbi5zdGFyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyBsYWJlbCBzdmcge1xuICBmaWxsOiB2YXIoLS1zdGFyKTtcbiAgdHJhbnNpdGlvbjogLjJzO1xufVxuXG4ubWVzc2FnZS1saW5lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIG9wYWNpdHk6IC43O1xufVxuXG4ubWVzc2FnZS1saW5lLnRpbWUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnByb2plY3QtYm94ZXMge1xuICBtYXJnaW46IDAgLThweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnByb2plY3QtYm94ZXMuanNHcmlkVmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnByb2plY3QtYm94ZXMuanNHcmlkVmlldyAucHJvamVjdC1ib3gtd3JhcHBlciB7XG4gIHdpZHRoOiAzMy4zJTtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94ID4gKiB7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAubW9yZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgdG9wOiAxNnB4O1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveC1jb250ZW50LWhlYWRlciB7XG4gIG9yZGVyOiAxO1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveC1oZWFkZXIge1xuICBvcmRlcjogMjtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtZm9vdGVyIHtcbiAgb3JkZXI6IDM7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWZvb3RlcjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnBhcnRpY2lwYW50cyB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtY29udGVudC1oZWFkZXIgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveC1oZWFkZXIgPiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE2cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAuYm94LXByb2dyZXNzLXdyYXBwZXIge1xuICBvcmRlcjogMztcbiAgZmxleDogMTtcbn1cblxuLnByb2plY3QtYm94IHtcbiAgLS1tYWluLWNvbG9yLWNhcmQ6ICNkYmY2ZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItY2FyZCk7XG59XG5cbi5wcm9qZWN0LWJveC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnByb2plY3QtYm94LWhlYWRlciBzcGFuIHtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIG9wYWNpdHk6IC43O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ucHJvamVjdC1ib3gtY29udGVudC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5wcm9qZWN0LWJveC1jb250ZW50LWhlYWRlciBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJvamVjdC1ib3gtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDhweDtcbiAgdHJhbnNpdGlvbjogLjJzO1xufVxuXG4ucHJvamVjdC1idG4tbW9yZSB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBmbGV4LXNocmluazogMDtcbiAgLyomOmFmdGVyLCAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6YmVmb3JlIHsgdG9wOiAwO31cclxuICAmOmFmdGVyIHsgYm90dG9tOiAwOyB9Ki9cbn1cblxuLm1vcmUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJveC1jb250ZW50LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG9wYWNpdHk6IC43O1xufVxuXG4uYm94LWNvbnRlbnQtc3ViaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgb3BhY2l0eTogLjc7XG59XG5cbi5ib3gtcHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmJveC1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLmJveC1wcm9ncmVzcy1oZWFkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5ib3gtcHJvZ3Jlc3MtcGVyY2VudGFnZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5wcm9qZWN0LWJveC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0LWJveC1mb290ZXI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMTZweDtcbiAgaGVpZ2h0OiAxcHg7XG59XG5cbi5wYXJ0aWNpcGFudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFydGljaXBhbnRzIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wYXJ0aWNpcGFudHMgaW1nOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG5cbi5hZGQtcGFydGljaXBhbnQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRheXMtbGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tb2RlLXN3aXRjaC5hY3RpdmUgLm1vb24ge1xuICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLm1lc3NhZ2VzLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDU4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lc3NhZ2UtYnRuKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gIC5wcm9qZWN0LWJveGVzLmpzR3JpZFZpZXcgLnByb2plY3QtYm94LXdyYXBwZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnN0YXR1cy1udW1iZXIsIC5zdGF0dXMtdHlwZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5zdGF0dXMtdHlwZTphZnRlciB7XG4gICAgd2lkdGg6IDRweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgfVxuICAuaXRlbS1zdGF0dXMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuICAubWVzc2FnZXMtc2VjdGlvbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWVzc2FnZXMtc2VjdGlvbiAubWVzc2FnZXMtY2xvc2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tZXNzYWdlcy1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmFwcC1uYW1lLCAucHJvZmlsZS1idG4gc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWRkLWJ0biwgLm5vdGlmaWNhdGlvbi1idG4sIC5tb2RlLXN3aXRjaCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5hZGQtYnRuIHN2ZywgLm5vdGlmaWNhdGlvbi1idG4gc3ZnLCAubW9kZS1zd2l0Y2ggc3ZnIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbiAgLmFwcC1oZWFkZXItcmlnaHQgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIC5wcm9qZWN0cy1zZWN0aW9uIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICAucHJvamVjdC1ib3hlcyB7XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgfVxuICAuYXBwLXNpZGViYXIsIC5hcHAtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYXBwLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE2cHggMTJweCAyNHB4IDEycHg7XG4gIH1cbiAgLnN0YXR1cy1udW1iZXIsIC5zdGF0dXMtdHlwZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC52aWV3LWJ0biB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIC5hcHAtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XG4gIH1cbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgfVxuICAucHJvamVjdC1ib3hlcy5qc0dyaWRWaWV3IC5wcm9qZWN0LWJveC13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvamVjdHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjRweCAxNnB4IDAgMTZweDtcbiAgfVxuICAucHJvZmlsZS1idG4gaW1nIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbiAgLmFwcC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLnByb2plY3RzLXNlY3Rpb24taGVhZGVyIHAsXG4gIC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciAudGltZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5zdGF0dXMtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xuICB9XG4gIC5zdGF0dXMtdHlwZTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc2VhcmNoLWlucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLm1lc3NhZ2VzLWJ0biB7XG4gICAgdG9wOiA0OHB4O1xuICB9XG4gIC5ib3gtY29udGVudC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxuICAuYm94LWNvbnRlbnQtc3ViaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtaGVhZGVyID4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5ib3gtcHJvZ3Jlc3MtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmJveC1wcm9ncmVzcy1wZXJjZW50YWdlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmRheXMtbGVmdCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgcGFkZGluZzogNnB4IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3ggPiAqIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAubW9yZS13cmFwcGVyIHtcbiAgICByaWdodDogMnB4O1xuICAgIHRvcDogMTBweDtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/forms/pages/stock/stock.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/forms/pages/stock/stock.component.ts ***!
    \************************************************************/

  /*! exports provided: StockComponent */

  /***/
  function srcAppPagesFormsPagesStockStockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockComponent", function () {
      return StockComponent;
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

    var StockComponent = /*#__PURE__*/function () {
      function StockComponent(document) {
        _classCallCheck(this, StockComponent);

        this.document = document;
      }

      _createClass(StockComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          var modeSwitch = this.document.querySelector('.mode-switch');
          modeSwitch.addEventListener('click', function () {
            _this2.document.documentElement.classList.toggle('dark');

            modeSwitch.classList.toggle('active');
          });
          var listView = this.document.querySelector('.list-view');
          var gridView = this.document.querySelector('.grid-view');
          var projectsList = this.document.querySelector('.project-boxes');
          listView.addEventListener('click', function () {
            gridView.classList.remove('active');
            listView.classList.add('active');
            projectsList.classList.remove('jsGridView');
            projectsList.classList.add('jsListView');
          });
          gridView.addEventListener('click', function () {
            gridView.classList.add('active');
            listView.classList.remove('active');
            projectsList.classList.remove('jsListView');
            projectsList.classList.add('jsGridView');
          });
          this.document.querySelector('.messages-btn').addEventListener('click', function () {
            _this2.document.querySelector('.messages-section').classList.add('show');
          });
          this.document.querySelector('.messages-close').addEventListener('click', function () {
            _this2.document.querySelector('.messages-section').classList.remove('show');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StockComponent;
    }();

    StockComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    StockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stock',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./stock.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/pages/stock/stock.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./stock.component.scss */
      "./src/app/pages/forms/pages/stock/stock.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], StockComponent);
    /***/
  },

  /***/
  "./src/app/pages/main-layout/main-layout.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/main-layout/main-layout.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMainLayoutMainLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n/* $Font */\n/* $Color Palette */\n/* $Mixins */\n/* --$Translate */\n/* --$Animation */\n/* --$Animation-Delay */\n/* --$Animation-Deuration */\n/* --$Transition*/\n/* --$Scale */\n/* --$Shadow */\n/* Main style */\n.app-wrapp {\n  width: 100%;\n  height: 100%;\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZZJREFUeNq8VtFxgzAMBU/ACOkGZIKYDZK/XL+aCRImwZ6AfvXyl24QMgHeoBnBI1TinnuqC2kDKbrTcRek9yTZeiRNbth2+5zRQ5OvyPPotSO/kDfH45sfwkhvAB/I9+QZfm6iMI0ng1ty00eU9oBzpSfyBUAtJb4PFLJGEUx2Jd9QrBskoIQXetSoaheAQapFNx6jcYKoxnvOe/1BAJAWs+VKrvQbg1Y985fnUFJsQ7ELdM6xy0Ceipm3qGAJ8Arn8Bfj+ZcgadEh43iFgANmvhsB3uVzDucyBrC6/BTVf3C7FFBgLOdknBUY1xmjelLi8CyCqmS8hVwLTK2wRAnfGBx0PoEgZwxxrVcKgE20PFNMi8XMVfQyewDBNwyV/LPFBP4BmD4mcNHcppo8T6cguZ2eYL3dBHDeJQdtYrsoMHqoIls5gSDk7oMgKmg4L4ZGF0xoRoAbbPEa47FSiwz0vGbBYuG6k0SKXQ0s83WL0MUGd/gkSIpfzsRBf0oh1xnk3s/7wZnlkznLR//evy1D3QX7FGAAhvHiHphAQV8AAAAASUVORK5CYII=\"), auto;\n  position: relative;\n}\n.app-wrapp .app-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: #FFFFFF;\n  border-radius: 3px;\n  overflow: hidden;\n}\n/* Main view */\n.view-main {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  bottom: 0px;\n  right: 0;\n  transition: right 0.3s linear;\n}\n.view-main.deactive {\n  right: 30%;\n}\n.view-main .header-wrapp {\n  width: 100%;\n  position: relative;\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n}\n.view-main .header-wrapp .app-detail {\n  text-align: center;\n  padding: 20px 5px 5px;\n  color: #4a0202;\n  text-shadow: 0 0 15px #FFA000;\n}\n.view-main .header-wrapp .app-detail img {\n  width: 75px;\n  border-radius: 50%;\n  box-shadow: 0 0 15px #FFA000;\n  border: 3px solid #FFFFFF;\n}\n.view-main .header-wrapp .app-detail .status {\n  font-size: 13px;\n}\n.view-main .header-wrapp .wave-wrapp {\n  width: 100%;\n  height: 28px;\n  position: absolute;\n  bottom: 0px;\n}\n.view-main .header-wrapp .wave-wrapp .wave {\n  display: block;\n  width: 100%;\n  margin: 0;\n  height: 40px;\n}\n.view-main .header-wrapp .wave-wrapp .wave .parallax > use {\n  -webkit-animation: move-forever 12s linear infinite;\n  animation: move-forever 12s linear infinite;\n}\n.view-main .header-wrapp .wave-wrapp .wave .parallax > use:nth-child(1) {\n  -webkit-animation-delay: -2s;\n  animation-delay: -2s;\n  transform: translate(-110px, 0%);\n}\n.view-main .header-wrapp .wave-wrapp .wave .parallax > use:nth-child(2) {\n  -webkit-animation-delay: -2s;\n  animation-delay: -2s;\n  -webkit-animation-duration: 7s;\n  animation-duration: 7s;\n}\n.view-main .header-wrapp .wave-wrapp .wave .parallax > use:nth-child(3) {\n  -webkit-animation-delay: -4s;\n  animation-delay: -4s;\n  -webkit-animation-duration: 4s;\n  animation-duration: 4s;\n  transform: translate(-65px, 0%);\n}\n.view-main .content-wrapp {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.view-main .content-wrapp .nav-group {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  box-shadow: 0px 3px 5px #cccccc;\n}\n.view-main .content-wrapp #master-nav {\n  text-align: center;\n  padding-top: 15px;\n  border-bottom: 1px solid whitesmoke;\n}\n.view-main .content-wrapp #master-nav ul {\n  list-style: none;\n  padding: 0px;\n  position: relative;\n}\n.view-main .content-wrapp #master-nav ul li {\n  display: inline-block;\n  width: 15%;\n  font-size: 20px;\n  padding: 5px 0;\n  margin: 0 18px;\n}\n.view-main .content-wrapp #master-nav ul li i {\n  color: #757575;\n  font-size: 20px;\n}\n.view-main .content-wrapp #master-nav ul li.active i {\n  color: linear-gradient(to right, #64b3f4, #c2e59c);\n}\n.view-main .content-wrapp #master-nav ul #active-line {\n  position: absolute;\n  bottom: -1px;\n  height: 2px;\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n  padding: 0px;\n  border-radius: 45px;\n  left: 0px;\n  transition: width 0.5s;\n}\n.view-main .content-wrapp #master-nav-items {\n  position: absolute;\n  width: 100%;\n  top: 53px;\n  bottom: 0;\n}\n.view-main .content-wrapp #master-nav-items > div {\n  width: 100%;\n  height: auto;\n  position: relative;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  transition: left 0.5s, opacity 0.4s;\n}\n.view-main .content-wrapp #master-nav-items > div.active {\n  left: 0;\n  opacity: 1;\n}\n.view-main .content-wrapp #master-nav-items > div.after {\n  left: 100%;\n}\n.view-main .content-wrapp #master-nav-items > div.before {\n  left: -100%;\n}\n.view-main .content-wrapp .messages-list {\n  padding-top: 10px;\n}\n.view-main .content-wrapp .messages-list ul {\n  list-style: none;\n  padding: 0;\n}\n.view-main .content-wrapp .messages-list ul > li {\n  width: 100%;\n  height: 75px;\n  overflow: hidden;\n  border-bottom: 1px solid #f2f2f2;\n}\n.view-main .content-wrapp .messages-list ul > li .sender-image {\n  width: 75px;\n  height: 75px;\n  float: left;\n  text-align: center;\n  padding-top: 8px;\n}\n.view-main .content-wrapp .messages-list ul > li .sender-image img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail {\n  margin-left: 75px;\n  padding: 5px 15px 5px 5px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col1 {\n  width: 65%;\n  float: left;\n  padding-right: 5px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col1 .sender-name {\n  font-size: 13px;\n  font-weight: bold;\n  padding-bottom: 3px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col1 .mes-preview {\n  font-size: 12px;\n  color: #757575;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col2 {\n  font-size: 12px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col2 .send-time {\n  float: right;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col2 .mes-seen-status {\n  float: right;\n  color: #4CAF50;\n  position: relative;\n  top: -2px;\n  right: 5px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col2 .mes-seen-status i {\n  font-size: 16px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col2 .mes-count {\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n  padding: 1px 6px;\n  border-radius: 50px;\n  color: #FFFFFF;\n  float: right;\n  margin: 10px 0 0;\n  clear: right;\n}\n.view-main .content-wrapp .alphabet {\n  position: absolute;\n  right: 10px;\n  top: 15px;\n  font-size: 11px;\n  text-align: center;\n  font-weight: bold;\n  line-height: 20px;\n  z-index: 1;\n}\n.view-main .content-wrapp .alphabet > div:after {\n  content: \" \";\n  background: #FFA000;\n  width: 3px;\n  height: 3px;\n  position: relative;\n  display: flex;\n  margin: auto;\n  border-radius: 50%;\n}\n.view-main .content-wrapp .alphabet > div:last-child:after {\n  content: \"\";\n  display: none;\n}\n.view-main .content-wrapp .contact-list {\n  font-size: 14px;\n}\n.view-main .content-wrapp .contact-list ul {\n  list-style: none;\n}\n.view-main .content-wrapp .contact-list > ul {\n  padding-top: 5px;\n}\n.view-main .content-wrapp .contact-list > ul > li .title {\n  text-indent: 10px;\n  background: #f9f9f9;\n  color: #757575;\n  width: 100%;\n  float: left;\n  font-weight: bold;\n  text-transform: uppercase;\n  box-shadow: 0 9px 7px -8px #d9d9d9;\n}\n.view-main .content-wrapp .contact-list > ul > li ul {\n  padding-top: 20px;\n}\n.view-main .content-wrapp .contact-list > ul > li ul li {\n  padding: 10px;\n  display: block;\n  border-bottom: 1px solid whitesmoke;\n  text-transform: capitalize;\n  font-size: 13px;\n}\n.view-main .content-wrapp .profile-setting .information {\n  padding-top: 5px;\n}\n.view-main .content-wrapp .profile-setting .information .private > p, .view-main .content-wrapp .profile-setting .information .public > p {\n  font-size: 12px;\n  font-weight: bold;\n  padding: 5px 15px;\n  background: #f2f2f2;\n}\n.view-main .content-wrapp .activity {\n  text-align: center;\n  padding: 40px 5px 5px;\n  line-height: 40px;\n}\n.view-main .content-wrapp .activity i {\n  font-size: 60px;\n  color: linear-gradient(to right, #64b3f4, #c2e59c);\n}\n.view-message {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  background: #f2f2f2;\n  z-index: 1;\n  box-shadow: 0 0 15px #999999;\n  right: -110%;\n  transition: right 0.5s;\n}\n.view-message.active {\n  right: 0;\n}\n.view-message .status-bar {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  z-index: 4;\n  box-shadow: 0 0 15px #cccccc;\n}\n.view-message .status-bar .back-arrow {\n  float: left;\n  color: #FFA000;\n  padding: 7px;\n}\n.view-message .status-bar .back-arrow i {\n  font-size: 35px;\n}\n.view-message .status-bar .sender-name {\n  font-weight: bold;\n  text-align: center;\n  padding: 15px 50px 0 0;\n}\n.view-message .messages-area {\n  position: absolute;\n  width: 100%;\n  top: 50px;\n  bottom: 63px;\n  z-index: 2;\n}\n.view-message .messages-area ul {\n  list-style: none;\n  padding-top: 5px;\n}\n.view-message .messages-area ul li {\n  display: block;\n  height: auto;\n  clear: both;\n  overflow: auto;\n  position: relative;\n  width: 100%;\n  opacity: 1;\n  bottom: 0;\n  left: 0;\n  transition: all 0.4s;\n}\n.view-message .messages-area ul li > div {\n  position: relative;\n  display: inline-block;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 13px;\n  margin: 3px 20px 10px;\n  max-width: 70%;\n  word-wrap: break-word;\n}\n.view-message .messages-area ul li > div span {\n  display: block;\n  font-size: 10px;\n  margin-top: 5px;\n  text-align: right;\n}\n.view-message .messages-area ul li > div:after {\n  content: \" \";\n  display: block;\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  bottom: 0;\n}\n.view-message .messages-area ul li.sent > div {\n  background: #FFA000;\n  color: #FFFFFF;\n  float: right;\n  box-shadow: 0 0 10px #FFA000;\n}\n.view-message .messages-area ul li.sent > div:after {\n  right: -6px;\n  border-top-right-radius: 50px;\n  border-right: 10px solid #FFA000;\n  transform: rotate(160deg);\n  border-top: 1px solid #FFA000;\n}\n.view-message .messages-area ul li.recive > div {\n  background: #FFFFFF;\n  color: #757575;\n  float: left;\n  box-shadow: 0 0 10px #e6e5e5;\n}\n.view-message .messages-area ul li.recive > div:after {\n  left: -6px;\n  border-top-left-radius: 50px;\n  border-left: 10px solid #FFFFFF;\n  transform: rotate(185deg);\n  border-top: 1px solid #FFFFFF;\n}\n.view-message .messages-area ul li.goto {\n  width: 0;\n  opacity: 0;\n  bottom: -500px;\n  left: -50%;\n}\n.view-message .text-media-area {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  z-index: 3;\n  overflow: hidden;\n  height: auto;\n  box-shadow: 0 -1px 5px #d9d9d9;\n}\n.view-message .text-media-area .message-form {\n  height: 62px;\n}\n.view-message .text-media-area .message-form > button {\n  display: inline-block;\n  width: 60px;\n  text-align: center;\n  font-size: 15px;\n  color: #FFA000;\n  float: right;\n  background: transparent;\n  border: none;\n  padding: 20px 0 15px;\n  position: relative;\n  z-index: 3;\n}\n.view-message .text-media-area .message-form input {\n  font-family: 'Open Sans', sans-serif;\n  padding: 5px;\n  border: 0px;\n  position: absolute;\n  padding: 22px 60px 21px 15px;\n  left: 0;\n  width: 100%;\n  font-size: 14px;\n  color: #757575;\n  background: transparent;\n  z-index: 2;\n}\n.form-group {\n  padding: 5px;\n  border-bottom: 1px solid #f2f2f2;\n}\n.form-group > span {\n  display: inline-block;\n  width: 40px;\n  text-align: center;\n  font-size: 21px;\n  color: #212121;\n}\n.form-group > span i {\n  position: relative;\n  top: 3px;\n  font-size: 22px;\n}\n.form-group .title-leve1 {\n  font-family: 'Open Sans', sans-serif;\n  padding: 5px;\n  border: 0px;\n  margin-left: 5px;\n  position: absolute;\n  right: 0;\n  left: 40px;\n  width: 80%;\n  font-size: 12px;\n  color: #757575;\n  background: transparent;\n  display: inline-block;\n}\n.form-group input[type=text], .form-group textarea {\n  font-family: 'Open Sans', sans-serif;\n  padding: 5px;\n  border: 0px;\n  margin-left: 5px;\n  position: absolute;\n  right: 0;\n  left: 40px;\n  width: 80%;\n  font-size: 12px;\n  color: #757575;\n  background: transparent;\n}\n.form-group textarea {\n  resize: none;\n}\n.form-group.h-80 {\n  height: 80px;\n}\n.reset {\n  transition: transform 0.4s;\n}\n[data-viewport=true] {\n  overflow: hidden;\n}\n[data-viewport=true] > span.viewportShadow {\n  content: \" \";\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  transition: box-shadow 0.2s;\n}\n/* Keyframes */\n@-webkit-keyframes move-forever {\n  0% {\n    transform: translate(-90px, 0%);\n  }\n  100% {\n    transform: translate(85px, 0%);\n  }\n}\n@keyframes move-forever {\n  0% {\n    transform: translate(-90px, 0%);\n  }\n  100% {\n    transform: translate(85px, 0%);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1sYXlvdXQvQzpcXFVzZXJzXFxhbGV4Lmh1eW5oXFxEZXNrdG9wXFxCYW1ib29cXHRlbXBsYXRlXFxnaXRodWJcXGZvb2Qtbmx1XFxmb29kLW5sdS9zcmNcXGFwcFxccGFnZXNcXG1haW4tbGF5b3V0XFxtYWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWlCQSxnRUFBWTtBQUNaLHNFQUFZO0FBRlosVUFBQTtBQUdBLG1CQUFBO0FBZ0JBLFlBQUE7QUFDQSxpQkFBQTtBQU9BLGlCQUFBO0FBT0EsdUJBQUE7QUFPQSwyQkFBQTtBQU9BLGlCQUFBO0FBT0EsYUFBQTtBQU9BLGNBQUE7QUFPQSxlQUFBO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVzQkFBc3NCO0VBQ3RzQixrQkFBa0I7QUN6RXBCO0FEcUVBO0VBTUksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBNUV3QjtFQTZFeEIsa0JBQWlCO0VBQ2pCLGdCQUFnQjtBQ3ZFcEI7QUQyRUEsY0FBQTtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixNQUFLO0VBQ0wsV0FBVTtFQUNWLFFBQVE7RUF2Q1IsNkJBd0NxQztBQ3JFdkM7QUQrREE7RUFRSSxVQUFVO0FDbkVkO0FEMkRBO0VBV0ksV0FBVTtFQUVWLGtCQUFpQjtFQUNqQix1REE3RnNEO0FDMEIxRDtBRHFEQTtFQWdCTSxrQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLGNBQWM7RUFDZCw2QkFwR3NCO0FDbUM1QjtBRDhDQTtFQXFCUSxXQUFVO0VBQ1Ysa0JBQWlCO0VBM0N2Qiw0QkE1RDBCO0VBeUdwQix5QkEzR29CO0FDOEM1QjtBRHFDQTtFQTJCUSxlQUFjO0FDNUR0QjtBRGlDQTtFQStCTSxXQUFVO0VBQ1YsWUFBWTtFQUNaLGtC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QUFDQTtFQUNFO0lBcGpCQSwrQkFBMkI7RUN1bUIzQjtFRGhEQTtJQXZqQkEsOEJBQTJCO0VDNm1CM0I7QUFDRjtBRDNCQTtFQUNFO0lBcGxCQSwrQkFBMkI7RUNtcUIzQjtFRDVFQTtJQXZsQkEsOEJBQTJCO0VDeXFCM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3YyL3RoZW1pbmcvXHJcblxyXG5cclxuLy8gQXBwIEdsb2JhbCBTYXNzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgZ2xvYmFsbHkuIFRoZXNlXHJcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LlxyXG4vLyBBZGRpdGlvbmFsbHksIHRoaXMgZmlsZSBjYW4gYmUgYWxzbyB1c2VkIGFzIGFuIGVudHJ5IHBvaW50XHJcbi8vIHRvIGltcG9ydCBvdGhlciBTYXNzIGZpbGVzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBvdXRwdXQgQ1NTLlxyXG4vL1xyXG4vLyBTaGFyZWQgU2FzcyB2YXJpYWJsZXMsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGFkanVzdCBJb25pYydzXHJcbi8vIGRlZmF1bHQgU2FzcyB2YXJpYWJsZXMsIGJlbG9uZyBpbiBcInRoZW1lL3ZhcmlhYmxlcy5zY3NzXCIuXHJcbi8vXHJcbi8vIFRvIGRlY2xhcmUgcnVsZXMgZm9yIGEgc3BlY2lmaWMgbW9kZSwgY3JlYXRlIGEgY2hpbGQgcnVsZVxyXG4vLyBmb3IgdGhlIC5tZCwgLmlvcywgb3IgLndwIG1vZGUgY2xhc3Nlcy4gVGhlIG1vZGUgY2xhc3MgaXNcclxuLy8gYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHRoZSA8Ym9keT4gZWxlbWVudCBpbiB0aGUgYXBwLlxyXG4vKiAkRm9udCAqL1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnNcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTtcclxuLyogJENvbG9yIFBhbGV0dGUgKi9cclxuJHdoaXRlOiAgICAgICAgICAgICAgI0ZGRkZGRjtcclxuJGJsYWNrOiAgICAgICAgICAgICAgIzAwMDAwMDtcclxuJGRhcmtQcmltYXJ5Q29sb3I6ICAgI0ZGQTAwMDtcclxuLy8gJHByaW1hcnlDb2xvcjogICAgICAgI0ZGQzEwNztcclxuJHByaW1hcnlDb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTtcclxuJGxpZ2h0UHJpbWFyeUNvbG9yOiAgI0ZGRUNCMztcclxuJHRleHRQcmltYXJ5Q29sb3I6ICAgIzIxMjEyMTtcclxuJGFjY2VudENvbG9yOiAgICAgICAgI0ZGNTcyMjtcclxuJHByaW1hcnlUZXh0Q29sb3I6ICAgIzIxMjEyMTtcclxuJHNlY29uZGFyeVRleHRDb2xvcjogIzc1NzU3NTtcclxuJGRpdmlkZXJDb2xvcjogICAgICAgI0JEQkRCRDtcclxuJGJhY2tncm91ZDogICAgICAgICAgIzM3NDA0NjtcclxuJHN1Y2Nlc3M6ICAgICAgICAgICAgIzRDQUY1MDtcclxuJHByaW1hcnk6ICAgICAgICAgICAgIzQ0OEFGRjtcclxuXHJcbi8qICRNaXhpbnMgKi9cclxuLyogLS0kVHJhbnNsYXRlICovXHJcbkBtaXhpbiB0cmFuc2xhdGUoJHgsJHkpe1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsJHkpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsJHkpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCR5KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwkeSk7XHJcbn1cclxuLyogLS0kQW5pbWF0aW9uICovXHJcbkBtaXhpbiBhbmltYXRpb24oJHBhcmFtZXRlcil7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ICRwYXJhbWV0ZXI7XHJcbiAgLW1vei1hbmltYXRpb246ICRwYXJhbWV0ZXI7XHJcbiAgLW8tYW5pbWF0aW9uOiAkcGFyYW1ldGVyO1xyXG4gIGFuaW1hdGlvbjogJHBhcmFtZXRlcjtcclxufVxyXG4vKiAtLSRBbmltYXRpb24tRGVsYXkgKi9cclxuQG1peGluIGFuaW1hdGlvbi1kZWxheSgkdmFsdWUpe1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcclxuICAtby1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcclxuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcclxufVxyXG4vKiAtLSRBbmltYXRpb24tRGV1cmF0aW9uICovXHJcbkBtaXhpbiBhbmltYXRpb24tZHVyYXRpb24oJHZhbHVlKXtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogJHZhbHVlO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAkdmFsdWU7XHJcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAkdmFsdWU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkdmFsdWU7XHJcbn1cclxuLyogLS0kVHJhbnNpdGlvbiovXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRwYXJhbWV0ZXIpe1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHBhcmFtZXRlcjtcclxuICAtbW96LXRyYW5zaXRpb246ICRwYXJhbWV0ZXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogJHBhcmFtZXRlcjtcclxuICB0cmFuc2l0aW9uOiAkcGFyYW1ldGVyO1xyXG59XHJcbi8qIC0tJFNjYWxlICovXHJcbkBtaXhpbiBzY2FsZSgkdmFsdWUpe1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkdmFsdWUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkdmFsdWUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoJHZhbHVlKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKCR2YWx1ZSk7XHJcbn1cclxuLyogLS0kU2hhZG93ICovXHJcbkBtaXhpbiBzaGFkb3coJHZhbHVlKXtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICR2YWx1ZTtcclxuICAtbW96LWJveC1zaGFkb3c6ICAgICR2YWx1ZTtcclxuICBib3gtc2hhZG93OiAgICAgICAgICR2YWx1ZTtcclxufVxyXG5cclxuLyogTWFpbiBzdHlsZSAqL1xyXG5cclxuLmFwcC13cmFwcHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY3Vyc29yOnVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFaWkpSRUZVZU5xOFZ0RnhnekFNQlUvQUNPa0daSUtZRFpLL1hMK2FDUkltd1o2QWZ2WHlsMjRRTWdIZW9CbkJJMVRpbm51cUMya0RLYnJUY1Jlazl5VFplaVJOYnRoMis1elJRNU92eVBQb3RTTy9rRGZINDVzZndraHZBQi9JOStRWmZtNmlNSTBuZzF0eTAwZVU5b0J6cFNmeUJVQXRKYjRQRkxKR0VVeDJKZDlRckJza29JUVhldFNvYWhlQVFhcEZOeDZqY1lLb3hudk9lLzFCQUpBV3MrVktydlFiZzFZOTg1Zm5VRkpzUTdFTGRNNnh5MENlaXBtM3FHQUo4QXJuOEJmaitaY2dhZEVoNDNpRmdBTm12aHNCM3VWekR1Y3lCckM2L0JUVmYzQzdGRkJnTE9ka25CVVkxeG1qZWxMaThDeUNxbVM4aFZ3TFRLMndSQW5mR0J4MFBvRWdad3h4clZjS2dFMjBQRk5NaThYTVZmUXlld0RCTnd5Vi9MUEZCUDRCbUQ0bWNOSGNwcG84VDZjZ3VaMmVZTDNkQkhEZUpRZHRZcnNvTUhxb0lsczVnU0RrN29NZ0ttZzRMNFpHRjB4b1JvQWJiUEVhNDdGU2l3ejB2R2JCWXVHNmswU0tYUTBzODNXTDBNVUdkL2drU0lwZnpzUkJmMG9oMXhuazNzLzd3Wm5sa3puTFIvL2V2eTFEM1FYN0ZHQUFodkhpSHBoQVFWOEFBQUFBU1VWT1JLNUNZSUk9JyksIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5hcHAtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNYWluIHZpZXcgKi9cclxuLnZpZXctbWFpbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0b3A6MDtcclxuICBib3R0b206MHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24ocmlnaHQgMC4zcyBsaW5lYXIpO1xyXG4gICYuZGVhY3RpdmV7XHJcbiAgICByaWdodDogMzAlO1xyXG4gIH1cclxuICAuaGVhZGVyLXdyYXBwe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC8vIGhlaWdodDozNiU7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5Q29sb3I7XHJcbiAgICAuYXBwLWRldGFpbHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOjIwcHggNXB4IDVweDtcclxuICAgICAgY29sb3I6ICM0YTAyMDI7O1xyXG4gICAgICB0ZXh0LXNoYWRvdzowIDAgMTVweCAkZGFya1ByaW1hcnlDb2xvcjtcclxuICAgICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjc1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93KDAgMCAxNXB4ICRkYXJrUHJpbWFyeUNvbG9yKTtcclxuICAgICAgICBib3JkZXI6M3B4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuc3RhdHVze1xyXG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAud2F2ZS13cmFwcHtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOjBweDtcclxuICAgICAgLndhdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgLnBhcmFsbGF4e1xyXG4gICAgICAgICAgPiB1c2Uge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24obW92ZS1mb3JldmVyIDEycyBsaW5lYXIgaW5maW5pdGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPiB1c2U6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uLWRlbGF5KC0ycyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtMTEwcHgsMCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPiB1c2U6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uLWRlbGF5KC0ycyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbi1kdXJhdGlvbig3cyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA+IHVzZTpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24tZGVsYXkoLTRzKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uLWR1cmF0aW9uKDRzKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNsYXRlKC02NXB4LDAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRlbnQtd3JhcHB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubmF2LWdyb3Vwe1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IGRhcmtlbigkd2hpdGUsMjAlKTtcclxuICAgIH1cclxuICAgICNtYXN0ZXItbmF2e1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGRhcmtlbigkd2hpdGUsNCUpO1xyXG4gICAgICB1bHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgIG1hcmdpbjogMCAxOHB4O1xyXG4gICAgICAgICAgaXtcclxuICAgICAgICAgICAgY29sb3I6JHNlY29uZGFyeVRleHRDb2xvcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnlDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAjYWN0aXZlLWxpbmV7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206LTFweDtcclxuICAgICAgICAgIGhlaWdodDoycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xyXG4gICAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOjQ1cHg7XHJcbiAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24od2lkdGggMC41cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAjbWFzdGVyLW5hdi1pdGVtc3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdG9wOiA1M3B4O1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgID4gZGl2e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCN7XCJsZWZ0IDAuNXMsIG9wYWNpdHkgMC40c1wifSk7XHJcbiAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFmdGVye1xyXG4gICAgICAgICAgbGVmdDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmJlZm9yZXtcclxuICAgICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2VzLWxpc3R7XHJcbiAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgIHVse1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgID4gbGl7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDo3NXB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZW4oJHdoaXRlLDUlKTtcclxuICAgICAgICAgIC5zZW5kZXItaW1hZ2V7XHJcbiAgICAgICAgICAgIHdpZHRoOjc1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo3NXB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDo4cHg7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lcy1kZXRhaWx7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Ojc1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6NXB4IDE1cHggNXB4IDVweDtcclxuICAgICAgICAgICAgLm1lcy1jb2wxe1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgICAgICAgICAgICAgLnNlbmRlci1uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTozcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5tZXMtcHJldmlld3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5VGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWVzLWNvbDJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIC5zZW5kLXRpbWV7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm1lcy1zZWVuLXN0YXR1c3tcclxuICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzdWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6NXB4O1xyXG4gICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubWVzLWNvdW50e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgICAgICAgICAgICAgIGNsZWFyOiByaWdodDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hbHBoYWJldHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgdG9wOjE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgID4gZGl2e1xyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRkYXJrUHJpbWFyeUNvbG9yO1xyXG4gICAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1saXN0e1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHVse1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgPiB1bHtcclxuICAgICAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICAgICAgPiBsaXtcclxuICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkd2hpdGUsMi41JSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5VGV4dENvbG9yO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDlweCA3cHggLThweCBkYXJrZW4oJHdoaXRlLDE1JSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MjBweDtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2VuKCR3aGl0ZSw0JSk7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjEzcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUtc2V0dGluZ3tcclxuICAgICAgLmluZm9ybWF0aW9ue1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgICAgICAucHJpdmF0ZSwucHVibGlje1xyXG4gICAgICAgICAgPiBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjVweCAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHdoaXRlLDUlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3Rpdml0eXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA0MHB4IDVweCA1cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTo2MHB4O1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi52aWV3LW1lc3NhZ2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDowO1xyXG4gIGJvdHRvbTowO1xyXG4gIGJhY2tncm91bmQ6IGRhcmtlbigkd2hpdGUsNSUpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgQGluY2x1ZGUgc2hhZG93KDAgMCAxNXB4IGRhcmtlbigkd2hpdGUsNDAlKSk7XHJcbiAgcmlnaHQ6IC0xMTAlO1xyXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24ocmlnaHQgMC41cyk7XHJcbiAgJi5hY3RpdmV7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgLnN0YXR1cy1iYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIEBpbmNsdWRlIHNoYWRvdygwIDAgMTVweCBkYXJrZW4oJHdoaXRlLDIwJSkpO1xyXG4gICAgLmJhY2stYXJyb3d7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBjb2xvcjogJGRhcmtQcmltYXJ5Q29sb3I7XHJcbiAgICAgIHBhZGRpbmc6N3B4O1xyXG4gICAgICBpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlbmRlci1uYW1le1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDUwcHggMCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAubWVzc2FnZXMtYXJlYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBib3R0b206NjNweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB1bHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgICBsaXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDowO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuNHMpO1xyXG4gICAgICAgID4gZGl2e1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDNweCAyMHB4IDEwcHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnNlbnR7XHJcbiAgICAgICAgICA+IGRpdntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhcmtQcmltYXJ5Q29sb3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgc2hhZG93KDAgMCAxMHB4ICRkYXJrUHJpbWFyeUNvbG9yKTtcclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICByaWdodDogLTZweDtcclxuICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgJGRhcmtQcmltYXJ5Q29sb3I7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTYwZGVnKTtcclxuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGRhcmtQcmltYXJ5Q29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5yZWNpdmV7XHJcbiAgICAgICAgICA+IGRpdntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeVRleHRDb2xvcjtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGRhcmtlbigkd2hpdGUsMTAlKTtcclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICBsZWZ0OiAtNnB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4NWRlZyk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmdvdG97XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICBib3R0b206LTUwMHB4O1xyXG4gICAgICAgICAgbGVmdDotNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGV4dC1tZWRpYS1hcmVhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgQGluY2x1ZGUgc2hhZG93KDAgLTFweCA1cHggZGFya2VuKCR3aGl0ZSwxNSUpKTtcclxuICAgIC5tZXNzYWdlLWZvcm17XHJcbiAgICAgIGhlaWdodDo2MnB4O1xyXG4gICAgICA+IGJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICRkYXJrUHJpbWFyeUNvbG9yO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4IDAgMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgfVxyXG4gICAgICBpbnB1dHtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBwYWRkaW5nOjIycHggNjBweCAyMXB4IDE1cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZm9ybS1ncm91cHtcclxuICBwYWRkaW5nOjVweDtcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBkYXJrZW4oJHdoaXRlLDUlKTtcclxuICA+IHNwYW57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOjIxcHg7XHJcbiAgICBjb2xvcjogJHRleHRQcmltYXJ5Q29sb3I7XHJcbiAgICBpe1xyXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgdG9wOjNweDtcclxuICAgICAgZm9udC1zaXplOjIycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aXRsZS1sZXZlMSB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5VGV4dENvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9dGV4dF0sdGV4dGFyZWF7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5VGV4dENvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIHRleHRhcmVhe1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gIH1cclxuICAmLmgtODB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzZXR7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbih0cmFuc2Zvcm0gMC40cyk7XHJcbn1cclxuW2RhdGEtdmlld3BvcnQ9dHJ1ZV17XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICA+IHNwYW4udmlld3BvcnRTaGFkb3d7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGJveC1zaGFkb3cgMC4ycyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBLZXlmcmFtZXMgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtZm9yZXZlciB7XHJcbiAgMCUge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKC05MHB4LCAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKDg1cHgsIDAlKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIG1vdmUtZm9yZXZlciB7XHJcbiAgMCUge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKC05MHB4LCAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKDg1cHgsIDAlKTtcclxuICB9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcclxuICAwJSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc2xhdGUoODVweCwgMCUpO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIG1vdmUtZm9yZXZlciB7XHJcbiAgMCUge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKC05MHB4LCAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKDg1cHgsIDAlKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xyXG4gIDAlIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSg4NXB4LCAwJSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qICRGb250ICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnNcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIik7XG4vKiAkQ29sb3IgUGFsZXR0ZSAqL1xuLyogJE1peGlucyAqL1xuLyogLS0kVHJhbnNsYXRlICovXG4vKiAtLSRBbmltYXRpb24gKi9cbi8qIC0tJEFuaW1hdGlvbi1EZWxheSAqL1xuLyogLS0kQW5pbWF0aW9uLURldXJhdGlvbiAqL1xuLyogLS0kVHJhbnNpdGlvbiovXG4vKiAtLSRTY2FsZSAqL1xuLyogLS0kU2hhZG93ICovXG4vKiBNYWluIHN0eWxlICovXG4uYXBwLXdyYXBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQVlBQUFEZ2R6MzRBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQVpaSlJFRlVlTnE4VnRGeGd6QU1CVS9BQ09rR1pJS1lEWksvWEwrYUNSSW13WjZBZnZYeWwyNFFNZ0hlb0JuQkkxVGlubnVxQzJrREticlRjUmVrOXlUWmVpUk5idGgyKzV6UlE1T3Z5UFBvdFNPL2tEZkg0NXNmd2todkFCL0k5K1FaZm02aU1JMG5nMXR5MDBlVTlvQnpwU2Z5QlVBdEpiNFBGTEpHRVV4MkpkOVFyQnNrb0lRWGV0U29haGVBUWFwRk54NmpjWUtveG52T2UvMUJBSkFXcytWS3J2UWJnMVk5ODVmblVGSnNRN0VMZE02eHkwQ2VpcG0zcUdBSjhBcm44QmZqK1pjZ2FkRWg0M2lGZ0FObXZoc0IzdVZ6RHVjeUJyQzYvQlRWZjNDN0ZGQmdMT2RrbkJVWTF4bWplbExpOEN5Q3FtUzhoVndMVEsyd1JBbmZHQngwUG9FZ1p3eHhyVmNLZ0UyMFBGTk1pOFhNVmZReWV3REJOd3lWL0xQRkJQNEJtRDRtY05IY3BwbzhUNmNndVoyZVlMM2RCSERlSlFkdFlyc29NSHFvSWxzNWdTRGs3b01nS21nNEw0WkdGMHhvUm9BYmJQRWE0N0ZTaXd6MHZHYkJZdUc2azBTS1hRMHM4M1dMME1VR2QvZ2tTSXBmenNSQmYwb2gxeG5rM3MvN3dabmxrem5MUi8vZXZ5MUQzUVg3RkdBQWh2SGlIcGhBUVY4QUFBQUFTVVZPUks1Q1lJST1cIiksIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFwcC13cmFwcCAuYXBwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBNYWluIHZpZXcgKi9cbi52aWV3LW1haW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiByaWdodCAwLjNzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiByaWdodCAwLjNzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogcmlnaHQgMC4zcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgbGluZWFyO1xufVxuXG4udmlldy1tYWluLmRlYWN0aXZlIHtcbiAgcmlnaHQ6IDMwJTtcbn1cblxuLnZpZXctbWFpbiAuaGVhZGVyLXdyYXBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTtcbn1cblxuLnZpZXctbWFpbiAuaGVhZGVyLXdyYXBwIC5hcHAtZGV0YWlsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDVweCA1cHg7XG4gIGNvbG9yOiAjNGEwMjAyO1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggI0ZGQTAwMDtcbn1cblxuLnZpZXctbWFpbiAuaGVhZGVyLXdyYXBwIC5hcHAtZGV0YWlsIGltZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggI0ZGQTAwMDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTVweCAjRkZBMDAwO1xuICBib3gtc2hhZG93OiAwIDAgMTVweCAjRkZBMDAwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjRkZGRkZGO1xufVxuXG4udmlldy1tYWluIC5oZWFkZXItd3JhcHAgLmFwcC1kZXRhaWwgLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnZpZXctbWFpbiAuaGVhZGVyLXdyYXBwIC53YXZlLXdyYXBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbn1cblxuLnZpZXctbWFpbiAuaGVhZGVyLXdyYXBwIC53YXZlLXdyYXBwIC53YXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnZpZXctbWFpbiAuaGVhZGVyLXdyYXBwIC53YXZlLXdyYXBwIC53YXZlIC5wYXJhbGxheCA+IHVzZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIgMTJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IG1vdmUtZm9yZXZlciAxMnMgbGluZWFyIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IG1vdmUtZm9yZXZlciAxMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IG1vdmUtZm9yZXZlciAxMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4udmlldy1tYWluIC5oZWFkZXItd3JhcHAgLndhdmUtd3JhcHAgLndhdmUgLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgxKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG4gIC1vLWFuaW1hdGlvbi1kZWxheTogLTJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0ycztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTEwcHgsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTEwcHgsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTExMHB4LCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMTBweCwgMCUpO1xufVxuXG4udmlldy1tYWluIC5oZWFkZXItd3JhcHAgLndhdmUtd3JhcHAgLndhdmUgLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgyKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG4gIC1vLWFuaW1hdGlvbi1kZWxheTogLTJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0ycztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDdzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XG59XG5cbi52aWV3LW1haW4gLmhlYWRlci13cmFwcCAud2F2ZS13cmFwcCAud2F2ZSAucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDMpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC00cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IC00cztcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAtNHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjVweCwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC02NXB4LCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC02NXB4LCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02NXB4LCAwJSk7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLm5hdi1ncm91cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggI2NjY2NjYztcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAjbWFzdGVyLW5hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwICNtYXN0ZXItbmF2IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgI21hc3Rlci1uYXYgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbjogMCAxOHB4O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwICNtYXN0ZXItbmF2IHVsIGxpIGkge1xuICBjb2xvcjogIzc1NzU3NTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwICNtYXN0ZXItbmF2IHVsIGxpLmFjdGl2ZSBpIHtcbiAgY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgI21hc3Rlci1uYXYgdWwgI2FjdGl2ZS1saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NGIzZjQsICNjMmU1OWMpO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIGxlZnQ6IDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgI21hc3Rlci1uYXYtaXRlbXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUzcHg7XG4gIGJvdHRvbTogMDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAjbWFzdGVyLW5hdi1pdGVtcyA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjVzLCBvcGFjaXR5IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogbGVmdCAwLjVzLCBvcGFjaXR5IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGxlZnQgMC41cywgb3BhY2l0eSAwLjRzO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMsIG9wYWNpdHkgMC40cztcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAjbWFzdGVyLW5hdi1pdGVtcyA+IGRpdi5hY3RpdmUge1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwICNtYXN0ZXItbmF2LWl0ZW1zID4gZGl2LmFmdGVyIHtcbiAgbGVmdDogMTAwJTtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAjbWFzdGVyLW5hdi1pdGVtcyA+IGRpdi5iZWZvcmUge1xuICBsZWZ0OiAtMTAwJTtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5tZXNzYWdlcy1saXN0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB1bCA+IGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLm1lc3NhZ2VzLWxpc3QgdWwgPiBsaSAuc2VuZGVyLWltYWdlIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB1bCA+IGxpIC5zZW5kZXItaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5tZXNzYWdlcy1saXN0IHVsID4gbGkgLm1lcy1kZXRhaWwge1xuICBtYXJnaW4tbGVmdDogNzVweDtcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDVweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB1bCA+IGxpIC5tZXMtZGV0YWlsIC5tZXMtY29sMSB7XG4gIHdpZHRoOiA2NSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLm1lc3NhZ2VzLWxpc3QgdWwgPiBsaSAubWVzLWRldGFpbCAubWVzLWNvbDEgLnNlbmRlci1uYW1lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB1bCA+IGxpIC5tZXMtZGV0YWlsIC5tZXMtY29sMSAubWVzLXByZXZpZXcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5tZXNzYWdlcy1saXN0IHVsID4gbGkgLm1lcy1kZXRhaWwgLm1lcy1jb2wyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5tZXNzYWdlcy1saXN0IHVsID4gbGkgLm1lcy1kZXRhaWwgLm1lcy1jb2wyIC5zZW5kLXRpbWUge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLm1lc3NhZ2VzLWxpc3QgdWwgPiBsaSAubWVzLWRldGFpbCAubWVzLWNvbDIgLm1lcy1zZWVuLXN0YXR1cyB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM0Q0FGNTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICByaWdodDogNXB4O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5tZXNzYWdlcy1saXN0IHVsID4gbGkgLm1lcy1kZXRhaWwgLm1lcy1jb2wyIC5tZXMtc2Vlbi1zdGF0dXMgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB1bCA+IGxpIC5tZXMtZGV0YWlsIC5tZXMtY29sMiAubWVzLWNvdW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTtcbiAgcGFkZGluZzogMXB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgY2xlYXI6IHJpZ2h0O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5hbHBoYWJldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAuYWxwaGFiZXQgPiBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogI0ZGQTAwMDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLmFscGhhYmV0ID4gZGl2Omxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5jb250YWN0LWxpc3Qge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLmNvbnRhY3QtbGlzdCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLmNvbnRhY3QtbGlzdCA+IHVsIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAuY29udGFjdC1saXN0ID4gdWwgPiBsaSAudGl0bGUge1xuICB0ZXh0LWluZGVudDogMTBweDtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJveC1zaGFkb3c6IDAgOXB4IDdweCAtOHB4ICNkOWQ5ZDk7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLmNvbnRhY3QtbGlzdCA+IHVsID4gbGkgdWwge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAuY29udGFjdC1saXN0ID4gdWwgPiBsaSB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAucHJvZmlsZS1zZXR0aW5nIC5pbmZvcm1hdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLnByb2ZpbGUtc2V0dGluZyAuaW5mb3JtYXRpb24gLnByaXZhdGUgPiBwLCAudmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5wcm9maWxlLXNldHRpbmcgLmluZm9ybWF0aW9uIC5wdWJsaWMgPiBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLmFjdGl2aXR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDVweCA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5hY3Rpdml0eSBpIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTtcbn1cblxuLnZpZXctbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICB6LWluZGV4OiAxO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxNXB4ICM5OTk5OTk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDE1cHggIzk5OTk5OTtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzk5OTk5OTtcbiAgcmlnaHQ6IC0xMTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHJpZ2h0IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogcmlnaHQgMC41cztcbiAgLW8tdHJhbnNpdGlvbjogcmlnaHQgMC41cztcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC41cztcbn1cblxuLnZpZXctbWVzc2FnZS5hY3RpdmUge1xuICByaWdodDogMDtcbn1cblxuLnZpZXctbWVzc2FnZSAuc3RhdHVzLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogNDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTVweCAjY2NjY2NjO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNXB4ICNjY2NjY2M7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICNjY2NjY2M7XG59XG5cbi52aWV3LW1lc3NhZ2UgLnN0YXR1cy1iYXIgLmJhY2stYXJyb3cge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICNGRkEwMDA7XG4gIHBhZGRpbmc6IDdweDtcbn1cblxuLnZpZXctbWVzc2FnZSAuc3RhdHVzLWJhciAuYmFjay1hcnJvdyBpIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4udmlldy1tZXNzYWdlIC5zdGF0dXMtYmFyIC5zZW5kZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggNTBweCAwIDA7XG59XG5cbi52aWV3LW1lc3NhZ2UgLm1lc3NhZ2VzLWFyZWEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUwcHg7XG4gIGJvdHRvbTogNjNweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnZpZXctbWVzc2FnZSAubWVzc2FnZXMtYXJlYSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi52aWV3LW1lc3NhZ2UgLm1lc3NhZ2VzLWFyZWEgdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBhdXRvO1xuICBjbGVhcjogYm90aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4udmlldy1tZXNzYWdlIC5tZXNzYWdlcy1hcmVhIHVsIGxpID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAzcHggMjBweCAxMHB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4udmlldy1tZXNzYWdlIC5tZXNzYWdlcy1hcmVhIHVsIGxpID4gZGl2IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udmlldy1tZXNzYWdlIC5tZXNzYWdlcy1hcmVhIHVsIGxpID4gZGl2OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuLnZpZXctbWVzc2FnZSAubWVzc2FnZXMtYXJlYSB1bCBsaS5zZW50ID4gZGl2IHtcbiAgYmFja2dyb3VuZDogI0ZGQTAwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZsb2F0OiByaWdodDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAjRkZBMDAwO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4ICNGRkEwMDA7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNGRkEwMDA7XG59XG5cbi52aWV3LW1lc3NhZ2UgLm1lc3NhZ2VzLWFyZWEgdWwgbGkuc2VudCA+IGRpdjphZnRlciB7XG4gIHJpZ2h0OiAtNnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNGRkEwMDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE2MGRlZyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkZBMDAwO1xufVxuXG4udmlldy1tZXNzYWdlIC5tZXNzYWdlcy1hcmVhIHVsIGxpLnJlY2l2ZSA+IGRpdiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBmbG9hdDogbGVmdDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2U2ZTVlNTtcbn1cblxuLnZpZXctbWVzc2FnZSAubWVzc2FnZXMtYXJlYSB1bCBsaS5yZWNpdmUgPiBkaXY6YWZ0ZXIge1xuICBsZWZ0OiAtNnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjRkZGRkZGO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODVkZWcpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZGRkZGRjtcbn1cblxuLnZpZXctbWVzc2FnZSAubWVzc2FnZXMtYXJlYSB1bCBsaS5nb3RvIHtcbiAgd2lkdGg6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGJvdHRvbTogLTUwMHB4O1xuICBsZWZ0OiAtNTAlO1xufVxuXG4udmlldy1tZXNzYWdlIC50ZXh0LW1lZGlhLWFyZWEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogMztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLTFweCA1cHggI2Q5ZDlkOTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIC0xcHggNXB4ICNkOWQ5ZDk7XG4gIGJveC1zaGFkb3c6IDAgLTFweCA1cHggI2Q5ZDlkOTtcbn1cblxuLnZpZXctbWVzc2FnZSAudGV4dC1tZWRpYS1hcmVhIC5tZXNzYWdlLWZvcm0ge1xuICBoZWlnaHQ6IDYycHg7XG59XG5cbi52aWV3LW1lc3NhZ2UgLnRleHQtbWVkaWEtYXJlYSAubWVzc2FnZS1mb3JtID4gYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjRkZBMDAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHggMCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG59XG5cbi52aWV3LW1lc3NhZ2UgLnRleHQtbWVkaWEtYXJlYSAubWVzc2FnZS1mb3JtIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDIycHggNjBweCAyMXB4IDE1cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMjtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4uZm9ybS1ncm91cCA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG5cbi5mb3JtLWdyb3VwID4gc3BhbiBpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uZm9ybS1ncm91cCAudGl0bGUtbGV2ZTEge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDQwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiA0MHB4O1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5mb3JtLWdyb3VwLmgtODAge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5yZXNldCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbn1cblxuW2RhdGEtdmlld3BvcnQ9dHJ1ZV0ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5bZGF0YS12aWV3cG9ydD10cnVlXSA+IHNwYW4udmlld3BvcnRTaGFkb3cge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG59XG5cbi8qIEtleWZyYW1lcyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtZm9yZXZlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgfVxufVxuXG5ALW1zLWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIG1vdmUtZm9yZXZlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/main-layout/main-layout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/main-layout/main-layout.component.ts ***!
    \************************************************************/

  /*! exports provided: MainLayoutComponent */

  /***/
  function srcAppPagesMainLayoutMainLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
      return MainLayoutComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var MainLayoutComponent = /*#__PURE__*/function () {
      function MainLayoutComponent(platform, splashScreen, statusBar, menu) {
        _classCallCheck(this, MainLayoutComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.initializeApp();
      }

      _createClass(MainLayoutComponent, [{
        key: "closeMenu",
        value: function closeMenu() {
          this.menu.close('first');
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this3 = this;

          this.platform.ready().then(function () {
            _this3.statusBar.styleDefault();

            _this3.splashScreen.hide();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainLayoutComponent;
    }();

    MainLayoutComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }];
    };

    MainLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-layout/main-layout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-layout.component.scss */
      "./src/app/pages/main-layout/main-layout.component.scss"))["default"]]
    })], MainLayoutComponent);
    /***/
  },

  /***/
  "./src/app/pages/wefinex/audio-touch-unblock.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/wefinex/audio-touch-unblock.ts ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWefinexAudioTouchUnblockTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return AudioTouchUnlock;
    });

    var AudioTouchUnlock = /*#__PURE__*/function () {
      function AudioTouchUnlock() {
        _classCallCheck(this, AudioTouchUnlock);
      }

      _createClass(AudioTouchUnlock, null, [{
        key: "onInit",
        value: function onInit() {
          var isSupportAudioContext = !!(window.AudioContext || window.webkitAudioContext);

          if (isSupportAudioContext) {
            var context = new (window.AudioContext || window.webkitAudioContext)();
            this.touchUnlock(context).then(function () {
              AudioTouchUnlock.listenToPlaySound(context);
            });
          } else {
            AudioTouchUnlock.listenToPlaySound();
          }
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {
          if (this.intervalId) {
            window.clearInterval(this.intervalId);
          }
        }
      }, {
        key: "play",
        value: function play(url) {
          AudioTouchUnlock.soundQueue.push(url);
        }
      }, {
        key: "listenToPlaySound",
        value: function listenToPlaySound(context) {
          var isSoundPlaying = false;
          this.intervalId = window.setInterval(function () {
            if (!isSoundPlaying) {
              isSoundPlaying = true;
              var url = AudioTouchUnlock.soundQueue.shift();

              if (url) {
                if (context) {
                  AudioTouchUnlock.playAudio(url, context).then(function () {
                    return isSoundPlaying = false;
                  })["catch"](function () {
                    return isSoundPlaying = false;
                  });
                } else {
                  AudioTouchUnlock.playAudioDefaultConfig(url).then(function () {
                    return isSoundPlaying = false;
                  })["catch"](function () {
                    return isSoundPlaying = false;
                  });
                }
              } else {
                isSoundPlaying = false;
              }
            }
          }, 500);
        }
      }, {
        key: "playAudio",
        value: function playAudio(url, context) {
          var _this4 = this;

          var play = function play(audioData) {
            return new Promise(function (resolve, reject) {
              var source = context.createBufferSource();
              context.decodeAudioData(audioData.slice(0), function (buffer) {
                source.buffer = buffer;
                source.loop = false;

                source.onended = function () {
                  return resolve(true);
                };

                source.connect(context.destination);
                source.start();
                var timeout = setTimeout(function () {
                  clearTimeout(timeout);
                  resolve(true);
                }, 2000);
              }, function (e) {
                return reject(e);
              });
            });
          };

          return new Promise(function (resolve, reject) {
            if (!context || !(context instanceof (window.AudioContext || window.webkitAudioContext))) {
              reject('AudioTouchUnlock: You need to pass an instance of AudioContext to this method call');
            } else {
              if (_this4.audioRequestCaching[url]) {
                play(_this4.audioRequestCaching[url]).then(function (re) {
                  return resolve(re);
                })["catch"](function (e) {
                  return reject(e);
                });
              } else {
                var request = new XMLHttpRequest();
                request.open('GET', url, true);
                request.responseType = 'arraybuffer';

                request.onload = function () {
                  _this4.audioRequestCaching[url] = request.response;
                  play(request.response).then(function (re) {
                    return resolve(re);
                  })["catch"](function (e) {
                    return reject(e);
                  });
                };

                request.send();
              }
            }
          });
        }
      }, {
        key: "playAudioDefaultConfig",
        value: function playAudioDefaultConfig(url) {
          return new Promise(function (resolve) {
            var audio = new Audio(url);

            audio.onended = function () {
              return resolve(true);
            };

            audio.play();
            var timeout = setTimeout(function () {
              clearTimeout(timeout);
              resolve(true);
            }, 2000);
          });
        }
      }, {
        key: "touchUnlock",
        value: function touchUnlock(context) {
          return new Promise(function (resolve, reject) {
            if (!context || !(context instanceof (window.AudioContext || window.webkitAudioContext))) {
              reject('AudioTouchUnlock: You need to pass an instance of AudioContext to this method call');
            } else {
              if (context.state === 'suspended' && 'ontouchstart' in window) {
                var unlock = function unlock() {
                  context.resume().then(function () {
                    document.body.removeEventListener('touchstart', unlock);
                    document.body.removeEventListener('touchend', unlock);

                    if (window.parent) {
                      window.parent.document.body.removeEventListener('touchstart', unlock);
                      window.parent.document.body.removeEventListener('touchend', unlock);
                    }

                    resolve(true);
                  }, function (reason) {
                    reject(reason);
                  });
                };

                document.body.addEventListener('touchstart', unlock, false);
                document.body.addEventListener('touchend', unlock, false);

                if (window.parent) {
                  window.parent.document.body.addEventListener('touchstart', unlock, false);
                  window.parent.document.body.addEventListener('touchend', unlock, false);
                }
              } else {
                resolve(false);
              }
            }
          });
        }
      }]);

      return AudioTouchUnlock;
    }();

    AudioTouchUnlock.audioRequestCaching = {};
    AudioTouchUnlock.soundQueue = [];
    /***/
  },

  /***/
  "./src/app/pages/wefinex/wefinex.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/wefinex/wefinex.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWefinexWefinexComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap\");\n@charset \"UTF-8\";\n::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-bg);\n  border-radius: 10px;\n}\n* {\n  box-sizing: border-box;\n}\nhtml, body {\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n}\nbody {\n  font-family: 'DM Sans', sans-serif;\n  overflow: hidden;\n}\nbutton, a {\n  cursor: pointer;\n}\n.app-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: var(--app-container);\n  transition: .2s;\n}\n.app-content {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  padding: 16px 24px 24px 0;\n}\n.app-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 16px 24px;\n  position: relative;\n}\n.app-header-left, .app-header-right {\n  display: flex;\n  align-items: center;\n}\n.app-header-left {\n  flex-grow: 1;\n}\n.app-header-right button {\n  margin-left: 10px;\n}\n.app-icon {\n  width: 26px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: var(--main-color);\n  position: relative;\n}\n.app-icon:before, .app-icon:after {\n  content: '';\n  position: absolute;\n  width: 12px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: var(--main-color);\n  left: 50%;\n  transform: translatex(-50%);\n}\n.app-icon:before {\n  top: -6px;\n}\n.app-icon:after {\n  bottom: -6px;\n}\n.app-name {\n  color: var(--main-color);\n  margin: 0;\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 700;\n  margin: 0 32px;\n}\n.mode-switch {\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  color: var(--main-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.search-wrapper {\n  border-radius: 20px;\n  background-color: var(--search-area-bg);\n  padding-right: 12px;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 480px;\n  color: var(--light-font);\n  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);\n  overflow: hidden;\n}\n.dark .search-wrapper {\n  box-shadow: none;\n}\n.search-input {\n  border: none;\n  flex: 1;\n  outline: none;\n  height: 100%;\n  padding: 0 20px;\n  font-size: 16px;\n  background-color: var(--search-area-bg);\n  color: var(--main-color);\n}\n.search-input:placeholder {\n  color: var(--main-color);\n  opacity: .6;\n}\n.add-btn {\n  color: #fff;\n  background-color: var(--button-bg);\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notification-btn {\n  color: var(--main-color);\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.profile-btn {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  border-left: 2px solid #ddd;\n}\n.profile-btn img {\n  width: 32px;\n  height: 32px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-right: 4px;\n}\n.profile-btn span {\n  color: var(--main-color);\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 74px;\n}\n.page-content  {\n  flex: 1;\n  width: 100%;\n}\n.app-sidebar {\n  padding: 40px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.app-sidebar-link {\n  color: var(--main-color);\n  color: var(--link-color);\n  margin: 16px 0;\n  transition: .2s;\n  border-radius: 50%;\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.app-sidebar-link:hover {\n  background-color: var(--link-color-hover);\n  color: var(--link-color-active);\n}\n.app-sidebar-link.active {\n  background-color: var(--link-color-active-bg);\n  color: var(--link-color-active);\n}\n.projects-section {\n  flex: 2;\n  background-color: var(--projects-section);\n  border-radius: 32px;\n  padding: 32px 32px 0 32px;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.projects-section-line {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n}\n.projects-section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  color: var(--main-color);\n}\n.projects-section-header p {\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  opacity: .9;\n  margin: 0;\n  color: var(--main-color);\n}\n.projects-section-header .time {\n  font-size: 20px;\n}\n.projects-status {\n  display: flex;\n}\n.item-status {\n  display: flex;\n  flex-direction: column;\n  margin-right: 16px;\n}\n.item-status:not(:last-child) .status-type:after {\n  content: '';\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translatey(-50%);\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  border: 1px solid var(--secondary-color);\n}\n.status-number {\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  color: var(--main-color);\n}\n.status-type {\n  position: relative;\n  padding-right: 24px;\n  color: var(--secondary-color);\n}\n.view-actions {\n  display: flex;\n  align-items: center;\n}\n.view-btn {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px;\n  border-radius: 4px;\n  background-color: transparent;\n  border: none;\n  color: var(--main-color);\n  margin-left: 8px;\n  transition: .2s;\n}\n.view-btn.active {\n  background-color: var(--link-color-active-bg);\n  color: var(--link-color-active);\n}\n.view-btn:not(.active):hover {\n  background-color: var(--link-color-hover);\n  color: var(--link-color-active);\n}\n.messages-section {\n  flex-shrink: 0;\n  padding-bottom: 32px;\n  background-color: var(--projects-section);\n  margin-left: 24px;\n  flex: 1;\n  width: 100%;\n  border-radius: 30px;\n  position: relative;\n  overflow: auto;\n  transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);\n}\n.messages-section .messages-close {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 3;\n  border: none;\n  background-color: transparent;\n  color: var(--main-color);\n  display: none;\n}\n.messages-section.show {\n  transform: translateX(0);\n  opacity: 1;\n  margin-left: 0;\n}\n.messages-section .projects-section-header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  padding: 32px 24px 0 24px;\n  background-color: var(--projects-section);\n}\n.message-box {\n  border-top: 1px solid var(--message-box-border);\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n}\n.message-box:hover {\n  background-color: var(--message-box-hover);\n  border-top-color: var(--link-color-hover);\n}\n.message-box:hover + .message-box {\n  border-top-color: var(--link-color-hover);\n}\n.message-box img {\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 40px;\n  height: 40px;\n}\n.message-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.message-header .name {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  color: var(--main-color);\n  margin: 0;\n}\n.message-content {\n  padding-left: 16px;\n  width: 100%;\n}\n.star-checkbox input {\n  opacity: 0;\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.star-checkbox label {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.dark .star-checkbox {\n  color: var(--secondary-color);\n}\n.dark .star-checkbox input:checked + label {\n  color: var(--star);\n}\n.star-checkbox input:checked + label svg {\n  fill: var(--star);\n  transition: .2s;\n}\n.message-line {\n  font-size: 14px;\n  line-height: 20px;\n  margin: 8px 0;\n  color: var(--secondary-color);\n  opacity: .7;\n}\n.message-line.time {\n  text-align: right;\n  margin-bottom: 0;\n}\n.project-boxes {\n  margin: 0 -8px;\n  overflow-y: auto;\n}\n.project-boxes.jsGridView {\n  display: flex;\n  flex-wrap: wrap;\n}\n.project-boxes.jsGridView .project-box-wrapper {\n  width: 33.3%;\n}\n.project-boxes.jsListView .project-box {\n  display: flex;\n  border-radius: 10px;\n  position: relative;\n}\n.project-boxes.jsListView .project-box > * {\n  margin-right: 24px;\n}\n.project-boxes.jsListView .more-wrapper {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n.project-boxes.jsListView .project-box-content-header {\n  order: 1;\n  max-width: 120px;\n}\n.project-boxes.jsListView .project-box-header {\n  order: 2;\n}\n.project-boxes.jsListView .project-box-footer {\n  order: 3;\n  padding-top: 0;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.project-boxes.jsListView .project-box-footer:after {\n  display: none;\n}\n.project-boxes.jsListView .participants {\n  margin-bottom: 8px;\n}\n.project-boxes.jsListView .project-box-content-header p {\n  text-align: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.project-boxes.jsListView .project-box-header > span {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  font-size: 12px;\n}\n.project-boxes.jsListView .box-progress-wrapper {\n  order: 3;\n  flex: 1;\n}\n.project-box {\n  --main-color-card: #dbf6fd;\n  border-radius: 30px;\n  padding: 16px;\n  background-color: var(--main-color-card);\n}\n.project-box-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  color: var(--main-color);\n}\n.project-box-header span {\n  color: #4A4A4A;\n  opacity: .9;\n  font-size: 16px;\n  line-height: 16px;\n}\n.project-box-content-header {\n  text-align: center;\n  margin-bottom: 16px;\n}\n.project-box-content-header p {\n  margin: 0;\n}\n.project-box-wrapper {\n  padding: 8px;\n  transition: .2s;\n}\n.project-btn-more {\n  padding: 0;\n  height: 14px;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  background-color: transparent;\n  border: none;\n  flex-shrink: 0;\n  /*&:after, &:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background-color: var(--main-color);\r\n    opacity: .8;\r\n    left: 50%;\r\n    transform: translatex(-50%);\r\n  }\r\n  \r\n  &:before { top: 0;}\r\n  &:after { bottom: 0; }*/\n}\n.more-wrapper {\n  position: relative;\n}\n.box-content-header {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  opacity: .7;\n}\n.box-content-subheader {\n  font-size: 14px;\n  line-height: 24px;\n  opacity: .7;\n}\n.box-progress {\n  display: block;\n  height: 4px;\n  border-radius: 6px;\n  transition: transform 1s ease-in-out .box-progress -bar;\n  transition-width: 100%;\n  transition-height: 4px;\n  transition-border-radius: 6px;\n  transition-overflow: hidden;\n  transition-background-color: #fff;\n  transition-margin: 8px 0;\n}\n.box-progress-header {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 16px;\n  margin: 0;\n}\n.box-progress-percentage {\n  text-align: right;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 16px;\n}\n.project-box-footer {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 16px;\n  position: relative;\n}\n.project-box-footer:after {\n  content: '';\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.6);\n  width: calc(100% + 32px);\n  top: 0;\n  left: -16px;\n  height: 1px;\n}\n.participants {\n  display: flex;\n  align-items: center;\n}\n.participants img {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.participants img:not(:first-child) {\n  margin-left: -8px;\n}\n.add-participant {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-left: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n.days-left {\n  background-color: rgba(255, 255, 255, 0.6);\n  font-size: 12px;\n  border-radius: 20px;\n  flex-shrink: 0;\n  padding: 6px 16px;\n  font-weight: 700;\n}\n.mode-switch.active .moon {\n  fill: var(--main-color);\n}\n.messages-btn {\n  border-radius: 4px 0 0 4px;\n  position: absolute;\n  right: 0;\n  top: 58px;\n  background-color: var(--message-btn);\n  border: none;\n  color: var(--main-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px;\n  display: none;\n}\n@media screen and (max-width: 980px) {\n  .project-boxes.jsGridView .project-box-wrapper {\n    width: 50%;\n  }\n  .status-number, .status-type {\n    font-size: 14px;\n  }\n  .status-type:after {\n    width: 4px;\n    height: 4px;\n  }\n  .item-status {\n    margin-right: 0;\n  }\n}\n@media screen and (max-width: 880px) {\n  .messages-section {\n    transform: translateX(100%);\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    z-index: 2;\n    height: 100%;\n    width: 100%;\n  }\n  .messages-section .messages-close {\n    display: block;\n  }\n  .messages-btn {\n    display: flex;\n  }\n}\n@media screen and (max-width: 720px) {\n  .app-name, .profile-btn span {\n    display: none;\n  }\n  .add-btn, .notification-btn, .mode-switch {\n    width: 20px;\n    height: 20px;\n  }\n  .add-btn svg, .notification-btn svg, .mode-switch svg {\n    width: 16px;\n    height: 16px;\n  }\n  .app-header-right button {\n    margin-left: 4px;\n  }\n}\n@media screen and (max-width: 520px) {\n  .projects-section {\n    overflow: auto;\n  }\n  .project-boxes {\n    overflow-y: visible;\n  }\n  .app-sidebar, .app-icon {\n    display: none;\n  }\n  .app-content {\n    padding: 16px 12px 24px 12px;\n  }\n  .status-number, .status-type {\n    font-size: 10px;\n  }\n  .view-btn {\n    width: 24px;\n    height: 24px;\n  }\n  .app-header {\n    padding: 16px 10px;\n  }\n  .search-input {\n    max-width: 120px;\n  }\n  .project-boxes.jsGridView .project-box-wrapper {\n    width: 100%;\n  }\n  .projects-section {\n    padding: 24px 16px 0 16px;\n  }\n  .profile-btn img {\n    width: 24px;\n    height: 24px;\n  }\n  .app-header {\n    padding: 10px;\n  }\n  .projects-section-header p,\n  .projects-section-header .time {\n    font-size: 18px;\n  }\n  .status-type {\n    padding-right: 4px;\n  }\n  .status-type:after {\n    display: none;\n  }\n  .search-input {\n    font-size: 14px;\n  }\n  .messages-btn {\n    top: 48px;\n  }\n  .box-content-header {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .box-content-subheader {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .project-boxes.jsListView .project-box-header > span {\n    font-size: 10px;\n  }\n  .box-progress-header {\n    font-size: 12px;\n  }\n  .box-progress-percentage {\n    font-size: 10px;\n  }\n  .days-left {\n    font-size: 8px;\n    padding: 6px 6px;\n    text-align: center;\n  }\n  .project-boxes.jsListView .project-box > * {\n    margin-right: 10px;\n  }\n  .project-boxes.jsListView .more-wrapper {\n    right: 2px;\n    top: 10px;\n  }\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VmaW5leC9DOlxcVXNlcnNcXGFsZXguaHV5bmhcXERlc2t0b3BcXEJhbWJvb1xcdGVtcGxhdGVcXGdpdGh1YlxcZm9vZC1ubHVcXGZvb2Qtbmx1L3NyY1xcYXBwXFxwYWdlc1xcd2VmaW5leFxcd2VmaW5leC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2VmaW5leC93ZWZpbmV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1RkFBWTtBQ0FaLGdCQUFnQjtBREVoQjtFQUNDLFVBQVU7RUFDVixtQkFBbUI7QUNDcEI7QURFQTtFQUNDLCtCQUErQjtFQUMvQixtQkFBbUI7QUNDcEI7QURDQTtFQUNFLHNCQUFzQjtBQ0V4QjtBREVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0FDQ1g7QURFQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7QUNDbEI7QURFQTtFQUNFLGVBQWU7QUNDakI7QURHRTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsZUFBZTtBQ0FuQjtBREdFO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0FDQTdCO0FER0U7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQ0F0QjtBREVJO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQ0N6QjtBREVJO0VBQVMsWUFBWTtBQ0V6QjtBREFJO0VBQ0UsaUJBQWlCO0FDR3ZCO0FEQ0U7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0FDRXRCO0FEUEc7RUFRRyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxT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VztFQ0xiO0VERkE7SUFTb0IsY0FBYztFQ0psQztFRE9BO0lBQWdCLGFBQWE7RUNKN0I7QUFDRjtBRE1BO0VBQ0U7SUFBK0IsYUFBYTtFQ0Y1QztFRElBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUNGZDtFREFBO0lBS0ksV0FBVztJQUNYLFlBQVk7RUNGaEI7RURNQTtJQUNFLGdCQUFnQjtFQ0psQjtBQUNGO0FET0E7RUFDRTtJQUFvQixjQUFjO0VDSGxDO0VESUE7SUFBaUIsbUJBQW1CO0VDRHBDO0VER0E7SUFBMEIsYUFBYTtFQ0F2QztFREVBO0lBQWUsNEJBQTRCO0VDQzNDO0VEQ0E7SUFDRSxlQUFlO0VDQ2pCO0VERUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQ0FkO0VER0E7SUFDRSxrQkFBa0I7RUNEcEI7RURJQTtJQUNFLGdCQUFnQjtFQ0ZsQjtFREtBO0lBQ0UsV0FBVztFQ0hiO0VETUE7SUFDRSx5QkFBeUI7RUNKM0I7RURPQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VDTGQ7RURRQTtJQUNFLGFBQWE7RUNOZjtFRFNBOztJQUVFLGVBQWU7RUNQakI7RURVQTtJQUNFLGtCQUFrQjtFQ1JwQjtFRE9BO0lBSUksYUFBYTtFQ1JqQjtFRFlBO0lBQ0UsZUFBZTtFQ1ZqQjtFRGFBO0lBQWdCLFNBQVM7RUNWekI7RURZQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUNWbkI7RURhQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUNYbkI7RURjQTtJQUNFLGVBQWU7RUNaakI7RURlQTtJQUNFLGVBQWU7RUNiakI7RURnQkE7SUFDRSxlQUFlO0VDZGpCO0VEaUJBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7RUNmcEI7RURrQkE7SUFDRSxrQkFBa0I7RUNoQnBCO0VEbUJBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUNqQlg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlZmluZXgvd2VmaW5leC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PURNK1NhbnM6NDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiB3aWR0aDogNnB4O1xyXG4gYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGxiYXItYmcpO1xyXG4gYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYnV0dG9uLCBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcHAge1xyXG4gICYtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29udGFpbmVyKTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbiAgXHJcbiAgJi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4IDI0cHggMDtcclxuICB9XHJcbiAgXHJcbiAgJi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgJi1sZWZ0LCAmLXJpZ2h0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi1sZWZ0IHsgZmxleC1ncm93OiAxOyB9IFxyXG4gICAgXHJcbiAgICAmLXJpZ2h0IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi1pY29uIHtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmJlZm9yZSB7IHRvcDogLTZweDsgfVxyXG4gICAgJjphZnRlciB7IGJvdHRvbTogLTZweDsgfVxyXG4gIH1cclxuICBcclxuICAmLW5hbWUge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAwIDMycHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kZS1zd2l0Y2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtd3JhcHBlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYXJlYS1iZyk7XHJcbiAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodC1mb250KTtcclxuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDEzNiwxNDgsMTcxLC4yKSwwIDI0cHggMjBweCAtMjRweCByZ2JhKDcxLDgyLDEwNywuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAuZGFyayAmIHsgYm94LXNoYWRvdzogbm9uZTsgfVxyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZmxleDogMTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1hcmVhLWJnKTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgXHJcbiAgJjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICB9XHJcbn1cclxuXHJcbi5hZGQtYnRuIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWJ0biB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWJ0biB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMTJweDtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZGQ7XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2lkdGg6IDc0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS1jb250ZW50wqB7XHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFwcC1zaWRlYmFyIHtcclxuICBwYWRkaW5nOiA0MHB4IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgJi1saW5rIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcclxuICAgICAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlLWJnKTtcclxuICAgICAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1zZWN0aW9uIHtcclxuICBmbGV4OiAyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RzLXNlY3Rpb24pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgXHJcbiAgJi1saW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gICYtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG9wYWNpdHk6IC45O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpbWUge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdHMtc3RhdHVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaXRlbS1zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgXHJcbiAgJjpub3QoOmxhc3QtY2hpbGQpIC5zdGF0dXMtdHlwZTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtNTAlKTtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzLW51bWJlciB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4uc3RhdHVzLXR5cGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4udmlldy1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udmlldy1idG4ge1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgdHJhbnNpdGlvbjogLjJzO1xyXG4gIFxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlLWJnKTtcclxuICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1lc3NhZ2VzLXNlY3Rpb24ge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RzLXNlY3Rpb24pO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjU2LCAxKTtcclxuICBcclxuICAubWVzc2FnZXMtY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAmLnNob3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHggMCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXByb2plY3RzLXNlY3Rpb24pO1xyXG4gIH1cclxufVxyXG5cclxuLm1lc3NhZ2UtYm94IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbWVzc2FnZS1ib3gtYm9yZGVyKTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZXNzYWdlLWJveC1ob3Zlcik7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcclxuICAgIFxyXG4gICAgKyAubWVzc2FnZS1ib3gge1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVzc2FnZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVzc2FnZS1jb250ZW50IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGFyLWNoZWNrYm94IHtcclxuICBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmRhcmsgJiB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1zdGFyKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHN2ZyB7XHJcbiAgICBmaWxsOiB2YXIoLS1zdGFyKTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlLWxpbmUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG9wYWNpdHk6IC43O1xyXG4gIFxyXG4gICYudGltZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1ib3hlcyB7XHJcbiAgbWFyZ2luOiAwIC04cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBcclxuICAmLmpzR3JpZFZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIFxyXG4gICAgLnByb2plY3QtYm94LXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuanNMaXN0VmlldyB7XHJcbiAgICAucHJvamVjdC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgID4gKiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tb3JlLXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICB0b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC1jb250ZW50LWhlYWRlciB7XHJcbiAgICAgIG9yZGVyOiAxO1xyXG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1ib3gtaGVhZGVyIHtcclxuICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC1mb290ZXIge1xyXG4gICAgICBvcmRlcjogMztcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QtYm94LWZvb3RlcjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wYXJ0aWNpcGFudHMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC1jb250ZW50LWhlYWRlciBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC1oZWFkZXIgPiBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDE2cHg7XHJcbiAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJveC1wcm9ncmVzcy13cmFwcGVyIHtcclxuICAgICAgb3JkZXI6IDM7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1ib3gge1xyXG4gIC0tbWFpbi1jb2xvci1jYXJkOiAjZGJmNmZkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWNhcmQpO1xyXG4gIFxyXG4gICYtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIFxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjNEE0QTRBO1xyXG4gICAgICBvcGFjaXR5OiAuOTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi1jb250ZW50LWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgXHJcbiAgICBwIHsgbWFyZ2luOiAwOyB9XHJcbiAgfVxyXG4gIFxyXG4gICYtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1idG4tbW9yZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgXHJcbiAgLyomOmFmdGVyLCAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6YmVmb3JlIHsgdG9wOiAwO31cclxuICAmOmFmdGVyIHsgYm90dG9tOiAwOyB9Ki9cclxufVxyXG5cclxuLm1vcmUtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYm94LWNvbnRlbnQtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBvcGFjaXR5OiAuNztcclxufVxyXG5cclxuLmJveC1jb250ZW50LXN1YmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG9wYWNpdHk6IC43O1xyXG59XHJcblxyXG4uYm94LXByb2dyZXNzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0XHJcbiAgJi1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcbiAgXHJcbiAgJi1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAmLXdyYXBwZXIge1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gICYtcGVyY2VudGFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJveC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpOztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IC0xNnB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFydGljaXBhbnRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgXHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkLXBhcnRpY2lwYW50IHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmRheXMtbGVmdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5tb2RlLXN3aXRjaC5hY3RpdmUgLm1vb24ge1xyXG4gIGZpbGw6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4ubWVzc2FnZXMtYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1OHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lc3NhZ2UtYnRuKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAucHJvamVjdC1ib3hlcy5qc0dyaWRWaWV3IC5wcm9qZWN0LWJveC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMtbnVtYmVyLCAuc3RhdHVzLXR5cGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzLXR5cGU6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gIH1cclxuICBcclxuICAuaXRlbS1zdGF0dXMgeyBtYXJnaW4tcmlnaHQ6IDA7IH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcclxuICAubWVzc2FnZXMtc2VjdGlvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICAubWVzc2FnZXMtY2xvc2UgeyBkaXNwbGF5OiBibG9jazsgfVxyXG4gIH1cclxuICBcclxuICAubWVzc2FnZXMtYnRuIHsgZGlzcGxheTogZmxleDsgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gIC5hcHAtbmFtZSwgLnByb2ZpbGUtYnRuIHNwYW4geyBkaXNwbGF5OiBub25lOyB9XHJcbiAgXHJcbiAgLmFkZC1idG4sIC5ub3RpZmljYXRpb24tYnRuLCAubW9kZS1zd2l0Y2gge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBcclxuICAgIHN2ZyB7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtaGVhZGVyLXJpZ2h0IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAucHJvamVjdHMtc2VjdGlvbiB7IG92ZXJmbG93OiBhdXRvOyB9XHJcbiAgLnByb2plY3QtYm94ZXMgeyBvdmVyZmxvdy15OiB2aXNpYmxlOyB9XHJcbiAgXHJcbiAgLmFwcC1zaWRlYmFyLCAuYXBwLWljb24geyBkaXNwbGF5OiBub25lOyB9XHJcbiAgXHJcbiAgLmFwcC1jb250ZW50IHsgcGFkZGluZzogMTZweCAxMnB4IDI0cHggMTJweDt9XHJcbiAgXHJcbiAgLnN0YXR1cy1udW1iZXIsIC5zdGF0dXMtdHlwZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC52aWV3LWJ0biB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTZweCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWlucHV0IHtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0LWJveGVzLmpzR3JpZFZpZXcgLnByb2plY3QtYm94LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0cy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweCAwIDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLWJ0biBpbWcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciBwLFxyXG4gIC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciAudGltZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cy10eXBlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAubWVzc2FnZXMtYnRuIHsgdG9wOiA0OHB4OyB9XHJcblxyXG4gIC5ib3gtY29udGVudC1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuYm94LWNvbnRlbnQtc3ViaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtaGVhZGVyID4gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYm94LXByb2dyZXNzLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuYm94LXByb2dyZXNzLXBlcmNlbnRhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRheXMtbGVmdCB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHBhZGRpbmc6IDZweCA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveCA+ICoge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAubW9yZS13cmFwcGVyIHtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgfVxyXG59IiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RE0rU2Fuczo0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhci1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmJ1dHRvbiwgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFwcC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29udGFpbmVyKTtcbiAgdHJhbnNpdGlvbjogLjJzO1xufVxuXG4uYXBwLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDE2cHggMjRweCAyNHB4IDA7XG59XG5cbi5hcHAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcHAtaGVhZGVyLWxlZnQsIC5hcHAtaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwcC1oZWFkZXItbGVmdCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmFwcC1oZWFkZXItcmlnaHQgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5hcHAtaWNvbiB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXBwLWljb246YmVmb3JlLCAuYXBwLWljb246YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xufVxuXG4uYXBwLWljb246YmVmb3JlIHtcbiAgdG9wOiAtNnB4O1xufVxuXG4uYXBwLWljb246YWZ0ZXIge1xuICBib3R0b206IC02cHg7XG59XG5cbi5hcHAtbmFtZSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDAgMzJweDtcbn1cblxuLm1vZGUtc3dpdGNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWFyZWEtYmcpO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1mb250KTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgxMzYsIDE0OCwgMTcxLCAwLjIpLCAwIDI0cHggMjBweCAtMjRweCByZ2JhKDcxLCA4MiwgMTA3LCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGFyayAuc2VhcmNoLXdyYXBwZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBmbGV4OiAxO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYXJlYS1iZyk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnNlYXJjaC1pbnB1dDpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgb3BhY2l0eTogLjY7XG59XG5cbi5hZGQtYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5vdGlmaWNhdGlvbi1idG4ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWJ0biB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xufVxuXG4ucHJvZmlsZS1idG4gaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5wcm9maWxlLWJ0biBzcGFuIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDc0cHg7XG59XG5cbi5wYWdlLWNvbnRlbnTCoCB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXBwLXNpZGViYXIge1xuICBwYWRkaW5nOiA0MHB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHAtc2lkZWJhci1saW5rIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XG4gIG1hcmdpbjogMTZweCAwO1xuICB0cmFuc2l0aW9uOiAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXBwLXNpZGViYXItbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItaG92ZXIpO1xuICBjb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUpO1xufVxuXG4uYXBwLXNpZGViYXItbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZS1iZyk7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XG59XG5cbi5wcm9qZWN0cy1zZWN0aW9uIHtcbiAgZmxleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdHMtc2VjdGlvbik7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3RzLXNlY3Rpb24tbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG5cbi5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4ucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG9wYWNpdHk6IC45O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnByb2plY3RzLXNlY3Rpb24taGVhZGVyIC50aW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHJvamVjdHMtc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLml0ZW0tc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1zdGF0dXM6bm90KDpsYXN0LWNoaWxkKSAuc3RhdHVzLXR5cGU6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC01MCUpO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4uc3RhdHVzLW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnN0YXR1cy10eXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnZpZXctYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52aWV3LWJ0biB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB0cmFuc2l0aW9uOiAuMnM7XG59XG5cbi52aWV3LWJ0bi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZS1iZyk7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XG59XG5cbi52aWV3LWJ0bjpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcbn1cblxuLm1lc3NhZ2VzLXNlY3Rpb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RzLXNlY3Rpb24pO1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC41NiwgMSk7XG59XG5cbi5tZXNzYWdlcy1zZWN0aW9uIC5tZXNzYWdlcy1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTJweDtcbiAgei1pbmRleDogMztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVzc2FnZXMtc2VjdGlvbi5zaG93IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm1lc3NhZ2VzLXNlY3Rpb24gLnByb2plY3RzLXNlY3Rpb24taGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAzMnB4IDI0cHggMCAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0cy1zZWN0aW9uKTtcbn1cblxuLm1lc3NhZ2UtYm94IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW1lc3NhZ2UtYm94LWJvcmRlcik7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lc3NhZ2UtYm94OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVzc2FnZS1ib3gtaG92ZXIpO1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcbn1cblxuLm1lc3NhZ2UtYm94OmhvdmVyICsgLm1lc3NhZ2UtYm94IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1ob3Zlcik7XG59XG5cbi5tZXNzYWdlLWJveCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubWVzc2FnZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVzc2FnZS1oZWFkZXIgLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1lc3NhZ2UtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdGFyLWNoZWNrYm94IGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc3Rhci1jaGVja2JveCBsYWJlbCB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXJrIC5zdGFyLWNoZWNrYm94IHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5kYXJrIC5zdGFyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1zdGFyKTtcbn1cblxuLnN0YXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHN2ZyB7XG4gIGZpbGw6IHZhcigtLXN0YXIpO1xuICB0cmFuc2l0aW9uOiAuMnM7XG59XG5cbi5tZXNzYWdlLWxpbmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgb3BhY2l0eTogLjc7XG59XG5cbi5tZXNzYWdlLWxpbmUudGltZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucHJvamVjdC1ib3hlcyB7XG4gIG1hcmdpbjogMCAtOHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0dyaWRWaWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0dyaWRWaWV3IC5wcm9qZWN0LWJveC13cmFwcGVyIHtcbiAgd2lkdGg6IDMzLjMlO1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3ggPiAqIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5tb3JlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDE2cHg7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWNvbnRlbnQtaGVhZGVyIHtcbiAgb3JkZXI6IDE7XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWhlYWRlciB7XG4gIG9yZGVyOiAyO1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveC1mb290ZXIge1xuICBvcmRlcjogMztcbiAgcGFkZGluZy10b3A6IDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtZm9vdGVyOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucGFydGljaXBhbnRzIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveC1jb250ZW50LWhlYWRlciBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWhlYWRlciA+IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTZweDtcbiAgbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5ib3gtcHJvZ3Jlc3Mtd3JhcHBlciB7XG4gIG9yZGVyOiAzO1xuICBmbGV4OiAxO1xufVxuXG4ucHJvamVjdC1ib3gge1xuICAtLW1haW4tY29sb3ItY2FyZDogI2RiZjZmZDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci1jYXJkKTtcbn1cblxuLnByb2plY3QtYm94LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4ucHJvamVjdC1ib3gtaGVhZGVyIHNwYW4ge1xuICBjb2xvcjogIzRBNEE0QTtcbiAgb3BhY2l0eTogLjk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5wcm9qZWN0LWJveC1jb250ZW50LWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnByb2plY3QtYm94LWNvbnRlbnQtaGVhZGVyIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9qZWN0LWJveC13cmFwcGVyIHtcbiAgcGFkZGluZzogOHB4O1xuICB0cmFuc2l0aW9uOiAuMnM7XG59XG5cbi5wcm9qZWN0LWJ0bi1tb3JlIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICAvKiY6YWZ0ZXIsICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgJjpiZWZvcmUgeyB0b3A6IDA7fVxyXG4gICY6YWZ0ZXIgeyBib3R0b206IDA7IH0qL1xufVxuXG4ubW9yZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm94LWNvbnRlbnQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3BhY2l0eTogLjc7XG59XG5cbi5ib3gtY29udGVudC1zdWJoZWFkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBvcGFjaXR5OiAuNztcbn1cblxuLmJveC1wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQgLmJveC1wcm9ncmVzcyAtYmFyO1xuICB0cmFuc2l0aW9uLXdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uLWhlaWdodDogNHB4O1xuICB0cmFuc2l0aW9uLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbi1vdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb24tbWFyZ2luOiA4cHggMDtcbn1cblxuLmJveC1wcm9ncmVzcy1oZWFkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5ib3gtcHJvZ3Jlc3MtcGVyY2VudGFnZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5wcm9qZWN0LWJveC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0LWJveC1mb290ZXI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMTZweDtcbiAgaGVpZ2h0OiAxcHg7XG59XG5cbi5wYXJ0aWNpcGFudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFydGljaXBhbnRzIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wYXJ0aWNpcGFudHMgaW1nOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG5cbi5hZGQtcGFydGljaXBhbnQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRheXMtbGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tb2RlLXN3aXRjaC5hY3RpdmUgLm1vb24ge1xuICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLm1lc3NhZ2VzLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDU4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lc3NhZ2UtYnRuKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gIC5wcm9qZWN0LWJveGVzLmpzR3JpZFZpZXcgLnByb2plY3QtYm94LXdyYXBwZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnN0YXR1cy1udW1iZXIsIC5zdGF0dXMtdHlwZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5zdGF0dXMtdHlwZTphZnRlciB7XG4gICAgd2lkdGg6IDRweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgfVxuICAuaXRlbS1zdGF0dXMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuICAubWVzc2FnZXMtc2VjdGlvbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWVzc2FnZXMtc2VjdGlvbiAubWVzc2FnZXMtY2xvc2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tZXNzYWdlcy1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmFwcC1uYW1lLCAucHJvZmlsZS1idG4gc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWRkLWJ0biwgLm5vdGlmaWNhdGlvbi1idG4sIC5tb2RlLXN3aXRjaCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5hZGQtYnRuIHN2ZywgLm5vdGlmaWNhdGlvbi1idG4gc3ZnLCAubW9kZS1zd2l0Y2ggc3ZnIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbiAgLmFwcC1oZWFkZXItcmlnaHQgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIC5wcm9qZWN0cy1zZWN0aW9uIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICAucHJvamVjdC1ib3hlcyB7XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgfVxuICAuYXBwLXNpZGViYXIsIC5hcHAtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYXBwLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE2cHggMTJweCAyNHB4IDEycHg7XG4gIH1cbiAgLnN0YXR1cy1udW1iZXIsIC5zdGF0dXMtdHlwZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC52aWV3LWJ0biB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIC5hcHAtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XG4gIH1cbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgfVxuICAucHJvamVjdC1ib3hlcy5qc0dyaWRWaWV3IC5wcm9qZWN0LWJveC13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvamVjdHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjRweCAxNnB4IDAgMTZweDtcbiAgfVxuICAucHJvZmlsZS1idG4gaW1nIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbiAgLmFwcC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLnByb2plY3RzLXNlY3Rpb24taGVhZGVyIHAsXG4gIC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciAudGltZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5zdGF0dXMtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xuICB9XG4gIC5zdGF0dXMtdHlwZTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc2VhcmNoLWlucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLm1lc3NhZ2VzLWJ0biB7XG4gICAgdG9wOiA0OHB4O1xuICB9XG4gIC5ib3gtY29udGVudC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxuICAuYm94LWNvbnRlbnQtc3ViaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtaGVhZGVyID4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5ib3gtcHJvZ3Jlc3MtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmJveC1wcm9ncmVzcy1wZXJjZW50YWdlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmRheXMtbGVmdCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgcGFkZGluZzogNnB4IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3ggPiAqIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAubW9yZS13cmFwcGVyIHtcbiAgICByaWdodDogMnB4O1xuICAgIHRvcDogMTBweDtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/wefinex/wefinex.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/wefinex/wefinex.component.ts ***!
    \****************************************************/

  /*! exports provided: WefinexComponent */

  /***/
  function srcAppPagesWefinexWefinexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WefinexComponent", function () {
      return WefinexComponent;
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


    var src_app_services_wefinex_command_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/wefinex-command.service */
    "./src/app/services/wefinex-command.service.ts");
    /* harmony import */


    var src_app_services_wefinex_result_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/wefinex-result.service */
    "./src/app/services/wefinex-result.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _audio_touch_unblock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./audio-touch-unblock */
    "./src/app/pages/wefinex/audio-touch-unblock.ts");

    var WefinexComponent = /*#__PURE__*/function () {
      function WefinexComponent(document, wefinexCommandService, wefinexResultService) {
        var _this5 = this;

        _classCallCheck(this, WefinexComponent);

        this.document = document;
        this.wefinexCommandService = wefinexCommandService;
        this.wefinexResultService = wefinexResultService;
        this.mapType = {
          G: {
            b: "#fee4cb",
            t: "#ff942e",
            f: "Giảm"
          },
          T: {
            b: "#c8f7dc",
            t: "#34c471",
            f: "Tăng"
          }
        };
        this.mapResult = {
          THUA: "Lose",
          THANG: "WIN"
        };
        this.soundOn = window.localStorage.getItem("soundLive") != 'false';
        this.wefinexResultService.getListByCondition(function (ref) {
          return ref.orderBy("lastUpdate", "desc").limit(8);
        }).subscribe(function (k) {
          _this5.result = k;
        });
        this.wefinexCommandService.get('command').subscribe(function (data) {
          var d = new Date();
          var hours = String(d.getHours()).padStart(2, '0');
          var minute = String(d.getMinutes()).padStart(2, '0');
          var day = String(d.getDate()).padStart(2, '0');
          var month = String(d.getMonth() + 1).padStart(2, '0');
          var year = d.getFullYear();
          var datePlace = data.time.split(' ')[0];
          var timePlace = data.time.split(' ')[1];
          var currentTime = "".concat(day, ":").concat(month, ":").concat(year, " ").concat(hours, ":").concat(minute);
          console.log(currentTime);
          console.log(data.time);

          if (currentTime === data.time) {
            _this5.current = data;

            _this5.playSound("assets/wefinex/sounds/".concat(_this5.current.type, ".mp3"));

            var time = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])((60 - new Date().getSeconds()) * 1000);
            time.subscribe(function (d) {
              _this5.current = undefined;
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(time)).subscribe(function (value) {
              _this5.current['countDown'] = Math.max(60 - new Date().getSeconds(), 0);
              _this5.current['percent'] = Number(parseFloat((60 - _this5.current['countDown']) / 60 * 100 + "").toFixed(2));
            }, function (err) {
              return _this5.current = undefined;
            });
          } else {
            _this5.playSound("assets/wefinex/sounds/warning.mp3");

            _this5.current = undefined;
          }
        });
      }

      _createClass(WefinexComponent, [{
        key: "initSound",
        value: function initSound() {
          var _this6 = this;

          if (!this.soundOn) return;
          var audio = new Audio("assets/wefinex/sounds/warning.mp3");
          audio.muted = true;
          var alert_elem = document.querySelector('#trigger-volume');
          audio.play().then(function () {
            _this6.soundOn = true;
            window.localStorage["soundLive"] = _this6.soundOn;
          })["catch"](function () {
            _this6.soundOn = false;
            window.localStorage["soundLive"] = _this6.soundOn;
            alert_elem.addEventListener('click', function () {
              audio.play().then();
              _this6.soundOn = true;
              window.localStorage["soundLive"] = _this6.soundOn;
            });
          });
        }
      }, {
        key: "clickIconVolume",
        value: function clickIconVolume() {
          this.soundOn = !this.soundOn;
          window.localStorage["soundLive"] = this.soundOn;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _audio_touch_unblock__WEBPACK_IMPORTED_MODULE_7__["default"].onDestroy();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          this.initSound();
          var modeSwitch = this.document.querySelector('.mode-switch');
          modeSwitch.addEventListener('click', function () {
            _this7.document.documentElement.classList.toggle('dark');

            modeSwitch.classList.toggle('active');
          });
          var listView = this.document.querySelector('.list-view');
          var gridView = this.document.querySelector('.grid-view');
          var projectsList = this.document.querySelector('.project-boxes');
          listView.addEventListener('click', function () {
            gridView.classList.remove('active');
            listView.classList.add('active');
            projectsList.classList.remove('jsGridView');
            projectsList.classList.add('jsListView');
          });
          gridView.addEventListener('click', function () {
            gridView.classList.add('active');
            listView.classList.remove('active');
            projectsList.classList.remove('jsListView');
            projectsList.classList.add('jsGridView');
          });
          this.document.querySelector('.messages-btn').addEventListener('click', function () {
            _this7.document.querySelector('.messages-section').classList.add('show');
          });
          this.document.querySelector('.messages-close').addEventListener('click', function () {
            _this7.document.querySelector('.messages-section').classList.remove('show');
          });
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return item.id;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          _audio_touch_unblock__WEBPACK_IMPORTED_MODULE_7__["default"].onInit();
        }
      }, {
        key: "playSound",
        value: function playSound(url) {
          if (this.soundOn) {
            _audio_touch_unblock__WEBPACK_IMPORTED_MODULE_7__["default"].play(url);
          }
        }
      }]);

      return WefinexComponent;
    }();

    WefinexComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: src_app_services_wefinex_command_service__WEBPACK_IMPORTED_MODULE_3__["WefinexCommandService"]
      }, {
        type: src_app_services_wefinex_result_service__WEBPACK_IMPORTED_MODULE_4__["WefinexResultService"]
      }];
    };

    WefinexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wefinex',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./wefinex.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wefinex/wefinex.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./wefinex.component.scss */
      "./src/app/pages/wefinex/wefinex.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], WefinexComponent);
    /***/
  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CartService = /*#__PURE__*/function () {
      function CartService() {
        _classCallCheck(this, CartService);

        this.data = [{
          id: "0",
          priority: 5,
          name: 'Sinh tố bơ',
          price: 20000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/bo.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "1",
          priority: 0,
          name: 'Sinh tố bơ dưa gang',
          price: 18000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/bo-dua-gang.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "2",
          priority: 0,
          name: 'Sinh tố bơ dừa',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/bo-dua.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "3",
          priority: 1,
          name: 'Sinh tố SAPÔCHÊ',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/sapoche.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "4",
          priority: 5,
          name: 'Sinh tố mãng cầu',
          price: 18000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/mang-cau.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "5",
          priority: 3,
          name: 'Sinh tố đu đủ',
          price: 12000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/du-du.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "6",
          priority: 2,
          name: 'Sinh tố dâu',
          price: 20000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/dau.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "7",
          priority: 0,
          name: 'Sinh tố dâu yaourt',
          price: 25000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/dau-yaourt.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "8",
          priority: 0,
          name: 'Sinh tố dâu mãng cầu',
          price: 18000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/dau-mang-cau.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "9",
          priority: 0,
          name: 'Sinh tố dâu dừa',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/dau-dua.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "10",
          priority: 2,
          name: 'Sinh tố mít',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/mit.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "11",
          priority: 5,
          name: 'Sinh tố dưa gang',
          price: 12000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/dua-gang.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "12",
          priority: 0,
          name: 'Sinh tố cà rốt',
          price: 12000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/ca-rot.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "13",
          priority: 3,
          name: 'Sinh tố cà chua',
          price: 12000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/ca-chua.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "14",
          priority: 5,
          name: 'Sinh tố cam',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/cam.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "15",
          priority: 5,
          name: 'Sinh tố chanh dây',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/chanh-day.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "16",
          priority: 5,
          name: 'Sinh tố dừa',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/dua.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }, {
          id: "17",
          priority: 5,
          name: 'Sinh tố dưa hấu',
          price: 12000.00,
          amount: 0,
          img: 'assets/trai-cay/sinh-to/dua-hau.jpg',
          categoryId: 'C01',
          tagName: 'SINHTO'
        }];
        this.fruit = [{
          id: "18",
          priority: 3,
          name: 'Nước Ép Cà Rốt',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/nuoc-ep/ca-rot.jpg',
          categoryId: 'C01',
          tagName: 'NUOCEP'
        }, {
          id: "19",
          priority: 5,
          name: 'Nước Ép Cam',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/nuoc-ep/cam.jpg',
          categoryId: 'C01',
          tagName: 'NUOCEP'
        }, {
          id: "20",
          priority: 5,
          name: 'Nước Ép Dưa Hấu',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/nuoc-ep/dua-hau.jpg',
          categoryId: 'C01',
          tagName: 'NUOCEP'
        }, {
          id: "21",
          priority: 0,
          name: 'Nước Ép Ổi',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/nuoc-ep/oi.jpg',
          categoryId: 'C01',
          tagName: 'NUOCEP'
        }, {
          id: "22",
          priority: 0,
          name: 'Nước Ép Chanh Leo',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/nuoc-ep/chanh-leo.jpg',
          categoryId: 'C01',
          tagName: 'NUOCEP'
        }, {
          id: "23",
          priority: 0,
          name: 'Nước Ép Táo',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/nuoc-ep/tao.jpg',
          categoryId: 'C01',
          tagName: 'NUOCEP'
        }, {
          id: "24",
          priority: 0,
          name: 'Nước Ép Lê',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/nuoc-ep/le.jpg',
          categoryId: 'C01',
          tagName: 'NUOCEP'
        }, {
          id: "25",
          priority: 0,
          name: 'Nước Ép Thơm',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/nuoc-ep/thom.jpg',
          categoryId: 'C01',
          tagName: 'NUOCEP'
        }, {
          id: "26",
          priority: 2,
          name: 'Nước Ép Cà Chua',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/nuoc-ep/ca-chua.jpg',
          categoryId: 'C01',
          tagName: 'NUOCEP'
        }];
        this.fruitD = [{
          id: "27",
          priority: 5,
          name: 'Trái cây dĩa',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/trai-cay-dam/dia.jpg',
          categoryId: 'C01',
          tagName: 'TRAICAYDAM'
        }, {
          id: "28",
          priority: 5,
          name: 'Trái cây tô',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/trai-cay-dam/to.jpg',
          categoryId: 'C01',
          tagName: 'TRAICAYDAM'
        }, {
          id: "39",
          priority: 3,
          name: 'Bơ dầm',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/trai-cay-dam/bo.jpg',
          categoryId: 'C01',
          tagName: 'TRAICAYDAM'
        }, {
          id: "30",
          priority: 3,
          name: 'Mãng cầu dầm',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/trai-cay-dam/mang-cau.jpg',
          categoryId: 'C01',
          tagName: 'TRAICAYDAM'
        }, {
          id: "31",
          priority: 4,
          name: 'Dưa gang dầm',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/trai-cay-dam/dua-gang.jpg',
          categoryId: 'C01',
          tagName: 'TRAICAYDAM'
        }, {
          id: "32",
          priority: 2,
          name: 'Đu đủ dầm',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/trai-cay-dam/du-du.jpg',
          categoryId: 'C01',
          tagName: 'TRAICAYDAM'
        }, {
          id: "33",
          priority: 0,
          name: 'Sapoche dầm',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/trai-cay-dam/sapoche.jpg',
          categoryId: 'C01',
          tagName: 'TRAICAYDAM'
        }, {
          id: "34",
          priority: 0,
          name: 'Thanh long dầm',
          price: 15000.00,
          amount: 0,
          img: 'assets/trai-cay/trai-cay-dam/thanh-long.jpg',
          categoryId: 'C01',
          tagName: 'TRAICAYDAM'
        }];
        this.rice = [{
          id: "35",
          priority: 5,
          name: 'Cơm Trứng chiên ',
          price: 15000.00,
          amount: 0,
          img: 'assets/food/DVC/com.jpg',
          categoryId: 'C02',
          tagName: 'COMTRANG'
        }, {
          id: "36",
          priority: 5,
          name: 'Cơm Trứng chiên ốp la',
          price: 15000.00,
          amount: 0,
          img: 'assets/food/DVC/com.jpg',
          categoryId: 'C02',
          tagName: 'COMTRANG'
        }, {
          id: "37",
          priority: 5,
          name: 'Cơm Trứng chiên thịt bằm',
          price: 17000.00,
          amount: 0,
          img: 'assets/food/DVC/com.jpg',
          categoryId: 'C02',
          tagName: 'COMTRANG'
        }, {
          id: "38",
          priority: 3,
          name: 'Cơm Xúc xích + trứng chiên thịt bằm',
          price: 15000.00,
          amount: 0,
          img: 'assets/food/DVC/com.jpg',
          categoryId: 'C02',
          tagName: 'COMTRANG'
        }, {
          id: "39",
          priority: 3,
          name: 'Cơm Cá rô chiên',
          price: 18000.00,
          amount: 0,
          img: 'assets/food/DVC/com.jpg',
          categoryId: 'C02',
          tagName: 'COMTRANG'
        }, {
          id: "40",
          priority: 4,
          name: 'Cơm Cá bống kho tiêu',
          price: 20000.00,
          amount: 0,
          img: 'assets/food/DVC/com.jpg',
          categoryId: 'C02',
          tagName: 'COMTRANG'
        }, {
          id: "41",
          priority: 2,
          name: 'Cơm Thịt xào cà pháo',
          price: 20000.00,
          amount: 0,
          img: 'assets/food/DVC/com.jpg',
          categoryId: 'C02',
          tagName: 'COMTRANG'
        }, {
          id: "42",
          priority: 0,
          name: 'Cơm Gà chiên nước mắm',
          price: 15000.00,
          amount: 0,
          img: 'assets/food/DVC/com.jpg',
          categoryId: 'C02',
          tagName: 'COMTRANG'
        }, {
          id: "43",
          priority: 0,
          name: 'Cơm Canh chua cá hú',
          price: 15000.00,
          amount: 0,
          img: 'assets/food/DVC/com.jpg',
          categoryId: 'C02',
          tagName: 'COMTRANG'
        }, {
          id: "44",
          priority: 0,
          name: 'Cơm Mề gà xào nấm',
          price: 15000.00,
          amount: 0,
          img: 'assets/food/DVC/com.jpg',
          categoryId: 'C02',
          tagName: 'COMTRANG'
        }];
        this.snack = [{
          id: "45",
          priority: 5,
          name: 'Bánh Tráng trộn',
          price: 15000.00,
          amount: 0,
          img: 'assets/food/an-vat/trang-tron.jpg',
          categoryId: 'C03',
          tagName: 'BANHTRANG'
        }, {
          id: "46",
          priority: 5,
          name: 'Bánh tráng nướng',
          price: 15000.00,
          amount: 0,
          img: 'assets/food/an-vat/trang-nuong.jpg',
          categoryId: 'C03',
          tagName: 'BANHTRANG'
        }, {
          id: "47",
          priority: 5,
          name: 'Bánh mì mướng',
          price: 17000.00,
          amount: 0,
          img: 'assets/food/an-vat/mi-nuong.jpg',
          categoryId: 'C03',
          tagName: 'BANHMI'
        }];
        this.cart = [];
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.cart);
        this.itemCollection$ = this.stateSubject.asObservable();
        this.data = this.data.concat(this.fruit);
        this.data = this.data.concat(this.fruitD);
        this.data = this.data.concat(this.rice);
        this.data = this.data.concat(this.snack);
      }

      _createClass(CartService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.data;
        }
      }, {
        key: "getCart",
        value: function getCart() {
          return this.cart;
        }
      }, {
        key: "getCartItemCount",
        value: function getCartItemCount() {
          return this.cartItemCount;
        }
      }, {
        key: "changeAmount",
        value: function changeAmount(product, amount) {
          var added = false;

          var _iterator = _createForOfIteratorHelper(this.cart),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var p = _step.value;

              if (p.id === product.id) {
                this.cartItemCount.next(this.cartItemCount.value - p.amount + amount);
                p.amount = amount;
                added = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (!added) {
            product.amount = amount;
            this.cart.push(product);
            this.cartItemCount.next(this.cartItemCount.value + amount);
          }

          this.stateSubject.next(this.cart);
        }
      }, {
        key: "addProduct",
        value: function addProduct(product) {
          var added = false;

          var _iterator2 = _createForOfIteratorHelper(this.cart),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var p = _step2.value;

              if (p.id === product.id) {
                p.amount += 1;
                added = true;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (!added) {
            product.amount = 1;
            this.cart.push(product);
          }

          this.cartItemCount.next(this.cartItemCount.value + 1);
          this.stateSubject.next(this.cart);
        }
      }, {
        key: "decreaseProduct",
        value: function decreaseProduct(productId) {
          for (var index = 0; index < this.cart.length; index++) {
            var p = this.cart[index];

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
      }, {
        key: "clearCart",
        value: function clearCart() {
          this.cart = [];
          this.cartItemCount.next(0);
          this.stateSubject.next(this.cart);

          for (var i = 0; i < this.data.length; i++) {
            this.data[i].amount = 0;
          }
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(productId) {
          for (var index = 0; index < this.cart.length; index++) {
            var p = this.cart[index];

            if (p.id === productId) {
              this.cartItemCount.next(this.cartItemCount.value - p.amount);
              this.cart.splice(index, 1);
            }
          }

          var _iterator3 = _createForOfIteratorHelper(this.data),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _p = _step3.value;

              if (_p.id === productId) {
                _p.amount = 0;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          this.stateSubject.next(this.cart);
        }
      }, {
        key: "getTotal",
        value: function getTotal() {
          return this.cart.reduce(function (i, j) {
            return i + j.price * j.amount;
          }, 0);
        }
      }]);

      return CartService;
    }();

    CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CartService);
    /***/
  },

  /***/
  "./src/app/services/firestore-crud.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/firestore-crud.service.ts ***!
    \****************************************************/

  /*! exports provided: FirestoreCrudService */

  /***/
  function srcAppServicesFirestoreCrudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirestoreCrudService", function () {
      return FirestoreCrudService;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash/cloneDeep */
    "./node_modules/lodash/cloneDeep.js");
    /* harmony import */


    var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__); // We need a function that will turn our JS Objects into an Object
    // that Firestore can work with


    function firebaseSerialize(object) {
      return lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(object);
    }

    var FirestoreCrudService = /*#__PURE__*/function () {
      function FirestoreCrudService(afs, collectionName) {
        _classCallCheck(this, FirestoreCrudService);

        this.afs = afs; // We then create the reference to this Collection

        this.collectionName = collectionName;
        this.collection = this.afs.collection(collectionName);
      }
      /**
       * We look for the Entity we want to add as well
       * as an Optional Id, which will allow us to set
       * the Entity into a specific Document in the Collection
       */


      _createClass(FirestoreCrudService, [{
        key: "add",
        value: function add(entity, id) {
          var _this8 = this;

          // We want to create a Typed Return of the added Entity
          return new Promise(function (resolve, reject) {
            if (id) {
              // If there is an ID Provided, lets specifically set the Document
              _this8.collection.doc(id).set(firebaseSerialize(entity)).then(function (ref) {
                resolve(entity);
              });
            } else {
              // If no ID is set, allow Firestore to Auto-Generate one
              _this8.collection.add(firebaseSerialize(entity)).then(function (ref) {
                // Let's make sure we return the newly added ID with Model
                var newentity = Object.assign({
                  id: ref.id
                }, entity);
                resolve(newentity);
              });
            }
          });
        }
        /**
         * Our get method will fetch a single Entity by it's Document ID
         */

      }, {
        key: "get",
        value: function get(id) {
          return this.collection.doc(id).snapshotChanges().pipe( // We want to map the document into a Typed JS Object
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (doc) {
            // Only if the entity exists should we build an object out of it
            if (doc.payload.exists) {
              var data = doc.payload.data();
              var payloadId = doc.payload.id;
              return Object.assign({
                id: payloadId
              }, data);
            }
          }));
        }
        /*
         * Our list method will get all the Entities in the Collection
         */

      }, {
        key: "list",
        value: function list() {
          return this.collection.snapshotChanges().pipe( // Again we want to build a Typed JS Object from the Document
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (changes) {
            return changes.map(function (a) {
              var data = a.payload.doc.data();
              data.id = a.payload.doc.id;
              return data;
            });
          }));
        }
      }, {
        key: "listByCondition",
        value: function listByCondition(query) {
          return this.afs.collection(this.collectionName, function (ref) {
            return query(ref);
          }).snapshotChanges().pipe( // Again we want to build a Typed JS Object from the Document
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (changes) {
            return changes.map(function (a) {
              var data = a.payload.doc.data();
              data.id = a.payload.doc.id;
              return data;
            });
          }));
        }
        /* Our Update method takes the full updated Entity
         * Including it's ID property which it will use to find the
         * Document. This is a Hard Update.
         */

      }, {
        key: "update",
        value: function update(entity) {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            _this9.collection.doc(entity.id).set(firebaseSerialize(entity)).then(function () {
              resolve(Object.assign({}, entity));
            });
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            _this10.collection.doc(id)["delete"]().then(function () {
              resolve();
            });
          });
        }
      }]);

      return FirestoreCrudService;
    }();
    /***/

  },

  /***/
  "./src/app/services/wefinex-command.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/wefinex-command.service.ts ***!
    \*****************************************************/

  /*! exports provided: WefinexCommandService, WefinetComand */

  /***/
  function srcAppServicesWefinexCommandServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WefinexCommandService", function () {
      return WefinexCommandService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WefinetComand", function () {
      return WefinetComand;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _firestore_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./firestore-crud.service */
    "./src/app/services/firestore-crud.service.ts");

    var WefinexCommandService = /*#__PURE__*/function () {
      // AngularFirestore should be found by Angular DI System
      function WefinexCommandService(afs) {
        _classCallCheck(this, WefinexCommandService);

        this.afs = afs; // Let's create our CrusService and use the a Collection with the name 'todos'

        this.crudService = new _firestore_crud_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreCrudService"](afs, 'follow_bet');
      }

      _createClass(WefinexCommandService, [{
        key: "add",
        value: function add(data, id) {
          return this.crudService.add(data, id);
        }
      }, {
        key: "update",
        value: function update(data) {
          return this.crudService.update(data);
        }
      }, {
        key: "delete",
        value: function _delete(data) {
          return this.crudService["delete"](data.id);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.crudService.list();
        }
      }, {
        key: "getListByCondition",
        value: function getListByCondition(query) {
          return this.crudService.listByCondition(query);
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.crudService.get(id);
        }
      }]);

      return WefinexCommandService;
    }();

    WefinexCommandService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    WefinexCommandService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WefinexCommandService);

    var WefinetComand = function WefinetComand() {
      _classCallCheck(this, WefinetComand);
    };
    /***/

  },

  /***/
  "./src/app/services/wefinex-result.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/wefinex-result.service.ts ***!
    \****************************************************/

  /*! exports provided: WefinexResultService, WefinexResult */

  /***/
  function srcAppServicesWefinexResultServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WefinexResultService", function () {
      return WefinexResultService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WefinexResult", function () {
      return WefinexResult;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _firestore_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./firestore-crud.service */
    "./src/app/services/firestore-crud.service.ts");

    var WefinexResultService = /*#__PURE__*/function () {
      // AngularFirestore should be found by Angular DI System
      function WefinexResultService(afs) {
        _classCallCheck(this, WefinexResultService);

        this.afs = afs; // Let's create our CrusService and use the a Collection with the name 'todos'

        this.crudService = new _firestore_crud_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreCrudService"](afs, 'wefinex');
      }

      _createClass(WefinexResultService, [{
        key: "add",
        value: function add(data, id) {
          return this.crudService.add(data, id);
        }
      }, {
        key: "update",
        value: function update(data) {
          return this.crudService.update(data);
        }
      }, {
        key: "delete",
        value: function _delete(data) {
          return this.crudService["delete"](data.id);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.crudService.list();
        }
      }, {
        key: "getListByCondition",
        value: function getListByCondition(query) {
          return this.crudService.listByCondition(query);
        }
      }]);

      return WefinexResultService;
    }();

    WefinexResultService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    WefinexResultService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WefinexResultService);

    var WefinexResult = function WefinexResult() {
      _classCallCheck(this, WefinexResult);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyDNvYyw2r0JfbpGDAkhsd8T29RlFvTMJPA",
        authDomain: "wefinex-73e57.firebaseapp.com",
        projectId: "wefinex-73e57",
        storageBucket: "wefinex-73e57.appspot.com",
        messagingSenderId: "769981334831",
        appId: "1:769981334831:web:189ddb19a9c43667afcdda",
        measurementId: "G-RMFY10RCKG"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\alex.huynh\Desktop\Bamboo\template\github\food-nlu\food-nlu\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map