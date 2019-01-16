import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import home from './../assets/images/house.svg';
// import calender from './../assets/images/Calendar.svg';
// import product from './../assets/images/barcode.svg';
// import support from './../assets/images/Support Iocn.svg';
// import chart from './../assets/images/chart-bar-32.svg';
// import messages from './../assets/images/Path 9.svg';
// import chat from './../assets/images/chat-46.svg';
// import receipt from './../assets/images/receipt-list-42.svg';
// import avatar from './../assets/images/Avatar.png';
// import notify from './../assets/images/Notification Icon.svg';
// import search from './../assets/images/Search Icon.svg';
// import single from './../assets/images/single-02.svg';

export default class Home extends Component {
	render () {
		return (
			<div className="container">
				<nav className="navigation">
					<Link className="navigation__title" to='/'>IMPEKABLE</Link>
				</nav>

				<aside className="sidebar">
					<ul className="sidebar__menu">
						<li className="sidebar__menu-item">
							<Link className="sidebar__menu-item__link" to="/">
								<img src={ home } alt="Home" className="sidebar__menu-item__link-icon"/>

								<span className="sidebar__menu-item__link-text">Home</span>
							</Link>
						</li>

						<li className="sidebar__menu-item is-active">
							<Link className="sidebar__menu-item__link" to="/">
								<img src={ home } alt="Home" className="sidebar__menu-item__link-icon"/>

								<span className="sidebar__menu-item__link-text">Home</span>
							</Link>
						</li>

						<li className="sidebar__menu-item">
							<Link className="sidebar__menu-item__link" to="/">
								<img src={ home } alt="Home" className="sidebar__menu-item__link-icon"/>

								<span className="sidebar__menu-item__link-text">Home</span>
							</Link>
						</li>
					</ul>
				</aside>
			</div>
		)
	}
}
