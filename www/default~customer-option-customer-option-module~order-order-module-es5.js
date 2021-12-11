(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~customer-option-customer-option-module~order-order-module"], {
    /***/
    "8D9V":
    /*!*************************************************!*\
      !*** ./src/app/Service/order-detail.service.ts ***!
      \*************************************************/

    /*! exports provided: OrderDetailService */

    /***/
    function D9V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailService", function () {
        return OrderDetailService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _common_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/app-error */
      "/GcI");
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/bad-input */
      "XEKg");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/not-found-error */
      "5Jak");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var OrderDetailService = /*#__PURE__*/function () {
        function OrderDetailService(http) {
          _classCallCheck(this, OrderDetailService);

          this.http = http;
          this.APIURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].apiURL;
        }

        _createClass(OrderDetailService, [{
          key: "create",
          value: function create(val) {
            return this.http.post(this.APIURL + '/orderdetail', val);
          }
        }, {
          key: "getAllOrderDetail",
          value: function getAllOrderDetail() {
            return this.http.get(this.APIURL + '/orderdetail');
          }
        }, {
          key: "updateOrderDetail",
          value: function updateOrderDetail(val) {
            return this.http.put(this.APIURL + '/orderdetail/', val);
          }
        }, {
          key: "removeOrderDetail",
          value: function removeOrderDetail(id) {
            return this.http["delete"](this.APIURL + '/orderdetail/' + id).toPromise();
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) {
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
            }

            if (error.status === 404) {
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
            }

            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_4__["AppError"](error));
          }
        }]);

        return OrderDetailService;
      }();

      OrderDetailService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      OrderDetailService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], OrderDetailService);
      /***/
    },

    /***/
    "Dkj+":
    /*!*****************************************!*\
      !*** ./src/app/Service/food.service.ts ***!
      \*****************************************/

    /*! exports provided: FoodService */

    /***/
    function Dkj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodService", function () {
        return FoodService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/app-error */
      "/GcI");
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/bad-input */
      "XEKg");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/not-found-error */
      "5Jak");

      var FoodService = /*#__PURE__*/function () {
        function FoodService(http) {
          _classCallCheck(this, FoodService);

          this.http = http;
          this.APIURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;
        }

        _createClass(FoodService, [{
          key: "create",
          value: function create(val) {
            return this.http.post(this.APIURL + '/food', val);
          }
        }, {
          key: "getAllFood",
          value: function getAllFood() {
            return this.http.get(this.APIURL + '/food');
          }
        }, {
          key: "updateFood",
          value: function updateFood(val) {
            return this.http.put(this.APIURL + '/food/', val);
          }
        }, {
          key: "removeFood",
          value: function removeFood(id) {
            return this.http["delete"](this.APIURL + '/food/' + id).toPromise();
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) {
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
            }

            if (error.status === 404) {
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
            }

            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }
        }]);

        return FoodService;
      }();

      FoodService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      FoodService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], FoodService);
      /***/
    },

    /***/
    "VNSQ":
    /*!******************************************!*\
      !*** ./src/app/Service/order.service.ts ***!
      \******************************************/

    /*! exports provided: OrderService */

    /***/
    function VNSQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderService", function () {
        return OrderService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared.service */
      "ldse");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var OrderService = /*#__PURE__*/function () {
        function OrderService(http, sharedService) {
          _classCallCheck(this, OrderService);

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

        _createClass(OrderService, [{
          key: "create",
          value: function create(val) {
            return this.http.post(this.APIURL + '/order', val);
          }
        }, {
          key: "getAllOrder",
          value: function getAllOrder() {
            return this.http.get(this.APIURL + '/order');
          }
        }, {
          key: "updateOrder",
          value: function updateOrder(val) {
            return this.http.put(this.APIURL + '/order/', val);
          }
        }, {
          key: "removeOrder",
          value: function removeOrder(id) {
            return this.http["delete"](this.APIURL + '/order/' + id).toPromise();
          } // create(orderObj) {
          //   let values = this.orderCollectionList.add(orderObj)
          //     .then((docRef) => {
          //       this.sharedService.orderId.next(docRef.id);
          //     })
          //   return values;
          // }

        }, {
          key: "getOrderBy",
          value: function getOrderBy(id) {
            return this.http.get(this.APIURL + '/order' + id);
          }
        }, {
          key: "getOrderByDriverId",
          value: function getOrderByDriverId(driverId) {
            return this.http.get(this.APIURL + '/order' + driverId);
          }
        }, {
          key: "getCart",
          value: function getCart() {
            return this.cart;
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            return this.order;
          }
        }, {
          key: "getCartItemCount",
          value: function getCartItemCount() {
            return this.cartItemCount;
          }
        }, {
          key: "getOrderItemCount",
          value: function getOrderItemCount() {
            return this.orderItemCount;
          }
        }, {
          key: "getRestaurantId",
          value: function getRestaurantId() {
            return this.RestaurantId;
          }
        }, {
          key: "getOrderStatus",
          value: function getOrderStatus() {
            return this.orderStatus;
          }
        }, {
          key: "addOrder",
          value: function addOrder(items) {
            var _this = this;

            this.order = [];
            this.amount = 0;
            this.order.forEach(function (el) {
              var index = _this.order.indexOf(function (c) {
                return c.orderDetailsId === el.orderDetailsId;
              });

              _this.order.splice(index, 1);
            });
            this.orderItemCount.next(0);
            items.forEach(function (element) {
              _this.amount = _this.amount + element.amount;
              var data = {
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
                orderDetailsId: element.orderDetailsId
              };

              _this.order.push(data);
            });
            this.orderItemCount.next(this.orderItemCount.value + this.amount);
          }
        }, {
          key: "addProduct",
          value: function addProduct(product) {
            var added = false;

            var _iterator = _createForOfIteratorHelper(this.cart),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var p = _step.value;

                if (p.id === product.id) {
                  p.amount += 1;
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
              product.amount = 1;
              this.cart.push(product);
            }

            this.cartItemCount.next(this.cartItemCount.value + 1);
          }
        }, {
          key: "decreaseProduct",
          value: function decreaseProduct(product) {
            var _iterator2 = _createForOfIteratorHelper(this.cart.entries()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                    index = _step2$value[0],
                    p = _step2$value[1];

                if (p.id === product.id) {
                  p.amount -= 1;

                  if (p.amount === 0) {
                    this.cart.splice(index, 1);
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.cartItemCount.next(this.cartItemCount.value - 1);
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(product) {
            var _iterator3 = _createForOfIteratorHelper(this.cart.entries()),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _step3$value = _slicedToArray(_step3.value, 2),
                    index = _step3$value[0],
                    p = _step3$value[1];

                if (p.id === product.id) {
                  this.cartItemCount.next(this.cartItemCount.value - p.amount);
                  this.cart.splice(index, 1);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }]);

        return OrderService;
      }();

      OrderService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }];
      };

      OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], OrderService);
      /***/
    },

    /***/
    "YHxn":
    /*!*********************************************************!*\
      !*** ./src/app/customer-option/customer-option.page.ts ***!
      \*********************************************************/

    /*! exports provided: CustomerOptionPage */

    /***/
    function YHxn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerOptionPage", function () {
        return CustomerOptionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_customer_option_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./customer-option.page.html */
      "ZFaY");
      /* harmony import */


      var _customer_option_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./customer-option.page.scss */
      "gW5g");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
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

      var CustomerOptionPage = /*#__PURE__*/function () {
        function CustomerOptionPage(modalControler, orderService, foodService, orderDetailsService, router) {
          _classCallCheck(this, CustomerOptionPage);

          this.modalControler = modalControler;
          this.orderService = orderService;
          this.foodService = foodService;
          this.orderDetailsService = orderDetailsService;
          this.router = router;
        }

        _createClass(CustomerOptionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this2.listOfOrder = res;
            });
            this.getFood();
            this.getOrderDetails();
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
          key: "reOrder",
          value: function reOrder() {}
        }, {
          key: "CancelOrder",
          value: function CancelOrder() {
            var _this5 = this;

            var order = this.listOfOrder.find(function (c) {
              return c.id == _this5.data.id;
            });
            var data = {
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
            this.orderService.updateOrder(data).subscribe(function (res) {
              alert(res.toString());
            });
          }
        }, {
          key: "viewOrder",
          value: function viewOrder(id) {
            var _this6 = this;

            this.isLoading = false;
            this.countItems = 0;
            this.cart = []; // let orderNo = this.listOfOrder.find(c => c.id == id).orderNo;

            var orderDetails = this.listOfOrderDetails.filter(function (c) {
              return c.orderId == id;
            });
            orderDetails.forEach(function (el) {
              var data = {
                CookingTime: _this6.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).cookingTime,
                DeliveryTime: _this6.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).deliveryTime,
                Description: _this6.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).description,
                Name: _this6.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).name,
                Price: _this6.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).price,
                amount: el.qty,
                categoryId: _this6.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).categoryId,
                id: el.foodId,
                picture: _this6.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).picture,
                restaurantId: _this6.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).restaurantId,
                type: _this6.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).type,
                orderDetailsId: el.id,
                orderStatus: true
              };

              _this6.cart.push(data);

              _this6.countItems = _this6.cart.length;
              console.log(_this6.countItems);
            });
            this.orderService.addOrder(this.cart);
            this.router.navigate(["/menu/order-history"]);
            this.modalControler.dismiss();
          }
        }, {
          key: "close",
          value: function close() {
            this.modalControler.dismiss();
          }
        }]);

        return CustomerOptionPage;
      }();

      CustomerOptionPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _Service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
        }, {
          type: _Service_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"]
        }, {
          type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_7__["OrderDetailService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      CustomerOptionPage.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CustomerOptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-option',
        template: _raw_loader_customer_option_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customer_option_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CustomerOptionPage);
      /***/
    },

    /***/
    "ZFaY":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-option/customer-option.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZFaY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>What do you want to do ?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item>\n    <ion-button expand=\"full\"  fill=\"clear\" (click)=\"reOrder()\"> Re-Order</ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-button expand=\"full\"  fill=\"clear\" (click)=\"CancelOrder()\">Cancel Order</ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-button fill=\"clear\" (click)=\"viewOrder(id)\"> View order  </ion-button>\n  </ion-item>\n</ion-list>\n<ion-footer>\n  <ion-button expand=\"full\" fill=\"clear\" (click)=\"close()\">\n    <ion-icon name=\"close-outline\"></ion-icon>&nbsp;&nbsp; Cancel</ion-button>\n</ion-footer>\n</ion-content>\n";
      /***/
    },

    /***/
    "gW5g":
    /*!***********************************************************!*\
      !*** ./src/app/customer-option/customer-option.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function gW5g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1vcHRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "ldse":
    /*!*******************************************!*\
      !*** ./src/app/Service/shared.service.ts ***!
      \*******************************************/

    /*! exports provided: SharedService */

    /***/
    function ldse(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedService", function () {
        return SharedService;
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

      var SharedService = /*#__PURE__*/function () {
        function SharedService() {
          _classCallCheck(this, SharedService);

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

        _createClass(SharedService, [{
          key: "getCurrentAddress",
          value: function getCurrentAddress() {
            return this.currentAddress;
          }
        }, {
          key: "getMenuFilter",
          value: function getMenuFilter() {
            return this.listOfCatagoryFilter;
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            return this.location;
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            return this.status;
          }
        }, {
          key: "getRestaurantLocation",
          value: function getRestaurantLocation() {
            return this.RestaurantLocation;
          }
        }, {
          key: "getRestaurantId",
          value: function getRestaurantId() {
            return this.resId;
          }
        }, {
          key: "getDriverId",
          value: function getDriverId() {
            return this.deriverId;
          }
        }, {
          key: "getCustomerId",
          value: function getCustomerId() {
            return this.customerId;
          }
        }, {
          key: "getDriverName",
          value: function getDriverName() {
            return this.driverName;
          }
        }]);

        return SharedService;
      }();

      SharedService.ctorParameters = function () {
        return [];
      };

      SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SharedService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~customer-option-customer-option-module~order-order-module-es5.js.map