(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_inventory_inventory_module_ts"], {
    /***/
    46458:
    /*!*******************************************************!*\
      !*** ./src/app/inventory/inventory-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryPageRoutingModule": function InventoryPageRoutingModule() {
          return (
            /* binding */
            _InventoryPageRoutingModule
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


      var _inventory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inventory.page */
      53534);

      var routes = [{
        path: '',
        component: _inventory_page__WEBPACK_IMPORTED_MODULE_0__.InventoryPage
      }];

      var _InventoryPageRoutingModule = function InventoryPageRoutingModule() {
        _classCallCheck(this, InventoryPageRoutingModule);
      };

      _InventoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InventoryPageRoutingModule);
      /***/
    },

    /***/
    41564:
    /*!***********************************************!*\
      !*** ./src/app/inventory/inventory.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryPageModule": function InventoryPageModule() {
          return (
            /* binding */
            _InventoryPageModule
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


      var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inventory-routing.module */
      46458);
      /* harmony import */


      var _inventory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inventory.page */
      53534);

      var _InventoryPageModule = function InventoryPageModule() {
        _classCallCheck(this, InventoryPageModule);
      };

      _InventoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventoryPageRoutingModule],
        declarations: [_inventory_page__WEBPACK_IMPORTED_MODULE_1__.InventoryPage]
      })], _InventoryPageModule);
      /***/
    },

    /***/
    53534:
    /*!*********************************************!*\
      !*** ./src/app/inventory/inventory.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryPage": function InventoryPage() {
          return (
            /* binding */
            _InventoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./inventory.page.html */
      67761);
      /* harmony import */


      var _inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inventory.page.scss */
      51785);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rope.service */
      11727);

      var _InventoryPage = /*#__PURE__*/function () {
        function InventoryPage(network) {
          _classCallCheck(this, InventoryPage);

          this.network = network;
          this.inventories = [];
          this.get_inventories();
        }

        _createClass(InventoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.get_inventories();
          }
        }, {
          key: "get_inventories",
          value: function get_inventories() {
            var _this = this;

            this.network.get_inventories().subscribe(function (res) {
              console.log("SUCCESS ===", res);
              _this.inventories = res;
              console.log(res);
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "create_inventory",
          value: function create_inventory(t, cp, p, wp, dp, iq) {
            var _this2 = this;

            this.response = "";
            this.gres = "";

            if (!t || !p || !wp || !dp || !cp || !iq) {
              this.response = "All fields are required";
            } else {
              var data = {
                title: t,
                price: p,
                wprice: wp,
                dprice: dp,
                cprice: cp,
                iqty: iq
              };
              this.network.create_inventory(data).subscribe(function (res) {
                console.log("SUCCESS ===", res);

                if (res == "bad") {
                  _this2.response = "Something went wrong, please try again";
                } else {
                  _this2.get_inventories();

                  _this2.gres = 'success';
                  _this2.title = '';
                  _this2.cprice = '';
                  _this2.price = '';
                  _this2.wprice = '';
                  _this2.dprice = '';
                  _this2.iqty = '';
                }
              }, function (error) {
                console.log("ERROR ===", error);
              });
            }
          }
        }]);

        return InventoryPage;
      }();

      _InventoryPage.ctorParameters = function () {
        return [{
          type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService
        }];
      };

      _InventoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-inventory',
        template: _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InventoryPage);
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
    51785:
    /*!***********************************************!*\
      !*** ./src/app/inventory/inventory.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".col-md-6 {\n  margin-bottom: 9px;\n}\n\n.back {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSiIsImZpbGUiOiJpbnZlbnRvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC02e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG59XHJcbi5iYWNre1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    67761:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/admin-dashboard\" routerDirection=\"back\" class=\"back\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      <ion-button text=\"\" icon=\"add\">BACK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-scroller\">\n    <!-- partial:partials/_navbar.html -->\n\n    <!-- partial -->\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 700px;\">\n      <!-- partial:partials/_sidebar.html -->\n\n      <!-- partial -->\n      <div class=\"main-panel\" style=\"width:100%;\">\n        <div class=\"content-wrapper\" style=\"padding: 0px !important;\">\n\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"card\">\n                <div class=\"card-body\" style=\"padding-right: 10px !important;padding-left: 10px !important;\">\n                  <h4 class=\"card-title\">Add Item</h4>\n                  <div class=\"form-sample\">\n                    <p class=\"red\" style=\"color:red;\">{{response}}</p>\n                    <p style=\"color: green;\">{{gres}}</p>\n\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Item name</ion-label>\n                          <ion-input [(ngModel)]=\"title\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Cost Price</ion-label>\n                          <ion-input [(ngModel)]=\"cprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Retail Price</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"price\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Wholesale Price</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"wprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Discount Price</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"dprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Quantity</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"iqty\"></ion-input>\n                        </ion-item>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <ion-button (click)=\"create_inventory(title, cprice, price, wprice, dprice, iqty)\" color=\"primary\">\n                          Submit</ion-button>\n\n\n                      </div>\n                    </div>\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n\n\n\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\" style=\"padding-right: 10px !important;padding-left: 10px !important;\">\n                  <h4 class=\"card-title\">Inventory</h4>\n                  <table class=\"table table-bordered table-responsive\">\n                    <thead>\n                      <tr>\n                        <th> # </th>\n                        <th> Title </th>\n                        <th> Cost Price </th>\n                        <th> Retail Price </th>\n                        <th> Wholesale Price </th>\n                        <th> Discount Price </th>\n                        <th> Quantity </th>\n                        <th> Action </th>\n                      </tr>\n                    </thead>\n                    <tbody *ngFor=\"let inventory of inventories\">\n                      <tr>\n                        <td> {{inventory.id}} </td>\n                        <td> {{inventory.title}} </td>\n                        <td> {{inventory.cprice}} </td>\n                        <td> {{inventory.price}} </td>\n                        <td> {{inventory.wprice}} </td>\n                        <td> {{inventory.dprice}} </td>\n                        <td> {{inventory.quantity}} </td>\n                        <td> <ion-icon [routerLink]=\"['/edit-inventory/',inventory.id]\" routerDirection=\"forward\" name=\"create-outline\"></ion-icon> </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n        <!-- content-wrapper ends -->\n        <!-- partial:partials/_footer.html -->\n        <footer class=\"footer\">\n          <div class=\"container-fluid clearfix\">\n            <span class=\"text-muted d-block text-center text-sm-left d-sm-inline-block\">Copyright © bootstrapdash.com\n              2020</span>\n          </div>\n        </footer>\n        <!-- partial -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_inventory_inventory_module_ts-es5.js.map