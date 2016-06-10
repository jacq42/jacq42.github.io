/**
 * Ansicht f�r einen Blockeintrag
 */
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
var blockentry_1 = require('./blockentry');
var BlockentryDetailComponent = (function () {
    function BlockentryDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', blockentry_1.Blockentry)
    ], BlockentryDetailComponent.prototype, "blockentry", void 0);
    BlockentryDetailComponent = __decorate([
        core_1.Component({
            selector: 'blockentry-detail',
            templateUrl: 'html/blockentry.html',
            styleUrls: ['css/blockentry.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BlockentryDetailComponent);
    return BlockentryDetailComponent;
}());
exports.BlockentryDetailComponent = BlockentryDetailComponent;
//# sourceMappingURL=blockentry-detail.component.js.map