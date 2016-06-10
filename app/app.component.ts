/**
 * Startpunkt der App
 **/

import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { OfftopicComponent } from './Offtopic.component';

@Component({
	selector: 'codeblock',
	templateUrl : 'html/app.html',
	directives: [NavComponent, ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

/**
 * Navigation
 */
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
    	path: '/offtopic',
    	component: OfftopicComponent
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