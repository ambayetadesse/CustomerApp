(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/GcI":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    constructor(originalError) {
        this.originalError = originalError;
    }
}


/***/ }),

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "5Jak":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "/GcI");

class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "6wYF":
/*!********************************************!*\
  !*** ./src/app/Service/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");








let AccountService = class AccountService {
    constructor(db) {
        this.db = db;
        this.accountCollectionList = db.collection('Account');
    }
    create(accountObj) {
        return this.accountCollectionList.add(accountObj);
    }
    getAllAccount() {
        this.accountList = this.accountCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.accountList;
    }
    getAccountById(id) {
        const accountObj = this.db.collection('Account', ref => ref.where('id', '==', id)).snapshotChanges();
        this.accountList = accountObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.accountList;
    }
    getAccount(id) {
        return this.accountCollectionList.doc(id).valueChanges();
    }
    updateAccount(accountObj, id) {
        return this.accountCollectionList.doc(id).update(accountObj)
            .catch(this.handleError);
    }
    removeAccount(id) {
        return this.accountCollectionList.doc(id).delete()
            .catch(this.handleError);
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
    }
};
AccountService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "XEKg":
/*!*************************************!*\
  !*** ./src/app/common/bad-input.ts ***!
  \*************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "/GcI");

class BadInput extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "XRg5":
/*!*************************************************!*\
  !*** ./src/app/directive/parallax.directive.ts ***!
  \*************************************************/
/*! exports provided: ParallaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxDirective", function() { return ParallaxDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ParallaxDirective = class ParallaxDirective {
    constructor(
    // private renderer: Renderer2,
    domCtrl) {
        this.domCtrl = domCtrl;
    }
    onContentScroll($event) {
        const scrollTop = $event.detail.scrollTop;
        if (scrollTop > 0) {
            // Use higher values to move the image out faster
            // Use lower values to move it out slower
            this.moveImage = scrollTop / 1.6;
            this.scaleImage = 1;
        }
        else {
            // +1 at the end as the other part can become 0
            // and the image would disappear
            this.scaleImage = -scrollTop / 200 + 1;
            this.moveImage = scrollTop / 1.6;
        }
        // this.domCtrl.write(() => {
        //   this.renderer.setStyle(this.imageEl, 'webkitTransform',
        //     'translate3d(0,' + this.moveImage + 'px,0) scale(' + this.scaleImage + ',' + this.scaleImage + ')'
        //   );
        // });
    }
};
ParallaxDirective.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
ParallaxDirective.propDecorators = {
    imageEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['appParallax',] }],
    onContentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['ionScroll', ['$event'],] }]
};
ParallaxDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appParallax]'
    })
], ParallaxDirective);



/***/ }),

/***/ "YHxn":
/*!*********************************************************!*\
  !*** ./src/app/customer-option/customer-option.page.ts ***!
  \*********************************************************/
/*! exports provided: CustomerOptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOptionPage", function() { return CustomerOptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_option_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-option.page.html */ "ZFaY");
/* harmony import */ var _customer_option_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-option.page.scss */ "gW5g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/food.service */ "Dkj+");
/* harmony import */ var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/order-detail.service */ "8D9V");
/* harmony import */ var _Service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/order.service */ "VNSQ");









let CustomerOptionPage = class CustomerOptionPage {
    constructor(modalControler, orderService, foodService, orderDetailsService, router) {
        this.modalControler = modalControler;
        this.orderService = orderService;
        this.foodService = foodService;
        this.orderDetailsService = orderDetailsService;
        this.router = router;
    }
    ngOnInit() {
        this.orderService.getAllOrder().subscribe(res => {
            this.listOfOrder = res;
        });
        this.getFood();
        this.getOrderDetails();
    }
    getFood() {
        this.foodService.getAllFood().subscribe(res => {
            this.listOfFood = res;
        });
    }
    getOrderDetails() {
        this.orderDetailsService.getAllOrderDetail().subscribe(res => {
            this.listOfOrderDetails = res;
        });
    }
    reOrder() {
    }
    CancelOrder() {
        let order = this.listOfOrder.find(c => c.id == this.data.id);
        let data = {
            id: order.id,
            RestaurantId: order.RestaurantId,
            orderNo: order.orderNo,
            DateTime: order.DateTime,
            Customer: order.Customer,
            Location: order.Location,
            OrderStatus: order.OrderStatus,
            Total: order.Total,
            Driver: order.Driver,
            Vehicle: order.Vehicle,
            orderLocation: order.orderLocation,
            restaurantStatus: order.restaurantStatus,
            customerStatus: false,
            status: order.status
        };
        this.orderService.updateOrder(data, order.id);
    }
    viewOrder(id) {
        this.isLoading = false;
        this.countItems = 0;
        this.cart = [];
        let orderNo = this.listOfOrder.find(c => c.id == id).orderNo;
        let orderDetails = this.listOfOrderDetails.filter(c => c.OrderId == orderNo);
        orderDetails.forEach(el => {
            let data = {
                CookingTime: this.listOfFood.find(c => c.id == el.Food).CookingTime,
                DeliveryTime: this.listOfFood.find(c => c.id == el.Food).DeliveryTime,
                Description: this.listOfFood.find(c => c.id == el.Food).Description,
                Name: this.listOfFood.find(c => c.id == el.Food).Name,
                Price: this.listOfFood.find(c => c.id == el.Food).Price,
                amount: el.Qty,
                categoryId: this.listOfFood.find(c => c.id == el.Food).categoryId,
                id: el.Food,
                picture: this.listOfFood.find(c => c.id == el.Food).picture,
                restaurantId: this.listOfFood.find(c => c.id == el.Food).restaurantId,
                type: this.listOfFood.find(c => c.id == el.Food).type,
                orderDetailsId: el.id,
                orderStatus: true
            };
            this.cart.push(data);
            this.countItems = this.cart.length;
            console.log(this.countItems);
        });
        this.orderService.addOrder(this.cart);
        this.router.navigate(["/menu/order-history"]);
        this.modalControler.dismiss();
    }
    close() {
        this.modalControler.dismiss();
    }
};
CustomerOptionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _Service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"] },
    { type: _Service_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"] },
    { type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_7__["OrderDetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CustomerOptionPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CustomerOptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-option',
        template: _raw_loader_customer_option_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customer_option_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerOptionPage);



/***/ }),

