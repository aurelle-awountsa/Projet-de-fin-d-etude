(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/I3p":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/add-class.directive.ts ***!
  \**********************************************************/
/*! exports provided: AddClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClassDirective", function() { return AddClassDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AddClassDirective {
    constructor(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
    }
    onClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(r => setTimeout(r, 1000));
            this.renderer.setAttribute(this.elRef.nativeElement, 'disabled', 'true');
            yield new Promise(r => setTimeout(r, 3000));
            this.renderer.removeAttribute(this.elRef.nativeElement, 'disabled');
        });
    }
}
AddClassDirective.ɵfac = function AddClassDirective_Factory(t) { return new (t || AddClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
AddClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AddClassDirective, selectors: [["", "appAddClass", ""]], hostBindings: function AddClassDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddClassDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddClassDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[appAddClass]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\morga\Documents\mean-stack-web-app\client-side\src\main.ts */"zUnb");


/***/ }),

/***/ "6vIp":
/*!********************************************************!*\
  !*** ./src/app/core/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "x0xU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







const _c0 = function () { return ["/register"]; };
const _c1 = function () { return ["/login"]; };
function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "HOME.REGISTER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "HOME.LOGIN"));
} }
class HomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 33, vars: 25, consts: [[1, "jumbotron", "text-center"], [1, "lead"], [4, "ngIf"], [1, "row"], [1, "col-md-4"], [2, "margin-left", "10px"], [2, "margin-right", "10px"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-secondary", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 8, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "HOME.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "HOME.SUBTITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.checkToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, "HOME.SUB1.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 15, "HOME.SUB1.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 17, "HOME.SUB2.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 19, "HOME.SUB2.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 21, "HOME.SUB3.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 23, "HOME.SUB3.TEXT"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "7dP1":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
class AuthService {
    constructor(_http) {
        this._http = _http;
        this.token = localStorage.getItem('id_token');
    }
    registerUser(user) {
        return this._http.post('/server/api/signup', user, { headers });
    }
    loginUser(user) {
        return this._http.post('/server/api/login', user, { headers });
    }
    getProfile() {
        this.getToken();
        //console.log(this.authToken);
        //console.log(JSON.parse(this.user).userId);
        if (this.authToken) {
            const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', this.authToken);
            return this._http.get(`/server/api/user/${JSON.parse(this.user).userId}`, { headers: httpAuthHeaders });
        }
    }
    getUserByUsername(username) {
        const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.token);
        return this._http.get(`/server/api/username/${username}`, { headers: httpAuthHeaders });
    }
    getLogs(limit) {
        const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', this.authToken);
        return this._http.get(`/server/api/users/metrics/max/${limit}`, { headers: httpAuthHeaders });
    }
    confirmEmail(key) {
        return this._http.get(`/server/api/user/verify/${key}`, { headers });
    }
    resendEmail(email) {
        return this._http.get(`/server/api/user/resend/${email}`, { headers });
    }
    updateScore(user) {
        this.getToken();
        if (this.authToken) {
            const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', this.authToken);
            return this._http.patch(`/server/api/user/${JSON.parse(this.user).userId}/score`, user, { headers: httpAuthHeaders });
        }
    }
    updateUser(userId, user) {
        this.getToken();
        if (this.authToken) {
            const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', this.authToken);
            return this._http.patch(`/server/api/user/${userId}`, user, { headers: httpAuthHeaders });
        }
    }
    deleteUser(userId) {
        this.getToken();
        if (this.authToken) {
            const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', this.authToken);
            return this._http.delete(`/server/api/user/${userId}`, { headers: httpAuthHeaders });
        }
    }
    getAllProfiles() {
        this.getToken();
        //console.log(this.authToken);
        if (this.authToken) {
            const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', this.authToken);
            return this._http.get('/server/api/users/profiles/', { headers: httpAuthHeaders });
        }
    }
    storeUserData(data) {
        localStorage.setItem("id_token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("score", data.user.score);
        this.authToken = data.token;
        this.user = data.user;
        this.role = data.user.role;
    }
    getToken() {
        //console.log(new JwtHelperService().isTokenExpired(this.authToken));
        //console.log(new JwtHelperService().getTokenExpirationDate(this.authToken));
        this.authToken = localStorage.getItem("id_token");
        this.user = localStorage.getItem("user");
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        //localStorage.clear();
    }
    loggedIn() {
        //let keys = Object.keys(localStorage);
        // console.log(this.user);
        return !!this.authToken;
    }
    checkToken() {
        return !localStorage.getItem('id_token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8ifR":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/toast.service */ "Olgc");
