/**
 * Home
 **/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blockentry } from './blockentry';
import { BlockentryDetailComponent } from './blockentry-detail.component';
import { BlockentryService } from './blockentry.service';

@Component({
	selector: 'home',
	templateUrl : 'html/home.html',
	styleUrls: ['css/home.css'],
	directives: [BlockentryDetailComponent],
	providers: [BlockentryService]
})

export class HomeComponent implements OnInit {
	
	blockentries: Blockentry[];
	selectedBlockentry: Blockentry;

	constructor(private router: Router, private blockentryService: BlockentryService) {
		console.log("Home Router and Service");
	}
	
	ngOnInit() {
		this.router.navigate(['/home']);
		this.getBlockentries();
	}
	
	setBlockentries(blockentries: Blockentry[]) {
		this.blockentries = blockentries
		// TODO nur setzen, wenn noch kein Wert vorhanden ist -> sollte auch bei Seitenwechsel erhalten bleiben
		if(this.selectedBlockentry == null || this.selectedBlockentry === 'undefined') {
			this.selectedBlockentry = blockentries[0];
		}
	}
	
	/**
	 * Holen aller Blockeinträge aus dem Service
	 */
	getBlockentries() {
		this.blockentryService.getBlockentries().then(blockentries => this.setBlockentries(blockentries));
	}
	
	onSelect(blockentry: Blockentry) {
		this.selectedBlockentry = blockentry;
	}
}