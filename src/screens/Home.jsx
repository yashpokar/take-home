import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Sidebar, SidebarItem } from './../components/layouts/Sidebar';

import home from './../assets/images/house.svg';
import calender from './../assets/images/Calendar.svg';
import product from './../assets/images/barcode.svg';
import support from './../assets/images/Support Iocn.svg';
import chart from './../assets/images/chart-bar-32.svg';
import chat from './../assets/images/chat-46.svg';
import receipt from './../assets/images/receipt-list-42.svg';
import single from './../assets/images/single-02.svg';
// import messages from './../assets/images/Path 9.svg';
// import avatar from './../assets/images/Avatar.png';
// import notify from './../assets/images/Notification Icon.svg';
// import search from './../assets/images/Search Icon.svg';

export default class Home extends Component {
	render () {
		return (
			<div className="container">
				<nav className="navigation">
					<Link className="navigation__title" to='/'>IMPEKABLE</Link>
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
			</div>
		)
	}
}
