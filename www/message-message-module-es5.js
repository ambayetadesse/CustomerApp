(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"], {
    /***/
    "3tpA":
    /*!*******************************************!*\
      !*** ./src/app/message/message.module.ts ***!
      \*******************************************/

    /*! exports provided: MessagePageModule */

    /***/
    function tpA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagePageModule", function () {
        return MessagePageModule;
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


      var _message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./message-routing.module */
      "DEAg");
      /* harmony import */


      var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./message.page */
      "46tz");
      /* harmony import */


      var ngx_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-autosize */
      "5eqV");

      var MessagePageModule = function MessagePageModule() {
        _classCallCheck(this, MessagePageModule);
      };

      MessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _message_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_autosize__WEBPACK_IMPORTED_MODULE_7__["AutosizeModule"]],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
      })], MessagePageModule);
      /***/
    },

    /***/
    "46tz":
    /*!*****************************************!*\
      !*** ./src/app/message/message.page.ts ***!
      \*****************************************/

    /*! exports provided: MessagePage */

    /***/
    function tz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagePage", function () {
        return MessagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./message.page.html */
      "Fyet");
      /* harmony import */


      var _message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./message.page.scss */
      "zaat");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _Service_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Service/message.service */
      "KzId");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");

      var MessagePage = /*#__PURE__*/function () {
        function MessagePage(sharedService, messageService) {
          _classCallCheck(this, MessagePage);

          this.sharedService = sharedService;
          this.messageService = messageService;
        }

        _createClass(MessagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customerName = this.sharedService.getDriverName().value; // console.log(this.customerName);

            this.driverId = this.sharedService.getDriverId().value;
            this.customerId = this.sharedService.getCustomerId().value;
            this.currentUser = this.customerId;
            this.getMessage();
          }
        }, {
          key: "getMessage",
          value: function getMessage() {
            var _this = this;

            this.messageService.getAllMessage().subscribe(function (res) {
              var messages = res.filter(function (c) {
                return c.userId == localStorage.getItem('userId') && c.driverId == _this.driverId;
              });
              _this.listOfMessage = messages.sort(function (a, b) {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
              });
              _this.currentUser = localStorage.getItem("userId");
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this2 = this;

            var data = {
              msgcontent: this.newMsg,
              date: new Date().getTime(),
              userId: this.customerId,
              driverId: this.driverId,
              sessionId: localStorage.getItem("userId")
            };
            this.listOfMessage.push(data);
            this.listOfMessage.sort(function (a, b) {
              return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
            this.messageService.create(data);
            this.newMsg = '';
            setTimeout(function () {
              _this2.content.scrollToBottom(200);
            });
          }
        }]);

        return MessagePage;
      }();

      MessagePage.ctorParameters = function () {
        return [{
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _Service_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
        }];
      };

      MessagePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]]
        }]
      };
      MessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-message',
        template: _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MessagePage);
      /***/
    },

    /***/
    "5eqV":
    /*!*************************************************************************!*\
      !*** ./node_modules/ngx-autosize/__ivy_ngcc__/fesm2015/ngx-autosize.js ***!
      \*************************************************************************/

    /*! exports provided: AutosizeDirective, AutosizeModule, ɵa */

    /***/
    function eqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutosizeDirective", function () {
        return AutosizeDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutosizeModule", function () {
        return AutosizeModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return WindowRef;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var WindowRef = /*#__PURE__*/function () {
        function WindowRef() {
          _classCallCheck(this, WindowRef);
        }

        _createClass(WindowRef, [{
          key: "nativeWindow",
          get:
          /**
           * @return {?}
           */
          function get() {
            return window;
          }
        }]);

        return WindowRef;
      }();

      WindowRef.ɵfac = function WindowRef_Factory(t) {
        return new (t || WindowRef)();
      };

      WindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WindowRef,
        factory: WindowRef.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      WindowRef.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function WindowRef_Factory() {
          return new WindowRef();
        },
        token: WindowRef,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var MAX_LOOKUP_RETRIES = 3;

      var AutosizeDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         * @param {?} _window
         * @param {?} _zone
         */
        function AutosizeDirective(element, _window, _zone) {
          _classCallCheck(this, AutosizeDirective);

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
          } else {
            this.textAreaEl = this.element.nativeElement;
            this.textAreaEl.style.overflow = 'hidden';

            this._onTextAreaFound();
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(AutosizeDirective, [{
          key: "minRows",
          set: function set(value) {
            this._minRows = value;

            if (this.textAreaEl) {
              this.textAreaEl.rows = value;
            }
          }
        }, {
          key: "onInput",
          value:
          /**
           * @param {?} textArea
           * @return {?}
           */
          function onInput(textArea) {
            this.adjust();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed = true;

            if (this._windowResizeHandler) {
              this._window.nativeWindow.removeEventListener('resize', this._windowResizeHandler, false);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this.adjust();
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.adjust(true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "_findNestedTextArea",
          value: function _findNestedTextArea() {
            var _this3 = this;

            this.textAreaEl = this.element.nativeElement.querySelector('TEXTAREA');

            if (!this.textAreaEl && this.element.nativeElement.shadowRoot) {
              this.textAreaEl = this.element.nativeElement.shadowRoot.querySelector('TEXTAREA');
            }

            if (!this.textAreaEl) {
              if (this.retries >= MAX_LOOKUP_RETRIES) {
                console.warn('ngx-autosize: textarea not found');
              } else {
                this.retries++;
                setTimeout(
                /**
                * @return {?}
                */
                function () {
                  _this3._findNestedTextArea();
                }, 100);
              }

              return;
            }

            this.textAreaEl.style.overflow = 'hidden';

            this._onTextAreaFound();
          }
          /**
           * @return {?}
           */

        }, {
          key: "_onTextAreaFound",
          value: function _onTextAreaFound() {
            var _this4 = this;

            this._addWindowResizeHandler();

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this4.adjust();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "_addWindowResizeHandler",
          value: function _addWindowResizeHandler() {
            var _this5 = this;

            this._windowResizeHandler = Debounce(
            /**
            * @return {?}
            */
            function () {
              _this5._zone.run(
              /**
              * @return {?}
              */
              function () {
                _this5.adjust();
              });
            }, 200);

            this._zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this5._window.nativeWindow.addEventListener('resize', _this5._windowResizeHandler, false);
            });
          }
          /**
           * @param {?=} inputsChanged
           * @return {?}
           */

        }, {
          key: "adjust",
          value: function adjust() {
            var inputsChanged = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!this._destroyed && this.textAreaEl && this.textAreaEl.parentNode) {
              /** @type {?} */
              var currentText = this.textAreaEl.value;

              if (inputsChanged === false && currentText === this._oldContent && this.textAreaEl.offsetWidth === this._oldWidth) {
                return;
              }

              this._oldContent = currentText;
              this._oldWidth = this.textAreaEl.offsetWidth;
              /** @type {?} */

              var clone = this.textAreaEl.cloneNode(true);
              /** @type {?} */

              var parent = this.textAreaEl.parentNode;
              clone.style.width = this.textAreaEl.offsetWidth + 'px';
              clone.style.visibility = 'hidden';
              clone.style.position = 'absolute';
              clone.textContent = currentText;
              parent.appendChild(clone);
              clone.style.overflow = 'hidden';
              clone.style.height = 'auto';
              /** @type {?} */

              var height = clone.scrollHeight; // add into height top and bottom borders' width

              /** @type {?} */

              var computedStyle = this._window.nativeWindow.getComputedStyle(clone, null);

              height += parseInt(computedStyle.getPropertyValue('border-top-width'));
              height += parseInt(computedStyle.getPropertyValue('border-bottom-width')); // add into height top and bottom paddings width

              height += parseInt(computedStyle.getPropertyValue('padding-top'));
              height += parseInt(computedStyle.getPropertyValue('padding-bottom'));
              /** @type {?} */

              var oldHeight = this.textAreaEl.offsetHeight;
              /** @type {?} */

              var willGrow = height > oldHeight;

              if (this.onlyGrow === false || willGrow) {
                /** @type {?} */
                var lineHeight = this._getLineHeight();
                /** @type {?} */


                var rowsCount = height / lineHeight;

                if (this._minRows && this._minRows >= rowsCount) {
                  height = this._minRows * lineHeight;
                } else if (this.maxRows && this.maxRows <= rowsCount) {
                  // never shrink the textarea if onlyGrow is true

                  /** @type {?} */
                  var maxHeight = this.maxRows * lineHeight;
                  height = this.onlyGrow ? Math.max(maxHeight, oldHeight) : maxHeight;
                  this.textAreaEl.style.overflow = 'auto';
                } else {
                  this.textAreaEl.style.overflow = 'hidden';
                }
                /** @type {?} */


                var heightStyle = height + 'px';
                /** @type {?} */

                var important = this.useImportant ? 'important' : '';
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

        }, {
          key: "_getLineHeight",
          value: function _getLineHeight() {
            /** @type {?} */
            var lineHeight = parseInt(this.textAreaEl.style.lineHeight, 10);

            if (isNaN(lineHeight) && this._window.nativeWindow.getComputedStyle) {
              /** @type {?} */
              var styles = this._window.nativeWindow.getComputedStyle(this.textAreaEl);

              lineHeight = parseInt(styles.lineHeight, 10);
            }

            if (isNaN(lineHeight)) {
              /** @type {?} */
              var fontSize = this._window.nativeWindow.getComputedStyle(this.textAreaEl, null).getPropertyValue('font-size');

              lineHeight = Math.floor(parseInt(fontSize.replace('px', ''), 10) * 1.5);
            }

            return lineHeight;
          }
        }]);

        return AutosizeDirective;
      }();

      AutosizeDirective.ɵfac = function AutosizeDirective_Factory(t) {
        return new (t || AutosizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      AutosizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AutosizeDirective,
        selectors: [["", "autosize", ""]],
        hostBindings: function AutosizeDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutosizeDirective_input_HostBindingHandler($event) {
              return ctx.onInput($event.target);
            });
          }
        },
        inputs: {
          onlyGrow: "onlyGrow",
          useImportant: "useImportant",
          minRows: "minRows",
          maxRows: "maxRows"
        },
        outputs: {
          resized: "resized"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      AutosizeDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: WindowRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      AutosizeDirective.propDecorators = {
        minRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onlyGrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        useImportant: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event.target']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosizeDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[autosize]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: WindowRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          onlyGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          useImportant: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          resized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],

          /**
           * @param {?} textArea
           * @return {?}
           */
          onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event.target']]
          }],
          maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @param {?} func
       * @param {?} wait
       * @param {?=} immediate
       * @return {?}
       */


      function Debounce(func, wait) {
        var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        /** @type {?} */
        var timeout;
        return (
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var context = this;
            /** @type {?} */

            var args = arguments;
            /** @type {?} */

            var later =
            /**
            * @return {?}
            */
            function later() {
              timeout = null;

              if (!immediate) {
                func.apply(context, args);
              }
            };
            /** @type {?} */


            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) {
              func.apply(context, args);
            }
          }
        );
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AutosizeModule = function AutosizeModule() {
        _classCallCheck(this, AutosizeModule);
      };

      AutosizeModule.ɵfac = function AutosizeModule_Factory(t) {
        return new (t || AutosizeModule)();
      };

      AutosizeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AutosizeModule
      });
      AutosizeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [WindowRef],
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutosizeModule, {
          declarations: [AutosizeDirective],
          exports: [AutosizeDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosizeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [AutosizeDirective],
            imports: [],
            providers: [WindowRef],
            exports: [AutosizeDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-autosize.js.map

      /***/

    },

    /***/
    "DEAg":
    /*!***************************************************!*\
      !*** ./src/app/message/message-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: MessagePageRoutingModule */

    /***/
    function DEAg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagePageRoutingModule", function () {
        return MessagePageRoutingModule;
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


      var _message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./message.page */
      "46tz");

      var routes = [{
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_3__["MessagePage"]
      }];

      var MessagePageRoutingModule = function MessagePageRoutingModule() {
        _classCallCheck(this, MessagePageRoutingModule);
      };

      MessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessagePageRoutingModule);
      /***/
    },

    /***/
    "Fyet":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function Fyet(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"detail\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{this.customerName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row *ngFor=\"let message of listOfMessage\">\n   <ion-col size=\"9\"  *ngIf=\"currentUser !== message.sessionId\"  class=\"message other-message\">\n     <b>{{message.user}}</b>\n     <span>{{message.msgcontent}}</span>\n     <div class=\"time\" text-right><br>\n     {{message.date|date:'short'}}\n     </div>\n   </ion-col>\n   <ion-col offset=\"3\" size=\"9\" *ngIf=\"currentUser === message.sessionId\" class=\"message my-message\">\n    <b>{{message.user}}</b>\n    <span>{{message.msgcontent}}</span>\n    <div class=\"time\" text-right><br>\n    {{message.date|date:'short'}}\n    </div>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-footer>\n  <ion-toolbar >\n   <ion-row align-items-center no-padding>\n     <ion-col size=\"10\">\n       <textarea autosize maxRows=\"4\" [(ngModel)]=\"newMsg\" class=\"message-input\"></textarea>\n     </ion-col>\n     <ion-col size=\"2\">\n      <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"newMsg===''\"\n      class=\"msg-btn\" (click)=\"sendMessage()\">\n      <ion-icon name=\"send-outline\"></ion-icon>\n    </ion-button>\n    </ion-col>\n   </ion-row>\n  </ion-toolbar>\n</ion-footer>\n</ion-content>\n";
      /***/
    },

    /***/
    "KzId":
    /*!********************************************!*\
      !*** ./src/app/Service/message.service.ts ***!
      \********************************************/

    /*! exports provided: MessageService */

    /***/
    function KzId(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
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


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "q3Kh");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);

      var MessageService = /*#__PURE__*/function () {
        function MessageService(db) {
          _classCallCheck(this, MessageService);

          this.db = db;
          this.messageCollectionList = db.collection('Message');
        }

        _createClass(MessageService, [{
          key: "create",
          value: function create(message) {
            return this.messageCollectionList.add(message);
          }
        }, {
          key: "getAllMessage",
          value: function getAllMessage() {
            this.messageList = this.messageCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.messageList;
          }
        }, {
          key: "updateMessage",
          value: function updateMessage(funObj, id) {
            return this.messageCollectionList.doc(id).update(funObj);
          }
        }, {
          key: "removeMessage",
          value: function removeMessage(id) {
            return this.messageCollectionList.doc(id)["delete"]();
          }
        }]);

        return MessageService;
      }();

      MessageService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MessageService);
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
    "zaat":
    /*!*******************************************!*\
      !*** ./src/app/message/message.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zaat(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.other-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.my-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.msg-btn {\n  --padding-start:0.5em;\n  --padding-end:0.5em;\n  margin-top: 10px;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-fab {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNEOztBQUNBO0VBQ0kscUNBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxzQ0FBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0oiLCJmaWxlIjoibWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXtcclxuIHBhZGRpbmc6MTBweDtcclxuIGJvcmRlci1yYWRpdXM6MTBweDtcclxuIG1hcmdpbi1ib3R0b206NHB4O1xyXG4gd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbi5vdGhlci1tZXNzYWdle1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5teS1tZXNzYWdle1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi50aW1le1xyXG4gICAgY29sb3I6ICNkZmRmZGY7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5tc2ctYnRue1xyXG4gIC0tcGFkZGluZy1zdGFydDowLjVlbTtcclxuICAtLXBhZGRpbmctZW5kOjAuNWVtO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm1lc3NhZ2UtaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbmlvbi1mYWJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=message-message-module-es5.js.map