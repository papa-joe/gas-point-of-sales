(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_edit-inventory_edit-inventory_module_ts"], {
    /***/
    74942:
    /*!*****************************************************************!*\
      !*** ./src/app/edit-inventory/edit-inventory-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditInventoryPageRoutingModule": function EditInventoryPageRoutingModule() {
          return (
            /* binding */
            _EditInventoryPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _edit_inventory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-inventory.page */
      72024);

      var routes = [{
        path: '',
        component: _edit_inventory_page__WEBPACK_IMPORTED_MODULE_0__.EditInventoryPage
      }];

      var _EditInventoryPageRoutingModule = function EditInventoryPageRoutingModule() {
        _classCallCheck(this, EditInventoryPageRoutingModule);
      };

      _EditInventoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditInventoryPageRoutingModule);
      /***/
    },

    /***/
    54452:
    /*!*********************************************************!*\
      !*** ./src/app/edit-inventory/edit-inventory.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditInventoryPageModule": function EditInventoryPageModule() {
          return (
            /* binding */
            _EditInventoryPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _edit_inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-inventory-routing.module */
      74942);
      /* harmony import */


      var _edit_inventory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-inventory.page */
      72024);

      var _EditInventoryPageModule = function EditInventoryPageModule() {
        _classCallCheck(this, EditInventoryPageModule);
      };

      _EditInventoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _edit_inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditInventoryPageRoutingModule],
        declarations: [_edit_inventory_page__WEBPACK_IMPORTED_MODULE_1__.EditInventoryPage]
      })], _EditInventoryPageModule);
      /***/
    },

    /***/
    72024:
    /*!*******************************************************!*\
      !*** ./src/app/edit-inventory/edit-inventory.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditInventoryPage": function EditInventoryPage() {
          return (
            /* binding */
            _EditInventoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_edit_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./edit-inventory.page.html */
      99014);
      /* harmony import */


      var _edit_inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-inventory.page.scss */
      743);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rope.service */
      11727);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _EditInventoryPage = /*#__PURE__*/function () {
        function EditInventoryPage(route, router, network, navCtrl) {
          var _this = this;

          _classCallCheck(this, EditInventoryPage);

          this.route = route;
          this.router = router;
          this.network = network;
          this.navCtrl = navCtrl;
          this.inventory = [];
          this.route.params.subscribe(function (param) {
            _this.id = param.id;
            console.log(_this.id);

            _this.get_inventory();
          });
        }

        _createClass(EditInventoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "get_inventory",
          value: function get_inventory() {
            var _this2 = this;

            this.network.get_inventory(this.id).subscribe(function (res) {
              console.log("SUCCESS ===", res);
              console.log(res);
              var inventory = res[0];
              _this2.title = inventory.title;
              _this2.cprice = inventory.cprice;
              _this2.price = inventory.price;
              _this2.wprice = inventory.wprice;
              _this2.dprice = inventory.dprice;
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "edit_inventory",
          value: function edit_inventory(t, cp, p, wp, dp, q) {
            var _this3 = this;

            this.gres = "";
            this.bres = "";

            if (!t || !p || !wp || !dp || !cp) {
              this.bres = "All fields are required";
            } else {
              var data = {
                title: t,
                price: p,
                wprice: wp,
                dprice: dp,
                cprice: cp,
                quantity: q,
                id: this.id
              };
              this.network.edit_inventory(data).subscribe(function (res) {
                console.log("SUCCESS ===", res);

                if (res == "bad") {
                  _this3.bres = "Something went wrong, please try again";
                } else {
                  _this3.gres = 'success';
                  _this3.title = '';
                  _this3.price = '';
                  _this3.wprice = '';
                  _this3.dprice = '';
                  _this3.cprice = '';
                  _this3.quantity = '';

                  _this3.navCtrl.navigateBack(['/inventory']);
                }
              }, function (error) {
                console.log("ERROR ===", error);
              });
            }
          }
        }, {
          key: "delete_inventory",
          value: function delete_inventory() {
            var _this4 = this;

            var data = {
              id: this.id
            };
            this.network.delete_inventory(data).subscribe(function (res) {
              console.log("SUCCESS ===", res);

              if (res == "bad") {
                _this4.bres = "Something went wrong, please try again";
              } else {
                _this4.gres = 'success';

                _this4.router.navigate(['/inventory']);
              }
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }]);

        return EditInventoryPage;
      }();

      _EditInventoryPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
        }];
      };

      _EditInventoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-inventory',
        template: _raw_loader_edit_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EditInventoryPage);
      /***/
    },

    /***/
    11727:
    /*!*********************************!*\
      !*** ./src/app/rope.service.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RopeService": function RopeService() {
          return (
            /* binding */
            _RopeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _RopeService = /*#__PURE__*/function () {
        function RopeService(http) {
          _classCallCheck(this, RopeService);

          this.http = http;
          this.ip = JSON.parse(localStorage.getItem('ip'));
          this.url = "https://agesindependentpowerplantlimited.com/api/";
          this.ourl = "https://agesindependentpowerplantlimited.com/api/";
          console.log(this.url);
        }

        _createClass(RopeService, [{
          key: "login",
          value: function login(data) {
            return this.http.post(this.url + 'login.php', data);
          }
        }, {
          key: "create_staff",
          value: function create_staff(data) {
            return this.http.post(this.url + 'create_staff.php', data);
          }
        }, {
          key: "change_passowrd",
          value: function change_passowrd(data) {
            return this.http.post(this.url + 'change_passowrd.php', data);
          }
        }, {
          key: "edit_staff",
          value: function edit_staff(data) {
            return this.http.post(this.url + 'edit_staff.php', data);
          }
        }, {
          key: "delete_staff",
          value: function delete_staff(data) {
            return this.http.post(this.url + 'delete_staff.php', data);
          }
        }, {
          key: "get_staffs",
          value: function get_staffs() {
            return this.http.get(this.url + 'get_staffs.php');
          }
        }, {
          key: "getmonthlysales",
          value: function getmonthlysales() {
            return this.http.get(this.url + 'getmonthlysales.php');
          }
        }, {
          key: "get_customers",
          value: function get_customers() {
            return this.http.get(this.url + 'get_customers.php');
          }
        }, {
          key: "create_inventory",
          value: function create_inventory(data) {
            return this.http.post(this.url + 'create_inventory.php', data);
          }
        }, {
          key: "get_inventories",
          value: function get_inventories() {
            return this.http.get(this.url + 'get_inventories.php');
          }
        }, {
          key: "get_staff",
          value: function get_staff(data) {
            return this.http.get(this.url + 'get_staff.php?id=' + data);
          }
        }, {
          key: "get_inventory",
          value: function get_inventory(data) {
            return this.http.get(this.url + 'get_inventory.php?id=' + data);
          }
        }, {
          key: "edit_inventory",
          value: function edit_inventory(data) {
            return this.http.post(this.url + 'edit_inventory.php', data);
          }
        }, {
          key: "delete_inventory",
          value: function delete_inventory(data) {
            return this.http.post(this.url + 'delete_inventory.php', data);
          }
        }, {
          key: "edit_gas",
          value: function edit_gas(data) {
            return this.http.post(this.url + 'edit_gas.php', data);
          }
        }, {
          key: "edit_g",
          value: function edit_g(data) {
            return this.http.post(this.url + 'edit_g.php', data);
          }
        }, {
          key: "get_gas_value",
          value: function get_gas_value() {
            return this.http.get(this.url + 'get_gas_value.php');
          }
        }, {
          key: "get_gas_value_online",
          value: function get_gas_value_online() {
            return this.http.get(this.ourl + 'get_gas_value.php');
          }
        }, {
          key: "sync_gas_online",
          value: function sync_gas_online() {
            return this.http.get(this.ourl + 'sync_gas_online.php');
          }
        }, {
          key: "get_info_online",
          value: function get_info_online() {
            return this.http.get(this.ourl + 'get_info_online.php');
          }
        }, {
          key: "sync_info_online",
          value: function sync_info_online() {
            return this.http.get(this.ourl + 'sync_info_online.php');
          }
        }, {
          key: "get_history",
          value: function get_history() {
            return this.http.get(this.url + 'get_history.php');
          }
        }, {
          key: "staff_login",
          value: function staff_login(data) {
            return this.http.post(this.url + 'staff_login.php', data);
          }
        }, {
          key: "add_cylinder",
          value: function add_cylinder(data) {
            return this.http.post(this.url + 'add_cylinder.php', data);
          }
        }, {
          key: "add_gprice",
          value: function add_gprice(data) {
            return this.http.post(this.url + 'add_gprice.php', data);
          }
        }, {
          key: "get_pricesperkg",
          value: function get_pricesperkg() {
            return this.http.get(this.url + 'get_pricesperkg.php');
          }
        }, {
          key: "get_pricesperkg_online",
          value: function get_pricesperkg_online() {
            return this.http.get(this.ourl + 'get_pricesperkg_online.php');
          }
        }, {
          key: "sync_cy_online",
          value: function sync_cy_online() {
            return this.http.get(this.ourl + 'sync_cy_online.php');
          }
        }, {
          key: "edit_gaspricesperkg",
          value: function edit_gaspricesperkg(data) {
            return this.http.post(this.url + 'edit_gaspricesperkg.php', data);
          }
        }, {
          key: "edit_info",
          value: function edit_info(data) {
            return this.http.post(this.url + 'edit_info.php', data);
          }
        }, {
          key: "edit_server",
          value: function edit_server(data) {
            return this.http.post(this.url + 'edit_server.php', data);
          }
        }, {
          key: "get_cylinders",
          value: function get_cylinders() {
            return this.http.get(this.url + 'get_cylinders.php');
          }
        }, {
          key: "get_info",
          value: function get_info() {
            return this.http.get(this.url + 'get_info.php');
          }
        }, {
          key: "get_cylinder",
          value: function get_cylinder(data) {
            return this.http.get(this.url + 'get_cylinder.php?id=' + data);
          }
        }, {
          key: "edit_cylinder",
          value: function edit_cylinder(data) {
            return this.http.post(this.url + 'edit_cylinder.php', data);
          }
        }, {
          key: "confirm_sales",
          value: function confirm_sales(data) {
            return this.http.post(this.url + 'confirm_sales.php', data);
          }
        }, {
          key: "search_history",
          value: function search_history(data) {
            return this.http.post(this.url + 'search_history.php', data);
          }
        }, {
          key: "search_shistory",
          value: function search_shistory(data) {
            return this.http.post(this.url + 'search_shistory.php', data);
          }
        }, {
          key: "check_tag_no",
          value: function check_tag_no(data) {
            return this.http.get(this.url + 'check_tag_no.php?tag=' + data);
          }
        }, {
          key: "get_shistory",
          value: function get_shistory(data) {
            return this.http.get(this.url + 'get_shistory.php?u=' + data);
          }
        }, {
          key: "get_sync_history",
          value: function get_sync_history(data) {
            return this.http.get(this.url + 'get_sync_history.php?u=' + data);
          }
        }, {
          key: "sync_local",
          value: function sync_local(data) {
            return this.http.get(this.url + 'sync_local.php?u=' + data);
          }
        }, {
          key: "sync_db",
          value: function sync_db(data) {
            return this.http.post('https://akpome.com/gas/sync_db.php', data);
          }
        }, {
          key: "get_customer",
          value: function get_customer(data) {
            return this.http.get(this.url + 'search_customer.php?cd=' + data);
          }
        }, {
          key: "getpast",
          value: function getpast(data) {
            return this.http.get(this.url + 'getpast.php?u=' + data);
          }
        }, {
          key: "getbardata",
          value: function getbardata(data) {
            return this.http.get(this.url + 'getbardata.php?bd=' + data);
          }
        }, {
          key: "conf",
          value: function conf(data) {
            return this.http.post(this.url + 'conf.php', data);
          }
        }]);

        return RopeService;
      }();

      _RopeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _RopeService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _RopeService);
      /***/
    },

    /***/
    743:
    /*!*********************************************************!*\
      !*** ./src/app/edit-inventory/edit-inventory.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".col-md-6 {\n  margin-bottom: 9px;\n}\n\n.back {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtaW52ZW50b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKIiwiZmlsZSI6ImVkaXQtaW52ZW50b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtNntcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxufVxyXG4uYmFja3tcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    99014:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-inventory/edit-inventory.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/inventory\" routerDirection=\"back\" class=\"back\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      <ion-button text=\"\" icon=\"add\">BACK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-scroller\">\n    <!-- partial:partials/_navbar.html -->\n\n    <!-- partial -->\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 700px;\">\n      <!-- partial:partials/_sidebar.html -->\n\n      <!-- partial -->\n      <div class=\"main-panel\" style=\"width:100%;\">\n        <div class=\"content-wrapper\">\n\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Edit Item Details</h4>\n                  <div class=\"form-sample\">\n                    <p class=\"red\" style=\"color:red;\">{{bres}}</p>\n                    <p style=\"color: green;\">{{gres}}</p>\n\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Title</ion-label>\n                          <ion-input [(ngModel)]=\"title\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Cost Price</ion-label>\n                          <ion-input [(ngModel)]=\"cprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Retail Price</ion-label>\n                          <ion-input [(ngModel)]=\"price\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Wholesale Price</ion-label>\n                          <ion-input [(ngModel)]=\"wprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Discount Price</ion-label>\n                          <ion-input [(ngModel)]=\"dprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Restock</ion-label>\n                          <ion-input [(ngModel)]=\"quantity\"></ion-input>\n                        </ion-item>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <ion-button (click)=\"edit_inventory(title, cprice, price, wprice, dprice, quantity)\"\n                          color=\"primary\">\n                          Submit</ion-button>\n\n                        <ion-button (click)=\"delete_inventory()\" color=\"danger\">\n                          Delete</ion-button>\n                      </div>\n\n                    </div>\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n\n\n        </div>\n        <!-- content-wrapper ends -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_edit-inventory_edit-inventory_module_ts-es5.js.map