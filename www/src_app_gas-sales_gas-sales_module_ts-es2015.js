(self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_gas-sales_gas-sales_module_ts"],{

/***/ 95162:
/*!*******************************************************!*\
  !*** ./src/app/gas-sales/gas-sales-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GasSalesPageRoutingModule": function() { return /* binding */ GasSalesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _gas_sales_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gas-sales.page */ 38664);




const routes = [
    {
        path: '',
        component: _gas_sales_page__WEBPACK_IMPORTED_MODULE_0__.GasSalesPage
    }
];
let GasSalesPageRoutingModule = class GasSalesPageRoutingModule {
};
GasSalesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GasSalesPageRoutingModule);



/***/ }),

/***/ 94713:
/*!***********************************************!*\
  !*** ./src/app/gas-sales/gas-sales.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GasSalesPageModule": function() { return /* binding */ GasSalesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _gas_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gas-sales-routing.module */ 95162);
/* harmony import */ var _gas_sales_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gas-sales.page */ 38664);







let GasSalesPageModule = class GasSalesPageModule {
};
GasSalesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gas_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__.GasSalesPageRoutingModule
        ],
        declarations: [_gas_sales_page__WEBPACK_IMPORTED_MODULE_1__.GasSalesPage]
    })
], GasSalesPageModule);



/***/ }),

/***/ 38664:
/*!*********************************************!*\
  !*** ./src/app/gas-sales/gas-sales.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GasSalesPage": function() { return /* binding */ GasSalesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_gas_sales_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gas-sales.page.html */ 59185);
/* harmony import */ var _gas_sales_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gas-sales.page.scss */ 31265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rope.service */ 11727);






