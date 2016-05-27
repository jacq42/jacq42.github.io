/**
 * Navigationsleiste
 **/

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavItem } from './navitem';

@Component({
	selector: 'codenav',
	templateUrl : 'html/nav.html',
	directives: [ROUTER_DIRECTIVES]
})

export class NavComponent implements OnInit { 
	title = 'Codeblock';
	items = NAVITEMS;
	selectedItem: NavItem;
	
	/**
	 * Auswahl eines Navigationspunktes
	 */
	onSelect(item : NavItem) {
		this.selectedItem = item;
		// CSS Klasse
		for(var itemIndex in this.items) {
			NAVITEMS[itemIndex].style = "";
		}
		this.selectedItem.style = "active";
	}
	
	ngOnInit() {
		
	}
}

export var NAVITEMS: NavItem[] = [
	  { "style": "active", "title": "Home", "routerLink" : ['/home'] },
	  { "style": "", "title": "About", "routerLink" : ['/about'] },
	  { "style": "", "title": "Xxx", "routerLink" : ['/xxx'] }
];