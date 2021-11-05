(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");








let RestaurantService = class RestaurantService {
    constructor(http) {
        this.http = http;
        this.APIURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiURL;
    }
    create(val) {
        return this.http.post(this.APIURL + '/Restaurant', val);
    }
    getAllRestaurant() {
        var restaurant = this.http.get(this.APIURL + '/Restaurant');
        return restaurant;
    }
    updateRestaurant(val) {
        return this.http.put(this.APIURL + '/Restaurant/', val);
    }
    removeRestaurant(id) {
        return this.http.delete(this.APIURL + '/Restaurant/' + id).toPromise();
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

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");








let FoodService = class FoodService {
    constructor(http) {
        this.http = http;
        this.APIURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;
    }
    create(val) {
        return this.http.post(this.APIURL + '/Food', val);
    }
    getAllFood() {
        return this.http.get(this.APIURL + '/Food');
    }
    updateFood(val) {
        return this.http.put(this.APIURL + '/Food/', val);
    }
    removeFood(id) {
        return this.http.delete(this.APIURL + '/Food/' + id).toPromise();
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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.service */ "ldse");






let OrderService = class OrderService {
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.APIURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;
        this.cart = [];
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.RestaurantId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.orderStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.order = [];
        this.orderItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
    }
    create(val) {
        return this.http.post(this.APIURL + '/Order', val);
    }
    getAllOrder() {
        return this.http.get(this.APIURL + '/Order');
    }
    updateOrder(val) {
        return this.http.put(this.APIURL + '/Order/', val);
    }
    removeOrder(id) {
        return this.http.delete(this.APIURL + '/Order/' + id).toPromise();
    }
    // create(orderObj) {
    //   let values = this.orderCollectionList.add(orderObj)
    //     .then((docRef) => {
    //       this.sharedService.orderId.next(docRef.id);
    //     })
    //   return values;
    // }
    getOrderBy(id) {
        return this.http.get(this.APIURL + '/Order' + id);
    }
    getOrderByDriverId(driverId) {
        return this.http.get(this.APIURL + '/Order' + driverId);
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
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #pageTop scrollEvents=\"true\" [appHideHeader]=\"hideheader\" (ionScroll)=\"onScroll($event)\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-row class=\"info-row\" #hideheader>\n    <ion-col size=\"2\" class=\"ion-padding-start\">\n      <img src=\"./assets/delivery.png\" />\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-text color=\"dark\">\n        <span>Now</span><br />\n        <b>MTK Delivery</b>\n        <ion-icon name=\"chevron-down-outline\" color=\"primary\"></ion-icon>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"person-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"sticky-row\">\n    <ion-col size=\"2\">\n      <ion-buttons>\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-text class=\"ion-padding-start\" color=\"medium\"\n        [ngClass]=\"{'location-visible': showLocationDetail, 'location-hidden': !showLocationDetail}\">\n        MTK Delivery</ion-text>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-buttons>\n        <ion-button (click)=\"filterByMenu()\" ion-button full clear icon-left>\n          <ion-icon slot=\"start\" name=\"options-outline\"></ion-icon>\n        </ion-button>\n        <ion-button>\n          <ion-badge *ngIf=\"cart.length > 0\">{{ cartItemCount | async }}</ion-badge>\n          <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n  <form [formGroup]=\"regform\">\n    <ion-item *ngIf=\"menu\">\n      <ion-select multiple=\"true\" (ionChange)=\"selectMenu($event)\" interface=\"popover\" formControlName=\"menu\"\n        placeholder=\"select menu\">\n        <ion-select-option *ngFor=\"let menu of listOfCatagory\" value=\"{{menu.id}}\">\n          {{menu.categoryName}}({{menu.count}})\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </form>\n  <ion-row class=\"search-row\">\n    <ion-searchbar (keyup)=\"filter($event)\" [(ngModel)]=\"term\" showCancelButton=\"never\"\n      placeholder=\"Dishes, restaurants or cuisines\"></ion-searchbar>\n  </ion-row>\n  \n<ion-item lines=\"none\">\n  <ion-text color=\"dark\"><b style=\"padding-left: 10px\">Restaurant </b></ion-text>\n  <ion-label></ion-label>\n  <ion-select interface=\"popover\" (ionChange)=\"selectOpenClose($event)\" placeholder=\"Open or Close\">\n    <ion-select-option value=\"open\">Open</ion-select-option>\n    <ion-select-option value=\"close\">Close</ion-select-option>\n  </ion-select>\n</ion-item>\n  <ion-row class=\"meal-row\" *ngFor=\"let item of listOfRestaurant |filter:term \"\n    (click)=\"openLink(item.accountId,item.id)\">\n    <ion-col size=\"6\" class=\"border-bottom\">\n      <div class=\"meal-image\" [style.background-image]=\"'url(' + item.Photo + ')'\"></div>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-text color=\"dark\"><b>{{item.Name }}</b></ion-text><br />\n      <span>\n        <ion-icon name=\"star\" color=\"secondary\"></ion-icon>\n        <ion-text color=\"secondary\"> {{ item.Type }} </ion-text>\n        <ion-text color=\"primary\">{{item.StartWorkingHour|date:'short'}}</ion-text>\n        <hr>\n        <ion-text color=\"primary\">{{item.EndWorkingHour|date:'short'}}</ion-text>\n      </span>\n      <br />\n      <!-- <span>\n        <ion-icon name=\"location-outline\"></ion-icon> {{ item.Location }}\n      </span> [ngStyle]=\"{'background-color':person.country === 'UK' ? 'green' : 'red' }\"-->\n      <ion-row>\n      <button style=\"border-radius: 5px;margin: .25rem .5rem .25rem 0;\" [ngClass]=\"{'green' :item.status==='open', 'red': item.status==='close'}\">\n        {{item.status}}\n      </button>\n        <div *ngFor=\"let catagories of item.Category\">\n          <button style=\"\n              background-color: #2185d0;\n              border-color: #2185d0;\n              color: #fff;\n              border-radius: 0.28571429rem;\n              margin: .25rem .5rem .25rem 0;\n            \">\n            {{catagories.categoryName}}\n          </button>\n        </div>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"pageScroller()\">\n      <ion-icon md=\"chevron-up-outline\" ios=\"chevron-up-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "cZdB":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-search-filter.js.map

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _directive_shard_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directive/shard-directives.module */ "bLo3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _directive_shard_directives_module__WEBPACK_IMPORTED_MODULE_7__["ShardDirectivesModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.featured-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.featured-slide .info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\nion-searchbar {\n  --icon-color: var(--ion-color-medium);\n}\n\nion-content {\n  --padding-top: 40px;\n}\n\n.sticky-row {\n  position: sticky;\n  top: calc(env(safe-area-inset-top) - 35px);\n  z-index: 2;\n  background: #fff;\n  box-shadow: 0px 9px 11px -15px rgba(0, 0, 0, 0.75);\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n}\n\n.search-row {\n  border-radius: 8px;\n  margin: 9px;\n}\n\n.info-row {\n  background: #fff;\n  position: sticky;\n  top: calc(env(safe-area-inset-top) - 40px);\n  z-index: 2;\n}\n\nion-refresher {\n  padding-top: calc(env(safe-area-inset-top) + 50px);\n}\n\n.location-visible {\n  opacity: 1;\n  transition: 0.5s;\n}\n\n.location-hidden {\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.header-image {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 30vh;\n  will-change: transform;\n}\n\n.meal-image {\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 0px;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: #f8f9fa;\n  margin-top: -2px;\n}\n\nion-content ion-card {\n  border-radius: 14px;\n}\n\nion-badge {\n  color: #fff;\n  position: absolute;\n  top: -9px;\n  right: 2px;\n  border-radius: 100%;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\nion-row {\n  border-radius: 8px;\n  margin: 2px;\n  background-color: #e9ecef;\n}\n\n.green {\n  background-color: #28a745;\n}\n\n.red {\n  background-color: #d9534f;\n}\n\n.category {\n  display: block;\n  position: relative;\n  background: 0 0;\n  margin: .5rem 0 0;\n  width: 100%;\n  padding: 0 0 0;\n  top: 0;\n  left: 0;\n  color: rgba(0, 0, 0, 0.4);\n  box-shadow: none;\n  transition: color .1s ease;\n  border-top: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBSkE7RUFNSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUUzQjs7QUFDQTtFQUNFLHFDQUFhO0FBRWY7O0FBQ0E7RUFDRSxtQkFBYztBQUVoQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrREFBa0Q7RUFDbEQsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFFdkI7O0FBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUdiOztBQURBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsVUFBVTtBQUlaOztBQURBO0VBQ0Usa0RBQWtEO0FBSXBEOztBQURBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUlsQjs7QUFEQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFJbEI7O0FBRkE7RUFDRSw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0JBQXNCO0FBS3hCOztBQUhBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFNcEI7O0FBSkE7RUFLSSxVQUFVO0VBRVYscUJBQWdCO0FBRXBCOztBQVRBO0VBWUkscUJBQWdCO0VBQ2hCLHFCQUFhO0VBQ2IsZ0JBQWdCO0FBQ3BCOztBQWZBO0VBaUJJLG1CQUFtQjtBQUV2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0FBRTNCOztBQUFBO0VBQ0UseUJBQXlCO0FBRzNCOztBQURBO0VBQ0UseUJBQXlCO0FBSTNCOztBQUZBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCx5QkFBcUI7RUFFckIsZ0JBQWdCO0VBRWhCLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFLbEIiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1zbGlkZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAuaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufVxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAtLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLnN0aWNreS1yb3cge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtIDM1cHgpO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwcHggOXB4IDExcHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5zZWFyY2gtcm93IHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luOiA5cHg7XHJcbn1cclxuLmluZm8tcm93IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtIDQwcHgpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmlvbi1yZWZyZXNoZXIge1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDUwcHgpO1xyXG59XHJcblxyXG4ubG9jYXRpb24tdmlzaWJsZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4ubG9jYXRpb24taGlkZGVuIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLmhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxufVxyXG4ubWVhbC1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigxMjAsIDEyNiwgMTM0KTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvLyBtYXJnaW46IDE0cHggMDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIC8vIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgfVxyXG4gIGlvbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYmFkZ2Uge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC05cHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uY2FydC1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJ0LWxlbmd0aCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxOHB4O1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuaW9uLXJvdyB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbn1cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcbi5yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XHJcbn1cclxuLmNhdGVnb3J5e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgbWFyZ2luOiAuNXJlbSAwIDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAwIDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2U7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufSJdfQ== */");

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



/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Service_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/category.service */ "neG8");
/* harmony import */ var _Service_food_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/food.service */ "Dkj+");
/* harmony import */ var _Service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/order.service */ "VNSQ");
/* harmony import */ var _Service_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/account.service */ "6wYF");
/* harmony import */ var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Service/restaurant.service */ "+cje");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Service/shared.service */ "ldse");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














