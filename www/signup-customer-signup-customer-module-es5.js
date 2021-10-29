(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-customer-signup-customer-module"], {
    /***/
    "0jBB":
    /*!*******************************************************************!*\
      !*** ./src/app/signup-customer/signup-customer-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SignupCustomerPageRoutingModule */

    /***/
    function jBB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupCustomerPageRoutingModule", function () {
        return SignupCustomerPageRoutingModule;
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


      var _signup_customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup-customer.page */
      "mlHJ");

      var routes = [{
        path: '',
        component: _signup_customer_page__WEBPACK_IMPORTED_MODULE_3__["SignupCustomerPage"]
      }];

      var SignupCustomerPageRoutingModule = function SignupCustomerPageRoutingModule() {
        _classCallCheck(this, SignupCustomerPageRoutingModule);
      };

      SignupCustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupCustomerPageRoutingModule);
      /***/
    },

    /***/
    "LWGn":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-customer/signup-customer.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LWGn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\"> \n        <ion-back-button defaultHref=\"login\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Sign in </ion-title>\n  </ion-toolbar>\n  <p color=\"primary\" style=\"padding-left: 20px;padding-top: 20px;background-color: #3880ff;\">Create an account with new email address</p>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label>Full Name</ion-label>\n      <ion-input formControlName=\"FullName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email </ion-label>\n      <ion-input formControlName=\"email\" type=\"text\"></ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label>Phone number</ion-label>\n      <ion-input formControlName=\"phonenumber\" type=\"text\"></ion-input>\n    </ion-item> -->\n    <ion-item-group>\n      <ion-row>\n        <ion-label style=\"margin-left: 11px;\n        padding-top: 11px;\">Phone number</ion-label>\n      </ion-row>\n      <ion-row>\n        <ngx-intl-tel-input \n        style=\"margin-left: 24px;\n        padding-top: 11px;\" \n        [cssClass]=\"'custom'\"\n         [preferredCountries]=\"preferredCountries\"\n         [enableAutoCountrySelect]=\"true\"\n          [enablePlaceholder]=\"true\" \n          [searchCountryFlag]=\"true\"\n         [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\n          [selectFirstCountry]=\"true\"\n         [selectedCountryISO]=\"CountryISO.Ethiopia\"\n          [maxLength]=\"15\" [phoneValidation]=\"true\"\n         [separateDialCode]=\"true\"\n          [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\"\n         formControlName=\"phonenumber\" \n         [(ngModel)]=\"phoneNumber\">\n       </ngx-intl-tel-input>\n      </ion-row>\n    </ion-item-group>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input [type]=\"fieldTextType ? 'text' : 'password'\" formControlName=\"password\" [required]></ion-input>\n      <i class=\"fa\" [ngClass]=\"{'fa-eye-slash': !fieldTextType,'fa-eye': fieldTextType }\"\n        (click)=\"toggleFieldTextType()\"></i>\n    </ion-item>\n    <ion-item>\n      <ion-label>Confirm Password</ion-label>\n      <ion-input [type]=\"conformPassword ? 'text' : 'password'\" formControlName=\"confirmPassword\" [required]>\n      </ion-input>\n      <i class=\"fa\" [ngClass]=\"{'fa-eye-slash': !conformPassword,'fa-eye': conformPassword }\" \n        (click)=\"conPassword()\"></i>\n    </ion-item>\n    <div style=\"text-align: center; margin: auto\">\n      <ion-button expand=\"full\" (click)=\"registerAccount()\">\n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        Sign Up\n      </ion-button>\n    </div>\n    <ion-item>\n      <ion-label style=\"text-align: center\">Already have an account ?</ion-label>\n      <button style=\"margin-left: -37px; color: #234ada; background-color: #f8f9fa\" (click)=\"login()\">\n        Login\n      </button>\n    </ion-item>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "QpyC":
    /*!***********************************************************!*\
      !*** ./src/app/signup-customer/signup-customer.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function QpyC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\nion-content ion-segment {\n  margin: 5px 0;\n}\n\nion-header {\n  background-color: #3880ff;\n  border-radius: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ251cC1jdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLUSxVQUFVO0VBRVYscUJBQWdCO0FBSnhCOztBQUhBO0VBWUkscUJBQWdCO0VBQ2hCLGdDQUFhO0VBQ2IsaUJBQWlCO0FBTHJCOztBQVFFO0VBQ0UsYUFBYTtBQUxqQjs7QUFPRTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFKdkIiLCJmaWxlIjoic2lnbnVwLWN1c3RvbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDMsOTAsMTQ4LDEpIDAlLCByZ2JhKDQ1LDExMiwyMjksMSkgMzUlLCByZ2JhKDQ1LDExMiwyMjksMSkgMTAwJSk7XHJcbiAgIFxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDEyMCwgMTI2LCAxMzQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAvLyBtYXJnaW46IDE0cHggMDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAvLyBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIH1cclxuICAgaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gICAgbWFyZ2luLXRvcDogLTEzcHg7XHJcbiAgIH1cclxuICB9XHJcbiAgaW9uLWNvbnRlbnQgaW9uLXNlZ21lbnQge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbiAgaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "Tftg":
    /*!***********************************************************!*\
      !*** ./src/app/signup-customer/signup-customer.module.ts ***!
      \***********************************************************/

    /*! exports provided: SignupCustomerPageModule */

    /***/
    function Tftg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupCustomerPageModule", function () {
        return SignupCustomerPageModule;
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


      var _signup_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-customer-routing.module */
      "0jBB");
      /* harmony import */


      var _signup_customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup-customer.page */
      "mlHJ");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");

      var SignupCustomerPageModule = function SignupCustomerPageModule() {
        _classCallCheck(this, SignupCustomerPageModule);
      };

      SignupCustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupCustomerPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["NgxIntlTelInputModule"]],
        declarations: [_signup_customer_page__WEBPACK_IMPORTED_MODULE_6__["SignupCustomerPage"]]
      })], SignupCustomerPageModule);
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
    "mlHJ":
    /*!*********************************************************!*\
      !*** ./src/app/signup-customer/signup-customer.page.ts ***!
      \*********************************************************/

    /*! exports provided: SignupCustomerPage */

    /***/
    function mlHJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupCustomerPage", function () {
        return SignupCustomerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_customer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup-customer.page.html */
      "LWGn");
      /* harmony import */


      var _signup_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup-customer.page.scss */
      "QpyC");
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


      var _Service_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/account.service */
      "6wYF");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");

      var SignupCustomerPage = /*#__PURE__*/function () {
        function SignupCustomerPage(fb, accountService, alertController, router, geolocation, sharedService) {
          _classCallCheck(this, SignupCustomerPage);

          this.fb = fb;
          this.accountService = accountService;
          this.alertController = alertController;
          this.router = router;
          this.geolocation = geolocation;
          this.sharedService = sharedService;
          this.regform = this.fb.group({});
          this.separateDialCode = false;
          this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__["SearchCountryField"];
          this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__["CountryISO"];
          this.PhoneNumberFormat = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__["PhoneNumberFormat"];
          this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__["CountryISO"].UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__["CountryISO"].UnitedKingdom];
          this.latitude = 0; //latitude

          this.longitude = 0; //longitude
        }

        _createClass(SignupCustomerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var currentAddress = this.sharedService.getCurrentAddress().value;
            console.log(currentAddress);
            this.regform = this.fb.group({
              FullName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              phonenumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              locationId: [''],
              password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              type: [""],
              active: [""]
            });
            this.getCurrentCoordinates();
          }
        }, {
          key: "getCurrentCoordinates",
          value: function getCurrentCoordinates() {
            var _this = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this.latitude = resp.coords.latitude;
              _this.longitude = resp.coords.longitude;
              _this.Address = {
                lat: _this.latitude,
                lon: _this.longitude
              };

              _this.sharedService.currentAddress.next(_this.Address); // this.getAddress(this.latitude,this.longitude);


              console.log(resp.coords);
            })["catch"](function (error) {
              console.log('Error getting location', error);
            });
          }
        }, {
          key: "registerAccount",
          value: function registerAccount() {
            if (this.regform.get("password").value === this.regform.get("confirmPassword").value) {
              if (this.regform.valid) {
                this.regform.get("locationId").setValue(this.Address);
                this.regform.get("active").setValue("true");
                this.regform.get("type").setValue("customer");
                this.regform.get("phonenumber").setValue(this.regform.get("phonenumber").value.internationalNumber);
                this.accountService.create(this.regform.value).subscribe(function (res) {// alert(res.toString());
                });
                this.router.navigate(["/menu/login"]);
              } else {
                this.ErrorAlert("Please Enter All field.");
              }
            } else {
              this.ErrorAlert("Password donot match");
            }
          }
        }, {
          key: "login",
          value: function login() {
            this.router.navigate(["/menu/login"]);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(account) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Confirm!',
                        message: '<strong>Are you sure you want delete?</strong>',
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
                            _this2.accountService.removeAccount(account.id);

                            _this2.regform.reset();

                            _this2.accountId = null;
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
          key: "ErrorAlert",
          value: function ErrorAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        // subHeader: 'Subtitle',
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "toggleFieldTextType",
          value: function toggleFieldTextType() {
            this.fieldTextType = !this.fieldTextType;
          }
        }, {
          key: "conPassword",
          value: function conPassword() {
            this.conformPassword = !this.conformPassword;
          }
        }]);

        return SignupCustomerPage;
      }();

      SignupCustomerPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
        }];
      };

      SignupCustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup-customer',
        template: _raw_loader_signup_customer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignupCustomerPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-customer-signup-customer-module-es5.js.map