/***/ "ZFaY":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-option/customer-option.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>What do you want to do ?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item>\n    <ion-button expand=\"full\"  fill=\"clear\" (click)=\"reOrder()\"> Re-Order</ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-button expand=\"full\"  fill=\"clear\" (click)=\"CancelOrder()\">Cancel Order</ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-button fill=\"clear\" (click)=\"viewOrder(id)\"> View order  </ion-button>\n  </ion-item>\n</ion-list>\n<ion-footer>\n  <ion-button expand=\"full\" fill=\"clear\" (click)=\"close()\">\n    <ion-icon name=\"close-outline\"></ion-icon>&nbsp;&nbsp; Cancel</ion-button>\n</ion-footer>\n</ion-content>\n");

/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "bLo3":
/*!******************************************************!*\
  !*** ./src/app/directive/shard-directives.module.ts ***!
  \******************************************************/
/*! exports provided: ShardDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShardDirectivesModule", function() { return ShardDirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _parallax_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parallax.directive */ "XRg5");
/* harmony import */ var _hide_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hide-header.directive */ "kQ4E");





let ShardDirectivesModule = class ShardDirectivesModule {
};
ShardDirectivesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_parallax_directive__WEBPACK_IMPORTED_MODULE_3__["ParallaxDirective"], _hide_header_directive__WEBPACK_IMPORTED_MODULE_4__["HideHeaderDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_parallax_directive__WEBPACK_IMPORTED_MODULE_3__["ParallaxDirective"], _hide_header_directive__WEBPACK_IMPORTED_MODULE_4__["HideHeaderDirective"]],
    })
], ShardDirectivesModule);



/***/ }),

/***/ "gW5g":
/*!***********************************************************!*\
  !*** ./src/app/customer-option/customer-option.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1vcHRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "kQ4E":
/*!****************************************************!*\
  !*** ./src/app/directive/hide-header.directive.ts ***!
  \****************************************************/
/*! exports provided: HideHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function() { return HideHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let HideHeaderDirective = class HideHeaderDirective {
    constructor(
    //  private renderer: Renderer2,
    domCtrl) {
        this.domCtrl = domCtrl;
        this.headerHeight = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["isPlatform"])('ios') ? 44 : 56;
    }
    ngAfterViewInit() {
        this.header = this.header.el;
        this.children = this.header.children;
    }
    onContentScroll($event) {
        const scrollTop = $event.detail.scrollTop;
        let newPosition = -scrollTop;
        if (newPosition < -this.headerHeight) {
            newPosition = -this.headerHeight;
        }
        let newOpacity = 1 - (newPosition / -this.headerHeight);
        // this.domCtrl.write(() => {
        //   this.renderer.setStyle(this.header, 'top', newPosition + 'px');
        //   for (let c of this.children) {
        //     this.renderer.setStyle(c, 'opacity', newOpacity);
        //   }
        // });
    }
};
HideHeaderDirective.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
HideHeaderDirective.propDecorators = {
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['appHideHeader',] }],
    onContentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['ionScroll', ['$event'],] }]
};
HideHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHideHeader]'
    })
], HideHeaderDirective);



/***/ }),

/***/ "neG8":
/*!*********************************************!*\
  !*** ./src/app/Service/category.service.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");








let CategoryService = class CategoryService {
    constructor(db) {
        this.db = db;
        this.categoryCollectionList = db.collection('Category');
    }
    create(categoryObj) {
        return this.categoryCollectionList.add(categoryObj);
    }
    getAllCategory() {
        this.categoryList = this.categoryCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.categoryList;
    }
    getCategory(id) {
        return this.categoryCollectionList.doc(id).valueChanges();
    }
    updateCategory(categoryObj, id) {
        return this.categoryCollectionList.doc(id).update(categoryObj)
            .catch(this.handleError);
    }
    removeCategory(id) {
        return this.categoryCollectionList.doc(id).delete()
            .catch(this.handleError);
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
    }
};
CategoryService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map