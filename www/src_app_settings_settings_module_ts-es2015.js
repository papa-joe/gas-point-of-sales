(self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_settings_settings_module_ts"],{

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

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": function() { return /* binding */ SettingsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": function() { return /* binding */ SettingsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7162);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": function() { return /* binding */ SettingsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 14718);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 69519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rope.service */ 11727);






let SettingsPage = class SettingsPage {
    constructor(router, network) {
        this.router = router;
        this.network = network;
    }
    ngOnInit() {
        this.get_info();
    }
    get_info() {
        this.network.get_info().subscribe((res) => {
            // console.log("SUCCESS ===",res);
            // console.log(res);
            let info = res[0];
            this.name = info.name;
            this.phone = info.phone;
            this.email = info.email;
            this.adr = info.address;
        }, (error) => {
            this.bres = "Something went wrong, please try again";
            // console.log("ERROR ===",error);
        });
    }
    edit_info(n, p, e, a) {
        this.bres = '';
        this.gres = '';
        if (!n) {
            this.bres = "All fields are required";
        }
        else {
            let data = {
                n: n,
                p: p,
                e: e,
                a: a
            };
            this.network.edit_info(data).subscribe((res) => {
                console.log("SUCCESS ===", res);
                if (res == "bad") {
                    this.bres = "Something went wrong, please try again";
                }
                else {
                    this.gres = 'success';
                }
            }, (error) => {
                console.log("ERROR ===", error);
            });
        }
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingsPage);



/***/ }),

/***/ 69519:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-md-6 {\n  margin-bottom: 9px;\n}\n\n.back {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtNntcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxufVxyXG4uYmFja3tcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 14718:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/admin-dashboard\" routerDirection=\"back\" class=\"back\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      <ion-button text=\"\" icon=\"add\">BACK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-scroller\">\n    <!-- partial:partials/_navbar.html -->\n\n    <!-- partial -->\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 700px;\">\n      <!-- partial:partials/_sidebar.html -->\n\n      <!-- partial -->\n      <div class=\"main-panel\" style=\"width:100%;\">\n        <div class=\"content-wrapper\" style=\"padding: 0px !important;\">\n\n\n          <div class=\"row\">\n\n\n\n\n            <div class=\"col-12\">\n              <div class=\"card\">\n                <div class=\"card-body\" style=\"padding-right: 10px !important;padding-left: 10px !important;\">\n                  <h4 class=\"card-title\">Settings</h4>\n                  <p style=\"color: red;\">{{bres}}</p>\n                  <p style=\"color: green;\">{{gres}}</p>\n                  <div class=\"form-sample\">\n\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <ion-item style=\"margin-bottom: 10px;\">\n                          <ion-label position=\"floating\">Name</ion-label>\n                          <ion-input [(ngModel)]=\"name\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item style=\"margin-bottom: 10px;\">\n                          <ion-label position=\"floating\">Phone</ion-label>\n                          <ion-input [(ngModel)]=\"phone\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item style=\"margin-bottom: 10px;\">\n                          <ion-label position=\"floating\">Email</ion-label>\n                          <ion-input [(ngModel)]=\"email\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item style=\"margin-bottom: 10px;\">\n                          <ion-label position=\"floating\">Address</ion-label>\n                          <ion-input [(ngModel)]=\"adr\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-button (click)=\"edit_info(name, phone, email, adr)\" color=\"primary\">Submit\n                        </ion-button>\n                      </div>\n\n                    </div>\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n        </div>\n        <!-- content-wrapper ends -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts-es2015.js.map