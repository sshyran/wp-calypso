/** @format */

/**
 * External dependencies
 */

import { get } from 'lodash';

export function isRequestingWordadsEarnings( state, siteId ) {
	return !! state.wordads.earnings.fetchingItems[ siteId ];
}
