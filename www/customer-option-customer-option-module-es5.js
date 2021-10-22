(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-option-customer-option-module"], {
    /***/
    "U9X5":
    /*!*******************************************************************!*\
      !*** ./src/app/customer-option/customer-option-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CustomerOptionPageRoutingModule */

    /***/
    function U9X5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerOptionPageRoutingModule", function () {
        return CustomerOptionPageRoutingModule;
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


      var _customer_option_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customer-option.page */
      "YHxn");

      var routes = [{
        path: '',
        component: _customer_option_page__WEBPACK_IMPORTED_MODULE_3__["CustomerOptionPage"]
      }];

      var CustomerOptionPageRoutingModule = function CustomerOptionPageRoutingModule() {
        _classCallCheck(this, CustomerOptionPageRoutingModule);
      };

      CustomerOptionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomerOptionPageRoutingModule);
      /***/
    },

    /***/
    "UZRK":
    /*!***********************************************************!*\
      !*** ./src/app/customer-option/customer-option.module.ts ***!
      \***********************************************************/

    /*! exports provided: CustomerOptionPageModule */

    /***/
    function UZRK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerOptionPageModule", function () {
        return CustomerOptionPageModule;
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


      var _customer_option_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customer-option-routing.module */
      "U9X5");
      /* harmony import */


      var _customer_option_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customer-option.page */
      "YHxn");

      var CustomerOptionPageModule = function CustomerOptionPageModule() {
        _classCallCheck(this, CustomerOptionPageModule);
      };

      CustomerOptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_option_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerOptionPageRoutingModule"]],
        declarations: [_customer_option_page__WEBPACK_IMPORTED_MODULE_6__["CustomerOptionPage"]]
      })], CustomerOptionPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=customer-option-customer-option-module-es5.js.map