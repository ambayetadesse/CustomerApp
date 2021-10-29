(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "3tpA":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-routing.module */ "DEAg");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "46tz");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-autosize */ "5eqV");








let MessagePageModule = class MessagePageModule {
};
MessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _message_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_autosize__WEBPACK_IMPORTED_MODULE_7__["AutosizeModule"]
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
    })
], MessagePageModule);



/***/ }),

/***/ "46tz":
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message.page.html */ "Fyet");
/* harmony import */ var _message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.page.scss */ "zaat");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/message.service */ "KzId");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/shared.service */ "ldse");







let MessagePage = class MessagePage {
    constructor(sharedService, messageService) {
        this.sharedService = sharedService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.customerName = this.sharedService.getDriverName().value;
        // console.log(this.customerName);
        this.driverId = this.sharedService.getDriverId().value;
        this.customerId = this.sharedService.getCustomerId().value;
        this.currentUser = this.customerId;
        this.getMessage();
    }
    getMessage() {
        this.messageService.getAllMessage().subscribe(res => {
            let messages = res.filter(c => c.userId == localStorage.getItem('userId') && c.driverId == this.driverId);
            this.listOfMessage = messages.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            this.currentUser = localStorage.getItem("userId");
        });
    }
    sendMessage() {
        let data = {
            msgcontent: this.newMsg,
            date: new Date(),
            userId: this.customerId,
            driverId: this.driverId,
            sessionId: localStorage.getItem("userId")
        };
        this.listOfMessage.push(data);
        this.listOfMessage.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        this.messageService.create(data).subscribe(res => {
            alert(res.toString());
        });
        this.newMsg = '';
        setTimeout(() => {
            this.content.scrollToBottom(200);
        });
    }
};
MessagePage.ctorParameters = () => [
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _Service_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
MessagePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"],] }]
};
MessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-message',
        template: _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessagePage);



/***/ }),

/***/ "5eqV":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-autosize/__ivy_ngcc__/fesm2015/ngx-autosize.js ***!
  \*************************************************************************/
