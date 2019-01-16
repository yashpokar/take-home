import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render () {
		return (
			<div className="container">
				<nav className="navigation">
					<Link className="navigation__title" to='/'>IMPEKABLE</Link>
				</nav>

				<aside className="sidebar">
					aside
				</aside>
			</div>
		)
	}
}
