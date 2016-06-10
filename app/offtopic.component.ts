/**
 * Abseits vom Coden
 **/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'offtopic',
	template : 'Abseits'
})

export class OfftopicComponent implements OnInit {
	
	constructor(private router: Router) {
		console.log("offtopic");
	}
	
	ngOnInit() {
		this.router.navigate(['/offtopic']);
	}
}