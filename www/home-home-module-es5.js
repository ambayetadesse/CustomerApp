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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
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
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "CqG3");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "q3Kh");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
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
        function FoodService(db) {
          _classCallCheck(this, FoodService);

          this.db = db;
          this.foodCollectionList = db.collection('Food');
        }

        _createClass(FoodService, [{
          key: "create",
          value: function create(foodObj) {
            return this.foodCollectionList.add(foodObj);
          }
        }, {
          key: "getAllFood",
          value: function getAllFood() {
            this.foodList = this.foodCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.foodList;
          }
        }, {
          key: "getFood",
          value: function getFood(id) {
            return this.foodCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateFood",
          value: function updateFood(foodObj, id) {
            return this.foodCollectionList.doc(id).update(foodObj)["catch"](this.handleError);
          }
        }, {
          key: "removeFood",
          value: function removeFood(id) {
            return this.foodCollectionList.doc(id)["delete"]()["catch"](this.handleError);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }
        }]);

        return FoodService;
      }();

      FoodService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      FoodService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "CqG3");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "q3Kh");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
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
      /* harmony import */


      var _shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared.service */
      "ldse");

      var OrderService = /*#__PURE__*/function () {
        function OrderService(db, sharedService) {
          _classCallCheck(this, OrderService);

          this.db = db;
          this.sharedService = sharedService;
          this.cart = [];
          this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
          this.RestaurantId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
          this.orderStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
          this.order = [];
          this.orderItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
          this.orderCollectionList = db.collection('Order');
        }

        _createClass(OrderService, [{
          key: "create",
          value: function create(orderObj) {
            var _this = this;

            var values = this.orderCollectionList.add(orderObj).then(function (docRef) {
              _this.sharedService.orderId.next(docRef.id);
            });
            return values;
          }
        }, {
          key: "getAllOrder",
          value: function getAllOrder() {
            this.orderList = this.orderCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.orderList;
          }
        }, {
          key: "getOrderBy",
          value: function getOrderBy(id) {
            var orderObj = this.db.collection('Order', function (ref) {
              return ref.where('id', '==', id);
            }).snapshotChanges();
            this.orderList = orderObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.orderList;
          }
        }, {
          key: "getOrderByDriverId",
          value: function getOrderByDriverId(driverId) {
            var orderObj = this.db.collection('Order', function (ref) {
              return ref.where('Driver', '==', driverId);
            }).snapshotChanges();
            this.orderList = orderObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
              return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.orderList;
          }
        }, {
          key: "getOrder",
          value: function getOrder(id) {
            return this.orderCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateOrder",
          value: function updateOrder(orderObj, id) {
            return this.orderCollectionList.doc(id).update(orderObj)["catch"](this.handleError);
          }
        }, {
          key: "removeOrder",
          value: function removeOrder(id) {
            return this.orderCollectionList.doc(id)["delete"]()["catch"](this.handleError);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
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
            var _this2 = this;

            this.order = [];
            this.amount = 0;
            this.order.forEach(function (el) {
              var index = _this2.order.indexOf(function (c) {
                return c.orderDetailsId === el.orderDetailsId;
              });

              _this2.order.splice(index, 1);
            });
            this.orderItemCount.next(0);
            items.forEach(function (element) {
              _this2.amount = _this2.amount + element.amount;
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

              _this2.order.push(data);
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

                  if (p.amount == 0) {
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
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
        }];
      };

      OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OrderService);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content #pageTop scrollEvents=\"true\" [appHideHeader]=\"hideheader\" (ionScroll)=\"onScroll($event)\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-row class=\"info-row\" #hideheader>\n    <ion-col size=\"2\" class=\"ion-padding-start\">\n      <img src=\"./assets/delivery.png\" />\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-text color=\"dark\">\n        <span>Now</span><br />\n        <b>MTK Delivery</b>\n        <ion-icon name=\"chevron-down-outline\" color=\"primary\"></ion-icon>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"person-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"sticky-row\">\n    <ion-col size=\"2\">\n      <ion-buttons>\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-text class=\"ion-padding-start\" color=\"medium\"\n        [ngClass]=\"{'location-visible': showLocationDetail, 'location-hidden': !showLocationDetail}\">\n        MTK Delivery</ion-text>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-buttons>\n        <ion-button (click)=\"filterByMenu()\" ion-button full clear icon-left>\n          <ion-icon slot=\"start\" name=\"options-outline\"></ion-icon>\n        </ion-button>\n        <ion-button>\n          <ion-badge *ngIf=\"cart.length > 0\">{{ cartItemCount | async }}</ion-badge>\n          <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n  <form [formGroup]=\"regform\">\n    <ion-item *ngIf=\"menu\">\n      <ion-select multiple=\"true\" (ionChange)=\"selectMenu($event)\" interface=\"popover\" formControlName=\"menu\"\n        placeholder=\"select menu\">\n        <ion-select-option *ngFor=\"let menu of listOfCatagory\" value=\"{{menu.id}}\">\n          {{menu.categoryName}}({{menu.count}})\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </form>\n  <ion-row class=\"search-row\">\n    <ion-searchbar (keyup)=\"filter($event)\" [(ngModel)]=\"term\" showCancelButton=\"never\"\n      placeholder=\"Dishes, restaurants or cuisines\"></ion-searchbar>\n  </ion-row>\n  \n<ion-item lines=\"none\">\n  <ion-text color=\"dark\"><b style=\"padding-left: 10px\">Restaurant </b></ion-text>\n  <ion-label></ion-label>\n  <ion-select interface=\"popover\" (ionChange)=\"selectOpenClose($event)\" placeholder=\"Open or Close\">\n    <ion-select-option value=\"open\">Open</ion-select-option>\n    <ion-select-option value=\"close\">Close</ion-select-option>\n  </ion-select>\n</ion-item>\n  <ion-row class=\"meal-row\" *ngFor=\"let item of listOfRestaurant |filter:term \"\n    (click)=\"openLink(item.accountId,item.id)\">\n    <ion-col size=\"6\" class=\"border-bottom\">\n      <div class=\"meal-image\" [style.background-image]=\"'url(' + item.Photo + ')'\"></div>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-text color=\"dark\"><b>{{item.Name }}</b></ion-text><br />\n      <span>\n        <ion-icon name=\"star\" color=\"secondary\"></ion-icon>\n        <ion-text color=\"secondary\"> {{ item.Type }} </ion-text>\n      </span>\n      <br />\n      <!-- <span>\n        <ion-icon name=\"location-outline\"></ion-icon> {{ item.Location }}\n      </span> [ngStyle]=\"{'background-color':person.country === 'UK' ? 'green' : 'red' }\"-->\n      <ion-row>\n      <button style=\"border-radius: 5px;margin: .25rem .5rem .25rem 0;\" [ngClass]=\"{'green' :item.status==='open', 'red': item.status==='close'}\">\n        {{item.status}}\n      </button>\n        <div *ngFor=\"let catagories of item.Category\">\n          <button style=\"\n              background-color: #2185d0;\n              border-color: #2185d0;\n              color: #fff;\n              border-radius: 0.28571429rem;\n              margin: .25rem .5rem .25rem 0;\n            \">\n            {{catagories.categoryName}}\n          </button>\n        </div>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"pageScroller()\">\n      <ion-icon md=\"chevron-up-outline\" ios=\"chevron-up-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "cZdB":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
      \**************************************************************************/

    /*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */

    /***/
    function cZdB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function () {
        return Ng2SearchPipeModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function () {
        return Ng2SearchPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ng2SearchPipe = /*#__PURE__*/function () {
        function Ng2SearchPipe() {
          _classCallCheck(this, Ng2SearchPipe);
        }

        _createClass(Ng2SearchPipe, [{
          key: "transform",
          value:
          /**
           * @param {?} items object from array
           * @param {?} term term's search
           * @return {?}
           */
          function transform(items, term) {
            if (!term || !items) return items;
            return Ng2SearchPipe.filter(items, term);
          }
          /**
           *
           * @param {?} items List of items to filter
           * @param {?} term  a string term to compare with every property of the list
           *
           * @return {?}
           */

        }], [{
          key: "filter",
          value: function filter(items, term) {
            var
            /** @type {?} */
            toCompare = term.toLowerCase();
            /**
             * @param {?} item
             * @param {?} term
             * @return {?}
             */

            function checkInside(item, term) {
              for (var
              /** @type {?} */
              property in item) {
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
        }]);

        return Ng2SearchPipe;
      }();

      Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
        return new (t || Ng2SearchPipe)();
      };

      Ng2SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: Ng2SearchPipe,
        pure: false
      });
      Ng2SearchPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Ng2SearchPipe,
        factory: Ng2SearchPipe.ɵfac
      });
      /**
       * @nocollapse
       */

      Ng2SearchPipe.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter',
            pure: false
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var Ng2SearchPipeModule = function Ng2SearchPipeModule() {
        _classCallCheck(this, Ng2SearchPipeModule);
      };

      Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
        return new (t || Ng2SearchPipeModule)();
      };

      Ng2SearchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: Ng2SearchPipeModule
      });
      Ng2SearchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
      /**
       * @nocollapse
       */

      Ng2SearchPipeModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
          declarations: [Ng2SearchPipe],
          exports: [Ng2SearchPipe]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [Ng2SearchPipe],
            exports: [Ng2SearchPipe]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-search-filter.js.map

      /***/

    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _directive_shard_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../directive/shard-directives.module */
      "bLo3");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], _directive_shard_directives_module__WEBPACK_IMPORTED_MODULE_7__["ShardDirectivesModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slides {\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.featured-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.featured-slide .info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\nion-searchbar {\n  --icon-color: var(--ion-color-medium);\n}\n\nion-content {\n  --padding-top: 40px;\n}\n\n.sticky-row {\n  position: sticky;\n  top: calc(env(safe-area-inset-top) - 35px);\n  z-index: 2;\n  background: #fff;\n  box-shadow: 0px 9px 11px -15px rgba(0, 0, 0, 0.75);\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n}\n\n.search-row {\n  border-radius: 8px;\n  margin: 9px;\n}\n\n.info-row {\n  background: #fff;\n  position: sticky;\n  top: calc(env(safe-area-inset-top) - 40px);\n  z-index: 2;\n}\n\nion-refresher {\n  padding-top: calc(env(safe-area-inset-top) + 50px);\n}\n\n.location-visible {\n  opacity: 1;\n  transition: 0.5s;\n}\n\n.location-hidden {\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.header-image {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 30vh;\n  will-change: transform;\n}\n\n.meal-image {\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 0px;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: #f8f9fa;\n  margin-top: -2px;\n}\n\nion-content ion-card {\n  border-radius: 14px;\n}\n\nion-badge {\n  color: #fff;\n  position: absolute;\n  top: -9px;\n  right: 2px;\n  border-radius: 100%;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\nion-row {\n  border-radius: 8px;\n  margin: 2px;\n  background-color: #e9ecef;\n}\n\n.green {\n  background-color: #28a745;\n}\n\n.red {\n  background-color: #d9534f;\n}\n\n.category {\n  display: block;\n  position: relative;\n  background: 0 0;\n  margin: 0.5rem 0 0;\n  width: 100%;\n  padding: 0 0 0;\n  top: 0;\n  left: 0;\n  color: rgba(0, 0, 0, 0.4);\n  box-shadow: none;\n  transition: color 0.1s ease;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0UscUNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBQUE7RUFDRSxrREFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUFFO0VBRUUsVUFBQTtFQUVBLHFCQUFBO0FBQ0o7O0FBR0U7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHRTtFQUNFLG1CQUFBO0FBREo7O0FBS0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBS0E7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7RUFFQSwyQkFBQTtFQUNBLGdCQUFBO0FBRUYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1zbGlkZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAuaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufVxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAtLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLnN0aWNreS1yb3cge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtIDM1cHgpO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwcHggOXB4IDExcHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5zZWFyY2gtcm93IHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luOiA5cHg7XHJcbn1cclxuLmluZm8tcm93IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtIDQwcHgpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmlvbi1yZWZyZXNoZXIge1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDUwcHgpO1xyXG59XHJcblxyXG4ubG9jYXRpb24tdmlzaWJsZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4ubG9jYXRpb24taGlkZGVuIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLmhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxufVxyXG4ubWVhbC1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigxMjAsIDEyNiwgMTM0KTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvLyBtYXJnaW46IDE0cHggMDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIC8vIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgfVxyXG4gIGlvbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYmFkZ2Uge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC05cHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uY2FydC1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJ0LWxlbmd0aCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxOHB4O1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuaW9uLXJvdyB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbn1cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcbi5yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XHJcbn1cclxuLmNhdGVnb3J5e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgbWFyZ2luOiAuNXJlbSAwIDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAwIDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2U7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufSJdfQ== */";
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
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Service_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/category.service */
      "neG8");
      /* harmony import */


      var _Service_food_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/food.service */
      "Dkj+");
      /* harmony import */


      var _Service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../Service/order.service */
      "VNSQ");
      /* harmony import */


      var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Service/restaurant.service */
      "+cje");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(fb, restaurantService, foodService, catagoryService, router, sharedService, http, orderService, modelControler) {
          _classCallCheck(this, HomePage);

          this.fb = fb;
          this.restaurantService = restaurantService;
          this.foodService = foodService;
          this.catagoryService = catagoryService;
          this.router = router;
          this.sharedService = sharedService;
          this.http = http;
          this.orderService = orderService;
          this.modelControler = modelControler;
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
          var d = Date.parse(this.currentDate);
          var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
          var am_pm = date.getHours() >= 12 ? "pm" : "am";
          var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
          var time = hours + ":" + minutes + " " + am_pm;
        }

        _createClass(HomePage, [{
          key: "pageScroller",
          value: function pageScroller() {
            this.pageTop.scrollToTop();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.http.get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json').subscribe((res: any) => {
            //   this.categories = res.categories;
            //   this.highlights = res.highlights;
            //   this.featured = res.featured;
            // });
            this.regform = this.fb.group({
              menu: [""]
            });
            this.cartItemCount = this.orderService.getCartItemCount();
            this.cart = this.orderService.getCart();
            this.getAllRestaurant();
            this.getCatagory();
            this.getRestaurant();
            this.getFood();
          }
        }, {
          key: "getCatagory",
          value: function getCatagory() {
            var _this3 = this;

            this.catagoryService.getAllCategory().subscribe(function (res) {
              _this3.categoriesList = res;
              res.forEach(function (element) {
                _this3.listOfRestaurants.forEach(function (ele) {
                  if (ele.category) for (var i = 0; i < ele.category.length; i++) {
                    if (ele.category[i] == element.id) {
                      _this3.count = _this3.count + 1;
                    }
                  }
                });

                var data = {
                  id: element.id,
                  categoryName: element.categoryName,
                  count: _this3.count
                };

                _this3.listOfCatagory.push(data);

                _this3.count = 0; // console.log(this.listOfCatagory);
              });
            });
          }
        }, {
          key: "selectMenu",
          value: function selectMenu(event) {
            var _this4 = this;

            this.listOfRestaurant = [];
            this.categoryIds = event.detail.value;

            if (this.categoryIds.length > 0) {
              this.listOfRestaurants.forEach(function (ele) {
                if (ele.category.length > 0) {
                  _this4.count = 0;

                  for (var i = 0; i < ele.category.length; i++) {
                    if (_this4.categoryIds.length > 0) {
                      for (var j = 0; j < _this4.categoryIds.length; j++) {
                        if (ele.category[i] == _this4.categoryIds[j]) {
                          _this4.count = _this4.count + 1;
                        }
                      }
                    }
                  }

                  if (_this4.count == 1) {
                    _this4.catagoryService.getAllCategory().subscribe(function (result) {
                      _this4.categoriesList = result;
                      _this4.category = [];

                      var _loop = function _loop(_i2) {
                        var data = {
                          categoryName: _this4.categoriesList.find(function (c) {
                            return c.id == ele.category[_i2];
                          }).categoryName
                        };

                        _this4.category.push(data);
                      };

                      for (var _i2 = 0; _i2 < ele.category.length; _i2++) {
                        _loop(_i2);
                      }

                      var data = {
                        id: ele.id,
                        Name: ele.Name,
                        Location: ele.Location,
                        Type: ele.Type,
                        StartWorkingHour: ele.StartWorkingHour,
                        EndWorkingHour: ele.EndWorkingHour,
                        AreaSpace: ele.AreaSpace,
                        PhoneNumber: ele.PhoneNumber,
                        GM: ele.GM,
                        ContactPerson: ele.ContactPerson,
                        Email: ele.Email,
                        Photo: ele.Photo,
                        accountId: ele.accountId,
                        status: ele.status,
                        Category: _this4.category
                      };

                      _this4.listOfRestaurant.push(data);
                    });
                  }
                }
              });
            } else {
              this.restaurantService.getAllRestaurant().subscribe(function (res) {
                res.forEach(function (ele) {
                  _this4.catagoryService.getAllCategory().subscribe(function (result) {
                    _this4.categoriesList = result;
                    _this4.category = [];

                    var _loop2 = function _loop2(i) {
                      var data = {
                        categoryName: _this4.categoriesList.find(function (c) {
                          return c.id == ele.category[i];
                        }).categoryName
                      };

                      _this4.category.push(data);
                    };

                    for (var i = 0; i < ele.category.length; i++) {
                      _loop2(i);
                    }

                    var data = {
                      id: ele.id,
                      Name: ele.Name,
                      Location: ele.Location,
                      Type: ele.Type,
                      StartWorkingHour: ele.StartWorkingHour,
                      EndWorkingHour: ele.EndWorkingHour,
                      AreaSpace: ele.AreaSpace,
                      PhoneNumber: ele.PhoneNumber,
                      GM: ele.GM,
                      ContactPerson: ele.ContactPerson,
                      Email: ele.Email,
                      Photo: ele.Photo,
                      accountId: ele.accountId,
                      status: ele.status,
                      Category: _this4.category
                    };

                    _this4.listOfRestaurant.push(data);
                  });
                });
              });
            }
          }
        }, {
          key: "getAllRestaurant",
          value: function getAllRestaurant() {
            var _this5 = this;

            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              _this5.listOfRestaurants = res;
            });
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant() {
            var _this6 = this;

            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              res.forEach(function (ele) {
                _this6.catagoryService.getAllCategory().subscribe(function (result) {
                  _this6.categoriesList = result;
                  _this6.category = [];

                  var _loop3 = function _loop3(i) {
                    var data = {
                      categoryName: _this6.categoriesList.find(function (c) {
                        return c.id == ele.category[i];
                      }).categoryName
                    };

                    _this6.category.push(data);
                  };

                  for (var i = 0; i < ele.category.length; i++) {
                    _loop3(i);
                  }

                  var data = {
                    id: ele.id,
                    Name: ele.Name,
                    Location: ele.Location,
                    Type: ele.Type,
                    StartWorkingHour: ele.StartWorkingHour,
                    EndWorkingHour: ele.EndWorkingHour,
                    AreaSpace: ele.AreaSpace,
                    PhoneNumber: ele.PhoneNumber,
                    GM: ele.GM,
                    ContactPerson: ele.ContactPerson,
                    Email: ele.Email,
                    Photo: ele.Photo,
                    accountId: ele.accountId,
                    status: ele.status,
                    Category: _this6.category
                  };

                  _this6.listOfRestaurant.push(data);
                });
              });
            });
          }
        }, {
          key: "getFood",
          value: function getFood() {
            var _this7 = this;

            this.foodService.getAllFood().subscribe(function (res) {
              _this7.listOfFood = res;
            });
          } // Dummy refresher function

        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            setTimeout(function () {
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "openLink",
          value: function openLink(id, resId) {
            this.sharedService.resId.next(resId);
            this.router.navigate(["/menu/details/" + id]);
          } // show or hide a location string later

        }, {
          key: "onScroll",
          value: function onScroll(ev) {
            var offset = ev.detail.scrollTop;
            this.showLocationDetail = offset > 40;
          }
        }, {
          key: "filter",
          value: function filter(query) {
            this.filteredItemsSearch = query.target.value ? this.listOfRestaurant.filter(function (p) {
              return p.Name.toLowerCase().includes(query.target.value.toLowerCase());
            }) : this.listOfRestaurant;
          }
        }, {
          key: "filterByMenu",
          value: function filterByMenu() {
            this.menu = true;
          }
        }, {
          key: "selectOpenClose",
          value: function selectOpenClose(ev) {
            var _this8 = this;

            this.listOfRestaurant = [];
            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              res.forEach(function (ele) {
                _this8.catagoryService.getAllCategory().subscribe(function (result) {
                  _this8.categoriesList = result;
                  _this8.category = [];

                  var _loop4 = function _loop4(i) {
                    var data = {
                      categoryName: _this8.categoriesList.find(function (c) {
                        return c.id == ele.category[i];
                      }).categoryName
                    };

                    _this8.category.push(data);
                  };

                  for (var i = 0; i < ele.category.length; i++) {
                    _loop4(i);
                  }

                  var data = {
                    id: ele.id,
                    Name: ele.Name,
                    Location: ele.Location,
                    Type: ele.Type,
                    StartWorkingHour: ele.StartWorkingHour,
                    EndWorkingHour: ele.EndWorkingHour,
                    AreaSpace: ele.AreaSpace,
                    PhoneNumber: ele.PhoneNumber,
                    GM: ele.GM,
                    ContactPerson: ele.ContactPerson,
                    Email: ele.Email,
                    Photo: ele.Photo,
                    accountId: ele.accountId,
                    status: ele.status,
                    Category: _this8.category
                  };

                  _this8.listOfRestaurant.push(data);

                  _this8.listOfRestaurant = _this8.listOfRestaurant.filter(function (c) {
                    return c.status == ev.detail.value;
                  });
                });
              });
            });
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
        }, {
          type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_9__["RestaurantService"]
        }, {
          type: _Service_food_service__WEBPACK_IMPORTED_MODULE_7__["FoodService"]
        }, {
          type: _Service_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _Service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"]
        }];
      };

      HomePage.propDecorators = {
        pageTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['pageTop']
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map