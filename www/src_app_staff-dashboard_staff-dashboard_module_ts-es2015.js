(self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_staff-dashboard_staff-dashboard_module_ts"],{

/***/ 66479:
/*!*******************************************************************!*\
  !*** ./src/app/staff-dashboard/staff-dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDashboardPageRoutingModule": function() { return /* binding */ StaffDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _staff_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-dashboard.page */ 45123);




const routes = [
    {
        path: '',
        component: _staff_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.StaffDashboardPage
    }
];
let StaffDashboardPageRoutingModule = class StaffDashboardPageRoutingModule {
};
StaffDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StaffDashboardPageRoutingModule);



/***/ }),

/***/ 56961:
/*!***********************************************************!*\
  !*** ./src/app/staff-dashboard/staff-dashboard.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDashboardPageModule": function() { return /* binding */ StaffDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _staff_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-dashboard-routing.module */ 66479);
/* harmony import */ var _staff_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-dashboard.page */ 45123);







let StaffDashboardPageModule = class StaffDashboardPageModule {
};
StaffDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _staff_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffDashboardPageRoutingModule
        ],
        declarations: [_staff_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.StaffDashboardPage]
    })
], StaffDashboardPageModule);



/***/ }),

/***/ 45123:
/*!*********************************************************!*\
  !*** ./src/app/staff-dashboard/staff-dashboard.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDashboardPage": function() { return /* binding */ StaffDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_staff_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./staff-dashboard.page.html */ 9514);
/* harmony import */ var _staff_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-dashboard.page.scss */ 10383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rope.service */ 11727);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 92707);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 30331);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);








