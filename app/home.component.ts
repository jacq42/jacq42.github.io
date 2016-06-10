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
	
	/**
	 * Holen aller Blockeinträge aus dem Service
	 */
	getBlockentries() {
		this.blockentryService.getBlockentries().then(blockentries => this.blockentries = blockentries);
	}
	
	onSelect(blockentry: Blockentry) {
		this.selectedBlockentry = blockentry;
	}
}