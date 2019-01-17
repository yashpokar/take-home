import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Sidebar, SidebarItem } from './../components/layouts/Sidebar';
import { Table, Column } from './../components/layouts/Table';
import { OverviewBoxes, OverviewBox } from './../components/dashboard/OverviewBox';
import { Country, Countries } from './../components/dashboard/Map';
import Select from './../components/form/Select';
import QuickDetail from './../components/dashboard/QuickDetail';

import axios from 'axios';

import MapImage from './../assets/images/Map.svg';
import home from './../assets/images/house.svg';
import calender from './../assets/images/Calendar.svg';
import product from './../assets/images/barcode.svg';
import support from './../assets/images/Support Iocn.svg';
import chart from './../assets/images/chart-bar-32.svg';
import chat from './../assets/images/chat-46.svg';
import receipt from './../assets/images/receipt-list-42.svg';
import single from './../assets/images/single-02.svg';
import search from './../assets/images/Search Icon.svg';
import messages from './../assets/images/Path 9.svg';
import notify from './../assets/images/Notification Icon.svg';
import avatar from './../assets/images/Avatar.png';
import remove from './../assets/images/circle-remove.svg';
import time from './../assets/images/time-countdown.svg';
import process_ from './../assets/images/Process.svg';
import alertCircle from './../assets/images/alert-circle-exc.svg';
import newUserIcon from './../assets/images/New customer Icon.svg';

export default class Home extends Component {
	state = {
		notifications: [],
		isNotificationOpen: false,
		garphOption: 1,
		referrerData: [],
		topProducts: [],
		totalViews: { value: '', percent: '', movingUp: false },
		productsSold: { value: '', percent: '', movingUp: true },
		totalEarnings: { value: '', percent: '', movingUp: false },
	}

	sidebarItems = [
		{ icon: home, name: 'Home', href: '/', isActive: true },
		{ icon: chart, name: 'Dashboard', href: '/dashboard' },
		{ icon: receipt, name: 'Invoices', href: '/invoices' },
		{ icon: home, name: 'Inbox', href: '/inbox' },
		{ icon: product, name: 'Products', href: '/products' },
		{ icon: single, name: 'Customers', href: '/customers' },
		{ icon: chat, name: 'Chat Room', href: '/chat' },
		{ icon: calender, name: 'Calender', href: '/calender' },
		{ icon: support, name: 'Help Center', href: '/support' },
	]

	garphOptions = [
		'Last 3 months',
		'Last 6 months',
		'Last 8 months',
		'Last 12 months',
		'Last 2 years',
	]

	componentDidMount () {
		axios.get('https://take-home-rest.herokuapp.com/')
			.then(({data}) => {
				const { topProducts, referrer, cards, notifications } = data;

				this.setState({ topProducts, referrerData: referrer, notifications, ...cards });
			})
			.catch(error => console.log(error))
	}

	closeAllThePopovers = e => {
		// close notification bar
		if (! this.refs.notificationMenu.contains(e.target)) {
			this.setState({ isNotificationOpen: false });
		}
	}

