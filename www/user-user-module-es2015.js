(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "+j7l":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\"> \r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Sign in </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"regform\">\r\n      <h1 style=\"text-align: center\">Sign up with Your Phone Number</h1>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-label style=\"text-align: center;margin-left: 12px;\" for=\"phone\">Phone Number</ion-label><br />\r\n        </ion-row>\r\n       <ion-row>\r\n           <ngx-intl-tel-input  \r\n           [cssClass]=\"'custom'\"\r\n            [preferredCountries]=\"preferredCountries\"\r\n            [enableAutoCountrySelect]=\"true\"\r\n             [enablePlaceholder]=\"true\" \r\n             [searchCountryFlag]=\"true\"\r\n            [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\r\n             [selectFirstCountry]=\"true\"\r\n            [selectedCountryISO]=\"CountryISO.Ethiopia\"\r\n             [maxLength]=\"15\" [phoneValidation]=\"true\"\r\n            [separateDialCode]=\"true\"\r\n             [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\"\r\n            formControlName=\"phone\" \r\n            [(ngModel)]=\"phoneNumber\">\r\n          </ngx-intl-tel-input>\r\n       </ion-row>\r\n       <ion-row>\r\n          <ion-button  expand=\"full\" (click)=\"signIn(phoneNumber)\">Sign In</ion-button>\r\n        </ion-row>\r\n       </ion-grid>\r\n    </form>\r\n  <ion-content >\r\n    <div id=\"recaptcha-container\" style=\"margin-left: 43px;\r\n    margin-top: 20px;\"></div>\r\n    </ion-content>\r\n</ion-content>");

/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "Yu5h");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "7Wfj");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");








let UserPageModule = class UserPageModule {
};
UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"],
            ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["NgxIntlTelInputModule"]
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })
], UserPageModule);



/***/ }),

/***/ "7Wfj":
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.page.html */ "+j7l");
/* harmony import */ var _user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.page.scss */ "F5S9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let UserPage = class UserPage {
    constructor(fb, alertCtrl, modalController, router) {
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
    ngOnInit() {
        this.regform = this.fb.group({
            empId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].RecaptchaVerifier('recaptcha-container');
    }
    changePreferredCountries() {
        this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["CountryISO"].Ethiopia, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["CountryISO"].Eritrea];
    }
    signIn(phoneNumber) {
        const appVerifier = this.recaptchaVerifier;
        const phoneNumberString = phoneNumber.internationalNumber;
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"]().signInWithPhoneNumber(phoneNumberString, appVerifier)
            .then((confirmationResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let prompt = yield this.alertCtrl.create({
                inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
                buttons: [
                    { text: 'Cancel',
                        handler: data => { console.log('Cancel clicked'); }
                    },
                    { text: 'Send',
                        handler: data => {
                            confirmationResult.confirm(data.confirmationCode)
                                .then(function (result) {
                                console.log(result.user);
                                this.router.navigate(['/menu/home']);
                            }).catch(function (error) {
                            });
                        }
                    }
                ]
            });
            yield prompt.present();
        }))
            .catch(function (error) {
            console.error("SMS not sent", error);
        });
    }
};
UserPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-user',
        template: _raw_loader_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserPage);



/***/ }),

/***/ "F5S9":
/*!*************************************!*\
  !*** ./src/app/user/user.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\n.item-seleted {\n  background-color: #e9ecef;\n  margin-right: 12px;\n  border-style: inset;\n  border-bottom-color: #17a2b8;\n  border-radius: 9px;\n  border-color: #eceeef;\n  margin-left: 12px;\n  margin-top: 12px;\n}\n\n.card {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\nion-grid {\n  margin-left: 42px;\n  background-color: #ddd;\n  border-radius: 6px;\n  margin-right: 20px;\n}\n\nion-button {\n  margin-left: 75px;\n  background-color: #ddd;\n  border-radius: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-style: initial;\n  font-size: initial;\n  text-underline-position: from-font;\n}\n\nion-button.ion-color.ion-color-primary.md.button.button-full.button-solid.ion-activatable.ion-focusable.hydrated {\n  background: #787e86;\n}\n\nion-content {\n  --offset-top: -24px;\n  --offset-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBRUUsVUFBQTtFQUVBLHFCQUFBO0FBSk47O0FBU0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBUUU7RUFDRSwwRUFBQTtBQUxKOztBQU9BO0VBQ0UsaUJBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFIRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBREYiLCJmaWxlIjoidXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgLy8gbWFyZ2luOiAxNHB4IDA7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAvLyBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gfVxyXG59XHJcbi5pdGVtLXNlbGV0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMxN2EyYjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNlY2VlZWY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgIDEwcHggIDIwcHggIHJnYmEoMCwwLDAsMC4xOSksIDAgIDZweCAgNnB4ICByZ2JhKDAsMCwwLDAuMjMpO1xyXG59XHJcbmlvbi1ncmlke1xyXG4gIG1hcmdpbi1sZWZ0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgZm9udC1zaXplOiBpbml0aWFsO1xyXG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiBmcm9tLWZvbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbi5pb24tY29sb3IuaW9uLWNvbG9yLXByaW1hcnkubWQuYnV0dG9uLmJ1dHRvbi1mdWxsLmJ1dHRvbi1zb2xpZC5pb24tYWN0aXZhdGFibGUuaW9uLWZvY3VzYWJsZS5oeWRyYXRlZCB7XHJcbiAgYmFja2dyb3VuZDpyZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1vZmZzZXQtdG9wOiAtMjRweDtcclxuICAtLW9mZnNldC1ib3R0b206IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "Yu5h":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function() { return UserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.page */ "7Wfj");




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map