/*! exports provided: AutosizeDirective, AutosizeModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosizeDirective", function() { return AutosizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosizeModule", function() { return AutosizeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class WindowRef {
    /**
     * @return {?}
     */
    get nativeWindow() {
        return window;
    }
}
WindowRef.ɵfac = function WindowRef_Factory(t) { return new (t || WindowRef)(); };
WindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowRef, factory: WindowRef.ɵfac, providedIn: 'root' });
/** @nocollapse */ WindowRef.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function WindowRef_Factory() { return new WindowRef(); }, token: WindowRef, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAX_LOOKUP_RETRIES = 3;
class AutosizeDirective {
    /**
     * @param {?} element
     * @param {?} _window
     * @param {?} _zone
     */
    constructor(element, _window, _zone) {
        this.element = element;
        this._window = _window;
        this._zone = _zone;
        this.onlyGrow = false;
        this.useImportant = false;
        this.resized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.retries = 0;
        this._destroyed = false;
        if (this.element.nativeElement.tagName !== 'TEXTAREA') {
            this._findNestedTextArea();
        }
        else {
            this.textAreaEl = this.element.nativeElement;
            this.textAreaEl.style.overflow = 'hidden';
            this._onTextAreaFound();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minRows(value) {
        this._minRows = value;
        if (this.textAreaEl) {
            this.textAreaEl.rows = value;
        }
    }
    ;
    /**
     * @param {?} textArea
     * @return {?}
     */
    onInput(textArea) {
        this.adjust();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed = true;
        if (this._windowResizeHandler) {
            this._window.nativeWindow.removeEventListener('resize', this._windowResizeHandler, false);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.adjust();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.adjust(true);
    }
    /**
     * @return {?}
     */
    _findNestedTextArea() {
        this.textAreaEl = this.element.nativeElement.querySelector('TEXTAREA');
        if (!this.textAreaEl && this.element.nativeElement.shadowRoot) {
            this.textAreaEl = this.element.nativeElement.shadowRoot.querySelector('TEXTAREA');
        }
        if (!this.textAreaEl) {
            if (this.retries >= MAX_LOOKUP_RETRIES) {
                console.warn('ngx-autosize: textarea not found');
            }
            else {
                this.retries++;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._findNestedTextArea();
                }), 100);
            }
            return;
        }
        this.textAreaEl.style.overflow = 'hidden';
        this._onTextAreaFound();
    }
    /**
     * @return {?}
     */
    _onTextAreaFound() {
        this._addWindowResizeHandler();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.adjust();
        }));
    }
    /**
     * @return {?}
     */
    _addWindowResizeHandler() {
        this._windowResizeHandler = Debounce((/**
         * @return {?}
         */
        () => {
            this._zone.run((/**
             * @return {?}
             */
            () => {
                this.adjust();
            }));
        }), 200);
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._window.nativeWindow.addEventListener('resize', this._windowResizeHandler, false);
        }));
    }
    /**
     * @param {?=} inputsChanged
     * @return {?}
     */
    adjust(inputsChanged = false) {
        if (!this._destroyed && this.textAreaEl && this.textAreaEl.parentNode) {
            /** @type {?} */
            const currentText = this.textAreaEl.value;
            if (inputsChanged === false &&
                currentText === this._oldContent &&
                this.textAreaEl.offsetWidth === this._oldWidth) {
                return;
            }
            this._oldContent = currentText;
            this._oldWidth = this.textAreaEl.offsetWidth;
            /** @type {?} */
            const clone = this.textAreaEl.cloneNode(true);
            /** @type {?} */
            const parent = this.textAreaEl.parentNode;
            clone.style.width = this.textAreaEl.offsetWidth + 'px';
            clone.style.visibility = 'hidden';
            clone.style.position = 'absolute';
            clone.textContent = currentText;
            parent.appendChild(clone);
            clone.style.overflow = 'hidden';
            clone.style.height = 'auto';
            /** @type {?} */
            let height = clone.scrollHeight;
            // add into height top and bottom borders' width
            /** @type {?} */
            let computedStyle = this._window.nativeWindow.getComputedStyle(clone, null);
            height += parseInt(computedStyle.getPropertyValue('border-top-width'));
            height += parseInt(computedStyle.getPropertyValue('border-bottom-width'));
            // add into height top and bottom paddings width
            height += parseInt(computedStyle.getPropertyValue('padding-top'));
            height += parseInt(computedStyle.getPropertyValue('padding-bottom'));
            /** @type {?} */
            const oldHeight = this.textAreaEl.offsetHeight;
            /** @type {?} */
            const willGrow = height > oldHeight;
            if (this.onlyGrow === false || willGrow) {
                /** @type {?} */
                const lineHeight = this._getLineHeight();
                /** @type {?} */
                const rowsCount = height / lineHeight;
                if (this._minRows && this._minRows >= rowsCount) {
                    height = this._minRows * lineHeight;
                }
                else if (this.maxRows && this.maxRows <= rowsCount) {
                    // never shrink the textarea if onlyGrow is true
                    /** @type {?} */
                    const maxHeight = this.maxRows * lineHeight;
                    height = this.onlyGrow ? Math.max(maxHeight, oldHeight) : maxHeight;
                    this.textAreaEl.style.overflow = 'auto';
                }
                else {
                    this.textAreaEl.style.overflow = 'hidden';
                }
                /** @type {?} */
                const heightStyle = height + 'px';
                /** @type {?} */
                const important = this.useImportant ? 'important' : '';
                this.textAreaEl.style.setProperty('height', heightStyle, important);
                this.resized.emit(height);
            }
            parent.removeChild(clone);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _getLineHeight() {
        /** @type {?} */
        let lineHeight = parseInt(this.textAreaEl.style.lineHeight, 10);
        if (isNaN(lineHeight) && this._window.nativeWindow.getComputedStyle) {
            /** @type {?} */
            const styles = this._window.nativeWindow.getComputedStyle(this.textAreaEl);
            lineHeight = parseInt(styles.lineHeight, 10);
        }
        if (isNaN(lineHeight)) {
            /** @type {?} */
            const fontSize = this._window.nativeWindow.getComputedStyle(this.textAreaEl, null).getPropertyValue('font-size');
            lineHeight = Math.floor(parseInt(fontSize.replace('px', ''), 10) * 1.5);
        }
        return lineHeight;
    }
}
AutosizeDirective.ɵfac = function AutosizeDirective_Factory(t) { return new (t || AutosizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AutosizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutosizeDirective, selectors: [["", "autosize", ""]], hostBindings: function AutosizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutosizeDirective_input_HostBindingHandler($event) { return ctx.onInput($event.target); });
    } }, inputs: { onlyGrow: "onlyGrow", useImportant: "useImportant", minRows: "minRows", maxRows: "maxRows" }, outputs: { resized: "resized" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
AutosizeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: WindowRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
AutosizeDirective.propDecorators = {
    minRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onlyGrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useImportant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event.target'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[autosize]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: WindowRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { onlyGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], useImportant: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], 
    /**
     * @param {?} textArea
     * @return {?}
     */
    onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event.target']]
        }], maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}
/**
 * @param {?} func
 * @param {?} wait
 * @param {?=} immediate
 * @return {?}
 */
