(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~details-details-module~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\r\n  <strong>{{ name }}</strong>\r\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/banner/banner.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/banner/banner.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Data to display after skeleton screen -->\r\n<div *ngIf=\"data\">\r\n  <div class=\"ion-padding\">\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        Data\r\n      </ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let i of [0,1,2,7,8,9]\" >\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"assets/images/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          {{ data.heading }}\r\n        </h3>\r\n        <p>\r\n          {{ data.para1 }}\r\n        </p>\r\n        <p>\r\n          {{ data.para2 }}\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</div>\r\n\r\n<!-- Skeleton screen -->\r\n<div *ngIf=\"!data\">\r\n  <div class=\"ion-padding custom-skeleton\">\r\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</div>\r\n\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Datetime</ion-label>\r\n  <ion-datetime></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Select</ion-label>\r\n  <ion-select>\r\n    <ion-select-option value=\"\">No Game Console</ion-select-option>\r\n    <ion-select-option value=\"nes\">NES</ion-select-option>\r\n    <ion-select-option value=\"n64\" selected>Nintendo64</ion-select-option>\r\n    <ion-select-option value=\"ps\">PlayStation</ion-select-option>\r\n    <ion-select-option value=\"genesis\">Sega Genesis</ion-select-option>\r\n    <ion-select-option value=\"saturn\">Sega Saturn</ion-select-option>\r\n    <ion-select-option value=\"snes\">SNES</ion-select-option>\r\n  </ion-select>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Toggle</ion-label>\r\n  <ion-toggle slot=\"end\"></ion-toggle>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Floating Input</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Input (placeholder)</ion-label>\r\n  <ion-input placeholder=\"Placeholder\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Checkbox</ion-label>\r\n  <ion-checkbox slot=\"start\"></ion-checkbox>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Range</ion-label>\r\n  <ion-range></ion-range>\r\n</ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Icon End\r\n  </ion-label>\r\n  <ion-icon name=\"information-circle\" slot=\"end\"></ion-icon>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Large Icon End\r\n  </ion-label>\r\n  <ion-icon name=\"information-circle\" size=\"large\" slot=\"end\"></ion-icon>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Small Icon End\r\n  </ion-label>\r\n  <ion-icon name=\"information-circle\" size=\"small\" slot=\"end\"></ion-icon>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-icon name=\"star\" slot=\"start\"></ion-icon>\r\n  <ion-label>\r\n    Icon Start\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Two Icons End\r\n  </ion-label>\r\n  <ion-icon name=\"checkmark-circle\" slot=\"end\"></ion-icon>\r\n  <ion-icon name=\"shuffle\" slot=\"end\"></ion-icon>\r\n</ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ion-item>\r\n  <ion-button slot=\"start\">\r\n    Start\r\n  </ion-button>\r\n  <ion-label>Button Start/End</ion-label>\r\n  <ion-button slot=\"end\">\r\n    End\r\n  </ion-button>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-button slot=\"start\">\r\n    Start Icon\r\n    <ion-icon name=\"home\" slot=\"end\"></ion-icon>\r\n  </ion-button>\r\n  <ion-label>Buttons with Icons</ion-label>\r\n  <ion-button slot=\"end\">\r\n    <ion-icon name=\"star\" slot=\"end\"></ion-icon>\r\n    End Icon\r\n  </ion-button>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-button slot=\"start\">\r\n    <ion-icon slot=\"icon-only\" name=\"navigate\"></ion-icon>\r\n  </ion-button>\r\n  <ion-label>Icon only Buttons</ion-label>\r\n  <ion-button slot=\"end\">\r\n    <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\r\n  </ion-button>\r\n</ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ion-item button >\r\n  <ion-avatar slot=\"start\">\r\n    <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\r\n  </ion-avatar>\r\n  <ion-label>\r\n    Avatar Start, Button Item\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item href=\"#\">\r\n  <ion-label>\r\n    Thumbnail End, Anchor Item\r\n  </ion-label>\r\n  <ion-thumbnail slot=\"end\">\r\n    <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\r\n  </ion-thumbnail>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n    <h2>H2 Title Text</h2>\r\n    <p>Button on right</p>\r\n  </ion-label>\r\n  <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\r\n</ion-item>\r\n\r\n<ion-item button >\r\n  <ion-thumbnail slot=\"start\">\r\n    <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n    <h3>H3 Title Text</h3>\r\n    <p>Icon on right</p>\r\n  </ion-label>\r\n  <ion-icon name=\"close-circle\" slot=\"end\"></ion-icon>\r\n</ion-item>\r\n\r\n\r\n\r\n<!-- Item Inset Lines -->\r\n<ion-item lines=\"inset\">\r\n  <ion-label>Item Lines Inset</ion-label>\r\n</ion-item>\r\n\r\n<!-- Item Full Lines -->\r\n<ion-item lines=\"full\">\r\n  <ion-label>Item Lines Full</ion-label>\r\n</ion-item>\r\n\r\n<!-- Item None Lines -->\r\n<ion-item lines=\"none\">\r\n  <ion-label>Item Lines None</ion-label>\r\n</ion-item>\r\n\r\n<!-- List Full Lines -->\r\n<ion-list lines=\"full\">\r\n  <ion-item>\r\n    <ion-label>Full Lines Item 1</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Full Lines Item 2</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List Inset Lines -->\r\n<ion-list lines=\"inset\">\r\n  <ion-item>\r\n    <ion-label>Inset Lines Item 1</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Inset Lines Item 2</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List No Lines -->\r\n<ion-list lines=\"none\">\r\n  <ion-item>\r\n    <ion-label>No lines Item 1</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>No lines Item 2</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>No lines Item 3</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n\r\n\r\n\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>\r\n      Item\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-label>\r\n      No Lines Item\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label class=\"ion-text-wrap\">\r\n      Multiline text that should wrap when it is too long\r\n      to fit on one line in the item.\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label class=\"ion-text-wrap\">\r\n      <ion-text color=\"primary\">\r\n        <h3>H3 Primary Title</h3>\r\n      </ion-text>\r\n      <p>Paragraph line 1</p>\r\n      <ion-text color=\"secondary\">\r\n        <p>Paragraph line 2 secondary</p>\r\n      </ion-text>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label>\r\n      Item with Full Lines\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n</ion-list>\r\n\r\n\r\n\r\n<ion-item detail>\r\n  <ion-label>\r\n    Standard Item with Detail Arrow\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item button  detail>\r\n  <ion-label>\r\n    Button Item with Detail Arrow\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item detail=\"false\" href=\"https://www.ionicframework.com\">\r\n  <ion-label>\r\n    Anchor Item with no Detail Arrow\r\n  </ion-label>\r\n</ion-item>\r\n\r\n\r\n\r\n\r\n\r\n<ion-item-divider>\r\n  <ion-label>\r\n    Basic Item Divider\r\n  </ion-label>\r\n</ion-item-divider>\r\n\r\n<ion-item-divider color=\"secondary\">\r\n  <ion-label>\r\n    Secondary Item Divider\r\n  </ion-label>\r\n</ion-item-divider>\r\n\r\n<!-- Item Dividers in a List -->\r\n<ion-list>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Section A\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item><ion-label>A1</ion-label></ion-item>\r\n  <ion-item><ion-label>A2</ion-label></ion-item>\r\n  <ion-item><ion-label>A3</ion-label></ion-item>\r\n  <ion-item><ion-label>A4</ion-label></ion-item>\r\n  <ion-item><ion-label>A5</ion-label></ion-item>\r\n\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Section B\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item><ion-label>B1</ion-label></ion-item>\r\n  <ion-item><ion-label>B2</ion-label></ion-item>\r\n  <ion-item><ion-label>B3</ion-label></ion-item>\r\n  <ion-item><ion-label>B4</ion-label></ion-item>\r\n  <ion-item><ion-label>B5</ion-label></ion-item>\r\n</ion-list>\r\n\r\n\r\n\r\n\r\n\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>A</ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label>Angola</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Argentina</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Armenia</ion-label>\r\n  </ion-item>\r\n</ion-item-group>\r\n\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>B</ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label>Bangladesh</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Belarus</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Belgium</ion-label>\r\n  </ion-item>\r\n</ion-item-group>\r\n\r\n\r\n<!-- They can also be used to group sliding items -->\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Fruits\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Grapes</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Apples</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-item-group>\r\n\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Vegetables\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Carrots</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Celery</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-item-group>\r\n\r\n\r\n\r\n\r\n\r\n<ion-list>\r\n  <!-- Sliding item with text options on both sides -->\r\n  <ion-item-sliding>\r\n    <ion-item-options side=\"start\">\r\n      <ion-item-option >Favorite</ion-item-option>\r\n      <ion-item-option color=\"danger\" >Share</ion-item-option>\r\n    </ion-item-options>\r\n\r\n    <ion-item>\r\n      <ion-label>Item Options</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option >Unread</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with expandable options on both sides -->\r\n  <ion-item-sliding>\r\n    <ion-item-options side=\"start\">\r\n      <ion-item-option color=\"danger\" expandable>\r\n        Delete\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n\r\n    <ion-item>\r\n      <ion-label>Expandable Options</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"tertiary\" expandable>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Multi-line sliding item with icon options on both sides -->\r\n  <ion-item-sliding id=\"item100\">\r\n    <ion-item href=\"#\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"https://images.foody.vn/res/g23/229759/s180x180/foody-hallyu-korean-fast-food-duong-3-thang-2-874-635989864458969585.jpg\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>HubStruck Notifications</h2>\r\n        <p>A new message in your network</p>\r\n        <p>Oceanic Next has joined your network</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">\r\n        10:45 AM\r\n      </ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item-options side=\"start\">\r\n      <ion-item-option>\r\n        <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"danger\">\r\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n      </ion-item-option>\r\n      <ion-item-option>\r\n        <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon start options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons Start\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color=\"primary\">\r\n        <ion-icon slot=\"start\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color=\"secondary\">\r\n        <ion-icon slot=\"start\" name=\"archive\"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon end options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons End\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color=\"primary\">\r\n        <ion-icon slot=\"end\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color=\"secondary\">\r\n        <ion-icon slot=\"end\" name=\"archive\"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon top options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons Top\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color=\"primary\">\r\n        <ion-icon slot=\"top\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color=\"secondary\">\r\n        <ion-icon slot=\"top\" name=\"archive\"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon bottom options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons Bottom\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color=\"primary\">\r\n        <ion-icon slot=\"bottom\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color=\"secondary\">\r\n        <ion-icon slot=\"bottom\" name=\"archive\"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-list>\r\n\r\n\r\n\r\n\r\n\r\n<!-- Default Label -->\r\n<ion-label>Label</ion-label>\r\n\r\n<!-- Label Colors -->\r\n<ion-label color=\"primary\">Primary Label</ion-label>\r\n<ion-label color=\"secondary\">Secondary Label</ion-label>\r\n<ion-label color=\"danger\">Danger Label</ion-label>\r\n<ion-label color=\"light\">Light Label</ion-label>\r\n<ion-label color=\"dark\">Dark Label</ion-label>\r\n\r\n<!-- Item Labels -->\r\n<ion-item>\r\n  <ion-label>Default Item</ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label class=\"ion-text-wrap\">\r\n    Multi-line text that should wrap when it is too long\r\n    to fit on one line in the item.\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- Input Labels -->\r\n<ion-item>\r\n  <ion-label>Default Input</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"fixed\">Fixed</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Floating</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"stacked\">Stacked</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Toggle</ion-label>\r\n  <ion-toggle slot=\"end\" checked></ion-toggle>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-checkbox slot=\"start\" checked></ion-checkbox>\r\n  <ion-label>Checkbox</ion-label>\r\n</ion-item>\r\n\r\n\r\n\r\n<!-- Default Note -->\r\n<ion-note>Default Note</ion-note>\r\n\r\n<!-- Note Colors -->\r\n<ion-note color=\"primary\">Primary Note</ion-note>\r\n<ion-note color=\"secondary\">Secondary Note</ion-note>\r\n<ion-note color=\"danger\">Danger Note</ion-note>\r\n<ion-note color=\"light\">Light Note</ion-note>\r\n<ion-note color=\"dark\">Dark Note</ion-note>\r\n\r\n<!-- Notes in a List -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Note (End)</ion-label>\r\n    <ion-note slot=\"end\">On</ion-note>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-note slot=\"start\">Off</ion-note>\r\n    <ion-label>Note (Start)</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n\r\n\r\n<!-- List of Text Items -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Pokémon Yellow</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Mega Man X</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>The Legend of Zelda</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Pac-Man</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Super Mario World</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List of Input Items -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Input</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Toggle</ion-label>\r\n    <ion-toggle slot=\"end\"></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Radio</ion-label>\r\n    <ion-radio slot=\"end\"></ion-radio>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Checkbox</ion-label>\r\n    <ion-checkbox slot=\"start\"></ion-checkbox>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List of Sliding Items -->\r\n<ion-list>\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>Item</ion-label>\r\n    </ion-item>\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option >Unread</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>Item</ion-label>\r\n    </ion-item>\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option >Unread</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-list>\r\n\r\n\r\n\r\n<!-- Default List Header -->\r\n<ion-list-header>\r\n  <ion-label>List Header</ion-label>\r\n</ion-list-header>\r\n\r\n<!-- List Header with Button -->\r\n<ion-list-header>\r\n  <ion-label>New This Week</ion-label>\r\n  <ion-button>See All</ion-button>\r\n</ion-list-header>\r\n\r\n<!-- List Header with Outline Button -->\r\n<ion-list-header>\r\n  <ion-label>New This Week</ion-label>\r\n  <ion-button fill=\"outline\">See All</ion-button>\r\n</ion-list-header>\r\n\r\n<!-- List Header Full Lines -->\r\n<ion-list-header lines=\"full\">\r\n  <ion-label>New This Week</ion-label>\r\n  <ion-button>See All</ion-button>\r\n</ion-list-header>\r\n\r\n<!-- List Header Inset Lines -->\r\n<ion-list-header lines=\"inset\">\r\n  <ion-label>New This Week</ion-label>\r\n  <ion-button>See All</ion-button>\r\n</ion-list-header>\r\n\r\n<!-- List Headers in Lists -->\r\n<ion-list>\r\n  <ion-list-header lines=\"inset\">\r\n    <ion-label>Recent</ion-label>\r\n    <ion-button>Clear</ion-button>\r\n  </ion-list-header>\r\n  <ion-item lines=\"none\">\r\n    <ion-label color=\"primary\">\r\n      <h1>I got you babe</h1>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<ion-list>\r\n  <ion-list-header lines=\"inset\">\r\n    <ion-label>Trending</ion-label>\r\n  </ion-list-header>\r\n  <ion-item>\r\n    <ion-label color=\"primary\">\r\n      <h1>harry styles</h1>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label color=\"primary\">\r\n      <h1>christmas</h1>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label color=\"primary\">\r\n      <h1>falling</h1>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n\r\n<ion-avatar>\r\n  <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n</ion-avatar>\r\n\r\n<ion-chip>\r\n  <ion-avatar>\r\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n  </ion-avatar>\r\n  <ion-label>Chip Avatar</ion-label>\r\n</ion-chip>\r\n\r\n<ion-item>\r\n  <ion-avatar slot=\"start\">\r\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n  </ion-avatar>\r\n  <ion-label>Item Avatar</ion-label>\r\n</ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ion-list-header>Default</ion-list-header>\r\n<ion-avatar class=\"ion-margin-start\">\r\n  <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n</ion-avatar>\r\n\r\n<ion-list-header>Chip Avatar</ion-list-header>\r\n<ion-chip class=\"ion-margin-start\">\r\n  <ion-avatar>\r\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n  </ion-avatar>\r\n  <ion-label>Kit Bishop</ion-label>\r\n</ion-chip>\r\n\r\n<ion-list>\r\n  <ion-list-header>Item Avatars</ion-list-header>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>Lorem ipsum</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h3>Lorem ipsum</h3>\r\n      <p>dolor sit amet</p>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h3>Lorem ipsum</h3>\r\n      <p>dolor sit amet</p>\r\n      <p>consectetur adipiscing elit. Duis ut urna neque.</p>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"end\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>Lorem ipsum</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"end\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h3>Lorem ipsum</h3>\r\n      <p>dolor sit amet</p>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"end\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h3>Lorem ipsum</h3>\r\n      <p>dolor sit amet</p>\r\n      <p>consectetur adipiscing elit. Duis ut urna neque.</p>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- Default -->\r\n<ion-button>Default</ion-button>\r\n\r\n<!-- Anchor -->\r\n<ion-button href=\"#\">Anchor</ion-button>\r\n\r\n<!-- Colors -->\r\n<ion-button color=\"primary\">Primary</ion-button>\r\n<ion-button color=\"secondary\">Secondary</ion-button>\r\n<ion-button color=\"tertiary\">Tertiary</ion-button>\r\n<ion-button color=\"success\">Success</ion-button>\r\n<ion-button color=\"warning\">Warning</ion-button>\r\n<ion-button color=\"danger\">Danger</ion-button>\r\n<ion-button color=\"light\">Light</ion-button>\r\n<ion-button color=\"medium\">Medium</ion-button>\r\n<ion-button color=\"dark\">Dark</ion-button>\r\n\r\n<!-- Expand -->\r\n<ion-button expand=\"full\">Full Button</ion-button>\r\n<ion-button expand=\"block\">Block Button</ion-button>\r\n\r\n<!-- Round -->\r\n<ion-button shape=\"round\">Round Button</ion-button>\r\n\r\n<!-- Fill -->\r\n<ion-button expand=\"full\" fill=\"outline\">Outline + Full</ion-button>\r\n<ion-button expand=\"block\" fill=\"outline\">Outline + Block</ion-button>\r\n<ion-button shape=\"round\" fill=\"outline\">Outline + Round</ion-button>\r\n\r\n<!-- Icons -->\r\n<ion-button>\r\n  <ion-icon slot=\"start\" name=\"star\"></ion-icon>\r\n  Left Icon\r\n</ion-button>\r\n\r\n<ion-button>\r\n  Right Icon\r\n  <ion-icon slot=\"end\" name=\"star\"></ion-icon>\r\n</ion-button>\r\n\r\n<ion-button>\r\n  <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\r\n</ion-button>\r\n\r\n<!-- Sizes -->\r\n<ion-button size=\"large\">Large</ion-button>\r\n<ion-button>Default</ion-button>\r\n<ion-button size=\"small\">Small</ion-button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/components/card-smoothie/card-smoothie.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/components/card-smoothie/card-smoothie.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card mode=\"md\" [ngStyle]=\"{'background': category.color}\" (click)=\"viewDetails(category)\" >\r\n  <div class=\"mask\">\r\n    <img src=\"assets/smoothie/pokeball.png\">\r\n  </div>\r\n  <ion-card-content>\r\n    <ion-row >\r\n      <ion-col  size=\"8\">\r\n        <ion-card-subtitle class=\"no\">{{category.name}}</ion-card-subtitle>\r\n        <ion-card-title  >{{category.title}}</ion-card-title>\r\n        <ion-card-subtitle>\r\n          <ion-badge>\r\n            <ion-icon name=\"flash\"></ion-icon>\r\n                 Nhấp vào để xem thêm\r\n          </ion-badge>\r\n        </ion-card-subtitle>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <div class=\"stage\">\r\n          <div [ngStyle]=\"{'animation-duration.s' : index}\" class=\"box bounce-7\">\r\n            <ion-img [ngClass]=\"category.customClass\" [src]=\"category.url\"></ion-img>\r\n          </div>\r\n      </div>\r\n      \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/components/counter-cart/counter-cart.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/components/counter-cart/counter-cart.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"(cartItemCount | async) !== 0\" style=\"position: absolute;  bottom: 0; width: 100%; z-index: 1\" >\r\n  <div class=\"ion-padding\">\r\n    <ion-button mode=\"md\" (click)=\"navigate()\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">\r\n       <div style=\" width: 100%; height: 100%; display: flex; justify-content: center; align-items: center\">\r\n          <div style=\"flex: 1;  font-weight: bold\" >Xem giỏ hàng </div>\r\n           <div style=\"    padding-left: 10px;\"> {{cartItemCount | async}} món </div>\r\n           <div style=\"flex: 1; font-weight: bold\" >{{getTotal() | currency: 'VND'}}</div>\r\n       </div>\r\n    </ion-button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/google-food-form/google-food-form.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/google-food-form/google-food-form.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: flex; flex-direction: column;  margin-bottom: 75px;\" >\r\n  <div style=\"flex: 1 ;\">\r\n  \r\n    <ion-list>\r\n      <ion-item *ngFor=\"let p of cart\"  >\r\n        <ion-thumbnail slot=\"start\">\r\n          <img src=\"{{ p.img }}\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h2>{{ p.name }}</h2>\r\n          <p>{{ p.price | currency:'VND' }} x  {{p.amount}}   =  {{p.price*p.amount | currency:'VND' }}</p>\r\n          <ion-row >\r\n              <!-- <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\">\r\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button> -->\r\n            <div class=\"increment-product\">\r\n              <ion-button disabled=\"{{p.amount === 1}}\" (click)=\"decreaseCartItem(p)\" class=\"text-custom-size\" color=\"light \">-</ion-button>\r\n              <ion-button color=\"medium\" fill=\"clear\" >\r\n                {{ p.amount }}\r\n              </ion-button>\r\n              <ion-button  (click)=\"increaseCartItem(p)\" class=\"text-custom-size\" color=\"light\">+</ion-button>\r\n            </div>\r\n \r\n              <!-- <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\">\r\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button> -->\r\n \r\n          </ion-row>\r\n        </ion-label>\r\n           \r\n            <ion-icon (click)=\"removeCartItem(p)\" name=\"close-circle\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-button slot=\"start\">\r\n          <ion-icon slot=\"icon-only\" name=\"navigate\"></ion-icon>\r\n        </ion-button>\r\n        <ion-label>Tổng tiền:</ion-label>\r\n        <ion-button slot=\"end\">\r\n          {{ getTotal() | currency:'VND' }}\r\n        </ion-button>\r\n      </ion-item>\r\n    \r\n    </ion-list>\r\n  </div>\r\n<form [formGroup]=\"form\" >\r\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Tên người Nhận<ion-text color=\"danger\">*</ion-text></ion-label>\r\n      <ion-input formControlName=\"userName\"  type=\"text\" ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Số điện thoại người nhận <ion-text color=\"danger\">*</ion-text></ion-label>\r\n      <ion-input id=\"elePhone\" formControlName=\"phone\"  type=\"text\" ></ion-input>\r\n    </ion-item>\r\n    \r\n    <!-- <ion-item>\r\n      <ion-label position=\"stacked\">Address</ion-label>\r\n      <ion-input placeholder=\"Address Line 1\"></ion-input>\r\n      <ion-input placeholder=\"Address Line 2\"></ion-input>\r\n      <ion-input placeholder=\"City\"></ion-input>\r\n      <ion-input placeholder=\"State\"></ion-input>\r\n      <ion-input placeholder=\"Zip Code\"></ion-input>\r\n    </ion-item> -->\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Chọn địa chỉ nhận  </ion-label>\r\n      <ion-select  formControlName=\"address\"  mode=\"ios\">\r\n        <ion-select-option value=\"ktx_A\">KTX KHU A</ion-select-option>\r\n        <ion-select-option value=\"ktx_B\" >KTX KHU B</ion-select-option>\r\n        <ion-select-option value=\"KTX_C\">KTX KHU C</ion-select-option>\r\n        <ion-select-option value=\"KTX_D\">KTX KHU D</ion-select-option>\r\n        <ion-select-option value=\"KTX_E\">KTX KHU E</ion-select-option>\r\n        <ion-select-option value=\"THU_VIEN\">THƯ VIỆN</ion-select-option>\r\n        <ion-select-option value=\"PHUONG_VY\">PHƯƠNG VỸ</ion-select-option>\r\n        <ion-select-option value=\"CAM_TU\">CẨM TÚ</ion-select-option>\r\n        <ion-select-option value=\"MO_TA\">Mô tả địa chỉ ở ghi chú</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n   \r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Ghi chú </ion-label>\r\n      <ion-textarea  formControlName=\"note\"   ></ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n</form>\r\n\r\n\r\n</div>\r\n<div  style=\"position: fixed;  bottom: 0; width: 100%; z-index: 1 ; bottom: 0px;\"  class=\"ion-padding\">\r\n  <ion-button (click)=\"processForm($event)\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Đặt Món</ion-button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/smoothie-option/smoothie-option.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/smoothie-option/smoothie-option.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <img src=\"assets/smoothie/pokeball.png\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button  (click)=\"login()\" >\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button  (click)=\"login()\" >\r\n        <ion-icon name=\"options-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"titles\">\r\n    <h4>\r\n     Gian Hàng ĐH Nông Lâm\r\n    </h4>\r\n    <ion-card-subtitle>\r\n      Địa Chỉ: Khu 8 Giang ĐH Nông Lâm\r\n    </ion-card-subtitle>\r\n\r\n    <ion-searchbar (click)=\"search()\" class=\"ion-no-padding ion-padding-top\" placeholder=\"Tìm kiếm đồ uống...\"></ion-searchbar>\r\n  </div>\r\n</ion-header>\r\n<div class=\"ion-padding\">\r\n  <app-card-smoothie  [index]=\"'2'\" (navigation)=\"viewStoreDetails($event)\" [category]=\"{id: 'C01' ,name:'Danh mục #Sinh tố' ,  title: 'Sinh tố Nông Lâm' , url : 'assets/smoothie/smoothie.png' , color: 'linear-gradient(90deg,#f7bf0c,#c2e59c)', customClass: 'leve1' }\" ></app-card-smoothie>\r\n  <app-card-smoothie *ngFor=\"let c of category; let index = index;\" [index]=\"index + 3\" (navigation)=\"viewDetails($event)\" [category]=\"c\" ></app-card-smoothie>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvQzpcXFVzZXJzXFxhbGV4Lmh1eW5oXFxEZXNrdG9wXFxCYW1ib29cXHRlbXBsYXRlXFxnaXRodWJcXGZvb2Qtbmx1XFxmb29kLW5sdS9zcmNcXGFwcFxcZXhwbG9yZS1jb250YWluZXJcXGV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUVsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsMkJBQTJCO0FDQTdCOztBREdBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQ0FuQjs7QURHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFFakIsY0FBYztFQUVkLFNBQVM7QUNGWDs7QURLQTtFQUNFLHFCQUFxQjtBQ0Z2QiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExploreContainerComponent.prototype, "name", void 0);
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-container',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./explore-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./explore-container.component.scss */ "./src/app/explore-container/explore-container.component.scss")).default]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "./src/app/explore-container/explore-container.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "./src/app/explore-container/explore-container.component.ts");
/* harmony import */ var _share_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share/banner/banner.component */ "./src/app/explore-container/share/banner/banner.component.ts");
/* harmony import */ var _share_google_food_form_google_food_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./share/google-food-form/google-food-form.component */ "./src/app/explore-container/share/google-food-form/google-food-form.component.ts");
/* harmony import */ var _share_smoothie_option_smoothie_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./share/smoothie-option/smoothie-option.component */ "./src/app/explore-container/share/smoothie-option/smoothie-option.component.ts");
/* harmony import */ var _share_components_card_smoothie_card_smoothie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./share/components/card-smoothie/card-smoothie.component */ "./src/app/explore-container/share/components/card-smoothie/card-smoothie.component.ts");
/* harmony import */ var _share_components_counter_cart_counter_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./share/components/counter-cart/counter-cart.component */ "./src/app/explore-container/share/components/counter-cart/counter-cart.component.ts");











