(self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_admin-login_admin-login_module_ts"],{

/***/ 63764:
/*!***********************************************************!*\
  !*** ./src/app/admin-login/admin-login-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLoginPageRoutingModule": function() { return /* binding */ AdminLoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _admin_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login.page */ 13296);




const routes = [
    {
        path: '',
        component: _admin_login_page__WEBPACK_IMPORTED_MODULE_0__.AdminLoginPage
    }
];
let AdminLoginPageRoutingModule = class AdminLoginPageRoutingModule {
};
AdminLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminLoginPageRoutingModule);



/***/ }),

/***/ 82806:
/*!***************************************************!*\
  !*** ./src/app/admin-login/admin-login.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLoginPageModule": function() { return /* binding */ AdminLoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login-routing.module */ 63764);
/* harmony import */ var _admin_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-login.page */ 13296);







let AdminLoginPageModule = class AdminLoginPageModule {
};
AdminLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminLoginPageRoutingModule
        ],
        declarations: [_admin_login_page__WEBPACK_IMPORTED_MODULE_1__.AdminLoginPage]
    })
], AdminLoginPageModule);



/***/ }),

/***/ 13296:
/*!*************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLoginPage": function() { return /* binding */ AdminLoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_admin_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./admin-login.page.html */ 6450);
/* harmony import */ var _admin_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-login.page.scss */ 5263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rope.service */ 11727);






let AdminLoginPage = class AdminLoginPage {
    constructor(network, router) {
        this.network = network;
        this.router = router;
    }
    ngOnInit() {
    }
    login(n, p) {
        this.response = "";
        if (!n || !p) {
            this.response = "fill in username and password";
        }
        else {
            let data = {
                username: n,
                password: p
            };
            this.network.login(data).subscribe((res) => {
                // console.log("SUCCESS ===",res);
                if (res == "error") {
                    this.response = "Username or Password is wrong";
                }
                else {
                    this.router.navigate(['/admin-dashboard']);
                    // console.log(res);
                }
            }, (error) => {
                // console.log("ERROR ===",error);
                this.response = 'Error, something happened';
            });
        }
    }
};
AdminLoginPage.ctorParameters = () => [
    { type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AdminLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-admin-login',
        template: _raw_loader_admin_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_admin_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdminLoginPage);



/***/ }),

