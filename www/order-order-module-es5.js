(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"], {
    /***/
    "+cje":
    /*!***********************************************!*\
      !*** ./src/app/Service/restaurant.service.ts ***!
      \***********************************************/

    /*! exports provided: RestaurantService */

    /***/
    function cje(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantService", function () {
        return RestaurantService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/bad-input */
      "XEKg");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/not-found-error */
      "5Jak");
      /* harmony import */


      var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/app-error */
      "/GcI");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RestaurantService = /*#__PURE__*/function () {
        function RestaurantService(http) {
          _classCallCheck(this, RestaurantService);

          this.http = http;
          this.APIURL = 'http://localhost:49347/api';
        }

        _createClass(RestaurantService, [{
          key: "create",
          value: function create(val) {
            return this.http.post(this.APIURL + '/Restaurant', val);
          }
        }, {
          key: "getAllRestaurant",
          value: function getAllRestaurant() {
            var restaurant = this.http.get(this.APIURL + '/Restaurant');
            return restaurant;
          }
        }, {
          key: "updateRestaurant",
          value: function updateRestaurant(val) {
            return this.http.put(this.APIURL + '/Restaurant/', val);
          }
        }, {
          key: "removeRestaurant",
          value: function removeRestaurant(id) {
            return this.http["delete"](this.APIURL + '/Restaurant/' + id).toPromise();
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) {
              return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_3__["BadInput"](error.json()));
            }

            if (error.status === 404) {
              return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"]());
            }

            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }
        }]);

        return RestaurantService;
      }();

      RestaurantService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      };

      RestaurantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RestaurantService);
      /***/
    },

    /***/
    "+p+5":
    /*!***************************************!*\
      !*** ./src/app/order/order.module.ts ***!
      \***************************************/

    /*! exports provided: OrderPageModule */

    /***/
    function p5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPageModule", function () {
        return OrderPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-routing.module */
      "DM6G");
      /* harmony import */


      var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order.page */
      "uX05");

      var OrderPageModule = function OrderPageModule() {
        _classCallCheck(this, OrderPageModule);
      };

      OrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderPageRoutingModule"]],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
      })], OrderPageModule);
      /***/
    },

    /***/
    "DM6G":
    /*!***********************************************!*\
      !*** ./src/app/order/order-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: OrderPageRoutingModule */

    /***/
    function DM6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPageRoutingModule", function () {
        return OrderPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order.page */
      "uX05");

      var routes = [{
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_3__["OrderPage"]
      }];

      var OrderPageRoutingModule = function OrderPageRoutingModule() {
        _classCallCheck(this, OrderPageRoutingModule);
      };

      OrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderPageRoutingModule);
      /***/
    },

    /***/
    "u6Jy":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function u6Jy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Recent orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\"  #pageTop scrollEvents=\"true\"  (ionScroll)=\"onScroll($event)\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-segment style=\"padding-top: 70px;\" (ionChange)=\"segmentChanged($event)\" scrollable value=\"All\">\n    <ion-segment-button value=\"All\">\n      <ion-label>\n        All\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Processing\">\n      <ion-label>\n        Processing\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Completed\">\n      <ion-label>\n        Completed\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Cancelled\">\n      <ion-label>\n        Cancelled\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-list *ngIf=\"segment === 'All'\">\n    <ion-row *ngFor=\"let meal of listOfOrder\" class=\"ion-padding meal-row\" (click)=\"allOrder(meal,meal.id)\">\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName}}\n          <p>{{ meal.DateTime|date:'short' }}</p>\n          <!-- <ion-button style=\"margin-top: -7px;\" (click)=\"location(meal.Location)\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n          </ion-button> -->\n        </ion-label>\n        <ion-text color=\"dark\"><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label style=\"color: #f8f9fa;\n                    background-color: #17a2b8;\n                    border-radius: 5px;\n                    text-align: center;\">{{meal.OrderStatus}}</ion-label>\n        <!-- <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button> -->\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <ion-list *ngIf=\"segment === 'Processing'\">\n    <ion-row *ngFor=\"let meal of listOfOrderProcessing\" class=\"ion-padding meal-row\">\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName}}\n          <p>{{ meal.DateTime|date:'short' }}</p>\n          <ion-button style=\"margin-top: -7px;\" (click)=\"location(meal.Location)\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n          </ion-button>\n        </ion-label>\n        <ion-text color=\"dark\"><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-text><br>\n        <ion-text style=\"font-weight: bold;\">{{meal.Driver}} is picking up your order </ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label style=\"color: #f8f9fa;\n                       background-color: #17a2b8;\n                       border-radius: 5px;\n                       text-align: center;\">{{meal.OrderStatus}}</ion-label>\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n        <button style=\"\n        background-color: #2185d0;\n        border-color: #2185d0;\n        color: #fff;\n        border-radius: 0.28571429rem;\n        margin: .25rem .5rem .25rem 0;\n      \" (click)=\"sendMessage(meal.DriverId,meal.CustomerId,meal.Driver)\">\n          Send message\n        </button>\n        <button style=\"border-radius: 12px;\" (click)=\"callToDriver(meal.driverPhonenumber)\">\n          <ion-icon name=\"call\"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <ion-list *ngIf=\"segment === 'Completed'\">\n    <ion-row *ngFor=\"let meal of listOfOrderCompeleted\" class=\"ion-padding meal-row\">\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName}}\n          <p>{{ meal.DateTime|date:'short' }}</p>\n          <ion-button style=\"margin-top: -7px;\" (click)=\"location(meal.Location)\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n          </ion-button>\n        </ion-label>\n        <ion-text color=\"dark\"><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label style=\"color: #f8f9fa;\n                         background-color: #17a2b8;\n                         border-radius: 5px;\n                         text-align: center;\">{{meal.OrderStatus}}</ion-label>\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <ion-list *ngIf=\"segment === 'Cancelled'\">\n    <ion-row *ngFor=\"let meal of listOfOrderCancelled\" class=\"ion-padding meal-row\">\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName}}\n          <p>{{ meal.DateTime|date:'short'}}</p>\n          <ion-button style=\"margin-top: -7px;\" (click)=\"location(meal.Location)\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n          </ion-button>\n        </ion-label>\n        <ion-text color=\"dark\"><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label style=\"color: #f8f9fa;\n                           background-color: #17a2b8;\n                           border-radius: 5px;\n                           text-align: center;\">{{meal.OrderStatus}}</ion-label>\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"pageScroller()\">\n      <ion-icon md=\"chevron-up-outline\" ios=\"chevron-up-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "uX05":
    /*!*************************************!*\
      !*** ./src/app/order/order.page.ts ***!
      \*************************************/

    /*! exports provided: OrderPage */

    /***/
    function uX05(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPage", function () {
        return OrderPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order.page.html */
      "u6Jy");
      /* harmony import */


      var _order_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order.page.scss */
      "wIiX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Service_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Service/account.service */
      "6wYF");
      /* harmony import */


      var _Service_food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/food.service */
      "Dkj+");
      /* harmony import */


      var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/order-detail.service */
      "8D9V");
      /* harmony import */


      var _Service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../Service/order.service */
      "VNSQ");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../Service/restaurant.service */
      "+cje");
      /* harmony import */


      var _customer_option_customer_option_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../customer-option/customer-option.page */
      "YHxn");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");

      var OrderPage = /*#__PURE__*/function () {
        function OrderPage(foodService, orderService, accountService, orderDetailsService, router, sharedService, alertCtrl, restaurantService, modalController, callNumber // private _Activatedroute:ActivatedRoute,
        ) {
          var _this = this;

          _classCallCheck(this, OrderPage);

          this.foodService = foodService;
          this.orderService = orderService;
          this.accountService = accountService;
          this.orderDetailsService = orderDetailsService;
          this.router = router;
          this.sharedService = sharedService;
          this.alertCtrl = alertCtrl;
          this.restaurantService = restaurantService;
          this.modalController = modalController;
          this.callNumber = callNumber;
          this.listOfOrder = [];
          this.cart = [];
          this.opts = {
            freeMode: true,
            slidesPerView: 4.6,
            slidesOffsetBefore: 100,
            slidesOffsetAfter: 100
          };
          this.activeCategory = 0;
          this.segment = "All";
          this.listOfOrderProcessing = [];
          this.listOfOrderCompeleted = [];
          this.listOfOrderCancelled = [];
          this.isLoading = false;
          this.showLocationDetail = false;
          this.restaurantService.getAllRestaurant().subscribe(function (res) {
            _this.listOfRestaurant = res;
          });
        }

        _createClass(OrderPage, [{
          key: "pageScroller",
          value: function pageScroller() {
            this.pageTop.scrollToTop();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.id = this._Activatedroute.snapshot.paramMap.get("id");
            this.getRestaurant();
            this.getFood();
            this.getOrder();
            this.getOrderDetails();
            this.getProcessingOrder();
            this.getCompeletedOrder();
            this.getCancelledOrder(); //this.lp = new LocationPicker('map');
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant() {
            var _this2 = this;

            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              _this2.listOfRestaurant = res;
            });
          }
        }, {
          key: "getFood",
          value: function getFood() {
            var _this3 = this;

            this.foodService.getAllFood().subscribe(function (res) {
              _this3.listOfFood = res;
            });
          }
        }, {
          key: "getOrderDetails",
          value: function getOrderDetails() {
            var _this4 = this;

            this.orderDetailsService.getAllOrderDetail().subscribe(function (res) {
              _this4.listOfOrderDetails = res;
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll(ev) {
            var offset = ev.detail.scrollTop;
            this.showLocationDetail = offset > 40;
          }
        }, {
          key: "getOrder",
          value: function getOrder() {
            var _this5 = this;

            this.listOfOrder = [];
            this.orderService.getAllOrder().subscribe(function (res) {
              _this5.UserId = localStorage.getItem('userId');
              var result = res.filter(function (c) {
                return c.customer === _this5.UserId;
              });

              if (result.length > 0 && _this5.listOfRestaurant != undefined) {
                result.forEach(function (element) {
                  _this5.accountService.getAllAccount().subscribe(function (result) {
                    _this5.getStatusOfOrder(element);

                    var resName = _this5.listOfRestaurant.find(function (c) {
                      return c.id === +element.restaurantId;
                    });

                    var data = {
                      id: element.id,
                      DateTime: element.dateTime,
                      Customer: result.find(function (c) {
                        return c.id === +element.customer;
                      }).fullName,
                      Location: element.location,
                      OrderStatus: _this5.orderStatuses,
                      Total: element.total,
                      Driver: element.driver,
                      Vehicle: element.vehicle,
                      orderNo: element.orderNo,
                      orderLocation: element.orderLocation,
                      restaurantName: resName.name
                    };

                    _this5.listOfOrder.push(data);

                    console.log(_this5.listOfOrder.length);

                    _this5.listOfOrder.sort(function (a, b) {
                      return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                    }); // this.viewOrder(element.id)

                  });
                });
              } else {
                _this5.refresh();

                _this5.massge = true;
                _this5.messageOrder = 'Preparing your order ...';
              }
            });
          }
        }, {
          key: "getProcessingOrder",
          value: function getProcessingOrder() {
            var _this6 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this6.listOfOrderProcessing = [];
              _this6.UserId = localStorage.getItem("userId");
              var order = res.filter(function (c) {
                return c.orderStatuses.find(function (c) {
                  return c.isChecked == false && c.val == "delivered";
                }) && c.customer == _this6.UserId;
              });

              if (order.length > 0 && _this6.listOfRestaurant != undefined) {
                order.forEach(function (element) {
                  if (element.driver !== "") {
                    _this6.accountService.getAllAccount().subscribe(function (result) {
                      var customerName = result.find(function (c) {
                        return c.id == element.customer;
                      });
                      var driver = result.find(function (c) {
                        return c.id == element.driver;
                      });

                      _this6.getStatusOfOrder(element);

                      if (driver) {
                        _this6.driverPhone = driver.phonenumber;
                        _this6.driverName = driver.fullName;
                      } else {
                        _this6.driverPhone = "";
                        _this6.driverName = "";
                      }

                      var data = {
                        id: element.id,
                        DateTime: element.dateTime,
                        Customer: customerName.fullName,
                        Location: element.location,
                        OrderStatus: _this6.orderStatuses,
                        driverPhonenumber: _this6.driverPhone,
                        Total: element.total,
                        Driver: _this6.driverName,
                        DriverId: element.driver,
                        CustomerId: element.customer,
                        Vehicle: element.vehicle,
                        orderLocation: element.orderLocation,
                        restaurantName: _this6.listOfRestaurant.find(function (c) {
                          return c.id === +element.restaurantId;
                        }).name
                      };

                      _this6.listOfOrderProcessing.push(data);

                      console.log(_this6.listOfOrderProcessing.length);

                      _this6.listOfOrderProcessing.sort(function (a, b) {
                        return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                      });
                    });
                  }
                });
              } else {
                _this6.refreshProcessingTask();

                _this6.massge = true;
                _this6.messageOrder = "Preparing your order ...";
              }
            });
          }
        }, {
          key: "getCompeletedOrder",
          value: function getCompeletedOrder() {
            var _this7 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this7.listOfOrderCompeleted = [];
              _this7.UserId = localStorage.getItem("userId");
              var order = res.filter(function (c) {
                return c.orderStatuses.find(function (c) {
                  return c.isChecked == true && c.val == "delivered";
                }) && c.customer == _this7.UserId;
              });

              if (order.length > 0 && _this7.listOfRestaurant != undefined) {
                order.forEach(function (element) {
                  _this7.accountService.getAllAccount().subscribe(function (result) {
                    var data = {
                      id: element.id,
                      DateTime: element.dateTime,
                      Customer: result.find(function (c) {
                        return c.id == element.customer;
                      }).fullName,
                      Location: element.location,
                      OrderStatus: "Completed",
                      Total: element.total,
                      Driver: element.driver,
                      Vehicle: element.vehicle,
                      orderLocation: element.orderLocation,
                      restaurantName: _this7.listOfRestaurant.find(function (c) {
                        return c.id === +element.restaurantId;
                      }).name
                    };

                    _this7.listOfOrderCompeleted.push(data);

                    console.log(_this7.listOfOrderCompeleted.length);

                    _this7.listOfOrderCompeleted.sort(function (a, b) {
                      return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                    });

                    console.log(_this7.listOfOrderCompeleted);
                  });
                });
              } else {
                _this7.refreshCompleteTask();

                _this7.massge = true;
                _this7.messageOrder = "Preparing your order ...";
              }
            });
          }
        }, {
          key: "getCancelledOrder",
          value: function getCancelledOrder() {
            var _this8 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this8.listOfOrderCancelled = [];
              _this8.UserId = localStorage.getItem("userId");
              var order = res.filter(function (c) {
                return c.customerStatus == "false" && c.customer == _this8.UserId;
              });

              if (order.length > 0 && _this8.listOfRestaurant != undefined) {
                order.forEach(function (element) {
                  _this8.accountService.getAllAccount().subscribe(function (result) {
                    var data = {
                      id: element.id,
                      DateTime: element.dateTime,
                      Customer: result.find(function (c) {
                        return c.id == element.customer;
                      }).fullName,
                      Location: element.location,
                      OrderStatus: "Cancelled",
                      Total: element.total,
                      Driver: element.driver,
                      Vehicle: element.vehicle,
                      orderLocation: element.orderLocation,
                      restaurantName: _this8.listOfRestaurant.find(function (c) {
                        return c.id === +element.restaurantId;
                      }).name
                    };

                    _this8.listOfOrderCancelled.push(data);

                    console.log(_this8.listOfOrderCancelled.length);

                    _this8.listOfOrderCancelled.sort(function (a, b) {
                      return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                    });

                    console.log(_this8.listOfOrderCancelled);
                  });
                });
              } else {
                _this8.refreshCancelTask();

                _this8.massge = true;
                _this8.messageOrder = "Preparing your order ...";
              }
            });
          }
        }, {
          key: "getStatusOfOrder",
          value: function getStatusOfOrder(element) {
            this.a = 0;

            for (var i = 0; i < element.orderStatuses.length; i++) {
              if (element.orderStatuses[i].isChecked == false) {
                this.a = this.a + 1;
              } else {
                this.orderStatuses = element.orderStatuses[i].val;
              }
            }

            if (this.a == 3) {
              for (var _i = 0; _i < element.restaurantStatuses.length; _i++) {
                if (element.restaurantStatuses[_i].isChecked == true) {
                  this.orderStatuses = element.restaurantStatuses[_i].val;
                }
              }
            }
          }
        }, {
          key: "viewOrder",
          value: function viewOrder(id) {
            var _this9 = this;

            this.isLoading = false;
            this.countItems = 0;
            this.cart = []; // let orderNo = this.listOfOrder.find(c => c.id == id).orderNo;

            var orderDetails = this.listOfOrderDetails.filter(function (c) {
              return c.orderId == id;
            });
            orderDetails.forEach(function (el) {
              var data = {
                CookingTime: _this9.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).cookingTime,
                DeliveryTime: _this9.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).deliveryTime,
                Description: _this9.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).description,
                Name: _this9.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).name,
                Price: _this9.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).price,
                amount: el.qty,
                categoryId: _this9.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).categoryId,
                id: el.foodId,
                picture: _this9.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).picture,
                restaurantId: _this9.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).restaurantId,
                type: _this9.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).type,
                orderDetailsId: el.id,
                orderStatus: true
              };

              _this9.cart.push(data);

              _this9.countItems = _this9.cart.length;
              console.log(_this9.countItems);
            });
            this.orderService.addOrder(this.cart);
            this.router.navigate(["/menu/order-history"]);
          }
        }, {
          key: "location",
          value: function location(_location) {
            this.isLoading = false;
            this.sharedService.status.next("order");
            this.sharedService.RestaurantLocation.next(_location);
            this.router.navigate(["/menu/location"]);
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            this.segment = ev.detail.value;
          }
        }, {
          key: "allOrder",
          value: function allOrder(item, id) {
            this.isLoading = true;
            this.modalController.create({
              component: _customer_option_customer_option_page__WEBPACK_IMPORTED_MODULE_12__["CustomerOptionPage"],
              cssClass: 'customerOptions',
              componentProps: {
                data: item,
                id: id
              }
            }).then(function (modelElement) {
              modelElement.present();
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(driverId, customerId, driverName) {
            this.sharedService.driverName.next(driverName);
            this.sharedService.deriverId.next(driverId);
            this.sharedService.customerId.next(customerId);
            this.router.navigate(["/message"]);
          }
        }, {
          key: "callToDriver",
          value: function callToDriver(phonenumber) {
            this.callNumber.callNumber(phonenumber, true).then(function (res) {
              return console.log('Launched dialer!', res);
            })["catch"](function (err) {
              return console.log('Error launching dialer', err);
            });
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var _this10 = this;

            setTimeout(function () {
              _this10.getOrder();
            });
          }
        }, {
          key: "refreshProcessingTask",
          value: function refreshProcessingTask() {
            var _this11 = this;

            setTimeout(function () {
              _this11.getProcessingOrder();
            }, 200);
          }
        }, {
          key: "refreshCompleteTask",
          value: function refreshCompleteTask() {
            var _this12 = this;

            setTimeout(function () {
              _this12.getCompeletedOrder();
            }, 200);
          }
        }, {
          key: "refreshCancelTask",
          value: function refreshCancelTask() {
            var _this13 = this;

            setTimeout(function () {
              _this13.getCancelledOrder();
            }, 200);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this14 = this;

            setTimeout(function () {
              _this14.getOrder(); // this.getOrderDetails();


              _this14.getProcessingOrder();

              _this14.getCompeletedOrder();

              _this14.getCancelledOrder();

              event.target.complete();
            }, 2000);
          }
        }]);

        return OrderPage;
      }();

      OrderPage.ctorParameters = function () {
        return [{
          type: _Service_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"]
        }, {
          type: _Service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
        }, {
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
        }, {
          type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_7__["OrderDetailService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]
        }, {
          type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_11__["RestaurantService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__["CallNumber"]
        }];
      };

      OrderPage.propDecorators = {
        pageTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['pageTop']
        }]
      };
      OrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order',
        template: _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderPage);
      /***/
    },

    /***/
    "wIiX":
    /*!***************************************!*\
      !*** ./src/app/order/order.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function wIiX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-icon {\n  font-size: 25px;\n}\n\nion-content {\n  position: absolute;\n  --background:#f8f9fa;\n  --padding-bottom: 50px;\n}\n\nion-content .orders {\n  margin-top: 58px;\n}\n\n.light-bg {\n  background: #ffffff;\n  z-index: 10;\n}\n\n.meal-row {\n  padding-bottom: 0px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--ion-color-step-150, rgba(0, 0, 0, 0.07));\n}\n\n#map {\n  width: 60%;\n  height: 280px;\n}\n\n.message {\n  padding-top: 83px;\n  padding-left: 12px;\n  color: #337ab7;\n  font-size: 27px;\n}\n\nion-slides {\n  padding-right: 0px;\n  margin-top: 34px;\n  margin-bottom: -34px;\n  background: #e9ecef;\n  top: calc(env(safe-area-inset-top) - 34px);\n}\n\n.sticky-row {\n  position: sticky;\n  top: calc(env(safe-area-inset-top) - -55px);\n  z-index: 2;\n  background: #e9ecef;\n  box-shadow: 0px 9px 11px -15px rgba(0, 0, 0, 0.75);\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGVBQWU7QUFEbkI7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQWE7RUFDYixzQkFBaUI7QUFEbkI7O0FBRkE7RUFLTSxnQkFBZ0I7QUFDdEI7O0FBRUE7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVztBQUNmOztBQUNBO0VBQ0UsbUJBQW1CO0FBRXJCOztBQUFBO0VBQ0UsdUVBQXVFO0FBR3pFOztBQURBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFJZjs7QUFGQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7QUFLakI7O0FBSEE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsMENBQTBDO0FBTTVDOztBQUpFO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtEQUFrRDtFQUNsRCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQU96QiIsImZpbGUiOiJvcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRvb2xiYXIge1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAtLWJhY2tncm91bmQ6I2Y4ZjlmYTtcclxuICAtLXBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgLm9yZGVyc3tcclxuICAgICAgbWFyZ2luLXRvcDogNThweDtcclxuICAgIH1cclxuICB9XHJcbi5saWdodC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuLm1lYWwtcm93IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi5ib3JkZXItYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCByZ2JhKDAsIDAsIDAsIDAuMDcpKTtcclxufVxyXG4jbWFwIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbn1cclxuLm1lc3NhZ2V7XHJcbiAgcGFkZGluZy10b3A6IDgzcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIGNvbG9yOiAjMzM3YWI3O1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxufVxyXG5pb24tc2xpZGVzIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzRweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMzRweDtcclxuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgLSAzNHB4KTtcclxuICB9XHJcbiAgLnN0aWNreS1yb3cge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgLSAtNTVweCk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA5cHggMTFweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgfSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-order-module-es5.js.map