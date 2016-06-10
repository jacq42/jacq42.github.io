/**
 * Home
 **/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var blockentry_detail_component_1 = require('./blockentry-detail.component');
var blockentry_service_1 = require('./blockentry.service');
var HomeComponent = (function () {
    function HomeComponent(router, blockentryService) {
        this.router = router;
        this.blockentryService = blockentryService;
        console.log("Home Router and Service");
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/home']);
        this.getBlockentries();
    };
    /**
     * Holen aller Blockeintr�ge aus dem Service
     */
    HomeComponent.prototype.getBlockentries = function () {
        var _this = this;
        this.blockentryService.getBlockentries().then(function (blockentries) { return _this.blockentries = blockentries; });
    };
    HomeComponent.prototype.onSelect = function (blockentry) {
        this.selectedBlockentry = blockentry;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'html/home.html',
            styleUrls: ['css/home.css'],
            directives: [blockentry_detail_component_1.BlockentryDetailComponent],
            providers: [blockentry_service_1.BlockentryService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, blockentry_service_1.BlockentryService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map