import React from 'react';

class Select extends React.Component {
	state = { isActive: false }

	onClickOutSideElement = e => {
		if (this.state.isActive && this.refs.options && ! this.refs.options.contains(e.target)) {
			this.setState({ isActive: false });
		}
	}

	componentDidMount () {
		// Bad dom manuplation
		document.addEventListener('mousedown', this.onClickOutSideElement);
	}

	componentWillUnmount () {
		document.removeEventListener('mousedown', this.onClickOutSideElement);
	}

	toggleOptions = e => {
		e.preventDefault();

		this.setState({ isActive: ! this.state.isActive });
	}

	render () {
		return (
			<ul
				className={ `options${ this.state.isActive ? ' is-active' : '' }` }
				onClick={ this.toggleOptions }
				ref="options">
				{
					this.props.options.map((option, i) =>
						<li
							onClick={ this.props.selected !== i ? () => this.props.onChange(i) : () => {} }
							key={i}
							className={ `option${ this.props.selected === i ? ' is-selected' : '' }` }
						>
							{ option }
						</li>
					)
				}
			</ul>
		);
	}
}

Select.defaultProps = {
	selected: 0,
	onChange: e => e.preventDefault(),
};

export default Select;
