(self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_inventory_inventory_module_ts"],{

/***/ 46458:
/*!*******************************************************!*\
  !*** ./src/app/inventory/inventory-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryPageRoutingModule": function() { return /* binding */ InventoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _inventory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.page */ 53534);




const routes = [
    {
        path: '',
        component: _inventory_page__WEBPACK_IMPORTED_MODULE_0__.InventoryPage
    }
];
let InventoryPageRoutingModule = class InventoryPageRoutingModule {
};
InventoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InventoryPageRoutingModule);



/***/ }),

/***/ 41564:
/*!***********************************************!*\
  !*** ./src/app/inventory/inventory.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryPageModule": function() { return /* binding */ InventoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory-routing.module */ 46458);
/* harmony import */ var _inventory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.page */ 53534);







let InventoryPageModule = class InventoryPageModule {
};
InventoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventoryPageRoutingModule
        ],
        declarations: [_inventory_page__WEBPACK_IMPORTED_MODULE_1__.InventoryPage]
    })
], InventoryPageModule);



/***/ }),

/***/ 53534:
/*!*********************************************!*\
  !*** ./src/app/inventory/inventory.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryPage": function() { return /* binding */ InventoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inventory.page.html */ 67761);
/* harmony import */ var _inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.page.scss */ 51785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rope.service */ 11727);





let InventoryPage = class InventoryPage {
    constructor(network) {
        this.network = network;
        this.inventories = [];
        this.get_inventories();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.get_inventories();
    }
    get_inventories() {
        this.network.get_inventories().subscribe((res) => {
            console.log("SUCCESS ===", res);
            this.inventories = res;
            console.log(res);
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    create_inventory(t, cp, p, wp, dp, iq) {
        this.response = "";
        this.gres = "";
        if (!t || !p || !wp || !dp || !cp || !iq) {
            this.response = "All fields are required";
        }
        else {
            let data = {
                title: t,
                price: p,
                wprice: wp,
                dprice: dp,
                cprice: cp,
                iqty: iq
            };
            this.network.create_inventory(data).subscribe((res) => {
                console.log("SUCCESS ===", res);
                if (res == "bad") {
                    this.response = "Something went wrong, please try again";
                }
                else {
                    this.get_inventories();
                    this.gres = 'success';
                    this.title = '';
                    this.cprice = '';
                    this.price = '';
                    this.wprice = '';
                    this.dprice = '';
                    this.iqty = '';
                }
            }, (error) => {
                console.log("ERROR ===", error);
            });
        }
    }
};
InventoryPage.ctorParameters = () => [
    { type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService }
];
InventoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-inventory',
        template: _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InventoryPage);



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

/***/ 51785:
/*!***********************************************!*\
  !*** ./src/app/inventory/inventory.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-md-6 {\n  margin-bottom: 9px;\n}\n\n.back {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSiIsImZpbGUiOiJpbnZlbnRvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC02e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG59XHJcbi5iYWNre1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59Il19 */");

/***/ }),

/***/ 67761:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/admin-dashboard\" routerDirection=\"back\" class=\"back\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      <ion-button text=\"\" icon=\"add\">BACK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-scroller\">\n    <!-- partial:partials/_navbar.html -->\n\n    <!-- partial -->\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 700px;\">\n      <!-- partial:partials/_sidebar.html -->\n\n      <!-- partial -->\n      <div class=\"main-panel\" style=\"width:100%;\">\n        <div class=\"content-wrapper\" style=\"padding: 0px !important;\">\n\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"card\">\n                <div class=\"card-body\" style=\"padding-right: 10px !important;padding-left: 10px !important;\">\n                  <h4 class=\"card-title\">Add Item</h4>\n                  <div class=\"form-sample\">\n                    <p class=\"red\" style=\"color:red;\">{{response}}</p>\n                    <p style=\"color: green;\">{{gres}}</p>\n\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Item name</ion-label>\n                          <ion-input [(ngModel)]=\"title\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Cost Price</ion-label>\n                          <ion-input [(ngModel)]=\"cprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Retail Price</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"price\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Wholesale Price</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"wprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Discount Price</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"dprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Quantity</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"iqty\"></ion-input>\n                        </ion-item>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <ion-button (click)=\"create_inventory(title, cprice, price, wprice, dprice, iqty)\" color=\"primary\">\n                          Submit</ion-button>\n\n\n                      </div>\n                    </div>\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n\n\n\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\" style=\"padding-right: 10px !important;padding-left: 10px !important;\">\n                  <h4 class=\"card-title\">Inventory</h4>\n                  <table class=\"table table-bordered table-responsive\">\n                    <thead>\n                      <tr>\n                        <th> # </th>\n                        <th> Title </th>\n                        <th> Cost Price </th>\n                        <th> Retail Price </th>\n                        <th> Wholesale Price </th>\n                        <th> Discount Price </th>\n                        <th> Quantity </th>\n                        <th> Action </th>\n                      </tr>\n                    </thead>\n                    <tbody *ngFor=\"let inventory of inventories\">\n                      <tr>\n                        <td> {{inventory.id}} </td>\n                        <td> {{inventory.title}} </td>\n                        <td> {{inventory.cprice}} </td>\n                        <td> {{inventory.price}} </td>\n                        <td> {{inventory.wprice}} </td>\n                        <td> {{inventory.dprice}} </td>\n                        <td> {{inventory.quantity}} </td>\n                        <td> <ion-icon [routerLink]=\"['/edit-inventory/',inventory.id]\" routerDirection=\"forward\" name=\"create-outline\"></ion-icon> </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n        <!-- content-wrapper ends -->\n        <!-- partial:partials/_footer.html -->\n        <footer class=\"footer\">\n          <div class=\"container-fluid clearfix\">\n            <span class=\"text-muted d-block text-center text-sm-left d-sm-inline-block\">Copyright © bootstrapdash.com\n              2020</span>\n          </div>\n        </footer>\n        <!-- partial -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_inventory_inventory_module_ts-es2015.js.map