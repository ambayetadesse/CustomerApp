(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
    /***/
    "+j7l":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function j7l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\"> \r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Sign in </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"regform\">\r\n      <h1 style=\"text-align: center\">Sign up with Your Phone Number</h1>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-label style=\"text-align: center;margin-left: 12px;\" for=\"phone\">Phone Number</ion-label><br />\r\n        </ion-row>\r\n       <ion-row>\r\n           <ngx-intl-tel-input  \r\n           [cssClass]=\"'custom'\"\r\n            [preferredCountries]=\"preferredCountries\"\r\n            [enableAutoCountrySelect]=\"true\"\r\n             [enablePlaceholder]=\"true\" \r\n             [searchCountryFlag]=\"true\"\r\n            [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\r\n             [selectFirstCountry]=\"true\"\r\n            [selectedCountryISO]=\"CountryISO.Ethiopia\"\r\n             [maxLength]=\"15\" [phoneValidation]=\"true\"\r\n            [separateDialCode]=\"true\"\r\n             [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\"\r\n            formControlName=\"phone\" \r\n            [(ngModel)]=\"phoneNumber\">\r\n          </ngx-intl-tel-input>\r\n       </ion-row>\r\n       <ion-row>\r\n          <ion-button  expand=\"full\" (click)=\"signIn(phoneNumber)\">Sign In</ion-button>\r\n        </ion-row>\r\n       </ion-grid>\r\n    </form>\r\n  <ion-content >\r\n    <div id=\"recaptcha-container\" style=\"margin-left: 43px;\r\n    margin-top: 20px;\"></div>\r\n    </ion-content>\r\n</ion-content>";
      /***/
    },

    /***/
    "7UCR":
    /*!*************************************!*\
      !*** ./src/app/user/user.module.ts ***!
      \*************************************/

    /*! exports provided: UserPageModule */

    /***/
    function UCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
        return UserPageModule;
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


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-routing.module */
      "Yu5h");
      /* harmony import */


      var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user.page */
      "7Wfj");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");

      var UserPageModule = function UserPageModule() {
        _classCallCheck(this, UserPageModule);
      };

      UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["NgxIntlTelInputModule"]],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
      })], UserPageModule);
      /***/
    },

    /***/
    "7Wfj":
    /*!***********************************!*\
      !*** ./src/app/user/user.page.ts ***!
      \***********************************/

    /*! exports provided: UserPage */

    /***/
    function Wfj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPage", function () {
        return UserPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user.page.html */
      "+j7l");
      /* harmony import */


      var _user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user.page.scss */
      "F5S9");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UserPage = /*#__PURE__*/function () {
        function UserPage(fb, alertCtrl, modalController, router) {
          _classCallCheck(this, UserPage);

          this.fb = fb;
          this.alertCtrl = alertCtrl;
          this.modalController = modalController;
          this.router = router;
          this.regform = this.fb.group({});
          this.separateDialCode = false;
          this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["SearchCountryField"];
          this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["CountryISO"];
          this.PhoneNumberFormat = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["PhoneNumberFormat"];
          this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["CountryISO"].UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["CountryISO"].UnitedKingdom];
        }

        _createClass(UserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              empId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].RecaptchaVerifier('recaptcha-container');
          }
        }, {
          key: "changePreferredCountries",
          value: function changePreferredCountries() {
            this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["CountryISO"].Ethiopia, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["CountryISO"].Eritrea];
          }
        }, {
          key: "signIn",
          value: function signIn(phoneNumber) {
            var _this = this;

            var appVerifier = this.recaptchaVerifier;
            var phoneNumberString = phoneNumber.internationalNumber;
            firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"]().signInWithPhoneNumber(phoneNumberString, appVerifier).then(function (confirmationResult) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var prompt;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.alertCtrl.create({
                          inputs: [{
                            name: 'confirmationCode',
                            placeholder: 'Confirmation Code'
                          }],
                          buttons: [{
                            text: 'Cancel',
                            handler: function handler(data) {
                              console.log('Cancel clicked');
                            }
                          }, {
                            text: 'Send',
                            handler: function handler(data) {
                              confirmationResult.confirm(data.confirmationCode).then(function (result) {
                                console.log(result.user);
                                this.router.navigate(['/menu/home']);
                              })["catch"](function (error) {});
                            }
                          }]
                        });

                      case 2:
                        prompt = _context.sent;
                        _context.next = 5;
                        return prompt.present();

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            })["catch"](function (error) {
              console.error("SMS not sent", error);
            });
          }
        }]);

        return UserPage;
      }();

      UserPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-user',
        template: _raw_loader_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserPage);
      /***/
    },

    /***/
    "F5S9":
    /*!*************************************!*\
      !*** ./src/app/user/user.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function F5S9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\n.item-seleted {\n  background-color: #e9ecef;\n  margin-right: 12px;\n  border-style: inset;\n  border-bottom-color: #17a2b8;\n  border-radius: 9px;\n  border-color: #eceeef;\n  margin-left: 12px;\n  margin-top: 12px;\n}\n\n.card {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\nion-grid {\n  margin-left: 42px;\n  background-color: #ddd;\n  border-radius: 6px;\n  margin-right: 20px;\n}\n\nion-button {\n  margin-left: 75px;\n  background-color: #ddd;\n  border-radius: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-style: initial;\n  font-size: initial;\n  text-underline-position: from-font;\n}\n\nion-button.ion-color.ion-color-primary.md.button.button-full.button-solid.ion-activatable.ion-focusable.hydrated {\n  background: #787e86;\n}\n\nion-content {\n  --offset-top: -24px;\n  --offset-bottom: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS00sVUFBVTtFQUVWLHFCQUFnQjtBQUp0Qjs7QUFTQTtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFOcEI7O0FBUUU7RUFDRSwwRUFBMEU7QUFMOUU7O0FBT0E7RUFDRSxpQkFBaUI7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUp0Qjs7QUFNQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFIcEM7O0FBS0E7RUFDRSxtQkFBNkI7QUFGL0I7O0FBSUE7RUFDRSxtQkFBYTtFQUNiLG9CQUFnQjtBQURsQiIsImZpbGUiOiJ1c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG4gXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigxMjAsIDEyNiwgMTM0KTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAvLyBtYXJnaW46IDE0cHggMDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgIC8vIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAvL2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbiB9XHJcbn1cclxuLml0ZW0tc2VsZXRlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzE3YTJiODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2VjZWVlZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCAgMTBweCAgMjBweCAgcmdiYSgwLDAsMCwwLjE5KSwgMCAgNnB4ICA2cHggIHJnYmEoMCwwLDAsMC4yMyk7XHJcbn1cclxuaW9uLWdyaWR7XHJcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zdHlsZTogaW5pdGlhbDtcclxuICBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgdGV4dC11bmRlcmxpbmUtcG9zaXRpb246IGZyb20tZm9udDtcclxufVxyXG5pb24tYnV0dG9uLmlvbi1jb2xvci5pb24tY29sb3ItcHJpbWFyeS5tZC5idXR0b24uYnV0dG9uLWZ1bGwuYnV0dG9uLXNvbGlkLmlvbi1hY3RpdmF0YWJsZS5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkIHtcclxuICBiYWNrZ3JvdW5kOnJnYigxMjAsIDEyNiwgMTM0KTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAtLW9mZnNldC10b3A6IC0yNHB4O1xyXG4gIC0tb2Zmc2V0LWJvdHRvbTogMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "Yu5h":
    /*!*********************************************!*\
      !*** ./src/app/user/user-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: UserPageRoutingModule */

    /***/
    function Yu5h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
        return UserPageRoutingModule;
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


      var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user.page */
      "7Wfj");

      var routes = [{
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
      }];

      var UserPageRoutingModule = function UserPageRoutingModule() {
        _classCallCheck(this, UserPageRoutingModule);
      };

      UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-user-module-es5.js.map