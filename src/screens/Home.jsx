import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Sidebar, SidebarItem } from './../components/layouts/Sidebar';
import { Table, Column } from './../components/layouts/Table';
import { OverviewBoxes, OverviewBox } from './../components/dashboard/OverviewBox';
import { Country, Countries } from './../components/dashboard/Map';
import Select from './../components/form/Select';

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
import avatarOne from './../assets/images/avatar-1.png';
import avatarSecond from './../assets/images/avatar-2.png';
import avatarThird from './../assets/images/avatar-3.png';

export default class Home extends Component {
	state = {
		notifications: [
			{ image: avatarOne, name: 'David Lee', when: '4 mins ago' },
			{ image: avatarSecond, name: 'Alex Jhonshon', when: '4 mins ago' },
			{ image: avatarThird, name: 'Robert Grant', when: '4 mins ago' },
		],
		isNotificationOpen: false,
		garphOption: 1,
		referrerData: [
			{
				location: 'adobe.com',
				views: 3648,
				sales: '4890',
				conversion: '45%',
				total: '$78.485',
			},
			{
				location: 'adobe.com',
				views: 3648,
				sales: '4890',
				conversion: '45%',
				total: '$78.485',
			},
			{
				location: 'adobe.com',
				views: 3648,
				sales: '4890',
				conversion: '45%',
				total: '$78.485',
			},
			{
				location: 'adobe.com',
				views: 3648,
				sales: '4890',
				conversion: '45%',
				total: '$78.485',
			},
			{
				location: 'adobe.com',
				views: 3648,
				sales: '4890',
				conversion: '45%',
				total: '$78.485',
			},
		],
		topProducts: [
			{
				product: {
					image: 'http://ecx.images-amazon.com/images/I/41SB89Ne2tL._SS40_.jpg',
					name: 'Women’s Vintage Peacoat',
				},
				availability: 320,
				total: '$29,192',
			},
			{
				product: {
					image: 'http://ecx.images-amazon.com/images/I/41SB89Ne2tL._SS40_.jpg',
					name: 'Women’s Vintage Peacoat',
				},
				availability: 320,
				total: '$29,192',
			},
			{
				product: {
					image: 'http://ecx.images-amazon.com/images/I/41SB89Ne2tL._SS40_.jpg',
					name: 'Women’s Vintage Peacoat',
				},
				availability: 0,
				total: '$29,192',
			},
			{
				product: {
					image: 'http://ecx.images-amazon.com/images/I/41SB89Ne2tL._SS40_.jpg',
					name: 'Women’s Vintage Peacoat',
				},
				availability: 3,
				total: '$29,192',
			},
		],
	}

	garphOptions = [
		'Last 3 months',
		'Last 6 months',
		'Last 8 months',
		'Last 12 months',
		'Last 2 years',
	]

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
														src={ notification.image }
														alt={ notification.name }
														className="navigation__widgets-item__dropdown-menu__item-icon"/>

													<span className="navigation__widgets-item__dropdown-menu__item-message">
														<span className="navigation__widgets-item__dropdown-menu__item-message__username">
															{ notification.name }
														</span> sent you a message.
													</span>

													<span className="navigation__widgets-item__dropdown-menu__item-time">{ notification.when }</span>
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
					<SidebarItem icon={home} name="Home" href="/" />
					<SidebarItem icon={chart} name="Dashboard" href="/dashboard" />
					<SidebarItem icon={receipt} name="Invoices" href="/invoices" isActive />
					<SidebarItem icon={home} name="Inbox" href="/inbox" />
					<SidebarItem icon={product} name="Products" href="/products" />
					<SidebarItem icon={single} name="Customers" href="/customers" />
					<SidebarItem icon={chat} name="Chat Room" href="/chat" />
					<SidebarItem icon={calender} name="Calender" href="/calender" />
					<SidebarItem icon={support} name="Help Center" href="/support" />
				</Sidebar>

				<section className="content">
					<span id="page-title">Overview</span>

					<OverviewBoxes>
						<OverviewBox title="Total Views" stat="246K" percent="13.8" movingUp />
						<OverviewBox title="Products Sold" stat="756" percent="13.8" />
						<OverviewBox title="Total Earnings" stat="$36K" percent="13.8" movingUp />
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
								<Table rows={this.state.topProducts}>
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
					</div>
				</section>
			</div>
		)
	}
}
