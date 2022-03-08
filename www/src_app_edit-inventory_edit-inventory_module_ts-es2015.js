(self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_edit-inventory_edit-inventory_module_ts"],{

/***/ 74942:
/*!*****************************************************************!*\
  !*** ./src/app/edit-inventory/edit-inventory-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditInventoryPageRoutingModule": function() { return /* binding */ EditInventoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_inventory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-inventory.page */ 72024);




const routes = [
    {
        path: '',
        component: _edit_inventory_page__WEBPACK_IMPORTED_MODULE_0__.EditInventoryPage
    }
];
let EditInventoryPageRoutingModule = class EditInventoryPageRoutingModule {
};
EditInventoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditInventoryPageRoutingModule);



/***/ }),

/***/ 54452:
/*!*********************************************************!*\
  !*** ./src/app/edit-inventory/edit-inventory.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditInventoryPageModule": function() { return /* binding */ EditInventoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-inventory-routing.module */ 74942);
/* harmony import */ var _edit_inventory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-inventory.page */ 72024);







let EditInventoryPageModule = class EditInventoryPageModule {
};
EditInventoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditInventoryPageRoutingModule
        ],
        declarations: [_edit_inventory_page__WEBPACK_IMPORTED_MODULE_1__.EditInventoryPage]
    })
], EditInventoryPageModule);



/***/ }),

/***/ 72024:
/*!*******************************************************!*\
  !*** ./src/app/edit-inventory/edit-inventory.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditInventoryPage": function() { return /* binding */ EditInventoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_edit_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-inventory.page.html */ 99014);
/* harmony import */ var _edit_inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-inventory.page.scss */ 743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rope.service */ 11727);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);







let EditInventoryPage = class EditInventoryPage {
    constructor(route, router, network, navCtrl) {
        this.route = route;
        this.router = router;
        this.network = network;
        this.navCtrl = navCtrl;
        this.inventory = [];
        this.route.params.subscribe((param) => {
            this.id = param.id;
            console.log(this.id);
            this.get_inventory();
        });
    }
    ngOnInit() {
    }
    get_inventory() {
        this.network.get_inventory(this.id).subscribe((res) => {
            console.log("SUCCESS ===", res);
            console.log(res);
            let inventory = res[0];
            this.title = inventory.title;
            this.cprice = inventory.cprice;
            this.price = inventory.price;
            this.wprice = inventory.wprice;
            this.dprice = inventory.dprice;
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    edit_inventory(t, cp, p, wp, dp, q) {
        this.gres = "";
        this.bres = "";
        if (!t || !p || !wp || !dp || !cp) {
            this.bres = "All fields are required";
        }
        else {
            let data = {
                title: t,
                price: p,
                wprice: wp,
                dprice: dp,
                cprice: cp,
                quantity: q,
                id: this.id
            };
            this.network.edit_inventory(data).subscribe((res) => {
                console.log("SUCCESS ===", res);
                if (res == "bad") {
                    this.bres = "Something went wrong, please try again";
                }
                else {
                    this.gres = 'success';
                    this.title = '';
                    this.price = '';
                    this.wprice = '';
                    this.dprice = '';
                    this.cprice = '';
                    this.quantity = '';
                    this.navCtrl.navigateBack(['/inventory']);
                }
            }, (error) => {
                console.log("ERROR ===", error);
            });
        }
    }
    delete_inventory() {
        let data = {
            id: this.id
        };
        this.network.delete_inventory(data).subscribe((res) => {
            console.log("SUCCESS ===", res);
            if (res == "bad") {
                this.bres = "Something went wrong, please try again";
            }
            else {
                this.gres = 'success';
                this.router.navigate(['/inventory']);
            }
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
};
EditInventoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
EditInventoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-inventory',
        template: _raw_loader_edit_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditInventoryPage);



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

/***/ 743:
/*!*********************************************************!*\
  !*** ./src/app/edit-inventory/edit-inventory.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-md-6 {\n  margin-bottom: 9px;\n}\n\n.back {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtaW52ZW50b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKIiwiZmlsZSI6ImVkaXQtaW52ZW50b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtNntcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxufVxyXG4uYmFja3tcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 99014:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-inventory/edit-inventory.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/inventory\" routerDirection=\"back\" class=\"back\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      <ion-button text=\"\" icon=\"add\">BACK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-scroller\">\n    <!-- partial:partials/_navbar.html -->\n\n    <!-- partial -->\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 700px;\">\n      <!-- partial:partials/_sidebar.html -->\n\n      <!-- partial -->\n      <div class=\"main-panel\" style=\"width:100%;\">\n        <div class=\"content-wrapper\">\n\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Edit Item Details</h4>\n                  <div class=\"form-sample\">\n                    <p class=\"red\" style=\"color:red;\">{{bres}}</p>\n                    <p style=\"color: green;\">{{gres}}</p>\n\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Title</ion-label>\n                          <ion-input [(ngModel)]=\"title\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Cost Price</ion-label>\n                          <ion-input [(ngModel)]=\"cprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Retail Price</ion-label>\n                          <ion-input [(ngModel)]=\"price\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Wholesale Price</ion-label>\n                          <ion-input [(ngModel)]=\"wprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Discount Price</ion-label>\n                          <ion-input [(ngModel)]=\"dprice\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label position=\"floating\">Restock</ion-label>\n                          <ion-input [(ngModel)]=\"quantity\"></ion-input>\n                        </ion-item>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <ion-button (click)=\"edit_inventory(title, cprice, price, wprice, dprice, quantity)\"\n                          color=\"primary\">\n                          Submit</ion-button>\n\n                        <ion-button (click)=\"delete_inventory()\" color=\"danger\">\n                          Delete</ion-button>\n                      </div>\n\n                    </div>\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n\n\n        </div>\n        <!-- content-wrapper ends -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_edit-inventory_edit-inventory_module_ts-es2015.js.map