	render () {
		const { notifications, isNotificationOpen } = this.state;

		return (
			<div className="container" onClick={ this.closeAllThePopovers }>
				<nav className="navigation">
					<Link className="navigation__title" to='/'>IMPEKABLE</Link>

					<div className="navigation__search">
						<img src={ search } alt="Search" className="navigation__search-icon"/>

						<input type="text" className="navigation__search-box" placeholder="Search transactions, invoices or help" />
					</div>

					<ul className="navigation__widgets">
						<li className="navigation__widgets-item">
							<Link className="navigation__widgets-item__link" to="/support">
								<img src={ support } alt="Help" className="navigation__widgets-item__link-icon"/>
							</Link>
						</li>

						<li className="navigation__widgets-item">
							<Link className="navigation__widgets-item__link" to="/messages">
								<img src={ messages } alt="Messages" className="navigation__widgets-item__link-icon"/>
							</Link>
						</li>

						<li className="navigation__widgets-item" ref="notificationMenu">
							<Link
								className="navigation__widgets-item__link"
								to="/notifications"
								onClick={ () => this.setState({ isNotificationOpen: ! isNotificationOpen }) }>
								<img
									src={ notify }
									alt="Notification"
									className="navigation__widgets-item__link-icon"
								/>

								<span className="badge badge--orange" />
							</Link>

							{
								notifications.length ?
								<div className={ `navigation__widgets-item__dropdown${ isNotificationOpen ? ' is-active' : '' }` }>
									<span className="navigation__widgets-item__dropdown-title">Notifications</span>

									<ul className="navigation__widgets-item__dropdown-menu">
										{
											notifications.map((notification, i) => (
												<li className="navigation__widgets-item__dropdown-menu__item" key={i}>
													<img
														src={ notification.user.avatar }
														alt={ notification.user.name }
														className="navigation__widgets-item__dropdown-menu__item-icon"/>

													<span className="navigation__widgets-item__dropdown-menu__item-message">
														<span className="navigation__widgets-item__dropdown-menu__item-message__username">
															{ notification.user.name }
														</span> sent you a message.
													</span>

													<span className="navigation__widgets-item__dropdown-menu__item-time">{ notification.on }</span>
												</li>
											))
										}

									</ul>

									<Link className="navigation__widgets-item__dropdown-footer" to="/notifications">
										View all notifications
									</Link>
								</div>
								: null
							}
						</li>

						<span className="navigation__widgets--divider" />

						<li className="navigation__widgets-item navigation__widgets-item--profile">
							<Link className="navigation__widgets-item__link" to="/profile">
								<span className="navigation__widgets-item__link-username">
									Jhon Doe

									<i className="caret caret--down ml-10"></i>
								</span>

								<img src={ avatar } alt="Jhon Doe" className="navigation__widgets-item__link-icon"/>
							</Link>
						</li>
					</ul>
				</nav>

				<Sidebar>
					{
						this.sidebarItems.map((sidebarItem, i) => (
							<SidebarItem {...sidebarItem} isActive={ this.props.location.pathname === sidebarItem.href } key={i} />
						))
					}
				</Sidebar>

				<section className="content">
					<span id="page-title">Overview</span>

					<OverviewBoxes>
						<OverviewBox
							title="Total Views"
							stat={ this.state.totalViews.value }
							percent={ this.state.totalViews.percent }
							movingUp={ this.state.totalViews.movingUp === true } />
						<OverviewBox
							title="Products Sold"
							stat={ this.state.productsSold.value }
							percent={ this.state.productsSold.percent }
							movingUp={ this.state.productsSold.movingUp === true } />
						<OverviewBox
							title="Total Earnings"
							stat={ this.state.totalEarnings.value }
							percent={ this.state.totalEarnings.percent }
							movingUp={ this.state.totalEarnings.movingUp === true } />
					</OverviewBoxes>

					<div className="columns">
						<div className="column clearfix bg-white box-shadow">
							<span className="dashboard-card-title">Statistics</span>

							<div className="float-right">
								<Select
									onChange={ (garphOption) => this.setState({ garphOption }) }
									options={this.garphOptions}
									selected={this.state.garphOption} />
							</div>
						</div>
					</div>

					<div className="columns">
						<div className="column bg-white box-shadow">
							<span className="dashboard-card-title">Referrer</span>

							<div className="dashboard-card-content">
								<Table rows={this.state.referrerData} hasMore>
									<Column name="location" />
									<Column name="views" />
									<Column name="sales" />
									<Column name="conversion" />
									<Column name="total" />
								</Table>
							</div>
						</div>

						<div className="column column--quarter bg-white box-shadow">
							<span className="dashboard-card-title">Details on Map</span>

							<span className="dashboard-card-subtitle float-right">Show All List</span>

							<img src={ MapImage } alt="Map" className="map" />

							<Countries>
								<Country name="Canada" revenue="$379.54" color="purple" />
								<Country name="Brazil" revenue="$379.54" color="green" />
								<Country name="Egypt" revenue="$379.54" color="orange" />
								<Country name="Russia" revenue="$379.54" color="pink" />
								<Country name="China" revenue="$379.54" color="green" />
								<Country name="Australia" revenue="$379.54" color="red" />
							</Countries>
						</div>
					</div>

					<div className="columns">
						<div className="column bg-white box-shadow">
							<span className="dashboard-card-title">Top Products</span>

							<div className="dashboard-card-content">
								<Table rows={this.state.topProducts} hasMore>
									<Column
										name="product"
										cell={ product =>
											<td>
												<div className="flex middle">
													<img src={ product.image } alt={ product.name } className="border" />

													<span className="block ml-10">{ product.name }</span>
												</div>
											</td>
										} />
									<Column name="availability" cell={
										availability =>
										<td>
											<span className={ `chip chip--${ ! availability ? 'red' : availability > 10 ? 'green' : 'orange' }` }>
												{ availability ? `${availability} in Stock` : 'Out of Stock' }
											</span>
										</td>
									} />
									<Column name="total" />
								</Table>
							</div>
						</div>

						<div className="column column--quarter bg-white box-shadow">
							<span className="dashboard-card-title">Quick Details</span>

							<ul className="quick-details">
								<QuickDetail
									bg="purple"
									duration="Last 24 Hours"
									about="290 New Customers"
									image={ newUserIcon } />

								<QuickDetail
									bg="green"
									duration="Awaiting Process"
									about="490 Orders"
									image={ process_ } />

								<QuickDetail
									bg="pink"
									duration="On Hold"
									about="120 Orders"
									image={ time } />

								<QuickDetail
									bg="orange"
									duration="Low in Stock"
									about="490 Orders"
									image={ alertCircle } />

								<QuickDetail
									bg="red"
									duration="Out of Stock"
									about="42 Items"
									image={ remove } />
							</ul>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
