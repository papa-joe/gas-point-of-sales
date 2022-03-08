(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_admin-login_admin-login_module_ts"], {
    /***/
    63764:
    /*!***********************************************************!*\
      !*** ./src/app/admin-login/admin-login-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminLoginPageRoutingModule": function AdminLoginPageRoutingModule() {
          return (
            /* binding */
            _AdminLoginPageRoutingModule
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


      var _admin_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-login.page */
      13296);

      var routes = [{
        path: '',
        component: _admin_login_page__WEBPACK_IMPORTED_MODULE_0__.AdminLoginPage
      }];

      var _AdminLoginPageRoutingModule = function AdminLoginPageRoutingModule() {
        _classCallCheck(this, AdminLoginPageRoutingModule);
      };

      _AdminLoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AdminLoginPageRoutingModule);
      /***/
    },

    /***/
    82806:
    /*!***************************************************!*\
      !*** ./src/app/admin-login/admin-login.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminLoginPageModule": function AdminLoginPageModule() {
          return (
            /* binding */
            _AdminLoginPageModule
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


      var _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-login-routing.module */
      63764);
      /* harmony import */


      var _admin_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-login.page */
      13296);

      var _AdminLoginPageModule = function AdminLoginPageModule() {
        _classCallCheck(this, AdminLoginPageModule);
      };

      _AdminLoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminLoginPageRoutingModule],
        declarations: [_admin_login_page__WEBPACK_IMPORTED_MODULE_1__.AdminLoginPage]
      })], _AdminLoginPageModule);
      /***/
    },

    /***/
    13296:
    /*!*************************************************!*\
      !*** ./src/app/admin-login/admin-login.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminLoginPage": function AdminLoginPage() {
          return (
            /* binding */
            _AdminLoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_admin_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./admin-login.page.html */
      6450);
      /* harmony import */


      var _admin_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-login.page.scss */
      5263);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

      var _AdminLoginPage = /*#__PURE__*/function () {
        function AdminLoginPage(network, router) {
          _classCallCheck(this, AdminLoginPage);

          this.network = network;
          this.router = router;
        }

        _createClass(AdminLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login(n, p) {
            var _this = this;

            this.response = "";

            if (!n || !p) {
              this.response = "fill in username and password";
            } else {
              var data = {
                username: n,
                password: p
              };
              this.network.login(data).subscribe(function (res) {
                // console.log("SUCCESS ===",res);
                if (res == "error") {
                  _this.response = "Username or Password is wrong";
                } else {
                  _this.router.navigate(['/admin-dashboard']); // console.log(res);

                }
              }, function (error) {
                // console.log("ERROR ===",error);
                _this.response = 'Error, something happened';
              });
            }
          }
        }]);

        return AdminLoginPage;
      }();

      _AdminLoginPage.ctorParameters = function () {
        return [{
          type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _AdminLoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-admin-login',
        template: _raw_loader_admin_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AdminLoginPage);
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
    5263:
    /*!***************************************************!*\
      !*** ./src/app/admin-login/admin-login.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-admin-login {\n  background-color: aqua;\n}\napp-admin-login .red {\n  color: red;\n}\napp-admin-login .body {\n  color: white;\n  background-color: black;\n}\napp-admin-login .form {\n  color: white;\n  margin-top: 30%;\n}\napp-admin-login .inp {\n  color: white;\n  background-color: black;\n}\napp-admin-login .btn {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7QUFFUjtBQUNJO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFFSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQURSO0FBSUk7RUFDSSxZQUFBO0FBRlIiLCJmaWxlIjoiYWRtaW4tbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWFkbWluLWxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICAucmVke1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvZHl7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3Jte1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bntcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    6450:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content>\n  <div class=\"container-scroller\">\n    <div class=\"container-fluid page-body-wrapper full-page-wrapper\">\n      <div class=\"content-wrapper d-flex align-items-center auth\">\n        <div class=\"row flex-grow\">\n          <div class=\"col-lg-4 mx-auto\">\n            <div class=\"auth-form-light text-left p-5\">\n              <h4 style=\"color:black;\">Hello! let's get started</h4>\n              <p class=\"red\" style=\"color:red;\">{{response}}</p>\n              <h6 class=\"font-weight-light\">Sign in to continue.</h6>\n              <div class=\"pt-3\">\n                <ion-item style=\"margin-bottom: 10px;;\">\n                  <ion-input [(ngModel)]=\"username\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-input [(ngModel)]=\"password\" type=\"password\"></ion-input>\n                </ion-item>\n                <div class=\"mt-3\">\n                  <ion-button (click)=\"login(username, password)\" color=\"primary\">LOGIN\n                  </ion-button>\n                </div>\n                <div class=\"text-center mt-4 font-weight-light\"> Not an admin? <a [routerLink]=\"['/home']\" routerDirection=\"back\" class=\"text-primary\">Back</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- content-wrapper ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin-login_admin-login_module_ts-es5.js.map