let GasSalesPage = class GasSalesPage {
    constructor(router, network) {
        this.router = router;
        this.network = network;
        this.tag = '';
        this.type = 0;
        this.cname = '';
        this.cphone = '';
        this.amt_ten = 0;
        this.chng = 0;
        this.inventories = [];
        this.priceperkg = [];
        this.cylinders = [];
        this.sales = [];
        this.finalsales = [];
        this.t = 0;
        this.customer = [];
        this.itemprices = [];
        this.lastday = 0;
        this.lastmnth = 0;
        this.lastyr = 0;
        this.userid = JSON.parse(localStorage.getItem('userid'));
    }
    ngOnInit() {
        this.get_inventories();
        this.get_pricesperkg();
        this.get_pricesperkg_online();
        this.get_info();
        this.get_staff();
        this.adddate();
        this.get_gas_value();
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
    get_staff() {
        this.userid = JSON.parse(localStorage.getItem('userid'));
        this.network.get_staff(this.userid).subscribe((res) => {
            // console.log("SUCCESS ===",res);
            // console.log(res);
            let staff = res[0];
            this.fname = staff.fname;
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    get_info() {
        this.network.get_info().subscribe((res) => {
            // console.log("SUCCESS ===", res);
            // console.log(res);
            let info = res[0];
            this.comname = info.name;
            this.comphone = info.phone;
            this.comemail = info.email;
            this.comaddress = info.address;
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    getpast(t) {
        this.network.getpast(t).subscribe((res) => {
            // console.log("SUCCESS ===", res);
            // console.log(res);
            this.lastday = res.day;
            this.lastmnth = res.mth;
            this.lastyr = res.yr;
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    check_tag_no(t) {
        this.bres = "";
        this.gres = "";
        this.cname = "";
        this.cphone = "";
        if (!t) {
            this.bres = "Enter tag nos";
        }
        else {
            this.network.check_tag_no(t).subscribe((res) => {
                // console.log("SUCCESS ===", res);
                if (res != 'empty') {
                    let customer = res[0];
                    this.cname = customer.name;
                    this.cphone = customer.phone;
                    this.getpast(t);
                }
                else {
                    this.bres = "No customer with this tag number";
                }
                // console.log(res);
            }, (error) => {
                console.log("ERROR ===", error);
            });
        }
    }
    get_pricesperkg() {
        this.network.get_pricesperkg().subscribe((res) => {
            // console.log("SUCCESS ===", res);
            // console.log(res);
            let prices = res[0];
            this.cprice = prices.cprice;
            this.rprice = prices.rprice + '---Retail';
            this.wprice = prices.wprice + '---Wholesale';
            this.dprice = prices.dprice + '---Discount';
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    get_pricesperkg_online() {
        this.network.get_pricesperkg_online().subscribe((res) => {
            // console.log("SUCCESS ===",res);
            // console.log(res);
            this.oprices = res[0];
            if (this.oprices.sync == 'No') {
                this.sync_c = "true";
            }
        }, (error) => {
            this.ores = "Check internet connection";
            // console.log("ERROR ===",error);
        });
    }
    sync_cylinder() {
        this.network.sync_cy_online().subscribe((res) => {
            // console.log("SUCCESS ===",res);
            // console.log(res);
            if (res == 'success') {
                this.sync_c = "false";
                this.edit_gaspricesperkg(this.oprices.cprice, this.oprices.rprice, this.oprices.wprice, this.oprices.dprice);
                this.get_pricesperkg();
            }
            else {
                this.ores = "Something went wrong, please try again";
            }
        }, (error) => {
            this.ores = "Check internet connection";
            // console.log("ERROR ===",error);
        });
    }
    edit_gaspricesperkg(cp, rp, wp, dp) {
        this.bres = "";
        this.gres = "";
        if (!cp) {
            this.bres = "All fields are required";
        }
        else {
            let data = {
                cp: cp,
                rp: rp,
                wp: wp,
                dp: dp
            };
            this.network.edit_gaspricesperkg(data).subscribe((res) => {
                // console.log("SUCCESS ===",res);
                if (res == "bad") {
                    this.bres = "Something went wrong, please try again";
                }
                else {
                    this.gres = 'success';
                }
            }, (error) => {
                // console.log("ERROR ===",error);
                this.bres = "Something went wrong, please try again";
            });
        }
    }
    get_inventories() {
        this.network.get_inventories().subscribe((res) => {
            // console.log("SUCCESS ===", res);
            this.inventories = res;
            // console.log('ivn '+this.inventories);
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    calc_gp_kg() {
        this.gprice = 0;
        this.cylinder = 0;
        this.gqty = 0;
    }
    calc_t() {
        this.t = 0;
        if (this.finalsales.length >= 1) {
            for (var y = 0; y < this.finalsales.length; y++) {
                this.t += this.finalsales[y].qty * this.finalsales[y].price;
            }
        }
    }
    calc_gp() {
        let myArr = this.type.split("---");
        this.st = myArr[1];
        if (myArr[0] == 0) {
            this.bres = 'Please select price type above';
        }
        else {
            this.gprice = myArr[0] * this.cylinder;
        }
    }
    calc_kg() {
        let myArr = this.type.split("---");
        this.st = myArr[1];
        if (myArr[0] == 0) {
            this.bres = 'Please select price type above';
        }
        else {
            this.cylinder = this.gprice / myArr[0];
        }
    }
    getitemprices() {
        if (this.item != '' || this.item != 'undefined') {
            this.itemprices = this.inventories.filter(record => record.id === this.item);
            this.arprice = this.itemprices[0].price;
            this.awprice = this.itemprices[0].wprice;
            this.adprice = this.itemprices[0].dprice;
        }
    }
    gassales(t, c, gp, gq) {
        this.bres = '';
        this.gres = '';
        if (!c || !gp || !gq) {
            this.bres = 'Enter all fields';
        }
        else if (parseInt(c) > this.gas_value) {
            this.bres = 'Insufficient gas quantity';
        }
        else {
            let nc = Math.trunc(c * 100) / 100;
            let ngp = Math.trunc(gp * 100) / 100;
            let sale = {
                sale: this.st,
                type: 'Gas',
                item: nc,
                price: ngp,
                qty: gq
            };
            this.finalsales.push(sale);
            this.calc_t();
        }
    }
    ivnsales(i, ap, aq) {
        this.bres = '';
        this.gres = '';
        if (!i || !ap || !aq) {
            this.bres = 'Enter all fields';
        }
        else if (parseInt(aq) > parseInt(this.itemprices[0].quantity)) {
            this.bres = "Out of stock " + this.itemprices[0].quantity + " left";
        }
        else {
            let myArr = ap.split("---");
            this.st = myArr[1];
            let sale = {
                sale: this.st,
                type: 'Accessory',
                item: this.itemprices[0].title,
                price: myArr[0],
                qty: aq,
                idd: this.itemprices[0].id
            };
            this.finalsales.push(sale);
            this.calc_t();
        }
    }
    removeitem(i) {
        this.finalsales.splice(i, 1);
        this.calc_t();
        this.calc_t();
    }
    openm() {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    closem() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    adddate() {
        this.today = new Date();
        var dd = String(this.today.getDate()).padStart(2, '0');
        var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = this.today.getFullYear();
        this.time = new Date();
        this.time = this.time.getHours() + ":" + this.time.getMinutes() + ":" + this.time.getSeconds();
        this.today = mm + '/' + dd + '/' + yyyy;
    }
    conf() {
        this.bres = '';
        this.gres = '';
        if (this.finalsales.length <= 0) {
            this.bres = 'You have nothing in the cart';
        }
        else if (this.amt_ten == '') {
            this.bres = 'Enter amount tendered and change given';
        }
        else {
            var d = new Date();
            var n = d.getTime();
            this.ref = n;
            let data = {
                data: this.finalsales,
                userid: this.userid,
                cname: this.cname,
                cphone: this.cphone,
                amt_ten: this.amt_ten,
                chng: this.chng,
                ref: n,
                tag: this.tag
            };
            this.network.conf(data).subscribe((res) => {
                // console.log("SUCCESS ===", res);
                if (res == "bad") {
                    this.bres = "Something went wrong, please try again";
                }
                else {
                    this.gres = 'success';
                    this.adddate();
                    this.openm();
                    window.print();
                    this.finalsales = [];
                    this.reset();
                    this.closem();
                    this.gres = 'Success';
                }
            }, (error) => {
                console.log("ERROR ===", error);
            });
        }
    }
    conff() {
        this.bres = '';
        this.gres = '';
        if (this.finalsales.length <= 0) {
            this.bres = 'You have nothing in the cart';
        }
        else if (this.amt_ten == '') {
            this.bres = 'Enter amount tendered and change given';
        }
        else {
            var d = new Date();
            var n = d.getTime();
            this.ref = n;
            let data = {
                data: this.finalsales,
                userid: this.userid,
                cname: this.cname,
                cphone: this.cphone,
                amt_ten: this.amt_ten,
                chng: this.chng,
                ref: n,
                tag: this.tag
            };
            this.network.conf(data).subscribe((res) => {
                // console.log("SUCCESS ===", res);
                if (res == "bad") {
                    this.bres = "Something went wrong, please try again";
                }
                else {
                    this.gres = 'success';
                    this.adddate();
                    this.openm();
                    this.finalsales = [];
                    this.calc_t();
                    this.reset();
                    this.closem();
                    this.gres = 'Success';
                }
            }, (error) => {
                console.log("ERROR ===", error);
            });
        }
    }
    reset() {
        this.type = 0;
        this.cylinder = '';
        this.gprice = 0;
        this.gqty = 0;
        this.amt_ten = 0;
        this.chng = 0;
        this.aprice = 0;
        this.aqty = 0;
        this.tag = '';
        this.cname = '';
        this.cphone = '';
        this.lastday = 0;
        this.lastmnth = 0;
        this.lastyr = 0;
        this.item = '';
    }
};
GasSalesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService }
];
GasSalesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-gas-sales',
        template: _raw_loader_gas_sales_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gas_sales_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GasSalesPage);



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

/***/ 31265:
/*!***********************************************!*\
  !*** ./src/app/gas-sales/gas-sales.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media print {\n  .non-printable {\n    display: none;\n  }\n\n  .modal {\n    position: absolute;\n    left: 0 !important;\n    top: 0 !important;\n    margin: 0 !important;\n    padding-top: 0 !important;\n    overflow: visible !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  .modal-content {\n    padding-top: 0 !important;\n    margin-top: 0 !important;\n    left: 0 !important;\n    top: 0 !important;\n  }\n\n  .rhd {\n    width: 100% !important;\n    text-align: center !important;\n    font-size: 55px !important;\n  }\n\n  .rbd {\n    font-size: 50px !important;\n    font-weight: lighter !important;\n    padding-top: 0px !important;\n    padding-bottom: 0px !important;\n  }\n}\n.rhd {\n  width: 100%;\n  text-align: center;\n  font-size: 25px;\n}\n.rbd {\n  font-size: 10px;\n  font-weight: lighter;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.col-md-6, .ip {\n  margin-bottom: 9px;\n}\n.back {\n  padding-left: 20px;\n}\n/*\n CSS for the main interaction\n*/\n.tabset > input[type=radio] {\n  position: absolute;\n  left: -200vw;\n}\n.tabset .tab-panel {\n  display: none;\n}\n.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,\n.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),\n.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),\n.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),\n.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),\n.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {\n  display: block;\n}\n/*\n Styling\n*/\nbody {\n  font: 16px/1.5em \"Overpass\", \"Open Sans\", Helvetica, sans-serif;\n  color: #333;\n  font-weight: 300;\n}\n.tabset > label {\n  position: relative;\n  display: inline-block;\n  padding: 15px 15px 25px;\n  border: 1px solid transparent;\n  border-bottom: 0;\n  cursor: pointer;\n  font-weight: 600;\n}\n.tabset > label::after {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  bottom: 10px;\n  width: 22px;\n  height: 4px;\n  background: #8d8d8d;\n}\n.tabset > label:hover,\n.tabset > input:focus + label {\n  color: #06c;\n}\n.tabset > label:hover::after,\n.tabset > input:focus + label::after,\n.tabset > input:checked + label::after {\n  background: #06c;\n}\n.tabset > input:checked + label {\n  border-color: #ccc;\n  border-bottom: 1px solid #fff;\n  margin-bottom: -1px;\n}\n.tab-panel {\n  padding: 30px 0;\n  border-top: 1px solid #ccc;\n}\n/*\n Demo purposes only\n*/\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nbody {\n  padding: 30px;\n}\n.tabset {\n  max-width: 65em;\n}\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: absolute;\n  left: 100px;\n  top: 100px;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  width: 30%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  padding-left: 20p;\n  padding-right: 20px;\n}\n/* Modal Content */\n.modal-content {\n  background-color: #fefefe;\n  color: black;\n  margin: auto;\n  width: 90%;\n}\n/* The Close Button */\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhcy1zYWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLGFBQUE7RUFBRjs7RUFHQTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUFBRjs7RUFFQTtJQUNFLHlCQUFBO0lBQ0Esd0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsMEJBQUE7RUFDRjs7RUFFQTtJQUNFLDBCQUFBO0lBQ0EsK0JBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFJQTtFQUNJLGtCQUFBO0FBREo7QUFHQTtFQUNJLGtCQUFBO0FBQUo7QUFHQTs7Q0FBQTtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7QUFBSjtBQUdFOzs7Ozs7RUFNRSxjQUFBO0FBQUo7QUFHRTs7Q0FBQTtBQUdBO0VBQ0UsK0RBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFOztFQUVFLFdBQUE7QUFBSjtBQUdFOzs7RUFHRSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBQUo7QUFHRTs7Q0FBQTtBQUdBOzs7RUFHRSxzQkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7QUFBSjtBQUlFO0VBQ0EsYUFBQTtFQUFlLHNCQUFBO0VBQ2Ysa0JBQUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUFZLGtCQUFBO0VBQ2QsVUFBQTtFQUFZLGVBQUE7RUFDWixVQUFBO0VBQVksZUFBQTtFQUNaLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIsaUJBQUE7RUFDQSxtQkFBQTtBQUtGO0FBRkEsa0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBS0Y7QUFGQSxxQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLRjtBQUZBOztFQUVFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFLRiIsImZpbGUiOiJnYXMtc2FsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLm5vbi1wcmludGFibGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAwIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMCFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJoZHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJiZHtcclxuICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXIgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5yaGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnJiZHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbC1tZC02LCAuaXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbn1cclxuLmJhY2t7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi8qXHJcbiBDU1MgZm9yIHRoZSBtYWluIGludGVyYWN0aW9uXHJcbiovXHJcbi50YWJzZXQgPiBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTIwMHZ3O1xyXG4gIH1cclxuICBcclxuICAudGFic2V0IC50YWItcGFuZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYnNldCA+IGlucHV0OmZpcnN0LWNoaWxkOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6Zmlyc3QtY2hpbGQsXHJcbiAgLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCgzKTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCgyKSxcclxuICAudGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDUpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDMpLFxyXG4gIC50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoNyk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNCksXHJcbiAgLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg5KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg1KSxcclxuICAudGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDExKTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg2KSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLypcclxuICAgU3R5bGluZ1xyXG4gICovXHJcbiAgYm9keSB7XHJcbiAgICBmb250OiAxNnB4LzEuNWVtIFwiT3ZlcnBhc3NcIiwgXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICBcclxuICAudGFic2V0ID4gbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAudGFic2V0ID4gbGFiZWw6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICM4ZDhkOGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJzZXQgPiBsYWJlbDpob3ZlcixcclxuICAudGFic2V0ID4gaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzA2YztcclxuICB9XHJcbiAgXHJcbiAgLnRhYnNldCA+IGxhYmVsOmhvdmVyOjphZnRlcixcclxuICAudGFic2V0ID4gaW5wdXQ6Zm9jdXMgKyBsYWJlbDo6YWZ0ZXIsXHJcbiAgLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA2YztcclxuICB9XHJcbiAgXHJcbiAgLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWItcGFuZWwge1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgIERlbW8gcHVycG9zZXMgb25seVxyXG4gICovXHJcbiAgKixcclxuICAqOmJlZm9yZSxcclxuICAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYnNldCB7XHJcbiAgICBtYXgtd2lkdGg6IDY1ZW07XHJcbiAgfVxyXG5cclxuXHJcbiAgLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgdG9wOiAxMDBweDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICB3aWR0aDogMzAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIHBhZGRpbmctbGVmdDogMjBwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ 59185:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gas-sales/gas-sales.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"non-printable\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/staff-dashboard\" routerDirection=\"back\" class=\"back\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      <ion-button text=\"\" icon=\"add\">BACK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-scroller non-printable\">\n    <!-- partial:partials/_navbar.html -->\n\n    <!-- partial -->\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 700px;\">\n      <!-- partial:partials/_sidebar.html -->\n\n      <!-- partial -->\n      <div class=\"main-panel\" style=\"width:100%;\">\n        <div class=\"content-wrapper\">\n\n\n\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n\n              <ion-button *ngIf=\"sync_c == 'true'\" (click)=\"sync_cylinder()\" color=\"primary\">SYNC LOCAL TO LIVE</ion-button>\n              <p style=\"color:red;\">{{ores}}</p>\n            </div>\n            <div class=\"col-md-7 grid-margin stretch-card non-printable\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Sales Status</h4>\n                  <p style=\"color: red;\">{{bres}}</p>\n                  <p style=\"color: green;\">{{gres}}</p>\n                  \n                  <div class=\"tabset\">\n                    <!-- Tab 1 -->\n                    <input type=\"radio\" name=\"tabset\" id=\"tab1\" aria-controls=\"marzen\" checked>\n                    <label style=\"color: black;\" for=\"tab1\">Gas</label>\n                    <!-- Tab 2 -->\n                    <input type=\"radio\" name=\"tabset\" id=\"tab2\" aria-controls=\"rauchbier\">\n                    <label for=\"tab2\" style=\"color: black;\">Accessories</label>\n\n                    <div class=\"tab-panels\">\n                      <section id=\"marzen\" class=\"tab-panel\" style=\"color: black;\">\n                        <h2>Gas</h2>\n                        <ion-item class=\"ip\">\n                          <ion-label>Type</ion-label>\n                          <ion-select placeholder=\"Select One\" [(ngModel)]=\"type\" (ngModelChange)=\"calc_gp_kg()\">\n                            <ion-select-option value=\"{{rprice}}\">Retail</ion-select-option>\n                            <ion-select-option value=\"{{wprice}}\">Wholesale</ion-select-option>\n                            <ion-select-option value=\"{{dprice}}\">Discount</ion-select-option>\n                          </ion-select>\n                        </ion-item>\n\n                        <ion-item class=\"ip\">\n                          <ion-label position=\"floating\">Cylinder</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"cylinder\" (ngModelChange)=\"calc_gp()\"></ion-input>\n                        </ion-item>\n\n                        <ion-item class=\"ip\">\n                          <ion-label position=\"floating\">Price</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"gprice\" (ngModelChange)=\"calc_kg()\"></ion-input>\n                        </ion-item>\n\n                        <ion-item class=\"ip\">\n                          <ion-label position=\"floating\">Quantity</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"gqty\"></ion-input>\n                        </ion-item>\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <ion-item style=\"margin-bottom: 10px;\">\n                              <ion-label position=\"floating\">Amount tendered</ion-label>\n                              <ion-input type=\"number\" [(ngModel)]=\"amt_ten\"></ion-input>\n                            </ion-item>\n                          </div>\n    \n                          <div class=\"col-md-6\">\n                            <ion-item style=\"margin-bottom: 10px;\">\n                              <ion-label position=\"floating\">Change</ion-label>\n                              <ion-input type=\"number\" [(ngModel)]=\"chng\"></ion-input>\n                            </ion-item>\n                          </div>\n                        </div>\n                        <ion-button (click)=\"gassales(type, cylinder, gprice, gqty)\" color=\"primary\">ADD\n                        </ion-button>\n                      </section>\n                      <section id=\"rauchbier\" class=\"tab-panel\" style=\"color: black;\">\n                        <h2>Accessories</h2>\n                        <ion-item class=\"ip\">\n                          <ion-label>Item</ion-label>\n                          <ion-select placeholder=\"Select One\" [(ngModel)]=\"item\"\n                            (ngModelChange)=\"getitemprices()\">\n                            <ion-select-option *ngFor=\"let inventory of inventories\" value=\"{{inventory.id}}\">\n                              {{inventory.title}}</ion-select-option>\n                          </ion-select>\n                        </ion-item>\n\n                        <ion-item class=\"ip\">\n                          <ion-label>Price</ion-label>\n                          <ion-select placeholder=\"Select One\" [(ngModel)]=\"aprice\">\n                            <ion-select-option value=\"{{arprice}}---Retail\">Retail</ion-select-option>\n                            <ion-select-option value=\"{{awprice}}---Wholesale\">Wholesale</ion-select-option>\n                            <ion-select-option value=\"{{adprice}}---Discount\">Discount</ion-select-option>\n                          </ion-select>\n                        </ion-item>\n\n                        <ion-item class=\"ip\">\n                          <ion-label position=\"floating\">Quantity</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"aqty\"></ion-input>\n                        </ion-item>\n\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <ion-item style=\"margin-bottom: 10px;\">\n                              <ion-label position=\"floating\">Amount tendered</ion-label>\n                              <ion-input type=\"number\" [(ngModel)]=\"amt_ten\"></ion-input>\n                            </ion-item>\n                          </div>\n    \n                          <div class=\"col-md-6\">\n                            <ion-item style=\"margin-bottom: 10px;\">\n                              <ion-label position=\"floating\">Change</ion-label>\n                              <ion-input type=\"number\" [(ngModel)]=\"chng\"></ion-input>\n                            </ion-item>\n                          </div>\n                        </div>\n\n                        <ion-button (click)=\"ivnsales(item, aprice, aqty)\" color=\"primary\">ADD\n                        </ion-button>\n                      </section>\n\n\n                    </div>\n\n                  </div>\n\n                  <div class=\"form-sample\">\n                    <h2 style=\"color: black;\">Customer info</h2>\n                    <p style=\"color: red;\">{{bres}}</p>\n                    <p style=\"color: green;\">{{gres}}</p>\n                    <div class=\"add-items\">\n                      <ion-item class=\"ip\">\n                        <ion-label position=\"floating\">Tag number</ion-label>\n                        <ion-input [(ngModel)]=\"tag\"></ion-input>\n                      </ion-item>\n                      <ion-button (click)=\"check_tag_no(tag)\" color=\"primary\">Check customer\n                      </ion-button>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <ion-item style=\"margin-bottom: 10px;\">\n                          <ion-label position=\"floating\">Name</ion-label>\n                          <ion-input [(ngModel)]=\"cname\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item style=\"margin-bottom: 10px;\">\n                          <ion-label position=\"floating\">Phone</ion-label>\n                          <ion-input [(ngModel)]=\"cphone\" ></ion-input>\n                        </ion-item>\n                      </div>\n\n                    </div>\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-5 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  \n\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th> ITEM </th>\n                          <th> PRICE/QUANTITY </th>\n                          <th> # </th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let sale of finalsales; let i = index\">\n                          <td> {{sale.item}} KG</td>\n                          <td> {{sale.price}} / {{sale.qty}} </td>\n                          <td>\n                            <ion-icon (click)=\"removeitem(i)\" name=\"close\"></ion-icon>\n                          </td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Total</th>\n                          <th>NGN {{t}}</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n\n                    <ion-button (click)=\"conf()\" color=\"success\">SAVE & PRINT RECEIPT\n                    </ion-button>\n\n                    <ion-button (click)=\"conff()\" color=\"success\">SAVE RECEIPT\n                    </ion-button>\n                  </div>\n\n                  <h4 style=\"color: black;\">Customer's history</h4>\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th> Last 7 days </th>\n                          <th> {{lastday}} </th>\n                        </tr>\n                        <tr>\n                          <th> Last month </th>\n                          <th> {{lastmnth}} </th>\n                        </tr>\n                        <tr>\n                          <th> Last year </th>\n                          <th> {{lastyr}} </th>\n                        </tr>\n                      </thead>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n        <!-- content-wrapper ends -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n\n  \n\n  <!-- The Modal -->\n<div id=\"myModal\" class=\"modal printable\">\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <table class=\"printable\">\n      <tr style=\"width: 90%;\">\n        <th class=\"rhd\" colspan=\"2\">{{comname}}</th>\n      </tr>\n      <tr style=\"width: 90%;\">\n        <th class=\"rhd\" colspan=\"2\">{{comphone}}</th>\n      </tr>\n      <tr style=\"width: 90%;\">\n        <th class=\"rhd\" colspan=\"2\">{{comemail}}</th>\n      </tr>\n      <tr style=\"width: 90%;\">\n        <th class=\"rhd\" colspan=\"2\">{{comaddress}}</th>\n      </tr>\n\n      <tr style=\"width: 50%;\">\n        <td class=\"rbd\" colspan=\"2\">Customer name: {{cname}}</td>\n      </tr>\n\n      <tr style=\"width: 50%;\">\n        <td class=\"rbd\" colspan=\"2\">Customer phone: {{cphone}}</td>\n      </tr>\n\n      <tr style=\"width: 50%;\">\n        <td class=\"rbd\">Date: {{today}}</td>\n        <td class=\"rbd\" style=\"float: right;\">Ref: {{ref}}</td>\n      </tr>\n\n      <tr style=\"width: 50%;\">\n        <td class=\"rbd\">Time: {{time}}</td>\n        <td class=\"rbd\" style=\"float: right;\">Staff; {{fname}}</td>\n      </tr>\n\n      <tr style=\"width: 50%;\">\n        <td class=\"rbd\">ITEM</td>\n        <td class=\"rbd\" style=\"float: right;\">PRICE/QUANTITY</td>\n      </tr>\n      <tr *ngFor=\"let sale of finalsales; let i = index\" style=\"width: 50%;\">\n        <td class=\"rbd\">{{sale.item}} KG</td>\n        <td class=\"rbd\" style=\"float: right;\">{{sale.price}} / {{sale.qty}}</td>\n      </tr>\n      <tr>\n        <td class=\"rbd\">Total</td>\n        <td class=\"rbd\">NGN {{t}}</td>\n      </tr>\n      <tr>\n        <td class=\"rbd\">Amount Tendered</td>\n        <td class=\"rbd\">NGN {{amt_ten}}</td>\n      </tr>\n      <tr>\n        <td class=\"rbd\">Change given</td>\n        <td class=\"rbd\">NGN {{chng}}</td>\n      </tr>\n      <tr>\n        <td class=\"rbd\" colspan=\"2\">Thanks for your patronage!!!</td>\n      </tr>\n    </table>\n  </div>\n\n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_gas-sales_gas-sales_module_ts-es2015.js.map