const CORE_COMPONENT = [_share_components_card_smoothie_card_smoothie_component__WEBPACK_IMPORTED_MODULE_9__["CardSmoothieComponent"], _share_components_counter_cart_counter_cart_component__WEBPACK_IMPORTED_MODULE_10__["CounterCartComponent"]];
let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"], _share_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _share_google_food_form_google_food_form_component__WEBPACK_IMPORTED_MODULE_7__["GoogleFoodFormComponent"], _share_smoothie_option_smoothie_option_component__WEBPACK_IMPORTED_MODULE_8__["SmoothieOptionComponent"], ...CORE_COMPONENT],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"], _share_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _share_google_food_form_google_food_form_component__WEBPACK_IMPORTED_MODULE_7__["GoogleFoodFormComponent"], _share_smoothie_option_smoothie_option_component__WEBPACK_IMPORTED_MODULE_8__["SmoothieOptionComponent"], ...CORE_COMPONENT]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "./src/app/explore-container/share/banner/banner.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/explore-container/share/banner/banner.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL3NoYXJlL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/explore-container/share/banner/banner.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/share/banner/banner.component.ts ***!
  \********************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BannerComponent = class BannerComponent {
    constructor() { }
    ngOnInit() {
        console.log("Test");
        setTimeout(() => {
            this.data = {
                'heading': 'Normal text',
                'para1': 'Lorem ipsum dolor sit amet, consectetur',
                'para2': 'adipiscing elit.'
            };
        }, 5000);
    }
};
BannerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/banner/banner.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./banner.component.scss */ "./src/app/explore-container/share/banner/banner.component.scss")).default]
    })
], BannerComponent);