/* harmony import */ var _app_core_services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/validate.service */ "V7WN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = function () { return ["active"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return ["/register"]; };
function NavbarComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "NAV.REGISTER"), "");
} }
const _c3 = function () { return ["/calendar"]; };
const _c4 = function () { return ["/users/all"]; };
const _c5 = function () { return ["/questions/all"]; };
const _c6 = function () { return ["/users/info"]; };
function NavbarComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 10, "NAV.ADMIN.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 12, "NAV.SETTINGS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 14, "NAV.ADMIN.CALENDAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 16, "NAV.ADMIN.ALL_USERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 18, "NAV.ADMIN.ALL_QUESTIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 20, "NAV.ADMIN.USERS_INFO"));
} }
function NavbarComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 10, "NAV.TEACHER.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 12, "NAV.SETTINGS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 14, "NAV.ADMIN.CALENDAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 16, "NAV.TEACHER.ALL_QUESTIONS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 18, "NAV.TEACHER.ALL_USERS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 20, "NAV.TEACHER.ALL_STUDENTS_SCORES"));
} }
const _c7 = function () { return ["/questions"]; };
function NavbarComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " QCM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c7));
} }
function NavbarComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_34_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onSelect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.authService.username, "");
} }
const _c8 = function () { return ["/login"]; };
function NavbarComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "NAV.LOGIN"), "");
} }
function NavbarComponent_li_36_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_36_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onLogOutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "NAV.LOGOUT"));
} }
const _c9 = function () { return ["/home"]; };
const _c10 = function () { return ["/about"]; };
const _c11 = function () { return ["/reviews"]; };
class NavbarComponent {
    constructor(validateService, toastService, translateService, authService, router) {
        this.validateService = validateService;
        this.toastService = toastService;
        this.translateService = translateService;
        this.authService = authService;
        this.router = router;
        this.username = "";
        this.languages = ['en', 'fr'];
    }
    ngOnInit() {
        if (localStorage.getItem('user')) {
            this.authService.role = JSON.parse(localStorage.getItem('user')).role;
            this.authService.username =
                JSON.parse(localStorage.getItem('user')).username;
        }
        this.translateService.use('en');
    }
    updateLanguage(event) {
        if (event.checked) {
            this.translateService.use('de');
        }
        else {
            this.translateService.use('en');
        }
    }
    initLanguage() {
        this.translateService.addLangs(this.languages);
        const browserLang = this.translateService.getBrowserLang();
        this.currentLang$.next((browserLang === null || browserLang === void 0 ? void 0 : browserLang.match(/en|de/)) ? browserLang : 'en');
        this.translateService.use(this.currentLang$.value);
    }
    onSelect() {
        this.authService.getProfile().subscribe((profile) => {
            `${this.router.navigate(['/profile', profile.user.username])}`;
        }, err => {
            console.log(err);
            return false;
        });
    }
    onLogOutClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!Object.keys(localStorage).includes('id_token')) {
                this.authService.logout();
                this.toastService.show(_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["EToastSeverities"].INFO, 'Please log in first');
                return false;
            }
            else {
                this.authService.logout();
                this.toastService.show(_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["EToastSeverities"].INFO, 'You are logged out !');
                yield this.router.navigate(['/login']);
                return false;
            }
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 44, vars: 33, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "navbar-collapse", "collapse", "w-100", "order-1", "order-md-0", "dual-collapse2"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", 3, "routerLink"], [1, "fa", "fa-home"], ["class", "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], [1, "nav-item"], [1, "nav-link", 2, "cursor", "pointer", 3, "routerLink"], [1, "fa", "fa-envelope"], [1, "fa", "fa-address-card"], ["id", "reviewsBtn", 1, "nav-link", 3, "routerLink"], [1, "fa", "fa-commenting"], [1, "mx-auto", "order-0"], [1, "navbar-brand", "mx-auto", "font-weight-bolder", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", ".dual-collapse2", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "w-100", "order-3", "dual-collapse2"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item dropdown", 4, "ngIf"], ["class", "nav-item ", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "switch", "nav-item"], ["id", "language-toggle", "type", "checkbox", 1, "check-toggle", "check-toggle-round-flat", 3, "click"], ["for", "language-toggle"], [1, "on"], [1, "off"], [1, "fa", "fa-user-plus"], [1, "nav-item", "dropdown"], ["href", "#", "id", "adminBtn", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-header"], [1, "fa", "fa-cogs"], [1, "dropdown-item", 3, "routerLink"], ["id", "allUsersBtn", 1, "dropdown-item", 3, "routerLink"], [1, "dropdown-divider"], ["href", "#", "id", "navbarDropdownMenuLink2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-list-ol"], ["id", "profileBtn", 1, "nav-link", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-user"], ["id", "loginBtn", 1, "nav-link", 3, "routerLink"], [1, "fa", "fa-sign-in"], ["id", "logoutBtn", "href", "#", 1, "nav-link", 3, "click"], [1, "fa", "fa-sign-out"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavbarComponent_li_7_Template, 5, 9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, NavbarComponent_li_31_Template, 22, 26, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, NavbarComponent_li_32_Template, 21, 26, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, NavbarComponent_li_33_Template, 4, 6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, NavbarComponent_li_34_Template, 4, 1, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, NavbarComponent_li_35_Template, 5, 9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, NavbarComponent_li_36_Template, 5, 3, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_input_click_38_listener($event) { return ctx.updateLanguage($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.checkToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 18, "NAV.CONTACT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 20, "NAV.ABOUT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 22, "NAV.REVIEWS"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 24, "NAV.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.checkToken() && ctx.authService.role === "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.checkToken() && (ctx.authService.role === "teacher" || ctx.authService.role === "admin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.checkToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.checkToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.checkToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.checkToken());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: lightgray;\n}\n\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 0 5px;\n}\n\n\n.switch[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  pointer-events: none;\n  font-family: 'Helvetica', Arial, sans-serif;\n  font-weight: bold;\n  font-size: 12px;\n  text-transform: uppercase;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, .06);\n  width: 50%;\n  text-align: center;\n}\n\n\ninput.check-toggle-round-flat[_ngcontent-%COMP%]:checked    ~ .off[_ngcontent-%COMP%] {\n  color: #8e8c84;\n}\n\n\ninput.check-toggle-round-flat[_ngcontent-%COMP%]:checked    ~ .on[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n\n.switch[_ngcontent-%COMP%]    > span.on[_ngcontent-%COMP%] {\n  left: 0;\n  padding-left: 2px;\n  color: #8e8c84;\n}\n\n\n.switch[_ngcontent-%COMP%]    > span.off[_ngcontent-%COMP%] {\n  right: 0;\n  padding-right: 4px;\n  color: #fff;\n}\n\n\n.check-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: -9999px;\n  visibility: hidden;\n}\n\n\n.check-toggle[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n\ninput.check-toggle-round-flat[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  padding: 2px;\n  width: 97px;\n  height: 35px;\n  background-color: #8e8c84;\n  border-radius: 60px;\n}\n\n\ninput.check-toggle-round-flat[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, input.check-toggle-round-flat[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  content: \"\";\n}\n\n\ninput.check-toggle-round-flat[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  right: 2px;\n  background-color: #343a40;\n  border-radius: 60px;\n}\n\n\ninput.check-toggle-round-flat[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  top: 4px;\n  left: 4px;\n  bottom: 4px;\n  width: 48px;\n  background-color: #fff;\n  border-radius: 52px;\n  transition: margin 0.2s;\n}\n\n\ninput.check-toggle-round-flat[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n}\n\n\ninput.check-toggle-round-flat[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  margin-left: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG9CQUFvQjtFQUNwQiwyQ0FBMkM7RUFDM0MsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsdUNBQXVDO0VBQ3ZDLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOzs7QUFFQTtFQUNFLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBeUI7RUFHekIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUt6QixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUt0QixtQkFBbUI7RUFJbkIsdUJBQXVCO0FBQ3pCOzs7QUFFQTtBQUNBOzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4uc3dpdGNoID4gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMDYpO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0LmNoZWNrLXRvZ2dsZS1yb3VuZC1mbGF0OmNoZWNrZWQgfiAub2ZmIHtcbiAgY29sb3I6ICM4ZThjODQ7XG59XG5cbmlucHV0LmNoZWNrLXRvZ2dsZS1yb3VuZC1mbGF0OmNoZWNrZWQgfiAub24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnN3aXRjaCA+IHNwYW4ub24ge1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgY29sb3I6ICM4ZThjODQ7XG59XG5cbi5zd2l0Y2ggPiBzcGFuLm9mZiB7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2hlY2stdG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTk5OTlweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2hlY2stdG9nZ2xlICsgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmlucHV0LmNoZWNrLXRvZ2dsZS1yb3VuZC1mbGF0ICsgbGFiZWwge1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiA5N3B4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZThjODQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA2MHB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNjBweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbn1cblxuaW5wdXQuY2hlY2stdG9nZ2xlLXJvdW5kLWZsYXQgKyBsYWJlbDpiZWZvcmUsIGlucHV0LmNoZWNrLXRvZ2dsZS1yb3VuZC1mbGF0ICsgbGFiZWw6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5pbnB1dC5jaGVjay10b2dnbGUtcm91bmQtZmxhdCArIGxhYmVsOmJlZm9yZSB7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAycHg7XG4gIGJvdHRvbTogMnB4O1xuICByaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNjBweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG59XG5cbmlucHV0LmNoZWNrLXRvZ2dsZS1yb3VuZC1mbGF0ICsgbGFiZWw6YWZ0ZXIge1xuICB0b3A6IDRweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MnB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTJweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogNTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIDAuMnM7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjJzO1xufVxuXG5pbnB1dC5jaGVjay10b2dnbGUtcm91bmQtZmxhdDpjaGVja2VkICsgbGFiZWwge1xufVxuXG5pbnB1dC5jaGVjay10b2dnbGUtcm91bmQtZmxhdDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogNDRweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _app_core_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"] }, { type: _app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Olgc":
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/*! exports provided: EToastSeverities, ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EToastSeverities", function() { return EToastSeverities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");



var EToastSeverities;
(function (EToastSeverities) {
    EToastSeverities["SUCCESS"] = "success";
    EToastSeverities["WARN"] = "warn";
    EToastSeverities["ERROR"] = "error";
    EToastSeverities["INFO"] = "info";
})(EToastSeverities || (EToastSeverities = {}));
class ToastService {
    constructor(toast) {
        this.toast = toast;
        this.toasts = [];
    }
    show(severity, detail) {
        this.toast.add({
            severity,
            detail,
        });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "OzAP":
/*!**************************************************!*\
  !*** ./src/app/core/services/reviews.service.ts ***!
  \**************************************************/
/*! exports provided: ReviewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsService", function() { return ReviewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
class ReviewsService {
    constructor(_http) {
        this._http = _http;
        this.token = localStorage.getItem('id_token');
    }
    getAllReviews() {
        return this._http.get('/server/api/reviews/all', { headers });
    }
    createReview(review) {
        const userId = JSON.parse(localStorage.getItem('user')).userId;
        const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.token);
        return this._http.post(`/server/api/user/${userId}/reviews`, review, { headers: httpAuthHeaders });
    }
    updateReview(username, reviewId, review) {
        // /user/5e7fd9d5f35b123cbc246899/reviews/5e862f463f21584038c3d362
        const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.token);
        return this._http
            .patch(`/server/api/user/${username}/reviews/${reviewId}`, review, { headers: httpAuthHeaders });
    }
    deleteReview(username, reviewId) {
        // /user/5e7fd9d5f35b123cbc246899/reviews/5e862f463f21584038c3d362
        //const userId = JSON.parse(localStorage.getItem('user')).userId;
        const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.token);
        return this._http
            .delete(`/server/api/user/${username}/reviews/${reviewId}`, { headers: httpAuthHeaders });
    }
}
ReviewsService.ɵfac = function ReviewsService_Factory(t) { return new (t || ReviewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReviewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReviewsService, factory: ReviewsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _directives_add_class_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/add-class.directive */ "/I3p");
/* harmony import */ var _directives_valid_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/valid-input.directive */ "wmYP");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/filter.pipe */ "UhSo");
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/replace.pipe */ "hKgl");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/truncate.pipe */ "efK2");
/* harmony import */ var _pipes_filter_logs_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/filter-logs.pipe */ "UWG8");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/divider */ "lUkA");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/fullcalendar */ "9R/8");
/* harmony import */ var _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/confirmation-dialog/confirmation-dialog.component */ "Wxx3");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tabmenu */ "c+7h");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/message */ "FMpt");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/tag */ "hYoW");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/splitbutton */ "Wq6t");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/panel */ "7CaW");































