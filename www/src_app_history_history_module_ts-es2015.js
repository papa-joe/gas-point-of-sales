(self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_history_history_module_ts"],{

/***/ 35010:
/*!***************************************************!*\
  !*** ./src/app/history/history-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageRoutingModule": function() { return /* binding */ HistoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page */ 4253);




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ 92486:
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageModule": function() { return /* binding */ HistoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-routing.module */ 35010);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page */ 4253);







let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage]
    })
], HistoryPageModule);



/***/ }),

/***/ 4253:
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPage": function() { return /* binding */ HistoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./history.page.html */ 94986);
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page.scss */ 34873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _rope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rope.service */ 11727);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 92707);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 30331);






let HistoryPage = class HistoryPage {
    constructor(network) {
        this.network = network;
        this.staff_filter = '';
        this.type_filter = '';
        this.history = [];
        this.staffs = [];
        this.total = 0;
        this.cusd = '';
        this.cuskg = 0;
        this.kgt = 0;
        this.item_filter = '';
        this.sale_filter = '';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.get_staffs();
        this.get_history();
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
        this.total = Math.trunc(this.total * 100) / 100;
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
        this.total = Math.trunc(this.total * 100) / 100;
    }
    get_staffs() {
        this.network.get_staffs().subscribe((res) => {
            // console.log("SUCCESS ===",res);
            this.staffs = res;
            // console.log(res);
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
            let key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }
    get_history() {
        this.network.get_history().subscribe((res) => {
            // console.log("SUCCESS ===",res);
            this.stored_history = res;
            this.history = this.stored_history;
            this.calc_total();
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    search_history(f, t) {
        let data = {
            from: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(f), 'yyyy-MM-d'),
            to: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(t), 'yyyy-MM-d')
        };
        this.network.search_history(data).subscribe((res) => {
            // console.log("SUCCESS ===",res);
            if (res == "error") {
                this.response = "email or password is wrong";
            }
            else {
                this.stored_history = res;
                this.history = res;
                this.calc_total();
                console.log(this.history);
            }
        }, (error) => {
            console.log("ERROR ===", error);
        });
    }
    filter_history(d) {
        this.stored_history = this.history;
        if (this.staff_filter != '') {
            this.stored_history = this.stored_history.filter(record => record.user === this.staff_filter);
            // console.log(this.history);
            this.calc_ftotal();
        }
        if (this.type_filter != '') {
            this.stored_history = this.stored_history.filter(record => record.type === this.type_filter);
            // console.log(this.history);
            this.calc_ftotal();
        }
        if (this.cusd != '') {
            this.stored_history = this.stored_history.filter(record => record.cphone === this.cusd);
            // console.log(this.history);
            this.calc_ftotal();
        }
        if (this.item_filter != '') {
            this.stored_history = this.stored_history.filter(record => record.type === this.item_filter);
            // console.log(this.history);
            this.calc_ftotal();
        }
        if (this.sale_filter != '') {
            this.stored_history = this.stored_history.filter(record => record.sale === this.sale_filter);
            // console.log(this.history);
            this.calc_ftotal();
        }
        if (this.cuskg != 0) {
            let groupedrecord = this.groupBy(this.stored_history, 'cphone');
            // console.log(groupedPeople);
            // console.log('length = ' + Object.keys(groupedPeople).length);
            const keys = Object.keys(groupedrecord);
            let ep = [];
            keys.forEach((key, index) => {
                // console.log(`${key}: ${groupedPeople[key]}`);
                let tl = 0;
                let qt = 0;
                let kg = 0;
                let cname = '';
                for (var i = 0; i < groupedrecord[key].length; i++) {
                    if (groupedrecord[key][i].type == 'Gas' && groupedrecord[key][i].cphone != '') {
                        tl += parseInt(groupedrecord[key][i].total);
                        qt += parseInt(groupedrecord[key][i].quantity);
                        kg += parseInt(groupedrecord[key][i].item);
                        cname = groupedrecord[key][i].cname;
                    }
                }
                if (kg >= this.cuskg) {
                    ep.push({ 'type': 'Gas', 'cphone': key, 'item': kg, 'quantity': qt, 'total': tl, cname: cname });
                }
                this.stored_history = ep;
            });
            this.calc_ftotal();
        }
    }
};
HistoryPage.ctorParameters = () => [
    { type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService }
];
HistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoryPage);



/***/ }),

