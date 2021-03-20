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


    __webpack_exports__["default"] = "<div class=\"app-container \">\n  \n  <div class=\"app-header\">\n    <div class=\"app-header-left\">\n      <span class=\"app-icon\"></span>\n      <p class=\"app-name\">Portfolio</p>\n      <div class=\"search-wrapper\">\n        <input class=\"search-input\" type=\"text\" placeholder=\"Search\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-search\" viewBox=\"0 0 24 24\">\n          <defs></defs>\n          <circle cx=\"11\" cy=\"11\" r=\"8\"></circle>\n          <path d=\"M21 21l-4.35-4.35\"></path>\n        </svg>\n      </div>\n    </div>\n    <div class=\"app-header-right\">\n      <button class=\"mode-switch\" title=\"Switch Theme\">\n        <svg class=\"moon\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <defs></defs>\n          <path d=\"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z\"></path>\n        </svg>\n      </button>\n      <button class=\"add-btn\" title=\"Add New Project\">\n        <svg class=\"btn-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n          <line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\" />\n          <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" /></svg>\n      </button>\n      <button class=\"notification-btn\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\">\n          <path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\" />\n          <path d=\"M13.73 21a2 2 0 0 1-3.46 0\" /></svg>\n      </button>\n      <button class=\"profile-btn\">\n        <img src=\"https://assets.codepen.io/3306515/IMG_2025.jpg\" />\n        <span>Aybüke C.</span>\n      </button>\n    </div>\n    <button class=\"messages-btn\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-message-circle\">\n        <path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\" /></svg>\n    </button>\n  </div>\n  <div class=\"app-content\">\n    <div class=\"app-sidebar\">\n      <a href=\"\" class=\"app-sidebar-link active\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\">\n          <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />\n          <polyline points=\"9 22 9 12 15 12 15 22\" /></svg>\n      </a>\n      <a href=\"\" class=\"app-sidebar-link\">\n        <svg class=\"link-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-pie-chart\" viewBox=\"0 0 24 24\">\n          <defs />\n          <path d=\"M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z\" />\n        </svg>\n      </a>\n      <a href=\"\" class=\"app-sidebar-link\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\">\n          <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\" />\n          <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\" />\n          <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\" />\n          <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\" /></svg>\n      </a>\n      <a href=\"\" class=\"app-sidebar-link\">\n        <svg class=\"link-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-settings\" viewBox=\"0 0 24 24\">\n          <defs />\n          <circle cx=\"12\" cy=\"12\" r=\"3\" />\n          <path d=\"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z\" />\n        </svg>\n      </a>\n    </div>\n    <div class=\"projects-section\">\n      <!-- <div class=\"projects-section-header\">\n        <p>Projects</p>\n        <p class=\"time\">December, 12</p>\n      </div> -->\n      <div class=\"projects-section-line\">\n        <div class=\"projects-status\">\n          <div class=\"item-status\">\n            <span class=\"status-number\">45</span>\n            <span class=\"status-type\">In Progress</span>\n          </div>\n          <div class=\"item-status\">\n            <span class=\"status-number\">24</span>\n            <span class=\"status-type\">Upcoming</span>\n          </div>\n          <div class=\"item-status\">\n            <span class=\"status-number\">62</span>\n            <span class=\"status-type\">Total Projects</span>\n          </div>\n        </div>\n        <div class=\"view-actions\">\n          <button class=\"view-btn list-view\" title=\"List View\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-list\">\n              <line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\" />\n              <line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\" />\n              <line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\" />\n              <line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\" />\n              <line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\" />\n              <line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\" /></svg>\n          </button>\n          <button class=\"view-btn grid-view active\" title=\"Grid View\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-grid\">\n              <rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" />\n              <rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" />\n              <rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" />\n              <rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" /></svg>\n          </button>\n        </div>\n      </div>\n      <div class=\"project-boxes jsGridView\">\n        <div class=\"project-box-wrapper\">\n          <div class=\"project-box\" style=\"background-color: #fee4cb;\">\n            <div class=\"project-box-header\">\n              <span>December 10, 2020</span>\n              <div class=\"more-wrapper\">\n                <button class=\"project-btn-more\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                    <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                    <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                    <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n                </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">Web Designing</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 60%; background-color: #ff942e\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">60%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #ff942e;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #ff942e;\">\n            2 Days Left\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-box-wrapper\">\n      <div class=\"project-box\" style=\"background-color: #e9e7fd;\">\n        <div class=\"project-box-header\">\n          <span>December 10, 2020</span>\n          <div class=\"more-wrapper\">\n            <button class=\"project-btn-more\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n            </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">Testing</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 50%; background-color: #4f3ff0\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">50%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #4f3ff0;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #4f3ff0;\">\n            2 Days Left\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-box-wrapper\">\n      <div class=\"project-box\">\n        <div class=\"project-box-header\">\n          <span>December 10, 2020</span>\n          <div class=\"more-wrapper\">\n            <button class=\"project-btn-more\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n            </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">Svg Animations</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 80%; background-color: #096c86\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">80%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #096c86;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #096c86;\">\n            2 Days Left\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-box-wrapper\">\n      <div class=\"project-box\" style=\"background-color: #ffd3e2;\">\n        <div class=\"project-box-header\">\n          <span>December 10, 2020</span>\n          <div class=\"more-wrapper\">\n            <button class=\"project-btn-more\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n            </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">UI Development</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 20%; background-color: #df3670\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">20%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #df3670;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #df3670;\">\n            2 Days Left\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-box-wrapper\">\n      <div class=\"project-box\" style=\"background-color: #c8f7dc;\">\n        <div class=\"project-box-header\">\n          <span>December 10, 2020</span>\n          <div class=\"more-wrapper\">\n            <button class=\"project-btn-more\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n            </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">Data Analysis</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 60%; background-color: #34c471\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">60%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #34c471;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #34c471;\">\n            2 Days Left\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-box-wrapper\">\n      <div class=\"project-box\" style=\"background-color: #d5deff;\">\n        <div class=\"project-box-header\">\n          <span>December 10, 2020</span>\n          <div class=\"more-wrapper\">\n            <button class=\"project-btn-more\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n            </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">Web Designing</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 40%; background-color: #4067f9\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">40%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #4067f9;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #4067f9;\">\n            2 Days Left\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"messages-section\">\n  <button class=\"messages-close\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x-circle\">\n      <circle cx=\"12\" cy=\"12\" r=\"10\" />\n      <line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\" />\n      <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\" /></svg>\n  </button>\n  <div class=\"projects-section-header\">\n    <p>Client Messages</p>\n  </div>\n  <div class=\"messages\">\n    <div class=\"message-box\">\n      <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"profile image\">\n      <div class=\"message-content\">\n        <div class=\"message-header\">\n          <div class=\"name\">Stephanie</div>\n          <div class=\"star-checkbox\">\n            <input type=\"checkbox\" id=\"star-1\">\n            <label for=\"star-1\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\n            </label>\n          </div>\n        </div>\n        <p class=\"message-line\">\n          I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.\n        </p>\n        <p class=\"message-line time\">\n          Dec, 12\n        </p>\n      </div>\n    </div>\n    <div class=\"message-box\">\n      <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"profile image\">\n      <div class=\"message-content\">\n        <div class=\"message-header\">\n          <div class=\"name\">Mark</div>\n          <div class=\"star-checkbox\">\n            <input type=\"checkbox\" id=\"star-2\">\n            <label for=\"star-2\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\n            </label>\n          </div>\n        </div>\n        <p class=\"message-line\">\n          Hey, can tell me about progress of project? I'm waiting for your response.\n        </p>\n        <p class=\"message-line time\">\n          Dec, 12\n        </p>\n      </div>\n    </div>\n    <div class=\"message-box\">\n      <img src=\"https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"profile image\">\n      <div class=\"message-content\">\n        <div class=\"message-header\">\n          <div class=\"name\">David</div>\n          <div class=\"star-checkbox\">\n            <input type=\"checkbox\" id=\"star-3\">\n            <label for=\"star-3\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\n            </label>\n          </div>\n        </div>\n        <p class=\"message-line\">\n          Awesome! 🤩 I like it. We can schedule a meeting for the next one.\n        </p>\n        <p class=\"message-line time\">\n          Dec, 12\n        </p>\n      </div>\n    </div>\n    <div class=\"message-box\">\n      <img src=\"https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"profile image\">\n      <div class=\"message-content\">\n        <div class=\"message-header\">\n          <div class=\"name\">Jessica</div>\n          <div class=\"star-checkbox\">\n            <input type=\"checkbox\" id=\"star-4\">\n            <label for=\"star-4\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\n            </label>\n          </div>\n        </div>\n        <p class=\"message-line\">\n          I am really impressed! Can't wait to see the final result.\n        </p>\n        <p class=\"message-line time\">\n          Dec, 11\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>";
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


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane  contentId=\"main-content\">\n    <ion-menu side=\"start\" menuId=\"first\" contentId=\"main-content\" >\n<!--      <ion-menu contentId=\"main-content\" type=\"reveal\">-->\n        <ion-content>\n            <div class=\"app-wrapp\">\n                <div class=\"app-container\">\n                    <!-- @main page view -->\n                    <div class=\"view-main\">\n                        <div class=\"header-wrapp\">\n                            <div class=\"app-detail\">\n                                <div>\n                                    <img src=\"https://cdn0.iconfinder.com/data/icons/chat-2/100/Chat-13-512.png\" alt=\"\">\n                                </div>\n                                <div>Liên hệ</div>\n                                <div class=\"status\"> 098 177 30 84 </div>\n                            </div>\n                            <div class=\"wave-wrapp\">\n                                <svg class=\"wave\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 24 150 28\"   preserveAspectRatio=\"none\">\n                                    <defs>\n                                        <path id=\"gentle-wave\" d=\"m -160,44.4 c 30,0 58,-18 87.7,-18 30.3,0 58.3,18 87.3,18 30,0 58,-18 88,-18 30,0 58,18 88,18 l 0,34.5 -351,0 z\" />\n                                    </defs>\n                                    <g class=\"parallax\">\n                                        <use xlink:href=\"#gentle-wave\" x=\"50\" y=\"0\" fill=\"rgba(255, 255, 255, 0.48)\"/>\n                                        <use xlink:href=\"#gentle-wave\" x=\"50\" y=\"3\" fill=\"rgba(255, 255, 255, 0.78)\"/>\n                                        <use xlink:href=\"#gentle-wave\" x=\"50\" y=\"6\" fill=\"rgba(255, 255, 255, 0.8)\"/>\n                                    </g>\n                                </svg>\n                            </div>\n                        </div>\n                        <div class=\"content-wrapp\">\n\n                            <div id=\"master-nav-items\" data-viewport=\"true\">\n                                <div id=\"item-4\" class=\"active\">\n                                    <div class=\"profile-setting\">\n                                        <div class=\"touch-y\" style=\"transform: translateY(-2px);\">\n                                            <div class=\"information\">\n                                                <div class=\"public\">\n                                                    <p>\n                                                        PUBLIC INFORMATION\n                                                    </p>\n                                                    <div class=\"form-group\">\n                                    <span>\n                                        <i class=\"material-icons\">assignment_ind</i>\n                                    </span>\n                                                      <div (click)=\"closeMenu()\" routerLink=\"/forms/register\" class=\"title-leve1\">Đăng ký</div>  \n                                                    </div>\n                                                    <div class=\"form-group\">\n                                    <span>\n                                        <i class=\"material-icons\">face</i>\n                                    </span>\n                                    <div  (click)=\"closeMenu()\" routerLink=\"/forms\"  class=\"title-leve1\">Đăng nhập</div>  \n                                                    </div>\n                                                    <div class=\"form-group\">\n                                    <span>\n                                        <i class=\"material-icons\">public</i>\n                                    </span>\n                                    <div class=\"title-leve1\">https://fb.com/react.thanh</div>  \n                                                    </div>\n                                                    <div class=\"form-group h-80\">\n                                    <span>\n                                        <i class=\"material-icons\">info</i>\n                                    </span>\n                                    <div class=\"title-leve1\">0981773084</div>  \n                                                    </div>\n                                                </div>\n                                                <div class=\"private\">\n                                                    <p>\n                                                        PRIVATE INFORMATION\n                                                    </p>\n                                                    <div class=\"form-group\">\n                                    <span>\n                                        <i class=\"material-icons\">local_post_office</i>\n                                    </span>\n                                                        <input type=\"text\" placeholder=\"EMAIL\" value=\"k40cntt@gmail.com\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    <!-- @send message view -->\n\n                </div>\n            </div>\n            <!-- <ion-list>\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n              <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n                <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n                <ion-label>\n                  {{p.title}}\n                </ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n            </ion-list> -->\n        </ion-content>\n    </ion-menu>\n      <ion-router-outlet id=\"main-content\" ></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
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


    __webpack_exports__["default"] = "<div class=\"app-container \">\n  \n  <div class=\"app-header\">\n    <div class=\"app-header-left\">\n      <span class=\"app-icon\"></span>\n      <p class=\"app-name\">Wefinex command</p>\n      <div class=\"search-wrapper\">\n        <input class=\"search-input\" type=\"text\" placeholder=\"Search\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-search\" viewBox=\"0 0 24 24\">\n          <defs></defs>\n          <circle cx=\"11\" cy=\"11\" r=\"8\"></circle>\n          <path d=\"M21 21l-4.35-4.35\"></path>\n        </svg>\n      </div>\n    </div>\n    <div class=\"app-header-right\">\n      <button class=\"mode-switch\" title=\"Switch Theme\">\n        <svg class=\"moon\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <defs></defs>\n          <path d=\"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z\"></path>\n        </svg>\n      </button>\n      <button class=\"add-btn\" title=\"Add New Project\">\n        <svg class=\"btn-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n          <line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\" />\n          <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" /></svg>\n      </button>\n      <button class=\"notification-btn\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\">\n          <path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\" />\n          <path d=\"M13.73 21a2 2 0 0 1-3.46 0\" /></svg>\n      </button>\n      <button class=\"profile-btn\">\n        <img src=\"assets/wefinex/bitcoin.png\" />\n        <span>Aybüke C.</span>\n      </button>\n    </div>\n    <button class=\"messages-btn\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-message-circle\">\n        <path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\" /></svg>\n    </button>\n  </div>\n  <div class=\"app-content\">\n    <div class=\"app-sidebar\">\n      <a  class=\"app-sidebar-link active\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\">\n          <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />\n          <polyline points=\"9 22 9 12 15 12 15 22\" /></svg>\n      </a>\n      <a  class=\"app-sidebar-link\">\n        <svg class=\"link-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-pie-chart\" viewBox=\"0 0 24 24\">\n          <defs />\n          <path d=\"M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z\" />\n        </svg>\n      </a>\n      <a  class=\"app-sidebar-link\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\">\n          <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\" />\n          <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\" />\n          <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\" />\n          <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\" /></svg>\n      </a>\n      <a  class=\"app-sidebar-link\">\n        <svg class=\"link-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"feather feather-settings\" viewBox=\"0 0 24 24\">\n          <defs />\n          <circle cx=\"12\" cy=\"12\" r=\"3\" />\n          <path d=\"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z\" />\n        </svg>\n      </a>\n    </div>\n    <div class=\"projects-section\">\n      <!-- <div class=\"projects-section-header\">\n        <p>Projects</p>\n        <p class=\"time\">December, 12</p>\n      </div> -->\n      <div class=\"projects-section-line\">\n        <div class=\"projects-status\">\n          <div class=\"item-status\">\n            <span class=\"status-number\">$ 2,096  &nbsp;</span>\n            <span class=\"status-type\">Tiền hiện tại</span>\n          </div>\n          <div class=\"item-status\">\n            <span class=\"status-number\">$ 69</span>\n            <span class=\"status-type\">Vốn hôm nay</span>\n          </div>\n          <div class=\"item-status\">\n            <span class=\"status-number\">30%</span>\n            <span class=\"status-type\">Lợi nhuận</span>\n          </div>\n        </div>\n        <div class=\"view-actions\">\n          <button class=\"view-btn list-view\" title=\"List View\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-list\">\n              <line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\" />\n              <line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\" />\n              <line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\" />\n              <line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\" />\n              <line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\" />\n              <line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\" /></svg>\n          </button>\n          <button class=\"view-btn grid-view active\" title=\"Grid View\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-grid\">\n              <rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" />\n              <rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" />\n              <rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" />\n              <rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" /></svg>\n          </button>\n        </div>\n      </div>\n      <div class=\"project-boxes jsGridView\">\n        <div class=\"project-box-wrapper\">\n          <div class=\"project-box\" style=\"background-color: #fee4cb;\">\n            <div class=\"project-box-header\">\n              <span>December 10, 2020</span>\n              <div class=\"more-wrapper\">\n                <button class=\"project-btn-more\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                    <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                    <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                    <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n                </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">Web Designing</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 60%; background-color: #ff942e\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">60%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #ff942e;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #ff942e;\">\n           User Follow\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-box-wrapper\">\n      <div class=\"project-box\" style=\"background-color: #e9e7fd;\">\n        <div class=\"project-box-header\">\n          <span>December 10, 2020</span>\n          <div class=\"more-wrapper\">\n            <button class=\"project-btn-more\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n            </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">Testing</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 50%; background-color: #4f3ff0\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">50%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #4f3ff0;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #4f3ff0;\">\n           User Follow\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-box-wrapper\">\n      <div class=\"project-box\">\n        <div class=\"project-box-header\">\n          <span>December 10, 2020</span>\n          <div class=\"more-wrapper\">\n            <button class=\"project-btn-more\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n            </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">Svg Animations</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 80%; background-color: #096c86\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">80%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #096c86;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #096c86;\">\n           User Follow\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-box-wrapper\">\n      <div class=\"project-box\" style=\"background-color: #ffd3e2;\">\n        <div class=\"project-box-header\">\n          <span>December 10, 2020</span>\n          <div class=\"more-wrapper\">\n            <button class=\"project-btn-more\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n            </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">UI Development</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 20%; background-color: #df3670\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">20%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #df3670;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #df3670;\">\n           User Follow\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-box-wrapper\">\n      <div class=\"project-box\" style=\"background-color: #c8f7dc;\">\n        <div class=\"project-box-header\">\n          <span>December 10, 2020</span>\n          <div class=\"more-wrapper\">\n            <button class=\"project-btn-more\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n            </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">Data Analysis</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 60%; background-color: #34c471\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">60%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #34c471;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #34c471;\">\n           User Follow\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-box-wrapper\">\n      <div class=\"project-box\" style=\"background-color: #d5deff;\">\n        <div class=\"project-box-header\">\n          <span>December 10, 2020</span>\n          <div class=\"more-wrapper\">\n            <button class=\"project-btn-more\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\">\n                <circle cx=\"12\" cy=\"12\" r=\"1\" />\n                <circle cx=\"12\" cy=\"5\" r=\"1\" />\n                <circle cx=\"12\" cy=\"19\" r=\"1\" /></svg>\n            </button>\n          </div>\n        </div>\n        <div class=\"project-box-content-header\">\n          <p class=\"box-content-header\">Web Designing</p>\n          <p class=\"box-content-subheader\">Prototyping</p>\n        </div>\n        <div class=\"box-progress-wrapper\">\n          <p class=\"box-progress-header\">Progress</p>\n          <div class=\"box-progress-bar\">\n            <span class=\"box-progress\" style=\"width: 40%; background-color: #4067f9\"></span>\n          </div>\n          <p class=\"box-progress-percentage\">40%</p>\n        </div>\n        <div class=\"project-box-footer\">\n          <div class=\"participants\">\n            <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"participant\">\n            <img src=\"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80\" alt=\"participant\">\n            <button class=\"add-participant\" style=\"color: #4067f9;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\">\n                <path d=\"M12 5v14M5 12h14\" />\n              </svg>\n            </button>\n          </div>\n          <div class=\"days-left\" style=\"color: #4067f9;\">\n           User Follow\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"messages-section\">\n  <button class=\"messages-close\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x-circle\">\n      <circle cx=\"12\" cy=\"12\" r=\"10\" />\n      <line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\" />\n      <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\" /></svg>\n  </button>\n  <div class=\"projects-section-header\">\n    <p>Client Messages</p>\n  </div>\n  <div class=\"messages\">\n    <div class=\"message-box\">\n      <img src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"profile image\">\n      <div class=\"message-content\">\n        <div class=\"message-header\">\n          <div class=\"name\">Stephanie</div>\n          <div class=\"star-checkbox\">\n            <input type=\"checkbox\" id=\"star-1\">\n            <label for=\"star-1\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\n            </label>\n          </div>\n        </div>\n        <p class=\"message-line\">\n          I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.\n        </p>\n        <p class=\"message-line time\">\n          Dec, 12\n        </p>\n      </div>\n    </div>\n    <div class=\"message-box\">\n      <img src=\"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80\" alt=\"profile image\">\n      <div class=\"message-content\">\n        <div class=\"message-header\">\n          <div class=\"name\">Mark</div>\n          <div class=\"star-checkbox\">\n            <input type=\"checkbox\" id=\"star-2\">\n            <label for=\"star-2\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\n            </label>\n          </div>\n        </div>\n        <p class=\"message-line\">\n          Hey, can tell me about progress of project? I'm waiting for your response.\n        </p>\n        <p class=\"message-line time\">\n          Dec, 12\n        </p>\n      </div>\n    </div>\n    <div class=\"message-box\">\n      <img src=\"https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"profile image\">\n      <div class=\"message-content\">\n        <div class=\"message-header\">\n          <div class=\"name\">David</div>\n          <div class=\"star-checkbox\">\n            <input type=\"checkbox\" id=\"star-3\">\n            <label for=\"star-3\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\n            </label>\n          </div>\n        </div>\n        <p class=\"message-line\">\n          Awesome! 🤩 I like it. We can schedule a meeting for the next one.\n        </p>\n        <p class=\"message-line time\">\n          Dec, 12\n        </p>\n      </div>\n    </div>\n    <div class=\"message-box\">\n      <img src=\"https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60\" alt=\"profile image\">\n      <div class=\"message-content\">\n        <div class=\"message-header\">\n          <div class=\"name\">Jessica</div>\n          <div class=\"star-checkbox\">\n            <input type=\"checkbox\" id=\"star-4\">\n            <label for=\"star-4\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-star\">\n                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" /></svg>\n            </label>\n          </div>\n        </div>\n        <p class=\"message-line\">\n          I am really impressed! Can't wait to see the final result.\n        </p>\n        <p class=\"message-line time\">\n          Dec, 11\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>";
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


    var _pages_forms_pages_stock_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/forms/pages/stock/stock.component */
    "./src/app/pages/forms/pages/stock/stock.component.ts");
    /* harmony import */


    var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/main-layout/main-layout.component */
    "./src/app/pages/main-layout/main-layout.component.ts");
    /* harmony import */


    var _pages_wefinex_wefinex_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/wefinex/wefinex.component */
    "./src/app/pages/wefinex/wefinex.component.ts");

    var routes = [{
      path: '',
      component: _pages_wefinex_wefinex_component__WEBPACK_IMPORTED_MODULE_5__["WefinexComponent"]
    }, {
      path: '',
      component: _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__["MainLayoutComponent"],
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
      component: _pages_forms_pages_stock_stock_component__WEBPACK_IMPORTED_MODULE_3__["StockComponent"]
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

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_15__["registerLocaleData"])(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_16___default.a);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_18__["MainLayoutComponent"]],
      entryComponents: [],
      imports: [_pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_17__["CartModalPageModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
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


    __webpack_exports__["default"] = ".container-cart {\n  border: 1px solid red;\n  width: 500px;\n  height: 200px;\n  overflow-y: auto;\n}\n\n.container-cart .cart-item {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.container-cart .cart-item .row-item {\n  padding: 8px;\n}\n\n.container-cart .cart-item .row-item .quality-item-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.container-cart .cart-item .row-item .quality-item-row .count-quality {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container-cart .cart-item .row-item .quality-item-row .total-quality {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container-cart .cart-item .cart-delete {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  right: 10px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.container-cart .cart-item .cart-delete .cart-delete-icon {\n  border: 1px solid red;\n}\n\n.l {\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC1tb2RhbC9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xcR2l0SHViXFxmb29kLW5sdS9zcmNcXGFwcFxccGFnZXNcXGNhcnQtbW9kYWxcXGNhcnQtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0LW1vZGFsL2NhcnQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FDQ3BCOztBRExBO0VBTVEsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUNHOUI7O0FEWEE7RUFVUyxZQUFZO0FDS3JCOztBRGZBO0VBZVcsYUFBYTtFQUNiLG1CQUFrQjtBQ0k3Qjs7QURwQkE7RUFrQmEsT0FBTztFQUNOLGFBQWE7RUFDZCx1QkFBdUI7RUFDeEIsbUJBQW1CO0FDTS9COztBRDNCQTtFQXdCYSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHVCQUF1QjtFQUN4QixtQkFBbUI7QUNPL0I7O0FEbENBO0VBb0NTLGFBQWE7RUFDYix5QkFBeUI7RUFDMUIsbUJBQW1CO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUNFckI7O0FENUNBO0VBNENXLHFCQUFxQjtBQ0loQzs7QURFRTtFQUNHLHFCQUFxQjtBQ0MxQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQtbW9kYWwvY2FydC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWNhcnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAuY2FydC1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAucm93LWl0ZW0ge1xyXG4gICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC5xdWFsaXR5LWl0ZW0tcm93IHtcclxuICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAgIC5jb3VudC1xdWFsaXR5IHtcclxuICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRvdGFsLXF1YWxpdHkge1xyXG4gICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLnRleHQtdG90YWwge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIC5jYXJ0LWRlbGV0ZSB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAuY2FydC1kZWxldGUtaWNvbiB7XHJcbiAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmwge1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9IiwiLmNvbnRhaW5lci1jYXJ0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jb250YWluZXItY2FydCAuY2FydC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyLWNhcnQgLmNhcnQtaXRlbSAucm93LWl0ZW0ge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jb250YWluZXItY2FydCAuY2FydC1pdGVtIC5yb3ctaXRlbSAucXVhbGl0eS1pdGVtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb250YWluZXItY2FydCAuY2FydC1pdGVtIC5yb3ctaXRlbSAucXVhbGl0eS1pdGVtLXJvdyAuY291bnQtcXVhbGl0eSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWNhcnQgLmNhcnQtaXRlbSAucm93LWl0ZW0gLnF1YWxpdHktaXRlbS1yb3cgLnRvdGFsLXF1YWxpdHkge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1jYXJ0IC5jYXJ0LWl0ZW0gLmNhcnQtZGVsZXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1jYXJ0IC5jYXJ0LWl0ZW0gLmNhcnQtZGVsZXRlIC5jYXJ0LWRlbGV0ZS1pY29uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4ubCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */";
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


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap\");\n@charset \"UTF-8\";\n::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-bg);\n  border-radius: 10px;\n}\n* {\n  box-sizing: border-box;\n}\nhtml, body {\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n}\nbody {\n  font-family: 'DM Sans', sans-serif;\n  overflow: hidden;\n}\nbutton, a {\n  cursor: pointer;\n}\n.app-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: var(--app-container);\n  transition: .2s;\n}\n.app-content {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  padding: 16px 24px 24px 0;\n}\n.app-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 16px 24px;\n  position: relative;\n}\n.app-header-left, .app-header-right {\n  display: flex;\n  align-items: center;\n}\n.app-header-left {\n  flex-grow: 1;\n}\n.app-header-right button {\n  margin-left: 10px;\n}\n.app-icon {\n  width: 26px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: var(--main-color);\n  position: relative;\n}\n.app-icon:before, .app-icon:after {\n  content: '';\n  position: absolute;\n  width: 12px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: var(--main-color);\n  left: 50%;\n  transform: translatex(-50%);\n}\n.app-icon:before {\n  top: -6px;\n}\n.app-icon:after {\n  bottom: -6px;\n}\n.app-name {\n  color: var(--main-color);\n  margin: 0;\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 700;\n  margin: 0 32px;\n}\n.mode-switch {\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  color: var(--main-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.search-wrapper {\n  border-radius: 20px;\n  background-color: var(--search-area-bg);\n  padding-right: 12px;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 480px;\n  color: var(--light-font);\n  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);\n  overflow: hidden;\n}\n.dark .search-wrapper {\n  box-shadow: none;\n}\n.search-input {\n  border: none;\n  flex: 1;\n  outline: none;\n  height: 100%;\n  padding: 0 20px;\n  font-size: 16px;\n  background-color: var(--search-area-bg);\n  color: var(--main-color);\n}\n.search-input:placeholder {\n  color: var(--main-color);\n  opacity: .6;\n}\n.add-btn {\n  color: #fff;\n  background-color: var(--button-bg);\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notification-btn {\n  color: var(--main-color);\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.profile-btn {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  border-left: 2px solid #ddd;\n}\n.profile-btn img {\n  width: 32px;\n  height: 32px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-right: 4px;\n}\n.profile-btn span {\n  color: var(--main-color);\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n}\n.page-content  {\n  flex: 1;\n  width: 100%;\n}\n.app-sidebar {\n  padding: 40px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.app-sidebar-link {\n  color: var(--main-color);\n  color: var(--link-color);\n  margin: 16px 0;\n  transition: .2s;\n  border-radius: 50%;\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.app-sidebar-link:hover {\n  background-color: var(--link-color-hover);\n  color: var(--link-color-active);\n}\n.app-sidebar-link.active {\n  background-color: var(--link-color-active-bg);\n  color: var(--link-color-active);\n}\n.projects-section {\n  flex: 2;\n  background-color: var(--projects-section);\n  border-radius: 32px;\n  padding: 32px 32px 0 32px;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.projects-section-line {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n}\n.projects-section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  color: var(--main-color);\n}\n.projects-section-header p {\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  opacity: .9;\n  margin: 0;\n  color: var(--main-color);\n}\n.projects-section-header .time {\n  font-size: 20px;\n}\n.projects-status {\n  display: flex;\n}\n.item-status {\n  display: flex;\n  flex-direction: column;\n  margin-right: 16px;\n}\n.item-status:not(:last-child) .status-type:after {\n  content: '';\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translatey(-50%);\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  border: 1px solid var(--secondary-color);\n}\n.status-number {\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  color: var(--main-color);\n}\n.status-type {\n  position: relative;\n  padding-right: 24px;\n  color: var(--secondary-color);\n}\n.view-actions {\n  display: flex;\n  align-items: center;\n}\n.view-btn {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px;\n  border-radius: 4px;\n  background-color: transparent;\n  border: none;\n  color: var(--main-color);\n  margin-left: 8px;\n  transition: .2s;\n}\n.view-btn.active {\n  background-color: var(--link-color-active-bg);\n  color: var(--link-color-active);\n}\n.view-btn:not(.active):hover {\n  background-color: var(--link-color-hover);\n  color: var(--link-color-active);\n}\n.messages-section {\n  flex-shrink: 0;\n  padding-bottom: 32px;\n  background-color: var(--projects-section);\n  margin-left: 24px;\n  flex: 1;\n  width: 100%;\n  border-radius: 30px;\n  position: relative;\n  overflow: auto;\n  transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);\n}\n.messages-section .messages-close {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 3;\n  border: none;\n  background-color: transparent;\n  color: var(--main-color);\n  display: none;\n}\n.messages-section.show {\n  transform: translateX(0);\n  opacity: 1;\n  margin-left: 0;\n}\n.messages-section .projects-section-header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  padding: 32px 24px 0 24px;\n  background-color: var(--projects-section);\n}\n.message-box {\n  border-top: 1px solid var(--message-box-border);\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n}\n.message-box:hover {\n  background-color: var(--message-box-hover);\n  border-top-color: var(--link-color-hover);\n}\n.message-box:hover + .message-box {\n  border-top-color: var(--link-color-hover);\n}\n.message-box img {\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 40px;\n  height: 40px;\n}\n.message-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.message-header .name {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  color: var(--main-color);\n  margin: 0;\n}\n.message-content {\n  padding-left: 16px;\n  width: 100%;\n}\n.star-checkbox input {\n  opacity: 0;\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.star-checkbox label {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.dark .star-checkbox {\n  color: var(--secondary-color);\n}\n.dark .star-checkbox input:checked + label {\n  color: var(--star);\n}\n.star-checkbox input:checked + label svg {\n  fill: var(--star);\n  transition: .2s;\n}\n.message-line {\n  font-size: 14px;\n  line-height: 20px;\n  margin: 8px 0;\n  color: var(--secondary-color);\n  opacity: .7;\n}\n.message-line.time {\n  text-align: right;\n  margin-bottom: 0;\n}\n.project-boxes {\n  margin: 0 -8px;\n  overflow-y: auto;\n}\n.project-boxes.jsGridView {\n  display: flex;\n  flex-wrap: wrap;\n}\n.project-boxes.jsGridView .project-box-wrapper {\n  width: 33.3%;\n}\n.project-boxes.jsListView .project-box {\n  display: flex;\n  border-radius: 10px;\n  position: relative;\n}\n.project-boxes.jsListView .project-box > * {\n  margin-right: 24px;\n}\n.project-boxes.jsListView .more-wrapper {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n.project-boxes.jsListView .project-box-content-header {\n  order: 1;\n  max-width: 120px;\n}\n.project-boxes.jsListView .project-box-header {\n  order: 2;\n}\n.project-boxes.jsListView .project-box-footer {\n  order: 3;\n  padding-top: 0;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.project-boxes.jsListView .project-box-footer:after {\n  display: none;\n}\n.project-boxes.jsListView .participants {\n  margin-bottom: 8px;\n}\n.project-boxes.jsListView .project-box-content-header p {\n  text-align: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.project-boxes.jsListView .project-box-header > span {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  font-size: 12px;\n}\n.project-boxes.jsListView .box-progress-wrapper {\n  order: 3;\n  flex: 1;\n}\n.project-box {\n  --main-color-card: #dbf6fd;\n  border-radius: 30px;\n  padding: 16px;\n  background-color: var(--main-color-card);\n}\n.project-box-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  color: var(--main-color);\n}\n.project-box-header span {\n  color: #4A4A4A;\n  opacity: .7;\n  font-size: 14px;\n  line-height: 16px;\n}\n.project-box-content-header {\n  text-align: center;\n  margin-bottom: 16px;\n}\n.project-box-content-header p {\n  margin: 0;\n}\n.project-box-wrapper {\n  padding: 8px;\n  transition: .2s;\n}\n.project-btn-more {\n  padding: 0;\n  height: 14px;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  background-color: transparent;\n  border: none;\n  flex-shrink: 0;\n  /*&:after, &:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background-color: var(--main-color);\r\n    opacity: .8;\r\n    left: 50%;\r\n    transform: translatex(-50%);\r\n  }\r\n  \r\n  &:before { top: 0;}\r\n  &:after { bottom: 0; }*/\n}\n.more-wrapper {\n  position: relative;\n}\n.box-content-header {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  opacity: .7;\n}\n.box-content-subheader {\n  font-size: 14px;\n  line-height: 24px;\n  opacity: .7;\n}\n.box-progress {\n  display: block;\n  height: 4px;\n  border-radius: 6px;\n}\n.box-progress-bar {\n  width: 100%;\n  height: 4px;\n  border-radius: 6px;\n  overflow: hidden;\n  background-color: #fff;\n  margin: 8px 0;\n}\n.box-progress-header {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 16px;\n  margin: 0;\n}\n.box-progress-percentage {\n  text-align: right;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 16px;\n}\n.project-box-footer {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 16px;\n  position: relative;\n}\n.project-box-footer:after {\n  content: '';\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.6);\n  width: calc(100% + 32px);\n  top: 0;\n  left: -16px;\n  height: 1px;\n}\n.participants {\n  display: flex;\n  align-items: center;\n}\n.participants img {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.participants img:not(:first-child) {\n  margin-left: -8px;\n}\n.add-participant {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-left: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n.days-left {\n  background-color: rgba(255, 255, 255, 0.6);\n  font-size: 12px;\n  border-radius: 20px;\n  flex-shrink: 0;\n  padding: 6px 16px;\n  font-weight: 700;\n}\n.mode-switch.active .moon {\n  fill: var(--main-color);\n}\n.messages-btn {\n  border-radius: 4px 0 0 4px;\n  position: absolute;\n  right: 0;\n  top: 58px;\n  background-color: var(--message-btn);\n  border: none;\n  color: var(--main-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px;\n  display: none;\n}\n@media screen and (max-width: 980px) {\n  .project-boxes.jsGridView .project-box-wrapper {\n    width: 50%;\n  }\n  .status-number, .status-type {\n    font-size: 14px;\n  }\n  .status-type:after {\n    width: 4px;\n    height: 4px;\n  }\n  .item-status {\n    margin-right: 0;\n  }\n}\n@media screen and (max-width: 880px) {\n  .messages-section {\n    transform: translateX(100%);\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    z-index: 2;\n    height: 100%;\n    width: 100%;\n  }\n  .messages-section .messages-close {\n    display: block;\n  }\n  .messages-btn {\n    display: flex;\n  }\n}\n@media screen and (max-width: 720px) {\n  .app-name, .profile-btn span {\n    display: none;\n  }\n  .add-btn, .notification-btn, .mode-switch {\n    width: 20px;\n    height: 20px;\n  }\n  .add-btn svg, .notification-btn svg, .mode-switch svg {\n    width: 16px;\n    height: 16px;\n  }\n  .app-header-right button {\n    margin-left: 4px;\n  }\n}\n@media screen and (max-width: 520px) {\n  .projects-section {\n    overflow: auto;\n  }\n  .project-boxes {\n    overflow-y: visible;\n  }\n  .app-sidebar, .app-icon {\n    display: none;\n  }\n  .app-content {\n    padding: 16px 12px 24px 12px;\n  }\n  .status-number, .status-type {\n    font-size: 10px;\n  }\n  .view-btn {\n    width: 24px;\n    height: 24px;\n  }\n  .app-header {\n    padding: 16px 10px;\n  }\n  .search-input {\n    max-width: 120px;\n  }\n  .project-boxes.jsGridView .project-box-wrapper {\n    width: 100%;\n  }\n  .projects-section {\n    padding: 24px 16px 0 16px;\n  }\n  .profile-btn img {\n    width: 24px;\n    height: 24px;\n  }\n  .app-header {\n    padding: 10px;\n  }\n  .projects-section-header p,\n  .projects-section-header .time {\n    font-size: 18px;\n  }\n  .status-type {\n    padding-right: 4px;\n  }\n  .status-type:after {\n    display: none;\n  }\n  .search-input {\n    font-size: 14px;\n  }\n  .messages-btn {\n    top: 48px;\n  }\n  .box-content-header {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .box-content-subheader {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .project-boxes.jsListView .project-box-header > span {\n    font-size: 10px;\n  }\n  .box-progress-header {\n    font-size: 12px;\n  }\n  .box-progress-percentage {\n    font-size: 10px;\n  }\n  .days-left {\n    font-size: 8px;\n    padding: 6px 6px;\n    text-align: center;\n  }\n  .project-boxes.jsListView .project-box > * {\n    margin-right: 10px;\n  }\n  .project-boxes.jsListView .more-wrapper {\n    right: 2px;\n    top: 10px;\n  }\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybXMvcGFnZXMvc3RvY2svQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXEdpdEh1YlxcZm9vZC1ubHUvc3JjXFxhcHBcXHBhZ2VzXFxmb3Jtc1xccGFnZXNcXHN0b2NrXFxzdG9jay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9ybXMvcGFnZXMvc3RvY2svc3RvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVGQUFZO0FDQVosZ0JBQWdCO0FERWhCO0VBQ0MsVUFBVTtFQUNWLG1CQUFtQjtBQ0NwQjtBREVBO0VBQ0MsK0JBQStCO0VBQy9CLG1CQUFtQjtBQ0NwQjtBRENBO0VBQ0Usc0JBQXNCO0FDRXhCO0FERUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7QUNDWDtBREVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQ0NsQjtBREVBO0VBQ0UsZUFBZTtBQ0NqQjtBREdFO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxlQUFlO0FDQW5CO0FER0U7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7QUNBN0I7QURHRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FDQXRCO0FERUk7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FDQ3pCO0FERUk7RUFBUyxZQUFZO0FDRXpCO0FEQUk7RUFDRSxpQkFBaUI7QUNHdkI7QURDRTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxrQkFBa0I7QUNFdEI7QURQRztFQVFHLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUNBQW1DO0VB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N0I7QUFDRjtBRElBO0VBQ0U7SUFBK0IsYUFBYTtFQ0E1QztFREVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUNBZDtFREZBO0lBS0ksV0FBVztJQUNYLFlBQVk7RUNBaEI7RURJQTtJQUNFLGdCQUFnQjtFQ0ZsQjtBQUNGO0FES0E7RUFDRTtJQUFvQixjQUFjO0VDRGxDO0VERUE7SUFBaUIsbUJBQW1CO0VDQ3BDO0VEQ0E7SUFBMEIsYUFBYTtFQ0V2QztFREFBO0lBQWUsNEJBQTRCO0VDRzNDO0VEREE7SUFDRSxlQUFlO0VDR2pCO0VEQUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQ0VkO0VEQ0E7SUFDRSxrQkFBa0I7RUNDcEI7RURFQTtJQUNFLGdCQUFnQjtFQ0FsQjtFREdBO0lBQ0UsV0FBVztFQ0RiO0VESUE7SUFDRSx5QkFBeUI7RUNGM0I7RURLQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VDSGQ7RURNQTtJQUNFLGFBQWE7RUNKZjtFRE9BOztJQUVFLGVBQWU7RUNMakI7RURRQTtJQUNFLGtCQUFrQjtFQ05wQjtFREtBO0lBSUksYUFBYTtFQ05qQjtFRFVBO0lBQ0UsZUFBZTtFQ1JqQjtFRFdBO0lBQWdCLFNBQVM7RUNSekI7RURVQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUNSbkI7RURXQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUNUbkI7RURZQTtJQUNFLGVBQWU7RUNWakI7RURhQTtJQUNFLGVBQWU7RUNYakI7RURjQTtJQUNFLGVBQWU7RUNaakI7RURlQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VDYnBCO0VEZ0JBO0lBQ0Usa0JBQWtCO0VDZHBCO0VEaUJBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUNmWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybXMvcGFnZXMvc3RvY2svc3RvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1ETStTYW5zOjQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gd2lkdGg6IDZweDtcclxuIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsYmFyLWJnKTtcclxuIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmJ1dHRvbiwgYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXBwIHtcclxuICAmLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWNvbnRhaW5lcik7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gICYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweCAyNHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gICYtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgICYtbGVmdCwgJi1yaWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYtbGVmdCB7IGZsZXgtZ3JvdzogMTsgfSBcclxuICAgIFxyXG4gICAgJi1yaWdodCBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDsgXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYtaWNvbiB7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJjpiZWZvcmUgeyB0b3A6IC02cHg7IH1cclxuICAgICY6YWZ0ZXIgeyBib3R0b206IC02cHg7IH1cclxuICB9XHJcbiAgXHJcbiAgJi1uYW1lIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMCAzMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGUtc3dpdGNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLXdyYXBwZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWFyZWEtYmcpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0ODBweDtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udCk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgxMzYsMTQ4LDE3MSwuMiksMCAyNHB4IDIwcHggLTI0cHggcmdiYSg3MSw4MiwxMDcsLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgLmRhcmsgJiB7IGJveC1zaGFkb3c6IG5vbmU7IH1cclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZsZXg6IDE7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYXJlYS1iZyk7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIFxyXG4gICY6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkLWJ0biB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1idG4ge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1idG4ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xyXG4gIFxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UtY29udGVudMKge1xyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hcHAtc2lkZWJhciB7XHJcbiAgcGFkZGluZzogNDBweCAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICYtbGluayB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1ob3Zlcik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZS1iZyk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdHMtc2VjdGlvbiB7XHJcbiAgZmxleDogMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0cy1zZWN0aW9uKTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIFxyXG4gICYtbGluZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG4gIH1cclxuICBcclxuICAmLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBvcGFjaXR5OiAuOTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aW1lIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2plY3RzLXN0YXR1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLml0ZW0tc3RhdHVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIFxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSAuc3RhdHVzLXR5cGU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogOHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTUwJSk7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXR1cy1udW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxufVxyXG5cclxuLnN0YXR1cy10eXBlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLnZpZXctYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnZpZXctYnRuIHtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIHRyYW5zaXRpb246IC4ycztcclxuICBcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZS1iZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUpO1xyXG4gIH1cclxuICBcclxuICAmOm5vdCguYWN0aXZlKTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tbGluay1jb2xvci1ob3Zlcik7XHJcbiAgICBjb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tZXNzYWdlcy1zZWN0aW9uIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0cy1zZWN0aW9uKTtcclxuICBtYXJnaW4tbGVmdDogMjRweDtcclxuICBmbGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC41NiwgMSk7XHJcbiAgXHJcbiAgLm1lc3NhZ2VzLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgJi5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3RzLXNlY3Rpb24taGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZzogMzJweCAyNHB4IDAgMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1wcm9qZWN0cy1zZWN0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlLWJveCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW1lc3NhZ2UtYm94LWJvcmRlcik7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVzc2FnZS1ib3gtaG92ZXIpO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1ob3Zlcik7XHJcbiAgICBcclxuICAgICsgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1ob3Zlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1lc3NhZ2UtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGVudCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3Rhci1jaGVja2JveCB7XHJcbiAgaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXJrICYge1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICBjb2xvcjogdmFyKC0tc3Rhcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyBsYWJlbCBzdmcge1xyXG4gICAgZmlsbDogdmFyKC0tc3Rhcik7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVzc2FnZS1saW5lIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBvcGFjaXR5OiAuNztcclxuICBcclxuICAmLnRpbWUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2plY3QtYm94ZXMge1xyXG4gIG1hcmdpbjogMCAtOHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgXHJcbiAgJi5qc0dyaWRWaWV3IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmpzTGlzdFZpZXcge1xyXG4gICAgLnByb2plY3QtYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICA+ICoge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW9yZS13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTZweDtcclxuICAgICAgdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1ib3gtY29udGVudC1oZWFkZXIge1xyXG4gICAgICBvcmRlcjogMTtcclxuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QtYm94LWhlYWRlciB7XHJcbiAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1ib3gtZm9vdGVyIHtcclxuICAgICAgb3JkZXI6IDM7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC1mb290ZXI6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFydGljaXBhbnRzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1ib3gtY29udGVudC1oZWFkZXIgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1ib3gtaGVhZGVyID4gc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxNnB4O1xyXG4gICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3gtcHJvZ3Jlc3Mtd3JhcHBlciB7XHJcbiAgICAgIG9yZGVyOiAzO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2plY3QtYm94IHtcclxuICAtLW1haW4tY29sb3ItY2FyZDogI2RiZjZmZDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci1jYXJkKTtcclxuICBcclxuICAmLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogIzRBNEE0QTtcclxuICAgICAgb3BhY2l0eTogLjc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYtY29udGVudC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIFxyXG4gICAgcCB7IG1hcmdpbjogMDsgfVxyXG4gIH1cclxuICBcclxuICAmLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2plY3QtYnRuLW1vcmUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIFxyXG4gIC8qJjphZnRlciwgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xyXG4gIH1cclxuICBcclxuICAmOmJlZm9yZSB7IHRvcDogMDt9XHJcbiAgJjphZnRlciB7IGJvdHRvbTogMDsgfSovXHJcbn1cclxuXHJcbi5tb3JlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJveC1jb250ZW50LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgb3BhY2l0eTogLjc7XHJcbn1cclxuXHJcbi5ib3gtY29udGVudC1zdWJoZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBvcGFjaXR5OiAuNztcclxufVxyXG5cclxuLmJveC1wcm9ncmVzcyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIFxyXG4gICYtYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gICYtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgJi13cmFwcGVyIHtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAmLXBlcmNlbnRhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1ib3gtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTs7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtMTZweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhcnRpY2lwYW50cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIFxyXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFkZC1wYXJ0aWNpcGFudCB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5kYXlzLWxlZnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBwYWRkaW5nOiA2cHggMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubW9kZS1zd2l0Y2guYWN0aXZlIC5tb29uIHtcclxuICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yKTtcclxufVxyXG5cclxuLm1lc3NhZ2VzLWJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZXNzYWdlLWJ0bik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLnByb2plY3QtYm94ZXMuanNHcmlkVmlldyAucHJvamVjdC1ib3gtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzLW51bWJlciwgLnN0YXR1cy10eXBlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cy10eXBlOmFmdGVyIHtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tc3RhdHVzIHsgbWFyZ2luLXJpZ2h0OiAwOyB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgLm1lc3NhZ2VzLXNlY3Rpb24ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgLm1lc3NhZ2VzLWNsb3NlIHsgZGlzcGxheTogYmxvY2s7IH1cclxuICB9XHJcbiAgXHJcbiAgLm1lc3NhZ2VzLWJ0biB7IGRpc3BsYXk6IGZsZXg7IH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAuYXBwLW5hbWUsIC5wcm9maWxlLWJ0biBzcGFuIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIFxyXG4gIC5hZGQtYnRuLCAubm90aWZpY2F0aW9uLWJ0biwgLm1vZGUtc3dpdGNoIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgXHJcbiAgICBzdmcge1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYXBwLWhlYWRlci1yaWdodCBidXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLnByb2plY3RzLXNlY3Rpb24geyBvdmVyZmxvdzogYXV0bzsgfVxyXG4gIC5wcm9qZWN0LWJveGVzIHsgb3ZlcmZsb3cteTogdmlzaWJsZTsgfVxyXG4gIFxyXG4gIC5hcHAtc2lkZWJhciwgLmFwcC1pY29uIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIFxyXG4gIC5hcHAtY29udGVudCB7IHBhZGRpbmc6IDE2cHggMTJweCAyNHB4IDEycHg7fVxyXG4gIFxyXG4gIC5zdGF0dXMtbnVtYmVyLCAuc3RhdHVzLXR5cGUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudmlldy1idG4ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICBcclxuICAucHJvamVjdC1ib3hlcy5qc0dyaWRWaWV3IC5wcm9qZWN0LWJveC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAucHJvamVjdHMtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHggMCAxNnB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS1idG4gaW1nIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAuYXBwLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIgcCxcclxuICAucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIgLnRpbWV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMtdHlwZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICBcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLm1lc3NhZ2VzLWJ0biB7IHRvcDogNDhweDsgfVxyXG5cclxuICAuYm94LWNvbnRlbnQtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmJveC1jb250ZW50LXN1YmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWhlYWRlciA+IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJveC1wcm9ncmVzcy1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJveC1wcm9ncmVzcy1wZXJjZW50YWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcblxyXG4gIC5kYXlzLWxlZnQge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3ggPiAqIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLm1vcmUtd3JhcHBlciB7XHJcbiAgICByaWdodDogMnB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gIH1cclxufSIsIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PURNK1NhbnM6NDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGxiYXItYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5idXR0b24sIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hcHAtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWNvbnRhaW5lcik7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxuLmFwcC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxNnB4IDI0cHggMjRweCAwO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXBwLWhlYWRlci1sZWZ0LCAuYXBwLWhlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHAtaGVhZGVyLWxlZnQge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5hcHAtaGVhZGVyLXJpZ2h0IGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYXBwLWljb24ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFwcC1pY29uOmJlZm9yZSwgLmFwcC1pY29uOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcbn1cblxuLmFwcC1pY29uOmJlZm9yZSB7XG4gIHRvcDogLTZweDtcbn1cblxuLmFwcC1pY29uOmFmdGVyIHtcbiAgYm90dG9tOiAtNnB4O1xufVxuXG4uYXBwLW5hbWUge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwIDMycHg7XG59XG5cbi5tb2RlLXN3aXRjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1hcmVhLWJnKTtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udCk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMTM2LCAxNDgsIDE3MSwgMC4yKSwgMCAyNHB4IDIwcHggLTI0cHggcmdiYSg3MSwgODIsIDEwNywgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRhcmsgLnNlYXJjaC13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZmxleDogMTtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWFyZWEtYmcpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5zZWFyY2gtaW5wdXQ6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIG9wYWNpdHk6IC42O1xufVxuXG4uYWRkLWJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb24tYnRuIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1idG4ge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZDtcbn1cblxuLnByb2ZpbGUtYnRuIGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ucHJvZmlsZS1idG4gc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnBhZ2UtY29udGVudMKgIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcHAtc2lkZWJhciB7XG4gIHBhZGRpbmc6IDQwcHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwcC1zaWRlYmFyLWxpbmsge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIHRyYW5zaXRpb246IC4ycztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHAtc2lkZWJhci1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1ob3Zlcik7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XG59XG5cbi5hcHAtc2lkZWJhci1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlLWJnKTtcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcbn1cblxuLnByb2plY3RzLXNlY3Rpb24ge1xuICBmbGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0cy1zZWN0aW9uKTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdHMtc2VjdGlvbi1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cblxuLnByb2plY3RzLXNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3BhY2l0eTogLjk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4ucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIgLnRpbWUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wcm9qZWN0cy1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaXRlbS1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLXN0YXR1czpub3QoOmxhc3QtY2hpbGQpIC5zdGF0dXMtdHlwZTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTUwJSk7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5zdGF0dXMtbnVtYmVyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4uc3RhdHVzLXR5cGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4udmlldy1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZpZXctYnRuIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxuLnZpZXctYnRuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlLWJnKTtcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcbn1cblxuLnZpZXctYnRuOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItaG92ZXIpO1xuICBjb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUpO1xufVxuXG4ubWVzc2FnZXMtc2VjdGlvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdHMtc2VjdGlvbik7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjU2LCAxKTtcbn1cblxuLm1lc3NhZ2VzLXNlY3Rpb24gLm1lc3NhZ2VzLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xuICB6LWluZGV4OiAzO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZXNzYWdlcy1zZWN0aW9uLnNob3cge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ubWVzc2FnZXMtc2VjdGlvbiAucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDMycHggMjRweCAwIDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RzLXNlY3Rpb24pO1xufVxuXG4ubWVzc2FnZS1ib3gge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbWVzc2FnZS1ib3gtYm9yZGVyKTtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVzc2FnZS1ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZXNzYWdlLWJveC1ob3Zlcik7XG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWxpbmstY29sb3ItaG92ZXIpO1xufVxuXG4ubWVzc2FnZS1ib3g6aG92ZXIgKyAubWVzc2FnZS1ib3gge1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcbn1cblxuLm1lc3NhZ2UtYm94IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5tZXNzYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZXNzYWdlLWhlYWRlciAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWVzc2FnZS1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN0YXItY2hlY2tib3ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5zdGFyLWNoZWNrYm94IGxhYmVsIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhcmsgLnN0YXItY2hlY2tib3gge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmRhcmsgLnN0YXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXN0YXIpO1xufVxuXG4uc3Rhci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgbGFiZWwgc3ZnIHtcbiAgZmlsbDogdmFyKC0tc3Rhcik7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxuLm1lc3NhZ2UtbGluZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBvcGFjaXR5OiAuNztcbn1cblxuLm1lc3NhZ2UtbGluZS50aW1lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5wcm9qZWN0LWJveGVzIHtcbiAgbWFyZ2luOiAwIC04cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzR3JpZFZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzR3JpZFZpZXcgLnByb2plY3QtYm94LXdyYXBwZXIge1xuICB3aWR0aDogMzMuMyU7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveCA+ICoge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLm1vcmUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRvcDogMTZweDtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtY29udGVudC1oZWFkZXIge1xuICBvcmRlcjogMTtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtaGVhZGVyIHtcbiAgb3JkZXI6IDI7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWZvb3RlciB7XG4gIG9yZGVyOiAzO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveC1mb290ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wYXJ0aWNpcGFudHMge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWNvbnRlbnQtaGVhZGVyIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtaGVhZGVyID4gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNnB4O1xuICBsZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLmJveC1wcm9ncmVzcy13cmFwcGVyIHtcbiAgb3JkZXI6IDM7XG4gIGZsZXg6IDE7XG59XG5cbi5wcm9qZWN0LWJveCB7XG4gIC0tbWFpbi1jb2xvci1jYXJkOiAjZGJmNmZkO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWNhcmQpO1xufVxuXG4ucHJvamVjdC1ib3gtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWJveC1oZWFkZXIgc3BhbiB7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBvcGFjaXR5OiAuNztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cblxuLnByb2plY3QtYm94LWNvbnRlbnQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ucHJvamVjdC1ib3gtY29udGVudC1oZWFkZXIgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2plY3QtYm94LXdyYXBwZXIge1xuICBwYWRkaW5nOiA4cHg7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxuLnByb2plY3QtYnRuLW1vcmUge1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIC8qJjphZnRlciwgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xyXG4gIH1cclxuICBcclxuICAmOmJlZm9yZSB7IHRvcDogMDt9XHJcbiAgJjphZnRlciB7IGJvdHRvbTogMDsgfSovXG59XG5cbi5tb3JlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3gtY29udGVudC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvcGFjaXR5OiAuNztcbn1cblxuLmJveC1jb250ZW50LXN1YmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG9wYWNpdHk6IC43O1xufVxuXG4uYm94LXByb2dyZXNzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5ib3gtcHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5ib3gtcHJvZ3Jlc3MtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYm94LXByb2dyZXNzLXBlcmNlbnRhZ2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ucHJvamVjdC1ib3gtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvamVjdC1ib3gtZm9vdGVyOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gIHRvcDogMDtcbiAgbGVmdDogLTE2cHg7XG4gIGhlaWdodDogMXB4O1xufVxuXG4ucGFydGljaXBhbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhcnRpY2lwYW50cyBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucGFydGljaXBhbnRzIGltZzpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xufVxuXG4uYWRkLXBhcnRpY2lwYW50IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kYXlzLWxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubW9kZS1zd2l0Y2guYWN0aXZlIC5tb29uIHtcbiAgZmlsbDogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5tZXNzYWdlcy1idG4ge1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZXNzYWdlLWJ0bik7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuICAucHJvamVjdC1ib3hlcy5qc0dyaWRWaWV3IC5wcm9qZWN0LWJveC13cmFwcGVyIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5zdGF0dXMtbnVtYmVyLCAuc3RhdHVzLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuc3RhdHVzLXR5cGU6YWZ0ZXIge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cbiAgLml0ZW0tc3RhdHVzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgLm1lc3NhZ2VzLXNlY3Rpb24ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1lc3NhZ2VzLXNlY3Rpb24gLm1lc3NhZ2VzLWNsb3NlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWVzc2FnZXMtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5hcHAtbmFtZSwgLnByb2ZpbGUtYnRuIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFkZC1idG4sIC5ub3RpZmljYXRpb24tYnRuLCAubW9kZS1zd2l0Y2gge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuICAuYWRkLWJ0biBzdmcsIC5ub3RpZmljYXRpb24tYnRuIHN2ZywgLm1vZGUtc3dpdGNoIHN2ZyB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG4gIC5hcHAtaGVhZGVyLXJpZ2h0IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xuICAucHJvamVjdHMtc2VjdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgLnByb2plY3QtYm94ZXMge1xuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gIH1cbiAgLmFwcC1zaWRlYmFyLCAuYXBwLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFwcC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNnB4IDEycHggMjRweCAxMnB4O1xuICB9XG4gIC5zdGF0dXMtbnVtYmVyLCAuc3RhdHVzLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAudmlldy1idG4ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuICAuYXBwLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTZweCAxMHB4O1xuICB9XG4gIC5zZWFyY2gtaW5wdXQge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gIH1cbiAgLnByb2plY3QtYm94ZXMuanNHcmlkVmlldyAucHJvamVjdC1ib3gtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb2plY3RzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDI0cHggMTZweCAwIDE2cHg7XG4gIH1cbiAgLnByb2ZpbGUtYnRuIGltZyB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIC5hcHAtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciBwLFxuICAucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIgLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuc3RhdHVzLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgfVxuICAuc3RhdHVzLXR5cGU6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5tZXNzYWdlcy1idG4ge1xuICAgIHRvcDogNDhweDtcbiAgfVxuICAuYm94LWNvbnRlbnQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbiAgLmJveC1jb250ZW50LXN1YmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG4gIC5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWhlYWRlciA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuYm94LXByb2dyZXNzLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5ib3gtcHJvZ3Jlc3MtcGVyY2VudGFnZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5kYXlzLWxlZnQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHBhZGRpbmc6IDZweCA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94ID4gKiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLm1vcmUtd3JhcHBlciB7XG4gICAgcmlnaHQ6IDJweDtcbiAgICB0b3A6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */";
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


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n/* $Font */\n/* $Color Palette */\n/* $Mixins */\n/* --$Translate */\n/* --$Animation */\n/* --$Animation-Delay */\n/* --$Animation-Deuration */\n/* --$Transition*/\n/* --$Scale */\n/* --$Shadow */\n/* Main style */\n.app-wrapp {\n  width: 100%;\n  height: 100%;\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZZJREFUeNq8VtFxgzAMBU/ACOkGZIKYDZK/XL+aCRImwZ6AfvXyl24QMgHeoBnBI1TinnuqC2kDKbrTcRek9yTZeiRNbth2+5zRQ5OvyPPotSO/kDfH45sfwkhvAB/I9+QZfm6iMI0ng1ty00eU9oBzpSfyBUAtJb4PFLJGEUx2Jd9QrBskoIQXetSoaheAQapFNx6jcYKoxnvOe/1BAJAWs+VKrvQbg1Y985fnUFJsQ7ELdM6xy0Ceipm3qGAJ8Arn8Bfj+ZcgadEh43iFgANmvhsB3uVzDucyBrC6/BTVf3C7FFBgLOdknBUY1xmjelLi8CyCqmS8hVwLTK2wRAnfGBx0PoEgZwxxrVcKgE20PFNMi8XMVfQyewDBNwyV/LPFBP4BmD4mcNHcppo8T6cguZ2eYL3dBHDeJQdtYrsoMHqoIls5gSDk7oMgKmg4L4ZGF0xoRoAbbPEa47FSiwz0vGbBYuG6k0SKXQ0s83WL0MUGd/gkSIpfzsRBf0oh1xnk3s/7wZnlkznLR//evy1D3QX7FGAAhvHiHphAQV8AAAAASUVORK5CYII=\"), auto;\n  position: relative;\n}\n.app-wrapp .app-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: #FFFFFF;\n  border-radius: 3px;\n  overflow: hidden;\n}\n/* Main view */\n.view-main {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  bottom: 0px;\n  right: 0;\n  transition: right 0.3s linear;\n}\n.view-main.deactive {\n  right: 30%;\n}\n.view-main .header-wrapp {\n  width: 100%;\n  position: relative;\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n}\n.view-main .header-wrapp .app-detail {\n  text-align: center;\n  padding: 20px 5px 5px;\n  color: #4a0202;\n  text-shadow: 0 0 15px #FFA000;\n}\n.view-main .header-wrapp .app-detail img {\n  width: 75px;\n  border-radius: 50%;\n  box-shadow: 0 0 15px #FFA000;\n  border: 3px solid #FFFFFF;\n}\n.view-main .header-wrapp .app-detail .status {\n  font-size: 13px;\n}\n.view-main .header-wrapp .wave-wrapp {\n  width: 100%;\n  height: 28px;\n  position: absolute;\n  bottom: 0px;\n}\n.view-main .header-wrapp .wave-wrapp .wave {\n  display: block;\n  width: 100%;\n  margin: 0;\n  height: 40px;\n}\n.view-main .header-wrapp .wave-wrapp .wave .parallax > use {\n  -webkit-animation: move-forever 12s linear infinite;\n  animation: move-forever 12s linear infinite;\n}\n.view-main .header-wrapp .wave-wrapp .wave .parallax > use:nth-child(1) {\n  -webkit-animation-delay: -2s;\n  animation-delay: -2s;\n  transform: translate(-110px, 0%);\n}\n.view-main .header-wrapp .wave-wrapp .wave .parallax > use:nth-child(2) {\n  -webkit-animation-delay: -2s;\n  animation-delay: -2s;\n  -webkit-animation-duration: 7s;\n  animation-duration: 7s;\n}\n.view-main .header-wrapp .wave-wrapp .wave .parallax > use:nth-child(3) {\n  -webkit-animation-delay: -4s;\n  animation-delay: -4s;\n  -webkit-animation-duration: 4s;\n  animation-duration: 4s;\n  transform: translate(-65px, 0%);\n}\n.view-main .content-wrapp {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.view-main .content-wrapp .nav-group {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  box-shadow: 0px 3px 5px #cccccc;\n}\n.view-main .content-wrapp #master-nav {\n  text-align: center;\n  padding-top: 15px;\n  border-bottom: 1px solid whitesmoke;\n}\n.view-main .content-wrapp #master-nav ul {\n  list-style: none;\n  padding: 0px;\n  position: relative;\n}\n.view-main .content-wrapp #master-nav ul li {\n  display: inline-block;\n  width: 15%;\n  font-size: 20px;\n  padding: 5px 0;\n  margin: 0 18px;\n}\n.view-main .content-wrapp #master-nav ul li i {\n  color: #757575;\n  font-size: 20px;\n}\n.view-main .content-wrapp #master-nav ul li.active i {\n  color: linear-gradient(to right, #64b3f4, #c2e59c);\n}\n.view-main .content-wrapp #master-nav ul #active-line {\n  position: absolute;\n  bottom: -1px;\n  height: 2px;\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n  padding: 0px;\n  border-radius: 45px;\n  left: 0px;\n  transition: width 0.5s;\n}\n.view-main .content-wrapp #master-nav-items {\n  position: absolute;\n  width: 100%;\n  top: 53px;\n  bottom: 0;\n}\n.view-main .content-wrapp #master-nav-items > div {\n  width: 100%;\n  height: auto;\n  position: relative;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  transition: left 0.5s, opacity 0.4s;\n}\n.view-main .content-wrapp #master-nav-items > div.active {\n  left: 0;\n  opacity: 1;\n}\n.view-main .content-wrapp #master-nav-items > div.after {\n  left: 100%;\n}\n.view-main .content-wrapp #master-nav-items > div.before {\n  left: -100%;\n}\n.view-main .content-wrapp .messages-list {\n  padding-top: 10px;\n}\n.view-main .content-wrapp .messages-list ul {\n  list-style: none;\n  padding: 0;\n}\n.view-main .content-wrapp .messages-list ul > li {\n  width: 100%;\n  height: 75px;\n  overflow: hidden;\n  border-bottom: 1px solid #f2f2f2;\n}\n.view-main .content-wrapp .messages-list ul > li .sender-image {\n  width: 75px;\n  height: 75px;\n  float: left;\n  text-align: center;\n  padding-top: 8px;\n}\n.view-main .content-wrapp .messages-list ul > li .sender-image img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail {\n  margin-left: 75px;\n  padding: 5px 15px 5px 5px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col1 {\n  width: 65%;\n  float: left;\n  padding-right: 5px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col1 .sender-name {\n  font-size: 13px;\n  font-weight: bold;\n  padding-bottom: 3px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col1 .mes-preview {\n  font-size: 12px;\n  color: #757575;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col2 {\n  font-size: 12px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col2 .send-time {\n  float: right;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col2 .mes-seen-status {\n  float: right;\n  color: #4CAF50;\n  position: relative;\n  top: -2px;\n  right: 5px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col2 .mes-seen-status i {\n  font-size: 16px;\n}\n.view-main .content-wrapp .messages-list ul > li .mes-detail .mes-col2 .mes-count {\n  background: linear-gradient(to right, #64b3f4, #c2e59c);\n  padding: 1px 6px;\n  border-radius: 50px;\n  color: #FFFFFF;\n  float: right;\n  margin: 10px 0 0;\n  clear: right;\n}\n.view-main .content-wrapp .alphabet {\n  position: absolute;\n  right: 10px;\n  top: 15px;\n  font-size: 11px;\n  text-align: center;\n  font-weight: bold;\n  line-height: 20px;\n  z-index: 1;\n}\n.view-main .content-wrapp .alphabet > div:after {\n  content: \" \";\n  background: #FFA000;\n  width: 3px;\n  height: 3px;\n  position: relative;\n  display: flex;\n  margin: auto;\n  border-radius: 50%;\n}\n.view-main .content-wrapp .alphabet > div:last-child:after {\n  content: \"\";\n  display: none;\n}\n.view-main .content-wrapp .contact-list {\n  font-size: 14px;\n}\n.view-main .content-wrapp .contact-list ul {\n  list-style: none;\n}\n.view-main .content-wrapp .contact-list > ul {\n  padding-top: 5px;\n}\n.view-main .content-wrapp .contact-list > ul > li .title {\n  text-indent: 10px;\n  background: #f9f9f9;\n  color: #757575;\n  width: 100%;\n  float: left;\n  font-weight: bold;\n  text-transform: uppercase;\n  box-shadow: 0 9px 7px -8px #d9d9d9;\n}\n.view-main .content-wrapp .contact-list > ul > li ul {\n  padding-top: 20px;\n}\n.view-main .content-wrapp .contact-list > ul > li ul li {\n  padding: 10px;\n  display: block;\n  border-bottom: 1px solid whitesmoke;\n  text-transform: capitalize;\n  font-size: 13px;\n}\n.view-main .content-wrapp .profile-setting .information {\n  padding-top: 5px;\n}\n.view-main .content-wrapp .profile-setting .information .private > p, .view-main .content-wrapp .profile-setting .information .public > p {\n  font-size: 12px;\n  font-weight: bold;\n  padding: 5px 15px;\n  background: #f2f2f2;\n}\n.view-main .content-wrapp .activity {\n  text-align: center;\n  padding: 40px 5px 5px;\n  line-height: 40px;\n}\n.view-main .content-wrapp .activity i {\n  font-size: 60px;\n  color: linear-gradient(to right, #64b3f4, #c2e59c);\n}\n.view-message {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  background: #f2f2f2;\n  z-index: 1;\n  box-shadow: 0 0 15px #999999;\n  right: -110%;\n  transition: right 0.5s;\n}\n.view-message.active {\n  right: 0;\n}\n.view-message .status-bar {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  z-index: 4;\n  box-shadow: 0 0 15px #cccccc;\n}\n.view-message .status-bar .back-arrow {\n  float: left;\n  color: #FFA000;\n  padding: 7px;\n}\n.view-message .status-bar .back-arrow i {\n  font-size: 35px;\n}\n.view-message .status-bar .sender-name {\n  font-weight: bold;\n  text-align: center;\n  padding: 15px 50px 0 0;\n}\n.view-message .messages-area {\n  position: absolute;\n  width: 100%;\n  top: 50px;\n  bottom: 63px;\n  z-index: 2;\n}\n.view-message .messages-area ul {\n  list-style: none;\n  padding-top: 5px;\n}\n.view-message .messages-area ul li {\n  display: block;\n  height: auto;\n  clear: both;\n  overflow: auto;\n  position: relative;\n  width: 100%;\n  opacity: 1;\n  bottom: 0;\n  left: 0;\n  transition: all 0.4s;\n}\n.view-message .messages-area ul li > div {\n  position: relative;\n  display: inline-block;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 13px;\n  margin: 3px 20px 10px;\n  max-width: 70%;\n  word-wrap: break-word;\n}\n.view-message .messages-area ul li > div span {\n  display: block;\n  font-size: 10px;\n  margin-top: 5px;\n  text-align: right;\n}\n.view-message .messages-area ul li > div:after {\n  content: \" \";\n  display: block;\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  bottom: 0;\n}\n.view-message .messages-area ul li.sent > div {\n  background: #FFA000;\n  color: #FFFFFF;\n  float: right;\n  box-shadow: 0 0 10px #FFA000;\n}\n.view-message .messages-area ul li.sent > div:after {\n  right: -6px;\n  border-top-right-radius: 50px;\n  border-right: 10px solid #FFA000;\n  transform: rotate(160deg);\n  border-top: 1px solid #FFA000;\n}\n.view-message .messages-area ul li.recive > div {\n  background: #FFFFFF;\n  color: #757575;\n  float: left;\n  box-shadow: 0 0 10px #e6e5e5;\n}\n.view-message .messages-area ul li.recive > div:after {\n  left: -6px;\n  border-top-left-radius: 50px;\n  border-left: 10px solid #FFFFFF;\n  transform: rotate(185deg);\n  border-top: 1px solid #FFFFFF;\n}\n.view-message .messages-area ul li.goto {\n  width: 0;\n  opacity: 0;\n  bottom: -500px;\n  left: -50%;\n}\n.view-message .text-media-area {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  z-index: 3;\n  overflow: hidden;\n  height: auto;\n  box-shadow: 0 -1px 5px #d9d9d9;\n}\n.view-message .text-media-area .message-form {\n  height: 62px;\n}\n.view-message .text-media-area .message-form > button {\n  display: inline-block;\n  width: 60px;\n  text-align: center;\n  font-size: 15px;\n  color: #FFA000;\n  float: right;\n  background: transparent;\n  border: none;\n  padding: 20px 0 15px;\n  position: relative;\n  z-index: 3;\n}\n.view-message .text-media-area .message-form input {\n  font-family: 'Open Sans', sans-serif;\n  padding: 5px;\n  border: 0px;\n  position: absolute;\n  padding: 22px 60px 21px 15px;\n  left: 0;\n  width: 100%;\n  font-size: 14px;\n  color: #757575;\n  background: transparent;\n  z-index: 2;\n}\n.form-group {\n  padding: 5px;\n  border-bottom: 1px solid #f2f2f2;\n}\n.form-group > span {\n  display: inline-block;\n  width: 40px;\n  text-align: center;\n  font-size: 21px;\n  color: #212121;\n}\n.form-group > span i {\n  position: relative;\n  top: 3px;\n  font-size: 22px;\n}\n.form-group .title-leve1 {\n  font-family: 'Open Sans', sans-serif;\n  padding: 5px;\n  border: 0px;\n  margin-left: 5px;\n  position: absolute;\n  right: 0;\n  left: 40px;\n  width: 80%;\n  font-size: 12px;\n  color: #757575;\n  background: transparent;\n  display: inline-block;\n}\n.form-group input[type=text], .form-group textarea {\n  font-family: 'Open Sans', sans-serif;\n  padding: 5px;\n  border: 0px;\n  margin-left: 5px;\n  position: absolute;\n  right: 0;\n  left: 40px;\n  width: 80%;\n  font-size: 12px;\n  color: #757575;\n  background: transparent;\n}\n.form-group textarea {\n  resize: none;\n}\n.form-group.h-80 {\n  height: 80px;\n}\n.reset {\n  transition: transform 0.4s;\n}\n[data-viewport=true] {\n  overflow: hidden;\n}\n[data-viewport=true] > span.viewportShadow {\n  content: \" \";\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  transition: box-shadow 0.2s;\n}\n/* Keyframes */\n@-webkit-keyframes move-forever {\n  0% {\n    transform: translate(-90px, 0%);\n  }\n  100% {\n    transform: translate(85px, 0%);\n  }\n}\n@keyframes move-forever {\n  0% {\n    transform: translate(-90px, 0%);\n  }\n  100% {\n    transform: translate(85px, 0%);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1sYXlvdXQvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXEdpdEh1YlxcZm9vZC1ubHUvc3JjXFxhcHBcXHBhZ2VzXFxtYWluLWxheW91dFxcbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFpQkEsZ0VBQVk7QUFDWixzRUFBWTtBQUZaLFVBQUE7QUFHQSxtQkFBQTtBQWdCQSxZQUFBO0FBQ0EsaUJBQUE7QUFPQSxpQkFBQTtBQU9BLHVCQUFBO0FBT0EsMkJBQUE7QUFPQSxpQkFBQTtBQU9BLGFBQUE7QUFPQSxjQUFBO0FBT0EsZUFBQTtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1c0JBQXNzQjtFQUN0c0Isa0JBQWtCO0FDekVwQjtBRHFFQTtFQU1JLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQTVFd0I7RUE2RXhCLGtCQUFpQjtFQUNqQixnQkFBZ0I7QUN2RXBCO0FEMkVBLGNBQUE7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YsTUFBSztFQUNMLFdBQVU7RUFDVixRQUFRO0VBdkNSLDZCQXdDcUM7QUNyRXZDO0FEK0RBO0VBUUksVUFBVTtBQ25FZDtBRDJEQTtFQVdJLFdBQVU7RUFFVixrQkFBaUI7RUFDakIsdURBN0ZzRDtBQzBCMUQ7QURxREE7RUFnQk0sa0JBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixjQUFjO0VBQ2QsNkJBcEdzQjtBQ21DNUI7QUQ4Q0E7RUFxQlEsV0FBVTtFQUNWLGtCQUFpQjtFQTNDdkIsNEJBNUQwQjtFQXlHcEIseUJBM0dvQjtBQzhDNUI7QURxQ0E7RUEyQlEsZUFBYztBQzVEdEI7QURpQ0E7RUErQk0sV0FBVTtFQUNWLFlBQVk7RUFDWixrQkFBaUI7RUFDakIsV0FBVTtBQzVEaEI7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O0VDdW1CM0I7RURoREE7SUF2akJBLDhCQUEyQjtFQzZtQjNCO0FBQ0Y7QUQzQkE7RUFDRTtJQXBsQkEsK0JBQTJCO0VDbXFCM0I7RUQ1RUE7SUF2bEJBLDhCQUEyQjtFQ3lxQjNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLWxheW91dC9tYWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy92Mi90aGVtaW5nL1xyXG5cclxuXHJcbi8vIEFwcCBHbG9iYWwgU2Fzc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZVxyXG4vLyBzdHlsZXMgYXJlIGZvciB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC5cclxuLy8gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlIGFsc28gdXNlZCBhcyBhbiBlbnRyeSBwb2ludFxyXG4vLyB0byBpbXBvcnQgb3RoZXIgU2FzcyBmaWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgb3V0cHV0IENTUy5cclxuLy9cclxuLy8gU2hhcmVkIFNhc3MgdmFyaWFibGVzLCB3aGljaCBjYW4gYmUgdXNlZCB0byBhZGp1c3QgSW9uaWMnc1xyXG4vLyBkZWZhdWx0IFNhc3MgdmFyaWFibGVzLCBiZWxvbmcgaW4gXCJ0aGVtZS92YXJpYWJsZXMuc2Nzc1wiLlxyXG4vL1xyXG4vLyBUbyBkZWNsYXJlIHJ1bGVzIGZvciBhIHNwZWNpZmljIG1vZGUsIGNyZWF0ZSBhIGNoaWxkIHJ1bGVcclxuLy8gZm9yIHRoZSAubWQsIC5pb3MsIG9yIC53cCBtb2RlIGNsYXNzZXMuIFRoZSBtb2RlIGNsYXNzIGlzXHJcbi8vIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB0aGUgPGJvZHk+IGVsZW1lbnQgaW4gdGhlIGFwcC5cclxuLyogJEZvbnQgKi9cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIik7XHJcbi8qICRDb2xvciBQYWxldHRlICovXHJcbiR3aGl0ZTogICAgICAgICAgICAgICNGRkZGRkY7XHJcbiRibGFjazogICAgICAgICAgICAgICMwMDAwMDA7XHJcbiRkYXJrUHJpbWFyeUNvbG9yOiAgICNGRkEwMDA7XHJcbi8vICRwcmltYXJ5Q29sb3I6ICAgICAgICNGRkMxMDc7XHJcbiRwcmltYXJ5Q29sb3I6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XHJcbiRsaWdodFByaW1hcnlDb2xvcjogICNGRkVDQjM7XHJcbiR0ZXh0UHJpbWFyeUNvbG9yOiAgICMyMTIxMjE7XHJcbiRhY2NlbnRDb2xvcjogICAgICAgICNGRjU3MjI7XHJcbiRwcmltYXJ5VGV4dENvbG9yOiAgICMyMTIxMjE7XHJcbiRzZWNvbmRhcnlUZXh0Q29sb3I6ICM3NTc1NzU7XHJcbiRkaXZpZGVyQ29sb3I6ICAgICAgICNCREJEQkQ7XHJcbiRiYWNrZ3JvdWQ6ICAgICAgICAgICMzNzQwNDY7XHJcbiRzdWNjZXNzOiAgICAgICAgICAgICM0Q0FGNTA7XHJcbiRwcmltYXJ5OiAgICAgICAgICAgICM0NDhBRkY7XHJcblxyXG4vKiAkTWl4aW5zICovXHJcbi8qIC0tJFRyYW5zbGF0ZSAqL1xyXG5AbWl4aW4gdHJhbnNsYXRlKCR4LCR5KXtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCR5KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCR5KTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwkeSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsJHkpO1xyXG59XHJcbi8qIC0tJEFuaW1hdGlvbiAqL1xyXG5AbWl4aW4gYW5pbWF0aW9uKCRwYXJhbWV0ZXIpe1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkcGFyYW1ldGVyO1xyXG4gIC1tb3otYW5pbWF0aW9uOiAkcGFyYW1ldGVyO1xyXG4gIC1vLWFuaW1hdGlvbjogJHBhcmFtZXRlcjtcclxuICBhbmltYXRpb246ICRwYXJhbWV0ZXI7XHJcbn1cclxuLyogLS0kQW5pbWF0aW9uLURlbGF5ICovXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJHZhbHVlKXtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XHJcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XHJcbn1cclxuLyogLS0kQW5pbWF0aW9uLURldXJhdGlvbiAqL1xyXG5AbWl4aW4gYW5pbWF0aW9uLWR1cmF0aW9uKCR2YWx1ZSl7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246ICR2YWx1ZTtcclxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogJHZhbHVlO1xyXG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogJHZhbHVlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogJHZhbHVlO1xyXG59XHJcbi8qIC0tJFRyYW5zaXRpb24qL1xyXG5AbWl4aW4gdHJhbnNpdGlvbigkcGFyYW1ldGVyKXtcclxuICAtd2Via2l0LXRyYW5zaXRpb246ICRwYXJhbWV0ZXI7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkcGFyYW1ldGVyO1xyXG4gIC1vLXRyYW5zaXRpb246ICRwYXJhbWV0ZXI7XHJcbiAgdHJhbnNpdGlvbjogJHBhcmFtZXRlcjtcclxufVxyXG4vKiAtLSRTY2FsZSAqL1xyXG5AbWl4aW4gc2NhbGUoJHZhbHVlKXtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHZhbHVlKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHZhbHVlKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKCR2YWx1ZSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgkdmFsdWUpO1xyXG59XHJcbi8qIC0tJFNoYWRvdyAqL1xyXG5AbWl4aW4gc2hhZG93KCR2YWx1ZSl7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkdmFsdWU7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAgICAkdmFsdWU7XHJcbiAgYm94LXNoYWRvdzogICAgICAgICAkdmFsdWU7XHJcbn1cclxuXHJcbi8qIE1haW4gc3R5bGUgKi9cclxuXHJcbi5hcHAtd3JhcHB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjp1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBWlpKUkVGVWVOcThWdEZ4Z3pBTUJVL0FDT2tHWklLWURaSy9YTCthQ1JJbXdaNkFmdlh5bDI0UU1nSGVvQm5CSTFUaW5udXFDMmtES2JyVGNSZWs5eVRaZWlSTmJ0aDIrNXpSUTVPdnlQUG90U08va0RmSDQ1c2Z3a2h2QUIvSTkrUVpmbTZpTUkwbmcxdHkwMGVVOW9CenBTZnlCVUF0SmI0UEZMSkdFVXgySmQ5UXJCc2tvSVFYZXRTb2FoZUFRYXBGTng2amNZS294bnZPZS8xQkFKQVdzK1ZLcnZRYmcxWTk4NWZuVUZKc1E3RUxkTTZ4eTBDZWlwbTNxR0FKOEFybjhCZmorWmNnYWRFaDQzaUZnQU5tdmhzQjN1VnpEdWN5QnJDNi9CVFZmM0M3RkZCZ0xPZGtuQlVZMXhtamVsTGk4Q3lDcW1TOGhWd0xUSzJ3UkFuZkdCeDBQb0VnWnd4eHJWY0tnRTIwUEZOTWk4WE1WZlF5ZXdEQk53eVYvTFBGQlA0Qm1ENG1jTkhjcHBvOFQ2Y2d1WjJlWUwzZEJIRGVKUWR0WXJzb01IcW9JbHM1Z1NEazdvTWdLbWc0TDRaR0YweG9Sb0FiYlBFYTQ3RlNpd3owdkdiQll1RzZrMFNLWFEwczgzV0wwTVVHZC9na1NJcGZ6c1JCZjBvaDF4bmszcy83d1pubGt6bkxSLy9ldnkxRDNRWDdGR0FBaHZIaUhwaEFRVjhBQUFBQVNVVk9SSzVDWUlJPScpLCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuYXBwLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuLyogTWFpbiB2aWV3ICovXHJcbi52aWV3LW1haW57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdG9wOjA7XHJcbiAgYm90dG9tOjBweDtcclxuICByaWdodDogMDtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKHJpZ2h0IDAuM3MgbGluZWFyKTtcclxuICAmLmRlYWN0aXZle1xyXG4gICAgcmlnaHQ6IDMwJTtcclxuICB9XHJcbiAgLmhlYWRlci13cmFwcHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6MzYlO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xyXG4gICAgLmFwcC1kZXRhaWx7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzoyMHB4IDVweCA1cHg7XHJcbiAgICAgIGNvbG9yOiAjNGEwMjAyOztcclxuICAgICAgdGV4dC1zaGFkb3c6MCAwIDE1cHggJGRhcmtQcmltYXJ5Q29sb3I7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICB3aWR0aDo3NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHNoYWRvdygwIDAgMTVweCAkZGFya1ByaW1hcnlDb2xvcik7XHJcbiAgICAgICAgYm9yZGVyOjNweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLnN0YXR1c3tcclxuICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndhdmUtd3JhcHB7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTowcHg7XHJcbiAgICAgIC53YXZlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC5wYXJhbGxheHtcclxuICAgICAgICAgID4gdXNlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKG1vdmUtZm9yZXZlciAxMnMgbGluZWFyIGluZmluaXRlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgID4gdXNlOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbi1kZWxheSgtMnMpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2xhdGUoLTExMHB4LDAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgID4gdXNlOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbi1kZWxheSgtMnMpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24tZHVyYXRpb24oN3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPiB1c2U6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uLWRlbGF5KC00cyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbi1kdXJhdGlvbig0cyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtNjVweCwwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250ZW50LXdyYXBwe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLm5hdi1ncm91cHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCBkYXJrZW4oJHdoaXRlLDIwJSk7XHJcbiAgICB9XHJcbiAgICAjbWFzdGVyLW5hdntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBkYXJrZW4oJHdoaXRlLDQlKTtcclxuICAgICAgdWx7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMThweDtcclxuICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgIGNvbG9yOiRzZWNvbmRhcnlUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI2FjdGl2ZS1saW5le1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOi0xcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6MnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcclxuICAgICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czo0NXB4O1xyXG4gICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKHdpZHRoIDAuNXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgI21hc3Rlci1uYXYtaXRlbXN7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRvcDogNTNweDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICA+IGRpdntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigje1wibGVmdCAwLjVzLCBvcGFjaXR5IDAuNHNcIn0pO1xyXG4gICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hZnRlcntcclxuICAgICAgICAgIGxlZnQ6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5iZWZvcmV7XHJcbiAgICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdlcy1saXN0e1xyXG4gICAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgICB1bHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICA+IGxpe1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6NzVweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2VuKCR3aGl0ZSw1JSk7XHJcbiAgICAgICAgICAuc2VuZGVyLWltYWdle1xyXG4gICAgICAgICAgICB3aWR0aDo3NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NzVweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6OHB4O1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZXMtZGV0YWlse1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDo3NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjVweCAxNXB4IDVweCA1cHg7XHJcbiAgICAgICAgICAgIC5tZXMtY29sMXtcclxuICAgICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gICAgICAgICAgICAgIC5zZW5kZXItbmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206M3B4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubWVzLXByZXZpZXd7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeVRleHRDb2xvcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1lcy1jb2wye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAuc2VuZC10aW1le1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5tZXMtc2Vlbi1zdGF0dXN7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc3VjY2VzcztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OjVweDtcclxuICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm1lcy1jb3VudHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICAgICAgICAgICAgICBjbGVhcjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWxwaGFiZXR7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHRvcDoxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICA+IGRpdntcclxuICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGFya1ByaW1hcnlDb2xvcjtcclxuICAgICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlcntcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtbGlzdHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB1bHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgID4gdWx7XHJcbiAgICAgICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgICAgID4gbGl7XHJcbiAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHdoaXRlLDIuNSUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeVRleHRDb2xvcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA5cHggN3B4IC04cHggZGFya2VuKCR3aGl0ZSwxNSUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtlbigkd2hpdGUsNCUpO1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9maWxlLXNldHRpbmd7XHJcbiAgICAgIC5pbmZvcm1hdGlvbntcclxuICAgICAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICAgICAgLnByaXZhdGUsLnB1YmxpY3tcclxuICAgICAgICAgID4gcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgcGFkZGluZzo1cHggMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR3aGl0ZSw1JSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZpdHl7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNDBweCA1cHggNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgaXtcclxuICAgICAgICBmb250LXNpemU6NjBweDtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnlDb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udmlldy1tZXNzYWdle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6MDtcclxuICBib3R0b206MDtcclxuICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHdoaXRlLDUlKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIEBpbmNsdWRlIHNoYWRvdygwIDAgMTVweCBkYXJrZW4oJHdoaXRlLDQwJSkpO1xyXG4gIHJpZ2h0OiAtMTEwJTtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKHJpZ2h0IDAuNXMpO1xyXG4gICYuYWN0aXZle1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5zdGF0dXMtYmFye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICBAaW5jbHVkZSBzaGFkb3coMCAwIDE1cHggZGFya2VuKCR3aGl0ZSwyMCUpKTtcclxuICAgIC5iYWNrLWFycm93e1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgY29sb3I6ICRkYXJrUHJpbWFyeUNvbG9yO1xyXG4gICAgICBwYWRkaW5nOjdweDtcclxuICAgICAgaXtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZW5kZXItbmFtZXtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMTVweCA1MHB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1lc3NhZ2VzLWFyZWF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgYm90dG9tOjYzcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdWx7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgICAgbGl7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6MDtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjRzKTtcclxuICAgICAgICA+IGRpdntcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzcHggMjBweCAxMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zZW50e1xyXG4gICAgICAgICAgPiBkaXZ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRkYXJrUHJpbWFyeUNvbG9yO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNoYWRvdygwIDAgMTBweCAkZGFya1ByaW1hcnlDb2xvcik7XHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IC02cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICRkYXJrUHJpbWFyeUNvbG9yO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE2MGRlZyk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRkYXJrUHJpbWFyeUNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucmVjaXZle1xyXG4gICAgICAgICAgPiBkaXZ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnlUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCBkYXJrZW4oJHdoaXRlLDEwJSk7XHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTZweDtcclxuICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODVkZWcpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5nb3Rve1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgYm90dG9tOi01MDBweDtcclxuICAgICAgICAgIGxlZnQ6LTUwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRleHQtbWVkaWEtYXJlYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIEBpbmNsdWRlIHNoYWRvdygwIC0xcHggNXB4IGRhcmtlbigkd2hpdGUsMTUlKSk7XHJcbiAgICAubWVzc2FnZS1mb3Jte1xyXG4gICAgICBoZWlnaHQ6NjJweDtcclxuICAgICAgPiBidXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAkZGFya1ByaW1hcnlDb2xvcjtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6MjBweCAwIDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXR7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZzoyMnB4IDYwcHggMjFweCAxNXB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgcGFkZGluZzo1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZGFya2VuKCR3aGl0ZSw1JSk7XHJcbiAgPiBzcGFue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZToyMXB4O1xyXG4gICAgY29sb3I6ICR0ZXh0UHJpbWFyeUNvbG9yO1xyXG4gICAgaXtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIHRvcDozcHg7XHJcbiAgICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudGl0bGUtbGV2ZTEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeVRleHRDb2xvcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXRleHRdLHRleHRhcmVhe1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeVRleHRDb2xvcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICB0ZXh0YXJlYXtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICB9XHJcbiAgJi5oLTgwe1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlc2V0e1xyXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24odHJhbnNmb3JtIDAuNHMpO1xyXG59XHJcbltkYXRhLXZpZXdwb3J0PXRydWVde1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgPiBzcGFuLnZpZXdwb3J0U2hhZG93e1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihib3gtc2hhZG93IDAuMnMpO1xyXG4gIH1cclxufVxyXG5cclxuLyogS2V5ZnJhbWVzICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xyXG4gIDAlIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSg4NXB4LCAwJSk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xyXG4gIDAlIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSg4NXB4LCAwJSk7XHJcbiAgfVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIG1vdmUtZm9yZXZlciB7XHJcbiAgMCUge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKC05MHB4LCAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKDg1cHgsIDAlKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xyXG4gIDAlIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSg4NXB4LCAwJSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcclxuICAwJSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc2xhdGUoODVweCwgMCUpO1xyXG4gIH1cclxufVxyXG4iLCIvKiAkRm9udCAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIpO1xuLyogJENvbG9yIFBhbGV0dGUgKi9cbi8qICRNaXhpbnMgKi9cbi8qIC0tJFRyYW5zbGF0ZSAqL1xuLyogLS0kQW5pbWF0aW9uICovXG4vKiAtLSRBbmltYXRpb24tRGVsYXkgKi9cbi8qIC0tJEFuaW1hdGlvbi1EZXVyYXRpb24gKi9cbi8qIC0tJFRyYW5zaXRpb24qL1xuLyogLS0kU2NhbGUgKi9cbi8qIC0tJFNoYWRvdyAqL1xuLyogTWFpbiBzdHlsZSAqL1xuLmFwcC13cmFwcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFaWkpSRUZVZU5xOFZ0RnhnekFNQlUvQUNPa0daSUtZRFpLL1hMK2FDUkltd1o2QWZ2WHlsMjRRTWdIZW9CbkJJMVRpbm51cUMya0RLYnJUY1Jlazl5VFplaVJOYnRoMis1elJRNU92eVBQb3RTTy9rRGZINDVzZndraHZBQi9JOStRWmZtNmlNSTBuZzF0eTAwZVU5b0J6cFNmeUJVQXRKYjRQRkxKR0VVeDJKZDlRckJza29JUVhldFNvYWhlQVFhcEZOeDZqY1lLb3hudk9lLzFCQUpBV3MrVktydlFiZzFZOTg1Zm5VRkpzUTdFTGRNNnh5MENlaXBtM3FHQUo4QXJuOEJmaitaY2dhZEVoNDNpRmdBTm12aHNCM3VWekR1Y3lCckM2L0JUVmYzQzdGRkJnTE9ka25CVVkxeG1qZWxMaThDeUNxbVM4aFZ3TFRLMndSQW5mR0J4MFBvRWdad3h4clZjS2dFMjBQRk5NaThYTVZmUXlld0RCTnd5Vi9MUEZCUDRCbUQ0bWNOSGNwcG84VDZjZ3VaMmVZTDNkQkhEZUpRZHRZcnNvTUhxb0lsczVnU0RrN29NZ0ttZzRMNFpHRjB4b1JvQWJiUEVhNDdGU2l3ejB2R2JCWXVHNmswU0tYUTBzODNXTDBNVUdkL2drU0lwZnpzUkJmMG9oMXhuazNzLzd3Wm5sa3puTFIvL2V2eTFEM1FYN0ZHQUFodkhpSHBoQVFWOEFBQUFBU1VWT1JLNUNZSUk9XCIpLCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcHAtd3JhcHAgLmFwcC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogTWFpbiB2aWV3ICovXG4udmlldy1tYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogcmlnaHQgMC4zcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogcmlnaHQgMC4zcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IHJpZ2h0IDAuM3MgbGluZWFyO1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGxpbmVhcjtcbn1cblxuLnZpZXctbWFpbi5kZWFjdGl2ZSB7XG4gIHJpZ2h0OiAzMCU7XG59XG5cbi52aWV3LW1haW4gLmhlYWRlci13cmFwcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XG59XG5cbi52aWV3LW1haW4gLmhlYWRlci13cmFwcCAuYXBwLWRldGFpbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCA1cHggNXB4O1xuICBjb2xvcjogIzRhMDIwMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4ICNGRkEwMDA7XG59XG5cbi52aWV3LW1haW4gLmhlYWRlci13cmFwcCAuYXBwLWRldGFpbCBpbWcge1xuICB3aWR0aDogNzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxNXB4ICNGRkEwMDA7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDE1cHggI0ZGQTAwMDtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggI0ZGQTAwMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0ZGRkZGRjtcbn1cblxuLnZpZXctbWFpbiAuaGVhZGVyLXdyYXBwIC5hcHAtZGV0YWlsIC5zdGF0dXMge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi52aWV3LW1haW4gLmhlYWRlci13cmFwcCAud2F2ZS13cmFwcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi52aWV3LW1haW4gLmhlYWRlci13cmFwcCAud2F2ZS13cmFwcCAud2F2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi52aWV3LW1haW4gLmhlYWRlci13cmFwcCAud2F2ZS13cmFwcCAud2F2ZSAucGFyYWxsYXggPiB1c2Uge1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS1mb3JldmVyIDEycyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIgMTJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIgMTJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIgMTJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLnZpZXctbWFpbiAuaGVhZGVyLXdyYXBwIC53YXZlLXdyYXBwIC53YXZlIC5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTJzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogLTJzO1xuICAtby1hbmltYXRpb24tZGVsYXk6IC0ycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTExMHB4LCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTExMHB4LCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMTBweCwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTEwcHgsIDAlKTtcbn1cblxuLnZpZXctbWFpbiAuaGVhZGVyLXdyYXBwIC53YXZlLXdyYXBwIC53YXZlIC5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTJzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogLTJzO1xuICAtby1hbmltYXRpb24tZGVsYXk6IC0ycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA3cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDdzO1xuICAtby1hbmltYXRpb24tZHVyYXRpb246IDdzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDdzO1xufVxuXG4udmlldy1tYWluIC5oZWFkZXItd3JhcHAgLndhdmUtd3JhcHAgLndhdmUgLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtNHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAtNHM7XG4gIC1vLWFuaW1hdGlvbi1kZWxheTogLTRzO1xuICBhbmltYXRpb24tZGVsYXk6IC00cztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDRzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTY1cHgsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjVweCwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjVweCwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjVweCwgMCUpO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5uYXYtZ3JvdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4ICNjY2NjY2M7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgI21hc3Rlci1uYXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAjbWFzdGVyLW5hdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwICNtYXN0ZXItbmF2IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTUlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW46IDAgMThweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAjbWFzdGVyLW5hdiB1bCBsaSBpIHtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAjbWFzdGVyLW5hdiB1bCBsaS5hY3RpdmUgaSB7XG4gIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NGIzZjQsICNjMmU1OWMpO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwICNtYXN0ZXItbmF2IHVsICNhY3RpdmUtbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMXB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjRiM2Y0LCAjYzJlNTljKTtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBsZWZ0OiAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xuICAtby10cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwICNtYXN0ZXItbmF2LWl0ZW1zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1M3B4O1xuICBib3R0b206IDA7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgI21hc3Rlci1uYXYtaXRlbXMgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC41cywgb3BhY2l0eSAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGxlZnQgMC41cywgb3BhY2l0eSAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBsZWZ0IDAuNXMsIG9wYWNpdHkgMC40cztcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzLCBvcGFjaXR5IDAuNHM7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgI21hc3Rlci1uYXYtaXRlbXMgPiBkaXYuYWN0aXZlIHtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAjbWFzdGVyLW5hdi1pdGVtcyA+IGRpdi5hZnRlciB7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgI21hc3Rlci1uYXYtaXRlbXMgPiBkaXYuYmVmb3JlIHtcbiAgbGVmdDogLTEwMCU7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLm1lc3NhZ2VzLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLm1lc3NhZ2VzLWxpc3QgdWwgPiBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5tZXNzYWdlcy1saXN0IHVsID4gbGkgLnNlbmRlci1pbWFnZSB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLm1lc3NhZ2VzLWxpc3QgdWwgPiBsaSAuc2VuZGVyLWltYWdlIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB1bCA+IGxpIC5tZXMtZGV0YWlsIHtcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCA1cHg7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLm1lc3NhZ2VzLWxpc3QgdWwgPiBsaSAubWVzLWRldGFpbCAubWVzLWNvbDEge1xuICB3aWR0aDogNjUlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5tZXNzYWdlcy1saXN0IHVsID4gbGkgLm1lcy1kZXRhaWwgLm1lcy1jb2wxIC5zZW5kZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLm1lc3NhZ2VzLWxpc3QgdWwgPiBsaSAubWVzLWRldGFpbCAubWVzLWNvbDEgLm1lcy1wcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc1NzU3NTtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB1bCA+IGxpIC5tZXMtZGV0YWlsIC5tZXMtY29sMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB1bCA+IGxpIC5tZXMtZGV0YWlsIC5tZXMtY29sMiAuc2VuZC10aW1lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5tZXNzYWdlcy1saXN0IHVsID4gbGkgLm1lcy1kZXRhaWwgLm1lcy1jb2wyIC5tZXMtc2Vlbi1zdGF0dXMge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjNENBRjUwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAubWVzc2FnZXMtbGlzdCB1bCA+IGxpIC5tZXMtZGV0YWlsIC5tZXMtY29sMiAubWVzLXNlZW4tc3RhdHVzIGkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLm1lc3NhZ2VzLWxpc3QgdWwgPiBsaSAubWVzLWRldGFpbCAubWVzLWNvbDIgLm1lcy1jb3VudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XG4gIHBhZGRpbmc6IDFweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGNsZWFyOiByaWdodDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAuYWxwaGFiZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLmFscGhhYmV0ID4gZGl2OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICNGRkEwMDA7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5hbHBoYWJldCA+IGRpdjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAuY29udGFjdC1saXN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5jb250YWN0LWxpc3QgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5jb250YWN0LWxpc3QgPiB1bCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLmNvbnRhY3QtbGlzdCA+IHVsID4gbGkgLnRpdGxlIHtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiAwIDlweCA3cHggLThweCAjZDlkOWQ5O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5jb250YWN0LWxpc3QgPiB1bCA+IGxpIHVsIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLmNvbnRhY3QtbGlzdCA+IHVsID4gbGkgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi52aWV3LW1haW4gLmNvbnRlbnQtd3JhcHAgLnByb2ZpbGUtc2V0dGluZyAuaW5mb3JtYXRpb24ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5wcm9maWxlLXNldHRpbmcgLmluZm9ybWF0aW9uIC5wcml2YXRlID4gcCwgLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAucHJvZmlsZS1zZXR0aW5nIC5pbmZvcm1hdGlvbiAucHVibGljID4gcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG4udmlldy1tYWluIC5jb250ZW50LXdyYXBwIC5hY3Rpdml0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCA1cHggNXB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLnZpZXctbWFpbiAuY29udGVudC13cmFwcCAuYWN0aXZpdHkgaSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY0YjNmNCwgI2MyZTU5Yyk7XG59XG5cbi52aWV3LW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTVweCAjOTk5OTk5O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNXB4ICM5OTk5OTk7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICM5OTk5OTk7XG4gIHJpZ2h0OiAtMTEwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiByaWdodCAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IHJpZ2h0IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IHJpZ2h0IDAuNXM7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNXM7XG59XG5cbi52aWV3LW1lc3NhZ2UuYWN0aXZlIHtcbiAgcmlnaHQ6IDA7XG59XG5cbi52aWV3LW1lc3NhZ2UgLnN0YXR1cy1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggI2NjY2NjYztcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTVweCAjY2NjY2NjO1xuICBib3gtc2hhZG93OiAwIDAgMTVweCAjY2NjY2NjO1xufVxuXG4udmlldy1tZXNzYWdlIC5zdGF0dXMtYmFyIC5iYWNrLWFycm93IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjRkZBMDAwO1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbi52aWV3LW1lc3NhZ2UgLnN0YXR1cy1iYXIgLmJhY2stYXJyb3cgaSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnZpZXctbWVzc2FnZSAuc3RhdHVzLWJhciAuc2VuZGVyLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDUwcHggMCAwO1xufVxuXG4udmlldy1tZXNzYWdlIC5tZXNzYWdlcy1hcmVhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1MHB4O1xuICBib3R0b206IDYzcHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi52aWV3LW1lc3NhZ2UgLm1lc3NhZ2VzLWFyZWEgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udmlldy1tZXNzYWdlIC5tZXNzYWdlcy1hcmVhIHVsIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogYXV0bztcbiAgY2xlYXI6IGJvdGg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAxO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLnZpZXctbWVzc2FnZSAubWVzc2FnZXMtYXJlYSB1bCBsaSA+IGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogM3B4IDIwcHggMTBweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnZpZXctbWVzc2FnZSAubWVzc2FnZXMtYXJlYSB1bCBsaSA+IGRpdiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnZpZXctbWVzc2FnZSAubWVzc2FnZXMtYXJlYSB1bCBsaSA+IGRpdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbi52aWV3LW1lc3NhZ2UgLm1lc3NhZ2VzLWFyZWEgdWwgbGkuc2VudCA+IGRpdiB7XG4gIGJhY2tncm91bmQ6ICNGRkEwMDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmbG9hdDogcmlnaHQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggI0ZGQTAwMDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTBweCAjRkZBMDAwO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjRkZBMDAwO1xufVxuXG4udmlldy1tZXNzYWdlIC5tZXNzYWdlcy1hcmVhIHVsIGxpLnNlbnQgPiBkaXY6YWZ0ZXIge1xuICByaWdodDogLTZweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjRkZBMDAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjBkZWcpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZGQTAwMDtcbn1cblxuLnZpZXctbWVzc2FnZSAubWVzc2FnZXMtYXJlYSB1bCBsaS5yZWNpdmUgPiBkaXYge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBjb2xvcjogIzc1NzU3NTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNlNmU1ZTU7XG59XG5cbi52aWV3LW1lc3NhZ2UgLm1lc3NhZ2VzLWFyZWEgdWwgbGkucmVjaXZlID4gZGl2OmFmdGVyIHtcbiAgbGVmdDogLTZweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI0ZGRkZGRjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTg1ZGVnKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGRkZGRkY7XG59XG5cbi52aWV3LW1lc3NhZ2UgLm1lc3NhZ2VzLWFyZWEgdWwgbGkuZ290byB7XG4gIHdpZHRoOiAwO1xuICBvcGFjaXR5OiAwO1xuICBib3R0b206IC01MDBweDtcbiAgbGVmdDogLTUwJTtcbn1cblxuLnZpZXctbWVzc2FnZSAudGV4dC1tZWRpYS1hcmVhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIC0xcHggNXB4ICNkOWQ5ZDk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAtMXB4IDVweCAjZDlkOWQ5O1xuICBib3gtc2hhZG93OiAwIC0xcHggNXB4ICNkOWQ5ZDk7XG59XG5cbi52aWV3LW1lc3NhZ2UgLnRleHQtbWVkaWEtYXJlYSAubWVzc2FnZS1mb3JtIHtcbiAgaGVpZ2h0OiA2MnB4O1xufVxuXG4udmlldy1tZXNzYWdlIC50ZXh0LW1lZGlhLWFyZWEgLm1lc3NhZ2UtZm9ybSA+IGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI0ZGQTAwMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAyMHB4IDAgMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xufVxuXG4udmlldy1tZXNzYWdlIC50ZXh0LW1lZGlhLWFyZWEgLm1lc3NhZ2UtZm9ybSBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAyMnB4IDYwcHggMjFweCAxNXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbn1cblxuLmZvcm0tZ3JvdXAgPiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuXG4uZm9ybS1ncm91cCA+IHNwYW4gaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmZvcm0tZ3JvdXAgLnRpdGxlLWxldmUxIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiA0MHB4O1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dFt0eXBlPXRleHRdLCAuZm9ybS1ncm91cCB0ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogNDBweDtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uZm9ybS1ncm91cC5oLTgwIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ucmVzZXQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XG59XG5cbltkYXRhLXZpZXdwb3J0PXRydWVdIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuW2RhdGEtdmlld3BvcnQ9dHJ1ZV0gPiBzcGFuLnZpZXdwb3J0U2hhZG93IHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xufVxuXG4vKiBLZXlmcmFtZXMgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gIH1cbn1cblxuQC1tcy1rZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gIH1cbn1cblxuQC1vLWtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmUtZm9yZXZlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTBweCwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC05MHB4LCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwcHgsIDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDg1cHgsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NXB4LCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODVweCwgMCUpO1xuICB9XG59XG4iXX0= */";
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


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap\");\n@charset \"UTF-8\";\n::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-bg);\n  border-radius: 10px;\n}\n* {\n  box-sizing: border-box;\n}\nhtml, body {\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n}\nbody {\n  font-family: 'DM Sans', sans-serif;\n  overflow: hidden;\n}\nbutton, a {\n  cursor: pointer;\n}\n.app-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: var(--app-container);\n  transition: .2s;\n}\n.app-content {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  padding: 16px 24px 24px 0;\n}\n.app-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 16px 24px;\n  position: relative;\n}\n.app-header-left, .app-header-right {\n  display: flex;\n  align-items: center;\n}\n.app-header-left {\n  flex-grow: 1;\n}\n.app-header-right button {\n  margin-left: 10px;\n}\n.app-icon {\n  width: 26px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: var(--main-color);\n  position: relative;\n}\n.app-icon:before, .app-icon:after {\n  content: '';\n  position: absolute;\n  width: 12px;\n  height: 2px;\n  border-radius: 4px;\n  background-color: var(--main-color);\n  left: 50%;\n  transform: translatex(-50%);\n}\n.app-icon:before {\n  top: -6px;\n}\n.app-icon:after {\n  bottom: -6px;\n}\n.app-name {\n  color: var(--main-color);\n  margin: 0;\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 700;\n  margin: 0 32px;\n}\n.mode-switch {\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  color: var(--main-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.search-wrapper {\n  border-radius: 20px;\n  background-color: var(--search-area-bg);\n  padding-right: 12px;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 480px;\n  color: var(--light-font);\n  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);\n  overflow: hidden;\n}\n.dark .search-wrapper {\n  box-shadow: none;\n}\n.search-input {\n  border: none;\n  flex: 1;\n  outline: none;\n  height: 100%;\n  padding: 0 20px;\n  font-size: 16px;\n  background-color: var(--search-area-bg);\n  color: var(--main-color);\n}\n.search-input:placeholder {\n  color: var(--main-color);\n  opacity: .6;\n}\n.add-btn {\n  color: #fff;\n  background-color: var(--button-bg);\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notification-btn {\n  color: var(--main-color);\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.profile-btn {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  border-left: 2px solid #ddd;\n}\n.profile-btn img {\n  width: 32px;\n  height: 32px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-right: 4px;\n}\n.profile-btn span {\n  color: var(--main-color);\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 74px;\n}\n.page-content  {\n  flex: 1;\n  width: 100%;\n}\n.app-sidebar {\n  padding: 40px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.app-sidebar-link {\n  color: var(--main-color);\n  color: var(--link-color);\n  margin: 16px 0;\n  transition: .2s;\n  border-radius: 50%;\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.app-sidebar-link:hover {\n  background-color: var(--link-color-hover);\n  color: var(--link-color-active);\n}\n.app-sidebar-link.active {\n  background-color: var(--link-color-active-bg);\n  color: var(--link-color-active);\n}\n.projects-section {\n  flex: 2;\n  background-color: var(--projects-section);\n  border-radius: 32px;\n  padding: 32px 32px 0 32px;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.projects-section-line {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n}\n.projects-section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  color: var(--main-color);\n}\n.projects-section-header p {\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  opacity: .9;\n  margin: 0;\n  color: var(--main-color);\n}\n.projects-section-header .time {\n  font-size: 20px;\n}\n.projects-status {\n  display: flex;\n}\n.item-status {\n  display: flex;\n  flex-direction: column;\n  margin-right: 16px;\n}\n.item-status:not(:last-child) .status-type:after {\n  content: '';\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translatey(-50%);\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  border: 1px solid var(--secondary-color);\n}\n.status-number {\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  color: var(--main-color);\n}\n.status-type {\n  position: relative;\n  padding-right: 24px;\n  color: var(--secondary-color);\n}\n.view-actions {\n  display: flex;\n  align-items: center;\n}\n.view-btn {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px;\n  border-radius: 4px;\n  background-color: transparent;\n  border: none;\n  color: var(--main-color);\n  margin-left: 8px;\n  transition: .2s;\n}\n.view-btn.active {\n  background-color: var(--link-color-active-bg);\n  color: var(--link-color-active);\n}\n.view-btn:not(.active):hover {\n  background-color: var(--link-color-hover);\n  color: var(--link-color-active);\n}\n.messages-section {\n  flex-shrink: 0;\n  padding-bottom: 32px;\n  background-color: var(--projects-section);\n  margin-left: 24px;\n  flex: 1;\n  width: 100%;\n  border-radius: 30px;\n  position: relative;\n  overflow: auto;\n  transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);\n}\n.messages-section .messages-close {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 3;\n  border: none;\n  background-color: transparent;\n  color: var(--main-color);\n  display: none;\n}\n.messages-section.show {\n  transform: translateX(0);\n  opacity: 1;\n  margin-left: 0;\n}\n.messages-section .projects-section-header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  padding: 32px 24px 0 24px;\n  background-color: var(--projects-section);\n}\n.message-box {\n  border-top: 1px solid var(--message-box-border);\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n}\n.message-box:hover {\n  background-color: var(--message-box-hover);\n  border-top-color: var(--link-color-hover);\n}\n.message-box:hover + .message-box {\n  border-top-color: var(--link-color-hover);\n}\n.message-box img {\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 40px;\n  height: 40px;\n}\n.message-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.message-header .name {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  color: var(--main-color);\n  margin: 0;\n}\n.message-content {\n  padding-left: 16px;\n  width: 100%;\n}\n.star-checkbox input {\n  opacity: 0;\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.star-checkbox label {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.dark .star-checkbox {\n  color: var(--secondary-color);\n}\n.dark .star-checkbox input:checked + label {\n  color: var(--star);\n}\n.star-checkbox input:checked + label svg {\n  fill: var(--star);\n  transition: .2s;\n}\n.message-line {\n  font-size: 14px;\n  line-height: 20px;\n  margin: 8px 0;\n  color: var(--secondary-color);\n  opacity: .7;\n}\n.message-line.time {\n  text-align: right;\n  margin-bottom: 0;\n}\n.project-boxes {\n  margin: 0 -8px;\n  overflow-y: auto;\n}\n.project-boxes.jsGridView {\n  display: flex;\n  flex-wrap: wrap;\n}\n.project-boxes.jsGridView .project-box-wrapper {\n  width: 33.3%;\n}\n.project-boxes.jsListView .project-box {\n  display: flex;\n  border-radius: 10px;\n  position: relative;\n}\n.project-boxes.jsListView .project-box > * {\n  margin-right: 24px;\n}\n.project-boxes.jsListView .more-wrapper {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n.project-boxes.jsListView .project-box-content-header {\n  order: 1;\n  max-width: 120px;\n}\n.project-boxes.jsListView .project-box-header {\n  order: 2;\n}\n.project-boxes.jsListView .project-box-footer {\n  order: 3;\n  padding-top: 0;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.project-boxes.jsListView .project-box-footer:after {\n  display: none;\n}\n.project-boxes.jsListView .participants {\n  margin-bottom: 8px;\n}\n.project-boxes.jsListView .project-box-content-header p {\n  text-align: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.project-boxes.jsListView .project-box-header > span {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  font-size: 12px;\n}\n.project-boxes.jsListView .box-progress-wrapper {\n  order: 3;\n  flex: 1;\n}\n.project-box {\n  --main-color-card: #dbf6fd;\n  border-radius: 30px;\n  padding: 16px;\n  background-color: var(--main-color-card);\n}\n.project-box-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  color: var(--main-color);\n}\n.project-box-header span {\n  color: #4A4A4A;\n  opacity: .7;\n  font-size: 14px;\n  line-height: 16px;\n}\n.project-box-content-header {\n  text-align: center;\n  margin-bottom: 16px;\n}\n.project-box-content-header p {\n  margin: 0;\n}\n.project-box-wrapper {\n  padding: 8px;\n  transition: .2s;\n}\n.project-btn-more {\n  padding: 0;\n  height: 14px;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  background-color: transparent;\n  border: none;\n  flex-shrink: 0;\n  /*&:after, &:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background-color: var(--main-color);\r\n    opacity: .8;\r\n    left: 50%;\r\n    transform: translatex(-50%);\r\n  }\r\n  \r\n  &:before { top: 0;}\r\n  &:after { bottom: 0; }*/\n}\n.more-wrapper {\n  position: relative;\n}\n.box-content-header {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 700;\n  opacity: .7;\n}\n.box-content-subheader {\n  font-size: 14px;\n  line-height: 24px;\n  opacity: .7;\n}\n.box-progress {\n  display: block;\n  height: 4px;\n  border-radius: 6px;\n}\n.box-progress-bar {\n  width: 100%;\n  height: 4px;\n  border-radius: 6px;\n  overflow: hidden;\n  background-color: #fff;\n  margin: 8px 0;\n}\n.box-progress-header {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 16px;\n  margin: 0;\n}\n.box-progress-percentage {\n  text-align: right;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 16px;\n}\n.project-box-footer {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 16px;\n  position: relative;\n}\n.project-box-footer:after {\n  content: '';\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.6);\n  width: calc(100% + 32px);\n  top: 0;\n  left: -16px;\n  height: 1px;\n}\n.participants {\n  display: flex;\n  align-items: center;\n}\n.participants img {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.participants img:not(:first-child) {\n  margin-left: -8px;\n}\n.add-participant {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-left: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n.days-left {\n  background-color: rgba(255, 255, 255, 0.6);\n  font-size: 12px;\n  border-radius: 20px;\n  flex-shrink: 0;\n  padding: 6px 16px;\n  font-weight: 700;\n}\n.mode-switch.active .moon {\n  fill: var(--main-color);\n}\n.messages-btn {\n  border-radius: 4px 0 0 4px;\n  position: absolute;\n  right: 0;\n  top: 58px;\n  background-color: var(--message-btn);\n  border: none;\n  color: var(--main-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px;\n  display: none;\n}\n@media screen and (max-width: 980px) {\n  .project-boxes.jsGridView .project-box-wrapper {\n    width: 50%;\n  }\n  .status-number, .status-type {\n    font-size: 14px;\n  }\n  .status-type:after {\n    width: 4px;\n    height: 4px;\n  }\n  .item-status {\n    margin-right: 0;\n  }\n}\n@media screen and (max-width: 880px) {\n  .messages-section {\n    transform: translateX(100%);\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    z-index: 2;\n    height: 100%;\n    width: 100%;\n  }\n  .messages-section .messages-close {\n    display: block;\n  }\n  .messages-btn {\n    display: flex;\n  }\n}\n@media screen and (max-width: 720px) {\n  .app-name, .profile-btn span {\n    display: none;\n  }\n  .add-btn, .notification-btn, .mode-switch {\n    width: 20px;\n    height: 20px;\n  }\n  .add-btn svg, .notification-btn svg, .mode-switch svg {\n    width: 16px;\n    height: 16px;\n  }\n  .app-header-right button {\n    margin-left: 4px;\n  }\n}\n@media screen and (max-width: 520px) {\n  .projects-section {\n    overflow: auto;\n  }\n  .project-boxes {\n    overflow-y: visible;\n  }\n  .app-sidebar, .app-icon {\n    display: none;\n  }\n  .app-content {\n    padding: 16px 12px 24px 12px;\n  }\n  .status-number, .status-type {\n    font-size: 10px;\n  }\n  .view-btn {\n    width: 24px;\n    height: 24px;\n  }\n  .app-header {\n    padding: 16px 10px;\n  }\n  .search-input {\n    max-width: 120px;\n  }\n  .project-boxes.jsGridView .project-box-wrapper {\n    width: 100%;\n  }\n  .projects-section {\n    padding: 24px 16px 0 16px;\n  }\n  .profile-btn img {\n    width: 24px;\n    height: 24px;\n  }\n  .app-header {\n    padding: 10px;\n  }\n  .projects-section-header p,\n  .projects-section-header .time {\n    font-size: 18px;\n  }\n  .status-type {\n    padding-right: 4px;\n  }\n  .status-type:after {\n    display: none;\n  }\n  .search-input {\n    font-size: 14px;\n  }\n  .messages-btn {\n    top: 48px;\n  }\n  .box-content-header {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .box-content-subheader {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .project-boxes.jsListView .project-box-header > span {\n    font-size: 10px;\n  }\n  .box-progress-header {\n    font-size: 12px;\n  }\n  .box-progress-percentage {\n    font-size: 10px;\n  }\n  .days-left {\n    font-size: 8px;\n    padding: 6px 6px;\n    text-align: center;\n  }\n  .project-boxes.jsListView .project-box > * {\n    margin-right: 10px;\n  }\n  .project-boxes.jsListView .more-wrapper {\n    right: 2px;\n    top: 10px;\n  }\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VmaW5leC9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xcR2l0SHViXFxmb29kLW5sdS9zcmNcXGFwcFxccGFnZXNcXHdlZmluZXhcXHdlZmluZXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dlZmluZXgvd2VmaW5leC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUZBQVk7QUNBWixnQkFBZ0I7QURFaEI7RUFDQyxVQUFVO0VBQ1YsbUJBQW1CO0FDQ3BCO0FERUE7RUFDQywrQkFBK0I7RUFDL0IsbUJBQW1CO0FDQ3BCO0FEQ0E7RUFDRSxzQkFBc0I7QUNFeEI7QURFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztBQ0NYO0FERUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FDQ2xCO0FERUE7RUFDRSxlQUFlO0FDQ2pCO0FER0U7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGVBQWU7QUNBbkI7QURHRTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQ0E3QjtBREdFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUNBdEI7QURFSTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUNDekI7QURFSTtFQUFTLFlBQVk7QUNFekI7QURBSTtFQUNFLGlCQUFpQjtBQ0d2QjtBRENFO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQ0V0QjtBRFBHO0VBUUcsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULDJCQUEyQjtBQ0dqQztB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QztFREtBO0lBQWdCLGFBQWE7RUNGN0I7QUFDRjtBRElBO0VBQ0U7SUFBK0IsYUFBYTtFQ0E1QztFREVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUNBZDtFREZBO0lBS0ksV0FBVztJQUNYLFlBQVk7RUNBaEI7RURJQTtJQUNFLGdCQUFnQjtFQ0ZsQjtBQUNGO0FES0E7RUFDRTtJQUFvQixjQUFjO0VDRGxDO0VERUE7SUFBaUIsbUJBQW1CO0VDQ3BDO0VEQ0E7SUFBMEIsYUFBYTtFQ0V2QztFREFBO0lBQWUsNEJBQTRCO0VDRzNDO0VEREE7SUFDRSxlQUFlO0VDR2pCO0VEQUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQ0VkO0VEQ0E7SUFDRSxrQkFBa0I7RUNDcEI7RURFQTtJQUNFLGdCQUFnQjtFQ0FsQjtFREdBO0lBQ0UsV0FBVztFQ0RiO0VESUE7SUFDRSx5QkFBeUI7RUNGM0I7RURLQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VDSGQ7RURNQTtJQUNFLGFBQWE7RUNKZjtFRE9BOztJQUVFLGVBQWU7RUNMakI7RURRQTtJQUNFLGtCQUFrQjtFQ05wQjtFREtBO0lBSUksYUFBYTtFQ05qQjtFRFVBO0lBQ0UsZUFBZTtFQ1JqQjtFRFdBO0lBQWdCLFNBQVM7RUNSekI7RURVQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUNSbkI7RURXQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUNUbkI7RURZQTtJQUNFLGVBQWU7RUNWakI7RURhQTtJQUNFLGVBQWU7RUNYakI7RURjQTtJQUNFLGVBQWU7RUNaakI7RURlQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VDYnBCO0VEZ0JBO0lBQ0Usa0JBQWtCO0VDZHBCO0VEaUJBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUNmWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2VmaW5leC93ZWZpbmV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RE0rU2Fuczo0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuIHdpZHRoOiA2cHg7XHJcbiBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhci1iZyk7XHJcbiBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG5odG1sLCBib2R5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5idXR0b24sIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFwcCB7XHJcbiAgJi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb250YWluZXIpO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gIH1cclxuICBcclxuICAmLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggMjRweCAwO1xyXG4gIH1cclxuICBcclxuICAmLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgICAmLWxlZnQsICYtcmlnaHQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLWxlZnQgeyBmbGV4LWdyb3c6IDE7IH0gXHJcbiAgICBcclxuICAgICYtcmlnaHQgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLWljb24ge1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgICAmOmJlZm9yZSwgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6YmVmb3JlIHsgdG9wOiAtNnB4OyB9XHJcbiAgICAmOmFmdGVyIHsgYm90dG9tOiAtNnB4OyB9XHJcbiAgfVxyXG4gIFxyXG4gICYtbmFtZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDAgMzJweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RlLXN3aXRjaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC13cmFwcGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1hcmVhLWJnKTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDgwcHg7XHJcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMTM2LDE0OCwxNzEsLjIpLDAgMjRweCAyMHB4IC0yNHB4IHJnYmEoNzEsODIsMTA3LC4xKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4gIC5kYXJrICYgeyBib3gtc2hhZG93OiBub25lOyB9XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmbGV4OiAxO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWFyZWEtYmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBcclxuICAmOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIG9wYWNpdHk6IC42O1xyXG4gIH1cclxufVxyXG5cclxuLmFkZC1idG4ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tYnRuIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtYnRuIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZDtcclxuICBcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuICBcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aWR0aDogNzRweDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRlbnTCoHtcclxuICBmbGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYXBwLXNpZGViYXIge1xyXG4gIHBhZGRpbmc6IDQwcHggMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAmLWxpbmsge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItaG92ZXIpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUtYmcpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2plY3RzLXNlY3Rpb24ge1xyXG4gIGZsZXg6IDI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdHMtc2VjdGlvbik7XHJcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxuICAmLWxpbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuICB9XHJcbiAgXHJcbiAgJi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgb3BhY2l0eTogLjk7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGltZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pdGVtLXN0YXR1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICBcclxuICAmOm5vdCg6bGFzdC1jaGlsZCkgLnN0YXR1cy10eXBlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDhweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC01MCUpO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbi5zdGF0dXMtbnVtYmVyIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5zdGF0dXMtdHlwZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi52aWV3LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi52aWV3LWJ0biB7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUtYmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcclxuICB9XHJcbiAgXHJcbiAgJjpub3QoLmFjdGl2ZSk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWxpbmstY29sb3ItaG92ZXIpO1xyXG4gICAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubWVzc2FnZXMtc2VjdGlvbiB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdHMtc2VjdGlvbik7XHJcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuNTYsIDEpO1xyXG4gIFxyXG4gIC5tZXNzYWdlcy1jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gICYuc2hvdyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmc6IDMycHggMjRweCAwIDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tcHJvamVjdHMtc2VjdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVzc2FnZS1ib3gge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1tZXNzYWdlLWJveC1ib3JkZXIpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lc3NhZ2UtYm94LWhvdmVyKTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWxpbmstY29sb3ItaG92ZXIpO1xyXG4gICAgXHJcbiAgICArIC5tZXNzYWdlLWJveCB7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWxpbmstY29sb3ItaG92ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN0YXItY2hlY2tib3gge1xyXG4gIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZGFyayAmIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgY29sb3I6IHZhcigtLXN0YXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgbGFiZWwgc3ZnIHtcclxuICAgIGZpbGw6IHZhcigtLXN0YXIpO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gIH1cclxufVxyXG5cclxuLm1lc3NhZ2UtbGluZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgb3BhY2l0eTogLjc7XHJcbiAgXHJcbiAgJi50aW1lIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJveGVzIHtcclxuICBtYXJnaW46IDAgLThweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIFxyXG4gICYuanNHcmlkVmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgXHJcbiAgICAucHJvamVjdC1ib3gtd3JhcHBlciB7XHJcbiAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5qc0xpc3RWaWV3IHtcclxuICAgIC5wcm9qZWN0LWJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgPiAqIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1vcmUtd3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgIHRvcDogMTZweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QtYm94LWNvbnRlbnQtaGVhZGVyIHtcclxuICAgICAgb3JkZXI6IDE7XHJcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWJveC1oZWFkZXIge1xyXG4gICAgICBvcmRlcjogMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QtYm94LWZvb3RlciB7XHJcbiAgICAgIG9yZGVyOiAzO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1ib3gtZm9vdGVyOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhcnRpY2lwYW50cyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QtYm94LWNvbnRlbnQtaGVhZGVyIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QtYm94LWhlYWRlciA+IHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMTZweDtcclxuICAgICAgbGVmdDogMTZweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm94LXByb2dyZXNzLXdyYXBwZXIge1xyXG4gICAgICBvcmRlcjogMztcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJveCB7XHJcbiAgLS1tYWluLWNvbG9yLWNhcmQ6ICNkYmY2ZmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItY2FyZCk7XHJcbiAgXHJcbiAgJi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgXHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICM0QTRBNEE7XHJcbiAgICAgIG9wYWNpdHk6IC43O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLWNvbnRlbnQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBcclxuICAgIHAgeyBtYXJnaW46IDA7IH1cclxuICB9XHJcbiAgXHJcbiAgJi13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJ0bi1tb3JlIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBcclxuICAvKiY6YWZ0ZXIsICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgJjpiZWZvcmUgeyB0b3A6IDA7fVxyXG4gICY6YWZ0ZXIgeyBib3R0b206IDA7IH0qL1xyXG59XHJcblxyXG4ubW9yZS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ib3gtY29udGVudC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG9wYWNpdHk6IC43O1xyXG59XHJcblxyXG4uYm94LWNvbnRlbnQtc3ViaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgb3BhY2l0eTogLjc7XHJcbn1cclxuXHJcbi5ib3gtcHJvZ3Jlc3Mge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBcclxuICAmLWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuICBcclxuICAmLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICYtd3JhcHBlciB7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgJi1wZXJjZW50YWdlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByb2plY3QtYm94LWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTE2cHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICB9XHJcbn1cclxuXHJcbi5wYXJ0aWNpcGFudHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBcclxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLThweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hZGQtcGFydGljaXBhbnQge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZGF5cy1sZWZ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm1vZGUtc3dpdGNoLmFjdGl2ZSAubW9vbiB7XHJcbiAgZmlsbDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5tZXNzYWdlcy1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDU4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVzc2FnZS1idG4pO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC5wcm9qZWN0LWJveGVzLmpzR3JpZFZpZXcgLnByb2plY3QtYm94LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cy1udW1iZXIsIC5zdGF0dXMtdHlwZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMtdHlwZTphZnRlciB7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLXN0YXR1cyB7IG1hcmdpbi1yaWdodDogMDsgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xyXG4gIC5tZXNzYWdlcy1zZWN0aW9uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIC5tZXNzYWdlcy1jbG9zZSB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXNzYWdlcy1idG4geyBkaXNwbGF5OiBmbGV4OyB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLmFwcC1uYW1lLCAucHJvZmlsZS1idG4gc3BhbiB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICBcclxuICAuYWRkLWJ0biwgLm5vdGlmaWNhdGlvbi1idG4sIC5tb2RlLXN3aXRjaCB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIFxyXG4gICAgc3ZnIHtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmFwcC1oZWFkZXItcmlnaHQgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5wcm9qZWN0cy1zZWN0aW9uIHsgb3ZlcmZsb3c6IGF1dG87IH1cclxuICAucHJvamVjdC1ib3hlcyB7IG92ZXJmbG93LXk6IHZpc2libGU7IH1cclxuICBcclxuICAuYXBwLXNpZGViYXIsIC5hcHAtaWNvbiB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICBcclxuICAuYXBwLWNvbnRlbnQgeyBwYWRkaW5nOiAxNnB4IDEycHggMjRweCAxMnB4O31cclxuICBcclxuICAuc3RhdHVzLW51bWJlciwgLnN0YXR1cy10eXBlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnZpZXctYnRuIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAuYXBwLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3QtYm94ZXMuanNHcmlkVmlldyAucHJvamVjdC1ib3gtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3RzLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMjRweCAxNnB4IDAgMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtYnRuIGltZyB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3RzLXNlY3Rpb24taGVhZGVyIHAsXHJcbiAgLnByb2plY3RzLXNlY3Rpb24taGVhZGVyIC50aW1le1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzLXR5cGUge1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXNzYWdlcy1idG4geyB0b3A6IDQ4cHg7IH1cclxuXHJcbiAgLmJveC1jb250ZW50LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcblxyXG4gIC5ib3gtY29udGVudC1zdWJoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveC1oZWFkZXIgPiBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcblxyXG4gIC5ib3gtcHJvZ3Jlc3MtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5ib3gtcHJvZ3Jlc3MtcGVyY2VudGFnZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZGF5cy1sZWZ0IHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94ID4gKiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5tb3JlLXdyYXBwZXIge1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1ETStTYW5zOjQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsYmFyLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYnV0dG9uLCBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXBwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb250YWluZXIpO1xuICB0cmFuc2l0aW9uOiAuMnM7XG59XG5cbi5hcHAtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTZweCAyNHB4IDI0cHggMDtcbn1cblxuLmFwcC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFwcC1oZWFkZXItbGVmdCwgLmFwcC1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXBwLWhlYWRlci1sZWZ0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uYXBwLWhlYWRlci1yaWdodCBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmFwcC1pY29uIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcHAtaWNvbjpiZWZvcmUsIC5hcHAtaWNvbjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XG59XG5cbi5hcHAtaWNvbjpiZWZvcmUge1xuICB0b3A6IC02cHg7XG59XG5cbi5hcHAtaWNvbjphZnRlciB7XG4gIGJvdHRvbTogLTZweDtcbn1cblxuLmFwcC1uYW1lIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMCAzMnB4O1xufVxuXG4ubW9kZS1zd2l0Y2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYXJlYS1iZyk7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQpO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDEzNiwgMTQ4LCAxNzEsIDAuMiksIDAgMjRweCAyMHB4IC0yNHB4IHJnYmEoNzEsIDgyLCAxMDcsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kYXJrIC5zZWFyY2gtd3JhcHBlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGZsZXg6IDE7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1hcmVhLWJnKTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4uc2VhcmNoLWlucHV0OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBvcGFjaXR5OiAuNjtcbn1cblxuLmFkZC1idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubm90aWZpY2F0aW9uLWJ0biB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtYnRuIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZGQ7XG59XG5cbi5wcm9maWxlLWJ0biBpbWcge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLnByb2ZpbGUtYnRuIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogNzRweDtcbn1cblxuLnBhZ2UtY29udGVudMKgIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcHAtc2lkZWJhciB7XG4gIHBhZGRpbmc6IDQwcHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwcC1zaWRlYmFyLWxpbmsge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIHRyYW5zaXRpb246IC4ycztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHAtc2lkZWJhci1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluay1jb2xvci1ob3Zlcik7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWFjdGl2ZSk7XG59XG5cbi5hcHAtc2lkZWJhci1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlLWJnKTtcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcbn1cblxuLnByb2plY3RzLXNlY3Rpb24ge1xuICBmbGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0cy1zZWN0aW9uKTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdHMtc2VjdGlvbi1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cblxuLnByb2plY3RzLXNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3BhY2l0eTogLjk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4ucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIgLnRpbWUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wcm9qZWN0cy1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaXRlbS1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLXN0YXR1czpub3QoOmxhc3QtY2hpbGQpIC5zdGF0dXMtdHlwZTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTUwJSk7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5zdGF0dXMtbnVtYmVyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4uc3RhdHVzLXR5cGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4udmlldy1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZpZXctYnRuIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxuLnZpZXctYnRuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlLWJnKTtcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3ItYWN0aXZlKTtcbn1cblxuLnZpZXctYnRuOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3ItaG92ZXIpO1xuICBjb2xvcjogdmFyKC0tbGluay1jb2xvci1hY3RpdmUpO1xufVxuXG4ubWVzc2FnZXMtc2VjdGlvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdHMtc2VjdGlvbik7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjU2LCAxKTtcbn1cblxuLm1lc3NhZ2VzLXNlY3Rpb24gLm1lc3NhZ2VzLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xuICB6LWluZGV4OiAzO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZXNzYWdlcy1zZWN0aW9uLnNob3cge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ubWVzc2FnZXMtc2VjdGlvbiAucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDMycHggMjRweCAwIDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RzLXNlY3Rpb24pO1xufVxuXG4ubWVzc2FnZS1ib3gge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbWVzc2FnZS1ib3gtYm9yZGVyKTtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVzc2FnZS1ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZXNzYWdlLWJveC1ob3Zlcik7XG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWxpbmstY29sb3ItaG92ZXIpO1xufVxuXG4ubWVzc2FnZS1ib3g6aG92ZXIgKyAubWVzc2FnZS1ib3gge1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1saW5rLWNvbG9yLWhvdmVyKTtcbn1cblxuLm1lc3NhZ2UtYm94IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5tZXNzYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZXNzYWdlLWhlYWRlciAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWVzc2FnZS1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN0YXItY2hlY2tib3ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5zdGFyLWNoZWNrYm94IGxhYmVsIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhcmsgLnN0YXItY2hlY2tib3gge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmRhcmsgLnN0YXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXN0YXIpO1xufVxuXG4uc3Rhci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgbGFiZWwgc3ZnIHtcbiAgZmlsbDogdmFyKC0tc3Rhcik7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxuLm1lc3NhZ2UtbGluZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBvcGFjaXR5OiAuNztcbn1cblxuLm1lc3NhZ2UtbGluZS50aW1lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5wcm9qZWN0LWJveGVzIHtcbiAgbWFyZ2luOiAwIC04cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzR3JpZFZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzR3JpZFZpZXcgLnByb2plY3QtYm94LXdyYXBwZXIge1xuICB3aWR0aDogMzMuMyU7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveCA+ICoge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLm1vcmUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRvcDogMTZweDtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtY29udGVudC1oZWFkZXIge1xuICBvcmRlcjogMTtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtaGVhZGVyIHtcbiAgb3JkZXI6IDI7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWZvb3RlciB7XG4gIG9yZGVyOiAzO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wcm9qZWN0LWJveC1mb290ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvamVjdC1ib3hlcy5qc0xpc3RWaWV3IC5wYXJ0aWNpcGFudHMge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWNvbnRlbnQtaGVhZGVyIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnByb2plY3QtYm94ZXMuanNMaXN0VmlldyAucHJvamVjdC1ib3gtaGVhZGVyID4gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNnB4O1xuICBsZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLmJveC1wcm9ncmVzcy13cmFwcGVyIHtcbiAgb3JkZXI6IDM7XG4gIGZsZXg6IDE7XG59XG5cbi5wcm9qZWN0LWJveCB7XG4gIC0tbWFpbi1jb2xvci1jYXJkOiAjZGJmNmZkO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWNhcmQpO1xufVxuXG4ucHJvamVjdC1ib3gtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWJveC1oZWFkZXIgc3BhbiB7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBvcGFjaXR5OiAuNztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cblxuLnByb2plY3QtYm94LWNvbnRlbnQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ucHJvamVjdC1ib3gtY29udGVudC1oZWFkZXIgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2plY3QtYm94LXdyYXBwZXIge1xuICBwYWRkaW5nOiA4cHg7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxuLnByb2plY3QtYnRuLW1vcmUge1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIC8qJjphZnRlciwgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xyXG4gIH1cclxuICBcclxuICAmOmJlZm9yZSB7IHRvcDogMDt9XHJcbiAgJjphZnRlciB7IGJvdHRvbTogMDsgfSovXG59XG5cbi5tb3JlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3gtY29udGVudC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvcGFjaXR5OiAuNztcbn1cblxuLmJveC1jb250ZW50LXN1YmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG9wYWNpdHk6IC43O1xufVxuXG4uYm94LXByb2dyZXNzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5ib3gtcHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5ib3gtcHJvZ3Jlc3MtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYm94LXByb2dyZXNzLXBlcmNlbnRhZ2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ucHJvamVjdC1ib3gtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvamVjdC1ib3gtZm9vdGVyOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gIHRvcDogMDtcbiAgbGVmdDogLTE2cHg7XG4gIGhlaWdodDogMXB4O1xufVxuXG4ucGFydGljaXBhbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhcnRpY2lwYW50cyBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucGFydGljaXBhbnRzIGltZzpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xufVxuXG4uYWRkLXBhcnRpY2lwYW50IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kYXlzLWxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubW9kZS1zd2l0Y2guYWN0aXZlIC5tb29uIHtcbiAgZmlsbDogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5tZXNzYWdlcy1idG4ge1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZXNzYWdlLWJ0bik7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuICAucHJvamVjdC1ib3hlcy5qc0dyaWRWaWV3IC5wcm9qZWN0LWJveC13cmFwcGVyIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5zdGF0dXMtbnVtYmVyLCAuc3RhdHVzLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuc3RhdHVzLXR5cGU6YWZ0ZXIge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cbiAgLml0ZW0tc3RhdHVzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgLm1lc3NhZ2VzLXNlY3Rpb24ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1lc3NhZ2VzLXNlY3Rpb24gLm1lc3NhZ2VzLWNsb3NlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWVzc2FnZXMtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5hcHAtbmFtZSwgLnByb2ZpbGUtYnRuIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFkZC1idG4sIC5ub3RpZmljYXRpb24tYnRuLCAubW9kZS1zd2l0Y2gge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuICAuYWRkLWJ0biBzdmcsIC5ub3RpZmljYXRpb24tYnRuIHN2ZywgLm1vZGUtc3dpdGNoIHN2ZyB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG4gIC5hcHAtaGVhZGVyLXJpZ2h0IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xuICAucHJvamVjdHMtc2VjdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgLnByb2plY3QtYm94ZXMge1xuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gIH1cbiAgLmFwcC1zaWRlYmFyLCAuYXBwLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFwcC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNnB4IDEycHggMjRweCAxMnB4O1xuICB9XG4gIC5zdGF0dXMtbnVtYmVyLCAuc3RhdHVzLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAudmlldy1idG4ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuICAuYXBwLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTZweCAxMHB4O1xuICB9XG4gIC5zZWFyY2gtaW5wdXQge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gIH1cbiAgLnByb2plY3QtYm94ZXMuanNHcmlkVmlldyAucHJvamVjdC1ib3gtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb2plY3RzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDI0cHggMTZweCAwIDE2cHg7XG4gIH1cbiAgLnByb2ZpbGUtYnRuIGltZyB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIC5hcHAtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlciBwLFxuICAucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIgLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuc3RhdHVzLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgfVxuICAuc3RhdHVzLXR5cGU6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5tZXNzYWdlcy1idG4ge1xuICAgIHRvcDogNDhweDtcbiAgfVxuICAuYm94LWNvbnRlbnQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbiAgLmJveC1jb250ZW50LXN1YmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG4gIC5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94LWhlYWRlciA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuYm94LXByb2dyZXNzLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5ib3gtcHJvZ3Jlc3MtcGVyY2VudGFnZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5kYXlzLWxlZnQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHBhZGRpbmc6IDZweCA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLnByb2plY3QtYm94ID4gKiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5wcm9qZWN0LWJveGVzLmpzTGlzdFZpZXcgLm1vcmUtd3JhcHBlciB7XG4gICAgcmlnaHQ6IDJweDtcbiAgICB0b3A6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */";
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

    var WefinexComponent = /*#__PURE__*/function () {
      function WefinexComponent(document) {
        _classCallCheck(this, WefinexComponent);

        this.document = document;
      }

      _createClass(WefinexComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          var modeSwitch = this.document.querySelector('.mode-switch');
          modeSwitch.addEventListener('click', function () {
            _this4.document.documentElement.classList.toggle('dark');

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
            _this4.document.querySelector('.messages-section').classList.add('show');
          });
          this.document.querySelector('.messages-close').addEventListener('click', function () {
            _this4.document.querySelector('.messages-section').classList.remove('show');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
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
      production: false
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
    /*! C:\Users\Administrator\Documents\GitHub\food-nlu\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map