/***/ }),

/***/ "./src/app/explore-container/share/components/card-smoothie/card-smoothie.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/explore-container/share/components/card-smoothie/card-smoothie.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  overflow: visible;\n  height: 120px;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 26px 0;\n}\n\nion-card ion-card-title {\n  font-family: auto;\n}\n\nion-card ion-col ion-img {\n  position: relative;\n  bottom: 36px;\n  width: 120px;\n}\n\nion-card ion-col ion-img.leve1 {\n  bottom: 54px !important;\n  width: 97px;\n  left: 17px;\n}\n\nion-card ion-col ion-img.leve2 {\n  bottom: 0px !important;\n  width: 131px;\n  left: -4px;\n}\n\nion-card ion-col ion-img.leve3 {\n  bottom: 9px;\n  width: 124px;\n  left: 1px;\n}\n\nion-card .mask img {\n  width: 240px;\n  position: absolute;\n  bottom: 0px;\n  left: 140px;\n  -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));\n          mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));\n}\n\nion-card ion-badge {\n  margin-top: 8px;\n  background: rgba(0, 0, 0, 0.08);\n}\n\nion-card ion-card-title {\n  font-weight: 900;\n}\n\nion-card .no {\n  color: rgba(0, 0, 0, 0.66);\n  font-weight: bold;\n}\n\n.stage {\n  display: flex;\n}\n\n.box {\n  align-self: flex-end;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  margin: 0 auto 0 auto;\n  transform-origin: bottom;\n}\n\n.bounce-7 {\n  -webkit-animation-name: bounce-7;\n          animation-name: bounce-7;\n  -webkit-animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);\n          animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);\n}\n\n@-webkit-keyframes bounce-7 {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(1.1, 0.9) translateY(0);\n  }\n  30% {\n    transform: scale(0.9, 1.1) translateY(-100px);\n  }\n  50% {\n    transform: scale(1.05, 0.95) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(-7px);\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n\n@keyframes bounce-7 {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(1.1, 0.9) translateY(0);\n  }\n  30% {\n    transform: scale(0.9, 1.1) translateY(-100px);\n  }\n  50% {\n    transform: scale(1.05, 0.95) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(-7px);\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvc2hhcmUvY29tcG9uZW50cy9jYXJkLXNtb290aGllL0M6XFxVc2Vyc1xcYWxleC5odXluaFxcRGVza3RvcFxcQmFtYm9vXFx0ZW1wbGF0ZVxcZ2l0aHViXFxmb29kLW5sdVxcZm9vZC1ubHUvc3JjXFxhcHBcXGV4cGxvcmUtY29udGFpbmVyXFxzaGFyZVxcY29tcG9uZW50c1xcY2FyZC1zbW9vdGhpZVxcY2FyZC1zbW9vdGhpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvc2hhcmUvY29tcG9uZW50cy9jYXJkLXNtb290aGllL2NhcmQtc21vb3RoaWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQ0FsQjs7QURMRTtFQU9JLGlCQUFpQjtBQ0V2Qjs7QURURTtFQVdNLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQ0VwQjs7QURmRTtFQWdCTSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFVBQVU7QUNHbEI7O0FEckJFO0VBcUJJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtBQ0loQjs7QUQzQkU7RUEyQkksV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0FDSWY7O0FEakNFO0VBbUNNLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxpRkFBa0U7VUFBbEUseUVBQWtFO0FDRTFFOztBRHpDRTtFQTRDSSxlQUFlO0VBQ2YsK0JBQTJCO0FDQ2pDOztBRDlDRTtFQWlESSxnQkFBZ0I7QUNDdEI7O0FEbERFO0VBcURJLDBCQUFzQjtFQUN0QixpQkFBaUI7QUNDdkI7O0FES0U7RUFDRSxhQUFhO0FDRmpCOztBRElBO0VBQ0ksb0JBQW9CO0VBRXBCLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQ0Y1Qjs7QURJQTtFQUNJLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsb0VBQStEO1VBQS9ELDREQUErRDtBQ0RuRTs7QURHQTtFQUNJO0lBQU8sb0NBQXdDO0VDQ2pEO0VEQUU7SUFBTyx3Q0FBd0M7RUNHakQ7RURGRTtJQUFPLDZDQUE2QztFQ0t0RDtFREpFO0lBQU8sMENBQXdDO0VDT2pEO0VETkU7SUFBTyx1Q0FBMkM7RUNTcEQ7RURSRTtJQUFPLG9DQUF3QztFQ1dqRDtFRFZFO0lBQU8sb0NBQXdDO0VDYWpEO0FBQ0Y7O0FEckJBO0VBQ0k7SUFBTyxvQ0FBd0M7RUNDakQ7RURBRTtJQUFPLHdDQUF3QztFQ0dqRDtFREZFO0lBQU8sNkNBQTZDO0VDS3REO0VESkU7SUFBTywwQ0FBd0M7RUNPakQ7RURORTtJQUFPLHVDQUEyQztFQ1NwRDtFRFJFO0lBQU8sb0NBQXdDO0VDV2pEO0VEVkU7SUFBTyxvQ0FBd0M7RUNhakQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL3NoYXJlL2NvbXBvbmVudHMvY2FyZC1zbW9vdGhpZS9jYXJkLXNtb290aGllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMjZweCAwO1xyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogYXV0bztcclxuICAgIH1cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBpb24taW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiAzNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgfVxyXG4gICAgICBpb24taW1nLmxldmUxIHtcclxuICAgICAgICBib3R0b206IDU0cHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogOTdweDtcclxuICAgICAgICBsZWZ0OiAxN3B4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pbWcubGV2ZTIge1xyXG4gICAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTMxcHg7XHJcbiAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgfSBcclxuXHJcbiAgICAgaW9uLWltZy5sZXZlM3tcclxuICAgICAgYm90dG9tOiA5cHg7XHJcbiAgICAgIHdpZHRoOiAxMjRweDtcclxuICAgICAgbGVmdDogMXB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAgIC5tYXNrIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDE0MHB4O1xyXG4gICAgICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwwLDAsLjEpLCByZ2JhKDAsMCwwLDApKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxuXHJcbiAgICAubm8ge1xyXG4gICAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjYpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnN0YWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJveCB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgXHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG59XHJcbi5ib3VuY2UtNyB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlLTc7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yODAsIDAuODQwLCAwLjQyMCwgMSk7XHJcbn1cclxuQGtleWZyYW1lcyBib3VuY2UtNyB7XHJcbiAgICAwJSAgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgICAgdHJhbnNsYXRlWSgwKTsgfVxyXG4gICAgMTAlICB7IHRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSAgIHRyYW5zbGF0ZVkoMCk7IH1cclxuICAgIDMwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgICB0cmFuc2xhdGVZKC0xMDBweCk7IH1cclxuICAgIDUwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsLjk1KSB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICA1NyUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgICAgdHJhbnNsYXRlWSgtN3B4KTsgfVxyXG4gICAgNjQlICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICAgIHRyYW5zbGF0ZVkoMCk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgICB0cmFuc2xhdGVZKDApOyB9XHJcbn0iLCJpb24tY2FyZCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMjZweCAwO1xufVxuXG5pb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBhdXRvO1xufVxuXG5pb24tY2FyZCBpb24tY29sIGlvbi1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMzZweDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG5pb24tY2FyZCBpb24tY29sIGlvbi1pbWcubGV2ZTEge1xuICBib3R0b206IDU0cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDk3cHg7XG4gIGxlZnQ6IDE3cHg7XG59XG5cbmlvbi1jYXJkIGlvbi1jb2wgaW9uLWltZy5sZXZlMiB7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMzFweDtcbiAgbGVmdDogLTRweDtcbn1cblxuaW9uLWNhcmQgaW9uLWNvbCBpb24taW1nLmxldmUzIHtcbiAgYm90dG9tOiA5cHg7XG4gIHdpZHRoOiAxMjRweDtcbiAgbGVmdDogMXB4O1xufVxuXG5pb24tY2FyZCAubWFzayBpbWcge1xuICB3aWR0aDogMjQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDE0MHB4O1xuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuXG5pb24tY2FyZCBpb24tYmFkZ2Uge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuaW9uLWNhcmQgLm5vIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Nik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3RhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm94IHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xufVxuXG4uYm91bmNlLTcge1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlLTc7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI4LCAwLjg0LCAwLjQyLCAxKTtcbn1cblxuQGtleWZyYW1lcyBib3VuY2UtNyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMC45KSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDEuMSkgdHJhbnNsYXRlWSgtMTAwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAwLjk1KSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDU3JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC03cHgpO1xuICB9XG4gIDY0JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/explore-container/share/components/card-smoothie/card-smoothie.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/explore-container/share/components/card-smoothie/card-smoothie.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CardSmoothieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSmoothieComponent", function() { return CardSmoothieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CardSmoothieComponent = class CardSmoothieComponent {
    constructor() {
        this.navigation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.index = 1;
    }
    ngOnInit() { }
    viewDetails(c) {
        this.navigation.emit(c);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardSmoothieComponent.prototype, "category", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CardSmoothieComponent.prototype, "navigation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardSmoothieComponent.prototype, "index", void 0);
CardSmoothieComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-smoothie',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card-smoothie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/components/card-smoothie/card-smoothie.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card-smoothie.component.scss */ "./src/app/explore-container/share/components/card-smoothie/card-smoothie.component.scss")).default]
    })
], CardSmoothieComponent);



