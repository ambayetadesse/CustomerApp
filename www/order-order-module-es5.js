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


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "q3Kh");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularfire2/firestore */
      "CqG3");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/bad-input */
      "XEKg");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/not-found-error */
      "5Jak");
      /* harmony import */


      var _common_app_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/app-error */
      "/GcI");

      var RestaurantService = /*#__PURE__*/function () {
        function RestaurantService(db) {
          _classCallCheck(this, RestaurantService);

          this.db = db;
          this.restaurantCollectionList = db.collection('Restaurant');
        }

        _createClass(RestaurantService, [{
          key: "create",
          value: function create(restaurantObj) {
            return this.restaurantCollectionList.add(restaurantObj);
          }
        }, {
          key: "getAllRestaurant",
          value: function getAllRestaurant() {
            this.restaurantList = this.restaurantCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.restaurantList;
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant(id) {
            return this.restaurantCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateRestaurant",
          value: function updateRestaurant(restaurantObj, id) {
            return this.restaurantCollectionList.doc(id).update(restaurantObj)["catch"](this.handleError);
          }
        }, {
          key: "removeRestaurant",
          value: function removeRestaurant(id) {
            return this.restaurantCollectionList.doc(id)["delete"]()["catch"](this.handleError);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_7__["AppError"](error));
          }
        }]);

        return RestaurantService;
      }();

      RestaurantService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
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


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Recent orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-segment style=\"padding-top: 70px;\" (ionChange)=\"segmentChanged($event)\" scrollable value=\"All\">\n    <ion-segment-button value=\"All\">\n      <ion-label>\n        All\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Processing\">\n      <ion-label>\n        Processing\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Completed\">\n      <ion-label>\n        Completed\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Cancelled\">\n      <ion-label>\n        Cancelled\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-list *ngIf=\"segment === 'All'\">\n    <ion-row *ngFor=\"let meal of listOfOrder\" class=\"ion-padding meal-row\" (click)=\"allOrder(meal,meal.id)\">\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName}}\n          <p>{{ meal.DateTime|date:'short' }}</p>\n          <!-- <ion-button style=\"margin-top: -7px;\" (click)=\"location(meal.Location)\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n          </ion-button> -->\n        </ion-label>\n        <ion-text color=\"dark\"><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label style=\"color: #f8f9fa;\n                    background-color: #17a2b8;\n                    border-radius: 5px;\n                    text-align: center;\">{{meal.OrderStatus}}</ion-label>\n        <!-- <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button> -->\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <ion-list *ngIf=\"segment === 'Processing'\">\n    <ion-row *ngFor=\"let meal of listOfOrderProcessing\" class=\"ion-padding meal-row\">\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName}}\n          <p>{{ meal.DateTime|date:'short' }}</p>\n          <ion-button style=\"margin-top: -7px;\" (click)=\"location(meal.Location)\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n          </ion-button>\n        </ion-label>\n        <ion-text color=\"dark\"><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-text><br>\n        <ion-text style=\"font-weight: bold;\">{{meal.Driver}} is picking up your order </ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label style=\"color: #f8f9fa;\n                       background-color: #17a2b8;\n                       border-radius: 5px;\n                       text-align: center;\">{{meal.OrderStatus}}</ion-label>\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n        <button style=\"\n        background-color: #2185d0;\n        border-color: #2185d0;\n        color: #fff;\n        border-radius: 0.28571429rem;\n        margin: .25rem .5rem .25rem 0;\n      \" (click)=\"sendMessage(meal.DriverId,meal.CustomerId,meal.Driver)\">\n          Send message\n        </button>\n        <button style=\"border-radius: 12px;\" (click)=\"callToDriver(meal.driverPhonenumber)\">\n          <ion-icon name=\"call\"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <ion-list *ngIf=\"segment === 'Completed'\">\n    <ion-row *ngFor=\"let meal of listOfOrderCompeleted\" class=\"ion-padding meal-row\">\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName}}\n          <p>{{ meal.DateTime|date:'short' }}</p>\n          <ion-button style=\"margin-top: -7px;\" (click)=\"location(meal.Location)\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n          </ion-button>\n        </ion-label>\n        <ion-text color=\"dark\"><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label style=\"color: #f8f9fa;\n                         background-color: #17a2b8;\n                         border-radius: 5px;\n                         text-align: center;\">{{meal.OrderStatus}}</ion-label>\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <ion-list *ngIf=\"segment === 'Cancelled'\">\n    <ion-row *ngFor=\"let meal of listOfOrderCancelled\" class=\"ion-padding meal-row\">\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName}}\n          <p>{{ meal.DateTime|date:'short'}}</p>\n          <ion-button style=\"margin-top: -7px;\" (click)=\"location(meal.Location)\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n          </ion-button>\n        </ion-label>\n        <ion-text color=\"dark\"><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label style=\"color: #f8f9fa;\n                           background-color: #17a2b8;\n                           border-radius: 5px;\n                           text-align: center;\">{{meal.OrderStatus}}</ion-label>\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>";
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
          this.accountService.getAllAccount().subscribe(function (result) {
            _this.listOfAccount = result;
          });
          this.restaurantService.getAllRestaurant().subscribe(function (res) {
            _this.listOfRestaurant = res;
          });
        }

        _createClass(OrderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.id = this._Activatedroute.snapshot.paramMap.get("id");
            this.getFood();
            this.getOrder();
            this.getOrderDetails();
            this.getProcessingOrder();
            this.getCompeletedOrder();
            this.getCancelledOrder(); //this.lp = new LocationPicker('map');
          }
        }, {
          key: "getFood",
          value: function getFood() {
            var _this2 = this;

            this.foodService.getAllFood().subscribe(function (res) {
              _this2.listOfFood = res;
            });
          }
        }, {
          key: "getOrderDetails",
          value: function getOrderDetails() {
            var _this3 = this;

            this.orderDetailsService.getAllOrderDetail().subscribe(function (res) {
              _this3.listOfOrderDetails = res;
            });
          }
        }, {
          key: "getOrder",
          value: function getOrder() {
            var _this4 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this4.listOfOrder = [];
              _this4.UserId = localStorage.getItem("userId");
              var result = res.filter(function (c) {
                return c.Customer == _this4.UserId;
              });

              if (result.length > 0) {
                result.forEach(function (element) {
                  for (var i = 0; i < element.OrderStatus.length; i++) {
                    if (element.OrderStatus[i].checked == true) {
                      _this4.orderStatus = element.OrderStatus[i].val;
                    }
                  }

                  var data = {
                    id: element.id,
                    DateTime: element.DateTime,
                    Customer: _this4.listOfAccount.find(function (c) {
                      return c.id == element.Customer;
                    }).FullName,
                    Location: element.Location,
                    OrderStatus: _this4.orderStatus,
                    Total: element.Total,
                    Driver: element.Driver,
                    Vehicle: element.Vehicle,
                    orderNo: element.orderNo,
                    orderLocation: element.orderLocation,
                    restaurantName: _this4.listOfRestaurant.find(function (c) {
                      return c.accountId == element.RestaurantId;
                    }).Name
                  };

                  _this4.listOfOrder.push(data);

                  _this4.listOfOrder.sort(function (a, b) {
                    return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                  }); //this.viewOrder(element.id)

                });
              } else {
                _this4.massge = true;
                _this4.messageOrder = "Preparing your order ...";
              }
            });
          }
        }, {
          key: "getProcessingOrder",
          value: function getProcessingOrder() {
            var _this5 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this5.listOfOrderProcessing = [];
              _this5.UserId = localStorage.getItem("userId");
              var order = res.filter(function (c) {
                return c.OrderStatus.find(function (c) {
                  return c.checked == false && c.val == "delivered";
                }) && c.Customer == _this5.UserId;
              });

              if (order.length > 0) {
                order.forEach(function (element) {
                  if (element.Driver !== "") {
                    _this5.accountService.getAllAccount().subscribe(function (result) {
                      var customerName = result.find(function (c) {
                        return c.id == element.Customer;
                      });
                      var driver = result.find(function (c) {
                        return c.id == element.Driver;
                      });
                      var data = {
                        id: element.id,
                        DateTime: element.DateTime,
                        Customer: customerName.FullName,
                        Location: element.Location,
                        OrderStatus: "pending..",
                        driverPhonenumber: driver.phonenumber,
                        Total: element.Total,
                        Driver: driver.FullName,
                        DriverId: element.Driver,
                        CustomerId: element.Customer,
                        Vehicle: element.Vehicle,
                        orderNo: element.orderNo,
                        orderLocation: element.orderLocation,
                        restaurantName: _this5.listOfRestaurant.find(function (c) {
                          return c.accountId == element.RestaurantId;
                        }).Name
                      };

                      _this5.listOfOrderProcessing.push(data);

                      _this5.listOfOrderProcessing.sort(function (a, b) {
                        return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                      });
                    });
                  }
                });
              } else {
                _this5.massge = true;
                _this5.messageOrder = "Preparing your order ...";
              }
            });
          }
        }, {
          key: "getCompeletedOrder",
          value: function getCompeletedOrder() {
            var _this6 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this6.listOfOrderCompeleted = [];
              _this6.UserId = localStorage.getItem("userId");
              var order = res.filter(function (c) {
                return c.OrderStatus.find(function (c) {
                  return c.checked == true && c.val == "delivered";
                }) && c.Customer == _this6.UserId;
              });

              if (order.length > 0) {
                order.forEach(function (element) {
                  _this6.accountService.getAllAccount().subscribe(function (result) {
                    var data = {
                      id: element.id,
                      DateTime: element.DateTime,
                      Customer: result.find(function (c) {
                        return c.id == element.Customer;
                      }).FullName,
                      Location: element.Location,
                      OrderStatus: "Completed",
                      Total: element.Total,
                      Driver: element.Driver,
                      Vehicle: element.Vehicle,
                      orderNo: element.orderNo,
                      orderLocation: element.orderLocation,
                      restaurantName: _this6.listOfRestaurant.find(function (c) {
                        return c.accountId == element.RestaurantId;
                      }).Name
                    };

                    _this6.listOfOrderCompeleted.push(data);

                    _this6.listOfOrderCompeleted.sort(function (a, b) {
                      return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                    });

                    console.log(_this6.listOfOrderCompeleted);
                  });
                });
              } else {
                _this6.massge = true;
                _this6.messageOrder = "Preparing your order ...";
              }
            });
          }
        }, {
          key: "getCancelledOrder",
          value: function getCancelledOrder() {
            var _this7 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this7.listOfOrderCancelled = [];
              _this7.UserId = localStorage.getItem("userId");
              var order = res.filter(function (c) {
                return c.customerStatus == false && c.Customer == _this7.UserId;
              });

              if (order.length > 0) {
                order.forEach(function (element) {
                  _this7.accountService.getAllAccount().subscribe(function (result) {
                    var data = {
                      id: element.id,
                      DateTime: element.DateTime,
                      Customer: result.find(function (c) {
                        return c.id == element.Customer;
                      }).FullName,
                      Location: element.Location,
                      OrderStatus: "Cancelled",
                      Total: element.Total,
                      Driver: element.Driver,
                      Vehicle: element.Vehicle,
                      orderNo: element.orderNo,
                      orderLocation: element.orderLocation,
                      restaurantName: _this7.listOfRestaurant.find(function (c) {
                        return c.accountId == element.RestaurantId;
                      }).Name
                    };

                    _this7.listOfOrderCancelled.push(data);

                    _this7.listOfOrderCancelled.sort(function (a, b) {
                      return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                    });

                    console.log(_this7.listOfOrderCancelled);
                  });
                });
              } else {
                _this7.massge = true;
                _this7.messageOrder = "Preparing your order ...";
              }
            });
          }
        }, {
          key: "viewOrder",
          value: function viewOrder(id) {
            var _this8 = this;

            this.isLoading = false;
            this.countItems = 0;
            this.cart = [];
            var orderNo = this.listOfOrder.find(function (c) {
              return c.id == id;
            }).orderNo;
            var orderDetails = this.listOfOrderDetails.filter(function (c) {
              return c.OrderId == orderNo;
            });
            orderDetails.forEach(function (el) {
              var data = {
                CookingTime: _this8.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).CookingTime,
                DeliveryTime: _this8.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).DeliveryTime,
                Description: _this8.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).Description,
                Name: _this8.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).Name,
                Price: _this8.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).Price,
                amount: el.Qty,
                categoryId: _this8.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).categoryId,
                id: el.Food,
                picture: _this8.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).picture,
                restaurantId: _this8.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).restaurantId,
                type: _this8.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).type,
                orderDetailsId: el.id,
                orderStatus: true
              };

              _this8.cart.push(data);

              _this8.countItems = _this8.cart.length;
              console.log(_this8.countItems);
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


      __webpack_exports__["default"] = "ion-toolbar ion-icon {\n  font-size: 25px;\n}\n\nion-content {\n  position: absolute;\n  --background:#f8f9fa;\n  --padding-bottom: 50px;\n}\n\nion-content .orders {\n  margin-top: 58px;\n}\n\n.light-bg {\n  background: #ffffff;\n  z-index: 10;\n}\n\n.meal-row {\n  padding-bottom: 0px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--ion-color-step-150, rgba(0, 0, 0, 0.07));\n}\n\n#map {\n  width: 60%;\n  height: 280px;\n}\n\n.message {\n  padding-top: 83px;\n  padding-left: 12px;\n  color: #337ab7;\n  font-size: 27px;\n}\n\nion-slides {\n  padding-right: 0px;\n  margin-top: 34px;\n  margin-bottom: -34px;\n  background: #e9ecef;\n  top: calc(env(safe-area-inset-top) - 34px);\n}\n\n.sticky-row {\n  position: sticky;\n  top: calc(env(safe-area-inset-top) - -55px);\n  z-index: 2;\n  background: #e9ecef;\n  box-shadow: 0px 9px 11px -15px rgba(0, 0, 0, 0.75);\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGVBQUE7QUFESjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQURGOztBQUVJO0VBQ0UsZ0JBQUE7QUFBTjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLHVFQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBS0Y7O0FBSEU7RUFDRSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQU1KIiwiZmlsZSI6Im9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tdG9vbGJhciB7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC0tYmFja2dyb3VuZDojZjhmOWZhO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAub3JkZXJze1xyXG4gICAgICBtYXJnaW4tdG9wOiA1OHB4O1xyXG4gICAgfVxyXG4gIH1cclxuLmxpZ2h0LWJnIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4ubWVhbC1yb3cge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLmJvcmRlci1ib3R0b20ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHJnYmEoMCwgMCwgMCwgMC4wNykpO1xyXG59XHJcbiNtYXAge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxufVxyXG4ubWVzc2FnZXtcclxuICBwYWRkaW5nLXRvcDogODNweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgY29sb3I6ICMzMzdhYjc7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAzNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0zNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtIDM0cHgpO1xyXG4gIH1cclxuICAuc3RpY2t5LXJvdyB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtIC01NXB4KTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDlweCAxMXB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICB9Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-order-module-es5.js.map