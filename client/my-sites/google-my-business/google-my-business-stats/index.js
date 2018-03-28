/** @format */

/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { localize } from 'i18n-calypso';
import { connect } from 'react-redux';
import page from 'page';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import SectionHeader from 'components/section-header';
import Button from 'components/button';
import SidebarNavigation from 'my-sites/sidebar-navigation';
import Main from 'components/main';
import Card from 'components/card';
import StatsNavigation from 'blocks/stats-navigation';
import { recordTracksEvent } from 'state/analytics/actions';
import FormFieldset from 'components/forms/form-fieldset';
import FormSelect from 'components/forms/form-select';
import { createNotice } from 'state/notices/actions';
import NotEnoughData from './not-enough-data';

class Stats extends Component {
	static propTypes = {
		recordTracksEvent: PropTypes.func.isRequired,
		translate: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.createNotice( 'is-success', 'Connected to Google My Business' );
	}

	goBack = () => {
		page.back( `/google-my-business/${ this.props.siteId }` );
	};

	render() {
		const { translate } = this.props;
		const notEnoughData = true;
		return (
			<Main wideLayout>
				<SidebarNavigation title="Stats" />
				<div className="google-my-business-stats google-my-business">
					<StatsNavigation selectedItem={ 'google-my-business' } />

					<Card className="google-my-business-stats__details">
						<div className="google-my-business-stats__container">
							<img
								src="/calypso/images/google-my-business/cookies.png"
								className="google-my-business-stats__image"
								alt="gravatar"
							/>

							<div className="google-my-business-stats__text">
								<div className="google-my-business-stats__header">Cate's Cookies</div>
								<div className="google-my-business-stats__address">
									<div className="google-my-business-stats__listing-detail">
										345 North Avenue<br />Talihassee, FL 34342<br />USA
									</div>
								</div>
								<div className="google-my-business-stats__verified">
									<Gridicon icon="checkmark-circle" size={ 18 } /> Verified
								</div>
							</div>
						</div>

						<div className="google-my-business-stats__listing-button-wrapper">
							<Button
								className="google-my-business-stats__listing-button"
								href="https://business.google.com"
								target="_blank"
							>
								Update Listing
								<Gridicon icon="external" />
							</Button>
						</div>
					</Card>

					<div className="google-my-business-stats__data-group">
						<div className="google-my-business-stats__data-box">
							<SectionHeader label={ translate( 'How customers search for your business' ) } />
							<Card>
								<FormFieldset>
									<FormSelect className="google-my-business-stats__select">
										<option>{ translate( '1 week' ) }</option>
										<option>{ translate( '1 month' ) }</option>
										<option>{ translate( '1 quarter' ) }</option>
									</FormSelect>
								</FormFieldset>
								<div className="google-my-business-stats__searches">
									<div className="google-my-business-stats__searches-data">
										<img
											src="/calypso/images/google-my-business/pie-chart.svg"
											alt="Pie chart"
											className="google-my-business-stats__searches-pie-chart"
										/>
										<div className="google-my-business-stats__stat-title">451 Total searches</div>
									</div>
									<div className="google-my-business-stats__searches-data">
										<div className="google-my-business-stats__search-type">
											<span className="google-my-business-stats__search-type-direct" />
											Direct<br />
											362 (60%)<br />
											<span className="google-my-business-stats__search-type-description">
												Customers who find your listing searching for your business name or address
											</span>
										</div>

										<div className="google-my-business-stats__search-type">
											<span className="google-my-business-stats__search-type-discovery" />
											Discovery<br />
											89 (40%)<br />
											<span className="google-my-business-stats__search-type-description">
												Customers who find your listing searching for a category, product, or
												service
											</span>
										</div>
									</div>
								</div>
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<Card>
								<div className="google-my-business-stats__feature">
									<img
										src="/calypso/images/google-my-business/reviews.svg"
										className="google-my-business-stats__feature-image"
									/>
									<p>
										Listings with recent photos typically drive more view to their business
										websites.
									</p>
								</div>
								<Button primary className="google-my-business-stats__feature-button">
									Post Photos
									<Gridicon icon="external" />
								</Button>
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<SectionHeader
								label={ translate( 'Where your customers view your business on Google' ) }
							/>
							<Card>
								<p className="google-my-business-stats__description">
									The Google services that customers use to find your business
								</p>
								<FormFieldset>
									<FormSelect className="google-my-business-stats__select">
										<option>{ translate( '1 week' ) }</option>
										<option>{ translate( '1 month' ) }</option>
										<option>{ translate( '1 quarter' ) }</option>
									</FormSelect>
								</FormFieldset>
								<div className="google-my-business-stats__stat-title">451 total views</div>
								<img src="/calypso/images/google-my-business/views.svg" />
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<SectionHeader label={ translate( 'Customer actions' ) } />
							<Card>
								<p className="google-my-business-stats__description">
									The most common actions that customers take on your listing
								</p>
								<FormFieldset>
									<FormSelect className="google-my-business-stats__select">
										<option>{ translate( '1 week' ) }</option>
										<option>{ translate( '1 month' ) }</option>
										<option>{ translate( '1 quarter' ) }</option>
									</FormSelect>
								</FormFieldset>
								<div className="google-my-business-stats__stat-title">451 total actions</div>
								<img src="/calypso/images/google-my-business/actions.svg" />
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<Card>
								<div className="google-my-business-stats__feature">
									<img
										src="/calypso/images/google-my-business/complete-listing.svg"
										className="google-my-business-stats__feature-image"
									/>
									<p className="google-my-business-stats__description">
										Complete business listings get on average 7x more clicks than empty listings.
									</p>
								</div>
								<Button primary className="google-my-business-stats__feature-button">
									Complete your listing
									<Gridicon icon="external" />
								</Button>
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<SectionHeader label={ translate( 'Driving direction results' ) } />
							<Card>
								<p className="google-my-business-stats__description">
									The places where customers request driving directions to your business.
								</p>
								{ ! notEnoughData && (
									<FormFieldset>
										<FormSelect className="google-my-business-stats__select">
											<option>{ translate( '1 week' ) }</option>
											<option>{ translate( '1 month' ) }</option>
											<option>{ translate( '1 quarter' ) }</option>
										</FormSelect>
									</FormFieldset>
								) }
								<NotEnoughData />
								<div className="google-my-business-stats__not-enough-data-description">
									{ translate(
										'Once customers start requesting driving details these stats will appear here'
									) }
								</div>
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<SectionHeader label={ translate( 'Phone Calls' ) } />
							<Card>
								<p className="google-my-business-stats__description">
									When and how many times customers call your business
								</p>
								{ ! notEnoughData && (
									<FormFieldset>
										<FormSelect className="google-my-business-stats__select">
											<option>{ translate( 'Time of day' ) }</option>
											<option>{ translate( 'Day of week' ) }</option>
										</FormSelect>
										<FormSelect className="google-my-business-stats__select">
											<option>{ translate( '1 week' ) }</option>
											<option>{ translate( '1 month' ) }</option>
											<option>{ translate( '1 quarter' ) }</option>
										</FormSelect>
									</FormFieldset>
								) }
								<NotEnoughData />
								<div className="google-my-business-stats__not-enough-data-description">
									{ translate(
										'Once customers start calling you from Google these stats will appear here'
									) }
								</div>
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<Card>
								<div className="google-my-business-stats__feature">
									<img
										src="/calypso/images/google-my-business/compare.svg"
										className="google-my-business-stats__feature-image"
									/>
									<p>
										Customers compare business listings on Google to make decisions. Make your
										listing count.
									</p>
								</div>
								<Button primary className="google-my-business-stats__feature-button">
									Complete Your Listing
									<Gridicon icon="external" />
								</Button>
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<SectionHeader label={ translate( 'Return customers' ) } />
							<Card>
								<p className="google-my-business-stats__description">
									How many customers return to your website?
								</p>
								{ ! notEnoughData && (
									<FormFieldset>
										<FormSelect className="google-my-business-stats__select">
											<option>{ translate( '1 week' ) }</option>
											<option>{ translate( '1 month' ) }</option>
											<option>{ translate( '1 quarter' ) }</option>
										</FormSelect>
									</FormFieldset>
								) }
								<NotEnoughData />
								<div className="google-my-business-stats__not-enough-data-description">
									{ translate(
										'Once customers start returning to your website, stats will appear here'
									) }
								</div>
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<SectionHeader label={ translate( 'Popular times' ) } />
							<Card>
								<p className="google-my-business-stats__description">
									The most popular times for your customers to visit your website.
								</p>
								{ ! notEnoughData && (
									<FormFieldset>
										<FormSelect className="google-my-business-stats__select">
											<option>{ translate( '1 week' ) }</option>
											<option>{ translate( '1 month' ) }</option>
											<option>{ translate( '1 quarter' ) }</option>
										</FormSelect>
									</FormFieldset>
								) }
								<NotEnoughData />
								<div className="google-my-business-stats__not-enough-data-description">
									{ translate(
										'Once customers start visiting your website, these stats will appear here'
									) }
								</div>
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<SectionHeader label={ translate( 'Photo views' ) } />
							<Card>
								<p className="google-my-business-stats__description">
									The number of times your business photos have been viewed, compared to photos from
									other businesses.
								</p>
								<FormFieldset>
									<FormSelect className="google-my-business-stats__select">
										<option>{ translate( '1 week' ) }</option>
										<option>{ translate( '1 month' ) }</option>
										<option>{ translate( '1 quarter' ) }</option>
									</FormSelect>
								</FormFieldset>
								<img src="/calypso/images/google-my-business/bar-chart.svg" />
							</Card>
						</div>

						<div className="google-my-business-stats__data-box">
							<SectionHeader label={ translate( 'Photo quantity' ) } />
							<Card>
								<p className="google-my-business-stats__description">
									The number of photos that appear on your business, compared to photos from other
									businesses.
								</p>
								<FormFieldset>
									<FormSelect className="google-my-business-stats__select">
										<option>{ translate( '1 week' ) }</option>
										<option>{ translate( '1 month' ) }</option>
										<option>{ translate( '1 quarter' ) }</option>
									</FormSelect>
								</FormFieldset>
								<img src="/calypso/images/google-my-business/bar-chart.svg" />
							</Card>
						</div>
					</div>

					<Card>
						<p>
							{ translate(
								'The information you see here may only be accessed for use by this organization. You agree to not attempt to use Insights to track or collect personally identifiable information of any users. Values are approximate and only significant values may be shown. Learn More'
							) }
						</p>
					</Card>
				</div>
			</Main>
		);
	}
}

export default connect( undefined, { recordTracksEvent, createNotice } )( localize( Stats ) );