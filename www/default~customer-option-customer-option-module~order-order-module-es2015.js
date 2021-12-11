(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~customer-option-customer-option-module~order-order-module"],{

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
            RestaurantId: order.restaurantId,
            DateTime: order.dateTime,
            Customer: order.customer,
            Location: order.location,
            OrderStatus: order.orderStatuses,
            Total: order.total,
            Driver: order.driver,
            Vehicle: order.vehicle,
            orderLocation: order.orderLocation,
            restaurantStatus: order.restaurantStatuses,
            customerStatus: "false",
            status: order.statuses
        };
        this.orderService.updateOrder(data).subscribe(res => {
            alert(res.toString());
        });
    }
    viewOrder(id) {
        this.isLoading = false;
        this.countItems = 0;
        this.cart = [];
        // let orderNo = this.listOfOrder.find(c => c.id == id).orderNo;
        let orderDetails = this.listOfOrderDetails.filter(c => c.orderId == id);
        orderDetails.forEach(el => {
            let data = {
                CookingTime: this.listOfFood.find(c => c.id == el.foodId).cookingTime,
                DeliveryTime: this.listOfFood.find(c => c.id == el.foodId).deliveryTime,
                Description: this.listOfFood.find(c => c.id == el.foodId).description,
                Name: this.listOfFood.find(c => c.id == el.foodId).name,
                Price: this.listOfFood.find(c => c.id == el.foodId).price,
                amount: el.qty,
                categoryId: this.listOfFood.find(c => c.id == el.foodId).categoryId,
                id: el.foodId,
                picture: this.listOfFood.find(c => c.id == el.foodId).picture,
                restaurantId: this.listOfFood.find(c => c.id == el.foodId).restaurantId,
                type: this.listOfFood.find(c => c.id == el.foodId).type,
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
//# sourceMappingURL=default~customer-option-customer-option-module~order-order-module-es2015.js.map