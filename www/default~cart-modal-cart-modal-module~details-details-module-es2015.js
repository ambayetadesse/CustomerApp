(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-modal-cart-modal-module~details-details-module"],{

/***/ "+cje":
/*!***********************************************!*\
  !*** ./src/app/Service/restaurant.service.ts ***!
  \***********************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");








let RestaurantService = class RestaurantService {
    constructor(http) {
        this.http = http;
        this.APIURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].apiURL;
    }
    create(val) {
        return this.http.post(this.APIURL + '/restaurant', val);
    }
    getAllRestaurant() {
        var restaurant = this.http.get(this.APIURL + '/restaurant');
        return restaurant;
    }
    updateRestaurant(val) {
        return this.http.put(this.APIURL + '/restaurant/', val);
    }
    removeRestaurant(id) {
        return this.http.delete(this.APIURL + '/restaurant/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_3__["BadInput"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
    }
};
RestaurantService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
RestaurantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestaurantService);



/***/ }),

/***/ "+q2o":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-modal/cart-modal.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"solid\" shape=\"round\" color=\"light\" (click)=\"onclick()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Order Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  >\n        <ion-badge *ngIf=\"cart.length > 0\">{{ cartItemCount | async }}</ion-badge>\n        <ion-icon slot=\"icon-only\" class=\"cart-icon\" name=\"cart\"></ion-icon>\n      </ion-button> \n    </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <!-- <div class=\"ion-text-end\">\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n    </ion-button>\n  </div> -->\n  <div class=\"ion-padding\">\n    <ion-list>\n      <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\">\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"1\" class=\"ion-align-self-center\">\n              {{ p.amount }}\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\">\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"2\" offset=\"5\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"removeCartItem(p)\">\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <b>{{ p.Name }}</b>\n            </ion-col>\n            <ion-col size=\"4\">\n              <b>{{ p.Price | currency:'ETB'}}</b>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ p.amount * p.Price | currency:'ETB' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n             Sub Total:\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ getTotal() | currency:'ETB' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n             Grand Total:\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ getGrandTotal() | currency:'ETB' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label>Transation Type</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"transactionType\">\n        <ion-select-option value=\"Delivery\">Delivery</ion-select-option>\n        <ion-select-option value=\"Pickup\">Pickup</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Delivery Date</ion-label>\n      <ion-datetime formControlName=\"DeliveryDate\" display-format=\"MMM DD, YYYY HH:mm:ss\" value=\"1990-02-19T07:43Z\" [(ngModel)]=\"currentDate\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Delivery fee</ion-label>\n      <ion-input formControlName=\"DeliveryFee\" type=\"number\" (keyup)=\"getGrandTotal()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Delivery Time</ion-label>\n      <ion-datetime formControlName=\"DeliveryTime\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-label>\n              <ion-icon style=\"height: 27px;\n              width: 19px;\" name=\"location-outline\"></ion-icon>\n            </ion-label>\n           </ion-col>\n          <ion-col size=\"8\">\n           <ion-label>\n             <p>Delivery to current Address</p>\n             <p></p>\n           </ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-button (click)=\"location()\">\n              change\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-button expand=\"full\" (click)=\"order(cart)\" slot=\"fixed\">\n      Order\n    </ion-button>\n   \n  </form>\n  </div>\n</ion-content>");

/***/ }),

/***/ "8D9V":
/*!*************************************************!*\
  !*** ./src/app/Service/order-detail.service.ts ***!
  \*************************************************/
/*! exports provided: OrderDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return OrderDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");








let OrderDetailService = class OrderDetailService {
    constructor(http) {
        this.http = http;
        this.APIURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].apiURL;
    }
    create(val) {
        return this.http.post(this.APIURL + '/orderdetail', val);
    }
    getAllOrderDetail() {
        return this.http.get(this.APIURL + '/orderdetail');
    }
    updateOrderDetail(val) {
        return this.http.put(this.APIURL + '/orderdetail/', val);
    }
    removeOrderDetail(id) {
        return this.http.delete(this.APIURL + '/orderdetail/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_4__["AppError"](error));
    }
};
OrderDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OrderDetailService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OrderDetailService);



/***/ }),

/***/ "Dkj+":
/*!*****************************************!*\
  !*** ./src/app/Service/food.service.ts ***!
  \*****************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");








let FoodService = class FoodService {
    constructor(http) {
        this.http = http;
        this.APIURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;
    }
    create(val) {
        return this.http.post(this.APIURL + '/food', val);
    }
    getAllFood() {
        return this.http.get(this.APIURL + '/food');
    }
    updateFood(val) {
        return this.http.put(this.APIURL + '/food/', val);
    }
    removeFood(id) {
        return this.http.delete(this.APIURL + '/food/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
    }
};
FoodService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FoodService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], FoodService);



/***/ }),

