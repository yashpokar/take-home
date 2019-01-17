import React from 'react';
import { Link } from 'react-router-dom';

class Table extends React.Component {
	state = { columns: [] }

	componentDidMount () {
		// TODO :: you can reduce the complexity by iterating columns once
		this.setState({
			columns: typeof this.props.children[Symbol.iterator] === 'function' ? this.props.children : [this.props.children],
		});
	}

	render () {
		const { columns } = this.state;

		return (
			<table className="table">
				<thead>
					<tr>
						{ columns.map((column, i) => <th key={i}>{ column.props.name }</th>) }
					</tr>
				</thead>

				<tbody>
					{
						this.props.rows.map((row, i) => (
							<tr key={i}>
								{
									columns.map((column, j) => {
										if (column.props.cell) {
											return (
												<React.Fragment key={j}>
													{column.props.cell(row[column.props.name])}
												</React.Fragment>
											);
										}

										return (
											<td key={j}>{ row[column.props.name] }</td>
										)
									})
								}
							</tr>
						))
					}
				</tbody>

				{
					this.props.hasMore === true ?
						<tfoot>
							<tr>
								<td colSpan={ columns.length }>
									<Link to="/more">Show More</Link>
								</td>
							</tr>
						</tfoot>
					: null
				}
			</table>
		);
	}
}

const Column = props => (
	<td>
		{ props.children }
	</td>
);

Table.defaultProps = {
	hasMore: false,
};

export { Table, Column };
