/** @format */

/**
 * External dependencies
 */

import React, { Component } from 'react';
import notices from 'notices';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Gridicon from 'gridicons';
import WordadsActions from 'lib/ads/actions';
import { requestWordadsEarnings } from 'state/wordads/earnings/actions';
import EarningsStore from 'lib/ads/earnings-store';
import { getSelectedSite, getSelectedSiteId, getSelectedSiteSlug } from 'state/ui/selectors';
import canCurrentUser from 'state/selectors/can-current-user';
import { isRequestingWordadsEarnings } from 'state/wordads/earnings/selectors';
import { isJetpackSite } from 'state/sites/selectors';
import QueryWordadsEarnings from 'components/data/query-wordads-earnings';

class AdsFormEarnings extends Component {
	render() {
		const { translate } = this.props;
		const siteId = getSelectedSiteId( state );
		const infoIcon = true ? 'info' : 'info-outline',
			classes = classNames( 'earnings_breakdown', {
				'is-showing-info': 'yes', //this.state.showEarningsNotice,
			} );

		return (
			<div>
				<QueryWordadsEarnings siteId={ siteId } />
			</div>
		);
	}
}

export default localize( AdsFormEarnings );