let HomePage = class HomePage {
    constructor(fb, restaurantService, foodService, catagoryService, router, sharedService, http, orderService, modelControler, accountService) {
        this.fb = fb;
        this.restaurantService = restaurantService;
        this.foodService = foodService;
        this.catagoryService = catagoryService;
        this.router = router;
        this.sharedService = sharedService;
        this.http = http;
        this.orderService = orderService;
        this.modelControler = modelControler;
        this.accountService = accountService;
        this.regform = this.fb.group({});
        this.listOfRestaurant = [];
        this.categories = [];
        this.highlights = [];
        this.featured = [];
        this.featuredSlideOpts = {
            slidesPerView: 1.2,
            spaceBetween: 10,
            freeMode: true
        };
        this.showLocationDetail = false;
        this.cart = [];
        this.count = 0;
        this.listOfCatagory = [];
        this.menu = false;
        this.category = [];
        this.currentDate = new Date().toISOString();
        console.log(this.currentDate);
        var date = new Date(this.currentDate);
        this.hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        this.am_pm = date.getHours() >= 12 ? "pm" : "am";
        this.minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        console.log("hour == :" + this.hours + "  am-pm == " + this.am_pm + " minnutes == " + this.minutes);
        let time = this.hours + ":" + this.minutes + " " + this.am_pm;
        console.log(time);
    }
    pageScroller() {
        this.pageTop.scrollToTop();
    }
    ngOnInit() {
        this.regform = this.fb.group({
            menu: [""]
        });
        this.cartItemCount = this.orderService.getCartItemCount();
        this.cart = this.orderService.getCart();
        this.getAllRestaurant();
        //this.getCatagory();
        this.getRestaurant();
        this.getFood();
    }
    getCatagory() {
        this.catagoryService.getAllCategory().subscribe(res => {
            this.categoriesList = res;
            res.forEach(element => {
                this.listOfRestaurants.forEach(ele => {
                    if (ele.categoryId)
                        for (let i = 0; i < ele.categoryId.length; i++) {
                            if (ele.categoryId[i] == element.categoryName) {
                                this.count = this.count + 1;
                            }
                        }
                });
                let data = {
                    id: element.id,
                    categoryName: element.categoryName,
                    count: this.count
                };
                this.listOfCatagory.push(data);
                this.count = 0;
                // console.log(this.listOfCatagory);
            });
        });
    }
    selectMenu(event) {
        this.listOfRestaurant = [];
        this.categoryIds = event.detail.value;
        if (this.categoryIds.length > 0) {
            this.listOfRestaurants.forEach(ele => {
                if (ele.categoryId.length > 0) {
                    this.count = 0;
                    for (let i = 0; i < ele.categoryId.length; i++) {
                        if (this.categoryIds.length > 0) {
                            for (let j = 0; j < this.categoryIds.length; j++) {
                                let category = this.listOfCatagory.find(c => c.id == +this.categoryIds[j]);
                                if (ele.categoryId[i] == category.categoryName) {
                                    this.count = this.count + 1;
                                }
                            }
                        }
                    }
                    if (this.count == 1) {
                        this.catagoryService.getAllCategory().subscribe(result => {
                            this.categoriesList = result;
                            this.category = [];
                            for (let i = 0; i < ele.categoryId.length; i++) {
                                const data = {
                                    categoryName: ele.categoryId[i],
                                };
                                this.category.push(data);
                            }
                            this.getStatusRestaurant(ele);
                            let data = {
                                id: ele.id,
                                Name: ele.name,
                                Location: ele.location,
                                Type: ele.type,
                                StartWorkingHour: ele.startWorkingHour,
                                EndWorkingHour: ele.endWorkingHour,
                                AreaSpace: ele.areaSpace,
                                PhoneNumber: ele.phoneNumber,
                                GM: ele.gm,
                                ContactPerson: ele.contactPerson,
                                Email: ele.email,
                                Photo: ele.photo,
                                accountId: ele.accountId,
                                status: this.statusOfRestaurant,
                                Category: this.category
                            };
                            this.listOfRestaurant.push(data);
                        });
                    }
                }
            });
        }
        else {
            this.restaurantService.getAllRestaurant().subscribe(res => {
                res.forEach(ele => {
                    this.catagoryService.getAllCategory().subscribe(result => {
                        this.categoriesList = result;
                        this.category = [];
                        for (let i = 0; i < ele.categoryId.length; i++) {
                            const data = {
                                categoryName: ele.categoryId[i],
                            };
                            this.category.push(data);
                        }
                        this.getStatusRestaurant(ele);
                        let data = {
                            id: ele.id,
                            Name: ele.name,
                            Location: ele.location,
                            Type: ele.type,
                            StartWorkingHour: ele.startWorkingHour,
                            EndWorkingHour: ele.endWorkingHour,
                            AreaSpace: ele.areaSpace,
                            PhoneNumber: ele.phoneNumber,
                            GM: ele.gm,
                            ContactPerson: ele.contactPerson,
                            Email: ele.email,
                            Photo: ele.photo,
                            accountId: ele.accountId,
                            status: this.statusOfRestaurant,
                            Category: this.category
                        };
                        this.listOfRestaurant.push(data);
                    });
                });
            });
        }
    }
    getStatusRestaurant(ele) {
        //starting time work in restaurant
        var start_date = new Date(ele.startWorkingHour);
        var start_hours = start_date.getHours() > 12 ? start_date.getHours() - 12 : start_date.getHours();
        var start_am_pm = start_date.getHours() >= 12 ? "pm" : "am";
        var start_minutes = start_date.getMinutes() < 10 ? "0" + start_date.getMinutes() : start_date.getMinutes();
        //finishing time working restaurant 
        var end_date = new Date(ele.endWorkingHour);
        var end_hours = end_date.getHours() > 12 ? end_date.getHours() - 12 : end_date.getHours();
        var end_am_pm = end_date.getHours() >= 12 ? "pm" : "am";
        var end_minutes = end_date.getMinutes() < 10 ? "0" + end_date.getMinutes() : end_date.getMinutes();
        if (start_hours <= this.hours) {
            if (this.am_pm == start_am_pm) {
                this.statusOfRestaurant = "open";
            }
            else if (this.am_pm == end_am_pm) {
                if (this.hours <= end_hours) {
                    this.statusOfRestaurant = "open";
                }
            }
        }
        else {
            this.statusOfRestaurant = "close";
        }
        if (ele.status == "open") {
            this.statusOfRestaurant = "open";
        }
        else {
            this.statusOfRestaurant = "close";
        }
    }
    getAllRestaurant() {
        this.restaurantService.getAllRestaurant().subscribe(res => {
            this.listOfRestaurants = res;
        });
    }
    getRestaurant() {
        this.restaurantService.getAllRestaurant().subscribe(res => {
            res.forEach(ele => {
                this.catagoryService.getAllCategory().subscribe(result => {
                    this.categoriesList = result;
                    this.category = [];
                    for (let i = 0; i < ele.categoryId.length; i++) {
                        const data = {
                            categoryName: ele.categoryId[i],
                        };
                        this.category.push(data);
                    }
                    this.getStatusRestaurant(ele);
                    let data = {
                        id: ele.id,
                        Name: ele.name,
                        Location: ele.location,
                        Type: ele.type,
                        StartWorkingHour: ele.startWorkingHour,
                        EndWorkingHour: ele.endWorkingHour,
                        AreaSpace: ele.areaSpace,
                        PhoneNumber: ele.phoneNumber,
                        GM: ele.gm,
                        ContactPerson: ele.contactPerson,
                        Email: ele.email,
                        Photo: ele.photo,
                        accountId: ele.accountId,
                        status: this.statusOfRestaurant,
                        Category: this.category
                    };
                    this.listOfRestaurant.push(data);
                    //catagory add in menu list
                    if (res.length == this.listOfRestaurant.length) {
                        this.categoriesList.forEach(element => {
                            this.listOfRestaurants.forEach(ele => {
                                if (ele.categoryId)
                                    for (let i = 0; i < ele.categoryId.length; i++) {
                                        if (ele.categoryId[i] == element.categoryName) {
                                            this.count = this.count + 1;
                                        }
                                    }
                            });
                            let data = {
                                id: element.id,
                                categoryName: element.categoryName,
                                count: this.count
                            };
                            this.listOfCatagory.push(data);
                            this.count = 0;
                        });
                    }
                    // end of catagory
                });
            });
        });
    }
    getFood() {
        this.foodService.getAllFood().subscribe(res => {
            this.listOfFood = res;
        });
    }
    // Dummy refresher function
    doRefresh(event) {
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    openLink(id, resId) {
        this.sharedService.resId.next(resId);
        this.router.navigate(["/menu/details/" + id]);
    }
    // show or hide a location string later
    onScroll(ev) {
        const offset = ev.detail.scrollTop;
        this.showLocationDetail = offset > 40;
    }
    filter(query) {
        this.filteredItemsSearch = (query.target.value) ?
            this.listOfRestaurant.filter(p => p.Name.toLowerCase().includes(query.target.value.toLowerCase())) :
            this.listOfRestaurant;
    }
    filterByMenu() {
        this.menu = true;
    }
    selectOpenClose(ev) {
        this.listOfRestaurant = [];
        this.restaurantService.getAllRestaurant().subscribe(res => {
            res.forEach(ele => {
                this.catagoryService.getAllCategory().subscribe(result => {
                    this.categoriesList = result;
                    this.category = [];
                    for (let i = 0; i < ele.categoryId.length; i++) {
                        const data = {
                            categoryName: ele.categoryId[i],
                        };
                        this.category.push(data);
                    }
                    this.getStatusRestaurant(ele);
                    let data = {
                        id: ele.id,
                        Name: ele.name,
                        Location: ele.location,
                        Type: ele.type,
                        StartWorkingHour: ele.startWorkingHour,
                        EndWorkingHour: ele.endWorkingHour,
                        AreaSpace: ele.areaSpace,
                        PhoneNumber: ele.phoneNumber,
                        GM: ele.gm,
                        ContactPerson: ele.contactPerson,
                        Email: ele.email,
                        Photo: ele.photo,
                        accountId: ele.accountId,
                        status: this.statusOfRestaurant,
                        Category: this.category
                    };
                    this.listOfRestaurant.push(data);
                    this.listOfRestaurant = this.listOfRestaurant.filter(c => c.status == ev.detail.value);
                });
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"] },
    { type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_10__["RestaurantService"] },
    { type: _Service_food_service__WEBPACK_IMPORTED_MODULE_7__["FoodService"] },
    { type: _Service_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _Service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"] },
    { type: _Service_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] }
];
HomePage.propDecorators = {
    pageTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['pageTop',] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map