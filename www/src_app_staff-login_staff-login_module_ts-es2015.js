(self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_staff-login_staff-login_module_ts"],{

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

/***/ 961:
/*!***********************************************************!*\
  !*** ./src/app/staff-login/staff-login-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffLoginPageRoutingModule": function() { return /* binding */ StaffLoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _staff_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-login.page */ 71768);




const routes = [
    {
        path: '',
        component: _staff_login_page__WEBPACK_IMPORTED_MODULE_0__.StaffLoginPage
    }
];
let StaffLoginPageRoutingModule = class StaffLoginPageRoutingModule {
};
StaffLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StaffLoginPageRoutingModule);



/***/ }),

/***/ 36598:
/*!***************************************************!*\
  !*** ./src/app/staff-login/staff-login.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffLoginPageModule": function() { return /* binding */ StaffLoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _staff_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-login-routing.module */ 961);
/* harmony import */ var _staff_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-login.page */ 71768);







let StaffLoginPageModule = class StaffLoginPageModule {
};
StaffLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _staff_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffLoginPageRoutingModule
        ],
        declarations: [_staff_login_page__WEBPACK_IMPORTED_MODULE_1__.StaffLoginPage]
    })
], StaffLoginPageModule);



/***/ }),

/***/ 71768:
/*!*************************************************!*\
  !*** ./src/app/staff-login/staff-login.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffLoginPage": function() { return /* binding */ StaffLoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_staff_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./staff-login.page.html */ 2652);
/* harmony import */ var _staff_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-login.page.scss */ 84006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rope.service */ 11727);






let StaffLoginPage = class StaffLoginPage {
    constructor(network, router) {
        this.network = network;
        this.router = router;
        this.staffs = [];
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
            this.network.staff_login(data).subscribe((res) => {
                console.log("SUCCESS ===", res);
                if (res == "error") {
                    this.response = "email or password is wrong";
                }
                else {
                    localStorage.setItem('userid', JSON.stringify(res));
                    this.router.navigate(['/staff-dashboard']);
                    console.log(res);
                }
            }, (error) => {
                console.log("ERROR ===", error);
            });
        }
    }
};
StaffLoginPage.ctorParameters = () => [
    { type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
StaffLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-staff-login',
        template: _raw_loader_staff_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_staff_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StaffLoginPage);



/***/ }),

/***/ 84006:
/*!***************************************************!*\
  !*** ./src/app/staff-login/staff-login.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFmZi1sb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2652:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-login/staff-login.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n  <div class=\"container-scroller\">\n      <div class=\"container-fluid page-body-wrapper full-page-wrapper\">\n        <div class=\"content-wrapper d-flex align-items-center auth\">\n          <div class=\"row flex-grow\">\n            <div class=\"col-lg-4 mx-auto\">\n              <div class=\"auth-form-light text-left p-5\">\n                <h4 style=\"color:black;\">Hello! let's get started</h4>\n                <p class=\"red\" style=\"color:red;\">{{response}}</p>\n                <h6 class=\"font-weight-light\">Sign in to continue.</h6>\n                <div class=\"pt-3\">\n                  <ion-item style=\"margin-bottom: 10px;;\">\n                    <ion-input [(ngModel)]=\"username\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-input [(ngModel)]=\"password\" type=\"password\"></ion-input>\n                  </ion-item>\n                  <div class=\"mt-3\">\n                    <ion-button (click)=\"login(username, password)\" color=\"primary\">LOGIN\n                    </ion-button>\n                  </div>\n                  <div class=\"text-center mt-4 font-weight-light\"> Not a staff? <a [routerLink]=\"['/home']\" routerDirection=\"back\" class=\"text-primary\">Back</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- content-wrapper ends -->\n      </div>\n      <!-- page-body-wrapper ends -->\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_staff-login_staff-login_module_ts-es2015.js.map