/***/ "HVLQ":
/*!*************************************************!*\
  !*** ./src/app/cart-modal/cart-modal.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-badge {\n  color: #fff;\n  position: absolute;\n  top: -9px;\n  right: 2px;\n  border-radius: 100%;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcnQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6ImNhcnQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOXB4O1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuIFxyXG4uY2FydC1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuIFxyXG4uY2FydC1sZW5ndGgge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMThweDtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbWluLXdpZHRoOiAyNXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "VNSQ":
/*!******************************************!*\
  !*** ./src/app/Service/order.service.ts ***!
  \******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "ldse");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");






let OrderService = class OrderService {
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.APIURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL;
        this.cart = [];
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.RestaurantId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.orderStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.order = [];
        this.orderItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
    }
    create(val) {
        return this.http.post(this.APIURL + '/order', val);
    }
    getAllOrder() {
        return this.http.get(this.APIURL + '/order');
    }
    updateOrder(val) {
        return this.http.put(this.APIURL + '/order/', val);
    }
    removeOrder(id) {
        return this.http.delete(this.APIURL + '/order/' + id).toPromise();
    }
    // create(orderObj) {
    //   let values = this.orderCollectionList.add(orderObj)
    //     .then((docRef) => {
    //       this.sharedService.orderId.next(docRef.id);
    //     })
    //   return values;
    // }
    getOrderBy(id) {
        return this.http.get(this.APIURL + '/order' + id);
    }
    getOrderByDriverId(driverId) {
        return this.http.get(this.APIURL + '/order' + driverId);
    }
    getCart() {
        return this.cart;
    }
    getOrders() {
        return this.order;
    }
    getCartItemCount() {
        return this.cartItemCount;
    }
    getOrderItemCount() {
        return this.orderItemCount;
    }
    getRestaurantId() {
        return this.RestaurantId;
    }
    getOrderStatus() {
        return this.orderStatus;
    }
    addOrder(items) {
        this.order = [];
        this.amount = 0;
        this.order.forEach(el => {
            const index = this.order.indexOf(c => c.orderDetailsId === el.orderDetailsId);
            this.order.splice(index, 1);
        });
        this.orderItemCount.next(0);
        items.forEach(element => {
            this.amount = this.amount + element.amount;
            const data = {
                CookingTime: element.CookingTime,
                DeliveryTime: element.DeliveryTime,
                Description: element.Description,
                Name: element.Name,
                Price: element.Price,
                amount: element.amount,
                categoryId: element.categoryId,
                id: element.Food,
                picture: element.picture,
                restaurantId: element.restaurantId,
                type: element.type,
                orderDetailsId: element.orderDetailsId,
            };
            this.order.push(data);
        });
        this.orderItemCount.next(this.orderItemCount.value + this.amount);
    }
    addProduct(product) {
        let added = false;
        for (const p of this.cart) {
            if (p.id === product.id) {
                p.amount += 1;
                added = true;
                break;
            }
        }
        if (!added) {
            product.amount = 1;
            this.cart.push(product);
        }
        this.cartItemCount.next(this.cartItemCount.value + 1);
    }
    decreaseProduct(product) {
        for (const [index, p] of this.cart.entries()) {
            if (p.id === product.id) {
                p.amount -= 1;
                if (p.amount === 0) {
                    this.cart.splice(index, 1);
                }
            }
        }
        this.cartItemCount.next(this.cartItemCount.value - 1);
    }
    removeProduct(product) {
        for (const [index, p] of this.cart.entries()) {
            if (p.id === product.id) {
                this.cartItemCount.next(this.cartItemCount.value - p.amount);
                this.cart.splice(index, 1);
            }
        }
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "Vefk":
/*!***********************************************!*\
  !*** ./src/app/cart-modal/cart-modal.page.ts ***!
  \***********************************************/
/*! exports provided: CartModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModalPage", function() { return CartModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart-modal.page.html */ "+q2o");
/* harmony import */ var _cart_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-modal.page.scss */ "HVLQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_food_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/food.service */ "Dkj+");
/* harmony import */ var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/order-detail.service */ "8D9V");
/* harmony import */ var _Service_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/order.service */ "VNSQ");
/* harmony import */ var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Service/restaurant.service */ "+cje");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Service/shared.service */ "ldse");












