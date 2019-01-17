import React from 'react';
import { Bar } from 'react-chartjs-2';

const OverviewBoxes = props => (
	<div className="columns">
		{ props.children }
	</div>
);

class OverviewBox extends React.Component {
	get data () {
		return  {
		  	labels: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
		  	datasets: [
		    {
				fill: false,
				lineTension: 0.5,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
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
				data: this.props.data,
		    }
		  ]
		}
	}

	render () {
		return (
			<div className="overview-box column box-shadow bg-white">
				<span className="overview-box__title">{ this.props.title }</span>

				<span className="overview-box__stat">
					{this.props.stat}

					<small className={ `overview-box__stat-in-percent${ ! this.props.movingUp ? ' is-moving-down' : ' is-moving-up' }` }>
						{ ! this.props.movingUp ? '↓' : '↑' } {this.props.percent}
					</small>
				</span>

				<div className="overview-box__chart">
					<Bar ref="chart" data={this.data} options={{
						legend: false,
						scales: {
					        xAxes: [{
					        	categoryPercentage: 1,
					            gridLines: {
					                color: "rgba(0, 0, 0, 0)",
					                display: false,
					            },
					        }],
					        yAxes: [{
					            gridLines: {
					                color: "rgba(0, 0, 0, 0)",
					                display: false,
					            },
						        ticks: {
						            display: false
						        }
					        }]
					    }
					}} />
				</div>
			</div>
		);
	}
}

OverviewBox.defaultProps = {
	// Assuming moving false means moving down
	movingUp: false
};

export { OverviewBoxes, OverviewBox };
