/**
 * Home
 **/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'home',
	templateUrl : 'html/home.html'
})

export class HomeComponent implements OnInit {
	
	constructor(private router: Router) {
		console.log("Home");
	}
	
	ngOnInit() {
		this.router.navigate(['/home']);
	}
}