let CartModalPage = class CartModalPage {
    constructor(modalCtrl, alertCtrl, orderService, fb, router, restaurantService, orderDetailService, foodService, sharedService) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.orderService = orderService;
        this.fb = fb;
        this.router = router;
        this.restaurantService = restaurantService;
        this.orderDetailService = orderDetailService;
        this.foodService = foodService;
        this.sharedService = sharedService;
        this.cart = [];
        this.regform = this.fb.group({});
        this.currentDate = new Date().toISOString();
        this.minDate = new Date().toISOString();
        this.maxDate = new Date().toISOString();
        this.statusDriver = [
            { val: 'picked', isChecked: false },
            { val: 'start moving', isChecked: false },
            { val: 'delivered', isChecked: false }
        ];
        this.statusRestaurant = [
            { val: 'order received', isChecked: true },
            { val: 'start cooking', isChecked: false },
            { val: 'cooked', isChecked: false },
            { val: 'ready to service', isChecked: false }
        ];
        this.status = [
            { val: 'Accept', isChecked: false },
            { val: 'Reject', isChecked: false }
        ];
    }
    ngOnInit() {
        this.regform = this.fb.group({
            transactionType: [''],
            DeliveryDate: [''],
            DeliveryTime: [''],
            DeliveryAddress: [''],
            DeliveryFee: ['']
        });
        // setting min date
        let date = new Date();
        date.setDate(date.getDate() - 5);
        this.minDate = date.toISOString();
        // setting max date
        date = new Date();
        date.setDate(date.getDate() + 5);
        this.maxDate = date.toISOString();
        /// to get data form service
        this.cart = this.orderService.getCart();
        this.cartItemCount = this.orderService.getCartItemCount();
        this.id = this.orderService.getRestaurantId().value;
        // console.log(this.id)
        this.getRestaurant();
        this.getFood();
        this.readNOId();
    }
    getRestaurant() {
        this.restaurantService.getAllRestaurant().subscribe(res => {
            this.listOfRestaurant = res;
        });
    }
    getFood() {
        this.foodService.getAllFood().subscribe(res => {
            this.listOfFood = res;
        });
    }
    readNOId() {
        let No = 0;
        this.orderService.getAllOrder().subscribe((result) => {
            if (result.length === 0) {
                No = 1;
            }
            else {
                No = result.length + 1;
            }
            this.orderNo = +No;
        });
    }
    decreaseCartItem(product) {
        this.orderService.decreaseProduct(product);
    }
    increaseCartItem(product) {
        this.orderService.addProduct(product);
    }
    removeCartItem(product) {
        // this.orderService.removeProduct(product);
        this.presentAlertConfirm(product);
    }
    getTotal() {
        return this.cart.reduce((i, j) => i + j.amount * j.price, 0);
    }
    getGrandTotal() {
        return this.getTotal() + this.regform.get('DeliveryFee').value;
    }
    close() {
        this.modalCtrl.dismiss();
    }
    location() {
        this.sharedService.status.next('cart-modal');
        this.router.navigate(['/menu/location']);
    }
    order(cart) {
        this.Total = 0;
        cart.forEach(element => {
            this.restaurantId = element.restaurantId;
        });
        const res = this.listOfRestaurant.find(c => c.id === +this.restaurantId);
        const order = {
            restaurantId: res.accountId.toString(),
            dateTime: this.regform.get('DeliveryDate').value,
            customer: localStorage.getItem('userId'),
            location: res.location,
            orderStatuses: this.statusDriver,
            total: this.getGrandTotal(),
            driver: 'null',
            vehicle: 'null',
            orderLocation: 'null',
            restaurantStatuses: this.statusRestaurant,
            customerStatus: 'true',
            statuses: this.status
        };
        this.orderService.create(order).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // await this.loader.dismiss().then();
            // alert(res.toString());
            this.orderService.getAllOrder().subscribe(res => {
                cart.forEach(element => {
                    this.restaurantId = element.restaurantId;
                    this.Total = this.Total + (element.Price * element.amount);
                    const orderDetails = {
                        orderId: res[0].id,
                        foodId: element.id,
                        qty: element.amount,
                        price: element.price
                    };
                    this.orderDetailService.create(orderDetails).subscribe(res => {
                        // alert(res.toString());
                    });
                    this.presentAlert('Add order succesfuly');
                    this.router.navigate(['/menu/order']);
                });
            });
        }));
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Order',
                // subHeader: 'Subtitle',
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlertConfirm(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Clear cart !',
                message: '<strong>Are you sure you want to remove all items in your cart ?</strong>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.orderService.removeProduct(product);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onclick() {
        this.id = this.orderService.getRestaurantId().value;
        this.router.navigate(['/menu/details/' + this.id]);
    }
};
CartModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _Service_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_10__["RestaurantService"] },
    { type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_8__["OrderDetailService"] },
    { type: _Service_food_service__WEBPACK_IMPORTED_MODULE_7__["FoodService"] },
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] }
];
CartModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart-modal',
        template: _raw_loader_cart_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartModalPage);



/***/ }),

/***/ "ldse":
/*!*******************************************!*\
  !*** ./src/app/Service/shared.service.ts ***!
  \*******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let SharedService = class SharedService {
    constructor() {
        this.currentAddress = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.restaurant = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.location = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.orderId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.RestaurantLocation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.resId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.listOfCatagoryFilter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.deriverId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.customerId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.driverName = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    getCurrentAddress() {
        return this.currentAddress;
    }
    getMenuFilter() {
        return this.listOfCatagoryFilter;
    }
    getLocation() {
        return this.location;
    }
    getStatus() {
        return this.status;
    }
    getRestaurantLocation() {
        return this.RestaurantLocation;
    }
    getRestaurantId() {
        return this.resId;
    }
    getDriverId() {
        return this.deriverId;
    }
    getCustomerId() {
        return this.customerId;
    }
    getDriverName() {
        return this.driverName;
    }
};
SharedService.ctorParameters = () => [];
SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ })

}]);
//# sourceMappingURL=default~cart-modal-cart-modal-module~details-details-module-es2015.js.map