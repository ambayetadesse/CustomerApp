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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-history-order-history-module"], {
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
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var RestaurantService = /*#__PURE__*/function () {
        function RestaurantService(http) {
          _classCallCheck(this, RestaurantService);

          this.http = http;
          this.APIURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].apiURL;
        }

        _createClass(RestaurantService, [{
          key: "create",
          value: function create(val) {
            return this.http.post(this.APIURL + '/restaurant', val);
          }
        }, {
          key: "getAllRestaurant",
          value: function getAllRestaurant() {
            var restaurant = this.http.get(this.APIURL + '/restaurant');
            return restaurant;
          }
        }, {
          key: "updateRestaurant",
          value: function updateRestaurant(val) {
            return this.http.put(this.APIURL + '/restaurant/', val);
          }
        }, {
          key: "removeRestaurant",
          value: function removeRestaurant(id) {
            return this.http["delete"](this.APIURL + '/restaurant/' + id).toPromise();
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
    "LuXT":
    /*!*****************************************************!*\
      !*** ./src/app/order-history/order-history.page.ts ***!
      \*****************************************************/

    /*! exports provided: OrderHistoryPage */

    /***/
    function LuXT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryPage", function () {
        return OrderHistoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order-history.page.html */
      "mqkC");
      /* harmony import */


      var _order_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-history.page.scss */
      "PEmK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _Service_food_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/food.service */
      "Dkj+");
      /* harmony import */


      var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../Service/order-detail.service */
      "8D9V");
      /* harmony import */


      var _Service_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Service/order.service */
      "VNSQ");
      /* harmony import */


      var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../Service/restaurant.service */
      "+cje");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");

      var OrderHistoryPage = /*#__PURE__*/function () {
        function OrderHistoryPage(modalCtrl, alertCtrl, orderService, fb, router, restaurantService, orderDetailService, foodService, sharedService) {
          _classCallCheck(this, OrderHistoryPage);

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
          this.currentDate = new Date().toUTCString();
          this.minDate = new Date().toISOString();
          this.maxDate = new Date().toISOString();
        }

        _createClass(OrderHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              transactionType: [""],
              DeliveryDate: [""],
              DeliveryTime: [""],
              DeliveryAddress: [""]
            }); //setting min date

            var date = new Date();
            date.setDate(date.getDate() - 5);
            this.minDate = date.toISOString(); //setting max date

            date = new Date();
            date.setDate(date.getDate() + 5);
            this.maxDate = date.toISOString(); ///to get data form service

            this.cart = this.orderService.getOrders();
            this.status = this.sharedService.getStatus().value;
            console.log(this.status);
            this.cartItemCount = this.orderService.getOrderItemCount();
            this.id = this.orderService.getRestaurantId().value; //console.log(this.id)

            this.getRestaurant();
            this.getFood();
            this.readNOId();
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant() {
            var _this = this;

            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              _this.listOfRestaurant = res;
            });
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
          key: "readNOId",
          value: function readNOId() {
            var _this3 = this;

            var No = 0;
            this.orderService.getAllOrder().subscribe(function (result) {
              if (result.length == 0) No = 1;else No = result.length + 1;
              _this3.orderNo = +No;
            });
          }
        }, {
          key: "decreaseCartItem",
          value: function decreaseCartItem(product) {
            this.orderService.decreaseProduct(product);
          }
        }, {
          key: "increaseCartItem",
          value: function increaseCartItem(product) {
            this.orderService.addProduct(product);
          }
        }, {
          key: "removeCartItem",
          value: function removeCartItem(product) {
            //this.orderService.removeProduct(product);
            this.presentAlertConfirm(product);
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            return this.cart.reduce(function (i, j) {
              return i + j.amount * j.Price;
            }, 0);
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "order",
          value: function order(cart) {
            var _this4 = this;

            this.Total = 0;
            cart.forEach(function (element) {
              _this4.restaurantId = element.restaurantId;
              _this4.Total = _this4.Total + element.Price * element.amount;
              var orderDetails = {
                OrderId: _this4.orderNo,
                Restaurant: element.restaurantId,
                Food: element.id,
                Qty: element.amount,
                Price: element.Price
              };

              _this4.orderDetailService.create(orderDetails);
            });
            var order = {
              DateTime: this.regform.get('DeliveryDate').value,
              Customer: localStorage.getItem("userId"),
              Location: this.listOfRestaurant.find(function (c) {
                return c.id == _this4.restaurantId;
              }).location,
              OrderStatus: this.regform.get('transactionType').value,
              Total: this.Total,
              orderNo: this.orderNo,
              Driver: null,
              Vehicle: null,
              orderLocation: null //or droupLocation

            };
            this.orderService.create(order);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(product) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Clear cart !',
                        message: '<strong>Are you sure you want to remove all items in your cart ?</strong>',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'OK',
                          handler: function handler() {
                            _this5.orderService.removeProduct(product);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "backPage",
          value: function backPage() {
            if (this.status == "driver") {
              this.router.navigate(["/menu/driver-home"]);
            } else if (this.status == "restaurant-home") {
              this.router.navigate(["/menu/restaurant-home"]);
            } else if (this.status == "restaurant-history") {
              this.router.navigate(["/menu/restaurant-history"]);
            } else {
              this.router.navigate(["/menu/order"]);
            }
          }
        }]);

        return OrderHistoryPage;
      }();

      OrderHistoryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _Service_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_10__["RestaurantService"]
        }, {
          type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_8__["OrderDetailService"]
        }, {
          type: _Service_food_service__WEBPACK_IMPORTED_MODULE_7__["FoodService"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]
        }];
      };

      OrderHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-history',
        template: _raw_loader_order_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderHistoryPage);
      /***/
    },

    /***/
    "PEmK":
    /*!*******************************************************!*\
      !*** ./src/app/order-history/order-history.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function PEmK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-badge {\n  color: #fff;\n  position: absolute;\n  top: -9px;\n  right: 2px;\n  border-radius: 100%;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6Im9yZGVyLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOXB4O1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuIFxyXG4uY2FydC1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuIFxyXG4uY2FydC1sZW5ndGgge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMThweDtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbWluLXdpZHRoOiAyNXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Pywy":
    /*!***************************************************************!*\
      !*** ./src/app/order-history/order-history-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: OrderHistoryPageRoutingModule */

    /***/
    function Pywy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryPageRoutingModule", function () {
        return OrderHistoryPageRoutingModule;
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


      var _order_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-history.page */
      "LuXT");

      var routes = [{
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryPage"]
      }];

      var OrderHistoryPageRoutingModule = function OrderHistoryPageRoutingModule() {
        _classCallCheck(this, OrderHistoryPageRoutingModule);
      };

      OrderHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderHistoryPageRoutingModule);
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
            var _this6 = this;

            this.order = [];
            this.amount = 0;
            this.order.forEach(function (el) {
              var index = _this6.order.indexOf(function (c) {
                return c.orderDetailsId === el.orderDetailsId;
              });

              _this6.order.splice(index, 1);
            });
            this.orderItemCount.next(0);
            items.forEach(function (element) {
              _this6.amount = _this6.amount + element.amount;
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

              _this6.order.push(data);
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
    },

    /***/
    "mqkC":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mqkC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"solid\" shape=\"round\" color=\"light\" (click)=\"backPage()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Detail orders</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button fill=\"solid\" shape=\"round\" color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"share-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"solid\" shape=\"round\" color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"primary\"></ion-icon>\n      </ion-button> -->\n      <ion-button  >\n        <ion-badge *ngIf=\"cart.length > 0\">{{ cartItemCount | async }}</ion-badge>\n        <ion-icon slot=\"icon-only\" class=\"cart-icon\" name=\"cart\"></ion-icon>\n      </ion-button> \n    </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <!-- <div class=\"ion-text-end\">\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n    </ion-button>\n  </div> -->\n  <div class=\"ion-padding\">\n    <ion-list>\n      <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" >\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"1\" class=\"ion-align-self-center\">\n              {{ p.amount }}\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" >\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"2\" offset=\"5\">\n              <ion-button color=\"medium\" fill=\"clear\" >\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <b>{{ p.Name }}</b>\n            </ion-col>\n            <ion-col size=\"4\">\n              <b>{{ p.Price | currency:'ETB'}}</b>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ p.amount * p.Price | currency:'ETB' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n              Total:\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ getTotal() | currency:'ETB' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n   \n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "piv+":
    /*!*******************************************************!*\
      !*** ./src/app/order-history/order-history.module.ts ***!
      \*******************************************************/

    /*! exports provided: OrderHistoryPageModule */

    /***/
    function piv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function () {
        return OrderHistoryPageModule;
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


      var _order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-history-routing.module */
      "Pywy");
      /* harmony import */


      var _order_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-history.page */
      "LuXT");

      var OrderHistoryPageModule = function OrderHistoryPageModule() {
        _classCallCheck(this, OrderHistoryPageModule);
      };

      OrderHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryPage"]]
      })], OrderHistoryPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-history-order-history-module-es5.js.map