let StaffDashboardPage = class StaffDashboardPage {
    constructor(network, loadingController, router) {
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
        this.userid = JSON.parse(localStorage.getItem('userid'));
        // console.log(this.userid);
    }
    ngOnInit() {
    }
    present() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
            // duration: 5000,
            }).then(a => {
                a.present().then(() => {
                    // console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
    ionViewDidEnter() {
        this.get_gas_value();
        this.get_staff_details();
        this.get_shistory();
        this.get_sync_history();
        this.get_gas_value_online();
    }
    calc_total() {
        this.total = 0;
        this.kgt = 0;
        for (var y = 0; y < this.history.length; y++) {
            this.total += parseFloat(this.history[y]['total']);
            if (this.history[y]['type'] == 'Gas') {
                this.kgt += parseFloat(this.history[y]['item']);
            }
        }
    }
    calc_ftotal() {
        this.total = 0;
        this.kgt = 0;
        for (var y = 0; y < this.stored_history.length; y++) {
            this.total += parseFloat(this.stored_history[y]['total']);
            if (this.stored_history[y]['type'] == 'Gas') {
                this.kgt += parseFloat(this.stored_history[y]['item']);
            }
        }
    }
    get_gas_value() {
        this.network.get_gas_value().subscribe((res) => {
            // console.log("SUCCESS ===",res);
            // console.log(res);
            let gasv = res[0];
            this.gas_value = gasv.val;
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    get_gas_value_online() {
        this.network.get_gas_value_online().subscribe((res) => {
            // console.log("SUCCESS ===",res);
            // console.log(res);
            let gasv = res[0];
            this.ogas_value = gasv.val;
            if (gasv.sync == 'No') {
                this.sync_g = "true";
            }
        }, (error) => {
            // console.log("ERROR ===",error);
            this.ogres = "Check internet connection";
        });
    }
    sync_gas() {
        this.network.sync_gas_online().subscribe((res) => {
            // console.log("SUCCESS ===",res);
            // console.log(res);
            if (res == 'success') {
                this.sync_g = "false";
                let data = {
                    gas: this.ogas_value
                };
                this.network.edit_g(data).subscribe((res) => {
                    // console.log("SUCCESS ===",res);
                    if (res == "bad") {
                        this.bres = "Something went wrong, please try again";
                    }
                    else {
                        this.gres = 'success';
                        this.gas = '';
                        this.get_gas_value();
                    }
                }, (error) => {
                    this.bres = "Something went wrong";
                });
            }
            else {
                this.ogres = "Something went wrong, please try again";
            }
        }, (error) => {
            this.ogres = "Check internet connection";
            // console.log("ERROR ===",error);
        });
    }
    get_staff_details() {
        this.network.get_staff(this.userid).subscribe((res) => {
            // console.log("SUCCESS ===",res);
            // console.log(res);
            let staff = res[0];
            this.staff_name = staff.fname + ' ' + staff.lname;
            this.staff_position = staff.position;
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    get_shistory() {
        this.network.get_shistory(this.userid).subscribe((res) => {
            // console.log("SUCCESS ===",res);
            this.stored_history = res;
            this.history = this.stored_history;
            this.calc_total();
            // console.log(res);
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    get_sync_history() {
        this.network.get_sync_history(this.userid).subscribe((res) => {
            this.sync_history = res;
            if (this.sync_history.length <= 0) {
                this.sync_res = "Nothing to sync";
                this.sync_h = "true";
            }
            else {
                this.sync_res = "Something to sync";
                this.sync_h = "false";
            }
        }, (error) => {
            this.sync_res = "Check network availability";
        });
    }
    sync_db() {
        let data = {
            db: this.sync_history,
            table: 'history'
        };
        this.network.sync_db(data).subscribe((res) => {
            if (res = "success") {
                this.sync_local();
                this.sync_res = "Data synced";
            }
            else {
                this.sync_res = "Data did not sync";
            }
        }, (error) => {
            this.sync_res = "Check network availability";
        });
    }
    sync_local() {
        this.network.sync_local(this.userid).subscribe((res) => {
            if (res = "success") {
                this.sync_res = "Nothing to sync";
            }
            else {
                this.sync_res = "Something to sync";
            }
        }, (error) => {
            this.sync_res = "Check network availability";
        });
    }
    search_shistory(f, t) {
        this.present();
        let data = {
            from: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(f), 'yyyy-MM-d'),
            to: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(t), 'yyyy-MM-d'),
            u: this.userid
        };
        this.network.search_shistory(data).subscribe((res) => {
            // console.log("SUCCESS ===",res);
            if (res == "error") {
                this.bres = "email or password is wrong";
                this.dismiss();
            }
            else {
                this.stored_history = res;
                this.history = res;
                this.calc_total();
                this.dismiss();
            }
        }, (error) => {
            console.log("ERROR ===", error);
            this.dismiss();
        });
    }
    filter_history(d) {
        this.stored_history = this.history;
        if (this.sale_filter != '') {
            this.stored_history = this.stored_history.filter(record => record.sale === this.sale_filter);
            // console.log(this.history);
            this.calc_ftotal();
        }
        if (this.item_filter != '') {
            this.stored_history = this.stored_history.filter(record => record.type === this.item_filter);
            // console.log(this.history);
            this.calc_ftotal();
        }
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/home']);
    }
};
StaffDashboardPage.ctorParameters = () => [
    { type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
StaffDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-staff-dashboard',
        template: _raw_loader_staff_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_staff_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StaffDashboardPage);



/***/ }),

/***/ 10383:
/*!***********************************************************!*\
  !*** ./src/app/staff-dashboard/staff-dashboard.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFmZi1kYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9514:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-dashboard/staff-dashboard.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"container-scroller\">\n    <!-- partial:partials/_navbar.html -->\n\n    <!-- partial -->\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 800px;\">\n      <!-- partial:partials/_sidebar.html -->\n      <nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\n        <ul class=\"nav\">\n          <li class=\"nav-item nav-profile\">\n            <a [routerLink]=\"['/staffs']\" class=\"nav-link\">\n              <div class=\"nav-profile-image\">\n                <img src=\"assets/images/faces/pic-1.png\" alt=\"profile\">\n                <span class=\"login-status online\"></span>\n                <!--change to offline or busy as needed-->\n              </div>\n              <div class=\"nav-profile-text d-flex flex-column\">\n                <span class=\"font-weight-bold mb-2\">{{staff_name}}</span>\n                <span class=\"text-secondary text-small\">{{staff_position}}</span>\n              </div>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/gas-sales']\">\n              <span class=\"menu-title\">Sales</span>\n              <i class=\"mdi mdi-chart-bar menu-icon\"></i>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">\n              <span class=\"menu-title\">Logout</span>\n              <i class=\"mdi mdi-chevron-double-right menu-icon\"></i>\n            </a>\n          </li>\n        </ul>\n      </nav>\n      <!-- partial -->\n      <div class=\"main-panel\">\n        <div class=\"content-wrapper\">\n\n          <div class=\"page-header\">\n            <h3 class=\"page-title\">\n              <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\n                <i class=\"mdi mdi-home\"></i>\n              </span> Dashboard\n            </h3>\n            <nav aria-label=\"breadcrumb\">\n              <ul class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                  <span></span>Overview <i class=\"mdi mdi-alert-circle-outline icon-sm text-primary align-middle\"></i>\n                </li>\n              </ul>\n            </nav>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 stretch-card grid-margin\">\n              <div class=\"card bg-gradient-success card-img-holder text-white\">\n                <div class=\"card-body\">\n                  <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\n                  <h4 class=\"font-weight-normal mb-3\">Gas Available <i class=\"mdi mdi-diamond mdi-24px float-right\"></i>\n                  </h4>\n                  <h2 class=\"mb-5\">{{gas_value}} KG</h2>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n\n              <ion-button *ngIf=\"sync_g == 'true'\" (click)=\"sync_gas()\" color=\"primary\">SYNC LOCAL TO LIVE</ion-button>\n              <p style=\"color:red;\">{{ogres}}</p>\n            </div>\n\n            <div class=\"col-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Search Records</h4>\n\n                  <div class=\"form-sample\">\n                    <p class=\"red\" style=\"color:red;\"></p>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label>MM DD YY</ion-label>\n                          <ion-datetime [(ngModel)]=\"from\" displayFormat=\"D-MM-YYYY\" min=\"2021\"></ion-datetime>\n                        </ion-item>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label>MM DD YY</ion-label>\n                          <ion-datetime [(ngModel)]=\"to\" displayFormat=\"D-MM-YYYY\" min=\"2021\"></ion-datetime>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-button (click)=\"search_shistory(from, to)\" color=\"primary\">SEARCH\n                        </ion-button>\n                      </div>\n                    </div>\n\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        \n                        <ion-button *ngIf=\"sync_h == 'false'\" (click)=\"sync_db()\" color=\"primary\">SYNC DATABASE\n                        </ion-button>\n                        <p><small style=\"color: black;\">{{sync_res}}</small></p>\n                      </div>\n                    </div>\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Records<span style=\"float: right;\"><strong>TOtal: </strong> {{total}}<strong>\n                        Total KG: </strong> {{kgt}}</span></h4>\n                  <div class=\"form-inline\">\n\n                    <div class=\"input-group mb-2 mr-sm-4\">\n                      <div class=\"form-sample\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <label style=\"color: black;\">Sales type</label>\n                            <select (change)=\"filter_history('sale')\" [(ngModel)]=\"sale_filter\" class=\"form-control\">\n                              <option value=\"\">Filter by sale type</option>\n                              <option value=\"\">All types</option>\n                              <option value=\"Retail\">Retail</option>\n                              <option value=\"Wholesale\">Wholesale</option>\n                              <option value=\"Discount\">Discount</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n\n                    <div class=\"input-group mb-2 mr-sm-4\">\n                      <div class=\"form-sample\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <label style=\"color: black;\">Item type</label>\n                            <select (change)=\"filter_history('item')\" [(ngModel)]=\"item_filter\" class=\"form-control\">\n                              <option value=\"\">Filter by item type</option>\n                              <option value=\"Gas\">Gas</option>\n                              <option value=\"Accessory\">Accessory</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n\n\n                  </div>\n\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th> User </th>\n                          <th> Type </th>\n                          <th> Item </th>\n                          <th> Quantity </th>\n                          <th> Price </th>\n                          <th> Total </th>\n                          <th> Customer name </th>\n                          <th> Customer phone </th>\n                          <th> Amount tendered </th>\n                          <th> Change </th>\n                          <th> Ref </th>\n                          <th> Date </th>\n                        </tr>\n                      </thead>\n                      <tbody *ngFor=\"let entry of stored_history\">\n                        <tr>\n                          <td> {{entry.user}} </td>\n                          <td> {{entry.type}} </td>\n                          <td> {{entry.item}} </td>\n                          <td> {{entry.quantity}} </td>\n                          <td> {{entry.price}} </td>\n                          <td> {{entry.total}} </td>\n\n                          <td> {{entry.cname}} </td>\n                          <td> {{entry.cphone}} </td>\n                          <td> {{entry.amt_ten}} </td>\n                          <td> {{entry.chng}} </td>\n                          <td> {{entry.ref}} </td>\n                          <td> {{entry.createdat}} </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n\n\n\n\n\n        </div>\n        <!-- content-wrapper ends -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_staff-dashboard_staff-dashboard_module_ts-es2015.js.map