/**
 * Liefert die Blockeinträge
 */

import { Injectable } from '@angular/core';

import { BLOCKENTRIES } from './mock-blockentries';

@Injectable()
export class BlockentryService {
	
	/**
	 * Liefert alle Blockeinträge
	 */
	getBlockentries() {
		return Promise.resolve(BLOCKENTRIES);
	}
	
	getBlockentriesSlowly() {
		return new Promise<Blockentry[]>(resolve => setTimeout(() => resolve(BLOCKENTRIES), 2000));
	}
}