/***/ }),

/***/ "./src/app/explore-container/share/components/counter-cart/counter-cart.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/explore-container/share/components/counter-cart/counter-cart.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL3NoYXJlL2NvbXBvbmVudHMvY291bnRlci1jYXJ0L2NvdW50ZXItY2FydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/explore-container/share/components/counter-cart/counter-cart.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/explore-container/share/components/counter-cart/counter-cart.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CounterCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterCartComponent", function() { return CounterCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let CounterCartComponent = class CounterCartComponent {
    constructor(cartService, router) {
        this.cartService = cartService;
        this.router = router;
        this.cart = [];
        this.cartItemCount = this.cartService.getCartItemCount();
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
    }
    getTotal() {
        return this.cartService.getTotal();
    }
    navigate() {
        this.router.navigate(['/tabs/cart']);
    }
};
CounterCartComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CounterCartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counter-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./counter-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/components/counter-cart/counter-cart.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./counter-cart.component.scss */ "./src/app/explore-container/share/components/counter-cart/counter-cart.component.scss")).default]
    })
], CounterCartComponent);



/***/ }),

/***/ "./src/app/explore-container/share/google-food-form/google-food-form.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/explore-container/share/google-food-form/google-food-form.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".increment-product {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvc2hhcmUvZ29vZ2xlLWZvb2QtZm9ybS9DOlxcVXNlcnNcXGFsZXguaHV5bmhcXERlc2t0b3BcXEJhbWJvb1xcdGVtcGxhdGVcXGdpdGh1YlxcZm9vZC1ubHVcXGZvb2Qtbmx1L3NyY1xcYXBwXFxleHBsb3JlLWNvbnRhaW5lclxcc2hhcmVcXGdvb2dsZS1mb29kLWZvcm1cXGdvb2dsZS1mb29kLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL3NoYXJlL2dvb2dsZS1mb29kLWZvcm0vZ29vZ2xlLWZvb2QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FDQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvc2hhcmUvZ29vZ2xlLWZvb2QtZm9ybS9nb29nbGUtZm9vZC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluY3JlbWVudC1wcm9kdWN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gICIsIi5pbmNyZW1lbnQtcHJvZHVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/explore-container/share/google-food-form/google-food-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/explore-container/share/google-food-form/google-food-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GoogleFoodFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleFoodFormComponent", function() { return GoogleFoodFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/scroll.service */ "./src/app/services/scroll.service.ts");






let GoogleFoodFormComponent = class GoogleFoodFormComponent {
    constructor(scrollService, formBuilder, cartService, alertController) {
        this.scrollService = scrollService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.alertController = alertController;
        this.cart = [];
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
        this.cartService.itemCollection$.subscribe(cart => this.cart = cart);
        // init form 
        this.form = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g)]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            note: ['']
        });
    }
    decreaseCartItem(product) {
        this.cartService.decreaseProduct(product.id);
    }
    increaseCartItem(product) {
        this.cartService.addProduct(product);
    }
    removeCartItem(product) {
        this.cartService.removeProduct(product.id);
    }
    getTotal() {
        return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
    }
    processForm(event) {
        event.preventDefault();
        console.log(this.form);
        if (this.form.invalid) {
            if (this.form.controls.phone.status === 'INVALID') {
                this.notifyCreate("Thông tin không hợp lệ", "Số điện thoại không hợp lệ");
                this.scrollToId("elePhone");
                return;
            }
            if (this.form.controls.userName.status === 'INVALID') {
                this.notifyCreate("Thông tin không hợp lệ", "Vui lòng điền tên");
                this.scrollToId("elePhone");
                return;
            }
            if (this.form.controls.address.status === 'INVALID') {
                this.notifyCreate("Thông tin không hợp lệ", "Vui lòng chọn địa chỉ");
                this.scrollToId("elePhone");
                return;
            }
            return;
        }
        this.alertController.create({
            mode: 'ios',
            header: 'Cảm ơn bạn đã đặt hàng',
            message: `Chúng tôi sẽ giao hàng sớm nhất`,
            buttons: [{
                    text: 'OK'
                }]
        }).then(alert => { alert.present(); this.cartService.clearCart(); });
    }
    notifyCreate(header, massage) {
        this.alertController.create({
            mode: 'ios',
            header: header,
            message: massage,
            buttons: [{
                    text: 'OK'
                }]
        }).then(alert => { alert.present(); });
    }
    scrollToId(id) {
        console.log("element id : ", id);
        this.scrollService.scrollToElementById(id);
    }
};
GoogleFoodFormComponent.ctorParameters = () => [
    { type: src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_5__["ScrollService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
GoogleFoodFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-food-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./google-food-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/google-food-form/google-food-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./google-food-form.component.scss */ "./src/app/explore-container/share/google-food-form/google-food-form.component.scss")).default]
    })
], GoogleFoodFormComponent);