function Debounce(func, wait, immediate = false) {
    /** @type {?} */
    let timeout;
    return (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        const context = this;
        /** @type {?} */
        const args = arguments;
        /** @type {?} */
        const later = (/**
         * @return {?}
         */
        function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        });
        /** @type {?} */
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutosizeModule {
}
AutosizeModule.ɵfac = function AutosizeModule_Factory(t) { return new (t || AutosizeModule)(); };
AutosizeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AutosizeModule });
AutosizeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        WindowRef
    ], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutosizeModule, { declarations: [AutosizeDirective], exports: [AutosizeDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosizeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [AutosizeDirective],
                imports: [],
                providers: [
                    WindowRef
                ],
                exports: [AutosizeDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-autosize.js.map

/***/ }),

/***/ "DEAg":
/*!***************************************************!*\
  !*** ./src/app/message/message-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageRoutingModule", function() { return MessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.page */ "46tz");




const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_3__["MessagePage"]
    }
];
let MessagePageRoutingModule = class MessagePageRoutingModule {
};
MessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessagePageRoutingModule);



/***/ }),

/***/ "Fyet":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"detail\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{this.customerName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row *ngFor=\"let message of listOfMessage\">\n   <ion-col size=\"9\"  *ngIf=\"currentUser !== message.sessionId\"  class=\"message other-message\">\n     <b>{{message.user}}</b>\n     <span>{{message.msgcontent}}</span>\n     <div class=\"time\" text-right><br>\n     {{message.date|date:'short'}}\n     </div>\n   </ion-col>\n   <ion-col offset=\"3\" size=\"9\" *ngIf=\"currentUser === message.sessionId\" class=\"message my-message\">\n    <b>{{message.user}}</b>\n    <span>{{message.msgcontent}}</span>\n    <div class=\"time\" text-right><br>\n    {{message.date|date:'short'}}\n    </div>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-footer>\n  <ion-toolbar >\n   <ion-row align-items-center no-padding>\n     <ion-col size=\"10\">\n       <textarea autosize maxRows=\"4\" [(ngModel)]=\"newMsg\" class=\"message-input\"></textarea>\n     </ion-col>\n     <ion-col size=\"2\">\n      <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"newMsg===''\"\n      class=\"msg-btn\" (click)=\"sendMessage()\">\n      <ion-icon name=\"send-outline\"></ion-icon>\n    </ion-button>\n    </ion-col>\n   </ion-row>\n  </ion-toolbar>\n</ion-footer>\n</ion-content>\n");

/***/ }),

/***/ "KzId":
/*!********************************************!*\
  !*** ./src/app/Service/message.service.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let MessageService = class MessageService {
    constructor(http) {
        this.http = http;
        this.APIURL = 'http://localhost:49347/api';
    }
    create(val) {
        return this.http.post(this.APIURL + '/Message', val);
    }
    getAllMessage() {
        return this.http.get(this.APIURL + '/Message');
    }
    updateMessage(val) {
        return this.http.put(this.APIURL + '/Message/', val);
    }
    removeMessage(id) {
        return this.http.delete(this.APIURL + '/Message/' + id).toPromise();
    }
};
MessageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "ldse":
/*!*******************************************!*\
  !*** ./src/app/Service/shared.service.ts ***!
  \*******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let SharedService = class SharedService {
    constructor() {
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
    getCurrentAddress() {
        return this.currentAddress;
    }
    getMenuFilter() {
        return this.listOfCatagoryFilter;
    }
    getLocation() {
        return this.location;
    }
    getStatus() {
        return this.status;
    }
    getRestaurantLocation() {
        return this.RestaurantLocation;
    }
    getRestaurantId() {
        return this.resId;
    }
    getDriverId() {
        return this.deriverId;
    }
    getCustomerId() {
        return this.customerId;
    }
    getDriverName() {
        return this.driverName;
    }
};
SharedService.ctorParameters = () => [];
SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "zaat":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.other-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.my-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.msg-btn {\n  --padding-start:0.5em;\n  --padding-end:0.5em;\n  margin-top: 10px;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-fab {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIscUJBQXFCO0FBQ3RCOztBQUNBO0VBQ0kscUNBQXFDO0VBQ3JDLFdBQVc7QUFFZjs7QUFBQTtFQUNJLHNDQUFzQztFQUN0QyxXQUFVO0FBR2Q7O0FBREE7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtBQUlwQjs7QUFGQTtFQUNFLHFCQUFnQjtFQUNoQixtQkFBYztFQUNkLGdCQUFnQjtBQUtsQjs7QUFIQTtFQUNJLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQU12Qjs7QUFKQTtFQUNJLFdBQVc7QUFPZiIsImZpbGUiOiJtZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdle1xyXG4gcGFkZGluZzoxMHB4O1xyXG4gYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuLm90aGVyLW1lc3NhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm15LW1lc3NhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLnRpbWV7XHJcbiAgICBjb2xvcjogI2RmZGZkZjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLm1zZy1idG57XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OjAuNWVtO1xyXG4gIC0tcGFkZGluZy1lbmQ6MC41ZW07XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubWVzc2FnZS1pbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuaW9uLWZhYntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=message-message-module-es2015.js.map