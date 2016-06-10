/**
 * Navigationsleiste
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
var NavComponent = (function () {
    function NavComponent() {
        this.title = 'Codeblock';
        this.items = exports.NAVITEMS;
    }
    /**
     * Auswahl eines Navigationspunktes
     */
    NavComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        // CSS Klasse
        for (var itemIndex in this.items) {
            exports.NAVITEMS[itemIndex].style = "";
        }
        this.selectedItem.style = "active";
    };
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'codenav',
            templateUrl: 'html/nav.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
exports.NAVITEMS = [
    { "style": "active", "title": "Home", "routerLink": ['/home'] },
    { "style": "", "title": "About", "routerLink": ['/about'] },
    { "style": "", "title": "Offtopic", "routerLink": ['/offtopic'] }
];
//# sourceMappingURL=nav.component.js.map