import React from 'react';

const Countries = props => (
	<ul className="countries">
		{ props.children }
	</ul>
);

const Country = props => (
	<li className="country">
		<i className={ `circle circle--${ props.color }` }></i>
		{ props.name }
		<span className="country__revenue">{ props.revenue }</span>
	</li>
);

export { Countries, Country };