/***/ 34873:
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-md-6, .ip {\n  margin-bottom: 9px;\n}\n\n.back {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUoiLCJmaWxlIjoiaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLW1kLTYsIC5pcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxufVxyXG4uYmFja3tcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 94986:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/admin-dashboard\" routerDirection=\"back\" class=\"back\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      <ion-button text=\"\" icon=\"add\">BACK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-scroller\">\n    <!-- partial:partials/_navbar.html -->\n\n    <!-- partial -->\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 700px;\">\n      <!-- partial:partials/_sidebar.html -->\n\n      <!-- partial -->\n      <div class=\"main-panel\" style=\"width:100%;\">\n        <div class=\"content-wrapper\" style=\"padding: 0px !important;\">\n\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"card\">\n                <div class=\"card-body\" style=\"padding-right: 10px !important;padding-left: 10px !important;\">\n                  <h4 class=\"card-title\">Search Records</h4>\n\n                  <div class=\"form-sample\">\n                    <p class=\"red\" style=\"color:red;\">{{response}}</p>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label>DD MM YY</ion-label>\n                          <ion-datetime [(ngModel)]=\"from\" displayFormat=\"D-MM-YYYY\" min=\"2021\"></ion-datetime>\n                        </ion-item>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <ion-item>\n                          <ion-label>DD MM YY</ion-label>\n                          <ion-datetime [(ngModel)]=\"to\" displayFormat=\"D-MM-YYYY\" min=\"2021\"></ion-datetime>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-button (click)=\"search_history(from, to)\" color=\"primary\">SEARCH\n                        </ion-button>\n                      </div>\n                    </div>\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n\n\n\n            <div class=\"col-lg-12 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\" style=\"padding-right: 10px !important;padding-left: 10px !important;\">\n\n\n                  <ion-list>\n                    <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                      <ion-text color=\"primary\">\n                        <h3>Total NGN:</h3>\n                      </ion-text>\n                      <p>{{total}}</p>\n                    </ion-label>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label class=\"ion-text-wrap\">\n                        <ion-text color=\"primary\">\n                          <h3>Total KG:</h3>\n                        </ion-text>\n                        <p>{{kgt}}</p>\n                      </ion-label>\n                      </ion-item>\n                  </ion-list>\n                  <h4 class=\"card-title\">Records</h4>\n                  <div class=\"form-inline\">\n\n                    <div class=\"input-group mb-2 mr-sm-4\">\n                      <div class=\"form-sample\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <label style=\"color: black;\">Staff</label>\n                            <select (change)=\"filter_history('staff')\" [(ngModel)]=\"staff_filter\" class=\"form-control\"\n                              id=\"inlineFormInputGroupUsername2\">\n                              <option>Filter by staff</option>\n                              <option value=\"\">All staffs</option>\n                              <option value=\"Admin\">Admin</option>\n                              <option *ngFor=\"let staff of staffs\" value=\"{{staff.id}}\">{{staff.fname}} {{staff.lname}}\n                              </option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"input-group mb-2 mr-sm-4\">\n                      <div class=\"form-sample\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <label style=\"color: black;\">Item type</label>\n                            <select (change)=\"filter_history('item')\" [(ngModel)]=\"item_filter\" class=\"form-control\">\n                              <option value=\"\">Filter by item type</option>\n                              <option value=\"Gas\">Gas</option>\n                              <option value=\"Accessory\">Accessory</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"input-group mb-2 mr-sm-4\">\n                      <div class=\"form-sample\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <label style=\"color: black;\">Sales type</label>\n                            <select (change)=\"filter_history('sale')\" [(ngModel)]=\"sale_filter\" class=\"form-control\">\n                              <option value=\"\">Filter by sale type</option>\n                              <option value=\"\">All types</option>\n                              <option value=\"Retail\">Retail</option>\n                              <option value=\"Wholesale\">Wholesale</option>\n                              <option value=\"Discount\">Discount</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n\n                    <div class=\"input-group mb-2 mr-sm-4\">\n\n                      <div class=\"form-sample\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <label style=\"color: black;\">Customer</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cusd\"\n                              (change)=\"filter_history('cus')\" />\n                          </div>\n                        </div>\n\n\n\n\n\n                      </div>\n                    </div>\n\n                    <div class=\"input-group mb-2 mr-sm-4\">\n\n                      <div class=\"form-sample\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <label style=\"color: black;\">Kg</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cuskg\"\n                              (change)=\"filter_history('cuskg')\" />\n                          </div>\n                        </div>\n\n\n\n\n\n                      </div>\n                    </div>\n                  </div>\n                  <table class=\"table table-bordered table-responsive\">\n                    <thead>\n                      <tr>\n                        <th> User </th>\n                        <th> Type </th>\n                        <th> Item / KG </th>\n                        <th> Quantity </th>\n                        <th> Price </th>\n                        <th> Total </th>\n                        <th> Customer name </th>\n                        <th> Customer phone </th>\n                        <th> Amount tendered </th>\n                        <th> Change </th>\n                        <th> Ref </th>\n                        <th> Date </th>\n                      </tr>\n                    </thead>\n                    <tbody *ngFor=\"let entry of stored_history\">\n                      <tr>\n                        <td> {{entry.user}} </td>\n                        <td> {{entry.type}} </td>\n                        <td> {{entry.item}} </td>\n                        <td> {{entry.quantity}} </td>\n                        <td> {{entry.price}} </td>\n                        <td> {{entry.total}} </td>\n\n                        <td> {{entry.cname}} </td>\n                        <td> {{entry.cphone}} </td>\n                        <td> {{entry.amt_ten}} </td>\n                        <td> {{entry.chng}} </td>\n                        <td> {{entry.ref}} </td>\n                        <td> {{entry.createdat}} </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n        <!-- content-wrapper ends -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_history_history_module_ts-es2015.js.map