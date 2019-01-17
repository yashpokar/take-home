import React from 'react';

const OverviewBoxes = props => (
	<div className="columns">
		{ props.children }
	</div>
);

const OverviewBox = props => (
	<div className="overview-box column box-shadow bg-white">
		<span className="overview-box__title">{ props.title }</span>

		<span className="overview-box__stat">
			{props.stat}

			<small className={ `overview-box__stat-in-percent${ ! props.movingUp ? ' is-moving-down' : ' is-moving-up' }` }>
				{ ! props.movingUp ? '↓' : '↑' } {props.percent}%
			</small>
		</span>

		<div className="overview-box__chart">
			Chart here
		</div>
	</div>
);

OverviewBox.defaultProps = {
	// Assuming moving false means moving down
	movingUp: false
};

export { OverviewBoxes, OverviewBox };
