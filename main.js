"use strict";
(self["webpackChunkportafolio"] = self["webpackChunkportafolio"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent
}, {
  path: '**',
  component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);




//decorador
class AppComponent {
  title(title) {
    throw new Error('Method not implemented.');
  }
  constructor() {}
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 385);
/* harmony import */ var _components_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/work-experience/work-experience.component */ 2021);
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/skills/skills.component */ 1199);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/projects.component */ 3607);
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contacto/contacto.component */ 1489);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_4__.WorkExperienceComponent, _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__.SkillsComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsComponent, _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__.ContactoComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule]
  });
})();

/***/ }),

/***/ 1489:
/*!***********************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactoComponent: () => (/* binding */ ContactoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);






const _c0 = a0 => ({
  "is-invalid": a0
});
function ContactoComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El email es incorrecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ContactoComponent {
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formDatos = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
      nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10)]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
      mensaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10)])
    });
  }
  isValid(nombreControl) {
    return this.formDatos.get(nombreControl).invalid && this.formDatos.get(nombreControl).touched;
  }
  enviarFormulario() {
    console.log(this.formDatos.value);
    const email = this.formDatos.value;
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http.post('https://formspree.io/f/xdkngaqg', {
      name: email.nombre,
      replyto: email.email,
      message: email.mensaje
    }, {
      'headers': headers
    }).subscribe(response => {
      if (response.ok) {
        alert("Se ha enviado correctamente el correo");
        this.formDatos.reset();
      } else {
        alert(response);
      }
    });
  }
  static #_ = this.ɵfac = function ContactoComponent_Factory(t) {
    return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactoComponent,
    selectors: [["app-contacto"]],
    decls: 24,
    vars: 12,
    consts: [["id", "contacto", 1, "contacto"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-6"], ["src", "./assets/images/contacto-ilustracion.png", "alt", "Contacto", 1, "img-fluid"], [1, "col-md-6", "text-center"], [3, "formGroup"], [1, "mt-5"], ["for", "nombre", 1, "form-label"], ["type", "text", "name", "nombre", "formControlName", "nombre", 1, "form-control", 3, "ngClass"], ["for", "input_email", 1, "form-label"], ["type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "input_mensaje", 1, "form-label"], ["name", "mensaje", "formControlName", "mensaje", "id", "input_mensaje", "rows", "3", 1, "form-control", 3, "ngClass"], ["type", "button", 1, "btn", "btn-blue", "mt-5", 3, "click", "disabled"], [1, "invalid-feedback"]],
    template: function ContactoComponent_Template(rf, ctx) {
      if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_button_click_22_listener() {
          return ctx.enviarFormulario();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formDatos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isValid("nombre")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isValid("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formDatos.get("email").status == "INVALID" && ctx.formDatos.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isValid("mensaje")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formDatos.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["form[_ngcontent-%COMP%] {\n  text-align: left;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  border: 0px;\n  border-bottom: 1px solid var(--primary-color);\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\nform[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50px;\n  width: 200px;\n  height: 55px;\n  font-size: 26px;\n  box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Fzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtBQURKO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFHSTs7O0VBR0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUFEUjtBQUdROzs7OztFQUVJLGdCQUFBO0FBRVo7QUFFSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQ2RKLGlERGVJO0FBRVIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbmZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgdGV4dGFyZWF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJvcmRlcjowcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpOztcclxuXHJcbiAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1ibHVle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIEBpbmNsdWRlIGJveHNoYWRvdyggMHB4IDExcHggMTVweCAtNnB4IHJnYmEoMCwwLDAsMC42KSk7XHJcbiAgICB9XHJcbn0iLCJAbWl4aW4gZm9udHMoJGZhbWlseSwgJHBhdGgpIHtcclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZmFtaWx5O1xyXG4gICAgICAgIHNyYzogdXJsKFwiI3skcGF0aH0uZW90XCIpO1xyXG4gICAgICAgIHNyYzogdXJsKFwiI3skcGF0aH0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiI3skcGF0aH0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIjeyRwYXRofS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hzaGFkb3coJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgYm94LXNoYWRvdzogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1tcy10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkYXJncztcclxuICAgIHRyYW5zZm9ybTogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmLXNpemUsICRmLWZhbWlseSkge1xyXG4gICAgJjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZWdyYWRhZG8oJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbkBtaXhpbiBpbWctZGVncmFkYWRvKCR1cmwsICRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tb3otbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW8tbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuLy8gTWVkaWEgcXVlcnlzXHJcbiRtZWRpYV9xdWVyaWVzIDogKFxyXG4gICAgJ21vYmlsZScgOiBcIihtYXgtd2lkdGg6IDQ3OXB4KVwiLFxyXG4gICAgJ21vYmlsZTInOiBcIihtYXgtd2lkdGg6IDU5OXB4KVwiLFxyXG4gICAgJ3RhYmxldCcgOiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgJ3RhYmxldDInOiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AnIDogXCIobWF4LXdpZHRoOjExOTlweClcIixcclxuICAgICdkZXNrdG9wMSc6IFwiKG1heC13aWR0aDoxMzk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDInIDogXCIobWF4LXdpZHRoOjE1OTlweClcIlxyXG4pO1xyXG5cclxuQG1peGluIGZvcl9icmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDojeyRicmVha3BvaW50fXB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 22,
    vars: 0,
    consts: [[1, "container"], [1, "row"], [1, "col-12"], ["src", "./assets/images/logo-luis-vargas-blanco.png", 1, "img-fluid", "d-block", "m-auto"], ["href", "#about-me"], ["href", "#experiencia"], ["href", "#habilidades"], ["href", "#portafolio"], ["href", "#contacto"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
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
      }
    },
    styles: ["footer[_ngcontent-%COMP%] {\n  padding: 30px 0px;\n  background-color: var(--primary-color);\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 30px 0px 10px;\n  }\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 80px;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 30px;\n  padding-left: 0px;\n  flex-wrap: wrap;\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 30px;\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px;\n  }\n}\n@media (max-width: 767px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px 10px;\n  }\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px 20px;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: white;\n  font-size: 22px;\n  text-decoration: none;\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zYXNzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0Esc0NBQUE7QUFERjtBQzhFSTtFRC9FSjtJQUtHLHNCQUFBO0VBQUQ7QUFDRjtBQ3lFSTtFRHZFRjtJQUVJLGVBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFESjtBQzJESTtFRGpFRjtJQVVJLHNCQUFBO0lBQ0Esa0JBQUE7RUFBSjtBQUNGO0FBRUk7RUFDRSxnQkFBQTtBQUFOO0FDa0RJO0VEbkRBO0lBSUksZ0JBQUE7RUFDTjtBQUNGO0FDNkNJO0VEbkRBO0lBUUkscUJBQUE7RUFFTjtBQUNGO0FDd0NJO0VEbkRBO0lBV0kscUJBQUE7RUFJTjtBQUNGO0FBRk07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFJUjtBQzZCSTtFRHJDRTtJQU9JLGVBQUE7RUFLUjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zJztcclxuXHJcbmZvb3RlciB7XHJcbiAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7O1xyXG5cclxuICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgcGFkZGluZzogMzBweCAwcHggMTBweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luOiAwcHggMzBweDtcclxuXHJcbiAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHggMTBweDtcclxuICAgICAgfVxyXG4gICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICBtYXJnaW46IDBweCAyMHB4IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 385:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../work-experience/work-experience.component */ 2021);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skills/skills.component */ 1199);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/projects.component */ 3607);
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contacto/contacto.component */ 1489);





class HeaderComponent {
  constructor() {
    this.titulo = "Luis Vargas";
    this.puesto = "Desarrollador Front-End";
    this.cv = "./assets/curriculum-vitae-jorge-luis-vargas.pdf";
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 30,
    vars: 3,
    consts: [[1, "header"], [1, "animate__animated", "animate__backInDown"], [1, "animate__animated", "animate__backInLeft", "animate__delay-1s"], ["target", "_blank", 1, "btn", "btn-blue", "animate__animated", "animate__fadeInUp", 3, "href"], ["id", "about-me", 1, "about-me"], [1, "container"], [1, "row"], [1, "col-8", "offset-2", "col-sm-8", "offset-sm-2", "col-md-6", "offset-md-0", "d-flex", "justify-content-center", "align-items-center"], [1, "imagen"], ["src", "assets/images/about-me.png", "alt", "Acerca de m\u00ED", 1, "img-fluid", "m-auto"], [1, "col-sm-12", "col-md-6", "animate__animated", "animate__fadeInUp"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
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
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx.cv, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_0__.WorkExperienceComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__.SkillsComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__.ContactoComponent],
    styles: [".header[_ngcontent-%COMP%] {\n  background-image: url('header-developer.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 1080px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 5%;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%] {\n    height: 900px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%] {\n    height: 800px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n}\n@media (max-width: 575px) {\n  .header[_ngcontent-%COMP%] {\n    height: 550px;\n    background-position: right;\n  }\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 150px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 140px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n  }\n}\n@media (max-width: 480px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 400;\n  font-size: 80px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n.header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 60px;\n  margin-top: 20px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 280px;\n    font-size: 28px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 250px;\n    font-size: 24px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 220px;\n    font-size: 22px;\n    height: 55px;\n  }\n}\n@media (max-width: 479px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zYXNzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLDZDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBRko7QUNzRUk7RUQvRUo7SUFjUSxhQUFBO0VBRE47QUFDRjtBQ2lFSTtFRC9FSjtJQW1CUSxhQUFBO0VBRE47QUFDRjtBQzRESTtFRC9FSjtJQXdCUSxhQUFBO0VBRE47QUFDRjtBQ3VESTtFRC9FSjtJQTRCUSxhQUFBO0lBQ0EsMEJBQUE7RUFBTjtBQUNGO0FBR0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURSO0FDNENJO0VEOUNBO0lBTVEsZ0JBQUE7RUFBVjtBQUNGO0FDdUNJO0VEOUNBO0lBV1EsZ0JBQUE7RUFBVjtBQUNGO0FDa0NJO0VEOUNBO0lBZ0JRLGVBQUE7RUFBVjtBQUNGO0FDNkJJO0VEOUNBO0lBcUJRLGVBQUE7RUFBVjtBQUNGO0FDd0JJO0VEOUNBO0lBeUJRLGVBQUE7RUFDVjtBQUNGO0FBRUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQVI7QUNjSTtFRGpCQTtJQU1RLGVBQUE7RUFDVjtBQUNGO0FDU0k7RURqQkE7SUFXUSxlQUFBO0VBQ1Y7QUFDRjtBQ0lJO0VEakJBO0lBZ0JRLGVBQUE7RUFDVjtBQUNGO0FDREk7RURqQkE7SUFxQlEsZUFBQTtFQUNWO0FBQ0Y7QUFFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQ1hJO0VEUUE7SUFNUSxZQUFBO0lBQ0EsZUFBQTtFQUNWO0FBQ0Y7QUNqQkk7RURRQTtJQVlRLFlBQUE7SUFDQSxlQUFBO0VBQ1Y7QUFDRjtBQ3ZCSTtFRFFBO0lBaUJRLFlBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQUVWO0FBQ0Y7QUM5Qkk7RURRQTtJQXVCUSxZQUFBO0VBR1Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbi5oZWFkZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLXBvcnRhZm9saW8ucG5nKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1kZXZlbG9wZXIuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxNTk5KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MDBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTM5OSkge1xyXG4gICAgICAgIGhlaWdodDogODAwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg1NzUpIHtcclxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTU5OSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDEzOTkpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxNTk5KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxMzk5KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYmx1ZSB7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxNTk5KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDEzOTkpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNzY3KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0NzkpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5hYm91dC1tZXtcclxuICAgIFxyXG59XHJcbiIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9847:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = a0 => ({
  "small": a0
});
const _c1 = a0 => ({
  "active": a0
});
const _c2 = a0 => ({
  "show": a0
});
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
    } else {
      this.scrolled = false;
    }
  }
  onResize(event) {
    this.winWidth = event.target.innerWidth;
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function NavbarComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 23,
    vars: 9,
    consts: [["id", "navbar-main2", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", 3, "ngClass"], [1, "container-xl", "p-0", "p-lg-4"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/logo-luis-vargas.png", "alt", "logo luis vargas", 1, "img-fluid"], [1, "navbar-toggler", 3, "click", "ngClass"], [1, "menu-icon"], ["id", "navbar-main", 1, "navbar-collapse", "collapse", 3, "ngClass"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#about-me", 1, "nav-link"], ["href", "#experiencia", 1, "nav-link"], ["href", "#habilidades", 1, "nav-link"], ["href", "#portafolio", 1, "nav-link"], [1, "nav-item", "btn", "btn-blue"], ["href", "#contacto", 1, "nav-link"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() {
          return ctx.changeState();
        });
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
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.scrolled && ctx.winWidth > 991));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isShown));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.isShown));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".ml-auto[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  height: 120px;\n  background-color: white;\n  box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n  transition: height 0.3s linear;\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90%;\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 50px;\n  height: 40px;\n  position: relative;\n  margin-right: 20px;\n  color: transparent;\n  background-color: var(--primary-color);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  border-radius: 5px;\n  transition: all 0.2s linear;\n  display: block;\n  margin: 0 auto;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  top: 4px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n  border-radius: 5px;\n  transition: all 0.2s linear;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  bottom: 4px;\n  position: absolute;\n  border-radius: 5px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  transition: all 0.2s linear;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::before {\n  top: 16px;\n  transform: rotate(45deg);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::after {\n  top: 3px;\n  transform: rotate(-45deg);\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 600;\n  font-size: 22px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]::after {\n  background-color: var(--primary-color);\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 3px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover::after {\n  background-color: var(--primary-color);\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 5%;\n    box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]::after {\n    width: 20%;\n    margin: auto;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%] {\n    width: 200px;\n    margin: auto;\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n}\n.navbar.small[_ngcontent-%COMP%] {\n  height: 80px;\n}\n.navbar.small[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 60%;\n}\n.navbar.small[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zYXNzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUNLRSxpRERIRjtFQ1dFLDhCRFZGO0FBSUY7QUNrRUk7RUQzRUo7SUFRSSxZQUFBO0VBS0Y7QUFDRjtBQUZJO0VBQ0UsY0FBQTtBQUlOO0FDMERJO0VEaEVGO0lBUUksa0JBQUE7RUFFSjtFQUFJO0lBQ0UsVUFBQTtFQUVOO0FBQ0Y7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFBTjtBQUVNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUFSO0FBR007RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBRFI7QUFNUTtFQUNJLDZCQUFBO0FBSlo7QUFNWTtFQUNJLFNBQUE7RUMxRFosd0JEMkRZO0FBQWhCO0FBR1k7RUFDSSxRQUFBO0VDL0RaLHlCRGdFWTtBQUdoQjtBQUtJO0VBQ0UsZ0JBQUE7QUFITjtBQUtNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBT1E7RUFDRSxzQ0FBQTtBQUxWO0FBU007RUFDRSxZQUFBO0FBUFI7QUFTUTtFQUNFLFlBQUE7QUFQVjtBQVNVO0VBQ0UsMkJBQUE7QUFQWjtBQVlNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVZSO0FBY1E7RUFDRSxzQ0FBQTtBQVpWO0FDNUNJO0VEbUJGO0lBMkNLLHVCQUFBO0lBQ0MsV0FBQTtJQ25JSixpRERvSUk7RUFaTjtFQWFLO0lBQ0ksa0JBQUE7RUFYVDtFQWFTO0lBQ0ksZ0JBQUE7RUFYYjtFQVlVO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUFWZDtFQWFVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQVhkO0VBWWM7SUFDSSxhQUFBO0VBVmxCO0VBWWM7SUFDSSxjQUFBO0lBQ0EsV0FBQTtFQVZsQjtBQUNGO0FBaUJFO0VBQ0UsWUFBQTtBQWZKO0FBbUJNO0VBQ0UsY0FBQTtBQWpCUjtBQXVCUTtFQUNFLGVBQUE7QUFyQlYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zXCI7XHJcblxyXG4ubWwtYXV0byB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIEBpbmNsdWRlIGJveHNoYWRvdygwcHggMTFweCAxNXB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjYpKTtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGhlaWdodCAuM3MgbGluZWFyKTtcclxuXHJcbiAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7O1xyXG5cclxuICAgIC5tZW51LWljb24ge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmFjdGl2ZXtcclxuICAgICAgICAubWVudS1pY29ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoNDVkZWcpKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSgtNDVkZWcpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsYXBzZSB7XHJcbiAgICAubmF2LWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG5cclxuICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1ibHVlIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgIEBpbmNsdWRlIGJveHNoYWRvdygwcHggMTFweCAxNXB4IC02cHggcmdiKDAgMCAwIC8gNjAlKSk7XHJcbiAgICAgICAubmF2YmFyLW5hdntcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgIC5uYXYtaXRlbXsgICAgICBcclxuICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYnRuLWJsdWV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc21hbGwge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOztcclxuICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbGxhcHNlIHtcclxuICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gZm9udHMoJGZhbWlseSwgJHBhdGgpIHtcclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZmFtaWx5O1xyXG4gICAgICAgIHNyYzogdXJsKFwiI3skcGF0aH0uZW90XCIpO1xyXG4gICAgICAgIHNyYzogdXJsKFwiI3skcGF0aH0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiI3skcGF0aH0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIjeyRwYXRofS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hzaGFkb3coJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgYm94LXNoYWRvdzogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1tcy10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkYXJncztcclxuICAgIHRyYW5zZm9ybTogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmLXNpemUsICRmLWZhbWlseSkge1xyXG4gICAgJjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZWdyYWRhZG8oJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbkBtaXhpbiBpbWctZGVncmFkYWRvKCR1cmwsICRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tb3otbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW8tbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuLy8gTWVkaWEgcXVlcnlzXHJcbiRtZWRpYV9xdWVyaWVzIDogKFxyXG4gICAgJ21vYmlsZScgOiBcIihtYXgtd2lkdGg6IDQ3OXB4KVwiLFxyXG4gICAgJ21vYmlsZTInOiBcIihtYXgtd2lkdGg6IDU5OXB4KVwiLFxyXG4gICAgJ3RhYmxldCcgOiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgJ3RhYmxldDInOiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AnIDogXCIobWF4LXdpZHRoOjExOTlweClcIixcclxuICAgICdkZXNrdG9wMSc6IFwiKG1heC13aWR0aDoxMzk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDInIDogXCIobWF4LXdpZHRoOjE1OTlweClcIlxyXG4pO1xyXG5cclxuQG1peGluIGZvcl9icmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDojeyRicmVha3BvaW50fXB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3607:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function ProjectsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const proyecto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", proyecto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", proyecto_r1.screen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyecto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proyecto_r1.tecnologia, " ");
  }
}
class ProjectsComponent {
  constructor() {
    this.proyectos = [{
      screen: "./assets/images/proyectos/cecoban.jpg",
      nombre: "Cecoban",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://www.cecoban.com/"
    }, {
      screen: "./assets/images/proyectos/grandcentral-165.jpg",
      nombre: "Grand Central",
      tecnologia: "Angular, HTML5 & CSS3",
      url: "https://grandcentral165.com/"
    }, {
      screen: "./assets/images/proyectos/manuelgonzalez-165.jpg",
      nombre: "Manuel Gonzalez 165",
      tecnologia: "Angular, HTML5 & CSS3",
      url: "https://pruvimg165.com/"
    }, {
      screen: "./assets/images/proyectos/anafloresabogada.png",
      nombre: "Ana Flores Abogada",
      tecnologia: "Wordpress & Bootstrap",
      url: "https://anafloresabogada.com/"
    }, {
      screen: "./assets/images/proyectos/superior-56.jpg",
      nombre: "Superior 56",
      tecnologia: "Angular, HTML5 & CSS3",
      url: "https://www.superior56.com.mx/"
    }, {
      screen: "./assets/images/proyectos/banners.png",
      nombre: "Banners (Google & Amazon)",
      tecnologia: "Google Web Designer (HTML5)"
    }, {
      screen: "./assets/images/proyectos/hersheys-reposteria.png",
      nombre: "hershey's Repostería",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://hersheysreposteria.com.mx/reposteria-en-casa-hersheys/"
    }, {
      screen: "./assets/images/proyectos/hersheys-profesional.png",
      nombre: "hershey's Profesional",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://hersheysreposteria.com.mx/profesional/"
    }, {
      screen: "./assets/images/proyectos/acento-mixcoac.png",
      nombre: "Acento Mixcoac",
      tecnologia: "Landing Page: HTML, JQuery, CSS, PHP",
      url: "https://www.acentomixcoac.com/"
    }, {
      screen: "./assets/images/proyectos/jorgevargsbooks.png",
      nombre: "Jorgevargsbooks",
      tecnologia: "Materialize & Wordpress",
      url: "https://jorgevargsbooks.com"
    }, {
      screen: "./assets/images/proyectos/msmedia.png",
      nombre: "Ms&Media",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://msmedia.com.mx/publicidad-exterior/"
    }, {
      screen: "./assets/images/proyectos/openfinancehub.png",
      nombre: "Open Finance Hub",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://cecoban.com/openfinancehub/"
    }, {
      screen: "./assets/images/proyectos/periferico1991.png",
      nombre: "Landing Periferico 1991",
      tecnologia: "Landing Page: HTML, Jquery, CSS, PHP",
      url: "https://my-home.mx/periferico1991/"
    }, {
      screen: "./assets/images/proyectos/olimpiadasespeciales.png",
      nombre: "Olimpiadas Especiales",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://specialolympics.org.mx/"
    }];
  }
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 8,
    vars: 1,
    consts: [["id", "portafolio", 1, "projects"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], ["class", "col-6 col-md-4", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4"], ["target", "_blank", 1, "proyecto"], [1, "img-fluid", 3, "src"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_div_7_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".proyecto[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  margin: 30px 0px;\n  text-align: center;\n}\n.proyecto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 30px auto;\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n}\n.proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  color: black;\n}\n@media (max-width: 1399px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 26px;\n}\n@media (max-width: 1399px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Fzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUN5RUk7RUQxRUE7SUFHUSxpQkFBQTtFQUVWO0FBQ0Y7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDUjtBQytESTtFRG5FQTtJQU1RLGVBQUE7RUFFVjtBQUNGO0FDMERJO0VEbkVBO0lBU1EsZUFBQTtFQUlWO0FBQ0Y7QUNxREk7RURuRUE7SUFZUSxlQUFBO0VBTVY7QUFDRjtBQUZRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFJWjtBQzRDSTtFRGxESTtJQUtRLGVBQUE7RUFLZDtBQUNGO0FDdUNJO0VEbERJO0lBUVEsZUFBQTtFQU9kO0FBQ0Y7QUNrQ0k7RURsREk7SUFXUSxlQUFBO0VBU2Q7QUFDRjtBQzZCSTtFRGxESTtJQWNRLGVBQUE7RUFXZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zJztcclxuXHJcbi5wcm95ZWN0b3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOjMwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTM5OSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDExOTkpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgICBzdHJvbmd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxMzk5KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTE5OSkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDExOTkpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1199:
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function SkillsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", skill_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", skill_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", skill_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.nombre);
  }
}
class SkillsComponent {
  constructor() {
    this.skills = [{
      logo: "./assets/images/skills/html5.png",
      nombre: "HTML 5"
    }, {
      logo: "./assets/images/skills/css3.png",
      nombre: "CSS 3"
    }, {
      logo: "./assets/images/skills/javascript.png",
      nombre: "JAVASCRIPT"
    }, {
      logo: "./assets/images/skills/sass.png",
      nombre: "SASS"
    }, {
      logo: "./assets/images/skills/wordpress.png",
      nombre: "WORDPRESS"
    }, {
      logo: "./assets/images/skills/bootstrap.png",
      nombre: "BOOTSTRAP"
    }, {
      logo: "./assets/images/skills/materialize.png",
      nombre: "MATERIALIZE"
    }, {
      logo: "./assets/images/skills/php.png",
      nombre: "PHP"
    }, {
      logo: "./assets/images/skills/jquery.png",
      nombre: "JQUERY"
    }, {
      logo: "./assets/images/skills/git.png",
      nombre: "GIT"
    }, {
      logo: "./assets/images/skills/google-web-designer.png",
      nombre: "GOOGLE WEB DESIGNER"
    }, {
      logo: "./assets/images/skills/mailchimp.png",
      nombre: "MAILCHIMP"
    }, {
      logo: "./assets/images/skills/angular.png",
      nombre: "ANGULAR"
    }, {
      logo: "./assets/images/skills/mysql.png",
      nombre: "MYSQL"
    }, {
      logo: "./assets/images/skills/tailwindcss.png",
      nombre: "Tailwindcss"
    }];
  }
  static #_ = this.ɵfac = function SkillsComponent_Factory(t) {
    return new (t || SkillsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SkillsComponent,
    selectors: [["app-skills"]],
    decls: 8,
    vars: 1,
    consts: [["id", "habilidades", 1, "habilidades"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], ["class", "col-6 col-sm-4 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-4", "col-md-3"], [1, "skill"], [1, "img-fluid", 3, "src", "alt", "title"]],
    template: function SkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillsComponent_div_7_Template, 5, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".skill[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  display: block;\n  margin: 50px auto;\n  border-radius: 50%;\n  box-shadow: 0px 10px 22px -4px rgba(0, 0, 0, 0.75);\n}\n.skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  font-weight: bold;\n  margin-top: 20px;\n}\n@media (max-width: 480px) {\n  .skill[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 130px;\n  }\n  .skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zYXNzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUNNQSxrRERMQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUNrRUk7RUQvRUo7SUFnQlEsWUFBQTtJQUNBLGFBQUE7RUFDTjtFQUNNO0lBQ0ksZUFBQTtFQUNWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnMnO1xyXG5cclxuLnNraWxse1xyXG4gICAgd2lkdGg6MTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIEBpbmNsdWRlIGJveHNoYWRvdygwcHggMTBweCAyMnB4IC00cHggcmdiYSgwLDAsMCwwLjc1KSk7XHJcblxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNDgwKSB7XHJcbiAgICAgICAgd2lkdGg6MTMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2021:
/*!*************************************************************************!*\
  !*** ./src/app/components/work-experience/work-experience.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkExperienceComponent: () => (/* binding */ WorkExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);



function WorkExperienceComponent_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
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
  }
  if (rf & 2) {
    const company_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", company_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.puesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.descripcion);
  }
}
function WorkExperienceComponent_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkExperienceComponent_8_ng_template_0_Template, 8, 4, "ng-template", 6);
  }
}
class WorkExperienceComponent {
  constructor() {
    this.companys = [{
      logo: "./assets/images/valenetwork.jpg",
      puesto: "Programador Web",
      periodo: "2020 - Actual",
      descripcion: "Maquetación e integración de sitios web. Creación de maillings y configuración de los mismos."
    }, {
      logo: "./assets/images/clickspublicitarios.jpg",
      puesto: "Desarrollador Front-End",
      periodo: "2018 - 2020",
      descripcion: "Maquetación, integración y mantenimiento de sitios web."
    }, {
      //publicidad en línea
      logo: "./assets/images/publicidadenlinea.jpg",
      puesto: "Desarrollador Web",
      periodo: "2017 - 2019",
      descripcion: "Maquetación, integración, mantenimiento de sitios web."
    }, {
      logo: "./assets/images/anzen-digital.png",
      puesto: "Desarrollador Front-End",
      periodo: "2016 - 2017",
      descripcion: "Maquetación de prototipos para bancas empresariales y personales."
    }, {
      //grupo dara
      logo: "./assets/images/grupo-dara.jpg",
      puesto: "Coordinador de TI",
      periodo: "2014 - 2015",
      descripcion: "Mantenimiento de equipos de computo, sitios web e implementación de sistemas web."
    }, {
      logo: "./assets/images/innovattia.jpg",
      puesto: "Desarrollador Web",
      periodo: "2014 (Prácticas)",
      descripcion: "Maquetación, integración, mantenimiento de sitios web."
    }];
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
  ngOnInit() {}
  static #_ = this.ɵfac = function WorkExperienceComponent_Factory(t) {
    return new (t || WorkExperienceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WorkExperienceComponent,
    selectors: [["app-work-experience"]],
    decls: 9,
    vars: 2,
    consts: [["id", "experiencia", 1, "experiencia"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "slide", "card"], ["alt", "Content 1", 3, "src"]],
    template: function WorkExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "owl-carousel-o", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorkExperienceComponent_8_Template, 1, 0, null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.owlOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companys);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
    styles: [".experiencia[_ngcontent-%COMP%] {\n  background-color: var(--gray);\n  padding: 7% 0px;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 335px;\n  background-color: white;\n  padding: 30px 25px;\n  box-shadow: 0px 10px 19px -1px rgba(0, 0, 0, 0.24);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  border-radius: 10px;\n}\n@media (max-width: 480px) {\n  .card[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--blue-title);\n  font-weight: 700;\n  margin-top: 40px;\n  font-size: 30px;\n  height: 75px;\n}\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    height: 55px;\n  }\n}\n@media (max-width: 480px) {\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n    height: 50px;\n    margin-top: 25px;\n  }\n}\n.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 300;\n  font-size: 24px;\n  margin: 20px auto;\n}\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n  font-size: 20px;\n  height: 120px;\n}\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93b3JrLWV4cGVyaWVuY2Uvd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zYXNzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VDR0Esa0RERkE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FDaUVJO0VEMUVKO0lBV1EsZ0JBQUE7RUFFTjtBQUNGO0FBSUk7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRlI7QUNvREk7RUR4REE7SUFTUSxlQUFBO0lBQ0EsWUFBQTtFQURWO0FBQ0Y7QUM4Q0k7RUR4REE7SUFjUSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBQVY7QUFDRjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURSO0FDaUNJO0VEcENBO0lBT1EsZUFBQTtFQUFWO0FBQ0Y7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUZSO0FDc0JJO0VEeEJBO0lBT1EsZUFBQTtFQURWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbi5leHBlcmllbmNpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICAgIHBhZGRpbmc6IDclIDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMzBweCAyNXB4O1xyXG4gICAgQGluY2x1ZGUgYm94c2hhZG93KCAwcHggMTBweCAxOXB4IC0xcHggcmdiYSgwLDAsMCwwLjI0KSk7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIC8vIG1hcmdpbjowIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgaDN7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6dmFyKC0tYmx1ZS10aXRsZSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg3NjcpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGg1e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDozMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbjoyMHB4IGF1dG87XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6MTIwcHg7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
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

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map