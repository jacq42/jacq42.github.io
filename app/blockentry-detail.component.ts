/**
 * Ansicht für einen Blockeintrag
 */

import { Component, Input } from '@angular/core';

import { Blockentry } from './blockentry';

@Component({
	selector: 'blockentry-detail',
	templateUrl : 'html/blockentry.html',
	styleUrls: ['css/blockentry.css']
})

export class BlockentryDetailComponent {
	@Input()
	blockentry: Blockentry;
}