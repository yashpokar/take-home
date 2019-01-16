import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Sidebar, SidebarItem } from './../components/layouts/Sidebar';
import { OverviewBoxes, OverviewBox } from './../components/dashboard/OverviewBox';

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
		isNotificationOpen: false
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
														src={ notification.image }
														alt={ notification.name }
														className="navigation__widgets-item__dropdown-menu__item-icon"/>

													<span className="navigation__widgets-item__dropdown-menu__item-message">
														<span className="navigation__widgets-item__dropdown-menu__item-message__username">
															{ notifications.name }
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
								<span className="navigation__widgets-item__link-username">Jhon Doe</span>

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
						<div className="column bg-white box-shadow">

						</div>
					</div>
				</section>
			</div>
		)
	}
}
