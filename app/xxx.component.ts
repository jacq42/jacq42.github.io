/**
 * xxx
 **/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'xxx',
	template : 'Xxx'
})

export class XxxComponent implements OnInit {
	
	constructor(private router: Router) {
		console.log("XXX");
	}
	
	ngOnInit() {
		this.router.navigate(['/xxx']);
	}
}