class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_19__["DialogService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_17__["FullCalendarModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_29__["PanelModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_28__["SplitButtonModule"],
            primeng_rating__WEBPACK_IMPORTED_MODULE_26__["RatingModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_25__["MessageModule"],
            primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
            primeng_tag__WEBPACK_IMPORTED_MODULE_27__["TagModule"],
            primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__["TabMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_22__["TabViewModule"],
            primeng_badge__WEBPACK_IMPORTED_MODULE_23__["BadgeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
        ], primeng_rating__WEBPACK_IMPORTED_MODULE_26__["RatingModule"],
        primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_17__["FullCalendarModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_28__["SplitButtonModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_29__["PanelModule"],
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__["TabMenuModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_27__["TagModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_22__["TabViewModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_25__["MessageModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_23__["BadgeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncatePipe"],
        _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_9__["ReplacePipe"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
        _directives_valid_input_directive__WEBPACK_IMPORTED_MODULE_7__["ValidInputDirective"],
        _directives_add_class_directive__WEBPACK_IMPORTED_MODULE_6__["AddClassDirective"],
        _pipes_filter_logs_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterLogsPipe"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
        _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmationDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_17__["FullCalendarModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_29__["PanelModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_28__["SplitButtonModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_26__["RatingModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_25__["MessageModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_27__["TagModule"],
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__["TabMenuModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_22__["TabViewModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_23__["BadgeModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]], exports: [_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncatePipe"],
        _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_9__["ReplacePipe"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
        _directives_valid_input_directive__WEBPACK_IMPORTED_MODULE_7__["ValidInputDirective"],
        _directives_add_class_directive__WEBPACK_IMPORTED_MODULE_6__["AddClassDirective"],
        _pipes_filter_logs_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterLogsPipe"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_26__["RatingModule"],
        primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_17__["FullCalendarModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_28__["SplitButtonModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_29__["PanelModule"],
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__["TabMenuModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_27__["TagModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_22__["TabViewModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_25__["MessageModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_23__["BadgeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
        _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmationDialogComponent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncatePipe"],
                    _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_9__["ReplacePipe"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
                    _directives_valid_input_directive__WEBPACK_IMPORTED_MODULE_7__["ValidInputDirective"],
                    _directives_add_class_directive__WEBPACK_IMPORTED_MODULE_6__["AddClassDirective"],
                    _pipes_filter_logs_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterLogsPipe"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                    _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmationDialogComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_17__["FullCalendarModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_29__["PanelModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
                    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_28__["SplitButtonModule"],
                    primeng_rating__WEBPACK_IMPORTED_MODULE_26__["RatingModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_25__["MessageModule"],
                    primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
                    primeng_tag__WEBPACK_IMPORTED_MODULE_27__["TagModule"],
                    primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__["TabMenuModule"],
                    primeng_tabview__WEBPACK_IMPORTED_MODULE_22__["TabViewModule"],
                    primeng_badge__WEBPACK_IMPORTED_MODULE_23__["BadgeModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                ],
                exports: [
                    _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncatePipe"],
                    _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_9__["ReplacePipe"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
                    _directives_valid_input_directive__WEBPACK_IMPORTED_MODULE_7__["ValidInputDirective"],
                    _directives_add_class_directive__WEBPACK_IMPORTED_MODULE_6__["AddClassDirective"],
                    _pipes_filter_logs_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterLogsPipe"],
                    primeng_rating__WEBPACK_IMPORTED_MODULE_26__["RatingModule"],
                    primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_17__["FullCalendarModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
                    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_28__["SplitButtonModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_29__["PanelModule"],
                    primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__["TabMenuModule"],
                    primeng_tag__WEBPACK_IMPORTED_MODULE_27__["TagModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
                    primeng_divider__WEBPACK_IMPORTED_MODULE_16__["DividerModule"],
                    primeng_tabview__WEBPACK_IMPORTED_MODULE_22__["TabViewModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_25__["MessageModule"],
                    primeng_badge__WEBPACK_IMPORTED_MODULE_23__["BadgeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
                    _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmationDialogComponent"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
                ],
                providers: [
                    primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_19__["DialogService"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Teacher App';
        this.showHideSidebar = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "UWG8":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/filter-logs.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterLogsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterLogsPipe", function() { return FilterLogsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterLogsPipe {
    transform(value, sname) {
        if (sname === "") {
            return value;
        }
        const users = [];
        value.forEach(x => {
            let method = x.method;
            let status = x.status;
            if (method.startsWith(sname) || status.toString().startsWith(sname)) {
                users.push(x);
            }
        });
        return users;
    }
}
FilterLogsPipe.ɵfac = function FilterLogsPipe_Factory(t) { return new (t || FilterLogsPipe)(); };
FilterLogsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterLogs", type: FilterLogsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterLogsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterLogs'
            }]
    }], null, null); })();


/***/ }),

/***/ "UhSo":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(value, sname) {
        if (sname === "") {
            return value;
        }
        const users = [];
        value.forEach(x => {
            let username = x.username;
            let email = x.email;
            let score = x.score.toString();
            let level = x.level;
            if (username.startsWith(sname.toLocaleLowerCase()) ||
                email.startsWith(sname.toLocaleLowerCase()) ||
                level.startsWith(sname.toLocaleUpperCase()) ||
                score.startsWith(sname)) {
                users.push(x);
            }
        });
        return users;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "V7WN":
/*!***************************************************!*\
  !*** ./src/app/core/services/validate.service.ts ***!
  \***************************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ValidateService {
    constructor() {
    }
    validateRegister(user) {
        return !(!user.email || !user.password || !user.username);
    }
    validateLogin(user) {
        return !(!user.pseudo || !user.password);
    }
}
ValidateService.ɵfac = function ValidateService_Factory(t) { return new (t || ValidateService)(); };
ValidateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidateService, factory: ValidateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Wxx3":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "jIHw");




class ConfirmationDialogComponent {
    constructor(ref, config) {
        this.ref = ref;
        this.config = config;
    }
    ngOnInit() {
        this.message = this.config.data.message;
    }
    close(confirm) {
        this.ref.close(confirm);
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogConfig"])); };
ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["ng-component"]], decls: 6, vars: 3, consts: [[1, "confirmation-content"], [2, "float", "right"], ["pButton", "", 1, "p-button-secondary", "p-button-outlined", "p-mr-2", 3, "label", "click"], ["pButton", "", "icon", "pi pi-check", 3, "label", "click"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_4_listener() { return ctx.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_5_listener() { return ctx.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "CONFIRM");
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './confirmation-dialog.component.html',
                styleUrls: ['./confirmation-dialog.component.scss']
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogRef"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogConfig"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/components/page-not-found/page-not-found.component */ "ypxu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "nHpv");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");














const appRoutes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("default~admin-admin-module~features-features-module"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(module => module.AdminModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | features-features-module */[__webpack_require__.e("default~admin-admin-module~features-features-module"), __webpack_require__.e("features-features-module")]).then(__webpack_require__.bind(null, /*! ./features/features.module */ "hB0V")).then(module => module.FeaturesModule)
    },
    { path: "**", component: _app_core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
//enableProdMode();
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json'),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                        defaultLanguage: 'en',
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                            useFactory: (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json'),
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                        }
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "efK2":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/truncate.pipe.ts ***!
  \***********************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TruncatePipe {
    transform(value, args) {
        const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        const trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();


/***/ }),

/***/ "h1cN":
/*!****************************************************!*\
  !*** ./src/app/core/services/questions.service.ts ***!
  \****************************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
class QuestionsService {
    constructor(_http) {
        this._http = _http;
        this.correctAnswerCount = 0;
        this.token = localStorage.getItem('id_token');
    }
    displayTimeElapsed() {
        return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60)
            + ':' + Math.floor(this.seconds % 60);
    }
    getQuestions() {
        const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.token);
        return this._http.get('/server/api/questions', { headers: httpAuthHeaders });
    }
    createQuestion(question) {
        const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.token);
        return this._http.post('/server/api/questions', question, { headers: httpAuthHeaders });
    }
    deleteQuestion(questionId) {
        const httpAuthHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.token);
        return this._http.delete(`/server/api/questions/${questionId}`, { headers: httpAuthHeaders });
    }
    getAnswer(value) {
        let tab = value.match(/\[.+?]/g);
        if (tab === null) {
            return value;
        }
        tab.forEach((x, i) => {
            tab[i] = x.replace(x, x.slice(1, x.length - 1));
        });
        return tab;
    }
    retrans(value) {
        let s = "";
        //let t = value.match(/\(\d+\)/g);
        let tab = value.match(/{.+?}/g);
        let tab1 = value.match(/\[.+?]/g);
        if (tab === null) {
            return value;
        }
        tab.forEach((x, i) => {
            (i === 0) ?
                s = value.replace(tab[0] + tab1[0], tab1[0].slice(1, tab1[0].length - 1)) :
                s = s.replace(tab[i] + tab1[i], tab1[i].slice(1, tab1[i].length - 1));
        });
        return s;
    }
    levelDescription() {
        return {
            'A1': {
                Title: 'A1 | Beginner',
                Subtitle: 'At the A1 CEFR level, a language learner can:',
                Level: 'A1',
                1: 'Understand and use very basic expressions to satisfy concrete needs.',
                2: 'Introduce themselves and ask others questions about personal details.',
                3: 'Interact simply as long as the other person speaks slowly and clearly.'
            },
            'A2': {
                Title: 'A2 | Elementary',
                Subtitle: 'At the A2 CEFR level, a language learner can:',
                Level: 'A2',
                1: 'Understand frequently used expressions in most intermediate areas such as shopping, family, employment, etc.',
                2: 'Complete tasks that are routine and involve a direct exchange of information.',
                3: 'Describe matters of immediate need in simple terms.'
            },
            'B1': {
                Title: 'B1 | Intermediate',
                Subtitle: 'At the B1 CEFR level, a language learner can:',
                Level: 'B1',
                1: 'Understand points regarding family, work, school or leisure-related topics.',
                2: 'Deal with most travel situations in areas where the language is spoken.',
                3: 'Describe experiences, events, dreams, and ambitions, as well as opinions or plans in brief.',
            },
            'B2': {
                Title: 'B2 | Upper Intermediate',
                Subtitle: 'At the B2 CEFR level, a language learner can:',
                Level: 'B2',
                1: 'Understand the main ideas of a complex text such as a technical piece related to their field.',
                2: 'Spontaneously interact without too much strain for either the learner or the native speaker.',
                3: 'Produce a detailed text on a wide range of subjects.'
            },
            'C1': {
                Title: 'C1 | Advanced',
                Subtitle: 'At the C1 CEFR level, a language learner can:',
                Level: 'C1',
                1: 'Understand a wide range of longer and more demanding texts or conversations.',
                2: 'Express ideas without too much searching.',
                3: 'Effectively use the language for social, academic or professional situations.'
            },
            'C2': {
                Title: 'C2 | Proficiency',
                Subtitle: 'At the C2 CEFR level, a language learner can:',
                Level: 'C2',
                1: 'Understand almost everything read or heard with ease.',
                2: 'Summarize information from a variety of sources into a coherent presentation.',
                3: 'Express themselves using precise meaning in complex scenarios.'
            },
        };
    }
    getLevelDescription(level) {
        if (level === undefined) {
            return level;
        }
        else if (level === 'A1') {
            return this.levelDescription().A1;
        }
        else if (level === 'A2') {
            return this.levelDescription().A2;
        }
        else if (level === 'B1') {
            return this.levelDescription().B1;
        }
        else if (level === 'B2') {
            return this.levelDescription().B2;
        }
        else if (level === 'C1') {
            return this.levelDescription().C1;
        }
        else if (level === 'C2') {
            return this.levelDescription().C2;
        }
    }
}
QuestionsService.ɵfac = function QuestionsService_Factory(t) { return new (t || QuestionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuestionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionsService, factory: QuestionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hKgl":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/replace.pipe.ts ***!
  \**********************************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReplacePipe {
    transform(value) {
        if (value === "") {
            return value;
        }
        let s = "";
        //let t = value.match(/\(\d+\)/g);
        let tab = value.match(/{.+?}/g);
        let tab1 = value.match(/\[.+?]/g);
        if (tab === null) {
            return value;
        }
        tab.forEach((x, i) => {
            (i === 0) ?
                s = value.replace(tab[0] + tab1[0], '(' + (i + 1) + ')' + tab[0] + '___') :
                s = s.replace(tab[i] + tab1[i], '(' + (i + 1) + ')' + tab[i] + '___');
        });
        return s;
    }
}
ReplacePipe.ɵfac = function ReplacePipe_Factory(t) { return new (t || ReplacePipe)(); };
ReplacePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "replace", type: ReplacePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplacePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'replace'
            }]
    }], null, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/validate.service */ "V7WN");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "7dP1");
/* harmony import */ var _services_reviews_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/reviews.service */ "OzAP");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/questions.service */ "h1cN");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "6vIp");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "x0xU");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "ypxu");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about.component */ "w+/y");
















const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] }
];
class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_questions_service__WEBPACK_IMPORTED_MODULE_8__["QuestionsService"],
        _services_reviews_service__WEBPACK_IMPORTED_MODULE_7__["ReviewsService"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes),
                ],
                providers: [
                    _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
                    primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                    _services_questions_service__WEBPACK_IMPORTED_MODULE_8__["QuestionsService"],
                    _services_reviews_service__WEBPACK_IMPORTED_MODULE_7__["ReviewsService"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "w+/y":
/*!**********************************************************!*\
  !*** ./src/app/core/components/about/about.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "x0xU");




const _c0 = function () { return ["/about"]; };
class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 128, vars: 14, consts: [[1, "container"], [1, "jumbotron", "text-white", "rounded", "bg-dark"], [1, "col-md-6", "px-0"], [1, "display-4", "font-italic"], [1, "lead", "my-3"], [1, "lead", "mb-0"], [1, "text-white", "font-weight-bold"], [1, "row", "mb-2"], [1, "col-md-6"], [1, "card", "flex-md-row", "mb-4", "box-shadow", "h-md-250"], [1, "card-body", "d-flex", "flex-column", "align-items-start"], [1, "d-inline-block", "mb-2", "text-primary"], [1, "mb-0"], [1, "text-dark"], [1, "mb-1", "text-muted"], [1, "card-text", "mb-auto"], ["src", "../../../../assets/img/uni.png", "alt", "Card image cap", 1, "card-img-right", "flex-auto", "d-none", "d-md-block"], [1, "d-inline-block", "mb-2", "text-success"], ["role", "main", 1, "container"], [1, "row"], [1, "col-md-8", "blog-main"], [1, "pb-3", "mb-4", "font-italic", "border-bottom"], [1, "blog-post"], [1, "blog-post-title"], [1, "blog-post-meta"], [1, "col-md-4", "blog-sidebar"], [1, "p-3", "mb-3", "bg-light", "rounded"], [1, "font-italic", 3, "routerLink"], [1, "p-3"], [1, "font-italic"], [1, "list-unstyled", "mb-0"], [3, "routerLink"], [1, "list-unstyled"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Germnay Teacher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Germnay Teacher with profound knowledge in all aspects of the language looking to be an asset to a college or university in need.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Continue reading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Master of Arts in Germany Literature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Master degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1996-1998");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "This is a wider card with supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Continue reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Bachelor of Arts in Germany Literature ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Bachelor degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1993-1996");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "This is a wider card with supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Continue reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "main", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Work Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "High School Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "January 1, 2008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Created Service Learning projects across the disciplines. Responsible for schedule development, staffing, monitoring and counseling for undergraduate programs and instructor in English, Math, Science, Social Science, Humanities, and College Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cum sociis natoque penatibus et magnis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "dis parturient montes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Curabitur blandit tempus porttitor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Nullam quis risus eget urna mollis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Etiam porta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "sem malesuada magna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Adjunct Germany Professor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "January 1, 2001 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "80% of students each semester master the use of online technology during the course to research, write, and edit documents..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Cum sociis natoque penatibus et magnis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "dis parturient montes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Curabitur blandit tempus porttitor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Nullam quis risus eget urna mollis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Etiam porta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "sem malesuada magna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "aside", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Passionate and experienced English professor with nearly a decade of teaching experience at the college level. Dedicated to helping students develop their critical thinking, writing, and communication skills. Seeking a position that will allow me to share my love of literature and writing with students.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Archives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ol", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "March 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "February 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "January 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Elsewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ol", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".blog-header[_ngcontent-%COMP%] {\r\n  line-height: 1;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.blog-header-logo[_ngcontent-%COMP%] {\r\n  font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\r\n  font-size: 2.25rem;\r\n}\r\n\r\n.blog-header-logo[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\r\n}\r\n\r\n.display-4[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .display-4[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\n.nav-scroller[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 2;\r\n  height: 2.75rem;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  padding-bottom: 1rem;\r\n  margin-top: -1px;\r\n  overflow-x: auto;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.nav-scroller[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  font-size: .875rem;\r\n}\r\n\r\n.card-img-right[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  border-radius: 0 3px 3px 0;\r\n}\r\n\r\n.flex-auto[_ngcontent-%COMP%] {\r\n  flex: 0 0 auto;\r\n}\r\n\r\n.h-250[_ngcontent-%COMP%] { height: 250px; }\r\n\r\n@media (min-width: 768px) {\r\n  .h-md-250[_ngcontent-%COMP%] { height: 250px; }\r\n}\r\n\r\n.border-top[_ngcontent-%COMP%] { border-top: 1px solid #e5e5e5; }\r\n\r\n.border-bottom[_ngcontent-%COMP%] { border-bottom: 1px solid #e5e5e5; }\r\n\r\n.box-shadow[_ngcontent-%COMP%] { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n\r\n\r\n\r\n.blog-title[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.blog-description[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n  color: #999;\r\n}\r\n\r\n@media (min-width: 40em) {\r\n  .blog-title[_ngcontent-%COMP%] {\r\n    font-size: 3.5rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n.blog-pagination[_ngcontent-%COMP%] {\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.blog-pagination[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\r\n  border-radius: 2rem;\r\n}\r\n\r\n\r\n\r\n.blog-post[_ngcontent-%COMP%] {\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.blog-post-title[_ngcontent-%COMP%] {\r\n  margin-bottom: .25rem;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.blog-post-meta[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.25rem;\r\n  color: #999;\r\n}\r\n\r\n\r\n\r\n.blog-footer[_ngcontent-%COMP%] {\r\n  padding: 2.5rem 0;\r\n  color: #999;\r\n  text-align: center;\r\n  background-color: #f9f9f9;\r\n  border-top: .05rem solid #e5e5e5;\r\n}\r\n\r\n.blog-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQXdEOztBQUV4RDtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFHRSxhQUFhO0VBRWIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0FBQzVCOztBQUVBO0VBR0UsY0FBYztBQUNoQjs7QUFFQSxTQUFTLGFBQWEsRUFBRTs7QUFDeEI7RUFDRSxZQUFZLGFBQWEsRUFBRTtBQUM3Qjs7QUFFQSxjQUFjLDZCQUE2QixFQUFFOztBQUM3QyxpQkFBaUIsZ0NBQWdDLEVBQUU7O0FBRW5ELGNBQWMsOENBQThDLEVBQUU7O0FBRTlEOztFQUVFOztBQUNGO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxlQUFlOztBQUNmO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFOztBQUNGO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7O0VBRUU7O0FBQ0Y7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1saXN0LWNvbW1hLW5ld2xpbmUtYWZ0ZXIgKi9cclxuXHJcbi5ibG9nLWhlYWRlciB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbn1cclxuXHJcbi5ibG9nLWhlYWRlci1sb2dvIHtcclxuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxufVxyXG5cclxuLmJsb2ctaGVhZGVyLWxvZ286aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxufVxyXG5cclxuLmRpc3BsYXktNCB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRpc3BsYXktNCB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LXNjcm9sbGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2LXNjcm9sbGVyIC5uYXYge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuXHJcbi5uYXYtc2Nyb2xsZXIgLm5hdi1saW5rIHtcclxuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAuODc1cmVtO1xyXG59XHJcblxyXG4uY2FyZC1pbWctcmlnaHQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxufVxyXG5cclxuLmZsZXgtYXV0byB7XHJcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbn1cclxuXHJcbi5oLTI1MCB7IGhlaWdodDogMjUwcHg7IH1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmgtbWQtMjUwIHsgaGVpZ2h0OiAyNTBweDsgfVxyXG59XHJcblxyXG4uYm9yZGVyLXRvcCB7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1OyB9XHJcbi5ib3JkZXItYm90dG9tIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7IH1cclxuXHJcbi5ib3gtc2hhZG93IHsgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTsgfVxyXG5cclxuLypcclxuICogQmxvZyBuYW1lIGFuZCBkZXNjcmlwdGlvblxyXG4gKi9cclxuLmJsb2ctdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmJsb2ctZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xyXG4gIC5ibG9nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogUGFnaW5hdGlvbiAqL1xyXG4uYmxvZy1wYWdpbmF0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcbi5ibG9nLXBhZ2luYXRpb24gPiAuYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4vKlxyXG4gKiBCbG9nIHBvc3RzXHJcbiAqL1xyXG4uYmxvZy1wb3N0IHtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcbi5ibG9nLXBvc3QtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG4uYmxvZy1wb3N0LW1ldGEge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEZvb3RlclxyXG4gKi9cclxuLmJsb2ctZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyLjVyZW0gMDtcclxuICBjb2xvcjogIzk5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBib3JkZXItdG9wOiAuMDVyZW0gc29saWQgI2U1ZTVlNTtcclxufVxyXG4uYmxvZy1mb290ZXIgcDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wmYP":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/valid-input.directive.ts ***!
  \************************************************************/
/*! exports provided: ValidInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidInputDirective", function() { return ValidInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ValidInputDirective {
    constructor(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
    }
    onClick() {
        setInterval(() => {
            ((this.elRef.nativeElement.value).length !== 0) ?
                this.renderer.addClass(this.elRef.nativeElement, 'is-valid') :
                this.renderer.removeClass(this.elRef.nativeElement, 'is-valid');
        }, 1000);
    }
}
ValidInputDirective.ɵfac = function ValidInputDirective_Factory(t) { return new (t || ValidInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ValidInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ValidInputDirective, selectors: [["", "appValidInput", ""]], hostBindings: function ValidInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValidInputDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appValidInput]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "x0xU":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/about"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 22, vars: 4, consts: [[1, "page-footer", "font-small", "grey", "lighten-3", "py-4", "dark-grey-text", 2, "background-color", "#343a40"], [1, "container"], [1, "row"], [1, "col-md-4"], [1, "font-weight-bold", "mb-0", 2, "color", "white"], [1, "list-unstyled", "d-flex", "justify-content-center", "mb-0", "mt-2"], ["role", "button", 1, "mx-3", 2, "color", "white", 3, "routerLink"], ["role", "button", 1, "mx-3", 2, "color", "white"], [1, "footer-copyright", "text-right", "bg-transparent", "dark-grey-text", "mt-2", 2, "color", "white"], ["href", "#", 1, "dark-grey-text", 2, "color", "white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SPRACHLEHRER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A9 2022. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ypxu":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/page-not-found/page-not-found.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 19, vars: 2, consts: [["lang", "en"], ["charset", "utf-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["id", "notfound"], [1, "notfound"], [1, "notfound-404"], [1, "font-weight-bolder", "text-monospace", "font-italic"], [1, "text-monospace", "font-italic"], [1, "text-monospace", "font-italic", 3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404 HTML Template by Colorlib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Oops! Page Not Be Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back to homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n#notfound[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n}\n\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.notfound[_ngcontent-%COMP%] {\n  max-width: 560px;\n  width: 100%;\n  padding-left: 160px;\n  line-height: 1.1;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 140px;\n  height: 140px;\n  background-image: url('emoji.png');\n  background-size: cover;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: scale(2.4);\n  border-radius: 50%;\n  background-color: #f2f5f8;\n  z-index: -1;\n}\n\n.notfound[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: 'Nunito', sans-serif;\n  font-size: 65px;\n  font-weight: 700;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  color: #151723;\n  text-transform: uppercase;\n}\n\n.notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: 'Nunito', sans-serif;\n  font-size: 21px;\n  font-weight: 400;\n  margin: 0;\n  text-transform: uppercase;\n  color: #151723;\n}\n\n.notfound[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Nunito', sans-serif;\n  color: #999fa5;\n  font-weight: 400;\n}\n\n.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: 'Nunito', sans-serif;\n  display: inline-block;\n  font-weight: 700;\n  border-radius: 40px;\n  text-decoration: none;\n  color: #388dbc;\n}\n\n@media only screen and (max-width: 767px) {\n  .notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n  }\n  .notfound[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 110px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUdSLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUF5RDtFQUN6RCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBR1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbiNub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI25vdGZvdW5kIC5ub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm5vdGZvdW5kIHtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZW1vamkucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyLjQpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyLjQpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjVmODtcbiAgei1pbmRleDogLTE7XG59XG5cbi5ub3Rmb3VuZCBoMSB7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMTUxNzIzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubm90Zm91bmQgaDIge1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzE1MTcyMztcbn1cblxuLm5vdGZvdW5kIHAge1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjOTk5ZmE1O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubm90Zm91bmQgYSB7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzg4ZGJjO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuICAubm90Zm91bmQge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMTBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map