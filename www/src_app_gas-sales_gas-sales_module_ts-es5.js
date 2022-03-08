(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgas"] = self["webpackChunkgas"] || []).push([["src_app_gas-sales_gas-sales_module_ts"], {
    /***/
    95162:
    /*!*******************************************************!*\
      !*** ./src/app/gas-sales/gas-sales-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GasSalesPageRoutingModule": function GasSalesPageRoutingModule() {
          return (
            /* binding */
            _GasSalesPageRoutingModule
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


      var _gas_sales_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./gas-sales.page */
      38664);

      var routes = [{
        path: '',
        component: _gas_sales_page__WEBPACK_IMPORTED_MODULE_0__.GasSalesPage
      }];

      var _GasSalesPageRoutingModule = function GasSalesPageRoutingModule() {
        _classCallCheck(this, GasSalesPageRoutingModule);
      };

      _GasSalesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _GasSalesPageRoutingModule);
      /***/
    },

    /***/
    94713:
    /*!***********************************************!*\
      !*** ./src/app/gas-sales/gas-sales.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GasSalesPageModule": function GasSalesPageModule() {
          return (
            /* binding */
            _GasSalesPageModule
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


      var _gas_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./gas-sales-routing.module */
      95162);
      /* harmony import */


      var _gas_sales_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gas-sales.page */
      38664);

      var _GasSalesPageModule = function GasSalesPageModule() {
        _classCallCheck(this, GasSalesPageModule);
      };

      _GasSalesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _gas_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__.GasSalesPageRoutingModule],
        declarations: [_gas_sales_page__WEBPACK_IMPORTED_MODULE_1__.GasSalesPage]
      })], _GasSalesPageModule);
      /***/
    },

    /***/
    38664:
    /*!*********************************************!*\
      !*** ./src/app/gas-sales/gas-sales.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GasSalesPage": function GasSalesPage() {
          return (
            /* binding */
            _GasSalesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_gas_sales_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./gas-sales.page.html */
      59185);
      /* harmony import */


      var _gas_sales_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gas-sales.page.scss */
      31265);
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

      var _GasSalesPage = /*#__PURE__*/function () {
        function GasSalesPage(router, network) {
          _classCallCheck(this, GasSalesPage);

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

        _createClass(GasSalesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.get_inventories();
            this.get_pricesperkg();
            this.get_pricesperkg_online();
            this.get_info();
            this.get_staff();
            this.adddate();
            this.get_gas_value();
          }
        }, {
          key: "get_gas_value",
          value: function get_gas_value() {
            var _this = this;

            this.network.get_gas_value().subscribe(function (res) {
              // console.log("SUCCESS ===",res);
              // console.log(res);
              var gasv = res[0];
              _this.gas_value = gasv.val;
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "get_staff",
          value: function get_staff() {
            var _this2 = this;

            this.userid = JSON.parse(localStorage.getItem('userid'));
            this.network.get_staff(this.userid).subscribe(function (res) {
              // console.log("SUCCESS ===",res);
              // console.log(res);
              var staff = res[0];
              _this2.fname = staff.fname;
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "get_info",
          value: function get_info() {
            var _this3 = this;

            this.network.get_info().subscribe(function (res) {
              // console.log("SUCCESS ===", res);
              // console.log(res);
              var info = res[0];
              _this3.comname = info.name;
              _this3.comphone = info.phone;
              _this3.comemail = info.email;
              _this3.comaddress = info.address;
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "getpast",
          value: function getpast(t) {
            var _this4 = this;

            this.network.getpast(t).subscribe(function (res) {
              // console.log("SUCCESS ===", res);
              // console.log(res);
              _this4.lastday = res.day;
              _this4.lastmnth = res.mth;
              _this4.lastyr = res.yr;
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "check_tag_no",
          value: function check_tag_no(t) {
            var _this5 = this;

            this.bres = "";
            this.gres = "";
            this.cname = "";
            this.cphone = "";

            if (!t) {
              this.bres = "Enter tag nos";
            } else {
              this.network.check_tag_no(t).subscribe(function (res) {
                // console.log("SUCCESS ===", res);
                if (res != 'empty') {
                  var customer = res[0];
                  _this5.cname = customer.name;
                  _this5.cphone = customer.phone;

                  _this5.getpast(t);
                } else {
                  _this5.bres = "No customer with this tag number";
                } // console.log(res);

              }, function (error) {
                console.log("ERROR ===", error);
              });
            }
          }
        }, {
          key: "get_pricesperkg",
          value: function get_pricesperkg() {
            var _this6 = this;

            this.network.get_pricesperkg().subscribe(function (res) {
              // console.log("SUCCESS ===", res);
              // console.log(res);
              var prices = res[0];
              _this6.cprice = prices.cprice;
              _this6.rprice = prices.rprice + '---Retail';
              _this6.wprice = prices.wprice + '---Wholesale';
              _this6.dprice = prices.dprice + '---Discount';
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "get_pricesperkg_online",
          value: function get_pricesperkg_online() {
            var _this7 = this;

            this.network.get_pricesperkg_online().subscribe(function (res) {
              // console.log("SUCCESS ===",res);
              // console.log(res);
              _this7.oprices = res[0];

              if (_this7.oprices.sync == 'No') {
                _this7.sync_c = "true";
              }
            }, function (error) {
              _this7.ores = "Check internet connection"; // console.log("ERROR ===",error);
            });
          }
        }, {
          key: "sync_cylinder",
          value: function sync_cylinder() {
            var _this8 = this;

            this.network.sync_cy_online().subscribe(function (res) {
              // console.log("SUCCESS ===",res);
              // console.log(res);
              if (res == 'success') {
                _this8.sync_c = "false";

                _this8.edit_gaspricesperkg(_this8.oprices.cprice, _this8.oprices.rprice, _this8.oprices.wprice, _this8.oprices.dprice);

                _this8.get_pricesperkg();
              } else {
                _this8.ores = "Something went wrong, please try again";
              }
            }, function (error) {
              _this8.ores = "Check internet connection"; // console.log("ERROR ===",error);
            });
          }
        }, {
          key: "edit_gaspricesperkg",
          value: function edit_gaspricesperkg(cp, rp, wp, dp) {
            var _this9 = this;

            this.bres = "";
            this.gres = "";

            if (!cp) {
              this.bres = "All fields are required";
            } else {
              var data = {
                cp: cp,
                rp: rp,
                wp: wp,
                dp: dp
              };
              this.network.edit_gaspricesperkg(data).subscribe(function (res) {
                // console.log("SUCCESS ===",res);
                if (res == "bad") {
                  _this9.bres = "Something went wrong, please try again";
                } else {
                  _this9.gres = 'success';
                }
              }, function (error) {
                // console.log("ERROR ===",error);
                _this9.bres = "Something went wrong, please try again";
              });
            }
          }
        }, {
          key: "get_inventories",
          value: function get_inventories() {
            var _this10 = this;

            this.network.get_inventories().subscribe(function (res) {
              // console.log("SUCCESS ===", res);
              _this10.inventories = res; // console.log('ivn '+this.inventories);
            }, function (error) {
              console.log("ERROR ===", error);
            });
          }
        }, {
          key: "calc_gp_kg",
          value: function calc_gp_kg() {
            this.gprice = 0;
            this.cylinder = 0;
            this.gqty = 0;
          }
        }, {
          key: "calc_t",
          value: function calc_t() {
            this.t = 0;

            if (this.finalsales.length >= 1) {
              for (var y = 0; y < this.finalsales.length; y++) {
                this.t += this.finalsales[y].qty * this.finalsales[y].price;
              }
            }
          }
        }, {
          key: "calc_gp",
          value: function calc_gp() {
            var myArr = this.type.split("---");
            this.st = myArr[1];

            if (myArr[0] == 0) {
              this.bres = 'Please select price type above';
            } else {
              this.gprice = myArr[0] * this.cylinder;
            }
          }
        }, {
          key: "calc_kg",
          value: function calc_kg() {
            var myArr = this.type.split("---");
            this.st = myArr[1];

            if (myArr[0] == 0) {
              this.bres = 'Please select price type above';
            } else {
              this.cylinder = this.gprice / myArr[0];
            }
          }
        }, {
          key: "getitemprices",
          value: function getitemprices() {
            var _this11 = this;

            if (this.item != '' || this.item != 'undefined') {
              this.itemprices = this.inventories.filter(function (record) {
                return record.id === _this11.item;
              });
              this.arprice = this.itemprices[0].price;
              this.awprice = this.itemprices[0].wprice;
              this.adprice = this.itemprices[0].dprice;
            }
          }
        }, {
          key: "gassales",
          value: function gassales(t, c, gp, gq) {
            this.bres = '';
            this.gres = '';

            if (!c || !gp || !gq) {
              this.bres = 'Enter all fields';
            } else if (parseInt(c) > this.gas_value) {
              this.bres = 'Insufficient gas quantity';
            } else {
              var nc = Math.trunc(c * 100) / 100;
              var ngp = Math.trunc(gp * 100) / 100;
              var sale = {
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
        }, {
          key: "ivnsales",
          value: function ivnsales(i, ap, aq) {
            this.bres = '';
            this.gres = '';

            if (!i || !ap || !aq) {
              this.bres = 'Enter all fields';
            } else if (parseInt(aq) > parseInt(this.itemprices[0].quantity)) {
              this.bres = "Out of stock " + this.itemprices[0].quantity + " left";
            } else {
              var myArr = ap.split("---");
              this.st = myArr[1];
              var sale = {
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
        }, {
          key: "removeitem",
          value: function removeitem(i) {
            this.finalsales.splice(i, 1);
            this.calc_t();
            this.calc_t();
          }
        }, {
          key: "openm",
          value: function openm() {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
          }
        }, {
          key: "closem",
          value: function closem() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
          }
        }, {
          key: "adddate",
          value: function adddate() {
            this.today = new Date();
            var dd = String(this.today.getDate()).padStart(2, '0');
            var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!

            var yyyy = this.today.getFullYear();
            this.time = new Date();
            this.time = this.time.getHours() + ":" + this.time.getMinutes() + ":" + this.time.getSeconds();
            this.today = mm + '/' + dd + '/' + yyyy;
          }
        }, {
          key: "conf",
          value: function conf() {
            var _this12 = this;

            this.bres = '';
            this.gres = '';

            if (this.finalsales.length <= 0) {
              this.bres = 'You have nothing in the cart';
            } else if (this.amt_ten == '') {
              this.bres = 'Enter amount tendered and change given';
            } else {
              var d = new Date();
              var n = d.getTime();
              this.ref = n;
              var data = {
                data: this.finalsales,
                userid: this.userid,
                cname: this.cname,
                cphone: this.cphone,
                amt_ten: this.amt_ten,
                chng: this.chng,
                ref: n,
                tag: this.tag
              };
              this.network.conf(data).subscribe(function (res) {
                // console.log("SUCCESS ===", res);
                if (res == "bad") {
                  _this12.bres = "Something went wrong, please try again";
                } else {
                  _this12.gres = 'success';

                  _this12.adddate();

                  _this12.openm();

                  window.print();
                  _this12.finalsales = [];

                  _this12.reset();

                  _this12.closem();

                  _this12.gres = 'Success';
                }
              }, function (error) {
                console.log("ERROR ===", error);
              });
            }
          }
        }, {
          key: "conff",
          value: function conff() {
            var _this13 = this;

            this.bres = '';
            this.gres = '';

            if (this.finalsales.length <= 0) {
              this.bres = 'You have nothing in the cart';
            } else if (this.amt_ten == '') {
              this.bres = 'Enter amount tendered and change given';
            } else {
              var d = new Date();
              var n = d.getTime();
              this.ref = n;
              var data = {
                data: this.finalsales,
                userid: this.userid,
                cname: this.cname,
                cphone: this.cphone,
                amt_ten: this.amt_ten,
                chng: this.chng,
                ref: n,
                tag: this.tag
              };
              this.network.conf(data).subscribe(function (res) {
                // console.log("SUCCESS ===", res);
                if (res == "bad") {
                  _this13.bres = "Something went wrong, please try again";
                } else {
                  _this13.gres = 'success';

                  _this13.adddate();

                  _this13.openm();

                  _this13.finalsales = [];

                  _this13.calc_t();

                  _this13.reset();

                  _this13.closem();

                  _this13.gres = 'Success';
                }
              }, function (error) {
                console.log("ERROR ===", error);
              });
            }
          }
        }, {
          key: "reset",
          value: function reset() {
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
        }]);

        return GasSalesPage;
      }();

      _GasSalesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _rope_service__WEBPACK_IMPORTED_MODULE_2__.RopeService
        }];
      };

      _GasSalesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-gas-sales',
        template: _raw_loader_gas_sales_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gas_sales_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _GasSalesPage);
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
    31265:
    /*!***********************************************!*\
      !*** ./src/app/gas-sales/gas-sales.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@media print {\n  .non-printable {\n    display: none;\n  }\n\n  .modal {\n    position: absolute;\n    left: 0 !important;\n    top: 0 !important;\n    margin: 0 !important;\n    padding-top: 0 !important;\n    overflow: visible !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  .modal-content {\n    padding-top: 0 !important;\n    margin-top: 0 !important;\n    left: 0 !important;\n    top: 0 !important;\n  }\n\n  .rhd {\n    width: 100% !important;\n    text-align: center !important;\n    font-size: 55px !important;\n  }\n\n  .rbd {\n    font-size: 50px !important;\n    font-weight: lighter !important;\n    padding-top: 0px !important;\n    padding-bottom: 0px !important;\n  }\n}\n.rhd {\n  width: 100%;\n  text-align: center;\n  font-size: 25px;\n}\n.rbd {\n  font-size: 10px;\n  font-weight: lighter;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.col-md-6, .ip {\n  margin-bottom: 9px;\n}\n.back {\n  padding-left: 20px;\n}\n/*\n CSS for the main interaction\n*/\n.tabset > input[type=radio] {\n  position: absolute;\n  left: -200vw;\n}\n.tabset .tab-panel {\n  display: none;\n}\n.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,\n.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),\n.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),\n.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),\n.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),\n.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {\n  display: block;\n}\n/*\n Styling\n*/\nbody {\n  font: 16px/1.5em \"Overpass\", \"Open Sans\", Helvetica, sans-serif;\n  color: #333;\n  font-weight: 300;\n}\n.tabset > label {\n  position: relative;\n  display: inline-block;\n  padding: 15px 15px 25px;\n  border: 1px solid transparent;\n  border-bottom: 0;\n  cursor: pointer;\n  font-weight: 600;\n}\n.tabset > label::after {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  bottom: 10px;\n  width: 22px;\n  height: 4px;\n  background: #8d8d8d;\n}\n.tabset > label:hover,\n.tabset > input:focus + label {\n  color: #06c;\n}\n.tabset > label:hover::after,\n.tabset > input:focus + label::after,\n.tabset > input:checked + label::after {\n  background: #06c;\n}\n.tabset > input:checked + label {\n  border-color: #ccc;\n  border-bottom: 1px solid #fff;\n  margin-bottom: -1px;\n}\n.tab-panel {\n  padding: 30px 0;\n  border-top: 1px solid #ccc;\n}\n/*\n Demo purposes only\n*/\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nbody {\n  padding: 30px;\n}\n.tabset {\n  max-width: 65em;\n}\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: absolute;\n  left: 100px;\n  top: 100px;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  width: 30%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  padding-left: 20p;\n  padding-right: 20px;\n}\n/* Modal Content */\n.modal-content {\n  background-color: #fefefe;\n  color: black;\n  margin: auto;\n  width: 90%;\n}\n/* The Close Button */\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhcy1zYWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLGFBQUE7RUFBRjs7RUFHQTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUFBRjs7RUFFQTtJQUNFLHlCQUFBO0lBQ0Esd0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsMEJBQUE7RUFDRjs7RUFFQTtJQUNFLDBCQUFBO0lBQ0EsK0JBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFJQTtFQUNJLGtCQUFBO0FBREo7QUFHQTtFQUNJLGtCQUFBO0FBQUo7QUFHQTs7Q0FBQTtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7QUFBSjtBQUdFOzs7Ozs7RUFNRSxjQUFBO0FBQUo7QUFHRTs7Q0FBQTtBQUdBO0VBQ0UsK0RBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFOztFQUVFLFdBQUE7QUFBSjtBQUdFOzs7RUFHRSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBQUo7QUFHRTs7Q0FBQTtBQUdBOzs7RUFHRSxzQkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7QUFBSjtBQUlFO0VBQ0EsYUFBQTtFQUFlLHNCQUFBO0VBQ2Ysa0JBQUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUFZLGtCQUFBO0VBQ2QsVUFBQTtFQUFZLGVBQUE7RUFDWixVQUFBO0VBQVksZUFBQTtFQUNaLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIsaUJBQUE7RUFDQSxtQkFBQTtBQUtGO0FBRkEsa0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBS0Y7QUFGQSxxQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLRjtBQUZBOztFQUVFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFLRiIsImZpbGUiOiJnYXMtc2FsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLm5vbi1wcmludGFibGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAwIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMCFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJoZHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJiZHtcclxuICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXIgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5yaGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnJiZHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbC1tZC02LCAuaXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbn1cclxuLmJhY2t7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi8qXHJcbiBDU1MgZm9yIHRoZSBtYWluIGludGVyYWN0aW9uXHJcbiovXHJcbi50YWJzZXQgPiBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTIwMHZ3O1xyXG4gIH1cclxuICBcclxuICAudGFic2V0IC50YWItcGFuZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYnNldCA+IGlucHV0OmZpcnN0LWNoaWxkOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6Zmlyc3QtY2hpbGQsXHJcbiAgLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCgzKTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCgyKSxcclxuICAudGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDUpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDMpLFxyXG4gIC50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoNyk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNCksXHJcbiAgLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg5KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg1KSxcclxuICAudGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDExKTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg2KSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLypcclxuICAgU3R5bGluZ1xyXG4gICovXHJcbiAgYm9keSB7XHJcbiAgICBmb250OiAxNnB4LzEuNWVtIFwiT3ZlcnBhc3NcIiwgXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICBcclxuICAudGFic2V0ID4gbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAudGFic2V0ID4gbGFiZWw6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICM4ZDhkOGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJzZXQgPiBsYWJlbDpob3ZlcixcclxuICAudGFic2V0ID4gaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzA2YztcclxuICB9XHJcbiAgXHJcbiAgLnRhYnNldCA+IGxhYmVsOmhvdmVyOjphZnRlcixcclxuICAudGFic2V0ID4gaW5wdXQ6Zm9jdXMgKyBsYWJlbDo6YWZ0ZXIsXHJcbiAgLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA2YztcclxuICB9XHJcbiAgXHJcbiAgLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWItcGFuZWwge1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgIERlbW8gcHVycG9zZXMgb25seVxyXG4gICovXHJcbiAgKixcclxuICAqOmJlZm9yZSxcclxuICAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYnNldCB7XHJcbiAgICBtYXgtd2lkdGg6IDY1ZW07XHJcbiAgfVxyXG5cclxuXHJcbiAgLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgdG9wOiAxMDBweDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICB3aWR0aDogMzAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIHBhZGRpbmctbGVmdDogMjBwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    59185:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gas-sales/gas-sales.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"non-printable\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/staff-dashboard\" routerDirection=\"back\" class=\"back\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      <ion-button text=\"\" icon=\"add\">BACK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-scroller non-printable\">\n    <!-- partial:partials/_navbar.html -->\n\n    <!-- partial -->\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 700px;\">\n      <!-- partial:partials/_sidebar.html -->\n\n      <!-- partial -->\n      <div class=\"main-panel\" style=\"width:100%;\">\n        <div class=\"content-wrapper\">\n\n\n\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n\n              <ion-button *ngIf=\"sync_c == 'true'\" (click)=\"sync_cylinder()\" color=\"primary\">SYNC LOCAL TO LIVE</ion-button>\n              <p style=\"color:red;\">{{ores}}</p>\n            </div>\n            <div class=\"col-md-7 grid-margin stretch-card non-printable\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Sales Status</h4>\n                  <p style=\"color: red;\">{{bres}}</p>\n                  <p style=\"color: green;\">{{gres}}</p>\n                  \n                  <div class=\"tabset\">\n                    <!-- Tab 1 -->\n                    <input type=\"radio\" name=\"tabset\" id=\"tab1\" aria-controls=\"marzen\" checked>\n                    <label style=\"color: black;\" for=\"tab1\">Gas</label>\n                    <!-- Tab 2 -->\n                    <input type=\"radio\" name=\"tabset\" id=\"tab2\" aria-controls=\"rauchbier\">\n                    <label for=\"tab2\" style=\"color: black;\">Accessories</label>\n\n                    <div class=\"tab-panels\">\n                      <section id=\"marzen\" class=\"tab-panel\" style=\"color: black;\">\n                        <h2>Gas</h2>\n                        <ion-item class=\"ip\">\n                          <ion-label>Type</ion-label>\n                          <ion-select placeholder=\"Select One\" [(ngModel)]=\"type\" (ngModelChange)=\"calc_gp_kg()\">\n                            <ion-select-option value=\"{{rprice}}\">Retail</ion-select-option>\n                            <ion-select-option value=\"{{wprice}}\">Wholesale</ion-select-option>\n                            <ion-select-option value=\"{{dprice}}\">Discount</ion-select-option>\n                          </ion-select>\n                        </ion-item>\n\n                        <ion-item class=\"ip\">\n                          <ion-label position=\"floating\">Cylinder</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"cylinder\" (ngModelChange)=\"calc_gp()\"></ion-input>\n                        </ion-item>\n\n                        <ion-item class=\"ip\">\n                          <ion-label position=\"floating\">Price</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"gprice\" (ngModelChange)=\"calc_kg()\"></ion-input>\n                        </ion-item>\n\n                        <ion-item class=\"ip\">\n                          <ion-label position=\"floating\">Quantity</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"gqty\"></ion-input>\n                        </ion-item>\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <ion-item style=\"margin-bottom: 10px;\">\n                              <ion-label position=\"floating\">Amount tendered</ion-label>\n                              <ion-input type=\"number\" [(ngModel)]=\"amt_ten\"></ion-input>\n                            </ion-item>\n                          </div>\n    \n                          <div class=\"col-md-6\">\n                            <ion-item style=\"margin-bottom: 10px;\">\n                              <ion-label position=\"floating\">Change</ion-label>\n                              <ion-input type=\"number\" [(ngModel)]=\"chng\"></ion-input>\n                            </ion-item>\n                          </div>\n                        </div>\n                        <ion-button (click)=\"gassales(type, cylinder, gprice, gqty)\" color=\"primary\">ADD\n                        </ion-button>\n                      </section>\n                      <section id=\"rauchbier\" class=\"tab-panel\" style=\"color: black;\">\n                        <h2>Accessories</h2>\n                        <ion-item class=\"ip\">\n                          <ion-label>Item</ion-label>\n                          <ion-select placeholder=\"Select One\" [(ngModel)]=\"item\"\n                            (ngModelChange)=\"getitemprices()\">\n                            <ion-select-option *ngFor=\"let inventory of inventories\" value=\"{{inventory.id}}\">\n                              {{inventory.title}}</ion-select-option>\n                          </ion-select>\n                        </ion-item>\n\n                        <ion-item class=\"ip\">\n                          <ion-label>Price</ion-label>\n                          <ion-select placeholder=\"Select One\" [(ngModel)]=\"aprice\">\n                            <ion-select-option value=\"{{arprice}}---Retail\">Retail</ion-select-option>\n                            <ion-select-option value=\"{{awprice}}---Wholesale\">Wholesale</ion-select-option>\n                            <ion-select-option value=\"{{adprice}}---Discount\">Discount</ion-select-option>\n                          </ion-select>\n                        </ion-item>\n\n                        <ion-item class=\"ip\">\n                          <ion-label position=\"floating\">Quantity</ion-label>\n                          <ion-input type=\"number\" [(ngModel)]=\"aqty\"></ion-input>\n                        </ion-item>\n\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <ion-item style=\"margin-bottom: 10px;\">\n                              <ion-label position=\"floating\">Amount tendered</ion-label>\n                              <ion-input type=\"number\" [(ngModel)]=\"amt_ten\"></ion-input>\n                            </ion-item>\n                          </div>\n    \n                          <div class=\"col-md-6\">\n                            <ion-item style=\"margin-bottom: 10px;\">\n                              <ion-label position=\"floating\">Change</ion-label>\n                              <ion-input type=\"number\" [(ngModel)]=\"chng\"></ion-input>\n                            </ion-item>\n                          </div>\n                        </div>\n\n                        <ion-button (click)=\"ivnsales(item, aprice, aqty)\" color=\"primary\">ADD\n                        </ion-button>\n                      </section>\n\n\n                    </div>\n\n                  </div>\n\n                  <div class=\"form-sample\">\n                    <h2 style=\"color: black;\">Customer info</h2>\n                    <p style=\"color: red;\">{{bres}}</p>\n                    <p style=\"color: green;\">{{gres}}</p>\n                    <div class=\"add-items\">\n                      <ion-item class=\"ip\">\n                        <ion-label position=\"floating\">Tag number</ion-label>\n                        <ion-input [(ngModel)]=\"tag\"></ion-input>\n                      </ion-item>\n                      <ion-button (click)=\"check_tag_no(tag)\" color=\"primary\">Check customer\n                      </ion-button>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <ion-item style=\"margin-bottom: 10px;\">\n                          <ion-label position=\"floating\">Name</ion-label>\n                          <ion-input [(ngModel)]=\"cname\"></ion-input>\n                        </ion-item>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                        <ion-item style=\"margin-bottom: 10px;\">\n                          <ion-label position=\"floating\">Phone</ion-label>\n                          <ion-input [(ngModel)]=\"cphone\" ></ion-input>\n                        </ion-item>\n                      </div>\n\n                    </div>\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-5 grid-margin stretch-card\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  \n\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th> ITEM </th>\n                          <th> PRICE/QUANTITY </th>\n                          <th> # </th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let sale of finalsales; let i = index\">\n                          <td> {{sale.item}} KG</td>\n                          <td> {{sale.price}} / {{sale.qty}} </td>\n                          <td>\n                            <ion-icon (click)=\"removeitem(i)\" name=\"close\"></ion-icon>\n                          </td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th>Total</th>\n                          <th>NGN {{t}}</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n\n                    <ion-button (click)=\"conf()\" color=\"success\">SAVE & PRINT RECEIPT\n                    </ion-button>\n\n                    <ion-button (click)=\"conff()\" color=\"success\">SAVE RECEIPT\n                    </ion-button>\n                  </div>\n\n                  <h4 style=\"color: black;\">Customer's history</h4>\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th> Last 7 days </th>\n                          <th> {{lastday}} </th>\n                        </tr>\n                        <tr>\n                          <th> Last month </th>\n                          <th> {{lastmnth}} </th>\n                        </tr>\n                        <tr>\n                          <th> Last year </th>\n                          <th> {{lastyr}} </th>\n                        </tr>\n                      </thead>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n        <!-- content-wrapper ends -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </div>\n\n  \n\n  <!-- The Modal -->\n<div id=\"myModal\" class=\"modal printable\">\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <table class=\"printable\">\n      <tr style=\"width: 90%;\">\n        <th class=\"rhd\" colspan=\"2\">{{comname}}</th>\n      </tr>\n      <tr style=\"width: 90%;\">\n        <th class=\"rhd\" colspan=\"2\">{{comphone}}</th>\n      </tr>\n      <tr style=\"width: 90%;\">\n        <th class=\"rhd\" colspan=\"2\">{{comemail}}</th>\n      </tr>\n      <tr style=\"width: 90%;\">\n        <th class=\"rhd\" colspan=\"2\">{{comaddress}}</th>\n      </tr>\n\n      <tr style=\"width: 50%;\">\n        <td class=\"rbd\" colspan=\"2\">Customer name: {{cname}}</td>\n      </tr>\n\n      <tr style=\"width: 50%;\">\n        <td class=\"rbd\" colspan=\"2\">Customer phone: {{cphone}}</td>\n      </tr>\n\n      <tr style=\"width: 50%;\">\n        <td class=\"rbd\">Date: {{today}}</td>\n        <td class=\"rbd\" style=\"float: right;\">Ref: {{ref}}</td>\n      </tr>\n\n      <tr style=\"width: 50%;\">\n        <td class=\"rbd\">Time: {{time}}</td>\n        <td class=\"rbd\" style=\"float: right;\">Staff; {{fname}}</td>\n      </tr>\n\n      <tr style=\"width: 50%;\">\n        <td class=\"rbd\">ITEM</td>\n        <td class=\"rbd\" style=\"float: right;\">PRICE/QUANTITY</td>\n      </tr>\n      <tr *ngFor=\"let sale of finalsales; let i = index\" style=\"width: 50%;\">\n        <td class=\"rbd\">{{sale.item}} KG</td>\n        <td class=\"rbd\" style=\"float: right;\">{{sale.price}} / {{sale.qty}}</td>\n      </tr>\n      <tr>\n        <td class=\"rbd\">Total</td>\n        <td class=\"rbd\">NGN {{t}}</td>\n      </tr>\n      <tr>\n        <td class=\"rbd\">Amount Tendered</td>\n        <td class=\"rbd\">NGN {{amt_ten}}</td>\n      </tr>\n      <tr>\n        <td class=\"rbd\">Change given</td>\n        <td class=\"rbd\">NGN {{chng}}</td>\n      </tr>\n      <tr>\n        <td class=\"rbd\" colspan=\"2\">Thanks for your patronage!!!</td>\n      </tr>\n    </table>\n  </div>\n\n</div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_gas-sales_gas-sales_module_ts-es5.js.map