(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_staff-dashboard_staff-dashboard_module_ts"], {
    /***/
    66479:
    /*!*******************************************************************!*\
      !*** ./src/app/staff-dashboard/staff-dashboard-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StaffDashboardPageRoutingModule": function StaffDashboardPageRoutingModule() {
          return (
            /* binding */
            _StaffDashboardPageRoutingModule
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


      var _staff_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./staff-dashboard.page */
      45123);

      var routes = [{
        path: '',
        component: _staff_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.StaffDashboardPage
      }];

      var _StaffDashboardPageRoutingModule = function StaffDashboardPageRoutingModule() {
        _classCallCheck(this, StaffDashboardPageRoutingModule);
      };

      _StaffDashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StaffDashboardPageRoutingModule);
      /***/
    },

    /***/
    56961:
    /*!***********************************************************!*\
      !*** ./src/app/staff-dashboard/staff-dashboard.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StaffDashboardPageModule": function StaffDashboardPageModule() {
          return (
            /* binding */
            _StaffDashboardPageModule
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


      var _staff_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./staff-dashboard-routing.module */
      66479);
      /* harmony import */


      var _staff_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./staff-dashboard.page */
      45123);

      var _StaffDashboardPageModule = function StaffDashboardPageModule() {
        _classCallCheck(this, StaffDashboardPageModule);
      };

      _StaffDashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _staff_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffDashboardPageRoutingModule],
        declarations: [_staff_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.StaffDashboardPage]
      })], _StaffDashboardPageModule);
      /***/
    },

    /***/
    45123:
    /*!*********************************************************!*\
      !*** ./src/app/staff-dashboard/staff-dashboard.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StaffDashboardPage": function StaffDashboardPage() {
          return (
            /* binding */
            _StaffDashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_staff_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./staff-dashboard.page.html */
      9514);
      /* harmony import */


      var _staff_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./staff-dashboard.page.scss */
      10383);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rope.service */
      11727);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      92707);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! date-fns */
      30331);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _StaffDashboardPage = /*#__PURE__*/function () {
        function StaffDashboardPage(network, loadingController, router) {
          _classCallCheck(this, StaffDashboardPage);

          this.network = network;
          this.loadingController = loadingController;
          this.router = router;
          this.history = [];
          this.sync_history = [];
          this.total = 0;
          this.kgt = 0;
          this.rst = 0;
          this.wst = 0;
          this.dst = 0;
          this.sale_filter = '';
          this.item_filter = '';
          this.isLoading = false;
          this.sync_res = '';
          this.userid = JSON.parse(localStorage.getItem('userid')); // console.log(this.userid);
        }

        _createClass(StaffDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "present",
          value: function present() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isLoading = true;
                      _context.next = 3;
                      return this.loadingController.create({// duration: 5000,
                      }).then(function (a) {
                        a.present().then(function () {
                          // console.log('presented');
                          if (!_this.isLoading) {
                            a.dismiss().then(function () {
                              return console.log('abort presenting');
                            });
                          }
                        });
                      });

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = false;
                      _context2.next = 3;
                      return this.loadingController.dismiss().then(function () {
                        return console.log('dismissed');
                      });

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.get_gas_value();
            this.get_staff_details();
            this.get_shistory();
            this.get_sync_history();
            this.get_gas_value_online();
          }
        }, {
          key: "calc_total",
          value: function calc_total() {
            this.total = 0;
            this.kgt = 0;

            for (var y = 0; y < this.history.length; y++) {
              this.total += parseFloat(this.history[y]['total']);

              if (this.history[y]['type'] == 'Gas') {
                this.kgt += parseFloat(this.history[y]['item']);
              }
            }
          }
        }, {
          key: "calc_ftotal",
          value: function calc_ftotal() {
            this.total = 0;
            this.kgt = 0;

            for (var y = 0; y < this.stored_history.length; y++) {
              this.total += parseFloat(this.stored_history[y]['total']);

              if (this.stored_history[y]['type'] == 'Gas') {
                this.kgt += parseFloat(this.stored_history[y]['item']);
              }
            }
          }
        }, {
          key: "get_gas_value",
          value: function get_gas_value() {
            var _this2 = this;

            this.network.get_gas_value().subscribe(function (res) {
              // console.log("SUCCESS ===",res);
              // console.log(res);
              var gasv = res[0];
              _this2.gas_value = gasv.val;
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "get_gas_value_online",
          value: function get_gas_value_online() {
            var _this3 = this;

            this.network.get_gas_value_online().subscribe(function (res) {
              // console.log("SUCCESS ===",res);
              // console.log(res);
              var gasv = res[0];
              _this3.ogas_value = gasv.val;

              if (gasv.sync == 'No') {
                _this3.sync_g = "true";
              }
            }, function (error) {
              // console.log("ERROR ===",error);
              _this3.ogres = "Check internet connection";
            });
          }
        }, {
          key: "sync_gas",
          value: function sync_gas() {
            var _this4 = this;

            this.network.sync_gas_online().subscribe(function (res) {
              // console.log("SUCCESS ===",res);
              // console.log(res);
              if (res == 'success') {
                _this4.sync_g = "false";
                var data = {
                  gas: _this4.ogas_value
                };

                _this4.network.edit_g(data).subscribe(function (res) {
                  // console.log("SUCCESS ===",res);
                  if (res == "bad") {
                    _this4.bres = "Something went wrong, please try again";
                  } else {
                    _this4.gres = 'success';
                    _this4.gas = '';

                    _this4.get_gas_value();
                  }
                }, function (error) {
                  _this4.bres = "Something went wrong";
                });
              } else {
                _this4.ogres = "Something went wrong, please try again";
              }
            }, function (error) {
              _this4.ogres = "Check internet connection"; // console.log("ERROR ===",error);
            });
          }
        }, {
          key: "get_staff_details",
          value: function get_staff_details() {
            var _this5 = this;

            this.network.get_staff(this.userid).subscribe(function (res) {
              // console.log("SUCCESS ===",res);
              // console.log(res);
              var staff = res[0];
              _this5.staff_name = staff.fname + ' ' + staff.lname;
              _this5.staff_position = staff.position;
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "get_shistory",
          value: function get_shistory() {
            var _this6 = this;

            this.network.get_shistory(this.userid).subscribe(function (res) {
              // console.log("SUCCESS ===",res);
              _this6.stored_history = res;
              _this6.history = _this6.stored_history;

              _this6.calc_total(); // console.log(res);

            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "get_sync_history",
          value: function get_sync_history() {
            var _this7 = this;

            this.network.get_sync_history(this.userid).subscribe(function (res) {
              _this7.sync_history = res;

              if (_this7.sync_history.length <= 0) {
                _this7.sync_res = "Nothing to sync";
                _this7.sync_h = "true";
              } else {
                _this7.sync_res = "Something to sync";
                _this7.sync_h = "false";
              }
            }, function (error) {
              _this7.sync_res = "Check network availability";
            });
          }
        }, {
          key: "sync_db",
          value: function sync_db() {
            var _this8 = this;

            var data = {
              db: this.sync_history,
              table: 'history'
            };
            this.network.sync_db(data).subscribe(function (res) {
              if (res = "success") {
                _this8.sync_local();

                _this8.sync_res = "Data synced";
              } else {
                _this8.sync_res = "Data did not sync";
              }
            }, function (error) {
              _this8.sync_res = "Check network availability";
            });
          }
        }, {
          key: "sync_local",
          value: function sync_local() {
            var _this9 = this;

            this.network.sync_local(this.userid).subscribe(function (res) {
              if (res = "success") {
                _this9.sync_res = "Nothing to sync";
              } else {
                _this9.sync_res = "Something to sync";
              }
            }, function (error) {
              _this9.sync_res = "Check network availability";
            });
          }
        }, {
          key: "search_shistory",
          value: function search_shistory(f, t) {
            var _this10 = this;

            this.present();
            var data = {
              from: (0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(f), 'yyyy-MM-d'),
              to: (0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(t), 'yyyy-MM-d'),
              u: this.userid
            };
            this.network.search_shistory(data).subscribe(function (res) {
              // console.log("SUCCESS ===",res);
              if (res == "error") {
                _this10.bres = "email or password is wrong";

                _this10.dismiss();
              } else {
                _this10.stored_history = res;
                _this10.history = res;

                _this10.calc_total();

                _this10.dismiss();
              }
            }, function (error) {
              console.log("ERROR ===", error);

              _this10.dismiss();
            });
          }
        }, {
          key: "filter_history",
          value: function filter_history(d) {
            var _this11 = this;

            this.stored_history = this.history;

            if (this.sale_filter != '') {
              this.stored_history = this.stored_history.filter(function (record) {
                return record.sale === _this11.sale_filter;
              }); // console.log(this.history);

              this.calc_ftotal();
            }

            if (this.item_filter != '') {
              this.stored_history = this.stored_history.filter(function (record) {
                return record.type === _this11.item_filter;
              }); // console.log(this.history);

              this.calc_ftotal();
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.router.navigate(['/home']);
          }
        }]);

        return StaffDashboardPage;
      }();

      _StaffDashboardPage.ctorParameters = function () {
        return [{
          type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _StaffDashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-staff-dashboard',
        template: _raw_loader_staff_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_staff_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StaffDashboardPage);
      /***/
    },

    /***/
    10383:
    /*!***********************************************************!*\
      !*** ./src/app/staff-dashboard/staff-dashboard.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFmZi1kYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    9514:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-dashboard/staff-dashboard.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"container-scroller\">\n    <!-- partial:partials/_navbar.html -->\n\n    <!-- partial -->\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 800px;\">\n      <!-- partial:partials/_sidebar.html -->\n      <nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\n        <ul class=\"nav\">\n          <li class=\"nav-item nav-profile\">\n            <a [routerLink]=\"['/staffs']\" class=\"nav-link\">\n              <div class=\"nav-profile-image\">\n                <img src=\"assets/images/faces/pic-1.png\" alt=\"profile\">\n                <span class=\"login-status online\"></span>\n                <!--change to offline or busy as needed-->\n              </div>\n              <div class=\"nav-profile-text d-flex flex-column\">\n                <span class=\"font-weight-bold mb-2\">{{staff_name}}</span>\n                <span class=\"text-secondary text-small\">{{staff_position}}</span>\n              </div>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/gas-sales']\">\n              <span class=\"menu-title\">Sales</span>\n              <i class=\"mdi mdi-chart-bar menu-icon\"></i>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">\n              <span class=\"menu-title\">Logout</span>\n              <i class=\"mdi mdi-chevron-double-right menu-icon\"></i>\n            </a>\n          </li>\n        </ul>\n      </nav>\n      <!-- partial -->\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n\n          <div class=\"page-header\">\n            <h3 class=\"page-title\">\n              <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n                <i class=\"mdi mdi-home\"></i>\n              </span> Dashboard\n            </h3>\n            <nav aria-label=\"breadcrumb\">\n              <ul class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                  <span></span>Overview <i class=\"mdi mdi-alert-circle-outline icon-sm text-primary align-middle\"></i>\n                </li>\n              </ul>\n            </nav>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 stretch-card grid-margin\">\n              <div class=\"card bg-gradient-success card-img-holder text-white\">\n                <div class=\"card-body\">\n                  <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\n                  <h4 class=\"font-weight-normal mb-3\">Gas Available <i class=\"mdi mdi-diamond mdi-24px float-right\"></i>\n                  </h4>\n                  <h2 class=\"mb-5\">{{gas_value}} KG</h2>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n\n              <ion-button *ngIf=\"sync_g == 'true'\" (click)=\"sync_gas()\" color=\"primary\">SYNC LOCAL TO LIVE</ion-button>\n              <p style=\"color:red;\">{{ogres}}</p>\n            </div>\n\n            <div class=\"col-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Search Records</h4>\n\n                  <div class=\"form-sample\">\n                    <p class=\"red\" style=\"color:red;\"></p>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label>MM DD YY</ion-label>\n                          <ion-datetime [(ngModel)]=\"from\" displayFormat=\"D-MM-YYYY\" min=\"2021\"></ion-datetime>\n                        </ion-item>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label>MM DD YY</ion-label>\n                          <ion-datetime [(ngModel)]=\"to\" displayFormat=\"D-MM-YYYY\" min=\"2021\"></ion-datetime>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-button (click)=\"search_shistory(from, to)\" color=\"primary\">SEARCH\n                        </ion-button>\n                      </div>\n                    </div>\n\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        \n                        <ion-button *ngIf=\"sync_h == 'false'\" (click)=\"sync_db()\" color=\"primary\">SYNC DATABASE\n                        </ion-button>\n                        <p><small style=\"color: black;\">{{sync_res}}</small></p>\n                      </div>\n                    </div>\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Records<span style=\"float: right;\"><strong>TOtal: </strong> {{total}}<strong>\n                        Total KG: </strong> {{kgt}}</span></h4>\n                  <div class=\"form-inline\">\n\n                    <div class=\"input-group mb-2 mr-sm-4\">\n                      <div class=\"form-sample\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <label style=\"color: black;\">Sales type</label>\n                            <select (change)=\"filter_history('sale')\" [(ngModel)]=\"sale_filter\" class=\"form-control\">\n                              <option value=\"\">Filter by sale type</option>\n                              <option value=\"\">All types</option>\n                              <option value=\"Retail\">Retail</option>\n                              <option value=\"Wholesale\">Wholesale</option>\n                              <option value=\"Discount\">Discount</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n\n                    <div class=\"input-group mb-2 mr-sm-4\">\n                      <div class=\"form-sample\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <label style=\"color: black;\">Item type</label>\n                            <select (change)=\"filter_history('item')\" [(ngModel)]=\"item_filter\" class=\"form-control\">\n                              <option value=\"\">Filter by item type</option>\n                              <option value=\"Gas\">Gas</option>\n                              <option value=\"Accessory\">Accessory</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n\n\n                  </div>\n\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th> User </th>\n                          <th> Type </th>\n                          <th> Item </th>\n                          <th> Quantity </th>\n                          <th> Price </th>\n                          <th> Total </th>\n                          <th> Customer name </th>\n                          <th> Customer phone </th>\n                          <th> Amount tendered </th>\n                          <th> Change </th>\n                          <th> Ref </th>\n                          <th> Date </th>\n                        </tr>\n                      </thead>\n                      <tbody *ngFor=\"let entry of stored_history\">\n                        <tr>\n                          <td> {{entry.user}} </td>\n                          <td> {{entry.type}} </td>\n                          <td> {{entry.item}} </td>\n                          <td> {{entry.quantity}} </td>\n                          <td> {{entry.price}} </td>\n                          <td> {{entry.total}} </td>\n\n                          <td> {{entry.cname}} </td>\n                          <td> {{entry.cphone}} </td>\n                          <td> {{entry.amt_ten}} </td>\n                          <td> {{entry.chng}} </td>\n                          <td> {{entry.ref}} </td>\n                          <td> {{entry.createdat}} </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n\n\n\n\n\n        </div>\n        <!-- content-wrapper ends -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_staff-dashboard_staff-dashboard_module_ts-es5.js.map