/***/ }),

/***/ "./src/app/explore-container/share/smoothie-option/smoothie-option.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/explore-container/share/smoothie-option/smoothie-option.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: rgba(0,0,0,0);\n}\n\nion-header h4 {\n  font-weight: bold;\n  font-size: 24px;\n}\n\nion-header .titles {\n  padding: 0 2rem;\n}\n\nion-header ion-searchbar {\n  --background: rgba(0,0,0,.04);\n  --box-shadow: none;\n  --border-radius: 6px;\n}\n\nion-header img {\n  transform: scale(1.2, 1.2);\n  opacity: .2;\n  position: absolute;\n  top: -120px;\n  -webkit-mask-image: linear-gradient(to bottom, black, rgba(0, 0, 0, 0));\n          mask-image: linear-gradient(to bottom, black, rgba(0, 0, 0, 0));\n}\n\nion-card {\n  overflow: visible;\n  height: 120px;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 26px 0;\n}\n\nion-card ion-card-title {\n  font-family: cursive;\n}\n\nion-card ion-col ion-img {\n  position: relative;\n  bottom: 36px;\n  width: 120px;\n}\n\nion-card ion-col ion-img.leve1 {\n  bottom: 54px !important;\n  width: 97px;\n  left: 17px;\n}\n\nion-card .mask img {\n  width: 240px;\n  position: absolute;\n  bottom: 0px;\n  left: 140px;\n  -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));\n          mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));\n}\n\nion-card ion-badge {\n  margin-top: 8px;\n  background: rgba(0, 0, 0, 0.08);\n}\n\nion-card ion-card-title {\n  font-weight: 900;\n}\n\nion-card .no {\n  color: rgba(0, 0, 0, 0.66);\n  font-weight: bold;\n}\n\n.smoothie-1 {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvc2hhcmUvc21vb3RoaWUtb3B0aW9uL0M6XFxVc2Vyc1xcYWxleC5odXluaFxcRGVza3RvcFxcQmFtYm9vXFx0ZW1wbGF0ZVxcZ2l0aHViXFxmb29kLW5sdVxcZm9vZC1ubHUvc3JjXFxhcHBcXGV4cGxvcmUtY29udGFpbmVyXFxzaGFyZVxcc21vb3RoaWUtb3B0aW9uXFxzbW9vdGhpZS1vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL3NoYXJlL3Ntb290aGllLW9wdGlvbi9zbW9vdGhpZS1vcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSwyQkFBYTtBQ0RqQjs7QUREQTtFQUtJLGlCQUFpQjtFQUNqQixlQUFlO0FDQW5COztBRE5BO0VBU0ksZUFBZTtBQ0NuQjs7QURWQTtFQVlJLDZCQUFhO0VBQ2Isa0JBQWE7RUFDYixvQkFBZ0I7QUNFcEI7O0FEaEJBO0VBaUJJLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1RUFBb0U7VUFBcEUsK0RBQW9FO0FDR3hFOztBREVFO0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUNBbEI7O0FETkU7RUFRSSxvQkFBb0I7QUNFMUI7O0FEVkU7RUFZTSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUNFcEI7O0FEaEJFO0VBaUJNLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsVUFBVTtBQ0dsQjs7QUR0QkU7RUF5Qk0sWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlGQUFrRTtVQUFsRSx5RUFBa0U7QUNDMUU7O0FEOUJFO0VBa0NJLGVBQWU7RUFDZiwrQkFBMkI7QUNBakM7O0FEbkNFO0VBdUNJLGdCQUFnQjtBQ0F0Qjs7QUR2Q0U7RUEyQ0ksMEJBQXNCO0VBQ3RCLGlCQUFpQjtBQ0F2Qjs7QURJRTtFQUNFLDhEQUFpQjtBQ0RyQiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL3NoYXJlL3Ntb290aGllLW9wdGlvbi9zbW9vdGhpZS1vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xyXG4gIH1cclxuICBoNCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgLnRpdGxlcyB7XHJcbiAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgfVxyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4wNCk7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xyXG4gICAgb3BhY2l0eTogLjI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMjBweDtcclxuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiAgaW9uLWNhcmQge1xyXG5cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDI2cHggMDtcclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICB9XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTogMzZweDtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWltZy5sZXZlMSB7XHJcbiAgICAgICAgYm90dG9tOiA1NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDk3cHg7XHJcbiAgICAgICAgbGVmdDogMTdweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYXNrIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDE0MHB4O1xyXG4gICAgICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwwLDAsLjEpLCByZ2JhKDAsMCwwLDApKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxuXHJcbiAgICAubm8ge1xyXG4gICAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjYpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zbW9vdGhpZS0xIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjNDA5KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xufVxuXG5pb24taGVhZGVyIGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuaW9uLWhlYWRlciAudGl0bGVzIHtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuXG5pb24taGVhZGVyIGlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjA0KTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuaW9uLWhlYWRlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcbiAgb3BhY2l0eTogLjI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTIwcHg7XG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGJsYWNrLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cblxuaW9uLWNhcmQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDI2cHggMDtcbn1cblxuaW9uLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuaW9uLWNhcmQgaW9uLWNvbCBpb24taW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDM2cHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuaW9uLWNhcmQgaW9uLWNvbCBpb24taW1nLmxldmUxIHtcbiAgYm90dG9tOiA1NHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5N3B4O1xuICBsZWZ0OiAxN3B4O1xufVxuXG5pb24tY2FyZCAubWFzayBpbWcge1xuICB3aWR0aDogMjQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDE0MHB4O1xuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuXG5pb24tY2FyZCBpb24tYmFkZ2Uge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuaW9uLWNhcmQgLm5vIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Nik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc21vb3RoaWUtMSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjNDA5KSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/explore-container/share/smoothie-option/smoothie-option.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/explore-container/share/smoothie-option/smoothie-option.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SmoothieOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothieOptionComponent", function() { return SmoothieOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");




let SmoothieOptionComponent = class SmoothieOptionComponent {
    constructor(router, categoryService) {
        this.router = router;
        this.categoryService = categoryService;
        this.category = [];
        this.category = this.categoryService.getCategories();
    }
    ngOnInit() { }
    viewDetails(ev) {
        this.router.navigate([`/details/category/${ev.id}`]);
    }
    viewStoreDetails(ev) {
        this.router.navigate([`/details/store`]);
    }
    search() {
        this.router.navigate([`/details/search`]);
    }
    login() {
        this.router.navigate([`/forms`]);
    }
};
SmoothieOptionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }
];
SmoothieOptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-smoothie-option',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./smoothie-option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/share/smoothie-option/smoothie-option.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./smoothie-option.component.scss */ "./src/app/explore-container/share/smoothie-option/smoothie-option.component.scss")).default]
    })
], SmoothieOptionComponent);



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService, Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CategoryService = class CategoryService {
    constructor() {
        // category: Category[] =[{id: 'C01' ,name:'Danh mục #001' ,  title: 'Nước ép' , url : 'assets/smoothie/smoothie_2.png' , color: 'warning', customClass: '' },
        // {id: 'C02' ,name:'Danh mục #002' ,  title: 'Sinh tố' , url : 'assets/smoothie/smoothie.png', color: 'primary', customClass: 'leve1'  },
        // {id: 'C03',name:'Danh mục #003' ,  title: 'Trái cây dầm' , url : 'assets/smoothie/fruit.png' ,color: 'success', customClass: ''  }
        // ];
        this.category = [
            { id: 'C02', name: 'Danh mục #002', title: 'Cơm Nông Lâm', url: 'assets/com-tam/pngguru.png', color: 'linear-gradient(90deg, #096dd9,#c2e59c)', customClass: 'leve2' },
            { id: 'C03', name: 'Danh mục #003', title: 'Đồ ăn vặt', url: 'assets/do-an-vat/banh-trang-tron.png', color: 'linear-gradient(90deg, #2dd36f,#c2e59c)', customClass: 'leve3' }
        ];
    }
    getCategories() {
        return this.category;
    }
    findOne(id) {
        return (this.category.filter(e => e.id === id)[0] || null);
    }
};
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);

class Category {
    constructor(id, name, title, url, customClass, color) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.url = url;
        this.customClass = customClass;
        this.color = color;
    }
}


/***/ }),

/***/ "./src/app/services/scroll.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/*! exports provided: ScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ScrollService = class ScrollService {
    constructor(router) {
        this.router = router;
    }
    scrollTo(path) {
        const { url, elementId } = this.__getUrlAndElementId(path);
        console.log('url : ', url);
        console.log('element id : ', elementId);
        if (url) {
            this.router.navigate([url]);
            if (elementId) {
                this.scrollToElementById(elementId);
            }
        }
    }
    __getUrlAndElementId(path) {
        const splits = path.split('#');
        return {
            url: splits[0],
            elementId: splits[1]
        };
    }
    scrollToElementById(id) {
        const element = this.__getElementById(id);
        this.scrollToElement(element);
    }
    __getElementById(id) {
        console.log('element id : ', id);
        const element = document.querySelector(`#${id}`);
        return element;
    }
    scrollToElement(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }
};
ScrollService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ScrollService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScrollService);



/***/ })

}]);
//# sourceMappingURL=default~cart-cart-module~details-details-module~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module-es2015.js.map