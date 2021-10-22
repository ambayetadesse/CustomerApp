(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["googlemap-googlemap-module"], {
    /***/
    "+dRk":
    /*!***********************************************!*\
      !*** ./src/app/googlemap/googlemap.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function dRk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map-canvas {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.map-loader-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.map-loader {\n  background: url('youps_loader.svg');\n  background-repeat: no-repeat;\n  max-width: 100%;\n  background-position: center;\n  background-size: cover;\n  width: 130px;\n  height: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdvb2dsZW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiZ29vZ2xlbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAtY2FudmFzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hcC1sb2FkZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXAtbG9hZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltZ3MveW91cHNfbG9hZGVyLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "1zug":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/googlemap/googlemap.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function zug(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button  fill=\"solid\"  shape=\"round\" color=\"light\" (click)=\"backToHome()\" >\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-button style=\"margin-left: 40px;\n    margin-bottom: 9px;\n    margin-top: 11px;\" (click)=\"loadMap()\" shape=\"round\" color=\"dark\">\n      <ion-icon  slot=\"start\" name=\"locate\"></ion-icon>\n      Where I Am\n    </ion-button> -->\n  </ion-toolbar>\n\n</ion-header>\n<div class=\"app-page\">\n  <div #map id=\"map-canvas\"></div>\n  <div class=\"map-loader-container\" *ngIf=\"!mapLoaded\">\n      <div class=\"map-loader\"></div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "MIZE":
    /*!*********************************************!*\
      !*** ./src/app/googlemap/googlemap.page.ts ***!
      \*********************************************/

    /*! exports provided: GooglemapPage */

    /***/
    function MIZE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GooglemapPage", function () {
        return GooglemapPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_googlemap_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./googlemap.page.html */
      "1zug");
      /* harmony import */


      var _googlemap_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./googlemap.page.scss */
      "+dRk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GooglemapPage = /*#__PURE__*/function () {
        function GooglemapPage() {
          _classCallCheck(this, GooglemapPage);

          this.options = {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: true,
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            zoom: 12
          };
        }

        _createClass(GooglemapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.ds = new google.maps.DirectionsService();
            this.dr = new google.maps.DirectionsRenderer({
              map: null,
              suppressMarkers: true
            });
            navigator.geolocation.getCurrentPosition(function (position) {
              _this.source = {
                lat: 9.011616509138298,
                lng: 38.73706935882969
              };
              _this.destination = {
                lat: 8.98339179692712,
                lng: 38.773790006329726
              }; // initialize the map container

              _this.map = new google.maps.Map(document.getElementById('map-canvas'), Object.assign(Object.assign({}, _this.options), {
                center: _this.source
              }));

              _this.map.addListener('tilesloaded', function () {
                _this.mapLoaded = true;
              }); // adding a marker


              var markerStart = new google.maps.Marker({
                position: _this.source,
                icon: {
                  url: './assets/imgs/truck_pin.svg',
                  anchor: new google.maps.Point(35, 10),
                  scaledSize: new google.maps.Size(100, 100)
                },
                map: _this.map
              });
              var destinationMarker = new google.maps.Marker({
                position: _this.destination,
                icon: {
                  url: './assets/imgs/destination_custom_pin.svg',
                  anchor: new google.maps.Point(35, 10),
                  scaledSize: new google.maps.Size(100, 100)
                },
                map: _this.map
              });

              _this.setRoutePolyline();
            });
          }
        }, {
          key: "setRoutePolyline",
          value: function setRoutePolyline() {
            var _this2 = this;

            var request = {
              origin: this.source,
              destination: this.destination,
              travelMode: google.maps.TravelMode.DRIVING
            };
            this.ds.route(request, function (response, status) {
              _this2.dr.setOptions({
                suppressPolylines: false,
                map: _this2.map
              });

              if (status == google.maps.DirectionsStatus.OK) {
                _this2.dr.setDirections(response);
              }
            });
          }
        }, {
          key: "backToHome",
          value: function backToHome() {// this.router.navigate(["/menu/" + this.status]);
          }
        }]);

        return GooglemapPage;
      }();

      GooglemapPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            "static": false
          }]
        }]
      };
      GooglemapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-googlemap',
        template: _raw_loader_googlemap_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_googlemap_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GooglemapPage);
      /***/
    },

    /***/
    "MjFe":
    /*!***********************************************!*\
      !*** ./src/app/googlemap/googlemap.module.ts ***!
      \***********************************************/

    /*! exports provided: GooglemapPageModule */

    /***/
    function MjFe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GooglemapPageModule", function () {
        return GooglemapPageModule;
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


      var _googlemap_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./googlemap-routing.module */
      "sK3a");
      /* harmony import */


      var _googlemap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./googlemap.page */
      "MIZE");

      var GooglemapPageModule = function GooglemapPageModule() {
        _classCallCheck(this, GooglemapPageModule);
      };

      GooglemapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _googlemap_routing_module__WEBPACK_IMPORTED_MODULE_5__["GooglemapPageRoutingModule"]],
        declarations: [_googlemap_page__WEBPACK_IMPORTED_MODULE_6__["GooglemapPage"]]
      })], GooglemapPageModule);
      /***/
    },

    /***/
    "sK3a":
    /*!*******************************************************!*\
      !*** ./src/app/googlemap/googlemap-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: GooglemapPageRoutingModule */

    /***/
    function sK3a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GooglemapPageRoutingModule", function () {
        return GooglemapPageRoutingModule;
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


      var _googlemap_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./googlemap.page */
      "MIZE");

      var routes = [{
        path: '',
        component: _googlemap_page__WEBPACK_IMPORTED_MODULE_3__["GooglemapPage"]
      }];

      var GooglemapPageRoutingModule = function GooglemapPageRoutingModule() {
        _classCallCheck(this, GooglemapPageRoutingModule);
      };

      GooglemapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GooglemapPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=googlemap-googlemap-module-es5.js.map