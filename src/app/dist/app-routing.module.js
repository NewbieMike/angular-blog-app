"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./pages/home/home.component");
var single_category_component_1 = require("./pages/single-category/single-category.component");
var single_post_component_1 = require("./pages/single-post/single-post.component");
var about_us_component_1 = require("./pages/about-us/about-us.component");
var terms_and_conditions_component_1 = require("./pages/terms-and-conditions/terms-and-conditions.component");
var contact_us_component_1 = require("./pages/contact-us/contact-us.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'category', component: single_category_component_1.SingleCategoryComponent },
    { path: 'post', component: single_post_component_1.SinglePostComponent },
    { path: 'about', component: about_us_component_1.AboutUsComponent },
    { path: 'term-conditions', component: terms_and_conditions_component_1.TermsAndConditionsComponent },
    { path: 'contact', component: contact_us_component_1.ContactUsComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
