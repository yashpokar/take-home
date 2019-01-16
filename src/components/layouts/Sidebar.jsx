import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = props => (
	<aside className="sidebar">
		<ul className="sidebar__menu">
			{ props.children }
		</ul>
	</aside>
);

const SidebarItem = props => (
	<li className={ `sidebar__menu-item${ props.isActive ? ' is-active' : '' }` }>
		<Link className="sidebar__menu-item__link" to={ props.href }>
			<img src={ props.icon } alt={ props.name } className="sidebar__menu-item__link-icon"/>

			<span className="sidebar__menu-item__link-text">{ props.name }</span>
		</Link>
	</li>
);

SidebarItem.propTypes = {
	href: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

SidebarItem.defaultProps = {
	isActive: false,
};

export { Sidebar, SidebarItem };
