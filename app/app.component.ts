/**
 * Startpunkt der App
 **/

import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { XxxComponent } from './xxx.component';

@Component({
	selector: 'codeblock',
	templateUrl : 'html/app.html',
	directives: [NavComponent, ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

@Routes([
	{
		path: '/home',
		component: HomeComponent
	},        	
    {
    	path: '/about',
    	component: AboutComponent
    },
    {
    	path: '/xxx',
    	component: XxxComponent
    }
])

export class AppComponent implements OnInit {
	
	constructor(private router: Router) {
		console.log("App");
	}
	
	ngOnInit() {
		this.router.navigate(['/home']);
	}
}