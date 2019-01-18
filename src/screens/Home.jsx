import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

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
import newUser from './../assets/images/New customer Icon.svg';

export default class Home extends Component {
	state = {
		notifications: [],
		isNotificationOpen: false,
		garphOption: 'Last 6 months',
		referrerData: [],
		topProducts: [],
		quickDetails: [],
		firstChartData: [0, 0, 0, 0, 0, 0],
		secondChartsData: [0, 0, 0, 0, 0, 0],
		totalViews: { stat: '0', percent: '0%', data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], movingUp: true },
		productsSold: { stat: '0', percent: '0%', data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], movingUp: true },
		totalEarnings: { stat: '0', percent: '0%', data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], movingUp: true },
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

	garphOptions = {
		3: 'Last 3 months',
		6: 'Last 6 months',
		8: 'Last 8 months',
		12: 'Last 12 months',
		24: 'Last 2 years',
	}

	askForChartsData () {
		axios.get('https://take-home-rest.herokuapp.com/charts.php', { params: { duration: this.state.garphOption } })
			.then(({data}) => {
				const [firstChartData, secondChartsData] = data.statistics;

				this.setState({ firstChartData, secondChartsData, ...data.cards });
			})
			.catch(error => console.log(error));
	}

	onPeriodChange = (e) => {
		const garphOption = e.target.value;

		this.setState({ garphOption }, () => {
			this.askForChartsData();
		});
	}

	componentDidMount () {
		axios.get('https://take-home-rest.herokuapp.com/')
			.then(({data}) => {
				const { topProducts, referrer, notifications, quickDetails } = data;

				this.setState({ topProducts, referrerData: referrer, notifications, quickDetails });
			})
			.catch(error => console.log(error));

		// Load chart data initially
		this.askForChartsData();
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
								<div className={ `navigation__widgets-item__dropdown animated${ isNotificationOpen ? ' is-active flipInY' : '' }` }>
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
							color="#8fe5fd"
							title="Total Views"
							{ ...this.state.totalViews }
							 />
						<OverviewBox
							color="#bab8fc"
							title="Products Sold"
							{ ...this.state.productsSold } />
						<OverviewBox
							color="#8eeabc"
							title="Total Earnings"
							{ ...this.state.totalEarnings } />
					</OverviewBoxes>

					<div className="columns">
						<div className="column clearfix bg-white box-shadow">
							<span className="dashboard-card-title">Statistics</span>

							<div className="float-right">
								<Select
									onChange={ this.onPeriodChange }
									options={this.garphOptions}
									defaultValue={this.state.garphOption} />
							</div>

							<div className="dashboard-card-content" id="statistics-chart-container">
								<Line
									height={60}
									datasetKeyProvider={ ({index}) => index }
									data={{
										labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
									  	datasets: [
										    {
												fill: true,
												backgroundColor: 'rgba(93, 217, 253, 0.4)',
												borderColor: 'rgba(93, 217, 253, 1)',
												borderCapStyle: 'butt',
												borderDash: [],
												borderDashOffset: 0.0,
												borderJoinStyle: 'miter',
												pointBorderColor: 'rgba(75,192,192,1)',
												pointBackgroundColor: '#fff',
												pointBorderWidth: 1,
												pointHoverRadius: 5,
												pointHoverBackgroundColor: 'rgba(75,192,192,1)',
												pointHoverBorderColor: 'rgba(220,220,220,1)',
												pointHoverBorderWidth: 2,
												pointRadius: 1,
												pointHitRadius: 10,
												data: this.state.firstChartData,
												index: 0,
											},
										    {
												fill: true,
												backgroundColor: 'rgba(168, 165, 251, 0.4)',
												borderColor: 'rgba(168, 165, 251, 1)',
												borderCapStyle: 'butt',
												borderDash: [],
												borderDashOffset: 0.0,
												borderJoinStyle: 'miter',
												pointBorderColor: 'rgba(75,192,192,1)',
												pointBackgroundColor: '#fff',
												pointBorderWidth: 1,
												pointHoverRadius: 5,
												pointHoverBackgroundColor: 'rgba(168, 165, 251, 1)',
												pointHoverBorderColor: 'rgba(220,220,220,1)',
												pointHoverBorderWidth: 2,
												pointRadius: 1,
												pointHitRadius: 10,
												data: this.state.secondChartsData,
												index: 1,
											},
										]
									}}
									options={{
										legend: false,
										scales: {
									        xAxes: [{
									        	gridLines: {
									        		color: '#eee'
									        	},
									        	ticks: {
									        		fontColor: 'rgba(67, 66, 93, .5)',
									        		fontSize: 11,
									        		fontFamily: 'Source Sans Pro',
									        	}
									        }],
									        yAxes: [{
									        	gridLines: {
									        		color: '#eee'
									        	},
									        	ticks: {
									        		fontColor: 'rgba(67, 66, 93, .5)',
									        		fontSize: 11,
									        		fontFamily: 'Source Sans Pro',
									        		min: 5,
									        		max: 25,
									        		stepSize: 5,
									        		callback: (label, index, labels) => `$${label}k`,
									        	}
									        }]
									    }
									}}
								/>
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
								{
									this.state.quickDetails.map((quickDetail, i) => (
										<QuickDetail {...quickDetail} image={ newUser } key={i} />
									))
								}
							</ul>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
