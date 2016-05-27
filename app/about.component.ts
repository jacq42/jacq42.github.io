/**
 * About
 **/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'about',
	templateUrl : 'html/about.html'
})

export class AboutComponent implements OnInit {
	
	constructor(private router: Router) {
		console.log("About");
	}
	
	ngOnInit() {
		this.router.navigate(['/about']);
	}
}