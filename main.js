"use strict";
(self["webpackChunkportafolio"] = self["webpackChunkportafolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Dashboard/dashboard/dashboard.component */ 6712);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
    },
    {
        path: 'dashboard',
        component: _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
    },
    {
        path: '**', component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);




//decorador
class AppComponent {
    constructor() { }
    title(title) {
        throw new Error('Method not implemented.');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ 4978);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/work-experience/work-experience.component */ 3358);
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/skills/skills.component */ 1727);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/projects.component */ 4935);
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contacto/contacto.component */ 9993);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Dashboard/dashboard/dashboard.component */ 6712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _components_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_4__.WorkExperienceComponent,
        _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__.SkillsComponent,
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsComponent,
        _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__.ContactoComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent,
        _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.DashboardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule] }); })();


/***/ }),

/***/ 6712:
/*!***********************************************************************!*\
  !*** ./src/app/components/Dashboard/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 32, vars: 0, consts: [[1, "container", "menu-dash", "pt-5", "pb-5"], [1, "row"], [1, "col-4"], ["href", "/dashboard/about-me", 1, "card", "mb-5"], ["src", "assets/images/menu-dash/acerca-de-mi.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-text", "text-center"], ["href", "/dashboard/experiencie", 1, "card", "mb-5"], ["src", "assets/images/menu-dash/experiencia.jpg", "alt", "...", 1, "card-img-top"], ["href", "/dashboard/habilities", 1, "card", "mb-5"], ["src", "assets/images/menu-dash/habilidades.jpg", "alt", "...", 1, "card-img-top"], ["href", "/dashboard/portfolio", 1, "card", "mb-5"], ["src", "assets/images/menu-dash/portafolio.jpg", "alt", "...", 1, "card-img-top"], ["href", "/dashboard/contact", 1, "card", "mb-5"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Acerca de M\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5)(18, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2)(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5)(24, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2)(27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5)(30, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, styles: [".menu-dash[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.menu-dash[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.menu-dash[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjtBQUNJO0VBQ0kscUJBQUE7QUFDUjtBQUFRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVaIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWRhc2h7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcblxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9993:
/*!***********************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactoComponent": () => (/* binding */ ContactoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);






function ContactoComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El email es incorrecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ContactoComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.formDatos = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
            mensaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10)])
        });
    }
    isValid(nombreControl) {
        return (this.formDatos.get(nombreControl).invalid && this.formDatos.get(nombreControl).touched);
    }
    enviarFormulario() {
        console.log(this.formDatos.value);
        const email = this.formDatos.value;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post('https://formspree.io/f/mqkwpjyy', { name: email.nombre, replyto: email.email, message: email.mensaje }, { 'headers': headers }).subscribe((response) => {
            if (response.ok) {
                alert("Se ha enviado correctamente el correo");
                this.formDatos.reset();
            }
            else {
                alert(response);
            }
        });
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ContactoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 24, vars: 12, consts: [["id", "contacto", 1, "contacto"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-6"], ["src", "./assets/images/contacto-ilustracion.png", "alt", "Contacto", 1, "img-fluid"], [1, "col-md-6", "text-center"], [3, "formGroup"], [1, "mt-5"], ["for", "nombre", 1, "form-label"], ["type", "text", "name", "nombre", "formControlName", "nombre", 1, "form-control", 3, "ngClass"], ["for", "input_email", 1, "form-label"], ["type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "input_mensaje", 1, "form-label"], ["name", "mensaje", "formControlName", "mensaje", "id", "input_mensaje", "rows", "3", 1, "form-control", 3, "ngClass"], ["type", "button", 1, "btn", "btn-blue", "mt-5", 3, "disabled", "click"], [1, "invalid-feedback"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7)(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Correo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactoComponent_div_17_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7)(19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_button_click_22_listener() { return ctx.enviarFormulario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formDatos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isValid("nombre")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isValid("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formDatos.get("email").status == "INVALID" && ctx.formDatos.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isValid("mensaje")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formDatos.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["form[_ngcontent-%COMP%] {\n  text-align: left;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  border: 0px;\n  border-bottom: 1px solid var(--blue);\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\nform[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50px;\n  width: 200px;\n  height: 55px;\n  font-size: 26px;\n  box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RvLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtBQURKO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFHSTs7O0VBR0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUFEUjtBQUdROzs7OztFQUVJLGdCQUFBO0FBRVo7QUFFSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQ2RKLGlERGVJO0FBRVIiLCJmaWxlIjoiY29udGFjdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbmZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgdGV4dGFyZWF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJvcmRlcjowcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG5cclxuICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWJsdWV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgQGluY2x1ZGUgYm94c2hhZG93KCAwcHggMTFweCAxNXB4IC02cHggcmdiYSgwLDAsMCwwLjYpKTtcclxuICAgIH1cclxufSIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 22, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-12"], ["src", "./assets/images/logo-luis-vargas-blanco.png", 1, "img-fluid", "d-block", "m-auto"], ["href", "#about-me"], ["href", "#experiencia"], ["href", "#habilidades"], ["href", "#portafolio"], ["href", "#contacto"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "ul")(7, "li")(8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Acerca de M\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  padding: 30px 0px;\n  background-color: var(--blue);\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 30px 0px 10px;\n  }\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 80px;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 30px;\n  padding-left: 0px;\n  flex-wrap: wrap;\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 30px;\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px;\n  }\n}\n@media (max-width: 767px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px 10px;\n  }\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px 20px;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: white;\n  font-size: 22px;\n  text-decoration: none;\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQURGO0FDOEVJO0VEL0VKO0lBS0csc0JBQUE7RUFBRDtBQUNGO0FDeUVJO0VEdkVGO0lBRUksZUFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURKO0FDMkRJO0VEakVGO0lBVUksc0JBQUE7SUFDQSxrQkFBQTtFQUFKO0FBQ0Y7QUFFSTtFQUNFLGdCQUFBO0FBQU47QUNrREk7RURuREE7SUFJSSxnQkFBQTtFQUNOO0FBQ0Y7QUM2Q0k7RURuREE7SUFRSSxxQkFBQTtFQUVOO0FBQ0Y7QUN3Q0k7RURuREE7SUFXSSxxQkFBQTtFQUlOO0FBQ0Y7QUFGTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUlSO0FDNkJJO0VEckNFO0lBT0ksZUFBQTtFQUtSO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zJztcclxuXHJcbmZvb3RlciB7XHJcbiAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcblxyXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICBwYWRkaW5nOiAzMHB4IDBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW46IDBweCAzMHB4O1xyXG5cclxuICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNzY3KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweCAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiQG1peGluIGZvbnRzKCRmYW1pbHksICRwYXRoKSB7XHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZhbWlseTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdFwiKTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIiN7JHBhdGh9LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiI3skcGF0aH0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94c2hhZG93KCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1vLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICB0cmFuc2Zvcm06ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZi1zaXplLCAkZi1mYW1pbHkpIHtcclxuICAgICY6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVncmFkYWRvKCRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG5AbWl4aW4gaW1nLWRlZ3JhZGFkbygkdXJsLCAkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5c1xyXG4kbWVkaWFfcXVlcmllcyA6IChcclxuICAgICdtb2JpbGUnIDogXCIobWF4LXdpZHRoOiA0NzlweClcIixcclxuICAgICdtb2JpbGUyJzogXCIobWF4LXdpZHRoOiA1OTlweClcIixcclxuICAgICd0YWJsZXQnIDogXCIobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgICd0YWJsZXQyJzogXCIobWF4LXdpZHRoOiA5OTFweClcIixcclxuICAgICdkZXNrdG9wJyA6IFwiKG1heC13aWR0aDoxMTk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDEnOiBcIihtYXgtd2lkdGg6MTM5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AyJyA6IFwiKG1heC13aWR0aDoxNTk5cHgpXCJcclxuKTtcclxuXHJcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6I3skYnJlYWtwb2ludH1weCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../work-experience/work-experience.component */ 3358);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skills/skills.component */ 1727);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/projects.component */ 4935);
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contacto/contacto.component */ 9993);





class HeaderComponent {
    constructor() {
        this.titulo = "Luis Vargas";
        this.puesto = "Desarrollador Front-End";
        this.cv = "./assets/curriculum-vitae-jorge-luis-vargas.pdf";
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 30, vars: 3, consts: [[1, "header"], [1, "animate__animated", "animate__backInDown"], [1, "animate__animated", "animate__backInLeft", "animate__delay-1s"], ["target", "_blank", 1, "btn", "btn-blue", "animate__animated", "animate__fadeInUp", 3, "href"], ["id", "about-me", 1, "about-me"], [1, "container"], [1, "row"], [1, "col-8", "offset-2", "col-sm-8", "offset-sm-2", "col-md-6", "offset-md-0", "d-flex", "justify-content-center", "align-items-center"], [1, "imagen"], ["src", "assets/images/about-me.png", "alt", "Acerca de m\u00ED", 1, "img-fluid", "m-auto"], [1, "col-sm-12", "col-md-6", "animate__animated", "animate__fadeInUp"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Descargar CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Acerca de M\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Soy una persona que est\u00E1 en busca de nuevos retos profesionales, uno de mis objetivos es seguir aprendiendo de este basto mundo de las ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "tecnolog\u00EDas de desarrollo web");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, ". De igual manera considero que podr\u00EDa aportar mis conocimientos en los proyectos, as\u00ED como tambi\u00E9n aprender de ellos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Actualmente me desempe\u00F1o como desarrollador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Front-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, ", y estoy dispuesto a seguir aprendiendo para mejorar en cada uno de los proyectos tanto personales como profesionales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "app-work-experience")(27, "app-skills")(28, "app-projects")(29, "app-contacto");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx.cv, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_0__.WorkExperienceComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__.SkillsComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__.ContactoComponent], styles: [".header[_ngcontent-%COMP%] {\n  background-image: url('header-portafolio.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 1080px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 5%;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%] {\n    height: 900px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%] {\n    height: 800px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n}\n@media (max-width: 575px) {\n  .header[_ngcontent-%COMP%] {\n    height: 550px;\n  }\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 150px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 140px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n  }\n}\n@media (max-width: 480px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 400;\n  font-size: 80px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n.header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 60px;\n  margin-top: 20px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 280px;\n    font-size: 28px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 250px;\n    font-size: 24px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 220px;\n    font-size: 22px;\n    height: 55px;\n  }\n}\n@media (max-width: 479px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksOENBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFESjtBQ3NFSTtFRC9FSjtJQWFRLGFBQUE7RUFBTjtBQUNGO0FDaUVJO0VEL0VKO0lBa0JRLGFBQUE7RUFBTjtBQUNGO0FDNERJO0VEL0VKO0lBdUJRLGFBQUE7RUFBTjtBQUNGO0FDdURJO0VEL0VKO0lBMkJRLGFBQUE7RUFDTjtBQUNGO0FBRUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FDNkNJO0VEaERBO0lBTVEsZ0JBQUE7RUFDVjtBQUNGO0FDd0NJO0VEaERBO0lBV1EsZ0JBQUE7RUFDVjtBQUNGO0FDbUNJO0VEaERBO0lBZ0JRLGVBQUE7RUFDVjtBQUNGO0FDOEJJO0VEaERBO0lBcUJRLGVBQUE7RUFDVjtBQUNGO0FDeUJJO0VEaERBO0lBeUJRLGVBQUE7RUFFVjtBQUNGO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ1I7QUNlSTtFRG5CQTtJQU1RLGVBQUE7RUFFVjtBQUNGO0FDVUk7RURuQkE7SUFXUSxlQUFBO0VBRVY7QUFDRjtBQ0tJO0VEbkJBO0lBZ0JRLGVBQUE7RUFFVjtBQUNGO0FDQUk7RURuQkE7SUFxQlEsZUFBQTtFQUVWO0FBQ0Y7QUFDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQ1ZJO0VETUE7SUFNUSxZQUFBO0lBQ0EsZUFBQTtFQUVWO0FBQ0Y7QUNoQkk7RURNQTtJQVlRLFlBQUE7SUFDQSxlQUFBO0VBRVY7QUFDRjtBQ3RCSTtFRE1BO0lBaUJRLFlBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQUdWO0FBQ0Y7QUM3Qkk7RURNQTtJQXVCUSxZQUFBO0VBSVY7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zXCI7XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1wb3J0YWZvbGlvLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTU5OSkge1xyXG4gICAgICAgIGhlaWdodDogOTAwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDEzOTkpIHtcclxuICAgICAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNTc1KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDE1OTkpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNDBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxMzk5KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg3NjcpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNDgwKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTU5OSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTM5OSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg3NjcpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWJsdWUge1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTU5OSkge1xyXG4gICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxMzk5KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNDc5KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uYWJvdXQtbWV7XHJcbiAgICBcclxufVxyXG4iLCJAbWl4aW4gZm9udHMoJGZhbWlseSwgJHBhdGgpIHtcclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZmFtaWx5O1xyXG4gICAgICAgIHNyYzogdXJsKFwiI3skcGF0aH0uZW90XCIpO1xyXG4gICAgICAgIHNyYzogdXJsKFwiI3skcGF0aH0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiI3skcGF0aH0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIjeyRwYXRofS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hzaGFkb3coJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgYm94LXNoYWRvdzogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1tcy10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkYXJncztcclxuICAgIHRyYW5zZm9ybTogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmLXNpemUsICRmLWZhbWlseSkge1xyXG4gICAgJjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZWdyYWRhZG8oJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbkBtaXhpbiBpbWctZGVncmFkYWRvKCR1cmwsICRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tb3otbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW8tbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuLy8gTWVkaWEgcXVlcnlzXHJcbiRtZWRpYV9xdWVyaWVzIDogKFxyXG4gICAgJ21vYmlsZScgOiBcIihtYXgtd2lkdGg6IDQ3OXB4KVwiLFxyXG4gICAgJ21vYmlsZTInOiBcIihtYXgtd2lkdGg6IDU5OXB4KVwiLFxyXG4gICAgJ3RhYmxldCcgOiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgJ3RhYmxldDInOiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AnIDogXCIobWF4LXdpZHRoOjExOTlweClcIixcclxuICAgICdkZXNrdG9wMSc6IFwiKG1heC13aWR0aDoxMzk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDInIDogXCIobWF4LXdpZHRoOjE1OTlweClcIlxyXG4pO1xyXG5cclxuQG1peGluIGZvcl9icmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDojeyRicmVha3BvaW50fXB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


const _c0 = function (a0) { return { "small": a0 }; };
const _c1 = function (a0) { return { "active": a0 }; };
const _c2 = function (a0) { return { "show": a0 }; };
class NavbarComponent {
    constructor() {
        this.scrolled = false;
        this.winWidth = 0;
        this.currentSection = 'section1';
        this.isShown = false;
    }
    changeState() {
        this.isShown = !this.isShown;
    }
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
        console.log(this.currentSection);
    }
    onWindowScroll() {
        this.scrolled = window.pageYOffset > 150;
        if (this.scrolled) {
            this.isShown = false;
        }
        else {
            this.scrolled = false;
        }
    }
    onResize(event) {
        this.winWidth = event.target.innerWidth;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function NavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 23, vars: 9, consts: [["id", "navbar-main2", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", 3, "ngClass"], [1, "container-xl", "p-0", "p-lg-4"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/logo-luis-vargas.png", "alt", "logo luis vargas", 1, "img-fluid"], [1, "navbar-toggler", 3, "ngClass", "click"], [1, "menu-icon"], ["id", "navbar-main", 1, "navbar-collapse", "collapse", 3, "ngClass"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#about-me", 1, "nav-link"], ["href", "#experiencia", 1, "nav-link"], ["href", "#habilidades", 1, "nav-link"], ["href", "#portafolio", 1, "nav-link"], [1, "nav-item", "btn", "btn-blue"], ["href", "#contacto", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() { return ctx.changeState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Acerca de M\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8)(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8)(18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13)(21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.scrolled && ctx.winWidth > 991));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isShown));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.isShown));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".ml-auto[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  height: 120px;\n  background-color: white;\n  box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n  transition: height 0.3s linear;\n}\n\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90%;\n}\n\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 50px;\n  height: 40px;\n  position: relative;\n  margin-right: 20px;\n  color: transparent;\n  background-color: var(--blue);\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  border-radius: 5px;\n  transition: all 0.2s linear;\n  display: block;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  top: 4px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n  border-radius: 5px;\n  transition: all 0.2s linear;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  bottom: 4px;\n  position: absolute;\n  border-radius: 5px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  transition: all 0.2s linear;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::before {\n  top: 16px;\n  transform: rotate(45deg);\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::after {\n  top: 3px;\n  transform: rotate(-45deg);\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 600;\n  font-size: 22px;\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]::after {\n  background-color: var(--blue);\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 3px;\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover::after {\n  background-color: var(--blue);\n}\n\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 5%;\n    box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]::after {\n    width: 20%;\n    margin: auto;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%] {\n    width: 200px;\n    margin: auto;\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n}\n\n.navbar.small[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.navbar.small[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 60%;\n}\n\n.navbar.small[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQ0tFLGlEREhGO0VDV0UsOEJEVkY7QUFJRjs7QUNrRUk7RUQzRUo7SUFRSSxZQUFBO0VBS0Y7QUFDRjs7QUFGSTtFQUNFLGNBQUE7QUFJTjs7QUMwREk7RURoRUY7SUFRSSxrQkFBQTtFQUVKO0VBQUk7SUFDRSxVQUFBO0VBRU47QUFDRjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBRUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQU47O0FBRU07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQVI7O0FBR007RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBRFI7O0FBTVE7RUFDSSw2QkFBQTtBQUpaOztBQU1ZO0VBQ0ksU0FBQTtFQzFEWix3QkQyRFk7QUFBaEI7O0FBR1k7RUFDSSxRQUFBO0VDL0RaLHlCRGdFWTtBQUdoQjs7QUFLSTtFQUNFLGdCQUFBO0FBSE47O0FBS007RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSFI7O0FBT1E7RUFDRSw2QkFBQTtBQUxWOztBQVNNO0VBQ0UsWUFBQTtBQVBSOztBQVNRO0VBQ0UsWUFBQTtBQVBWOztBQVNVO0VBQ0Usa0JBQUE7QUFQWjs7QUFZTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFWUjs7QUFjUTtFQUNFLDZCQUFBO0FBWlY7O0FDNUNJO0VEbUJGO0lBMkNLLHVCQUFBO0lBQ0MsV0FBQTtJQ25JSixpRERvSUk7RUFaTjtFQWFLO0lBQ0ksa0JBQUE7RUFYVDtFQWFTO0lBQ0ksZ0JBQUE7RUFYYjtFQVlVO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUFWZDtFQWFVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQVhkO0VBWWM7SUFDSSxhQUFBO0VBVmxCO0VBWWM7SUFDSSxjQUFBO0lBQ0EsV0FBQTtFQVZsQjtBQUNGOztBQWlCRTtFQUNFLFlBQUE7QUFmSjs7QUFtQk07RUFDRSxjQUFBO0FBakJSOztBQXVCUTtFQUNFLGVBQUE7QUFyQlYiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuLm1sLWF1dG8ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICBAaW5jbHVkZSBib3hzaGFkb3coMHB4IDExcHggMTVweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC42KSk7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihoZWlnaHQgLjNzIGxpbmVhcik7XHJcblxyXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDkwJTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG5cclxuICAgIC5tZW51LWljb24ge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmFjdGl2ZXtcclxuICAgICAgICAubWVudS1pY29ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoNDVkZWcpKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSgtNDVkZWcpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsYXBzZSB7XHJcbiAgICAubmF2LWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG5cclxuICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWJsdWUge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgIEBpbmNsdWRlIGJveHNoYWRvdygwcHggMTFweCAxNXB4IC02cHggcmdiKDAgMCAwIC8gNjAlKSk7XHJcbiAgICAgICAubmF2YmFyLW5hdntcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgIC5uYXYtaXRlbXsgICAgICBcclxuICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYnRuLWJsdWV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc21hbGwge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sbGFwc2Uge1xyXG4gICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4935:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function ProjectsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const proyecto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", proyecto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", proyecto_r1.screen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyecto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proyecto_r1.tecnologia, " ");
} }
class ProjectsComponent {
    constructor() {
        this.proyectos = [
            {
                screen: "./assets/images/proyectos/cecoban.jpg",
                nombre: "Cecoban",
                tecnologia: "Wordpress",
                url: "https://www.cecoban.com/"
            },
            {
                screen: "./assets/images/proyectos/grandcentral-165.jpg",
                nombre: "Grand Central",
                tecnologia: "Angular, HTML5 & CSS3",
                url: "https://grandcentral165.com/"
            },
            {
                screen: "./assets/images/proyectos/manuelgonzalez-165.jpg",
                nombre: "Manuel Gonzalez 165",
                tecnologia: "Angular, HTML5 & CSS3",
                url: "https://pruvimg165.com/"
            },
            {
                screen: "./assets/images/proyectos/anafloresabogada.png",
                nombre: "Ana Flores Abogada",
                tecnologia: "Wordpress & Bootstrap",
                url: "https://anafloresabogada.com/"
            },
            {
                screen: "./assets/images/proyectos/superior-56.jpg",
                nombre: "Superior 56",
                tecnologia: "Angular, HTML5 & CSS3",
                url: "https://www.superior56.com.mx/"
            },
            {
                screen: "./assets/images/proyectos/banners.png",
                nombre: "Banners (Google & Amazon)",
                tecnologia: "Google Web Designer (HTML5)"
            },
            {
                screen: "./assets/images/proyectos/hersheys-reposteria.png",
                nombre: "hershey's Repostería",
                tecnologia: "Bootstrap & Wordpress"
            },
            {
                screen: "./assets/images/proyectos/hersheys-profesional.png",
                nombre: "hershey's Profesional",
                tecnologia: "Bootstrap & Wordpress"
            },
            {
                screen: "./assets/images/proyectos/acento-mixcoac.png",
                nombre: "Acento Mixcoac",
                tecnologia: "Landing Page: HTML, JQuery, CSS, PHP",
                url: "https://www.acentomixcoac.com/"
            },
            {
                screen: "./assets/images/proyectos/jorgevargsbooks.png",
                nombre: "Jorgevargsbooks",
                tecnologia: "Materialize & Wordpress",
                url: "https://jorgevargsbooks.com"
            },
            {
                screen: "./assets/images/proyectos/msmedia.png",
                nombre: "Ms&Media",
                tecnologia: "Bootstrap & Wordpress",
                url: "https://msmedia.com.mx/publicidad-exterior/"
            },
            {
                screen: "./assets/images/proyectos/openfinancehub.png",
                nombre: "Open Finance Hub",
                tecnologia: "Bootstrap & Wordpress",
                url: "https://cecoban.com/openfinancehub/"
            },
            {
                screen: "./assets/images/proyectos/periferico1991.png",
                nombre: "Landing Periferico 1991",
                tecnologia: "Landing Page: HTML, Jquery, CSS, PHP",
                url: "https://my-home.mx/periferico1991/"
            },
            {
                screen: "./assets/images/proyectos/olimpiadasespeciales.png",
                nombre: "Olimpiadas Especiales",
                tecnologia: "Bootstrap & Wordpress",
                url: "https://specialolympics.org.mx/"
            },
        ];
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 8, vars: 1, consts: [["id", "portafolio", 1, "projects"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], ["class", "col-6 col-md-4", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4"], ["target", "_blank", 1, "proyecto"], [1, "img-fluid", 3, "src"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_div_7_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".proyecto[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  margin: 30px 0px;\n  text-align: center;\n}\n.proyecto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 30px auto;\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n}\n.proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  color: black;\n}\n@media (max-width: 1399px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 26px;\n}\n@media (max-width: 1399px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUN5RUk7RUQxRUE7SUFHUSxpQkFBQTtFQUVWO0FBQ0Y7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDUjtBQytESTtFRG5FQTtJQU1RLGVBQUE7RUFFVjtBQUNGO0FDMERJO0VEbkVBO0lBU1EsZUFBQTtFQUlWO0FBQ0Y7QUNxREk7RURuRUE7SUFZUSxlQUFBO0VBTVY7QUFDRjtBQUZRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFJWjtBQzRDSTtFRGxESTtJQUtRLGVBQUE7RUFLZDtBQUNGO0FDdUNJO0VEbERJO0lBUVEsZUFBQTtFQU9kO0FBQ0Y7QUNrQ0k7RURsREk7SUFXUSxlQUFBO0VBU2Q7QUFDRjtBQzZCSTtFRGxESTtJQWNRLGVBQUE7RUFXZDtBQUNGIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zJztcclxuXHJcbi5wcm95ZWN0b3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOjMwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTM5OSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDExOTkpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgICBzdHJvbmd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxMzk5KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTE5OSkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDExOTkpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1727:
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function SkillsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", skill_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", skill_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", skill_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.nombre);
} }
class SkillsComponent {
    constructor() {
        this.skills = [
            {
                logo: "./assets/images/skills/html5.png",
                nombre: "HTML 5"
            },
            {
                logo: "./assets/images/skills/css3.png",
                nombre: "CSS 3"
            },
            {
                logo: "./assets/images/skills/javascript.png",
                nombre: "JAVASCRIPT"
            },
            {
                logo: "./assets/images/skills/sass.png",
                nombre: "SASS"
            },
            {
                logo: "./assets/images/skills/wordpress.png",
                nombre: "WORDPRESS"
            },
            {
                logo: "./assets/images/skills/bootstrap.png",
                nombre: "BOOTSTRAP"
            },
            {
                logo: "./assets/images/skills/materialize.png",
                nombre: "MATERIALIZE"
            },
            {
                logo: "./assets/images/skills/php.png",
                nombre: "PHP"
            },
            {
                logo: "./assets/images/skills/jquery.png",
                nombre: "JQUERY"
            },
            {
                logo: "./assets/images/skills/git.png",
                nombre: "GIT"
            },
            {
                logo: "./assets/images/skills/google-web-designer.png",
                nombre: "GOOGLE WEB DESIGNER"
            },
            {
                logo: "./assets/images/skills/mailchimp.png",
                nombre: "MAILCHIMP"
            },
            {
                logo: "./assets/images/skills/angular.png",
                nombre: "ANGULAR"
            },
            {
                logo: "./assets/images/skills/mysql.png",
                nombre: "MYSQL"
            }
        ];
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 8, vars: 1, consts: [["id", "habilidades", 1, "habilidades"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], ["class", "col-6 col-sm-4 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-4", "col-md-3"], [1, "skill"], [1, "img-fluid", 3, "src", "alt", "title"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillsComponent_div_7_Template, 5, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".skill[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  display: block;\n  margin: 50px auto;\n  border-radius: 50%;\n  box-shadow: 0px 10px 22px -4px rgba(0, 0, 0, 0.75);\n}\n.skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  font-weight: bold;\n  margin-top: 20px;\n}\n@media (max-width: 480px) {\n  .skill[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 130px;\n  }\n  .skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQ01BLGtERExBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQ2tFSTtFRC9FSjtJQWdCUSxZQUFBO0lBQ0EsYUFBQTtFQUNOO0VBQ007SUFDSSxlQUFBO0VBQ1Y7QUFDRiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnMnO1xyXG5cclxuLnNraWxse1xyXG4gICAgd2lkdGg6MTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIEBpbmNsdWRlIGJveHNoYWRvdygwcHggMTBweCAyMnB4IC00cHggcmdiYSgwLDAsMCwwLjc1KSk7XHJcblxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNDgwKSB7XHJcbiAgICAgICAgd2lkdGg6MTMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3358:
/*!*************************************************************************!*\
  !*** ./src/app/components/work-experience/work-experience.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkExperienceComponent": () => (/* binding */ WorkExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 4978);



function WorkExperienceComponent_8_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const company_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", company_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.puesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.descripcion);
} }
function WorkExperienceComponent_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkExperienceComponent_8_ng_template_0_Template, 8, 4, "ng-template", 6);
} }
class WorkExperienceComponent {
    constructor() {
        this.companys = [
            {
                logo: "./assets/images/valenetwork.jpg",
                puesto: "Programador Web",
                periodo: "2020 - Actual",
                descripcion: "Maquetación e integración de sitios web. Creación de maillings y configuración de los mismos."
            },
            {
                logo: "./assets/images/clickspublicitarios.jpg",
                puesto: "Desarrollador Front-End",
                periodo: "2018 - 2020",
                descripcion: "Maquetación, integración y mantenimiento de sitios web."
            },
            {
                //publicidad en línea
                logo: "./assets/images/publicidadenlinea.jpg",
                puesto: "Desarrollador Web",
                periodo: "2017 - 2019",
                descripcion: "Maquetación, integración, mantenimiento de sitios web."
            },
            {
                logo: "./assets/images/anzen-digital.png",
                puesto: "Desarrollador Front-End",
                periodo: "2016 - 2017",
                descripcion: "Maquetación de prototipos para bancas empresariales y personales."
            },
            {
                //grupo dara
                logo: "./assets/images/grupo-dara.jpg",
                puesto: "Coordinador de TI",
                periodo: "2014 - 2015",
                descripcion: "Mantenimiento de equipos de computo, sitios web e implementación de sistemas web."
            },
            {
                logo: "./assets/images/innovattia.jpg",
                puesto: "Desarrollador Web",
                periodo: "2014 (Prácticas)",
                descripcion: "Maquetación, integración, mantenimiento de sitios web."
            }
        ];
        this.owlOptions = {
            loop: false,
            mouseDrag: false,
            touchDrag: true,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            navText: ['&#8249', '&#8250;'],
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            },
            nav: false
        };
    }
    ngOnInit() {
    }
}
WorkExperienceComponent.ɵfac = function WorkExperienceComponent_Factory(t) { return new (t || WorkExperienceComponent)(); };
WorkExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkExperienceComponent, selectors: [["app-work-experience"]], decls: 9, vars: 2, consts: [["id", "experiencia", 1, "experiencia"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "slide", "card"], ["alt", "Content 1", 3, "src"]], template: function WorkExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "owl-carousel-o", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorkExperienceComponent_8_Template, 1, 0, null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.owlOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companys);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective], styles: [".experiencia[_ngcontent-%COMP%] {\n  background-color: var(--gray);\n  padding: 7% 0px;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 335px;\n  background-color: white;\n  padding: 30px 25px;\n  box-shadow: 0px 10px 19px -1px rgba(0, 0, 0, 0.24);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  border-radius: 10px;\n}\n\n@media (max-width: 480px) {\n  .card[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--blue-title);\n  font-weight: 700;\n  margin-top: 40px;\n  font-size: 30px;\n  height: 75px;\n}\n\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    height: 55px;\n  }\n}\n\n@media (max-width: 480px) {\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n    height: 50px;\n    margin-top: 25px;\n  }\n}\n\n.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 300;\n  font-size: 24px;\n  margin: 20px auto;\n}\n\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n  font-size: 20px;\n  height: 120px;\n}\n\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUNHQSxrRERGQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FDaUVJO0VEMUVKO0lBV1EsZ0JBQUE7RUFFTjtBQUNGOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZSOztBQ29ESTtFRHhEQTtJQVNRLGVBQUE7SUFDQSxZQUFBO0VBRFY7QUFDRjs7QUM4Q0k7RUR4REE7SUFjUSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBQVY7QUFDRjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUNpQ0k7RURwQ0E7SUFPUSxlQUFBO0VBQVY7QUFDRjs7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUZSOztBQ3NCSTtFRHhCQTtJQU9RLGVBQUE7RUFEVjtBQUNGIiwiZmlsZSI6IndvcmstZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuLmV4cGVyaWVuY2lhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xyXG4gICAgcGFkZGluZzogNyUgMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XHJcbiAgICBAaW5jbHVkZSBib3hzaGFkb3coIDBweCAxMHB4IDE5cHggLTFweCByZ2JhKDAsMCwwLDAuMjQpKTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNDgwKSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgLy8gbWFyZ2luOjAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBoM3tcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBjb2xvcjp2YXIoLS1ibHVlLXRpdGxlKTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjMwMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luOjIwcHggYXV0bztcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNzY3KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDoxMjBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNzY3KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiQG1peGluIGZvbnRzKCRmYW1pbHksICRwYXRoKSB7XHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZhbWlseTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdFwiKTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIiN7JHBhdGh9LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiI3skcGF0aH0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94c2hhZG93KCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1vLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICB0cmFuc2Zvcm06ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZi1zaXplLCAkZi1mYW1pbHkpIHtcclxuICAgICY6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVncmFkYWRvKCRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG5AbWl4aW4gaW1nLWRlZ3JhZGFkbygkdXJsLCAkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5c1xyXG4kbWVkaWFfcXVlcmllcyA6IChcclxuICAgICdtb2JpbGUnIDogXCIobWF4LXdpZHRoOiA0NzlweClcIixcclxuICAgICdtb2JpbGUyJzogXCIobWF4LXdpZHRoOiA1OTlweClcIixcclxuICAgICd0YWJsZXQnIDogXCIobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgICd0YWJsZXQyJzogXCIobWF4LXdpZHRoOiA5OTFweClcIixcclxuICAgICdkZXNrdG9wJyA6IFwiKG1heC13aWR0aDoxMTk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDEnOiBcIihtYXgtd2lkdGg6MTM5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AyJyA6IFwiKG1heC13aWR0aDoxNTk5cHgpXCJcclxuKTtcclxuXHJcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6I3skYnJlYWtwb2ludH1weCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map