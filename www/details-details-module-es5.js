(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"], {
    /***/
    "A03k":
    /*!***************************************************!*\
      !*** ./src/app/details/details-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: DetailsPageRoutingModule */

    /***/
    function A03k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
        return DetailsPageRoutingModule;
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


      var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details.page */
      "vgIa");

      var routes = [{
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
      }];

      var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
        _classCallCheck(this, DetailsPageRoutingModule);
      };

      DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailsPageRoutingModule);
      /***/
    },

    /***/
    "QR/W":
    /*!*******************************************!*\
      !*** ./src/app/details/details.module.ts ***!
      \*******************************************/

    /*! exports provided: DetailsPageModule */

    /***/
    function QRW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
        return DetailsPageModule;
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


      var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details-routing.module */
      "A03k");
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./details.page */
      "vgIa");
      /* harmony import */


      var _directive_shard_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../directive/shard-directives.module */
      "bLo3");

      var DetailsPageModule = function DetailsPageModule() {
        _classCallCheck(this, DetailsPageModule);
      };

      DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _directive_shard_directives_module__WEBPACK_IMPORTED_MODULE_7__["ShardDirectivesModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
      })], DetailsPageModule);
      /***/
    },

    /***/
    "tDqb":
    /*!*******************************************!*\
      !*** ./src/app/details/details.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function tDqb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-icon {\n  font-size: 25px;\n}\n\nion-content {\n  position: absolute;\n  --background: #f1f1f1;\n  --padding-bottom: 50px;\n}\n\n.light-bg {\n  background: #ffffff;\n  z-index: 10;\n}\n\n.header-image {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 30vh;\n  will-change: transform;\n}\n\nion-list-header {\n  --background: #a0b67d;\n}\n\nion-list {\n  --ion-background-color: rgb(61, 133, 167);\n}\n\n.meal-row {\n  padding-bottom: 0px;\n}\n\n.meal-image {\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--ion-color-step-150, rgba(0, 0, 0, 0.07));\n}\n\nion-slides {\n  padding-right: 0px;\n  margin-top: 34px;\n  margin-bottom: -34px;\n  background: #b9b9b9eb;\n  top: calc(env(safe-area-inset-top) - 34px);\n}\n\n.slides-visible {\n  opacity: 1;\n  transition: 1s;\n}\n\n.slides-hidden {\n  opacity: 0;\n  transition: 1s;\n}\n\n.active-category {\n  --background: var(--ion-color-primary);\n  --color: #fff;\n  --border-radius: 10px;\n  font-weight: 600;\n}\n\nion-badge {\n  color: #fff;\n  position: absolute;\n  top: -9px;\n  right: 2px;\n  border-radius: 100%;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\n.sticky-row {\n  position: sticky;\n  top: calc(env(safe-area-inset-top) - -55px);\n  z-index: 2;\n  background: #b9b9b9eb;\n  box-shadow: 0px 9px 11px -15px rgba(0, 0, 0, 0.75);\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksZUFBZTtBQURuQjs7QUFLQTtFQUNJLGtCQUFrQjtFQUNsQixxQkFBYTtFQUNiLHNCQUFpQjtBQUZyQjs7QUFLQTtFQUNJLG1CQUFtQjtFQUNuQixXQUFXO0FBRmY7O0FBS0E7RUFDSSw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0JBQXNCO0FBRjFCOztBQUtBO0VBQ0kscUJBQWE7QUFGakI7O0FBS0E7RUFDSSx5Q0FBdUI7QUFGM0I7O0FBSUE7RUFDSSxtQkFBbUI7QUFEdkI7O0FBR0E7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUF0Qjs7QUFHQTtFQUNJLHVFQUF1RTtBQUEzRTs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiwwQ0FBMEM7QUFBNUM7O0FBRUE7RUFDSSxVQUFVO0VBQ1YsY0FBYztBQUNsQjs7QUFFQTtFQUNJLFVBQVU7RUFDVixjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksc0NBQWE7RUFDYixhQUFRO0VBQ1IscUJBQWdCO0VBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwyQ0FBMkM7RUFDM0MsVUFBVTtFQUNWLHFCQUFzQjtFQUN0QixrREFBa0Q7RUFDbEQsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFFdkIiLCJmaWxlIjoiZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRvb2xiYXIge1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuIFxyXG5pb24tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuIFxyXG4ubGlnaHQtYmcge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbiBcclxuLmhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYTBiNjdkO1xyXG59XHJcbiBcclxuaW9uLWxpc3Qge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAxMzMsIDE2Nyk7XHJcbn1cclxuLm1lYWwtcm93IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLm1lYWwtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4gXHJcbi5ib3JkZXItYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHJnYmEoMCwgMCwgMCwgMC4wNykpO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzRweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMzRweDtcclxuICBiYWNrZ3JvdW5kOiAjYjliOWI5ZWI7XHJcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtIDM0cHgpO1xyXG4gIH1cclxuLnNsaWRlcy12aXNpYmxlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG4gXHJcbi5zbGlkZXMtaGlkZGVuIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG4gXHJcbi5hY3RpdmUtY2F0ZWdvcnkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaW9uLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOXB4O1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuIFxyXG4uY2FydC1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuIFxyXG4uY2FydC1sZW5ndGgge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMThweDtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbWluLXdpZHRoOiAyNXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbi5zdGlja3ktcm93IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgLSAtNTVweCk7XHJcbiAgei1pbmRleDogMjtcclxuICBiYWNrZ3JvdW5kOiAgI2I5YjliOWViO1xyXG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTFweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "vgIa":
    /*!*****************************************!*\
      !*** ./src/app/details/details.page.ts ***!
      \*****************************************/

    /*! exports provided: DetailsPage */

    /***/
    function vgIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
        return DetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./details.page.html */
      "z71o");
      /* harmony import */


      var _details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./details.page.scss */
      "tDqb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../cart-modal/cart-modal.page */
      "Vefk");
      /* harmony import */


      var _Service_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../Service/category.service */
      "neG8");
      /* harmony import */


      var _Service_food_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Service/food.service */
      "Dkj+");
      /* harmony import */


      var _Service_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../Service/order.service */
      "VNSQ");
      /* harmony import */


      var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../Service/restaurant.service */
      "+cje");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");

      var DetailsPage = /*#__PURE__*/function () {
        function DetailsPage(foodService, Activatedroute, restaurantservice, categoryService, router, modalCtrl, orderService, sharedService, alertController, toastController, document) {
          var _this = this;

          _classCallCheck(this, DetailsPage);

          this.foodService = foodService;
          this.Activatedroute = Activatedroute;
          this.restaurantservice = restaurantservice;
          this.categoryService = categoryService;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this.orderService = orderService;
          this.sharedService = sharedService;
          this.alertController = alertController;
          this.toastController = toastController;
          this.document = document;
          this.data = null;
          this.opts = {
            freeMode: true,
            slidesPerView: 4.6,
            slidesOffsetBefore: 100,
            slidesOffsetAfter: 100
          };
          this.activeCategory = 0;
          this.listElements = [];
          this.categorySlidesVisible = false;
          this.listOfCategory = [];
          this.catagories = [];
          this.cart = [];
          this.visible = false; // join_request: boolean;

          this.checkIndex = [];
          this.isenabled = true;
          this.dayFinished = [];
          this.restaurantservice.getAllRestaurant().subscribe(function (res) {
            _this.listOfRestaurant = res;
            _this.name = res.find(function (c) {
              return c.id === _this.resId;
            }).name;
            _this.picture = res.find(function (c) {
              return c.id === _this.resId;
            }).photo;
          });
        }

        _createClass(DetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dayFinished.push(this.Activatedroute.snapshot.paramMap.get('id'));
            this.cart = this.orderService.getCart();
            this.cartItemCount = this.orderService.getCartItemCount();
            this.id = this.Activatedroute.snapshot.paramMap.get('id');
            this.resId = this.sharedService.getRestaurantId().value;
            this.orderService.RestaurantId.next(this.id);
            console.log(this.resId); // Set the header position for sticky slides

            var headerHeight = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["isPlatform"])('ios') ? 44 : 56;
            this.document.documentElement.style.setProperty('--header-position', "calc(env(safe-area-inset-top) + ".concat(headerHeight, "px)"));
            this.getRestaurant();
            this.getFood();
            this.getCategory();
          }
        }, {
          key: "getFood",
          value: function getFood() {
            var _this2 = this;

            this.foodService.getAllFood().subscribe(function (res) {
              _this2.getCheckDisable_selecet(res);

              _this2.listOfFood = res.filter(function (c) {
                return c.restaurantId === _this2.resId.toString();
              });

              _this2.restaurantservice.getAllRestaurant().subscribe(function (listOfRes) {
                var restaurant = listOfRes.find(function (c) {
                  return c.id === _this2.resId && c.status === "close";
                });

                if (restaurant) {
                  _this2.listOfFood.forEach(function (ele) {
                    for (var i = 0; i <= _this2.listOfFood.length; i++) {
                      var data = {
                        index: i,
                        item: ele.id
                      };

                      _this2.checkIndex.push(data);
                    }

                    if (_this2.dayFinished.includes(ele)) {
                      _this2.dayFinished.splice(_this2.dayFinished.indexOf(ele), 1);
                    } else {
                      _this2.dayFinished.push(ele);
                    }
                  });
                }
              });
            });
          }
        }, {
          key: "getCheckDisable_selecet",
          value: function getCheckDisable_selecet(res) {
            var _this3 = this;

            this.listOfFood = res;

            for (var j = 0; j < this.cart.length; j++) {
              for (var _i = 0; _i < this.listOfFood.length; _i++) {
                if (this.cart[j].id == res[_i].id) {
                  this.listOfFood[_i].isSelect = true;
                  var data = {
                    index: _i,
                    item: this.listOfFood[_i].id
                  };
                  this.checkIndex.push(data); // To check select or unselect 

                  if (this.checkIndex !== undefined) {
                    this.checkIndex.forEach(function (ele) {
                      var found = _this3.listOfFood.find(function (c) {
                        return c.id === ele.item;
                      });

                      if (ele.item === res.id) {
                        _this3.listOfFood[ele.index].isSelect = true;
                      } else if (found !== undefined) {
                        var index = _this3.listOfFood.findIndex(function (c) {
                          return c.id === ele.item;
                        });

                        _this3.listOfFood[index].isSelect = true;
                      }
                    });
                  }
                } else {
                  this.listOfFood[_i].isSelect = false;
                }
              }
            } // To check disabled or enable product list


            if (this.cart.length !== 0) {
              for (var i = 0; i < this.cart.length; i++) {
                for (var j = 0; j < res.length; j++) {
                  if (this.cart[i].id == res[j].id) {
                    this.dayFinished.push(res[j]);
                  }
                }
              }
            }
          }
        }, {
          key: "getCategory",
          value: function getCategory() {
            var _this4 = this;

            this.categoryService.getAllCategory().subscribe(function (res) {
              _this4.restaurantservice.getAllRestaurant().subscribe(function (listOfRestaurant) {
                var restaurant = listOfRestaurant.find(function (c) {
                  return c.id === _this4.resId;
                }).categoryId;

                if (restaurant !== undefined) {
                  var _loop = function _loop(i) {
                    var category = res.find(function (c) {
                      return c.categoryName === restaurant[i];
                    });
                    var data = {
                      id: category.id,
                      categoryName: restaurant[i]
                    };

                    _this4.listOfCategory.push(data);

                    console.log(_this4.listOfCategory);
                  };

                  for (var i = 0; i < restaurant.length; i++) {
                    _loop(i);
                  }
                }
              });
            });
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant() {
            var _this5 = this;

            this.restaurantservice.getAllRestaurant().subscribe(function (res) {
              _this5.listOfRestaurant = res;
              _this5.name = res.find(function (c) {
                return c.id === _this5.resId;
              }).name;
              _this5.picture = res.find(function (c) {
                return c.id === _this5.resId;
              }).photo;
            });
          } // Get all list viewchildren when ready

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this6 = this;

            this.lists.changes.subscribe(function (_) {
              _this6.listElements = _this6.lists.toArray();
            });
          }
        }, {
          key: "selectCategory",
          value: function selectCategory(index, category) {
            var _this7 = this;

            this.foodService.getAllFood().subscribe(function (res) {
              _this7.listOfFood = res.filter(function (c) {
                return c.categoryId === category && c.restaurantId === _this7.resId.toString();
              });

              if (_this7.listOfFood.length > 0) {
                _this7.checkIndex.forEach(function (ele) {
                  var item = _this7.listOfFood.find(function (c) {
                    return c.id === ele.item;
                  });

                  if (item !== undefined) {
                    var _index = _this7.listOfFood.findIndex(function (c) {
                      return c.id === ele.item;
                    });

                    _this7.listOfFood[_index].isSelect = true;
                  }
                });
              }

              _this7.listOfFood.forEach(function (ele) {
                var found = _this7.checkIndex.find(function (c) {
                  return c.item === ele.id;
                });

                if (found !== undefined) {
                  if (_this7.dayFinished.includes(ele)) {
                    _this7.dayFinished.splice(_this7.dayFinished.indexOf(ele), 1);
                  } else {
                    _this7.dayFinished.push(ele);
                  }
                }
              });
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll(ev) {
            var offset = ev.detail.scrollTop;
            this.categorySlidesVisible = offset > 1500;

            for (var i = 0; i < this.listElements.length; i++) {
              var item = this.listElements[i].nativeElement;

              if (this.isElementInViewport(item)) {
                this.activeCategory = i;
                this.slides.slideTo(i);
                break;
              }
            }
          }
        }, {
          key: "isElementInViewport",
          value: function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
          }
        }, {
          key: "setDisabled",
          value: function setDisabled(item) {
            return this.dayFinished.includes(item);
          }
        }, {
          key: "addToCart",
          value: function addToCart(product, index) {
            if (this.cart.length === 0) {
              this.getAddToCart(product, index);
            } else {
              //To Check the first index of cart order to equal withselect item list
              if (this.cart[0].restaurantId == product.restaurantId) {
                if (index == 0) {
                  this.getAddToCart(product, index);
                } else {
                  if (this.resId === +this.cart[index - 1].restaurantId) {
                    this.getAddToCart(product, index);
                  } else {
                    this.presentAlert('Switching Restaurant is not allowed');
                  }
                }
              } else {
                this.presentAlert('Switching Restaurant is not allowed');
              }
            }
          }
        }, {
          key: "getAddToCart",
          value: function getAddToCart(product, index) {
            var _this8 = this;

            for (var i = 0; i < this.listOfFood.length; i++) {
              if (index === i) {
                this.listOfFood[i].isSelect = true;
                var data = {
                  index: i,
                  item: product.id
                };
                this.checkIndex.push(data); // console.log(this.checkIndex);

                if (this.checkIndex !== undefined) {
                  this.checkIndex.forEach(function (ele) {
                    var found = _this8.listOfFood.find(function (c) {
                      return c.id === ele.item;
                    });

                    if (ele.item === product.id) {
                      _this8.listOfFood[ele.index].isSelect = true;
                    } else if (found !== undefined) {
                      var _index2 = _this8.listOfFood.findIndex(function (c) {
                        return c.id === ele.item;
                      });

                      _this8.listOfFood[_index2].isSelect = true;
                    }
                  });
                }
              } else {
                this.listOfFood[i].isSelect = false;
              }
            }

            if (this.dayFinished.includes(product)) {
              this.dayFinished.splice(this.dayFinished.indexOf(product), 1);
            } else {
              this.dayFinished.push(product);
            }

            this.orderService.addProduct(product);
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        // cssClass:"my-custom-class",
                        color: 'warning',
                        duration: 2000,
                        message: message
                      });

                    case 2:
                      toast = _context.sent;
                      _context.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onClick",
          value: function onClick() {
            this.router.navigate(['/menu/cart-modal']);
          }
        }, {
          key: "backToHome",
          value: function backToHome() {
            this.router.navigate(['/menu/home']);
          }
        }, {
          key: "openCart",
          value: function openCart() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_7__["CartModalPage"],
                        cssClass: 'cart-modal'
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return DetailsPage;
      }();

      DetailsPage.ctorParameters = function () {
        return [{
          type: _Service_food_service__WEBPACK_IMPORTED_MODULE_9__["FoodService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_11__["RestaurantService"]
        }, {
          type: _Service_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _Service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      DetailsPage.propDecorators = {
        lists: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"]]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"]]
        }],
        fab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['cart', {
            "static": false,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }]
        }]
      };
      DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-details',
        template: _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailsPage);
      /***/
    },

    /***/
    "z71o":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function z71o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"solid\" shape=\"round\" color=\"light\" (click)=\"backToHome()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{this.name }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button fill=\"solid\" shape=\"round\" color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"share-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"solid\" shape=\"round\" color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"primary\"></ion-icon>\n      </ion-button> -->\n      <ion-button (click)=\"onClick()\">\n        <ion-badge *ngIf=\"cart.length > 0\">{{ cartItemCount | async }}</ion-badge>\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" (ionScroll)=\"onScroll($event)\" [appParallax]=\"img\">\n  <div #img class=\"header-image\" [style.background-image]=\"'url(' + picture + ')'\">\n  </div>\n  <ion-row class=\"sticky-row\">\n    <ion-slides [options]=\"opts\">\n      <ion-slide *ngFor=\"let entry of listOfCategory; let i = index;\">\n        <ion-button (click)=\"activeCategory = i\" [class.active-category]=\"activeCategory == i\" fill=\"clear\"\n          (click)=\"selectCategory(i,entry.id)\">\n          {{ entry.categoryName }}\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n  <ion-row *ngFor=\"let meal of listOfFood ; let i=index\" class=\"ion-padding meal-row\">\n    <ion-col size=\"4\" class=\"border-bottom\">\n      <div class=\"meal-image\" [style.background-image]=\"'url(' + meal.picture + ')'\"></div>\n    </ion-col>\n    <ion-col size=\"5\" class=\"border-bottom\">\n      <ion-label>\n        {{ meal.name }}\n        <p>{{ meal.description }}</p>\n      </ion-label>\n      <ion-text color=\"dark\"><b>{{ meal.price | currency:'ETB' }}</b></ion-text>\n    </ion-col>\n    <ion-col size=\"3\" class=\"border-bottom\">\n      <ion-button fill=\"solid\" (click)=\"addToCart(meal,i)\" [disabled]=\"setDisabled(meal)\">\n       <ion-icon  [name]=\"meal.isSelect?'checkmark':'add'\"></ion-icon> \n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=details-details-module-es5.js.map