/***/ 11727:
/*!*********************************!*\
  !*** ./src/app/rope.service.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RopeService": function() { return /* binding */ RopeService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let RopeService = class RopeService {
    constructor(http) {
        this.http = http;
        this.ip = JSON.parse(localStorage.getItem('ip'));
        this.url = "https://agesindependentpowerplantlimited.com/api/";
        this.ourl = "https://agesindependentpowerplantlimited.com/api/";
        console.log(this.url);
    }
    login(data) {
        return this.http.post(this.url + 'login.php', data);
    }
    create_staff(data) {
        return this.http.post(this.url + 'create_staff.php', data);
    }
    change_passowrd(data) {
        return this.http.post(this.url + 'change_passowrd.php', data);
    }
    edit_staff(data) {
        return this.http.post(this.url + 'edit_staff.php', data);
    }
    delete_staff(data) {
        return this.http.post(this.url + 'delete_staff.php', data);
    }
    get_staffs() {
        return this.http.get(this.url + 'get_staffs.php');
    }
    getmonthlysales() {
        return this.http.get(this.url + 'getmonthlysales.php');
    }
    get_customers() {
        return this.http.get(this.url + 'get_customers.php');
    }
    create_inventory(data) {
        return this.http.post(this.url + 'create_inventory.php', data);
    }
    get_inventories() {
        return this.http.get(this.url + 'get_inventories.php');
    }
    get_staff(data) {
        return this.http.get(this.url + 'get_staff.php?id=' + data);
    }
    get_inventory(data) {
        return this.http.get(this.url + 'get_inventory.php?id=' + data);
    }
    edit_inventory(data) {
        return this.http.post(this.url + 'edit_inventory.php', data);
    }
    delete_inventory(data) {
        return this.http.post(this.url + 'delete_inventory.php', data);
    }
    edit_gas(data) {
        return this.http.post(this.url + 'edit_gas.php', data);
    }
    edit_g(data) {
        return this.http.post(this.url + 'edit_g.php', data);
    }
    get_gas_value() {
        return this.http.get(this.url + 'get_gas_value.php');
    }
    get_gas_value_online() {
        return this.http.get(this.ourl + 'get_gas_value.php');
    }
    sync_gas_online() {
        return this.http.get(this.ourl + 'sync_gas_online.php');
    }
    get_info_online() {
        return this.http.get(this.ourl + 'get_info_online.php');
    }
    sync_info_online() {
        return this.http.get(this.ourl + 'sync_info_online.php');
    }
    get_history() {
        return this.http.get(this.url + 'get_history.php');
    }
    staff_login(data) {
        return this.http.post(this.url + 'staff_login.php', data);
    }
    add_cylinder(data) {
        return this.http.post(this.url + 'add_cylinder.php', data);
    }
    add_gprice(data) {
        return this.http.post(this.url + 'add_gprice.php', data);
    }
    get_pricesperkg() {
        return this.http.get(this.url + 'get_pricesperkg.php');
    }
    get_pricesperkg_online() {
        return this.http.get(this.ourl + 'get_pricesperkg_online.php');
    }
    sync_cy_online() {
        return this.http.get(this.ourl + 'sync_cy_online.php');
    }
    edit_gaspricesperkg(data) {
        return this.http.post(this.url + 'edit_gaspricesperkg.php', data);
    }
    edit_info(data) {
        return this.http.post(this.url + 'edit_info.php', data);
    }
    edit_server(data) {
        return this.http.post(this.url + 'edit_server.php', data);
    }
    get_cylinders() {
        return this.http.get(this.url + 'get_cylinders.php');
    }
    get_info() {
        return this.http.get(this.url + 'get_info.php');
    }
    get_cylinder(data) {
        return this.http.get(this.url + 'get_cylinder.php?id=' + data);
    }
    edit_cylinder(data) {
        return this.http.post(this.url + 'edit_cylinder.php', data);
    }
    confirm_sales(data) {
        return this.http.post(this.url + 'confirm_sales.php', data);
    }
    search_history(data) {
        return this.http.post(this.url + 'search_history.php', data);
    }
    search_shistory(data) {
        return this.http.post(this.url + 'search_shistory.php', data);
    }
    check_tag_no(data) {
        return this.http.get(this.url + 'check_tag_no.php?tag=' + data);
    }
    get_shistory(data) {
        return this.http.get(this.url + 'get_shistory.php?u=' + data);
    }
    get_sync_history(data) {
        return this.http.get(this.url + 'get_sync_history.php?u=' + data);
    }
    sync_local(data) {
        return this.http.get(this.url + 'sync_local.php?u=' + data);
    }
    sync_db(data) {
        return this.http.post('https://akpome.com/gas/sync_db.php', data);
    }
    get_customer(data) {
        return this.http.get(this.url + 'search_customer.php?cd=' + data);
    }
    getpast(data) {
        return this.http.get(this.url + 'getpast.php?u=' + data);
    }
    getbardata(data) {
        return this.http.get(this.url + 'getbardata.php?bd=' + data);
    }
    conf(data) {
        return this.http.post(this.url + 'conf.php', data);
    }
};
RopeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
RopeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RopeService);



/***/ }),

/***/ 5263:
/*!***************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-admin-login {\n  background-color: aqua;\n}\napp-admin-login .red {\n  color: red;\n}\napp-admin-login .body {\n  color: white;\n  background-color: black;\n}\napp-admin-login .form {\n  color: white;\n  margin-top: 30%;\n}\napp-admin-login .inp {\n  color: white;\n  background-color: black;\n}\napp-admin-login .btn {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7QUFFUjtBQUNJO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFFSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQURSO0FBSUk7RUFDSSxZQUFBO0FBRlIiLCJmaWxlIjoiYWRtaW4tbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWFkbWluLWxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICAucmVke1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvZHl7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3Jte1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bntcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 6450:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n  <div class=\"container-scroller\">\n    <div class=\"container-fluid page-body-wrapper full-page-wrapper\">\n      <div class=\"content-wrapper d-flex align-items-center auth\">\n        <div class=\"row flex-grow\">\n          <div class=\"col-lg-4 mx-auto\">\n            <div class=\"auth-form-light text-left p-5\">\n              <h4 style=\"color:black;\">Hello! let's get started</h4>\n              <p class=\"red\" style=\"color:red;\">{{response}}</p>\n              <h6 class=\"font-weight-light\">Sign in to continue.</h6>\n              <div class=\"pt-3\">\n                <ion-item style=\"margin-bottom: 10px;;\">\n                  <ion-input [(ngModel)]=\"username\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-input [(ngModel)]=\"password\" type=\"password\"></ion-input>\n                </ion-item>\n                <div class=\"mt-3\">\n                  <ion-button (click)=\"login(username, password)\" color=\"primary\">LOGIN\n                  </ion-button>\n                </div>\n                <div class=\"text-center mt-4 font-weight-light\"> Not an admin? <a [routerLink]=\"['/home']\" routerDirection=\"back\" class=\"text-primary\">Back</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- content-wrapper ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_admin-login_admin-login_module_ts-es2015.js.map